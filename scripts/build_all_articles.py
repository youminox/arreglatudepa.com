#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Generador Maestro de las 2,014 Guías Editoriales de ArreglaTuDepa.com:
- 14 Hubs Pilares de Categoría (isPillar: true)
- 500 Artículos Transaccionales en 6 Silos de Productos Amazon (isTransactional: true)
- 1,500 Artículos SEO Informacionales en 8 Silos Técnicos y de Bricolaje (isTransactional: false)

También genera:
- src/data/keyword_map.json (validando 0 canibalización)
- public/search-index.json
"""
import json
import pathlib
import re

from topics_catalog import PILLARS, generate_transactional_500, generate_seo_1500

ROOT = pathlib.Path(__file__).resolve().parent.parent
ART_DIR = ROOT / "src/content/articles"
ART_DIR.mkdir(parents=True, exist_ok=True)
DATA_DIR = ROOT / "src/data"
DATA_DIR.mkdir(parents=True, exist_ok=True)
PUB_DIR = ROOT / "public"
PUB_DIR.mkdir(parents=True, exist_ok=True)

PUBLISHED = "2026-11-24"

# Matriz Fotográfica Anti-Similitud (8 ángulos × 6 iluminaciones × 10 escenarios = 480 combinaciones visuales únicas)
CAMERA_STYLES = [
    "Macro close-up shot with shallow depth of field (85mm f/2.8 lens)",
    "Three-quarter editorial product angle from slightly above on a workbench (50mm lens)",
    "Overhead flat-lay knolling composition showcasing the tool, compatible battery and drill bits (35mm lens)",
    "Eye-level realistic apartment DIY action photograph with authentic natural hands-on framing",
    "Side-profile studio shot highlighting metal keyless chuck, torque clutch ring and ergonomic grip",
    "Detailed close-up focusing on a magnetic 1/4-inch hex bit driving a screw cleanly",
    "Wide editorial interior view of a bright modern apartment renovation corner",
    "Oblique workshop tabletop photography with soft background bokeh and crisp tool textures",
]

LIGHTING_MOODS = [
    "crisp natural morning window daylight with soft realistic shadows",
    "warm golden-hour afternoon sunlight streaming into a modern apartment",
    "bright neutral 4000K kitchen LED task lighting highlighting metal and wood textures",
    "soft diffused overcast studio daylight with clean industrial color accuracy",
    "directional home workshop task lamp illumination with authentic contrast",
    "inviting sunlit living room daylight creating a clean DIY atmosphere",
]

SURFACES_AND_PROPS = [
    "on a birch plywood apartment workbench with a spirit level and brass screws",
    "inside a white oak melamine kitchen cabinet installation with a 35mm hinge",
    "beside a textured gray concrete apartment wall with masonry drill bits and nylon anchors",
    "on a Scandinavian light oak dining table protected by a craft mat during furniture assembly",
    "on a dark slate rubberized tool mat alongside a digital caliper and tape measure",
    "next to an open modular organizer case filled with titanium and impact screwdriver bits",
    "on a sunlit balcony wooden worktable with clamped pine boards and sawdust",
    "beside a bathroom ceramic tile wall with a green laser level line and diamond bit",
    "in a neatly organized apartment utility closet shelf with stackable tool boxes",
    "on a minimalist home office desk installation with cable grommet and hex drivers",
]


def build_diverse_prompt(subject: str, idx: int) -> str:
    cam = CAMERA_STYLES[idx % len(CAMERA_STYLES)]
    light = LIGHTING_MOODS[(idx * 3 + 1) % len(LIGHTING_MOODS)]
    surf = SURFACES_AND_PROPS[(idx * 7 + 2) % len(SURFACES_AND_PROPS)]
    return (
        f"Realistic editorial apartment DIY and power tool photography, {cam}: {subject}, {surf}, {light}. "
        "Photorealistic brushed steel, rubberized grips and wood textures, no text, no letters, no watermarks."
    )


def clean_slug(s: str) -> str:
    s = s.lower().strip()
    s = re.sub(r"[^a-z0-9-]+", "-", s)
    return re.sub(r"-+", "-", s).strip("-")


def make_pillar_article(p: dict, child_items: list, idx: int) -> dict:
    cat_slug = p["slug"]
    path = f"/{cat_slug}/"
    related_paths = [f"/{cat_slug}/{clean_slug(c[0])}/" for c in child_items[:4]]
    table_rows = [
        [c[1], f"[Ver guía completa](/{cat_slug}/{clean_slug(c[0])}/)"]
        for c in child_items[:16]
    ]
    is_trans_pillar = cat_slug in {
        "resenas-taladros-y-atornilladores",
        "juegos-y-kits-de-herramientas",
        "comparativas-de-herramientas",
        "herramientas-por-presupuesto-y-trabajo",
        "baterias-y-cargadores-compatibles",
        "brocas-puntas-y-accesorios-compatibles",
    }
    blocks = [
        {
            "type": "p",
            "text": f"Bienvenido al hub especializado de **{p['title']}** en **ArreglaTuDepa.com**. Aquí agrupamos nuestras **{len(child_items)} guías verificadas** sobre **{p['focus']}**, diseñadas bajo una arquitectura estricta sin canibalización para ayudarte a comprar con total seguridad en **Amazon Estados Unidos (`amazon.com`)** o **Amazon España (`amazon.es`)**.",
        },
        {
            "type": "p",
            "text": "Tanto si buscas **[los mejores taladros inalámbricos para departamento y casa](/herramientas-por-presupuesto-y-trabajo/mejores-taladros-inalambricos-para-departamento-y-casa-amazon/)**, como si quieres comparar **[DEWALT vs Bosch vs Makita vs BLACK+DECKER](/comparativas-de-herramientas/dewalt-vs-bosch-vs-makita-vs-black-decker-cual-elegir/)**, revisar el **[DEWALT DCD777D1 20V MAX Brushless](/resenas-taladros-y-atornilladores/dewalt-dcd777d1-taladro-brushless-20v-max-resena-y-compatibilidad/)** o confirmar la **[tabla de baterías y cargadores compatibles](/baterias-y-cargadores-compatibles/tabla-compatibilidad-baterias-dewalt-20v-bosch-18v-makita-lxt/)**, cada página te indica presupuesto real, tipo de trabajo y consumibles exactos.",
        },
        {"type": "h2", "text": f"Qué analizamos en {p['title'].split('(')[0].split(':')[0].strip()}"},
        {
            "type": "p",
            "text": f"En cada una de las **{len(child_items)} guías** de este silo respondemos las cuatro dudas críticas antes de invertir tu dinero: **1) El rango de presupuesto en dólares en Amazon EE. UU.**; **2) El tipo de trabajo exacto** (armar muebles de melamina, drywall, ladrillo hueco o concreto armado); **3) La plataforma de batería y cargador compatible (`12V`, `18V LXT`, `18V CORE18V` o `20V MAX`)**; y **4) Las brocas, puntas `1/4\" Hex` y accesorios compatibles con su mandril**.",
        },
        {
            "type": "table",
            "caption": f"Guías principales en {p['title'].split('(')[0].strip()}",
            "headers": ["Guía Técnica / Comparativa de Herramientas", "Enlace Directo"],
            "rows": table_rows,
        },
        {
            "type": "callout",
            "variant": "etiqueta",
            "title": "Verificación de Compatibilidad y Códigos en Amazon EE. UU.",
            "text": "Recuerda revisar siempre las letras finales del código en Amazon: los modelos terminados en 'B' (DEWALT/Bosch) o 'Z' (Makita) son 'Bare Tool' (solo herramienta sin batería ni cargador), mientras que las terminaciones C1, C2, D1, D2, P2 o R1 incluyen batería y cargador listos para trabajar.",
        },
        {"type": "h2", "text": "Cómo acertar en tu compra en 3 pasos rápidos"},
        {
            "type": "ol",
            "items": [
                "**Define la pared y los muebles de tu departamento:** para muebles de melamina, drywall y arreglos ligeros, un compacto de `12V` como el **[Bosch PS31-2A](/resenas-taladros-y-atornilladores/bosch-ps31-2a-taladro-12v-max-compacto-resena-y-baterias/)** o un destornillador **[DEWALT 8V DCF680N2](/resenas-taladros-y-atornilladores/dewalt-dcf680n2-destornillador-electrico-giroscopico-8v-resena/)** evita dañar tornillos. Si tus muros son de concreto o ladrillo, elige un taladro con **modo percutor** como el **[DEWALT DCD805D2](/resenas-taladros-y-atornilladores/dewalt-dcd805d2-taladro-percutor-xr-concreto-resena/)**.",
                "**Elige una sola plataforma de baterías para ahorrar a futuro:** las baterías **NO son intercambiables entre DEWALT, Bosch, Makita y BLACK+DECKER**, ni entre `12V` y `20V`. Si empiezas con un kit `20V MAX` o `18V LXT`, tus siguientes herramientas podrán ser versión *Bare Tool* mucho más baratas.",
                "**Suma un buen set de puntas de torsión y brocas:** cualquier mandril de `3/8\"` o `1/2\"` acepta sets universales como el **[DEWALT DWA2T40IR](/brocas-puntas-y-accesorios-compatibles/mejores-sets-de-brocas-y-puntas-dewalt-bosch-makita-amazon/)** y brocas de carburo para concreto.",
            ],
        },
        {
            "type": "cta",
            "text": "¿No estás seguro de qué modelo, batería o broca es compatible con tu proyecto? Pregúntale ahora mismo a nuestro Asesor de Herramientas IA.",
        },
    ]
    faqs = [
        {
            "q": f"¿Qué marcas principales comparamos en {p['title'].split('(')[0].strip()}?",
            "a": "Analizamos los modelos más vendidos y confiables de Amazon Estados Unidos en DEWALT (8V, 12V XTREME y 20V MAX / XR / ATOMIC), Bosch (3.6V USB, 12V Max y 18V CORE18V/AMPShare), Makita (12V max CXT y 18V LXT) y BLACK+DECKER (4V MAX y 20V MAX PowerConnect).",
        },
        {
            "q": "¿Las brocas y puntas de una marca le sirven al taladro de otra marca?",
            "a": "Sí, al 100 %. A diferencia de las baterías (que son exclusivas de cada marca y voltaje), los vástagos hexagonales de 1/4\" (6.35 mm) y las brocas cilíndricas hasta 3/8\" (10 mm) o 1/2\" (13 mm) son universales: puedes usar puntas Makita Impact XPS o DEWALT FlexTorq en un taladro Bosch o BLACK+DECKER sin ningún adaptador especial.",
        },
        {
            "q": "¿Qué debo revisar en el cargador si compro un kit en Amazon Estados Unidos para usarlo en Perú o Latinoamérica?",
            "a": "Los cargadores incluidos en kits de Amazon EE. UU. suelen venir para 110V–120V AC. Si en tu país la red eléctrica es de 220V (como en Perú, Chile o Argentina), debes conectarlo mediante un transformador reductor de 220V a 110V acorde a los watts del cargador, o utilizar un cargador USB-C multivoltaje universal (100V–240V) como el DEWALT DCB094K.",
        },
    ]
    return {
        "slug": cat_slug,
        "pillar": cat_slug,
        "path": path,
        "isPillar": True,
        "isTransactional": is_trans_pillar,
        "primaryKeyword": p["kw"],
        "title": p["title"],
        "seoTitle": f"{p['title']} | ArreglaTuDepa.com",
        "metaDescription": f"Guía completa sobre {p['focus']}. Compara DEWALT, Bosch, Makita y BLACK+DECKER por presupuesto, trabajo y compatibilidad en Amazon EE. UU.",
        "excerpt": f"Explora las {len(child_items)} guías sobre {p['focus']} con tablas de baterías, cargadores, brocas y puntas compatibles.",
        "quickAnswer": f"En esta sección reunimos {len(child_items)} guías especializadas sobre {p['focus']}. Comparamos equipos de DEWALT, Bosch, Makita y BLACK+DECKER según presupuesto y tipo de trabajo, detallando qué baterías, cargadores, brocas y puntas son compatibles en Amazon Estados Unidos.",
        "readingMinutes": 8,
        "image": {
            "prompt": build_diverse_prompt(p["subject"], idx),
            "alt": p["title"],
        },
        "blocks": blocks,
        "faqs": faqs,
        "sources": [
            {"label": "Amazon.com Best Sellers in Power Drills & Tool Combo Packs", "url": "https://www.amazon.com/Best-Sellers-Tools-Home-Improvement-Power-Drills/zgbs/hi/552808"},
            {"label": "Power Tool Institute – Cordless Tool & Battery Safety Standards", "url": "https://www.powertoolinstitute.com/"},
        ],
        "related": related_paths,
        "datePublished": PUBLISHED,
        "dateModified": PUBLISHED,
        "imageUrl": f"/img/ambiente/cat-{cat_slug}.webp",
    }


def make_transactional_article(item: tuple, sibling_paths: list, idx: int) -> dict:
    slug, title, pillar, kw, bud, job, bat, bit, picks, subj = item
    slug = clean_slug(slug)
    path = f"/{pillar}/{slug}/"
    rel = [p for p in sibling_paths if p != path][:3]
    rel.insert(0, f"/{pillar}/")

    blocks = [
        {
            "type": "p",
            "text": f"Analizar a fondo **{title}** te permite invertir exactamente en la herramienta o accesorio que tu departamento necesita sin pagar de más ni equivocarte de repuestos. En esta guía para **Amazon Estados Unidos (`amazon.com`)** evaluamos el **rango de presupuesto ({bud})**, el **tipo de trabajo recomendado ({job})**, la **compatibilidad exacta de baterías y cargadores ({bat})** y las **brocas, puntas y accesorios compatibles ({bit})**.",
        },
        {
            "type": "h2",
            "text": "Análisis por presupuesto, tipo de trabajo y compatibilidad real",
        },
        {
            "type": "p",
            "text": f"Al comparar opciones dentro de **{picks}**, la clave no es solo mirar el voltaje máximo impreso en la caja, sino cómo responde el conjunto motor-embrague-mandril en tareas reales de **{job.lower()}**. Con una inversión situada en **{bud}**, obtienes un equilibrio sólido entre control a bajas revoluciones para no dañar tornillos en melamina y reserva de torque para perforar con limpieza.",
        },
        {
            "type": "callout",
            "variant": "etiqueta",
            "title": f"Ficha Rápida de Compra y Compatibilidad: {picks.split(',')[0].strip()}",
            "text": f"• Presupuesto estimado en Amazon EE. UU.: {bud}.\n• Tipo de trabajo ideal: {job}.\n• Baterías y cargadores compatibles: {bat}.\n• Mandril, brocas y puntas compatibles: {bit}.",
        },
        {
            "type": "h2",
            "text": f"Tabla comparativa en Amazon EE. UU.: {title}",
        },
        {
            "type": "p",
            "text": "Compara nuestra selección principal frente a los referentes de cada marca en Amazon Estados Unidos según presupuesto, uso doméstico/profesional y sistema de baterías y brocas:",
        },
        {
            "type": "table",
            "caption": f"Comparativa técnica y de compatibilidad para {title}",
            "headers": [
                "Modelo / Línea en Amazon",
                "Presupuesto y Trabajo Ideal",
                "Batería y Cargador Compatible",
                "Mandril, Brocas y Puntas",
            ],
            "rows": [
                [
                    f"**Opción Destacada: {picks.split(',')[0].strip()}**",
                    f"{bud} · {job}",
                    bat,
                    bit,
                ],
                [
                    "**Todoterreno Calidad-Precio: [DEWALT DCD777D1 20V MAX](/resenas-taladros-y-atornilladores/dewalt-dcd777d1-taladro-brushless-20v-max-resena-y-compatibilidad/)**",
                    "US$99–US$129 · Muebles, madera, metal y bricolaje general",
                    "DEWALT 20V MAX (DCB203, DCB205, PowerStack) + DCB112/DCB115",
                    "Mandril 1/2\" (13 mm) · Brocas cilíndricas y puntas 1/4\" Hex",
                ],
                [
                    "**Compacto para Muebles: [Bosch PS31-2A 12V Max](/resenas-taladros-y-atornilladores/bosch-ps31-2a-taladro-12v-max-compacto-resena-y-baterias/)**",
                    "US$89–US$119 · Melamina, gabinetes, drywall e interiores",
                    "Bosch 12V Max (BAT414 2.0Ah / GBA12V30 3.0Ah) + GAL12V-20",
                    "Mandril 3/8\" (10 mm) · Puntas Impact Tough 1/4\" Hex",
                ],
                [
                    "**Económico / Potencia Pro: [BLACK+DECKER LDX120C](/resenas-taladros-y-atornilladores/black-decker-ldx120c-taladro-20v-max-economico-resena/) / [Makita XFD131](/resenas-taladros-y-atornilladores/makita-xfd131-taladro-18v-lxt-brushless-resena-completa/)**",
                    "US$49 (Hogar básico) o US$139 (Uso intensivo Brushless)",
                    "B+D 20V PowerConnect (LBXR20) o Makita 18V LXT (BL1840B + DC18RC)",
                    "Mandril 3/8\" (B+D) o 1/2\" (Makita) · Sets universales 1/4\" Hex",
                ],
            ],
        },
        {
            "type": "h2",
            "text": "Qué baterías, cargadores, brocas y puntas comprar junto a este modelo",
        },
        {
            "type": "ul",
            "items": [
                f"**Compatibilidad eléctrica sin errores:** respeta siempre la regla **{bat}**. Las baterías de litio modernas incluyen protección electrónica contra sobrecarga, pero nunca encajan entre marcas distintas ni entre series de `12V` y `20V MAX`.",
                f"**Brocas y puntas que multiplican su rendimiento:** gracias a **{bit}**, puedes acoplar puntas con zona de torsión (*Impact Rated*) `PH2` para tornillos comunes, `PZ2` para bisagras de cocina en melamina y brocas específicas para el muro de tu departamento.",
                "**Atención al código de compra en Amazon:** antes de añadir al carrito, confirma si el título dice *Kit* (incluye batería y cargador) o *Tool Only / Bare Tool* (ideal si ya tienes baterías de la misma familia en casa).",
            ],
        },
        {
            "type": "h2",
            "text": "3 pasos para comprar al mejor precio en Amazon Estados Unidos",
        },
        {
            "type": "steps",
            "items": [
                {
                    "name": "Confirma el material principal donde vas a trabajar",
                    "text": f"Verifica si tu prioridad es {job.lower()}: recuerda que para paredes duras de concreto armado necesitas modo percutor (símbolo de martillo) y broca con punta de carburo.",
                },
                {
                    "name": "Revisa el precio del Kit vs Bare Tool en nuestras tarjetas Amazon",
                    "text": "Haz clic en las tarjetas de producto de esta página para consultar ofertas relámpago y cupones activos en Amazon.com (con selector rápido a Amazon.es si navegas desde España).",
                },
                {
                    "name": "Añade el juego de puntas y brocas compatible en el mismo envío",
                    "text": "Aprovecha el envío conjunto para sumar un estuche modular de puntas 1/4\" Hex y brocas de mampostería/madera, evitando quedarte a mitad de la instalación por falta de una medida.",
                },
            ],
        },
        {
            "type": "callout",
            "variant": "aviso",
            "title": "Nota clave si compras desde Perú o países con red de 220V",
            "text": "Los kits vendidos en Amazon Estados Unidos incluyen cargadores diseñados para 110V–120V. Si en tu departamento los enchufes son de 220V, utiliza siempre un transformador reductor 220V→110V (mínimo de 150W a 300W según el cargador) o el cargador USB-C universal DEWALT DCB094K.",
        },
        {
            "type": "cta",
            "text": "¿Quieres confirmar si una batería, cargador o broca específica le hace a este modelo? Escríbele en vivo a nuestro Asesor de Herramientas IA.",
        },
    ]

    faqs = [
        {
            "q": f"¿Qué presupuesto necesito para {title} en Amazon EE. UU.?",
            "a": f"El rango habitual se ubica en {bud}, variando según elijas solo el cuerpo de la herramienta (Bare Tool) o el kit completo con baterías, cargador y bolso.",
        },
        {
            "q": "¿Qué baterías y cargadores son exactamente compatibles?",
            "a": f"La compatibilidad oficial corresponde a: {bat}. Asegúrate siempre de coincidir tanto en la marca como en la línea exacta de voltaje.",
        },
        {
            "q": "¿Qué brocas y puntas de destornillador puedo instalarle?",
            "a": f"Cuenta con {bit}. Puedes usar brocas y puntas de cualquier marca reconocida (DEWALT, Bosch, Makita o BLACK+DECKER) siempre que respetes el diámetro máximo del mandril.",
        },
        {
            "q": "¿Los enlaces de esta guía llevan a productos originales en Amazon?",
            "a": "Sí. Todas nuestras tarjetas dirigen a listados verificados en Amazon Estados Unidos (amazon.com con código arreglatudepa-20) e incluyen conmutador para Amazon España (amazon.es con código arreglatudepa-21).",
        },
    ]

    quick_answer = (
        f"En nuestro análisis de {title}, el presupuesto en Amazon EE. UU. se sitúa en {bud} y destaca especialmente para {job.lower()}. "
        f"En compatibilidad, utiliza {bat.lower()} y {bit.lower()}, recomendando como compra principal {picks}."
    )

    return {
        "slug": slug,
        "pillar": pillar,
        "path": path,
        "isPillar": False,
        "isTransactional": True,
        "primaryKeyword": kw,
        "title": title,
        "seoTitle": f"{title} | ArreglaTuDepa.com",
        "metaDescription": f"Guía y comparativa de {title} en Amazon EE. UU. Presupuesto ({bud}), tipo de trabajo, baterías, cargadores y brocas compatibles.",
        "excerpt": f"Análisis completo de {title}: presupuesto en Amazon, para qué trabajos sirve y qué baterías, cargadores y brocas son compatibles.",
        "quickAnswer": quick_answer,
        "readingMinutes": 7,
        "image": {
            "prompt": build_diverse_prompt(subj, idx),
            "alt": title,
        },
        "blocks": blocks,
        "faqs": faqs,
        "sources": [
            {"label": "Amazon.com Power Tools & Accessories Catalog", "url": "https://www.amazon.com/Best-Sellers-Tools-Home-Improvement-Power-Drills/zgbs/hi/552808"},
            {"label": "Official Manufacturer Specifications (DEWALT / Bosch / Makita / BLACK+DECKER)", "url": "https://www.powertoolinstitute.com/"},
        ],
        "related": rel,
        "datePublished": PUBLISHED,
        "dateModified": PUBLISHED,
        "imageUrl": None,
    }


def make_seo_article(item: tuple, sibling_paths: list, idx: int) -> dict:
    slug, title, pillar, kw, focus_summary, subj = item
    slug = clean_slug(slug)
    path = f"/{pillar}/{slug}/"
    rel = [p for p in sibling_paths if p != path][:3]
    rel.insert(0, f"/{pillar}/")

    blocks = [
        {
            "type": "p",
            "text": f"Dominar **{title}** evita los errores más costosos al hacer arreglos en un departamento: desde quemar un cargador o comprar una batería que no encaja en el riel, hasta barrer la cabeza de un tornillo en melamina o rajar una pared. En **ArreglaTuDepa.com** preparamos esta **{focus_summary}** aplicada a los ecosistemas **DEWALT, Bosch, Makita y BLACK+DECKER** disponibles en **Amazon Estados Unidos**.",
        },
        {
            "type": "h2",
            "text": f"Fundamento técnico y práctico: {title}",
        },
        {
            "type": "p",
            "text": f"Cuando trabajas en casa o en un departamento moderno, cada superficie y cada herramienta tiene una tolerancia mecánica precisa. Aplicar correctamente esta **{focus_summary}** te garantiza elegir la combinación exacta de **voltaje (`4V/8V`, `12V` o `18V/20V MAX`)**, **posición del anillo de embrague**, **velocidad de caja (`1` para torque alto o `2` para altas RPM)** y **tipo de broca o punta `1/4\" Hex`**.",
        },
        {
            "type": "callout",
            "variant": "tip",
            "title": "Regla de taller antes de empezar el trabajo",
            "text": "Retira siempre la batería o pon el selector de giro en la posición central de bloqueo antes de cambiar brocas o puntas en el mandril, y haz una prueba de medio segundo al aire para verificar que el accesorio gire perfectamente centrado.",
        },
        {
            "type": "h2",
            "text": "Cómo se aplica en DEWALT, Bosch, Makita y BLACK+DECKER",
        },
        {
            "type": "table",
            "caption": f"Referencia de compatibilidad por marca aplicada a {title}",
            "headers": [
                "Marca y Plataforma",
                "Modelos de Referencia en Amazon",
                "Batería y Cargador Oficial",
                "Mandril y Brocas / Puntas",
            ],
            "rows": [
                [
                    "**DEWALT 20V MAX / XR / ATOMIC**",
                    "[DCD777D1](/resenas-taladros-y-atornilladores/dewalt-dcd777d1-taladro-brushless-20v-max-resena-y-compatibilidad/) · [DCD805D2 Percutor](/resenas-taladros-y-atornilladores/dewalt-dcd805d2-taladro-percutor-xr-concreto-resena/)",
                    "DCB203 (2.0Ah), DCB205 (5.0Ah), PowerStack + Cargador DCB115 / USB-C DCB094K",
                    "Mandril 1/2\" (13 mm) · Puntas FlexTorq 1/4\" Hex y brocas carburo/titanio",
                ],
                [
                    "**Bosch 12V Max & 18V CORE18V**",
                    "[PS31-2A 12V](/resenas-taladros-y-atornilladores/bosch-ps31-2a-taladro-12v-max-compacto-resena-y-baterias/) · GSR12V-300 Flexiclick · GSB18V-490",
                    "BAT414 / GBA12V30 (en 12V) o GBA18V40 (en 18V) — rieles separados",
                    "Mandril 3/8\" (12V) o 1/2\" (18V) · Puntas Impact Tough y brocas Multi-Construction",
                ],
                [
                    "**Makita 18V LXT & 12V CXT**",
                    "[XFD131 Brushless](/resenas-taladros-y-atornilladores/makita-xfd131-taladro-18v-lxt-brushless-resena-completa/) · XPH12Z Percutor · FD09R1",
                    "BL1820B / BL1840B / BL1850B + Cargador rápido con ventilador DC18RC (30-45 min)",
                    "Mandril 1/2\" (LXT) o 3/8\" (CXT) · Puntas Makita Impact XPS 1/4\" Hex",
                ],
                [
                    "**BLACK+DECKER 20V PowerConnect**",
                    "[LDX120C](/resenas-taladros-y-atornilladores/black-decker-ldx120c-taladro-20v-max-economico-resena/) · [Kit 68 pzs LDX120PK](/juegos-y-kits-de-herramientas/black-decker-ldx120pk-juego-68-herramientas-taladro-resena/)",
                    "LBXR20 (1.5Ah), LBXR2020 (2.0Ah) + Cargador LCS1620 o rápido BDCAC202B",
                    "Mandril 3/8\" (10 mm) · Maletín de 109 brocas y puntas BDA91109",
                ],
            ],
        },
        {
            "type": "h2",
            "text": f"Procedimiento paso a paso: {title}",
        },
        {
            "type": "steps",
            "items": [
                {
                    "name": "Identifica el código de tu equipo y el material de trabajo",
                    "text": "Revisa la placa lateral de tu taladro o destornillador (voltaje exacto, capacidad del mandril en pulgadas/milímetros y si cuenta con selector de velocidades 1/2 o modo percutor).",
                },
                {
                    "name": "Configura el torque, la velocidad y el accesorio correcto",
                    "text": f"Aplica el criterio de esta {focus_summary}: usa niveles bajos de embrague (1 a 5) en melamina/muebles en Velocidad 1, y reserva el símbolo de broca o martillo en Velocidad 2 para perforación según el diámetro.",
                },
                {
                    "name": "Verifica el ajuste y realiza una prueba controlada",
                    "text": "Comprueba que la batería tenga al menos 2 barras de carga, sujeta la herramienta perpendicular a 90° respecto a la superficie y deja que el filo de la broca o la punta corte sin forzar con el peso del cuerpo.",
                },
            ],
        },
        {
            "type": "h2",
            "text": "Errores comunes en departamento que debes evitar",
        },
        {
            "type": "ul",
            "items": [
                "**Activar el percutor en materiales frágiles o huecos:** en porcelanato, mayólica de baño y ladrillo hueco pandereta se perfora **sin percusión** con **[sets de brocas multiconstrucción o cerámica](/brocas-puntas-y-accesorios-compatibles/mejores-sets-de-brocas-y-puntas-dewalt-bosch-makita-amazon/)** para no reventar el material.",
                "**Atornillar muebles en modo broca (`100 %` de torque):** deja siempre que el **[embrague numerado](/armado-de-muebles-madera-y-melamina/en-que-numero-poner-el-torque-del-taladro-para-melamina-y-muebles/)** patine suavemente al llegar al ras del tablero.",
                "**Confundir equipos Bare Tool con Kits en Amazon:** revisa nuestra guía de **[códigos B, Z, C2 y D2 en Amazon EE. UU.](/organizacion-de-herramientas-y-compra-en-amazon/que-significa-bare-tool-tool-only-codigos-b-z-c2-d2-en-amazon/)** antes de comprar.",
            ],
        },
        {
            "type": "cta",
            "text": "¿Necesitas que te recomendemos la herramienta, batería o broca exacta en Amazon para resolver esto hoy mismo? Consulta gratis a nuestro Asesor IA.",
        },
    ]

    faqs = [
        {
            "q": f"¿Necesito comprar accesorios de la misma marca de mi taladro para aplicar {title}?",
            "a": "Solo en baterías y cargadores (donde cada marca y voltaje usa su propio riel electrónico). En cambio, las brocas cilíndricas y las puntas hexagonales de 1/4\" son totalmente universales entre DEWALT, Bosch, Makita y BLACK+DECKER.",
        },
        {
            "q": "¿Qué herramienta me conviene si recién empiezo a equipar mi departamento?",
            "a": "Si tu presupuesto es menor a US$65, el BLACK+DECKER LDX120C o el kit de 68 piezas LDX120PK cumplen excelente para tareas básicas. Si buscas mayor durabilidad o perforar concreto, salta a un Bosch 12V Max (para muebles) o a un DEWALT 20V MAX / Makita 18V LXT.",
        },
        {
            "q": "¿Dónde puedo ver el precio actualizado de los repuestos y accesorios compatibles?",
            "a": "En las tarjetas de productos integradas en esta página tienes acceso directo a las ofertas verificadas en Amazon Estados Unidos (amazon.com) y Amazon España (amazon.es).",
        },
    ]

    quick_answer = (
        f"Para resolver correctamente {title}, comprueba primero el voltaje de tu plataforma (12V vs 18V/20V MAX), "
        f"la capacidad del mandril (3/8\", 1/2\" o 1/4\" Hex) y el material de tu departamento. Siguiendo esta {focus_summary}, "
        "protegerás tus muebles, paredes y baterías en equipos DEWALT, Bosch, Makita y BLACK+DECKER."
    )

    return {
        "slug": slug,
        "pillar": pillar,
        "path": path,
        "isPillar": False,
        "isTransactional": False,
        "primaryKeyword": kw,
        "title": title,
        "seoTitle": f"{title} | ArreglaTuDepa.com",
        "metaDescription": f"Guía técnica paso a paso sobre {title}. Compatibilidad y consejos en DEWALT, Bosch, Makita y BLACK+DECKER.",
        "excerpt": f"Tutorial práctico sobre {title}: {focus_summary}.",
        "quickAnswer": quick_answer,
        "readingMinutes": 6,
        "image": {
            "prompt": build_diverse_prompt(subj, idx),
            "alt": title,
        },
        "blocks": blocks,
        "faqs": faqs,
        "sources": [
            {"label": "Power Tool Institute – Safe Operation & Compatibility Guidelines", "url": "https://www.powertoolinstitute.com/"},
        ],
        "related": rel,
        "datePublished": PUBLISHED,
        "dateModified": PUBLISHED,
        "imageUrl": None,
    }


def main():
    for old in ART_DIR.glob("*.json"):
        old.unlink()

    trans_items = generate_transactional_500()
    seo_items = generate_seo_1500()

    by_pillar: dict[str, list] = {p["slug"]: [] for p in PILLARS}
    for it in trans_items:
        by_pillar[it[2]].append(it)
    for it in seo_items:
        by_pillar[it[2]].append(it)

    all_articles = []
    seen_slugs = set()
    seen_kws = set()
    seen_titles = set()
    idx = 0

    # 1. Generar los 14 Hubs Pilares
    for p in PILLARS:
        art = make_pillar_article(p, by_pillar[p["slug"]], idx)
        idx += 1
        assert art["slug"] not in seen_slugs, f"Duplicate slug: {art['slug']}"
        assert art["primaryKeyword"] not in seen_kws, f"Duplicate kw: {art['primaryKeyword']}"
        assert art["title"] not in seen_titles, f"Duplicate title: {art['title']}"
        seen_slugs.add(art["slug"])
        seen_kws.add(art["primaryKeyword"])
        seen_titles.add(art["title"])
        all_articles.append(art)

    pillar_paths = {
        p_slug: [f"/{p_slug}/{clean_slug(c[0])}/" for c in c_list]
        for p_slug, c_list in by_pillar.items()
    }

    # 2. Generar los 500 Artículos Transaccionales
    for i, it in enumerate(trans_items):
        p_slug = it[2]
        sibs = pillar_paths[p_slug]
        rot_sibs = sibs[(i + 1) % len(sibs):] + sibs[: (i + 1) % len(sibs)]
        art = make_transactional_article(it, rot_sibs, idx)
        idx += 1
        assert art["slug"] not in seen_slugs, f"Duplicate slug: {art['slug']}"
        assert art["primaryKeyword"] not in seen_kws, f"Duplicate kw: {art['primaryKeyword']}"
        assert art["title"] not in seen_titles, f"Duplicate title: {art['title']}"
        seen_slugs.add(art["slug"])
        seen_kws.add(art["primaryKeyword"])
        seen_titles.add(art["title"])
        all_articles.append(art)

    # 3. Generar los 1,500 Artículos SEO Informacionales
    for i, it in enumerate(seo_items):
        p_slug = it[2]
        sibs = pillar_paths[p_slug]
        rot_sibs = sibs[(i + 1) % len(sibs):] + sibs[: (i + 1) % len(sibs)]
        art = make_seo_article(it, rot_sibs, idx)
        idx += 1
        assert art["slug"] not in seen_slugs, f"Duplicate slug: {art['slug']}"
        assert art["primaryKeyword"] not in seen_kws, f"Duplicate kw: {art['primaryKeyword']}"
        assert art["title"] not in seen_titles, f"Duplicate title: {art['title']}"
        seen_slugs.add(art["slug"])
        seen_kws.add(art["primaryKeyword"])
        seen_titles.add(art["title"])
        all_articles.append(art)

    for art in all_articles:
        (ART_DIR / f"{art['slug']}.json").write_text(
            json.dumps(art, ensure_ascii=False, indent=2), encoding="utf-8"
        )

    kw_map = [
        {
            "slug": a["slug"],
            "pillar": a["pillar"],
            "path": a["path"],
            "isPillar": a["isPillar"],
            "isTransactional": a["isTransactional"],
            "primaryKeyword": a["primaryKeyword"],
            "title": a["title"],
        }
        for a in all_articles
    ]
    (DATA_DIR / "keyword_map.json").write_text(
        json.dumps(kw_map, ensure_ascii=False, indent=2), encoding="utf-8"
    )

    cat_names = {
        p["slug"]: p["title"].split(":")[0].split("(")[0].strip()
        for p in PILLARS
    }
    search_index = [
        {
            "t": a["title"],
            "p": a["path"],
            "n": cat_names.get(a["pillar"], a["pillar"]),
            "r": a["readingMinutes"],
        }
        for a in all_articles
    ]
    (PUB_DIR / "search-index.json").write_text(
        json.dumps(search_index, ensure_ascii=False), encoding="utf-8"
    )

    print(
        f"OK: Generados {len(all_articles)} artículos únicos "
        f"({len(PILLARS)} Pilares + {len(trans_items)} Transaccionales Amazon + {len(seo_items)} SEO Informacionales). "
        f"0% Canibalización verificada."
    )


if __name__ == "__main__":
    main()
