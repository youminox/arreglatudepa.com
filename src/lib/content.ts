import fs from "node:fs";
import path from "node:path";
import categories from "@/data/categories.json";
import keywordMap from "@/data/keyword_map.json";

export const SITE_URL = "https://arreglatudepa.com";
export const SITE_NAME = "ArreglaTuDepa.com";
export const LEGAL_OWNER = "CARLOS LINGAN BORJA";
export const LEGAL_LOCATION = "Lima, Perú";
export const LEGAL_EMAIL = "info@charlielingan.com";
export const LEGAL_LINE =
  "Titular del sitio web: CARLOS LINGAN BORJA, domiciliado en Lima, Perú · Correo electrónico: info@charlielingan.com";
export const TOOLS_DISCLAIMER =
  "las marcas comerciales mencionadas (Amazon, DEWALT, XR, ATOMIC, PowerStack, FlexVolt, Bosch, CORE18V, AMPShare, Flexiclick, Makita, LXT, CXT, Impact XPS, BLACK+DECKER, PowerConnect, MATRIX, entre otras) pertenecen a sus respectivos propietarios; este portal realiza comparativas técnicas independientes de taladros, destornilladores eléctricos, juegos de herramientas, baterías, cargadores, brocas y puntas en español, y participa en el Programa de Afiliados de Amazon";
export const PUBLISHED = "2026-11-24";
export const VERIFIED_LABEL = "24/11/2026";
export const CHAT_ENDPOINT =
  "https://ehwjvuhbimqakvzqbvvg.supabase.co/functions/v1/arreglatudepa-chat";

export type Block =
  | { type: "p" | "h2" | "h3"; text: string }
  | { type: "ul" | "ol"; items: string[] }
  | { type: "table"; caption?: string; headers: string[]; rows: string[][] }
  | {
      type: "callout";
      variant: "etiqueta" | "fabricante" | "aviso" | "tip";
      title?: string;
      text: string;
    }
  | { type: "steps"; items: { name: string; text: string }[] }
  | { type: "cta"; text: string };

export type Article = {
  slug: string;
  pillar: string;
  path: string;
  isPillar: boolean;
  isTransactional?: boolean;
  primaryKeyword: string;
  title: string;
  seoTitle: string;
  metaDescription: string;
  excerpt: string;
  quickAnswer: string;
  readingMinutes: number;
  image: { prompt: string; alt: string };
  blocks: Block[];
  faqs: { q: string; a: string }[];
  sources?: { label: string; url: string }[];
  related: string[];
  datePublished: string;
  dateModified: string;
  imageUrl: string | null;
};

export type Category = (typeof categories)[number];

const DIR = path.join(process.cwd(), "src/content/articles");
const PUBLIC = path.join(process.cwd(), "public");
let cache: Article[] | null = null;

function isValidArticle(a: Partial<Article>): a is Article {
  return Boolean(
    a && a.slug && a.pillar && a.path && a.title && Array.isArray(a.blocks)
  );
}

const PILLAR_SCENE_POOLS: Record<string, string[]> = {
  "resenas-taladros-y-atornilladores": [
    "cat-resenas-taladros-y-atornilladores",
    "scene-resenas-2",
    "scene-resenas-3",
    "home-hero-herramientas",
    "home-perforar-concreto",
  ],
  "juegos-y-kits-de-herramientas": [
    "cat-juegos-y-kits-de-herramientas",
    "scene-kits-2",
    "scene-kits-3",
    "home-kit-primer-depa",
  ],
  "comparativas-de-herramientas": [
    "cat-comparativas-de-herramientas",
    "scene-comparativas-2",
    "scene-comparativas-3",
    "og-default",
  ],
  "herramientas-por-presupuesto-y-trabajo": [
    "cat-herramientas-por-presupuesto-y-trabajo",
    "scene-presupuesto-2",
    "scene-presupuesto-3",
    "home-kit-primer-depa",
    "home-perforar-concreto",
  ],
  "baterias-y-cargadores-compatibles": [
    "cat-baterias-y-cargadores-compatibles",
    "scene-baterias-2",
    "scene-baterias-3",
    "home-baterias-cargadores",
  ],
  "brocas-puntas-y-accesorios-compatibles": [
    "cat-brocas-puntas-y-accesorios-compatibles",
    "scene-brocas-2",
    "scene-brocas-3",
    "home-brocas-y-puntas",
  ],
  "guia-de-compatibilidad-baterias-y-voltaje": [
    "cat-guia-de-compatibilidad-baterias-y-voltaje",
    "scene-voltaje-2",
    "scene-voltaje-3",
    "home-baterias-cargadores",
  ],
  "guia-de-mandriles-brocas-y-puntas": [
    "cat-guia-de-mandriles-brocas-y-puntas",
    "scene-mandriles-2",
    "scene-mandriles-3",
    "home-brocas-y-puntas",
  ],
  "perforar-paredes-concreto-drywall-y-ceramica": [
    "cat-perforar-paredes-concreto-drywall-y-ceramica",
    "scene-paredes-2",
    "scene-paredes-3",
    "home-perforar-concreto",
  ],
  "armado-de-muebles-madera-y-melamina": [
    "cat-armado-de-muebles-madera-y-melamina",
    "scene-muebles-2",
    "scene-muebles-3",
    "home-armado-melamina",
    "home-espacios-estrechos",
  ],
  "instalaciones-y-mejoras-en-departamento": [
    "cat-instalaciones-y-mejoras-en-departamento",
    "scene-instalaciones-2",
    "scene-instalaciones-3",
    "home-soporte-tv-depa",
  ],
  "motores-torque-embrague-y-ergonomia": [
    "cat-motores-torque-embrague-y-ergonomia",
    "scene-motores-2",
    "scene-motores-3",
    "home-hero-herramientas",
  ],
  "mantenimiento-seguridad-y-solucion-de-fallas": [
    "cat-mantenimiento-seguridad-y-solucion-de-fallas",
    "scene-mantenimiento-2",
    "scene-mantenimiento-3",
  ],
  "organizacion-de-herramientas-y-compra-en-amazon": [
    "cat-organizacion-de-herramientas-y-compra-en-amazon",
    "scene-organizacion-2",
    "scene-organizacion-3",
    "home-kit-primer-depa",
  ],
};

function resolveArticleImage(
  a: Article,
  pillarCountMap: Map<string, number>
): string {
  const imgArt = path.join(PUBLIC, "img/articulos", `${a.slug}.webp`);
  if (fs.existsSync(imgArt)) {
    return `/img/articulos/${a.slug}.webp`;
  }
  if (a.isPillar) {
    const imgCat = path.join(PUBLIC, "img/ambiente", `cat-${a.pillar}.webp`);
    if (fs.existsSync(imgCat)) return `/img/ambiente/cat-${a.pillar}.webp`;
  }
  const idx = pillarCountMap.get(a.pillar) || 0;
  pillarCountMap.set(a.pillar, idx + 1);
  const pool = PILLAR_SCENE_POOLS[a.pillar] || ["home-hero-herramientas"];
  const candidate = pool[idx % pool.length];
  const candidatePath = path.join(PUBLIC, "img/ambiente", `${candidate}.webp`);
  if (fs.existsSync(candidatePath)) {
    return `/img/ambiente/${candidate}.webp`;
  }
  const imgAmb = path.join(PUBLIC, "img/ambiente", `cat-${a.pillar}.webp`);
  return fs.existsSync(imgAmb)
    ? `/img/ambiente/cat-${a.pillar}.webp`
    : `/img/ambiente/home-hero-herramientas.webp`;
}

export function getAllContent(): Article[] {
  if (cache) return cache;
  const order = keywordMap.map((k: { path: string }) => k.path);
  const files = fs.existsSync(DIR)
    ? fs.readdirSync(DIR).filter((f) => f.endsWith(".json"))
    : [];
  const list: Article[] = [];
  const seen = new Set<string>();
  const pillarCountMap = new Map<string, number>();
  for (const f of files) {
    try {
      const a = JSON.parse(fs.readFileSync(path.join(DIR, f), "utf8"));
      if (!isValidArticle(a) || seen.has(a.path)) continue;
      seen.add(a.path);
      const imageUrl = resolveArticleImage(a, pillarCountMap);
      list.push({
        ...a,
        isPillar: Boolean(a.isPillar),
        isTransactional: Boolean(a.isTransactional),
        image:
          a.image && a.image.alt ? a.image : { prompt: "", alt: a.title },
        faqs: Array.isArray(a.faqs) ? a.faqs : [],
        related: Array.isArray(a.related) ? a.related : [],
        quickAnswer: a.quickAnswer || a.excerpt || "",
        excerpt: a.excerpt || a.metaDescription || "",
        seoTitle: a.seoTitle || a.title,
        metaDescription: a.metaDescription || a.excerpt || "",
        datePublished: a.datePublished || PUBLISHED,
        dateModified: a.dateModified || PUBLISHED,
        imageUrl,
      });
    } catch {
      // ignore invalid json during generation
    }
  }
  list.sort((x, y) => {
    const ix = order.indexOf(x.path);
    const iy = order.indexOf(y.path);
    if (ix === -1 && iy === -1) return x.path.localeCompare(y.path);
    if (ix === -1) return 1;
    if (iy === -1) return -1;
    return ix - iy;
  });
  cache = list;
  return list;
}

export const getCategories = (): Category[] => categories;
export const getCategory = (slug: string) =>
  categories.find((c) => c.slug === slug);
export const getPillar = (slug: string) =>
  getAllContent().find((a) => a.isPillar && a.pillar === slug);
export const getArticle = (pillar: string, slug: string) =>
  getAllContent().find(
    (a) => !a.isPillar && a.pillar === pillar && a.slug === slug
  );
export const getArticlesIn = (pillar: string) =>
  getAllContent().filter((a) => !a.isPillar && a.pillar === pillar);
export const getByPath = (p: string) =>
  getAllContent().find((a) => a.path === p);

export function safeHref(p: string): string {
  if (getByPath(p)) return p;
  const pillar = p.split("/").filter(Boolean)[0];
  if (pillar && getCategory(pillar)) return `/${pillar}/`;
  return "/";
}

export function ambient(
  name: string,
  fallback = "/img/ambiente/home-hero-herramientas.webp"
): string {
  const rel = `/img/ambiente/${name}.webp`;
  return fs.existsSync(path.join(PUBLIC, rel)) ? rel : fallback;
}

export const hasAmbient = (name: string) =>
  fs.existsSync(path.join(PUBLIC, `/img/ambiente/${name}.webp`));

export const OG_DEFAULT = () =>
  ambient("og-default", "/img/ambiente/home-hero-herramientas.webp");

export function absolute(url: string) {
  return url.startsWith("http") ? url : `${SITE_URL}${url}`;
}

export function trimTitle(t: string) {
  return t.replace(/\s*\|\s*ArreglaTuDepa(?:\.com)?\s*$/i, "");
}

export const organizationLd = {
  "@type": "Organization",
  "@id": `${SITE_URL}/#org`,
  name: SITE_NAME,
  url: `${SITE_URL}/`,
  logo: `${SITE_URL}/icon.svg`,
  founder: { "@id": `${SITE_URL}/#carlos` },
  email: LEGAL_EMAIL,
  description:
    "Guía especializada en español para elegir herramientas de DEWALT, Bosch, Makita y BLACK+DECKER en Amazon Estados Unidos. Compara taladros, destornilladores eléctricos y juegos de herramientas según presupuesto y tipo de trabajo, e indica qué baterías, cargadores, brocas, puntas y accesorios son compatibles con cada modelo.",
};

export const personLd = {
  "@type": "Person",
  "@id": `${SITE_URL}/#carlos`,
  name: LEGAL_OWNER,
  email: LEGAL_EMAIL,
  jobTitle: "Fundador & Editor Jefe de ArreglaTuDepa.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Lima",
    addressCountry: "PE",
  },
  url: `${SITE_URL}/sobre-nosotros/`,
};
