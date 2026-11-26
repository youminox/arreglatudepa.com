export const AMAZON_TAG_US = "arreglatudepa-20";
export const AMAZON_TAG_ES = "arreglatudepa-21";

export type AmazonStoreRegion = "US" | "ES";

export type AmazonCategoryType =
  | "drill-driver"
  | "hammer-drill"
  | "electric-screwdriver"
  | "tool-kit"
  | "battery-charger"
  | "bits-accessories";

export interface AmazonProductRecommendation {
  id: string;
  badge: string;
  title: string;
  subtitle: string;
  features: string[];
  categoryType: AmazonCategoryType;
  specs?: {
    budgetRange: string;
    jobType: string;
    batteryChargerCompat: string;
    bitsAndChuckCompat: string;
  };
  asinUS?: string;
  asinES?: string;
  queryUS: string;
  queryES: string;
  ctaLabel: string;
}

export function buildAmazonUrl(
  product: AmazonProductRecommendation,
  region: AmazonStoreRegion
): string {
  if (region === "ES") {
    if (product.asinES) {
      return `https://www.amazon.es/dp/${product.asinES}?tag=${AMAZON_TAG_ES}`;
    }
    const q = encodeURIComponent(product.queryES);
    return `https://www.amazon.es/s?k=${q}&tag=${AMAZON_TAG_ES}`;
  }

  if (product.asinUS) {
    return `https://www.amazon.com/dp/${product.asinUS}?tag=${AMAZON_TAG_US}`;
  }
  const q = encodeURIComponent(product.queryUS);
  return `https://www.amazon.com/s?k=${q}&tag=${AMAZON_TAG_US}`;
}

export function detectUserAmazonRegion(): AmazonStoreRegion {
  if (typeof window === "undefined") {
    return "US";
  }
  try {
    const saved = window.localStorage.getItem("atd_amazon_region");
    if (saved === "US" || saved === "ES") return saved;
  } catch {
    // ignore
  }
  try {
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || "";
    const lang = (navigator.language || "").toLowerCase();
    if (
      tz === "Europe/Madrid" ||
      tz === "Atlantic/Canary" ||
      tz === "Europe/Ceuta" ||
      tz.startsWith("Europe/") ||
      lang === "es-es"
    ) {
      return "ES";
    }
    return "US";
  } catch {
    return "US";
  }
}

export const CATALOG: Record<string, AmazonProductRecommendation> = {
  DEWALT_DCD777_BRUSHLESS: {
    id: "dewalt-dcd777d1-20v-brushless",
    badge: "🏆 #1 Mejor Calidad-Precio Todoterreno DEWALT 20V MAX",
    title:
      "DEWALT 20V MAX Brushless Cordless Drill/Driver Kit (DCD777D1 / DCD794D1) — Batería 2.0Ah, Cargador y Bolso",
    subtitle:
      "El taladro atornillador sin escobillas más equilibrado de Amazon EE. UU.: entrega 340 UWO de potencia en un cabezal compacto de 19 cm, ideal para muebles, madera, metal y reparaciones en departamento.",
    features: [
      "Motor Brushless sin escobillas con hasta 57 % más autonomía que los modelos tradicionales con carbones (como el DCD771)",
      "Mandril sin llave con trinquete de 1/2\" (13 mm), 2 velocidades mecánicas (0–500 / 0–1.750 RPM) y 15 niveles de embrague",
      "100 % compatible con las más de 300 herramientas y baterías DEWALT 20V MAX, XR y PowerStack",
    ],
    categoryType: "drill-driver",
    specs: {
      budgetRange: "precio variable en Amazon (Kit completo)",
      jobType: "Muebles, madera, drywall, metal y mantenimiento general",
      batteryChargerCompat:
        "DEWALT 20V MAX (DCB203 2Ah, DCB205 5Ah, PowerStack) + DCB112/DCB115",
      bitsAndChuckCompat:
        "Mandril 1/2\" (13 mm) · Brocas cilíndricas y puntas 1/4\" Hex",
    },
    queryUS:
      "DEWALT 20V MAX Brushless Cordless Drill Driver Kit DCD777D1 DCD794D1",
    queryES:
      "DEWALT taladro atornillador sin escobillas 18V XR bateria cargador",
    ctaLabel: "Consultar Precio de DEWALT 20V Brushless en Amazon",
  },

  DEWALT_DCD805_HAMMER: {
    id: "dewalt-dcd805d2-xr-hammer",
    badge: "🧱 #1 Mejor Taladro Percutor para Paredes de Concreto y Ladrillo",
    title:
      "DEWALT 20V MAX XR Brushless 1/2\" Hammer Drill/Driver Kit (DCD805D2 / DCD796D2) — 2 Baterías + Cargador",
    subtitle:
      "Si las paredes de tu departamento son de concreto armado o ladrillo macizo, su modo percutor de 34.000 golpes por minuto (BPM) perfora limpio para soportes de TV de 65\", repisas pesadas y cortinas.",
    features: [
      "Modo triple seleccionable: Atornillador con 15 niveles de torque, Taladro rotativo y Taladro Percutor (Martillo) para concreto",
      "Mandril 100 % metálico nitro-carburizado de 1/2\" con mordazas de carburo que evitan que la broca de concreto patine",
      "Luz LED pivotante de 3 posiciones y 70 lúmenes en la base para iluminar sin sombra del mandril",
    ],
    categoryType: "hammer-drill",
    specs: {
      budgetRange: "precio variable en Amazon (Kit 2 baterías)",
      jobType: "Paredes de concreto, ladrillo, soportes de TV y obra pesada",
      batteryChargerCompat:
        "Todas las baterías DEWALT 20V MAX / XR / PowerStack + DCB115",
      bitsAndChuckCompat:
        "Mandril metálico 1/2\" · Brocas carburo concreto (3 caras) y puntas Hex",
    },
    queryUS: "DEWALT 20V MAX XR Brushless Hammer Drill Kit DCD805D2",
    queryES: "DEWALT DCD805 taladro percutor 18V XR sin escobillas",
    ctaLabel: "Ver Precio del Percutor DEWALT XR en Amazon",
  },

  BOSCH_PS31_12V: {
    id: "bosch-ps31-12v-compact",
    badge: "🪵 #1 Mejor Compacto 12V para Muebles, Melamina y Gabinetes",
    title:
      "Bosch 12V Max 3/8\" Drill/Driver Kit (PS31-2A / PS32-02 Brushless) — 2 Baterías 2.0Ah, Cargador y Bolso",
    subtitle:
      "Pesa menos de 1 kg con la batería puesta y cabe dentro de cualquier cajón o alacena de cocina: su embrague suave de 20+1 niveles es el favorito para armar muebles en melamina sin barrer tornillos.",
    features: [
      "Diseño subcompacto Bosch 12V Max con cabezal de solo 17.8 cm y agarre delgado que no cansa la muñeca al trabajar en alto",
      "Incluye 2 baterías Bosch de 12V (2.0Ah) y cargador rápido de 30 minutos para no detener nunca el armado",
      "2 velocidades (0–350 RPM para atornillar con control total y 0–1.300 RPM para perforar madera, drywall y metal)",
    ],
    categoryType: "drill-driver",
    specs: {
      budgetRange: "precio variable en Amazon (Kit 2 baterías)",
      jobType: "Muebles en melamina/IKEA, bisagras de cocina y drywall",
      batteryChargerCompat:
        "Bosch 12V Max (BAT414 2.0Ah / GBA12V30 3.0Ah) + GAL12V-20",
      bitsAndChuckCompat:
        "Mandril 3/8\" (10 mm) · Puntas 1/4\" Hex (PH2, PZ2, Torx) y brocas <=10 mm",
    },
    queryUS: "Bosch 12V Max 3/8 Inch Drill Driver Kit PS31-2A",
    queryES:
      "Bosch Professional GSR 12V-15 taladro atornillador 2 baterias",
    ctaLabel: "Consultar Precio de Bosch 12V Max en Amazon",
  },

  BOSCH_FLEXICLICK_5IN1: {
    id: "bosch-flexiclick-12v-5in1",
    badge: "🔧 Mejor Sistema Multicabezal 5-en-1 para Espacios Imposibles",
    title:
      "Bosch 12V Max Flexiclick 5-in-1 Drill/Driver System (GSR12V-140FCB22 / GSR12V-300FCB22)",
    subtitle:
      "La navaja suiza para departamentos modernos: cambia en un clic entre portapuntas magnético, mandril tradicional, cabezal excéntrico al ras de paredes y cabezal en ángulo recto de 90°.",
    features: [
      "Incluye los 4 cabezales intercambiables One-Click + 2 baterías Bosch 12V Max de 2.0Ah y cargador",
      "El cabezal excéntrico permite atornillar a milímetros de una esquina de clóset sin inclinar el tornillo",
      "El cabezal de 90° gira en 16 posiciones distintas para instalar repisas y bisagras en huecos mínimos",
    ],
    categoryType: "drill-driver",
    specs: {
      budgetRange: "precio variable en Amazon (Kit 5-en-1 completo)",
      jobType: "Instalación de cocinas, clósets a medida y rincones estrechos",
      batteryChargerCompat: "Baterías Bosch 12V Max GBA12V / BAT414 + GAL12V-20",
      bitsAndChuckCompat:
        "Mandril 3/8\"-1/2\" + 1/4\" Hex directo + Cabezal 90° y Excéntrico",
    },
    queryUS:
      "Bosch 12V Max Flexiclick 5-in-1 Drill Driver System GSR12V-140FCB22",
    queryES: "Bosch Professional GSR 12V-15 FC FlexiClick 5 en 1",
    ctaLabel: "Ver Sistema Bosch Flexiclick 5-en-1 en Amazon",
  },

  MAKITA_XFD131_LXT: {
    id: "makita-xfd131-18v-lxt",
    badge: "⚡ Mejor Ergonomía, Silencio y Carga Rápida Makita 18V LXT",
    title:
      "Makita 18V LXT Lithium-Ion Brushless Cordless 1/2\" Driver-Drill Kit (XFD131 / XPH12) — Batería 3.0Ah + Cargador Rápido",
    subtitle:
      "Ingeniería japonesa pensada para durar más de una década: 440 in-lbs (50 Nm) de torque controlado electrónicamente y el cargador con ventilador más rápido del mercado (30 minutos).",
    features: [
      "Motor Brushless Makita BL regulado electrónicamente que ajusta torque y RPM según la dureza de la madera o metal",
      "Incluye batería Makita 18V LXT 3.0Ah con indicador LED y cargador rápido DC18RC con enfriamiento activo",
      "Puerta de entrada a la plataforma inalámbrica #1 del mundo con más de 300 herramientas Makita 18V LXT compatibles",
    ],
    categoryType: "drill-driver",
    specs: {
      budgetRange: "precio variable en Amazon (Kit 3.0Ah carga 30 min)",
      jobType: "Carpintería fina, remodelación exigente y uso intensivo",
      batteryChargerCompat:
        "Makita 18V LXT Star Protection (BL1820B, BL1840B, BL1850B) + DC18RC",
      bitsAndChuckCompat:
        "Mandril 1/2\" (13 mm) · Brocas hasta 13 mm y puntas Makita Impact XPS",
    },
    queryUS:
      "Makita XFD131 18V LXT Lithium-Ion Brushless Cordless Driver-Drill Kit",
    queryES: "Makita DDF484 DHP484 taladro 18V LXT sin escobillas",
    ctaLabel: "Consultar Precio de Makita 18V LXT en Amazon",
  },

  BLACK_DECKER_LDX120: {
    id: "black-decker-ldx120pk-kit",
    badge: "💵 #1 Más Económico para Primer Departamento",
    title:
      "BLACK+DECKER 20V MAX Cordless Drill/Driver (LDX120C) o Kit Hogar 68 Piezas (LDX120PK)",
    subtitle:
      "La compra inteligente si tienes presupuesto ajustado y necesitas resolver arreglos caseros ocasionales: colgar cuadros, instalar cortinas, armar muebles y tener herramientas básicas a mano.",
    features: [
      "Embrague de 11 posiciones que evita trasroscar tornillos en madera blanda, plástico y drywall",
      "La versión LDX120PK añade en un solo bolso 67 herramientas y accesorios (martillo, alicates, cinta métrica, cutter, brocas y puntas)",
      "Usa el sistema de baterías intercambiables BLACK+DECKER 20V MAX PowerConnect que mantiene la carga hasta 18 meses guardada",
    ],
    categoryType: "drill-driver",
    specs: {
      budgetRange: "precio variable en Amazon (Taladro o Kit 68 pzs)",
      jobType: "Independizarse, bricolaje ocasional, cuadros y muebles",
      batteryChargerCompat:
        "BLACK+DECKER 20V MAX PowerConnect (LBXR20 / LBXR2020) + LCS1620",
      bitsAndChuckCompat:
        "Mandril 3/8\" (10 mm) · Sets universales 1/4\" Hex (BDA91109)",
    },
    queryUS:
      "BLACK+DECKER 20V MAX Cordless Drill Driver Project Kit LDX120PK LDX120C",
    queryES: "BLACK+DECKER taladro sin cable 18V maletin accesorios",
    ctaLabel: "Ver Oferta BLACK+DECKER 20V en Amazon",
  },

  DEWALT_COMBO_DCK240: {
    id: "dewalt-dck240c2-combo",
    badge: "🧰 Combo #1 Más Vendido en Amazon EE. UU. (Taladro + Impacto)",
    title:
      "DEWALT 20V MAX Cordless Drill and Impact Driver Combo Kit (DCK240C2 / DCK277D2 Brushless) — 2 Baterías + Cargador",
    subtitle:
      "Ahorra tiempo en cada proyecto: perforas el agujero guía con el taladro de 1/2\" e inmediatamente metes el tornillo con el atornillador de impacto de 1/4\" Hex sin cambiar brocas cada 30 segundos.",
    features: [
      "Incluye Taladro Atornillador 20V MAX + Atornillador de Impacto (1.400 in-lbs de torque sin retroceso en la muñeca)",
      "Viene con 2 baterías de litio DEWALT 20V MAX, cargador y bolso de lona resistente para guardar en el clóset",
      "Disponible en versión clásica económica (DCK240C2) y en versión 100 % Brushless sin escobillas (DCK277D2)",
    ],
    categoryType: "tool-kit",
    specs: {
      budgetRange: "precio variable en Amazon (Combo 2 Herramientas)",
      jobType: "Remodelación de casa/depa, carpintería y fijaciones rápidas",
      batteryChargerCompat:
        "2 baterías DEWALT 20V MAX incluidas + acepta DCB204/DCB205",
      bitsAndChuckCompat:
        "Mandril 1/2\" (taladro) + Encastre rápido 1/4\" Hex (impacto)",
    },
    queryUS:
      "DEWALT 20V MAX Cordless Drill Impact Driver Combo Kit DCK240C2 DCK277D2",
    queryES: "DEWALT kit combo taladro y atornillador de impacto 18V XR",
    ctaLabel: "Consultar Precio del Combo DEWALT en Amazon",
  },

  ELECTRIC_SCREWDRIVER_8V: {
    id: "dewalt-dcf680n2-screwdriver",
    badge: "🪛 Mejor Destornillador Eléctrico de Precisión (Muebles e IKEA)",
    title:
      "DEWALT 8V MAX Gyroscopic Cordless Screwdriver (DCF680N2) / Bosch GO Smart USB Screwdriver",
    subtitle:
      "Diseñado para armar docenas de tornillos en melamina, gabinetes, enchufes y computadoras con control quirúrgico: gira tu muñeca a la derecha para apretar y a la izquierda para aflojar.",
    features: [
      "Sensor giroscópico sensible a la velocidad (0 a 430 RPM) + anillo de embrague mecánico de 15 posiciones",
      "Mango de 2 posiciones: modo pistola para hacer palanca y modo recto en línea para entrar en huecos profundos",
      "Doble anillo LED frontal e indicador del estado de batería integrado",
    ],
    categoryType: "electric-screwdriver",
    specs: {
      budgetRange: "precio variable en Amazon en Amazon EE. UU.",
      jobType: "Armado fino de muebles, bisagras, tableros eléctricos y PC",
      batteryChargerCompat:
        "2 baterías DEWALT 8V MAX DCB080 incluidas (o carga USB en Bosch GO)",
      bitsAndChuckCompat:
        "Collarín hexagonal rápido 1/4\" (6.35 mm) para toda punta estándar",
    },
    queryUS: "DEWALT 8V MAX Cordless Screwdriver Kit Gyroscopic DCF680N2",
    queryES:
      "Bosch Professional Bosch GO destornillador a bateria DEWALT DCF680",
    ctaLabel: "Ver Destornilladores Eléctricos en Amazon",
  },

  DEWALT_BATTERY_CHARGER: {
    id: "dewalt-dcb205-battery-charger",
    badge: "🔋 Baterías y Cargadores Oficiales DEWALT 20V MAX & USB-C",
    title:
      "DEWALT 20V MAX XR Battery Pack 5.0Ah / 2.0Ah (DCB205 / DCB203) + Cargador Rápido DCB115 / USB-C DCB094K",
    subtitle:
      "El repuesto y expansión oficial si compraste una herramienta DEWALT 'Bare Tool' (terminada en B) o necesitas triplicar la autonomía al perforar concreto.",
    features: [
      "100 % compatible con toda la línea DEWALT 20V MAX, ATOMIC y XR (DCD771, DCD777, DCD794, DCD805, DCF885, DCF887)",
      "Indicador LED de 3 barras integrado para comprobar la carga restante antes de subir a la escalera",
      "Opción de cargador USB-C PD DCB094K (100–240V universal, funciona en EE. UU. y en enchufes de 220V sin transformador)",
    ],
    categoryType: "battery-charger",
    specs: {
      budgetRange: "precio variable en Amazon (Simple, Pack x2 o Starter Kit)",
      jobType: "Ampliar autonomía y alimentar herramientas Bare Tool",
      batteryChargerCompat:
        "Compatible con cargadores DCB112, DCB115, DCB118 y DCB094K USB-C",
      bitsAndChuckCompat: "Riel deslizante exclusivo DEWALT 20V MAX",
    },
    queryUS:
      "DEWALT 20V MAX Battery 5.0Ah 2.0Ah Charger Starter Kit DCB205 DCB115",
    queryES: "DEWALT bateria 18V XR 5.0Ah DCB184 cargador DCB115",
    ctaLabel: "Ver Baterías y Cargadores DEWALT en Amazon",
  },

  BOSCH_MAKITA_BD_BATTERIES: {
    id: "makita-bosch-bd-batteries",
    badge: "🔌 Baterías Originales Bosch 12V/18V · Makita 18V LXT · B+D 20V",
    title:
      "Packs de Baterías Oficiales: Makita BL1850B 18V LXT · Bosch GBA12V30 / CORE18V · BLACK+DECKER LBXR20 20V",
    subtitle:
      "Celdas originales certificadas con chip de protección térmica (BMS) que protegen el motor sin escobillas y mantienen la garantía de tu herramienta.",
    features: [
      "Makita BL1840B / BL1850B con Star Protection e indicador LED: carga completa en 40–45 min con cargador DC18RC",
      "Bosch GBA12V30 (3.0Ah compacta para PS31/Flexiclick) y Bosch CORE18V GBA18V40 para línea 18V AMPShare",
      "BLACK+DECKER LBXR20 / LBXR2020 PowerConnect compatible con todos los equipos domésticos y jardín 20V MAX",
    ],
    categoryType: "battery-charger",
    specs: {
      budgetRange: "precio variable en Amazon según marca y Ah",
      jobType: "Batería de respaldo para cero interrupciones en casa",
      batteryChargerCompat:
        "Seleccionar exactamente la misma marca y voltaje (12V vs 18V/20V)",
      bitsAndChuckCompat: "Protección electrónica contra descarga profunda",
    },
    queryUS:
      "Makita BL1850B 18V LXT Bosch GBA12V30 Battery BLACK+DECKER LBXR20 20V",
    queryES:
      "Makita BL1850B bateria 18V Bosch GBA 12V BLACK DECKER 18V",
    ctaLabel: "Buscar Batería Compatible por Marca en Amazon",
  },

  IMPACT_BITS_AND_MASONRY_SET: {
    id: "dewalt-bosch-impact-bits-masonry",
    badge: "🔩 Set Imprescindible #1 de Brocas y Puntas Universales",
    title:
      "DEWALT FlexTorq 40-Pc Impact Bit Set (DWA2T40IR) + Bosch Masonry / Multi-Construction Drill Bit Set",
    subtitle:
      "El complemento obligatorio para cualquier taladro o destornillador nuevo: vástago universal 1/4\" Hex y cilíndrico compatible al 100 % con DEWALT, Bosch, Makita y BLACK+DECKER.",
    features: [
      "Zona de torsión FlexTorq / Impact Tough que absorbe picos de torque y evita partir puntas PH2, PZ2 (bisagras melamina) y Torx",
      "Incluye guía magnética deslizante y dados hexagonales de 1/4\", 5/16\" y 3/8\" para apretar pernos de soportes de TV",
      "Brocas con punta de carburo de tungsteno para perforar concreto, ladrillo, cerámica, madera y metal con precisión",
    ],
    categoryType: "bits-accessories",
    specs: {
      budgetRange: "precio variable en Amazon en Amazon EE. UU.",
      jobType: "Concreto, ladrillo, melamina, madera, metal y soportes TV",
      batteryChargerCompat: "Universal (no depende de voltaje ni marca)",
      bitsAndChuckCompat:
        "Compatible con todo mandril 3/8\", 1/2\" y encastre 1/4\" Hex",
    },
    queryUS:
      "DEWALT Screwdriver Bit Set Impact Ready DWA2T40IR Bosch Masonry Drill Bit Set",
    queryES:
      "DEWALT Bosch juego puntas atornillar impacto y brocas hormigon madera metal",
    ctaLabel: "Ver Sets de Brocas y Puntas Compatibles en Amazon",
  },

  WALL_ANCHORS_LASER_FINDER: {
    id: "wall-anchors-stud-finder-kit",
    badge: "📐 Kit Seguro para Departamento: Detector de Cables + Nivel + Tarugos",
    title:
      "Detector de Vigas y Cables Eléctricos (Stud Finder) + Nivel Láser Autonivelante + Kit Tarugos Concreto/Drywall",
    subtitle:
      "Perfora en tu departamento con cero sustos: detecta tuberías metálicas, parantes de drywall y cables con corriente antes de apoyar la broca, y nivela cuadros o repisas al milímetro.",
    features: [
      "Escáner de pared con alerta sonora y visual de cables AC vivos ocultos detrás del yeso o tarrajeo",
      "Surtido organizado de tarugos de expansión para concreto/ladrillo y anclajes mariposa/Molly de alta carga para drywall",
      "Ideal para instalar soportes de TV, cortinas roller, espejos de baño y repisas flotantes a la primera",
    ],
    categoryType: "bits-accessories",
    specs: {
      budgetRange: "precio variable en Amazon en Amazon EE. UU.",
      jobType: "Instalaciones seguras en paredes de departamento",
      batteryChargerCompat: "Universal para cualquier marca de taladro",
      bitsAndChuckCompat:
        "Incluye medidas estándar para brocas de 3/16\", 1/4\" y 5/16\"",
    },
    queryUS:
      "Stud Finder Wall Scanner AC Wire Detector Bosch Self Leveling Laser Wall Anchors Kit",
    queryES:
      "detector cables y metales pared nivel laser cruz tacos hormigon pladur",
    ctaLabel: "Ver Detectores, Niveles y Tarugos en Amazon",
  },
};

export function getContextualAmazonProducts(
  slug: string,
  pillar: string,
  title: string
): {
  sectionTitle: string;
  sectionSubtitle: string;
  products: [
    AmazonProductRecommendation,
    AmazonProductRecommendation,
    AmazonProductRecommendation,
  ];
  vsCompetitor?: AmazonProductRecommendation;
} {
  const text = `${slug} ${pillar} ${title}`.toLowerCase();

  // 1. Comparativas directas VS
  if (pillar === "comparativas-de-herramientas" || text.includes("-vs-")) {
    if (text.includes("bosch") && text.includes("dewalt")) {
      return {
        sectionTitle:
          "Comparativa Directa en Amazon: DEWALT 20V MAX vs Bosch 12V Max",
        sectionSubtitle:
          "Elige potencia todoterreno de 1/2\" (DEWALT) o ligereza subcompacta para muebles y gabinetes (Bosch), más el set universal de puntas y brocas compatible con ambos:",
        products: [
          CATALOG.DEWALT_DCD777_BRUSHLESS,
          CATALOG.BOSCH_PS31_12V,
          CATALOG.IMPACT_BITS_AND_MASONRY_SET,
        ],
        vsCompetitor: CATALOG.BOSCH_PS31_12V,
      };
    }
    if (text.includes("makita")) {
      return {
        sectionTitle:
          "Duelo de Plataformas Líderes en Amazon: DEWALT 20V MAX vs Makita 18V LXT",
        sectionSubtitle:
          "Consulta precios actualizados, baterías compatibles y sets de brocas universales para ambos sistemas:",
        products: [
          CATALOG.MAKITA_XFD131_LXT,
          CATALOG.DEWALT_DCD777_BRUSHLESS,
          CATALOG.IMPACT_BITS_AND_MASONRY_SET,
        ],
        vsCompetitor: CATALOG.DEWALT_DCD777_BRUSHLESS,
      };
    }
    if (text.includes("black-decker") || text.includes("ldx120")) {
      return {
        sectionTitle:
          "Comparativa por Presupuesto: BLACK+DECKER 20V Económico vs DEWALT 20V MAX",
        sectionSubtitle:
          "Compara la opción más accesible para arreglos ocasionales frente al estándar Brushless de mayor torque:",
        products: [
          CATALOG.BLACK_DECKER_LDX120,
          CATALOG.DEWALT_DCD777_BRUSHLESS,
          CATALOG.IMPACT_BITS_AND_MASONRY_SET,
        ],
        vsCompetitor: CATALOG.DEWALT_DCD777_BRUSHLESS,
      };
    }
    return {
      sectionTitle:
        "Modelos Ganadores Comparados por Presupuesto, Trabajo y Compatibilidad",
      sectionSubtitle:
        "Revisa el precio actual en Amazon Estados Unidos y los accesorios compatibles verificados:",
      products: [
        CATALOG.DEWALT_DCD777_BRUSHLESS,
        CATALOG.DEWALT_DCD805_HAMMER,
        CATALOG.IMPACT_BITS_AND_MASONRY_SET,
      ],
      vsCompetitor: CATALOG.DEWALT_DCD805_HAMMER,
    };
  }

  // 2. Silos de Baterías y Voltaje
  if (
    pillar === "baterias-y-cargadores-compatibles" ||
    pillar === "guia-de-compatibilidad-baterias-y-voltaje" ||
    text.includes("bateria") ||
    text.includes("cargador") ||
    text.includes("110v")
  ) {
    if (
      text.includes("bosch") ||
      text.includes("makita") ||
      text.includes("black-decker")
    ) {
      return {
        sectionTitle:
          "Baterías y Cargadores Oficiales Compatibles en Amazon EE. UU.",
        sectionSubtitle:
          "Asegura el riel y voltaje exactos (12V Max, 18V LXT, CORE18V o 20V PowerConnect) con celdas originales certificadas:",
        products: [
          CATALOG.BOSCH_MAKITA_BD_BATTERIES,
          CATALOG.DEWALT_BATTERY_CHARGER,
          CATALOG.DEWALT_DCD777_BRUSHLESS,
        ],
      };
    }
    return {
      sectionTitle:
        "Baterías de Litio y Cargadores Compatibles Verificados en Amazon",
      sectionSubtitle:
        "Reemplazos originales 20V MAX, 18V LXT y cargadores rápidos / USB-C multivoltaje:",
      products: [
        CATALOG.DEWALT_BATTERY_CHARGER,
        CATALOG.BOSCH_MAKITA_BD_BATTERIES,
        CATALOG.DEWALT_DCD777_BRUSHLESS,
      ],
    };
  }

  // 3. Silos de Brocas, Puntas y Mandriles
  if (
    pillar === "brocas-puntas-y-accesorios-compatibles" ||
    pillar === "guia-de-mandriles-brocas-y-puntas"
  ) {
    return {
      sectionTitle:
        "Sets de Brocas, Puntas 1/4\" Hex y Accesorios Compatibles en Amazon",
      sectionSubtitle:
        "Compatibilidad universal verificada con mandriles de 3/8\", 1/2\" y portapuntas de DEWALT, Bosch, Makita y BLACK+DECKER:",
      products: [
        CATALOG.IMPACT_BITS_AND_MASONRY_SET,
        CATALOG.WALL_ANCHORS_LASER_FINDER,
        CATALOG.DEWALT_DCD777_BRUSHLESS,
      ],
    };
  }

  // 4. Concreto, Paredes e Instalaciones de TV/Cortinas
  if (
    pillar === "perforar-paredes-concreto-drywall-y-ceramica" ||
    pillar === "instalaciones-y-mejoras-en-departamento" ||
    text.includes("concreto") ||
    text.includes("percutor") ||
    text.includes("ladrillo") ||
    text.includes("soporte-de-tv")
  ) {
    return {
      sectionTitle:
        "Equipo Recomendado para Paredes de Concreto, Drywall e Instalaciones en Depa",
      sectionSubtitle:
        "Taladro percutor con mandril metálico + brocas de carburo compatibles + detector de cables/tarugos:",
      products: [
        CATALOG.DEWALT_DCD805_HAMMER,
        CATALOG.IMPACT_BITS_AND_MASONRY_SET,
        CATALOG.WALL_ANCHORS_LASER_FINDER,
      ],
    };
  }

  // 5. Armado de Muebles, Melamina y Destornilladores Eléctricos
  if (
    pillar === "armado-de-muebles-madera-y-melamina" ||
    text.includes("melamina") ||
    text.includes("mueble") ||
    text.includes("destornillador") ||
    text.includes("bosch-ps31") ||
    text.includes("flexiclick")
  ) {
    const first = text.includes("flexiclick")
      ? CATALOG.BOSCH_FLEXICLICK_5IN1
      : text.includes("destornillador") || text.includes("dcf680")
      ? CATALOG.ELECTRIC_SCREWDRIVER_8V
      : CATALOG.BOSCH_PS31_12V;
    return {
      sectionTitle:
        "Herramientas Ideales para Armar Muebles y Melamina sin Barrer Tornillos",
      sectionSubtitle:
        "Control fino de embrague, diseño ultraligero para alacenas y puntas PH2/PZ2 compatibles:",
      products: [
        first,
        CATALOG.ELECTRIC_SCREWDRIVER_8V,
        CATALOG.IMPACT_BITS_AND_MASONRY_SET,
      ],
    };
  }

  // 6. Kits, Combos y Presupuesto Económico
  if (
    pillar === "juegos-y-kits-de-herramientas" ||
    text.includes("combo") ||
    text.includes("kit") ||
    text.includes("black-decker") ||
    text.includes("economico")
  ) {
    const mainKit =
      text.includes("black-decker") || text.includes("economico") || text.includes("60-dolares")
        ? CATALOG.BLACK_DECKER_LDX120
        : CATALOG.DEWALT_COMBO_DCK240;
    return {
      sectionTitle:
        "Mejores Juegos y Combos de Herramientas con Batería y Cargador en Amazon",
      sectionSubtitle:
        "Todo lo necesario para tu departamento en un solo maletín + consumibles compatibles:",
      products: [
        mainKit,
        CATALOG.BLACK_DECKER_LDX120,
        CATALOG.IMPACT_BITS_AND_MASONRY_SET,
      ],
    };
  }

  // 7. Makita específico
  if (text.includes("makita")) {
    return {
      sectionTitle:
        "Selección Makita 18V LXT + Baterías y Puntas Compatibles en Amazon EE. UU.",
      sectionSubtitle:
        "Rendimiento Brushless japonés con carga en 30 minutos y accesorios verificados:",
      products: [
        CATALOG.MAKITA_XFD131_LXT,
        CATALOG.BOSCH_MAKITA_BD_BATTERIES,
        CATALOG.IMPACT_BITS_AND_MASONRY_SET,
      ],
    };
  }

  // Default general: Top 3 Venta Cruzada (Taladro #1 + Batería/Cargador + Set de Brocas/Puntas)
  return {
    sectionTitle:
      "Herramientas y Accesorios Compatibles Más Recomendados en Amazon EE. UU.",
    sectionSubtitle:
      "Combinación ganadora para tu departamento: taladro Brushless + batería/cargador compatible + set completo de brocas y puntas:",
    products: [
      CATALOG.DEWALT_DCD777_BRUSHLESS,
      CATALOG.DEWALT_BATTERY_CHARGER,
      CATALOG.IMPACT_BITS_AND_MASONRY_SET,
    ],
  };
}
