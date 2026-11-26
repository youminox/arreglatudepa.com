import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { createClient } from "jsr:@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-sync-key",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
};

const OPENAI_API_KEY = Deno.env.get("OPENAI_API_KEY") || "";
const SUPABASE_URL = Deno.env.get("SUPABASE_URL") || "";
const SUPABASE_SERVICE_ROLE_KEY =
  Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") || "";

const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);

const SITE = "https://arreglatudepa.com";
const ALLOWED_MODELS = ["gpt-4o-mini", "gpt-4o"];
const AMAZON_TAG_US = "arreglatudepa-20";
const AMAZON_TAG_ES = "arreglatudepa-21";

export interface ArticleRow {
  slug: string;
  title: string;
  category: string;
  category_name: string;
  excerpt: string | null;
  featured_image: string | null;
  read_time: string | null;
  search_text: string | null;
}

export interface ArticleCard {
  slug: string;
  title: string;
  category: string;
  categoryName: string;
  url: string;
  image: string;
  readTime: string;
  excerpt: string;
}

export interface AmazonProductCard {
  id: string;
  badge: string;
  title: string;
  subtitle: string;
  rating: string;
  reviewsCount: string;
  urlUS: string;
  urlES: string;
}

const AMAZON_PRODUCTS: Record<string, AmazonProductCard> = {
  "dewalt-dcd777d1-20v-brushless": {
    id: "dewalt-dcd777d1-20v-brushless",
    badge: "🏆 #1 Mejor Calidad-Precio Todoterreno DEWALT 20V MAX",
    title:
      "DEWALT 20V MAX Cordless Drill/Driver Kit Brushless (DCD777D1 / DCD794D1) — Batería 2.0Ah y Cargador Incluidos",
    subtitle:
      "Motor Brushless sin escobillas de 340 UWO, mandril sin llave de 1/2\" (13 mm), 15 niveles de torque. Compatible con todas las baterías DEWALT 20V MAX (DCB203, DCB204, DCB205).",
    urlUS: `https://www.amazon.com/s?k=${encodeURIComponent("DEWALT 20V MAX Brushless Cordless Drill Driver Kit DCD777D1 DCD794D1")}&tag=${AMAZON_TAG_US}`,
    urlES: `https://www.amazon.es/s?k=${encodeURIComponent("DEWALT taladro atornillador sin escobillas 18V XR bateria cargador")}&tag=${AMAZON_TAG_ES}`,
  },
  "dewalt-dcd805d2-xr-hammer": {
    id: "dewalt-dcd805d2-xr-hammer",
    badge: "🧱 Mejor Taladro Percutor para Paredes de Concreto y Ladrillo",
    title:
      "DEWALT 20V MAX XR Brushless 1/2\" Hammer Drill/Driver Kit (DCD805D2 / DCD796D2) — 2 Baterías + Cargador",
    subtitle:
      "Hasta 34.000 BPM en modo percutor para perforar concreto y mampostería en departamento sin esfuerzo, mandril metálico de 1/2\" y luz LED pivotante de 3 posiciones.",
    urlUS: `https://www.amazon.com/s?k=${encodeURIComponent("DEWALT 20V MAX XR Brushless Hammer Drill Kit DCD805D2")}&tag=${AMAZON_TAG_US}`,
    urlES: `https://www.amazon.es/s?k=${encodeURIComponent("DEWALT DCD805 taladro percutor 18V XR sin escobillas")}&tag=${AMAZON_TAG_ES}`,
  },
  "bosch-ps31-12v-compact": {
    id: "bosch-ps31-12v-compact",
    badge: "🪵 Mejor Compacto 12V para Muebles, Melamina y Gabinetes",
    title:
      "Bosch 12V Max 3/8\" Drill/Driver Kit (PS31-2A / PS32-02) — 2 Baterías 2.0Ah, Cargador y Bolso",
    subtitle:
      "Ultraligero (< 1 kg), cabezal corto ideal para interiores de alacenas y 20+1 niveles de embrague suave que evitan barrer tornillos en melamina y MDF.",
    urlUS: `https://www.amazon.com/s?k=${encodeURIComponent("Bosch 12V Max 3/8 Inch Drill Driver Kit PS31-2A")}&tag=${AMAZON_TAG_US}`,
    urlES: `https://www.amazon.es/s?k=${encodeURIComponent("Bosch Professional GSR 12V-15 taladro atornillador 2 baterias")}&tag=${AMAZON_TAG_ES}`,
  },
  "bosch-flexiclick-12v-5in1": {
    id: "bosch-flexiclick-12v-5in1",
    badge: "🔧 Mejor Sistema 5-en-1 para Espacios Estrechos en Departamento",
    title:
      "Bosch 12V Max Flexiclick 5-in-1 Drill/Driver System (GSR12V-140FCB22 / GSR12V-300FCB22)",
    subtitle:
      "Incluye portapuntas magnético 1/4\" Hex, mandril 3/8\", cabezal excéntrico para bordes y cabezal en ángulo recto 90° con 2 baterías Bosch 12V Max.",
    urlUS: `https://www.amazon.com/s?k=${encodeURIComponent("Bosch 12V Max Flexiclick 5-in-1 Drill Driver System GSR12V")}&tag=${AMAZON_TAG_US}`,
    urlES: `https://www.amazon.es/s?k=${encodeURIComponent("Bosch Professional GSR 12V-15 FC FlexiClick 5 en 1")}&tag=${AMAZON_TAG_ES}`,
  },
  "makita-xfd131-18v-lxt": {
    id: "makita-xfd131-18v-lxt",
    badge: "⚡ Mejor Ergonomía y Durabilidad Profesional Makita 18V LXT",
    title:
      "Makita 18V LXT Lithium-Ion Brushless Cordless 1/2\" Driver-Drill Kit (XFD131 / XPH12) — Batería 3.0Ah y Cargador Rápido",
    subtitle:
      "440 in-lbs (50 Nm) de torque, motor Brushless japonés ultra eficiente y carga ultrarrápida en 30 min. Compatible con toda la línea Makita 18V LXT (BL1830B, BL1840B, BL1850B).",
    urlUS: `https://www.amazon.com/s?k=${encodeURIComponent("Makita XFD131 18V LXT Lithium-Ion Brushless Cordless Driver-Drill Kit")}&tag=${AMAZON_TAG_US}`,
    urlES: `https://www.amazon.es/s?k=${encodeURIComponent("Makita DDF484 DHP484 taladro 18V LXT sin escobillas")}&tag=${AMAZON_TAG_ES}`,
  },
  "black-decker-ldx120pk-kit": {
    id: "black-decker-ldx120pk-kit",
    badge: "💵 #1 Más Económico para Independizarse y Arreglos Básicos",
    title:
      "BLACK+DECKER 20V MAX Cordless Drill/Driver (LDX120C) o Kit Hogar 68 Piezas (LDX120PK)",
    subtitle:
      "La opción #1 en Amazon EE. UU. para presupuestos ajustados: incluye taladro 20V MAX PowerConnect con 11 posiciones de embrague, batería LBXR20, cargador y herramientas manuales.",
    urlUS: `https://www.amazon.com/s?k=${encodeURIComponent("BLACK+DECKER 20V MAX Cordless Drill Driver Project Kit LDX120PK LDX120C")}&tag=${AMAZON_TAG_US}`,
    urlES: `https://www.amazon.es/s?k=${encodeURIComponent("BLACK+DECKER taladro sin cable 18V maletin accesorios")}&tag=${AMAZON_TAG_ES}`,
  },
  "dewalt-dck240c2-combo": {
    id: "dewalt-dck240c2-combo",
    badge: "🧰 Combo #1 Más Vendido en Amazon EE. UU. (Taladro + Impacto)",
    title:
      "DEWALT 20V MAX Cordless Drill and Impact Driver Combo Kit (DCK240C2 / DCK277D2) — 2 Baterías y Cargador",
    subtitle:
      "El dúo definitivo: taladro 1/2\" para perforar con precisión + atornillador de impacto 1/4\" Hex para meter tornillos largos sin esfuerzo, con 2 baterías 20V MAX, cargador y bolso.",
    urlUS: `https://www.amazon.com/s?k=${encodeURIComponent("DEWALT 20V MAX Cordless Drill Impact Driver Combo Kit DCK240C2 DCK277D2")}&tag=${AMAZON_TAG_US}`,
    urlES: `https://www.amazon.es/s?k=${encodeURIComponent("DEWALT kit combo taladro y atornillador de impacto 18V XR")}&tag=${AMAZON_TAG_ES}`,
  },
  "dewalt-dcf680n2-screwdriver": {
    id: "dewalt-dcf680n2-screwdriver",
    badge: "🪛 Mejor Destornillador Eléctrico de Precisión (Armado de Muebles)",
    title:
      "DEWALT 8V MAX Gyroscopic Cordless Screwdriver (DCF680N2) / Bosch GO Smart USB Screwdriver",
    subtitle:
      "Control giroscópico de velocidad y embrague de 15 posiciones para armar muebles tipo IKEA, bisagras, enchufes y gabinetes sin dañar cabezas de tornillos.",
    urlUS: `https://www.amazon.com/s?k=${encodeURIComponent("DEWALT 8V MAX Cordless Screwdriver Kit Gyroscopic DCF680N2")}&tag=${AMAZON_TAG_US}`,
    urlES: `https://www.amazon.es/s?k=${encodeURIComponent("Bosch Professional Bosch GO destornillador a bateria DEWALT DCF680")}&tag=${AMAZON_TAG_ES}`,
  },
  "dewalt-dcb205-battery-charger": {
    id: "dewalt-dcb205-battery-charger",
    badge: "🔋 Batería y Cargador Oficial Compatible DEWALT 20V MAX",
    title:
      "DEWALT 20V MAX XR Battery 5.0Ah / 2.0Ah Pack (DCB205 / DCB203) + Cargador Rápido DCB115 / USB-C DCB094K",
    subtitle:
      "100 % compatible con todos los taladros y atornilladores DEWALT 20V MAX, XR y ATOMIC, con indicador LED de carga de 3 luces.",
    urlUS: `https://www.amazon.com/s?k=${encodeURIComponent("DEWALT 20V MAX Battery 5.0Ah 2.0Ah Charger Starter Kit DCB205 DCB115")}&tag=${AMAZON_TAG_US}`,
    urlES: `https://www.amazon.es/s?k=${encodeURIComponent("DEWALT bateria 18V XR 5.0Ah DCB184 cargador DCB115")}&tag=${AMAZON_TAG_ES}`,
  },
  "makita-bosch-bd-batteries": {
    id: "makita-bosch-bd-batteries",
    badge: "🔌 Baterías y Cargadores Oficiales Makita 18V LXT / Bosch 12V-18V / B+D 20V",
    title:
      "Baterías Originales Makita BL1850B 18V LXT · Bosch GBA12V30 / CORE18V · BLACK+DECKER LBXR20 20V MAX",
    subtitle:
      "Reemplazos auténticos con protección electrónica contra sobrecarga y sobrecalentamiento para mantener el torque real de tu herramienta.",
    urlUS: `https://www.amazon.com/s?k=${encodeURIComponent("Makita BL1850B 18V LXT Bosch 12V Max Battery BLACK+DECKER 20V LBXR20")}&tag=${AMAZON_TAG_US}`,
    urlES: `https://www.amazon.es/s?k=${encodeURIComponent("Makita BL1850B bateria 18V Bosch GBA 12V BLACK DECKER 18V")}&tag=${AMAZON_TAG_ES}`,
  },
  "dewalt-bosch-impact-bits-masonry": {
    id: "dewalt-bosch-impact-bits-masonry",
    badge: "🔩 Set #1 de Brocas y Puntas Compatibles (Concreto, Madera, Metal e Impacto)",
    title:
      "DEWALT MaxFit / FlexTorq Screwdriver Bit Set (DWA2T40IR) + Bosch Multi-Construction / Masonry Drill Bits",
    subtitle:
      "Vástago universal 1/4\" Hex y cilíndrico compatible con mandriles de 3/8\" y 1/2\" de DEWALT, Bosch, Makita y BLACK+DECKER para concreto, ladrillo, melamina y metal.",
    urlUS: `https://www.amazon.com/s?k=${encodeURIComponent("DEWALT Screwdriver Bit Set Impact Ready DWA2T40IR Bosch Masonry Drill Bit Set")}&tag=${AMAZON_TAG_US}`,
    urlES: `https://www.amazon.es/s?k=${encodeURIComponent("DEWALT Bosch juego puntas atornillar impacto y brocas hormigon madera metal")}&tag=${AMAZON_TAG_ES}`,
  },
};

function calculateCostUsd(
  model: string,
  promptTokens: number,
  completionTokens: number
): number {
  if (model.includes("mini")) {
    return Number(
      (promptTokens * 0.00000015 + completionTokens * 0.0000006).toFixed(6)
    );
  }
  return Number(
    (promptTokens * 0.0000025 + completionTokens * 0.00001).toFixed(6)
  );
}

const norm = (s: string) =>
  (s || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\s-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();

const STOPWORDS = new Set([
  "como",
  "cual",
  "cuales",
  "que",
  "quien",
  "donde",
  "cuando",
  "por",
  "para",
  "con",
  "sin",
  "una",
  "uno",
  "los",
  "las",
  "del",
  "al",
  "hola",
  "quiero",
  "puedo",
  "recomienda",
  "mejor",
  "mejores",
  "sobre",
  "mas",
  "muy",
  "tiene",
  "tengo",
  "herramienta",
  "herramientas",
  "depa",
  "departamento",
  "casa",
]);

function extractTokens(text: string): string[] {
  return norm(text)
    .split(" ")
    .filter((w) => w.length >= 2 && !STOPWORDS.has(w));
}

let catalogCache: {
  at: number;
  rows: ArticleRow[];
  bySlug: Map<string, ArticleRow>;
} | null = null;

async function loadCatalog(): Promise<{
  rows: ArticleRow[];
  bySlug: Map<string, ArticleRow>;
}> {
  if (
    catalogCache &&
    Date.now() - catalogCache.at < 10 * 60 * 1000 &&
    catalogCache.rows.length > 0
  ) {
    return catalogCache;
  }
  const [batch1, batch2, batch3] = await Promise.all([
    supabase
      .from("arreglatudepa_articles")
      .select(
        "slug, title, category, category_name, excerpt, featured_image, read_time, search_text"
      )
      .eq("active", true)
      .range(0, 999),
    supabase
      .from("arreglatudepa_articles")
      .select(
        "slug, title, category, category_name, excerpt, featured_image, read_time, search_text"
      )
      .eq("active", true)
      .range(1000, 1999),
    supabase
      .from("arreglatudepa_articles")
      .select(
        "slug, title, category, category_name, excerpt, featured_image, read_time, search_text"
      )
      .eq("active", true)
      .range(2000, 2999),
  ]);

  const rows: ArticleRow[] = [];
  const bySlug = new Map<string, ArticleRow>();
  for (const data of [batch1.data, batch2.data, batch3.data]) {
    if (Array.isArray(data)) {
      for (const r of data as ArticleRow[]) {
        if (!bySlug.has(r.slug)) {
          bySlug.set(r.slug, r);
          rows.push(r);
        }
      }
    }
  }
  catalogCache = { at: Date.now(), rows, bySlug };
  return catalogCache;
}

function toArticleCard(r: ArticleRow): ArticleCard {
  const img = r.featured_image || "/img/ambiente/home-hero-herramientas.webp";
  const url =
    r.slug === r.category
      ? `${SITE}/${r.category}/`
      : `${SITE}/${r.category}/${r.slug}/`;
  return {
    slug: r.slug,
    title: r.title,
    category: r.category,
    categoryName: r.category_name,
    url,
    image: img.startsWith("http") ? img : `${SITE}${img}`,
    readTime: r.read_time || "7 min",
    excerpt: (r.excerpt || "").slice(0, 145),
  };
}

function searchArticles(
  rows: ArticleRow[],
  userMessage: string,
  historyText: string,
  limit = 14
): ArticleRow[] {
  const primaryTokens = extractTokens(userMessage);
  const contextTokens = extractTokens(historyText).filter(
    (t) => !primaryTokens.includes(t)
  );
  const fullPhrase = norm(userMessage);

  const starterSlugs = [
    "mejores-taladros-inalambricos-para-departamento-y-casa-amazon",
    "dewalt-vs-bosch-vs-makita-vs-black-decker-cual-elegir",
    "dewalt-dcd777d1-taladro-brushless-20v-max-resena-y-compatibilidad",
    "bosch-ps31-2a-taladro-12v-max-compacto-resena-y-baterias",
    "black-decker-ldx120c-taladro-20v-max-economico-resena",
    "tabla-compatibilidad-baterias-dewalt-20v-bosch-18v-makita-lxt",
  ];

  if (primaryTokens.length === 0 && contextTokens.length === 0) {
    const picked: ArticleRow[] = [];
    for (const s of starterSlugs) {
      const f = rows.find((r) => r.slug === s);
      if (f) picked.push(f);
    }
    return picked.length > 0 ? picked : rows.slice(0, 8);
  }

  const scored: Array<{ r: ArticleRow; score: number }> = [];
  for (const r of rows) {
    const titleNorm = norm(r.title);
    const catNorm = norm(`${r.category_name} ${r.category}`);
    const bodyNorm =
      r.search_text || `${titleNorm} ${catNorm} ${norm(r.excerpt || "")}`;

    let score = 0;
    if (fullPhrase.length >= 5 && titleNorm.includes(fullPhrase)) score += 45;

    let matchedPrimary = 0;
    for (const tok of primaryTokens) {
      if (titleNorm.includes(tok)) {
        score += 16;
        matchedPrimary++;
      } else if (catNorm.includes(tok)) {
        score += 9;
        matchedPrimary++;
      } else if (bodyNorm.includes(tok)) {
        score += 5;
        matchedPrimary++;
      }
    }
    if (matchedPrimary >= 2) score += matchedPrimary * 8;
    if (starterSlugs.includes(r.slug)) score += 5;

    for (const cTok of contextTokens.slice(-5)) {
      if (titleNorm.includes(cTok)) score += 3;
    }

    if (score > 0) scored.push({ r, score });
  }

  scored.sort((a, b) => b.score - a.score);
  return scored.slice(0, limit).map((s) => s.r);
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  const json = (b: unknown, status = 200) =>
    new Response(JSON.stringify(b), {
      status,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });

  try {
    const body =
      req.method === "POST" ? await req.json().catch(() => ({})) : {};
    const mode = body.mode || (req.method === "GET" ? "config" : "chat");

    // 0. Seed / Sync articles endpoint
    if (mode === "seed_articles") {
      const syncKey = req.headers.get("x-sync-key") || "";
      if (syncKey !== "arreglatudepa-sync-2026") {
        return json({ error: "No autorizado" }, 401);
      }
      const rows = Array.isArray(body.articles) ? body.articles : [];
      if (rows.length === 0) return json({ error: "Sin artículos" }, 400);
      const { error } = await supabase
        .from("arreglatudepa_articles")
        .upsert(rows, { onConflict: "slug" });
      if (error) return json({ error: error.message }, 500);
      catalogCache = null;
      return json({ success: true, count: rows.length });
    }

    // 1. Load live config (Default: gpt-4o-mini as requested by user)
    const { data: configRow } = await supabase
      .from("arreglatudepa_chat_config")
      .select("*")
      .eq("id", "default")
      .maybeSingle();

    const config = configRow || {
      is_enabled: true,
      ai_model: "gpt-4o-mini",
      temperature: 0.35,
      max_messages_per_session: 30,
      daily_budget_usd: 5.0,
      welcome_message:
        "¡Hola! 🛠️🔋 Soy tu Asesor de Herramientas y Compatibilidad IA de ArreglaTuDepa.com (modelo mini rápido). Cuéntame tu presupuesto, el trabajo que vas a hacer (armar muebles, drywall o concreto) o el modelo DEWALT, Bosch, Makita o BLACK+DECKER que tienes, y te recomendaré la herramienta, batería, cargador y brocas exactas en Amazon Estados Unidos.",
      custom_instructions: "",
    };

    const activeModel = ALLOWED_MODELS.includes(config.ai_model)
      ? config.ai_model
      : "gpt-4o-mini";

    if (mode === "config" || req.method === "GET") {
      return json({
        is_enabled: config.is_enabled,
        welcome_message: config.welcome_message,
        ai_model: activeModel,
        max_messages_per_session: config.max_messages_per_session,
      });
    }

    // 2. Track click on an article or Amazon product
    if (mode === "track_click") {
      const {
        session_id,
        visitor_id,
        article_slug,
        article_title,
        category,
        target_url,
        page_url,
      } = body;
      if (target_url) {
        await supabase.from("arreglatudepa_chat_clicks").insert({
          session_id: session_id || null,
          visitor_id: String(visitor_id || "anon").slice(0, 80),
          article_slug: article_slug ? String(article_slug).slice(0, 180) : null,
          article_title: article_title
            ? String(article_title).slice(0, 240)
            : null,
          category: category ? String(category).slice(0, 80) : null,
          target_url: String(target_url).slice(0, 500),
          page_url: page_url ? String(page_url).slice(0, 500) : null,
        });

        if (session_id) {
          const { data: sess } = await supabase
            .from("arreglatudepa_chat_sessions")
            .select("clicks_count, clicked_urls")
            .eq("id", session_id)
            .maybeSingle();
          if (sess) {
            const urls = Array.isArray(sess.clicked_urls)
              ? sess.clicked_urls
              : [];
            if (!urls.includes(target_url)) urls.push(target_url);
            await supabase
              .from("arreglatudepa_chat_sessions")
              .update({
                clicks_count: (sess.clicks_count || 0) + 1,
                clicked_urls: urls,
              })
              .eq("id", session_id);
          }
        }
      }
      return json({ success: true });
    }

    // 3. Chat Completion
    if (!config.is_enabled) {
      return json({
        reply: `En este momento el Asesor de Herramientas IA está en mantenimiento breve. Puedes ver nuestras comparativas de DEWALT, Bosch, Makita y BLACK+DECKER en [ArreglaTuDepa.com](${SITE}/).`,
        recommended_articles: [],
        recommended_products: [],
        suggested_options: [
          "Mejores taladros para departamento",
          "DEWALT vs Bosch vs Makita",
        ],
        disabled: true,
      });
    }

    const userMessage = String(body.message || "").trim().slice(0, 1000);
    if (!userMessage) return json({ error: "Mensaje vacío" }, 400);

    const visitorId = String(
      body.visitor_id || "atd-" + crypto.randomUUID().slice(0, 8)
    ).slice(0, 80);
    const region = body.region === "ES" ? "ES" : "US";
    const storeName = region === "ES" ? "Amazon.es" : "Amazon.com";
    const pageUrl = String(body.page_url || SITE + "/").slice(0, 500);
    const userAgent = String(
      body.user_agent || req.headers.get("user-agent") || ""
    ).slice(0, 300);
    const history = Array.isArray(body.history) ? body.history.slice(-8) : [];
    let sessionId: string | null = body.session_id || null;

    let existingSession: any = null;
    if (sessionId) {
      const { data: s } = await supabase
        .from("arreglatudepa_chat_sessions")
        .select("*")
        .eq("id", sessionId)
        .maybeSingle();
      existingSession = s;
    }

    if (!existingSession) {
      const { data: created, error: createErr } = await supabase
        .from("arreglatudepa_chat_sessions")
        .insert({
          visitor_id: visitorId,
          page_url: pageUrl,
          user_agent: userAgent,
          first_user_message: userMessage.slice(0, 250),
          last_user_message: userMessage.slice(0, 250),
          messages_count: 1,
          model_used: activeModel,
        })
        .select("*")
        .single();

      if (!createErr && created) {
        existingSession = created;
        sessionId = created.id;
      }
    }

    if (sessionId) {
      await supabase.from("arreglatudepa_chat_messages").insert({
        session_id: sessionId,
        role: "user",
        content: userMessage,
      });
    }

    const catalog = await loadCatalog();
    const recentHistoryText = history
      .slice(-3)
      .map((h: any) => h?.content || "")
      .join(" ");
    const candidateRows = searchArticles(
      catalog.rows,
      userMessage,
      recentHistoryText,
      14
    );

    const candidatesPrompt =
      candidateRows.length > 0
        ? candidateRows
            .map((r) => {
              const u =
                r.slug === r.category
                  ? `${SITE}/${r.category}/`
                  : `${SITE}/${r.category}/${r.slug}/`;
              return `- SLUG: "${r.slug}" | TÍTULO: "${r.title}" | CATEGORÍA: ${r.category_name} | URL: ${u} | RESUMEN: ${(r.excerpt || "").slice(0, 140)}`;
            })
            .join("\n")
        : "No se encontraron artículos exactos con esos términos.";

    const amazonCatalogPrompt = Object.values(AMAZON_PRODUCTS)
      .map(
        (p) =>
          `- PRODUCT_ID: "${p.id}" | ${p.badge} | NOMBRE: "${p.title}" | DETALLE: ${p.subtitle} | URL_${region}: ${region === "ES" ? p.urlES : p.urlUS}`
      )
      .join("\n");

    const extraInstructions = config.custom_instructions
      ? `\nINSTRUCCIONES ADICIONALES DEL ADMINISTRADOR:\n${config.custom_instructions}\n`
      : "";

    const systemPrompt = `Eres el Asesor Oficial de Herramientas y Compatibilidad IA de ArreglaTuDepa.com (${SITE}), la guía líder en español con más de 2,000 artículos especializados para elegir herramientas de DEWALT, Bosch, Makita y BLACK+DECKER en Amazon Estados Unidos (fundado por Carlos Lingan Borja, info@charlielingan.com).

Tu doble misión es:
1. RESPONDER TODAS LAS DUDAS DEL USUARIO con precisión técnica y lenguaje claro en español:
   - PRESUPUESTO Y TIPO DE TRABAJO: Compara taladros atornilladores, taladros percutores (concreto/ladrillo), destornilladores eléctricos (4V/8V para muebles y melamina) y juegos/kits de herramientas según el presupuesto.
   - COMPATIBILIDAD EXACTA: Indica siempre qué baterías, cargadores, brocas y puntas son compatibles con cada modelo:
     * DEWALT 20V MAX / XR / ATOMIC usan baterías deslizantes 20V MAX (DCB203, DCB204, DCB205, PowerStack) y cargadores DCB112/DCB115/DCB094K (NO son compatibles con herramientas DEWALT 12V MAX XTREME).
     * Bosch 12V Max usa baterías GBA12V / BAT414 y cargador GAL12V-20; Bosch 18V usa baterías CORE18V / AMPShare GBA18V.
     * Makita 18V LXT usa baterías BL1820B/BL1840B/BL1850B y cargador rápido DC18RC (NO mezclar con 12V CXT BL1021B ni 40V XGT).
     * BLACK+DECKER 20V MAX PowerConnect usa baterías LBXR20 / LB2X4020 y cargador LCS1620.
     * Recuerda avisar que los códigos terminados en "B" o "Z" en Amazon son "Bare Tool" (solo herramienta sin batería ni cargador), mientras que "C1/C2/D1/D2/P2" incluyen batería y cargador.
     * Indica mandril compatible (3/8" acepta brocas hasta 10 mm; 1/2" hasta 13 mm; 1/4" Hex para puntas de impacto PH2/PZ2/Torx).
   - Enlaza en tu respuesta entre 1 y 3 guías de nuestro listado inferior usando Markdown exacto: [Título](${SITE}/categoria/slug/) e incluye sus slugs en "recommended_slugs".
2. AYUDAR ACTIVAMENTE A QUE COMPREN EN AMAZON (${storeName}):
   - Recomienda siempre 1 o 2 productos exactos de nuestro CATÁLOGO AMAZON OFICIAL (por ejemplo, la herramienta ideal + su set de brocas/puntas o batería compatible).
   - Incluye en tu texto un enlace Markdown directo al producto en ${storeName} usando su URL_${region} exacta y añade entre 1 y 2 IDs en "recommended_product_ids".${extraInstructions}

CATÁLOGO AMAZON OFICIAL (${storeName}):
${amazonCatalogPrompt}

ARTÍCULOS ENCONTRADOS EN ARREGLATUDEPA.COM:
${candidatesPrompt}

Responde ÚNICAMENTE con un objeto JSON válido con estas 4 llaves exactas:
{
  "reply": "Tu respuesta experta y clara en español comparando presupuesto, tipo de trabajo y compatibilidad de baterías/brocas/puntas, con enlaces Markdown a nuestras guías y al producto en ${storeName}",
  "recommended_slugs": ["slug-1", "slug-2"],
  "recommended_product_ids": ["dewalt-dcd777d1-20v-brushless", "dewalt-bosch-impact-bits-masonry"],
  "suggested_options": ["Opción 1", "Opción 2", "Opción 3"]
}`;

    const chatMessages: any[] = [{ role: "system", content: systemPrompt }];
    for (const h of history) {
      if (
        h &&
        (h.role === "user" || h.role === "assistant") &&
        typeof h.content === "string"
      ) {
        chatMessages.push({ role: h.role, content: h.content.slice(0, 1200) });
      }
    }
    chatMessages.push({ role: "user", content: userMessage });

    const openaiRes = await fetch(
      "https://api.openai.com/v1/chat/completions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${OPENAI_API_KEY}`,
        },
        body: JSON.stringify({
          model: activeModel,
          messages: chatMessages,
          temperature: Number(config.temperature) || 0.35,
          max_tokens: 900,
          response_format: { type: "json_object" },
        }),
      }
    );

    if (!openaiRes.ok) {
      throw new Error("OpenAI status " + openaiRes.status);
    }

    const openaiData = await openaiRes.json();
    const rawContent = openaiData.choices?.[0]?.message?.content || "{}";
    let parsed: any = {};
    try {
      parsed = JSON.parse(rawContent);
    } catch {
      parsed = {
        reply: rawContent,
        recommended_slugs: candidateRows.slice(0, 2).map((r) => r.slug),
        recommended_product_ids: ["dewalt-dcd777d1-20v-brushless"],
        suggested_options: [
          "¿Qué taladro sirve para concreto en departamento?",
          "Compatibilidad de baterías DEWALT 20V MAX",
          "Mejor kit económico por menos de $70 en Amazon",
        ],
      };
    }

    const slugs: string[] = Array.isArray(parsed.recommended_slugs)
      ? parsed.recommended_slugs.slice(0, 3)
      : [];
    const recommendedArticles: ArticleCard[] = slugs
      .map((s) => catalog.bySlug.get(s))
      .filter((r): r is ArticleRow => Boolean(r))
      .map(toArticleCard);

    const productIds: string[] = Array.isArray(parsed.recommended_product_ids)
      ? parsed.recommended_product_ids.slice(0, 2)
      : ["dewalt-dcd777d1-20v-brushless"];
    const recommendedProducts: AmazonProductCard[] = productIds
      .map((id) => AMAZON_PRODUCTS[id])
      .filter((p): p is AmazonProductCard => Boolean(p));

    const suggestedOptions: string[] = Array.isArray(parsed.suggested_options)
      ? parsed.suggested_options
          .slice(0, 3)
          .map((s: unknown) => String(s).slice(0, 72))
      : [];

    const replyText: string =
      parsed.reply ||
      `Te recomiendo revisar nuestra comparativa de [Mejores Taladros Inalámbricos para Departamento y Casa en Amazon](${SITE}/herramientas-por-presupuesto-y-trabajo/mejores-taladros-inalambricos-para-departamento-y-casa-amazon/).`;

    const promptTokens = openaiData.usage?.prompt_tokens || 0;
    const completionTokens = openaiData.usage?.completion_tokens || 0;
    const totalTokens =
      openaiData.usage?.total_tokens || promptTokens + completionTokens;
    const costUsd = calculateCostUsd(
      activeModel,
      promptTokens,
      completionTokens
    );

    if (sessionId && existingSession) {
      await supabase.from("arreglatudepa_chat_messages").insert({
        session_id: sessionId,
        role: "assistant",
        content: replyText,
        recommended_articles: recommendedArticles,
        suggested_options: suggestedOptions,
        model: activeModel,
        prompt_tokens: promptTokens,
        completion_tokens: completionTokens,
        total_tokens: totalTokens,
        cost_usd: costUsd,
      });

      const prevRecs: string[] = Array.isArray(
        existingSession.recommended_articles
      )
        ? existingSession.recommended_articles
        : [];
      for (const ra of recommendedArticles) {
        if (!prevRecs.includes(ra.title)) prevRecs.push(ra.title);
      }
      for (const rp of recommendedProducts) {
        const label = `[Amazon] ${rp.title}`;
        if (!prevRecs.includes(label)) prevRecs.push(label);
      }

      await supabase
        .from("arreglatudepa_chat_sessions")
        .update({
          last_user_message: userMessage.slice(0, 250),
          messages_count: (existingSession.messages_count || 1) + 2,
          recommended_articles: prevRecs.slice(0, 30),
          prompt_tokens: (existingSession.prompt_tokens || 0) + promptTokens,
          completion_tokens:
            (existingSession.completion_tokens || 0) + completionTokens,
          total_tokens: (existingSession.total_tokens || 0) + totalTokens,
          estimated_cost_usd: Number(
            (Number(existingSession.estimated_cost_usd || 0) + costUsd).toFixed(
              6
            )
          ),
          model_used: activeModel,
          last_message_at: new Date().toISOString(),
        })
        .eq("id", sessionId);
    }

    await supabase.from("token_usage").insert({
      source: "arreglatudepa.com",
      content_type: "ai_chat",
      model: activeModel,
      prompt_tokens: promptTokens,
      completion_tokens: completionTokens,
      total_tokens: totalTokens,
      images_generated: 0,
      estimated_cost_usd: costUsd,
      slug: sessionId || visitorId,
    });

    return json({
      session_id: sessionId,
      reply: replyText,
      recommended_articles: recommendedArticles,
      recommended_products: recommendedProducts,
      suggested_options: suggestedOptions,
      model: activeModel,
    });
  } catch (err: any) {
    return json(
      {
        error: err.message || "Error interno",
        reply: `Puedes explorar nuestras más de 2,000 guías de herramientas DEWALT, Bosch, Makita y BLACK+DECKER en [ArreglaTuDepa.com](${SITE}/).`,
        recommended_articles: [],
        recommended_products: [],
        suggested_options: ["Intentar de nuevo"],
      },
      500
    );
  }
});
