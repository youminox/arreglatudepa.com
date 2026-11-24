import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ClientEffects from "@/components/ClientEffects";
import ArticleCard from "@/components/ArticleCard";
import ReadingProgress from "@/components/ReadingProgress";
import SplitHeading from "@/components/SplitHeading";
import OpenChatButton from "@/components/OpenChatButton";
import AmazonAffiliateBox from "@/components/AmazonAffiliateBox";
import { JsonLd } from "@/components/Breadcrumbs";
import Hero from "@/components/home/Hero";
import ScrollStory from "@/components/home/ScrollStory";
import ToolAnatomyCompatibilitySvg from "@/components/home/ToolAnatomyCompatibilitySvg";
import CompatibilityOrbit, {
  type OrbitItem,
} from "@/components/home/CompatibilityOrbit";
import MetricsCounters, {
  type MetricItem,
} from "@/components/home/MetricsCounters";
import WorkTypeComparisonSlider from "@/components/home/WorkTypeComparisonSlider";
import MomentsCarousel, {
  type Moment,
} from "@/components/home/MomentsCarousel";
import ToolFinderBlock, {
  type ToolTier,
} from "@/components/home/ToolFinderBlock";
import { getContextualAmazonProducts } from "@/lib/amazon";
import {
  SITE_URL,
  OG_DEFAULT,
  TOOLS_DISCLAIMER,
  ambient,
  getAllContent,
  getArticlesIn,
  getByPath,
  getCategories,
  safeHref,
  type Article,
} from "@/lib/content";

export const metadata: Metadata = {
  title:
    "ArreglaTuDepa.com: Guía de Taladros, Destornilladores y Kits (DEWALT, Bosch, Makita y BLACK+DECKER) en Amazon EE. UU.",
  description:
    "Guía en español para elegir herramientas DEWALT, Bosch, Makita y BLACK+DECKER disponibles en Amazon Estados Unidos. Compara taladros, destornilladores eléctricos y kits según presupuesto y trabajo, con baterías, cargadores y brocas compatibles.",
  alternates: { canonical: `${SITE_URL}/` },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/`,
    title:
      "ArreglaTuDepa.com: Taladros, Destornilladores, Kits y Compatibilidad en Amazon EE. UU.",
    description:
      "Compara DEWALT, Bosch, Makita y BLACK+DECKER según presupuesto y tipo de trabajo, e identifica qué baterías, cargadores, brocas y puntas son compatibles.",
    images: [
      {
        url: OG_DEFAULT(),
        width: 1200,
        height: 675,
        alt: "ArreglaTuDepa.com – Guía de herramientas y compatibilidad en Amazon EE. UU.",
      },
    ],
  },
};

const FAQ = [
  {
    q: "¿Qué marca conviene más para un departamento: DEWALT, Bosch, Makita o BLACK+DECKER?",
    a: "Depende de tu presupuesto y frecuencia de uso: BLACK+DECKER 20V MAX (LDX120C / LDX120PK) es imbatible por menos de US$65 para tareas ocasionales; Bosch 12V Max (PS31-2A y Flexiclick) es el rey ligero para armar muebles de melamina y gabinetes; y DEWALT 20V MAX (DCD777D1 / DCD805D2) junto a Makita 18V LXT (XFD131 / XPH12) lideran en potencia Brushless y perforación en concreto.",
  },
  {
    q: "¿Puedo usar baterías DEWALT en un taladro Makita, Bosch o BLACK+DECKER?",
    a: "No. Cada marca y cada voltaje (12V frente a 18V/20V MAX) utiliza un riel mecánico y protocolo electrónico de protección (BMS) exclusivo. Por eso siempre recomendamos elegir una plataforma principal y ampliar tu equipo comprando herramientas 'Bare Tool' de esa misma línea.",
  },
  {
    q: "¿Las brocas y puntas de destornillador sí son compatibles entre todas las marcas?",
    a: "Sí, al 100 %. Todo portabrocas de 3/8\" (acepta vástagos hasta 10 mm), de 1/2\" (hasta 13 mm) y todo encastre hexagonal rápido de 1/4\" (6.35 mm) es estándar universal. Puedes instalar puntas DEWALT FlexTorq o Makita Impact XPS en un taladro Bosch o BLACK+DECKER sin ningún problema.",
  },
  {
    q: "¿Qué diferencia hay entre 18V (Bosch/Makita) y 20V MAX (DEWALT/BLACK+DECKER)?",
    a: "Tienen exactamente el mismo voltaje real de trabajo: ambos paquetes usan 5 celdas de litio de 3.6V conectadas en serie (18V nominales bajo carga y 20V de pico máximo recién salidas del cargador).",
  },
  {
    q: "¿Qué significan las letras B, Z, C1, C2 y D2 al comprar en Amazon Estados Unidos?",
    a: "Las letras finales indican qué viene en la caja: 'B' (en DEWALT/Bosch) y 'Z' (en Makita) significan 'Bare Tool / Tool Only' (solo el cuerpo sin batería ni cargador). En cambio, 'C1', 'C2', 'D1', 'D2' o 'P2' son Kits completos con batería(s) y cargador incluidos.",
  },
  {
    q: "¿Qué necesito para perforar una pared de concreto armado en mi departamento?",
    a: "Necesitas obligatoriamente un taladro con modo Percutor (símbolo de martillo, como el DEWALT DCD805D2, Makita XPH12 o BLACK+DECKER BCD704C1) o un rotomartillo SDS-Plus, acompañado de brocas con punta de carburo de tungsteno para mampostería/concreto.",
  },
  {
    q: "¿Puedo enchufar un cargador comprado en Amazon EE. UU. (110V) en una red de 220V?",
    a: "No directamente si la etiqueta del cargador indica solo '120V~ 60Hz'. En países de 220V (como Perú, Chile, Argentina o España) debes usar un transformador reductor de 220V a 110V acorde a los watts del cargador, o elegir un cargador USB-C PD universal (100V–240V) como el DEWALT DCB094K.",
  },
];

const CLAIMS = [
  "DEWALT 20V MAX & XR",
  "Bosch 12V Max & 18V",
  "Makita 18V LXT & CXT",
  "BLACK+DECKER 20V MAX",
  "Baterías y Cargadores Compatibles",
  "Brocas Concreto, Madera y Metal",
  "Puntas Impacto 1/4\" Hex",
  "Ofertas en Amazon EE. UU.",
];

const CLAIMS_2 = [
  "Taladros Percutores",
  "Destornilladores Eléctricos",
  "Juegos de Herramientas",
  "Mandril 3/8\" vs 1/2\"",
  "Armado de Melamina",
  "Concreto y Drywall",
  "Kit vs Bare Tool (B/Z)",
  "Guía 100% en Español",
];

const ICONS: Record<string, string> = {
  drill: "🛠️",
  kit: "🧰",
  scale: "⚖️",
  tag: "💵",
  battery: "🔋",
  bit: "🔩",
  bolt: "⚡",
  gear: "⚙️",
  wall: "🧱",
  wood: "🪵",
  home: "🏠",
  motor: "🌀",
  shield: "🛡️",
  box: "📦",
};

export default function Home() {
  const cats = getCategories();
  const all = getAllContent();
  const amzHome = getContextualAmazonProducts(
    "home",
    "herramientas-por-presupuesto-y-trabajo",
    "Mejores Herramientas y Compatibles en Amazon EE. UU."
  );

  const orbit: OrbitItem[] = [
    {
      k: "dewalt",
      name: "DEWALT 20V MAX",
      img: null,
      icon: "🟡",
      role: "Potencia Brushless, ATOMIC y XR en Amazon EE. UU.",
      d: "Desde el superventas DCD777D1 hasta el percutor XR DCD805D2. Todos comparten baterías deslizantes DCB203 (2.0Ah), DCB205 (5.0Ah) y PowerStack.",
      href: safeHref(
        "/resenas-taladros-y-atornilladores/dewalt-dcd777d1-taladro-brushless-20v-max-resena-y-compatibilidad/"
      ),
    },
    {
      k: "bosch",
      name: "Bosch 12V & 18V",
      img: null,
      icon: "🔵",
      role: "Precisión alemana para muebles, gabinetes y obra",
      d: "Sus taladros subcompactos 12V Max (PS31-2A y Flexiclick 5-en-1) pesan menos de 1 kg y cuidan cada tornillo en melamina; su serie 18V CORE18V domina en obra.",
      href: safeHref(
        "/resenas-taladros-y-atornilladores/bosch-ps31-2a-taladro-12v-max-compacto-resena-y-baterias/"
      ),
    },
    {
      k: "makita",
      name: "Makita 18V LXT",
      img: null,
      icon: "🩵",
      role: "Ergonomía superior y carga rápida en 30 minutos",
      d: "El ecosistema inalámbrico de 18V más amplio del mercado (XFD131, Sub-Compact XFD11 y percutor XPH12) con baterías BL1840B/BL1850B y cargador DC18RC.",
      href: safeHref(
        "/resenas-taladros-y-atornilladores/makita-xfd131-taladro-18v-lxt-brushless-resena-completa/"
      ),
    },
    {
      k: "blackdecker",
      name: "BLACK+DECKER",
      img: null,
      icon: "🟠",
      role: "El campeón económico para tu primer departamento",
      d: "Por menos de US$65 en Amazon EE. UU., el taladro LDX120C y el kit de 68 piezas LDX120PK resuelven cuadros, cortinas y muebles con baterías 20V PowerConnect.",
      href: safeHref(
        "/resenas-taladros-y-atornilladores/black-decker-ldx120c-taladro-20v-max-economico-resena/"
      ),
    },
    {
      k: "baterias",
      name: "Baterías y Cargadores",
      img: null,
      icon: "🔋",
      role: "Compatibilidad exacta por riel, Ah y voltaje",
      d: "Evita comprar baterías incompatibles: revisa qué pack exacto entra en tu modelo y cómo usar cargadores de 110V de EE. UU. o USB-C universales.",
      href: safeHref(
        "/baterias-y-cargadores-compatibles/tabla-compatibilidad-baterias-dewalt-20v-bosch-18v-makita-lxt/"
      ),
    },
    {
      k: "brocas",
      name: "Brocas por Material",
      img: null,
      icon: "🧱",
      role: "Carburo (concreto), Brad Point (melamina) y Titanio",
      d: "Compatibles con cualquier marca según la apertura del mandril (3/8\" hasta 10 mm; 1/2\" hasta 13 mm) para perforar sin quemar la punta.",
      href: safeHref(
        "/brocas-puntas-y-accesorios-compatibles/mejores-sets-de-brocas-y-puntas-dewalt-bosch-makita-amazon/"
      ),
    },
    {
      k: "puntas",
      name: "Puntas 1/4\" Hex",
      img: null,
      icon: "🔩",
      role: "Zona de torsión Impact Rated (PH2, PZ2, Torx y Dados)",
      d: "Descubre por qué usar PZ2 en bisagras de cocina, PH2 en drywall y dados magnéticos para instalar soportes de TV en minutos.",
      href: safeHref(
        "/guia-de-mandriles-brocas-y-puntas/diferencia-mandril-3-8-vs-1-2-pulgada-y-1-4-hex-que-brocas-entran/"
      ),
    },
    {
      k: "kits",
      name: "Juegos y Combos",
      img: null,
      icon: "🧰",
      role: "Taladro + Impacto y maletines completos para hogar",
      d: "Ahorra hasta un 35 % comprando combos de 2 herramientas con 2 baterías (como el DEWALT DCK240C2 / DCK277D2) o maletines mixtos.",
      href: safeHref(
        "/juegos-y-kits-de-herramientas/dewalt-dck240c2-combo-taladro-e-impacto-20v-resena/"
      ),
    },
  ];

  const metrics: MetricItem[] = [
    {
      v: 2014,
      dec: 0,
      u: "guías",
      l: "1,500 SEO + 500 Amazon",
      pct: 100,
      note: "Arquitectura 0% canibalización",
    },
    {
      v: 4,
      dec: 0,
      u: "marcas",
      l: "DEWALT · Bosch · Makita · B+D",
      pct: 100,
      note: "Catálogo oficial Amazon EE. UU.",
    },
    {
      v: 20,
      dec: 0,
      u: "V MAX",
      l: "18V Nominal Real en Litio",
      pct: 92,
      note: "4V, 8V, 12V y 18V/20V comparados",
    },
    {
      v: 13,
      dec: 0,
      u: "mm (1/2\")",
      l: "Apertura Máxima Mandril",
      pct: 88,
      note: "3/8\" (10 mm) vs 1/2\" (13 mm)",
    },
    {
      v: 30,
      dec: 0,
      u: "min",
      l: "Carga Rápida en Litio",
      pct: 85,
      note: "En cargadores Makita/Bosch/DEWALT",
    },
    {
      v: 100,
      dec: 0,
      u: "%",
      l: "Compatibilidad Verificada",
      pct: 100,
      note: "Baterías, cargadores y brocas",
    },
  ];

  const moments: Moment[] = [
    {
      img: ambient("home-soporte-tv-depa"),
      t: "Colgar soporte de TV",
      d: "Qué taladro percutor, broca de carburo, dado y tarugo usar en concreto o drywall.",
      href: safeHref(
        "/instalaciones-y-mejoras-en-departamento/como-instalar-un-soporte-de-tv-en-pared-que-taladro-y-broca-usar/"
      ),
      alt: "Instalación de soporte de televisor en pared de departamento con nivel y taladro inalámbrico",
    },
    {
      img: ambient("home-armado-melamina"),
      t: "Muebles y melamina",
      d: "En qué número poner el anillo de torque (1 al 5) para nunca barrer tornillos.",
      href: safeHref(
        "/armado-de-muebles-madera-y-melamina/en-que-numero-poner-el-torque-del-taladro-para-melamina-y-muebles/"
      ),
      alt: "Taladro compacto de 12V instalando bisagra de cocina en mueble de melamina",
    },
    {
      img: ambient("home-perforar-concreto"),
      t: "Concreto vs Drywall",
      d: "Cómo identificar el muro de tu depa y cuándo activar o apagar el martillo percutor.",
      href: safeHref(
        "/perforar-paredes-concreto-drywall-y-ceramica/como-saber-si-la-pared-de-tu-departamento-es-concreto-ladrillo-o-drywall/"
      ),
      alt: "Taladro percutor perforando pared de concreto con línea de nivel láser verde",
    },
    {
      img: ambient("home-kit-primer-depa"),
      t: "Tu primer kit de depa",
      d: "Maletines con taladro 20V + herramientas manuales por menos de US$80 en Amazon.",
      href: safeHref(
        "/juegos-y-kits-de-herramientas/black-decker-ldx120pk-juego-68-herramientas-taladro-resena/"
      ),
      alt: "Maletín de 68 herramientas domésticas con taladro inalámbrico de 20V",
    },
    {
      img: ambient("home-baterias-cargadores"),
      t: "Baterías y 110V/220V",
      d: "Qué batería encaja en tu modelo y cómo usar cargadores de EE. UU. sin quemarlos.",
      href: safeHref(
        "/baterias-y-cargadores-compatibles/tabla-compatibilidad-baterias-dewalt-20v-bosch-18v-makita-lxt/"
      ),
      alt: "Baterías deslizantes de litio con luces LED verdes junto a cargadores rápidos",
    },
    {
      img: ambient("home-brocas-y-puntas"),
      t: "Brocas y puntas 1/4\"",
      d: "Los mejores estuches universales para concreto, madera, cerámica y tornillos PH2/PZ2.",
      href: safeHref(
        "/brocas-puntas-y-accesorios-compatibles/mejores-sets-de-brocas-y-puntas-dewalt-bosch-makita-amazon/"
      ),
      alt: "Estuche abierto de brocas de carburo, titanio y puntas hexagonales de impacto",
    },
    {
      img: ambient("home-espacios-estrechos"),
      t: "Esquinas y alacenas",
      d: "Sistemas multicabezal 5-en-1 y adaptadores de 90° donde un taladro normal no entra.",
      href: safeHref(
        "/resenas-taladros-y-atornilladores/dewalt-dcf680n2-destornillador-electrico-giroscopico-8v-resena/"
      ),
      alt: "Atornillado con adaptador de ángulo recto de 90 grados dentro de un gabinete estrecho",
    },
  ];

  const POPULAR_PATHS = [
    "/herramientas-por-presupuesto-y-trabajo/mejores-taladros-inalambricos-para-departamento-y-casa-amazon/",
    "/comparativas-de-herramientas/dewalt-vs-bosch-vs-makita-vs-black-decker-cual-elegir/",
    "/resenas-taladros-y-atornilladores/dewalt-dcd777d1-taladro-brushless-20v-max-resena-y-compatibilidad/",
    "/baterias-y-cargadores-compatibles/tabla-compatibilidad-baterias-dewalt-20v-bosch-18v-makita-lxt/",
    "/brocas-puntas-y-accesorios-compatibles/mejores-sets-de-brocas-y-puntas-dewalt-bosch-makita-amazon/",
    "/organizacion-de-herramientas-y-compra-en-amazon/que-significa-bare-tool-tool-only-codigos-b-z-c2-d2-en-amazon/",
  ];
  const popular: Article[] = POPULAR_PATHS.map((p) => getByPath(p)).filter(
    Boolean
  ) as Article[];
  for (const a of all) {
    if (popular.length >= 6) break;
    if (!a.isPillar && !popular.includes(a)) popular.push(a);
  }

  const finderOptions: ToolTier[] = [
    {
      key: "todoterreno",
      label: "🏆 Todoterreno ($99–$129)",
      budgetSpec: "US$99 – US$129 (Kit con batería y cargador)",
      batteryCompat: "DEWALT 20V MAX (DCB203 / DCB205 / PowerStack) + DCB115",
      bitsCompat: "Mandril 1/2\" · Sets universales 1/4\" Hex (DWA2T40IR)",
      img: ambient("home-hero-herramientas"),
      alt: "DEWALT 20V MAX Brushless con batería y estuche de brocas",
      idealFor:
        "El equilibrio perfecto en Amazon EE. UU. para madera, muebles, metal, drywall y reparaciones generales.",
      reviewHref: safeHref(
        "/resenas-taladros-y-atornilladores/dewalt-dcd777d1-taladro-brushless-20v-max-resena-y-compatibilidad/"
      ),
      productKey: "DEWALT_DCD777_BRUSHLESS",
    },
    {
      key: "concreto",
      label: "🧱 Paredes Concreto ($169+)",
      budgetSpec: "US$169 – US$199 (Kit Percutor XR 2 baterías)",
      batteryCompat: "Todas las baterías DEWALT 20V MAX / XR / PowerStack",
      bitsCompat: "Mandril metálico 1/2\" · Brocas carburo concreto DW5207",
      img: ambient("home-perforar-concreto"),
      alt: "Taladro percutor perforando pared de concreto en departamento",
      idealFor:
        "Departamentos con muros duros de concreto armado o ladrillo macizo para instalar soportes de TV y repisas.",
      reviewHref: safeHref(
        "/resenas-taladros-y-atornilladores/dewalt-dcd805d2-taladro-percutor-xr-concreto-resena/"
      ),
      productKey: "DEWALT_DCD805_HAMMER",
    },
    {
      key: "muebles",
      label: "🪵 Muebles / Melamina ($89–$119)",
      budgetSpec: "US$89 – US$119 (Kit 2 baterías 12V Max)",
      batteryCompat: "Bosch 12V Max (BAT414 2.0Ah / GBA12V30) + GAL12V-20",
      bitsCompat: "Mandril 3/8\" (10 mm) · Puntas Bosch Impact Tough PH2/PZ2",
      img: ambient("home-armado-melamina"),
      alt: "Taladro compacto Bosch 12V armando bisagra en mueble de melamina",
      idealFor:
        "Armar escritorios, roperos, muebles tipo IKEA y gabinetes sin peso en la muñeca ni riesgo de barrer tornillos.",
      reviewHref: safeHref(
        "/resenas-taladros-y-atornilladores/bosch-ps31-2a-taladro-12v-max-compacto-resena-y-baterias/"
      ),
      productKey: "BOSCH_PS31_12V",
    },
    {
      key: "economico",
      label: "💵 Económico (< $65)",
      budgetSpec: "US$44 – US$79 (Taladro 20V o Kit 68 pzs)",
      batteryCompat: "BLACK+DECKER 20V PowerConnect (LBXR20) + LCS1620",
      bitsCompat: "Mandril 3/8\" · Incluye brocas/puntas o maletín BDA91109",
      img: ambient("home-kit-primer-depa"),
      alt: "Kit económico BLACK+DECKER 20V con herramientas manuales",
      idealFor:
        "Independizarse, colgar cuadros, instalar cortinas y resolver emergencias caseras cuidando al máximo el bolsillo.",
      reviewHref: safeHref(
        "/juegos-y-kits-de-herramientas/black-decker-ldx120pk-juego-68-herramientas-taladro-resena/"
      ),
      productKey: "BLACK_DECKER_LDX120",
    },
  ];

  return (
    <>
      <ReadingProgress />
      <Header variant="dark" />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebPage",
              "@id": `${SITE_URL}/#webpage`,
              url: `${SITE_URL}/`,
              name: "ArreglaTuDepa.com — Guía de Herramientas y Compatibilidad en Amazon EE. UU.",
              inLanguage: "es",
              isPartOf: { "@id": `${SITE_URL}/#website` },
              primaryImageOfPage: `${SITE_URL}${ambient("home-hero-herramientas")}`,
            },
            {
              "@type": "FAQPage",
              "@id": `${SITE_URL}/#faq`,
              mainEntity: FAQ.map((f) => ({
                "@type": "Question",
                name: f.q,
                acceptedAnswer: { "@type": "Answer", text: f.a },
              })),
            },
          ],
        }}
      />
      <main>
        {/* 1–2. Hero 3D Tilt + Partículas + Buscador sobre 2,014 Guías */}
        <Hero heroImage={ambient("home-hero-herramientas")} />

        {/* 3. Doble Cinta Marquee en Sentidos Opuestos */}
        <div className="relative border-b border-[var(--line)] bg-white py-5">
          <div className="marquee">
            {[0, 1].map((k) => (
              <div
                key={k}
                className="marquee-track font-display text-lg font-bold text-fxink/85"
                aria-hidden={k === 1}
              >
                {CLAIMS.map((t) => (
                  <span
                    key={t}
                    className="flex items-center gap-3 whitespace-nowrap"
                  >
                    <span className="h-2.5 w-2.5 rotate-45 rounded-[2px] bg-gradient-to-br from-fxlime to-prune" />
                    {t}
                  </span>
                ))}
              </div>
            ))}
          </div>
          <div className="marquee reverse mt-3" aria-hidden>
            {[0, 1].map((k) => (
              <div
                key={k}
                className="marquee-track text-sm font-semibold uppercase tracking-[0.14em] text-prune/80"
              >
                {CLAIMS_2.map((t) => (
                  <span
                    key={t}
                    className="flex items-center gap-3 whitespace-nowrap"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-fxblue" />
                    {t}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* 4. Los 4 criterios técnicos + Mosaico Spotlight (.spot) */}
        <section id="criterios" className="wrap py-24">
          <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.05fr]">
            <div>
              <span className="eyebrow" data-reveal>
                Compra Inteligente en Amazon EE. UU.
              </span>
              <SplitHeading
                text="Compara taladros, destornilladores y kits,"
                accent={{
                  text: "con compatibilidad exacta",
                  className: "text-prune",
                }}
                className="section-title mt-3"
              />
              <p className="mt-5 text-lg text-[var(--muted)]" data-reveal>
                Comprar una herramienta en{" "}
                <strong className="text-fxink">Amazon Estados Unidos</strong> sin
                revisar el tipo de mandril, las letras del código (
                <code>Bare Tool</code> vs <code>Kit</code>) o el riel de batería
                suele terminar en accesorios que no encajan. Aquí analizamos{" "}
                <strong className="text-fxink">
                  DEWALT, Bosch, Makita y BLACK+DECKER
                </strong>{" "}
                ficha por ficha.
              </p>
              <div
                className="mt-6 rounded-2xl border border-amber-300/70 bg-amber-50/80 p-5"
                data-reveal
              >
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-amber-800">
                  ⚠️ Regla de oro de compatibilidad entre marcas
                </p>
                <ul className="mt-2 space-y-1.5 text-[0.95rem] text-fxink">
                  <li>
                    • <strong>Baterías y cargadores:</strong> son exclusivos de
                    cada marca y voltaje (12V no entra en 20V MAX).
                  </li>
                  <li>
                    • <strong>Brocas y puntas 1/4&quot; Hex:</strong> son 100 %
                    universales entre las 4 marcas según apertura (3/8&quot; o
                    1/2&quot;).
                  </li>
                  <li>
                    • <strong>Pared de concreto:</strong> exige siempre modo
                    percutor (martillo) + broca de carburo.
                  </li>
                </ul>
              </div>
              <div className="mt-7 flex flex-wrap gap-3" data-reveal>
                <Link
                  href="/baterias-y-cargadores-compatibles/"
                  className="btn btn-ghost"
                  data-magnetic
                >
                  🔋 Ver Baterías Compatibles
                </Link>
                <Link
                  href="/brocas-puntas-y-accesorios-compatibles/"
                  className="btn btn-ghost"
                  data-magnetic
                >
                  🔩 Ver Brocas y Puntas
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div
                className="relative col-span-2 aspect-[16/8] overflow-hidden rounded-3xl shadow-[0_30px_60px_-35px_rgba(15,23,42,0.6)]"
                data-reveal
              >
                <Image
                  src={ambient("og-default")}
                  alt="Comparativa de taladros inalámbricos, baterías de litio y maletines de brocas sobre mesa de trabajo"
                  fill
                  sizes="(max-width:1024px) 100vw, 600px"
                  className="object-cover"
                />
                <span className="absolute bottom-3 left-3 rounded-full bg-white/92 px-3 py-1 text-xs font-semibold text-fxink">
                  DEWALT · Bosch · Makita · BLACK+DECKER
                </span>
              </div>
              {[
                [
                  "💵",
                  "Según tu Presupuesto",
                  "Desde <US$50 (B+D 20V / 4V) hasta kits Brushless de US$99–US$199.",
                ],
                [
                  "🧱",
                  "Según el Trabajo",
                  "Embrague suave para melamina vs 34.000 BPM para concreto armado.",
                ],
                [
                  "🔋",
                  "Batería y Cargador",
                  "Códigos exactos 20V MAX, 18V LXT, 12V Max y regla 110V/220V.",
                ],
                [
                  "🔩",
                  "Brocas y Puntas",
                  "Mandriles de 3/8\" (10 mm), 1/2\" (13 mm) y vástago 1/4\" Hex.",
                ],
              ].map(([e, t, d], i) => (
                <div
                  key={t}
                  className="card spot p-5"
                  data-reveal
                  data-reveal-delay={String(i)}
                >
                  <p className="text-2xl" aria-hidden>
                    {e}
                  </p>
                  <p className="mt-2 font-display text-lg font-bold leading-tight">
                    {t}
                  </p>
                  <p className="mt-1 text-sm text-[var(--muted)]">{d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. ScrollStory Fijada con GSAP ScrollTrigger */}
        <ScrollStory />

        {/* 6. Ingeniería sin humo + Diagrama SVG Animado */}
        <section className="relative isolate overflow-hidden bg-[#090e1a] py-24 text-white">
          <div className="pointer-events-none absolute -left-40 top-10 h-[30rem] w-[30rem] rounded-full bg-fxblue/20 blur-3xl" />
          <div className="pointer-events-none absolute -right-40 bottom-0 h-[30rem] w-[30rem] rounded-full bg-prune/35 blur-3xl" />
          <div className="hero-grid opacity-50" />
          <div className="wrap relative grid items-center gap-14 lg:grid-cols-2">
            <div>
              <span className="eyebrow !text-fxlime" data-reveal>
                La ingeniería real, explicada simple
              </span>
              <SplitHeading
                text="Qué es compatible con qué:"
                accent={{
                  text: "baterías vs mandriles",
                  className: "text-gradient",
                }}
                className="section-title mt-3"
              />
              <p className="mt-5 text-lg text-white/75" data-reveal>
                Toda herramienta inalámbrica tiene{" "}
                <strong className="text-white">dos extremos opuestos</strong>:
                abajo lleva un{" "}
                <strong className="text-amber-300">
                  riel de batería propietario
                </strong>{" "}
                (donde DEWALT, Bosch, Makita y BLACK+DECKER no se mezclan entre
                sí), y adelante lleva un{" "}
                <strong className="text-emerald-300">
                  mandril o portapuntas 100 % universal
                </strong>{" "}
                donde entran brocas y puntas de cualquier fabricante.
              </p>
              <div className="mt-6 grid grid-cols-3 gap-3" data-reveal>
                {[
                  ["18V = 20V", "Mismo voltaje nominal"],
                  ["1/4\" Hex", "Puntas universales"],
                  ["B / Z vs C2", "Bare Tool vs Kit"],
                ].map(([e, t]) => (
                  <div key={t} className="glass p-4 text-center">
                    <p className="font-display text-lg font-extrabold text-amber-300">
                      {e}
                    </p>
                    <p className="mt-1 text-xs font-semibold text-white/80">
                      {t}
                    </p>
                  </div>
                ))}
              </div>
              <div className="mt-7 flex flex-wrap gap-3" data-reveal>
                <Link
                  href={safeHref(
                    "/guia-de-compatibilidad-baterias-y-voltaje/diferencia-real-entre-18v-y-20v-max-en-taladros-inalambricos/"
                  )}
                  className="btn btn-glass"
                  data-magnetic
                >
                  ¿Por qué 20V MAX equivale a 18V?
                </Link>
                <Link
                  href={safeHref(
                    "/organizacion-de-herramientas-y-compra-en-amazon/que-significa-bare-tool-tool-only-codigos-b-z-c2-d2-en-amazon/"
                  )}
                  className="btn btn-glass"
                  data-magnetic
                >
                  Diccionario de códigos Amazon
                </Link>
              </div>
            </div>
            <div data-reveal>
              <ToolAnatomyCompatibilitySvg />
            </div>
          </div>
        </section>

        {/* 7. Órbita Interactiva de 8 Nodos */}
        <section className="wrap py-24">
          <CompatibilityOrbit
            items={orbit}
            center={ambient("home-baterias-cargadores")}
          />
        </section>

        {/* 8. Contadores Animados + Tabla Maestra de las 4 Marcas */}
        <section className="relative isolate overflow-hidden bg-gradient-to-br from-[#090e1a] via-[#0f172a] to-[#0c4a6e] py-24 text-white">
          <div className="hero-aurora opacity-35" />
          <div className="wrap relative grid items-start gap-12 lg:grid-cols-[1.15fr_1fr]">
            <div>
              <span className="eyebrow !text-fxlime" data-reveal>
                Datos técnicos verificados
              </span>
              <SplitHeading
                text="Las 4 marcas líderes,"
                accent={{ text: "cifra por cifra", className: "text-gradient" }}
                className="section-title mt-3"
              />
              <p className="mt-4 max-w-xl text-white/75" data-reveal>
                Comparamos especificaciones reales de fabricante en Amazon
                Estados Unidos para que elijas según tu presupuesto, el peso en
                mano y la familia de baterías que más te conviene.
              </p>
              <div className="mt-8">
                <MetricsCounters data={metrics} />
              </div>
            </div>

            <div
              className="overflow-hidden rounded-3xl bg-white p-5 text-slate-900 shadow-2xl"
              data-reveal
            >
              <p className="text-xs font-extrabold uppercase tracking-wider text-amber-800">
                Comparativa Rápida Estrella en Amazon EE. UU.
              </p>
              <h3 className="mt-1 font-display text-xl font-extrabold">
                Referentes por Marca y Batería Compatible
              </h3>
              <div className="mt-4 overflow-x-auto">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="border-b border-slate-200 bg-slate-50 font-display font-bold">
                      <th className="p-2.5">Modelo Top</th>
                      <th className="p-2.5">Presupuesto</th>
                      <th className="p-2.5">Batería Compatible</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    <tr>
                      <td className="p-2.5 font-bold">DEWALT DCD777D1</td>
                      <td className="p-2.5">US$99–$129</td>
                      <td className="p-2.5">20V MAX DCB203 / DCB205</td>
                    </tr>
                    <tr>
                      <td className="p-2.5 font-bold">DEWALT DCD805D2 XR</td>
                      <td className="p-2.5">US$169–$199</td>
                      <td className="p-2.5">20V XR / PowerStack (Concreto)</td>
                    </tr>
                    <tr>
                      <td className="p-2.5 font-bold">Bosch PS31-2A 12V</td>
                      <td className="p-2.5">US$89–$119</td>
                      <td className="p-2.5">12V Max BAT414 / GBA12V30</td>
                    </tr>
                    <tr>
                      <td className="p-2.5 font-bold">Makita XFD131 LXT</td>
                      <td className="p-2.5">US$129–$159</td>
                      <td className="p-2.5">18V LXT BL1830B / BL1850B</td>
                    </tr>
                    <tr>
                      <td className="p-2.5 font-bold">BLACK+DECKER LDX120C</td>
                      <td className="p-2.5">US$44–$59</td>
                      <td className="p-2.5">20V PowerConnect LBXR20</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <Link
                href={safeHref(
                  "/comparativas-de-herramientas/dewalt-vs-bosch-vs-makita-vs-black-decker-cual-elegir/"
                )}
                className="mt-4 inline-flex w-full items-center justify-center rounded-xl bg-slate-900 py-3 font-display text-xs font-extrabold text-amber-300 hover:bg-slate-800 transition"
              >
                Ver comparativa completa de las 4 marcas →
              </Link>
            </div>
          </div>
        </section>

        {/* 9. Comparador Deslizante: Muebles (8V/12V) ↔ Concreto (20V Percutor) */}
        <section className="wrap py-24">
          <div className="mb-10 grid items-end gap-6 lg:grid-cols-[1.2fr_1fr]">
            <div>
              <span className="eyebrow" data-reveal>
                Dos trabajos distintos en un mismo depa
              </span>
              <SplitHeading
                text="Armar muebles vs perforar concreto:"
                accent={{
                  text: "qué cambia en la herramienta",
                  className: "text-prune",
                }}
                className="section-title mt-3"
              />
            </div>
            <p className="text-lg text-[var(--muted)]" data-reveal>
              Arrastra el control interactivo. En{" "}
              <strong className="text-fxink">melamina y muebles</strong> manda la
              suavidad del embrague y el bajo peso; en{" "}
              <strong className="text-fxink">muros de concreto</strong> manda el
              golpe axial en BPM y el mandril metálico de 1/2&quot;.
            </p>
          </div>
          <div data-reveal>
            <WorkTypeComparisonSlider />
          </div>
        </section>

        {/* 10. Carrusel 4:5 de Proyectos Reales de Departamento */}
        <section className="overflow-hidden bg-fxsky py-24">
          <div className="wrap">
            <div className="mb-10 max-w-2xl">
              <span className="eyebrow" data-reveal>
                Arreglos reales en casa
              </span>
              <SplitHeading
                text="Proyectos de departamento"
                accent={{
                  text: "paso a paso",
                  className: "text-fxbluedeep",
                }}
                className="section-title mt-3"
              />
            </div>
            <MomentsCarousel items={moments} />
          </div>
        </section>

        {/* 11. Recomendador Interactivo + Calculadora de Amperaje Ah */}
        <section id="recomendador" className="wrap py-24">
          <div className="mb-10 grid items-end gap-6 lg:grid-cols-[1.2fr_1fr]">
            <div>
              <span className="eyebrow" data-reveal>
                Selector Interactivo Amazon EE. UU.
              </span>
              <SplitHeading
                text="Encuentra tu herramienta ideal"
                accent={{
                  text: "y sus repuestos compatibles",
                  className: "text-prune",
                }}
                className="section-title mt-3"
              />
            </div>
            <p className="text-[var(--muted)]" data-reveal>
              Selecciona tu prioridad de presupuesto o trabajo para ver el
              modelo exacto en Amazon Estados Unidos junto con la batería, el
              cargador y las brocas que le hacen.
            </p>
          </div>
          <div data-reveal>
            <ToolFinderBlock options={finderOptions} />
          </div>
        </section>

        {/* 12. Bento Grid Asimétrico de los 14 Silos + Vitrina Amazon + Lo Más Consultado */}
        <section className="bg-gradient-to-b from-white to-fxsky py-24">
          <div className="wrap">
            <div className="mb-10 max-w-2xl">
              <span className="eyebrow" data-reveal>
                2,014 Guías Sin Canibalización
              </span>
              <SplitHeading
                text="Todo organizado en"
                accent={{
                  text: "14 silos especializados",
                  className: "text-fxbluedeep",
                }}
                className="section-title mt-3"
              />
            </div>

            <div className="grid auto-rows-[minmax(185px,auto)] gap-5 md:grid-cols-2 lg:grid-cols-4">
              {cats.map((c, i) => {
                const count = getArticlesIn(c.slug).length;
                const big = i === 0;
                const wide = i === 2 || i === 4 || i === 8;
                return (
                  <Link
                    key={c.slug}
                    href={`/${c.slug}/`}
                    className={`card spot group flex flex-col p-6 ${
                      big
                        ? "spot-dark border-transparent bg-gradient-to-br from-[#090e1a] via-[#0f172a] to-[#0369a1] text-white md:col-span-2 lg:row-span-2"
                        : ""
                    } ${wide ? "lg:col-span-2" : ""}`}
                    data-reveal
                    data-reveal-delay={String(i % 4)}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <span
                        className={`grid h-12 w-12 place-items-center rounded-2xl text-2xl ${
                          big ? "bg-white/15" : "bg-fxsky"
                        }`}
                        aria-hidden
                      >
                        {ICONS[c.icon] || "🛠️"}
                      </span>
                      {count > 0 && (
                        <span
                          className={`text-xs font-bold uppercase tracking-wider ${
                            big ? "text-fxlime" : "text-fxbluedeep"
                          }`}
                        >
                          {count} guías
                        </span>
                      )}
                    </div>
                    <h3
                      className={`mt-4 font-display font-extrabold ${
                        big ? "text-3xl sm:text-4xl" : "text-xl"
                      }`}
                    >
                      {c.name}
                    </h3>
                    <p
                      className={`mt-2 text-sm ${
                        big ? "text-white/80" : "text-[var(--muted)]"
                      }`}
                    >
                      {c.description}
                    </p>
                    {big && (
                      <ul className="mt-6 space-y-2 text-sm text-white/85">
                        {getArticlesIn(c.slug)
                          .slice(0, 5)
                          .map((a) => (
                            <li key={a.path} className="truncate">
                              → {a.title}
                            </li>
                          ))}
                      </ul>
                    )}
                    <span
                      className={`mt-auto pt-4 text-sm font-semibold ${
                        big ? "text-fxlime" : "text-fxbluedeep"
                      }`}
                    >
                      Explorar silo →
                    </span>
                  </Link>
                );
              })}
            </div>

            {/* Vitrina Amazon Showcase en la Home */}
            <AmazonAffiliateBox
              variant="showcase"
              sectionTitle={amzHome.sectionTitle}
              sectionSubtitle={amzHome.sectionSubtitle}
              products={amzHome.products}
              source="home-showcase"
            />

            {popular.length > 0 && (
              <div className="mt-16">
                <h3
                  className="font-display text-2xl font-extrabold sm:text-3xl"
                  data-reveal
                >
                  Las 6 guías y tablas de compatibilidad más consultadas
                </h3>
                <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {popular.slice(0, 6).map((a) => (
                    <div key={a.path} data-reveal>
                      <ArticleCard a={a} />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* 13. Transparencia Técnica vs Reclamos Comerciales */}
        <section className="wrap py-24">
          <div className="grid items-start gap-12 lg:grid-cols-[1fr_1.2fr]">
            <div>
              <span className="eyebrow" data-reveal>
                Metodología Editorial Independiente
              </span>
              <SplitHeading
                text="Especificaciones reales,"
                accent={{
                  text: "sin confusiones de marketing",
                  className: "text-prune",
                }}
                className="section-title mt-3"
              />
              <p className="mt-5 text-lg text-[var(--muted)]" data-reveal>
                En internet abundan kits genéricos que prometen &ldquo;voltajes
                inflados&rdquo; o brocas que se doblan al primer agujero. En{" "}
                <strong className="text-fxink">ArreglaTuDepa.com</strong>{" "}
                verificamos manuales técnicos oficiales y códigos exactos de
                fábrica. En este sitio {TOOLS_DISCLAIMER}.
              </p>
              <div className="mt-7 flex flex-wrap gap-3" data-reveal>
                <Link
                  href="/politica-editorial/"
                  className="btn btn-ghost"
                  data-magnetic
                >
                  Nuestra política editorial
                </Link>
                <Link
                  href="/divulgacion-de-afiliados/"
                  className="btn btn-ghost"
                  data-magnetic
                >
                  Divulgación de afiliados Amazon
                </Link>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="card spot p-6" data-reveal>
                <span className="inline-flex rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-900">
                  ✓ Lo que verificamos en cada guía
                </span>
                <ul className="mt-4 space-y-2 text-sm text-[var(--muted)]">
                  <li>• Torque real en Nm, in-lbs y UWO</li>
                  <li>• Apertura real del mandril (3/8&quot;, 1/2&quot; o 1/4&quot; Hex)</li>
                  <li>• Códigos exactos de baterías y cargadores compatibles</li>
                  <li>• Diferencia clara entre Kit completo y Bare Tool (B/Z)</li>
                </ul>
              </div>
              <div className="card spot p-6" data-reveal data-reveal-delay="1">
                <span className="inline-flex rounded-full bg-amber-100 px-3 py-1 text-xs font-bold text-amber-900">
                  ⚠️ Errores que te ayudamos a evitar
                </span>
                <ul className="mt-4 space-y-2 text-sm text-[var(--muted)]">
                  <li>• Comprar una herramienta sin batería por accidente</li>
                  <li>• Mezclar baterías 12V en herramientas de 20V MAX</li>
                  <li>• Enchufar un cargador 110V de EE. UU. directo a 220V</li>
                  <li>• Usar percutor en cerámica o ladrillo hueco pandereta</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 14. Preguntas Frecuentes (FAQ JSON-LD) */}
        <section className="wrap pb-24">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
            <div>
              <span className="eyebrow" data-reveal>
                Preguntas frecuentes
              </span>
              <SplitHeading
                text="Respuestas claras antes de comprar"
                className="section-title mt-3"
              />
              <p className="mt-4 text-[var(--muted)]" data-reveal>
                ¿Tienes el código de un modelo y quieres saber qué batería,
                cargador o broca le sirve? Nuestro Asesor IA te responde al
                instante.
              </p>
              <div className="mt-6 flex flex-wrap gap-3" data-reveal>
                <OpenChatButton
                  label="Preguntar al Asesor IA"
                  className="btn btn-buy shine"
                />
                <Link
                  href="/baterias-y-cargadores-compatibles/"
                  className="btn btn-ghost"
                >
                  Tablas de baterías
                </Link>
              </div>
            </div>
            <div className="space-y-3">
              {FAQ.map((f) => (
                <details
                  key={f.q}
                  className="card card-static group p-5 open:shadow-lg"
                  data-reveal
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-lg font-bold">
                    {f.q}
                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-fxsky text-fxbluedeep transition group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="mt-3 text-[var(--muted)]">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* 15. CTA Final Aurora */}
        <section className="wrap pb-6">
          <div className="relative isolate overflow-hidden rounded-[36px] bg-gradient-to-br from-[#090e1a] via-[#0f172a] to-[#0284c7] px-6 py-14 text-white sm:px-14 sm:py-20">
            <div className="hero-grid opacity-60" />
            <div className="pointer-events-none absolute -right-20 -top-24 h-80 w-80 rounded-full bg-fxlime/25 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-28 left-10 h-80 w-80 rounded-full bg-emerald-400/20 blur-3xl" />
            <div className="relative grid items-center gap-10 lg:grid-cols-[1.3fr_1fr]">
              <div className="text-center lg:text-left">
                <SplitHeading
                  text="Equipa tu departamento bien a la primera,"
                  accent={{
                    text: "al mejor precio en Amazon EE. UU.",
                    className: "text-fxlime",
                  }}
                  className="text-3xl font-extrabold sm:text-5xl"
                />
                <p className="mt-4 text-lg text-white/85">
                  Explora nuestras 2,014 comparativas de DEWALT, Bosch, Makita y
                  BLACK+DECKER o consulta gratis a nuestro Asesor IA en línea.
                </p>
                <div className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">
                  <Link
                    href="/herramientas-por-presupuesto-y-trabajo/"
                    className="btn btn-lime shine text-base"
                    data-magnetic
                  >
                    Ver Mejores Herramientas en Amazon
                  </Link>
                  <OpenChatButton
                    label="Hablar con el Asesor IA"
                    className="btn btn-glass text-base"
                    magnetic
                  />
                </div>
              </div>
              <div className="relative mx-auto w-full max-w-[380px]">
                <div className="relative aspect-[16/10] overflow-hidden rounded-3xl border-2 border-white/20 shadow-2xl float-y">
                  <Image
                    src={ambient("home-brocas-y-puntas")}
                    alt="Brocas para concreto, madera, titanio y puntas de impacto compatibles"
                    fill
                    sizes="380px"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <ClientEffects stickySource="home-sticky" />
    </>
  );
}
