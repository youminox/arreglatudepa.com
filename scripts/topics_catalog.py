#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Catálogo Maestro Ortogonal Sin Canibalización para ArreglaTuDepa.com:
- 14 Hubs Pilares de Categoría (PILLARS)
- 500 Artículos Transaccionales de Afiliados Amazon (6 Silos: 110 + 80 + 100 + 80 + 65 + 65 = 500)
- 1,500 Artículos SEO Informacionales (8 Silos: 200 + 200 + 200 + 190 + 190 + 180 + 170 + 170 = 1,500)
Total = 2,014 páginas editoriales únicas con 0 solapamiento de intención, slug o primaryKeyword.
"""

PILLARS = [
    {
        "slug": "resenas-taladros-y-atornilladores",
        "title": "Reseñas de Taladros y Destornilladores Eléctricos en Amazon EE. UU. (DEWALT, Bosch, Makita y BLACK+DECKER)",
        "kw": "resenas de taladros y destornilladores electricos amazon estados unidos",
        "focus": "análisis individuales por código de modelo (SKU) de taladros atornilladores, taladros percutores, atornilladores de impacto y destornilladores eléctricos en Amazon Estados Unidos, evaluando presupuesto, tipo de trabajo y compatibilidad de baterías, cargadores, brocas y puntas",
        "subject": "an editorial workbench displaying cordless drills and electric screwdrivers in yellow-black, blue-red, teal and orange-black finishes beside lithium batteries and drill bit cases",
    },
    {
        "slug": "juegos-y-kits-de-herramientas",
        "title": "Juegos y Kits de Herramientas en Amazon EE. UU.: Combos Inalámbricos y Maletines para Departamento",
        "kw": "juegos y kits de herramientas amazon estados unidos para departamento",
        "focus": "guías de compra de combos de herramientas inalámbricas (taladro + atornillador de impacto) y juegos completos de herramientas manuales y mecánicas de DEWALT, Bosch, Makita y BLACK+DECKER según presupuesto y proyectos domésticos",
        "subject": "an open heavy-duty tool kit case with a cordless drill, impact driver, lithium battery pack, charger, tape measure and socket wrenches on a birch apartment table",
    },
    {
        "slug": "comparativas-de-herramientas",
        "title": "Comparativas de Taladros, Destornilladores y Marcas: DEWALT vs Bosch vs Makita vs BLACK+DECKER",
        "kw": "comparativas de herramientas dewalt vs bosch vs makita vs black decker",
        "focus": "duelos directos Modelo A vs Modelo B y Marca A vs Marca B comparando torque en Nm e in-lbs, voltaje 12V vs 18V/20V MAX, peso, mandril, precio en Amazon EE. UU. y repuestos compatibles",
        "subject": "a balanced side-by-side studio comparison of two cordless power drills on a split wooden workbench with metal drill chucks and battery packs in natural light",
    },
    {
        "slug": "herramientas-por-presupuesto-y-trabajo",
        "title": "Herramientas por Presupuesto y Tipo de Trabajo en Amazon EE. UU. (Muebles, Drywall y Concreto)",
        "kw": "herramientas por presupuesto y tipo de trabajo amazon estados unidos",
        "focus": "selecciones en Amazon Estados Unidos clasificadas por presupuesto (menos de US$50, US$80, US$100, US$150 y gama profesional) y tipo de trabajo (armar muebles de melamina, perforar drywall, ladrillo o concreto armado)",
        "subject": "curated cordless drills and compact electric screwdrivers arranged by budget tier next to wall anchors, wood screws and masonry bits in a bright apartment",
    },
    {
        "slug": "baterias-y-cargadores-compatibles",
        "title": "Baterías y Cargadores Compatibles por Modelo en Amazon EE. UU. (20V MAX, 18V LXT, 12V Max y PowerConnect)",
        "kw": "baterias y cargadores compatibles dewalt bosch makita black decker amazon",
        "focus": "guías comerciales exactas para comprar la batería deslizante y el cargador compatible con tu taladro o destornillador DEWALT, Bosch, Makita o BLACK+DECKER sin equivocarte de riel ni voltaje",
        "subject": "slide-style lithium-ion tool battery packs of 2.0Ah and 5.0Ah docked on fast chargers with green LED indicators on a clean wooden workshop counter",
    },
    {
        "slug": "brocas-puntas-y-accesorios-compatibles",
        "title": "Brocas, Puntas y Accesorios Compatibles en Amazon EE. UU. (Concreto, Madera, Metal e Impact Rated)",
        "kw": "brocas puntas y accesorios compatibles para taladros y atornilladores amazon",
        "focus": "selecciones de sets de brocas para concreto, porcelanato, melamina y metal, puntas de torsión Impact Rated de 1/4\" Hex, adaptadores angulares y colectores de polvo compatibles con cada mandril",
        "subject": "an organized modular bit case open on an oak workbench showing titanium drill bits, carbide masonry bits and magnetic 1/4-inch hex torsion screwdriver bits",
    },
    {
        "slug": "guia-de-compatibilidad-baterias-y-voltaje",
        "title": "Guía Técnica de Compatibilidad de Baterías, Voltaje (12V vs 18V vs 20V MAX), Amperaje Ah y Cargadores 110V/220V",
        "kw": "guia de compatibilidad de baterias voltaje 18v vs 20v max y cargadores",
        "focus": "explicaciones eléctricas y mecánicas sobre por qué 20V MAX y 18V tienen el mismo voltaje nominal, qué significa 2.0Ah vs 5.0Ah, cómo usar cargadores de EE. UU. (110V) en 220V y códigos de luces LED",
        "subject": "macro close-up of a lithium-ion power tool battery rail, contact terminals and 3-LED charge gauge beside a charger and voltage tester on a workbench",
    },
    {
        "slug": "guia-de-mandriles-brocas-y-puntas",
        "title": "Guía de Mandriles (3/8\" vs 1/2\" vs 1/4\" Hex), Vástagos y Medidas Exactas de Brocas y Puntas",
        "kw": "guia de mandriles 3 8 vs 1 2 vastagos y medidas de brocas y puntas",
        "focus": "compatibilidad mecánica entre portabrocas sin llave de 3/8\" (10 mm), 1/2\" (13 mm), encastre hexagonal rápido 1/4\", SDS-Plus, diferencias entre PH2, PZ2 y Torx, y tablas de equivalencia broca-tarugo",
        "subject": "extreme macro photograph of a brushed steel keyless 1/2-inch drill chuck clamping a flute drill bit next to 1/4-inch hex screwdriver bits on birch wood",
    },
    {
        "slug": "perforar-paredes-concreto-drywall-y-ceramica",
        "title": "Cómo Perforar Paredes de Concreto, Ladrillo Hueco, Drywall y Cerámica en tu Departamento sin Daños",
        "kw": "como perforar paredes de concreto ladrillo drywall y ceramica en departamento",
        "focus": "técnicas paso a paso para identificar el material de las paredes de tu departamento, activar o desactivar el modo percutor, elegir tarugos según los kilos de carga y evitar tuberías o cables ocultos",
        "subject": "hands holding a compact hammer drill with a masonry bit and spirit level preparing to drill cleanly into a bright modern apartment wall",
    },
    {
        "slug": "armado-de-muebles-madera-y-melamina",
        "title": "Armado de Muebles, Madera y Melamina: Ajuste de Torque, Embrague y Destornilladores sin Barrer Tornillos",
        "kw": "armado de muebles de melamina y madera con taladro y destornillador electrico",
        "focus": "configuración exacta del anillo de embrague (niveles 1 al 15), perforación guía, avellanado e instalación de bisagras cazoleta de 35 mm y correderas telescópicas sin dañar tableros de melamina o MDF",
        "subject": "hands using a compact 12V cordless drill-driver set on low clutch torque to assemble a white oak melamine cabinet hinge in a sunlit apartment",
    },
    {
        "slug": "instalaciones-y-mejoras-en-departamento",
        "title": "Instalaciones y Mejoras en Departamento: Soportes de TV, Cortinas Roller, Repisas Flotantes y Baño",
        "kw": "instalaciones en departamento soportes de tv cortinas roller y repisas",
        "focus": "proyectos domésticos completos indicando qué taladro o destornillador eléctrico, qué broca, qué punta y qué anclaje usar para instalar televisores, cortinas, espejos, racks de bicicleta y accesorios",
        "subject": "modern apartment living room installation scene with a laser level projecting a green line on the wall, a TV wall mount bracket and a cordless drill on a side table",
    },
    {
        "slug": "motores-torque-embrague-y-ergonomia",
        "title": "Motores Brushless vs Carbones, Torque (Nm e in-lbs), Velocidades 1/2 y Diferencias entre Herramientas",
        "kw": "motor brushless vs carbones torque nm in lbs y velocidades del taladro",
        "focus": "ingeniería clara para compradores: cuándo conviene pagar por motor sin escobillas (Brushless), diferencias reales entre taladro percutor y atornillador de impacto, y cómo usar las velocidades 1 y 2",
        "subject": "close-up studio view of a brushless cordless drill highlighting the 2-speed gear selector switch and numbered torque clutch ring in crisp directional light",
    },
    {
        "slug": "mantenimiento-seguridad-y-solucion-de-fallas",
        "title": "Mantenimiento, Seguridad y Solución de Fallas en Taladros y Destornilladores Eléctricos",
        "kw": "mantenimiento seguridad y solucion de fallas en taladros inalambricos",
        "focus": "diagnóstico práctico cuando un mandril se traba, una batería parpadea en rojo, el motor huele a quemado o la broca gira descentrada, además de limpieza de polvo de concreto y seguridad en casa",
        "subject": "clean home workshop maintenance scene with safety glasses, microfiber cloth, compressed air duster and a cordless drill on a rubber mat",
    },
    {
        "slug": "organizacion-de-herramientas-y-compra-en-amazon",
        "title": "Organización de Herramientas en Departamento y Guía de Compra Inteligente en Amazon Estados Unidos",
        "kw": "organizacion de herramientas en departamento y como comprar en amazon usa",
        "focus": "soluciones para guardar herramientas sin humedad ni desorden en clósets pequeños y cómo descifrar los códigos Bare Tool (B / Z) frente a Kits completos (C1 / C2 / D2 / P2) en Amazon EE. UU.",
        "subject": "neatly organized apartment closet shelf with modular stackable tool boxes, labeled drill bit organizers, silica gel packs and a delivery box",
    },
]


def generate_transactional_500():
    """
    Genera exactamente 500 artículos transaccionales únicos en 6 silos (110 + 80 + 100 + 80 + 65 + 65 = 500).
    Cada tupla:
    (slug, title, pillar, kw, budget_spec, job_spec, bat_compat, bit_compat, top_picks, visual_subject)
    """
    items = []

    # =========================================================================
    # SILO 1: resenas-taladros-y-atornilladores (110 artículos)
    # =========================================================================
    silo1_flagships = [
        (
            "dewalt-dcd777d1-taladro-brushless-20v-max-resena-y-compatibilidad",
            "DEWALT DCD777D1 (20V MAX Brushless): Reseña, Torque, Precio en Amazon y Baterías/Brocas Compatibles",
            "US$99 – US$129 en Amazon EE. UU. (Kit completo con batería 2.0Ah, cargador y bolso)",
            "Todoterreno para departamento y casa: armado de muebles, madera, metal y perforación en drywall/ladrillo suave",
            "100 % compatible con todas las baterías DEWALT 20V MAX (DCB203 2.0Ah, DCB204 4.0Ah, DCB205 5.0Ah, PowerStack DCBP034) y cargadores DCB112 / DCB115",
            "Mandril sin llave de 1/2\" (13 mm): acepta brocas cilíndricas y hexagonales desde 1/16\" hasta 1/2\" y puntas 1/4\" Hex (DEWALT DWA2T40IR)",
            "DEWALT DCD777D1 Kit 20V MAX Brushless, Batería DCB205 5.0Ah y Set 40 Puntas DWA2T40IR",
            "a compact yellow-and-black brushless 20V cordless drill standing next to a 2.0Ah slide battery, charger and bit case on a wooden workbench",
        ),
        (
            "bosch-ps31-2a-taladro-12v-max-compacto-resena-y-baterias",
            "Bosch PS31-2A (12V Max 3/8\"): Reseña del Mejor Taladro Compacto para Muebles, Melamina y Departamento",
            "US$89 – US$119 en Amazon EE. UU. (Incluye 2 baterías 12V Max de 2.0Ah, cargador y estuche)",
            "Armado de muebles tipo IKEA, melamina de 15/18 mm, bisagras de cocina, drywall e instalaciones ligeras sin cansar la muñeca",
            "Compatible con toda la familia Bosch 12V Max (baterías BAT414 2.0Ah, GBA12V30 3.0Ah, GBA12V60 6.0Ah y cargadores GAL12V-20 / GAL12V-40)",
            "Mandril sin llave de 3/8\" (10 mm): acepta brocas hasta 10 mm para madera/metal/drywall y portapuntas magnéticos 1/4\" Hex (Bosch ITBHQC201)",
            "Bosch PS31-2A 12V Max Kit, Bosch GSR12V-140FCB22 Flexiclick y Set Bosch Impact Tough 40 pzs",
            "a compact blue-and-black 12V cordless drill-driver with two compact lithium batteries inside a modern kitchen cabinet installation",
        ),
        (
            "black-decker-ldx120c-taladro-20v-max-economico-resena",
            "BLACK+DECKER LDX120C (20V MAX): Reseña del Taladro Inalámbrico Económico #1 en Amazon EE. UU.",
            "US$44 – US$59 en Amazon EE. UU. (Incluye batería 20V MAX de 1.5Ah y cargador)",
            "Bricolaje ocasional en departamento: colgar cuadros, instalar cortinas, armar muebles y reparaciones caseras con bajo presupuesto",
            "Compatible con baterías BLACK+DECKER 20V MAX PowerConnect (LBXR20 1.5Ah, LBXR2020 2.0Ah, LB2X4020 4.0Ah) y cargadores LCS1620 / BDCAC202B",
            "Mandril sin llave de 3/8\" (10 mm) con 11 posiciones de embrague: compatible con sets de brocas y puntas de 1/4\" Hex como BLACK+DECKER BDA91109",
            "BLACK+DECKER LDX120C 20V MAX, Kit 68 Piezas LDX120PK y Batería Extra LBXR2020",
            "an orange-and-black 20V cordless drill on an apartment dining table beside picture hooks, wall anchors and a household bit set",
        ),
        (
            "makita-xfd131-taladro-18v-lxt-brushless-resena-completa",
            "Makita XFD131 (18V LXT Brushless): Reseña de Potencia, Carga en 30 Minutos y Accesorios Compatibles",
            "US$129 – US$159 en Amazon EE. UU. (Kit con batería 3.0Ah BL1830B, cargador rápido DC18RC y bolso)",
            "Proyectos exigentes de carpintería doméstica, metal, remodelación de departamento y uso intensivo con ergonomía superior",
            "Compatible con más de 300 herramientas Makita 18V LXT Star Protection (baterías BL1820B, BL1830B, BL1840B, BL1850B y cargador DC18RC)",
            "Mandril de 1/2\" (13 mm): compatible con brocas de hasta 13 mm y sets de puntas de torsión Makita Impact XPS (E-01644)",
            "Makita XFD131 18V LXT Kit, Batería Makita BL1850B 5.0Ah y Set 60 Puntas Makita Impact XPS",
            "a teal brushless 18V cordless driver-drill with its fast charger and lithium battery on a clean birch workshop bench",
        ),
        (
            "dewalt-dcd805d2-taladro-percutor-xr-concreto-resena",
            "DEWALT DCD805D2 (20V MAX XR Percutor): Reseña para Perforar Paredes de Concreto y Ladrillo en Departamento",
            "US$169 – US$199 en Amazon EE. UU. (Kit con 2 baterías 2.0Ah, cargador y maletín)",
            "Perforación frecuente en muros de concreto, ladrillo macizo, instalación de soportes de TV pesados, madera dura y acero",
            "Compatible con todas las baterías DEWALT 20V MAX, XR, PowerStack (DCBP034 / DCBP520) y FlexVolt 60V + cargadores DCB115 / DCB118",
            "Mandril metálico nitro-carburizado de 1/2\" (13 mm): ideal para brocas de carburo para concreto con vástago de 3 caras (DEWALT DW5207) y puntas FlexTorq",
            "DEWALT DCD805D2 XR Hammer Drill Kit, Brocas Concreto DEWALT Carburo y Batería PowerStack",
            "a heavy-duty compact hammer drill with metal chuck beside carbide masonry drill bits and heavy wall anchors against a concrete wall",
        ),
        (
            "dewalt-dcf680n2-destornillador-electrico-giroscopico-8v-resena",
            "DEWALT DCF680N2 (8V MAX Giroscópico): Reseña del Mejor Destornillador Eléctrico de Precisión en Amazon",
            "US$89 – US$109 en Amazon EE. UU. (Kit con 2 baterías 8V MAX, cargador y bolso)",
            "Armado rápido y milimétrico de muebles en melamina, gabinetes, interruptores eléctricos, bisagras y equipos delicados",
            "Usa exclusivamente baterías compactas DEWALT 8V MAX (DCB080) con su cargador rápido de 1 hora incluido en el kit",
            "Portapuntas hexagonal rápido de 1/4\" (6.35 mm) con mango articulado recto/pistola: acepta cualquier punta estándar de 1\" y 2\" (PH1, PH2, PZ2, Torx)",
            "DEWALT DCF680N2 8V Gyroscopic Kit, Batería DCB080 Extra y Set Puntas DEWALT MaxFit",
            "an articulated cordless electric screwdriver in pistol and inline grip assembling a cabinet hinge with a magnetic hex bit",
        ),
    ]
    for s, t, bud, job, bat, bit, picks, subj in silo1_flagships:
        items.append((s, t, "resenas-taladros-y-atornilladores", s.replace("-", " "), bud, job, bat, bit, picks, subj))

    # 26 modelos reales × 4 enfoques técnicos/compra = 104 -> 6 + 104 = 110 reseñas únicas
    silo1_models = [
        ("dewalt-dcd771c2-20v-max", "DEWALT DCD771C2 Taladro Inalámbrico 20V MAX", "US$89 – US$99", "Mantenimiento general de casa, madera, drywall y metal ligero", "Baterías DEWALT 20V MAX DCB201/DCB203/DCB205 + Cargador DCB112", "Mandril 1/2\" sin llave + brocas hasta 13 mm y puntas 1/4\" Hex"),
        ("dewalt-dcd794d1-atomic-20v", "DEWALT DCD794D1 ATOMIC 20V MAX Ultracompacto", "US$109 – US$139", "Espacios reducidos entre repisas, alacenas y armado intensivo", "Todas las baterías DEWALT 20V MAX y PowerStack DCBP034", "Mandril 1/2\" de trinquete + puntas de impacto y brocas titanio"),
        ("dewalt-dcd791d2-xr-20v", "DEWALT DCD791D2 20V MAX XR 2.0Ah Brushless", "US$149 – US$179", "Carpintería fina, remodelaciones y perforación continua en madera/acero", "Baterías DEWALT 20V MAX XR DCB203/DCB205 + Cargador DCB115", "Mandril metálico 1/2\" + brocas Forstner, paleta y cobalto"),
        ("dewalt-dcd996p2-xr-percutor", "DEWALT DCD996P2 Percutor 3 Velocidades 20V MAX XR", "US$229 – US$279", "Obra pesada, concreto duro, brocas sierra y pernos estructurales", "Baterías DEWALT 20V MAX 5.0Ah DCB205 y FlexVolt 60V", "Mandril 1/2\" nitro-carburizado + brocas mampostería y coronas"),
        ("dewalt-dcd701f2-xtreme-12v", "DEWALT DCD701F2 XTREME 12V MAX Subcompacto", "US$119 – US$139", "Instalación de muebles, cocinas, electricidad y drywall sin fatiga", "Exclusivo baterías DEWALT 12V MAX (DCB122 2.0Ah / DCB124 3.0Ah)", "Mandril 3/8\" (10 mm) + brocas guía para madera y puntas PH2/PZ2"),
        ("dewalt-dcd706f2-percutor-12v", "DEWALT DCD706F2 XTREME 12V MAX Taladro Percutor", "US$129 – US$149", "Perforar ladrillo y colgar cortinas/cuadros con tamaño de bolsillo", "Baterías DEWALT 12V MAX DCB122/DCB124 + Cargador DCB112", "Mandril 3/8\" + brocas carburo de 3/16\" y 1/4\" para tarugos"),
        ("dewalt-dcd703f1-5-en-1-12v", "DEWALT DCD703F1 XTREME 12V MAX Camaleón 5-en-1", "US$149 – US$179", "Esquinas imposibles de clósets, cajones y gabinetes de baño", "Baterías DEWALT 12V MAX DCB122 / DCB124", "4 cabezales intercambiables (3/8\", 1/4\" Hex, 90° y excéntrico)"),
        ("dewalt-dcf887d2-impacto-xr", "DEWALT DCF887D2 Atornillador de Impacto 20V MAX XR", "US$139 – US$169", "Meter tirafondos largos, armar estructuras de madera y pernos con modo Precision Drive", "Baterías DEWALT 20V MAX DCB203/DCB205 y PowerStack", "Encastre rápido 1/4\" Hex: requiere puntas Impact Ready de torsión"),
        ("dewalt-dcf850b-atomic-impacto", "DEWALT DCF850B ATOMIC Impact Driver Ultracorto", "US$99 – US$129 (Bare Tool)", "Atornillado de alto torque (1,825 in-lbs) en espacios de solo 10 cm", "Requiere batería DEWALT 20V MAX y cargador vendidos por separado", "Encastre 1/4\" Hex para puntas de impacto y dados magnéticos"),
        ("bosch-ps32-02-12v-brushless", "Bosch PS32-02 12V Max EC Brushless Taladro 3/8\"", "US$119 – US$139", "Montaje profesional de muebles, carpintería ligera e interiores", "Baterías Bosch 12V Max (BAT414 / GBA12V30) + Cargador GAL12V-20", "Mandril 3/8\" sin llave + brocas madera/metal hasta 10 mm"),
        ("bosch-gsr12v-300fcb22-flexiclick", "Bosch GSR12V-300FCB22 Flexiclick Brushless 5-en-1", "US$169 – US$199", "Instaladores de cocinas, muebles a medida y mantenimiento integral de depa", "Baterías Bosch 12V Max 2.0Ah/3.0Ah + Cargador GAL12V-20", "Mandril 1/2\" incluido + cabezal angular, excéntrico y 1/4\" Hex"),
        ("bosch-ps21-2a-destornillador-12v", "Bosch PS21-2A 12V Max Pocket Driver Hexagonal", "US$79 – US$99", "Atornillado continuo sobre la cabeza, bisagras, cajas eléctricas y muebles", "Baterías compactas Bosch 12V Max + Cargador GAL12V-20", "Portapuntas universal 1/4\" Hex + brocas con vástago hexagonal"),
        ("bosch-gsb18v-490b12-percutor-18v", "Bosch GSB18V-490B12 18V Brushless Taladro Percutor", "US$129 – US$159", "Perforar paredes de concreto/ladrillo y estructuras en casa o taller", "Baterías Bosch 18V CORE18V / AMPShare (GBA18V40 / GBA18V80)", "Mandril totalmente metálico de 1/2\" + brocas Bosch Multi-Construction"),
        ("bosch-gdx18v-1800c-freak-impacto", "Bosch GDX18V-1800C Freak 2-en-1 Impacto y Llave 1/2\"", "US$139 – US$169", "Tornillos estructurales con puntas 1/4\" y pernos/tuercas con vasos de 1/2\"", "Baterías Bosch 18V AMPShare / CORE18V + Cargador GAL18V-40", "Doble encastre: 1/4\" Hex interno + cuadro de 1/2\" externo para dados"),
        ("bosch-go-destornillador-usb", "Bosch GO Smart Cordless Screwdriver USB 3.6V", "US$49 – US$65", "Electrónica, enchufes, juguetes, bisagras delicadas y muebles pequeños", "Batería interna de litio recargable por cable Micro-USB / USB-C", "Portapuntas 1/4\" Hex con activación Push & Go y embrague mecánico"),
        ("bosch-11255vsr-bulldog-sds-plus", "Bosch 11255VSR Bulldog Xtreme Rotomartillo SDS-Plus", "US$149 – US$189", "Placas de concreto armado durísimo donde un taladro normal rebota", "Con cable 120V (8 Amperios) — no requiere baterías", "Encastre exclusivo SDS-Plus: requiere brocas SDS-Plus para concreto"),
        ("makita-xfd11zb-subcompact-18v", "Makita XFD11ZB 18V LXT Sub-Compact Brushless Negro", "US$95 – US$119 (Bare Tool)", "Tamaño y peso de 12V con toda la potencia y autonomía de 18V LXT", "Compatible con todas las baterías Makita 18V LXT (ideal con BL1820B 2.0Ah)", "Mandril 1/2\" sin llave + brocas madera, metal y puntas Impact XPS"),
        ("makita-xph12z-percutor-18v-lxt", "Makita XPH12Z / XPH12T Taladro Percutor 18V LXT Brushless", "US$99 – US$169", "Perforación en ladrillo, concreto ligero, madera y metal en departamento", "Baterías Makita 18V LXT BL1830B/BL1840B/BL1850B + Cargador DC18RC", "Mandril 1/2\" + brocas carburo mampostería y titanio"),
        ("makita-xph14z-percutor-alta-potencia", "Makita XPH14Z 18V LXT Percutor de Alto Torque (1,250 in-lbs)", "US$139 – US$179 (Bare Tool)", "Remodelación pesada, concreto denso y brocas sierra de gran diámetro", "Baterías Makita 18V LXT de 4.0Ah o 5.0Ah (BL1840B / BL1850B)", "Mandril metálico 1/2\" + mango lateral y brocas de alto impacto"),
        ("makita-fd09r1-12v-cxt-taladro", "Makita FD09R1 12V max CXT Taladro Atornillador 3/8\"", "US$99 – US$124", "Trabajos finos de carpintería, armado de mobiliario y reparaciones rápidas", "Exclusivo baterías deslizantes Makita 12V max CXT (BL1021B / BL1041B)", "Mandril 3/8\" (10 mm) + puntas 1/4\" Hex y brocas delgadas"),
        ("makita-xdt131-impacto-18v-lxt", "Makita XDT131 Kit Atornillador de Impacto 18V LXT Brushless", "US$129 – US$159", "Fijación ultrarrápida de tornillos largos en madera, tarugos y estructuras", "Batería Makita 18V LXT 3.0Ah incluida + compatible con toda la serie LXT", "Collarín rápido 1/4\" Hex: ideal con puntas Makita Impact XPS"),
        ("makita-df001dw-destornillador-3-6v", "Makita DF001DW Destornillador Eléctrico Articulado 3.6V", "US$49 – US$69", "Hogar y oficina: incluye estuche con 81 puntas para todo tipo de tornillos", "Batería integrada recargable por USB (cargador incluido)", "Encastre 1/4\" Hex con 81 accesorios incluidos en maletín"),
        ("black-decker-bcd704c1-percutor-20v", "BLACK+DECKER BCD704C1 Taladro Percutor 20V MAX PowerConnect", "US$59 – US$79", "Opción económica para perforar paredes de ladrillo/concreto ocasional en casa", "Baterías BLACK+DECKER 20V MAX PowerConnect (LBXR20 / LB2X4020)", "Mandril 1/2\" de 2 velocidades + brocas de concreto y madera"),
        ("black-decker-bdcdmt120c-matrix-20v", "BLACK+DECKER BDCDMT120C Sistema Modular MATRIX 20V MAX", "US$59 – US$79", "Departamentos sin espacio: cambia el cabezal a caladora, lijadora o impacto", "Baterías BLACK+DECKER 20V MAX PowerConnect + cabezales MATRIX", "Cabezal taladro 3/8\" incluido + compatible con 6 cabezales MATRIX"),
        ("black-decker-bdcsfl20c-destornillador-4v", "BLACK+DECKER BDCSFL20C 4V MAX LightDriver con Linterna", "US$26 – US$36", "Cajón de cocina del depa: armar muebles planos, juguetes y tapas de enchufe", "Batería interna 4V MAX de litio recargable por USB", "Portapuntas 1/4\" Hex + punta pelacables integrada"),
        ("black-decker-dr260c-taladro-con-cable", "BLACK+DECKER DR260C Taladro con Cable 5.2 Amp 3/8\"", "US$32 – US$44", "Energía continua sin preocuparse por recargar baterías en tareas domésticas", "Conexión directa a tomacorriente 120V AC (sin baterías)", "Mandril 3/8\" (10 mm) para brocas de madera, metal y plástico"),
    ]
    silo1_angles = [
        ("resena-torque-y-presupuesto-amazon", "Reseña Completa, Torque Real y Precio en Amazon EE. UU.", "three-quarter studio shot of the cordless power tool on a birch workbench with measurement caliper and screws"),
        ("baterias-y-cargadores-compatibles", "Guía Exacta de Baterías, Amperaje Ah y Cargadores Compatibles", "close-up of the cordless tool alongside its slide-on lithium battery pack and fast charger on an oak table"),
        ("brocas-puntas-y-trabajos-ideales", "Qué Brocas y Puntas Usa y Para Qué Trabajos del Depa Conviene", "flat-lay of the cordless drill next to compatible masonry, wood and titanium bits and magnetic hex driver bits"),
        ("opiniones-pros-contras-y-vale-la-pena", "Pros, Contras y Cuándo Vale la Pena Comprarlo Frente a Otros Modelos", "hands testing the cordless tool driving a screw cleanly into a wooden board in a bright apartment workshop"),
    ]
    for m_slug, m_name, bud, job, bat, bit in silo1_models:
        for a_slug, a_label, subj in silo1_angles:
            slug = f"{m_slug}-{a_slug}"
            title = f"{m_name}: {a_label}"
            kw = f"{m_slug.replace('-', ' ')} {a_slug.replace('-', ' ')}"
            items.append((
                slug,
                title,
                "resenas-taladros-y-atornilladores",
                kw,
                bud,
                job,
                bat,
                bit,
                f"{m_name} y consumibles oficiales en Amazon EE. UU.",
                subj,
            ))

    # =========================================================================
    # SILO 2: juegos-y-kits-de-herramientas (80 artículos)
    # =========================================================================
    silo2_flagships = [
        (
            "dewalt-dck240c2-combo-taladro-e-impacto-20v-resena",
            "DEWALT DCK240C2 Combo 20V MAX (Taladro DCD771 + Impacto DCF885): Reseña del Kit #1 en Amazon EE. UU.",
            "US$139 – US$169 en Amazon EE. UU. (Incluye 2 herramientas, 2 baterías 1.3Ah/1.5Ah, cargador y bolso)",
            "Remodelación integral de casa y departamento: perfora con un equipo y atornilla al instante con el otro sin cambiar de punta",
            "Incluye 2 baterías DEWALT 20V MAX + cargador DCB112; 100 % compatible con baterías mayores de 4.0Ah y 5.0Ah (DCB204/DCB205)",
            "Mandril 1/2\" en el taladro + encastre rápido 1/4\" Hex en el atornillador de impacto (ideal con set DEWALT DWA2T40IR)",
            "DEWALT DCK240C2 Combo, DEWALT DCK277D2 Brushless y Set 40 Puntas DWA2T40IR",
            "a yellow-and-black 2-tool cordless drill and impact driver combo kit with two batteries, charger and canvas bag on a workbench",
        ),
        (
            "black-decker-ldx120pk-juego-68-herramientas-taladro-resena",
            "BLACK+DECKER LDX120PK (Kit de 68 Piezas con Taladro 20V MAX): Reseña del Mejor Juego para Independizarse",
            "US$69 – US$89 en Amazon EE. UU. (Taladro inalámbrico 20V + 67 herramientas manuales y brocas en bolso)",
            "Tu primera caja de herramientas para departamento: incluye martillo, alicates, llave ajustable, cinta métrica, cutter, brocas y taladro 20V",
            "Incluye batería BLACK+DECKER 20V MAX PowerConnect (LBXR20) y cargador; compatible con toda la línea 20V de la marca",
            "Mandril 3/8\" + incluye 10 brocas, 32 puntas de destornillador y portapuntas magnético listos para usar al abrir la caja",
            "BLACK+DECKER LDX120PK 68-Piece Kit, Batería Extra LBXR2020 y Set Tarugos Pared",
            "an open orange-and-black 68-piece home project tool kit bag displaying a 20V cordless drill, hammer, pliers, tape measure and bit set",
        ),
    ]
    for s, t, bud, job, bat, bit, picks, subj in silo2_flagships:
        items.append((s, t, "juegos-y-kits-de-herramientas", s.replace("-", " "), bud, job, bat, bit, picks, subj))

    # 13 kits reales × 6 ángulos de análisis = 78 -> 2 + 78 = 80 artículos únicos
    silo2_kits = [
        ("dewalt-dck277d2-combo-brushless-20v", "DEWALT DCK277D2 Combo Brushless 20V MAX (Taladro + Impacto)", "US$179 – US$219", "Bricolaje avanzado y carpintería con motores sin escobillas y baterías 2.0Ah", "2 baterías DEWALT 20V MAX DCB203 2.0Ah + Cargador DCB112", "Mandril 1/2\" + encastre 1/4\" Hex para puntas de impacto"),
        ("dewalt-dck225d2-atomic-combo-20v", "DEWALT DCK225D2 ATOMIC 20V MAX Combo Ultracompacto", "US$189 – US$229", "Máxima maniobrabilidad en departamentos, gabinetes y clósets estrechos", "2 baterías DEWALT 20V MAX 2.0Ah + compatible con PowerStack", "Taladro 1/2\" + Impacto 1/4\" Hex ultracorto"),
        ("dewalt-dck299p2-xr-percutor-impacto", "DEWALT DCK299P2 / DCK2050M2 Combo XR Percutor + Impacto", "US$279 – US$329", "Concreto pesado, estructuras metálicas y remodelaciones completas", "2 baterías DEWALT XR 4.0Ah / 5.0Ah + Cargador rápido DCB115", "Mandril metálico 1/2\" percutor + Impacto 3 velocidades"),
        ("dewalt-dck421d2-kit-4-herramientas-20v", "DEWALT DCK421D2 / DCK445D1M1 Kit de 4 Herramientas 20V MAX", "US$299 – US$379", "Equipamiento total de renovación: taladro, impacto, sierra y linterna LED", "2 baterías DEWALT 20V MAX + cargador y bolso grande con ruedas/asa", "Brocas 1/2\", puntas 1/4\" Hex y hojas de sierra estándar"),
        ("dewalt-dwmt73803-juego-mecanico-168-pzs", "DEWALT DWMT73803 / DWMT81531 Juego Mecánico y Dados en Maletín", "US$99 – US$149", "Pernos de soportes de TV, bicicletas, muebles metálicos y mecánica doméstica", "Herramientas manuales en acero cromo-vanadio (no requiere baterías)", "Trinquetes 1/4\", 3/8\" y 1/2\", dados SAE/métricos, llaves Allen y puntas"),
        ("bosch-clpk22-120-combo-12v-max", "Bosch CLPK22-120 Combo 12V Max (Taladro PS31 + Impacto PS41)", "US$139 – US$169", "El combo ligero favorito para armadores de muebles e instaladores de interiores", "2 baterías Bosch 12V Max 2.0Ah + cargador rápido de 30 min", "Mandril 3/8\" + atornillador de impacto 1/4\" Hex"),
        ("bosch-gxl12v-270b22-combo-brushless-12v", "Bosch GXL12V-270B22 Combo Brushless 12V Max", "US$169 – US$199", "Potencia sin escobillas en formato bolsillo para departamento y carpintería", "2 baterías Bosch 12V Max 2.0Ah + compatible con GBA12V30 3.0Ah", "Portabrocas 3/8\" + encastre 1/4\" Hex de impacto"),
        ("bosch-gxl18v-240b22-combo-18v", "Bosch GXL18V-240B22 / 496B22 Combo 18V Brushless", "US$199 – US$249", "Perforación en mampostería y atornillado dual (1/4\" Hex + 1/2\" cuadrado Freak)", "2 baterías Bosch 18V CORE18V / AMPShare + Cargador GAL18V-40", "Mandril 1/2\" + llave/atornillador Freak 2-en-1"),
        ("makita-xt269m-combo-18v-lxt-brushless", "Makita XT269M Combo 18V LXT Brushless (Percutor + Impacto 4.0Ah)", "US$249 – US$289", "Kit profesional de por vida para concreto, madera dura y remodelación", "2 baterías Makita 18V LXT 4.0Ah BL1840B + Cargador rápido DC18RC", "Mandril 1/2\" percutor XPH12 + impacto XDT13 1/4\" Hex"),
        ("makita-ct225syx-combo-18v-compacto", "Makita CT225SYX / XT288T Combo 18V LXT en Amazon EE. UU.", "US$159 – US$299", "Equilibrio japonés entre bajo peso, baja vibración y recarga ultrarrápida", "Baterías Makita 18V LXT Star Protection + cargador rápido", "Mandril 1/2\" + impacto 1/4\" Hex compatible con Impact XPS"),
        ("makita-ct232-combo-12v-cxt", "Makita CT232 Combo 12V max CXT (Taladro + Impacto)", "US$139 – US$169", "Trabajos delicados de mueblería, drywall y mantenimiento en casa sin peso extra", "2 baterías deslizantes Makita 12V max CXT BL1016 / BL1021B", "Mandril 3/8\" + encastre 1/4\" Hex rápido"),
        ("black-decker-bd2kitcddi-combo-20v", "BLACK+DECKER BD2KITCDDI Combo 20V MAX (Taladro + Impacto)", "US$89 – US$119", "El combo de 2 herramientas inalámbricas más accesible de marca reconocida", "2 baterías BLACK+DECKER 20V MAX PowerConnect + cargador", "Mandril 3/8\" + atornillador de impacto 1/4\" Hex"),
        ("black-decker-bdcdmt1206kitc-matrix-6-en-1", "BLACK+DECKER BDCDMT1206KITC MATRIX Combo 6 Herramientas en 1 Maletín", "US$179 – US$229", "Taller completo en una sola caja para departamentos sin espacio de almacenaje", "Batería BLACK+DECKER 20V MAX PowerConnect + estuche rígido organizador", "Cabezales de taladro, impacto, caladora, lijadora, multiherramienta y router"),
    ]
    silo2_angles = [
        ("que-incluye-y-resena-completa", "Qué Incluye la Caja, Reseña y Precio en Amazon EE. UU.", "overhead studio view of the complete cordless tool kit laid out neatly beside its carrying case"),
        ("para-que-trabajos-de-departamento-sirve", "Qué Proyectos de Casa y Departamento Resuelve sin Comprar Más Equipos", "lifestyle DIY scene in a modern apartment living room using the combo tool kit to install shelves"),
        ("baterias-incluidas-autonomia-y-cargador", "Análisis de las Baterías Incluidas, Tiempo de Carga y Repuestos Compatibles", "close-up of the kit's dual lithium batteries and charger plugged in on a wooden workbench"),
        ("brocas-y-accesorios-que-debes-agregar", "Qué Set de Brocas, Puntas y Tarugos Conviene Comprar Junto al Kit", "the cordless combo kit paired with a modular masonry and impact bit case on birch wood"),
        ("comparativa-frente-a-comprar-por-separado", "¿Sale Más Barato este Kit en Amazon o Comprar las Herramientas Sueltas?", "two cordless tools from the combo kit side by side with battery packs in bright natural daylight"),
        ("opiniones-durabilidad-y-veredicto", "Opiniones Reales, Durabilidad y Para Quién Vale la Pena la Inversión", "hands packing a cordless drill and impact driver back into their heavy-duty organizer bag after a home repair"),
    ]
    for k_slug, k_name, bud, job, bat, bit in silo2_kits:
        for a_slug, a_label, subj in silo2_angles:
            slug = f"{k_slug}-{a_slug}"
            title = f"{k_name}: {a_label}"
            kw = f"{k_slug.replace('-', ' ')} {a_slug.replace('-', ' ')}"
            items.append((
                slug,
                title,
                "juegos-y-kits-de-herramientas",
                kw,
                bud,
                job,
                bat,
                bit,
                f"{k_name} y set de puntas/brocas en Amazon EE. UU.",
                subj,
            ))

    # =========================================================================
    # SILO 3: comparativas-de-herramientas (100 artículos)
    # =========================================================================
    silo3_flagship = (
        "dewalt-vs-bosch-vs-makita-vs-black-decker-cual-elegir",
        "DEWALT vs Bosch vs Makita vs BLACK+DECKER: ¿Qué Marca Elegir según tu Presupuesto y Tipo de Trabajo?",
        "comparativas-de-herramientas",
        "dewalt vs bosch vs makita vs black decker cual elegir",
        "Desde US$45 (BLACK+DECKER 20V) hasta US$99–US$149 (Bosch 12V / DEWALT 20V) y US$150+ (Makita 18V LXT / DEWALT XR)",
        "Comparativa integral para bricolaje ocasional, armado de muebles en departamento, perforación en concreto y uso profesional",
        "Sistemas de baterías comparados: DEWALT 20V MAX vs Bosch 12V/18V AMPShare vs Makita 18V LXT vs BLACK+DECKER 20V PowerConnect (no intercambiables entre marcas)",
        "Mandriles de 3/8\" y 1/2\" y encastres 1/4\" Hex: las 4 marcas comparten compatibilidad universal de brocas cilíndricas y puntas hexagonales",
        "DEWALT DCD777D1, Bosch PS31-2A, Makita XFD131 y BLACK+DECKER LDX120C",
        "four cordless drills in yellow, blue, teal and orange colors arranged side by side on a clean workshop bench",
    )
    items.append(silo3_flagship)

    # 11 duelos directos × 9 criterios de comparación = 99 -> 1 + 99 = 100 artículos únicos
    vs_duels = [
        ("dewalt-dcd771c2-vs-dcd777d1", "DEWALT DCD771C2 (Carbones) vs DEWALT DCD777D1 (Brushless)", "US$89 vs US$109 en Amazon EE. UU.", "Ambos usan exactamente las mismas baterías DEWALT 20V MAX y brocas hasta 1/2\""),
        ("dewalt-20v-max-vs-makita-18v-lxt", "DEWALT 20V MAX vs Makita 18V LXT", "US$99 – US$249 según kit en Amazon EE. UU.", "Baterías DCB203/DCB205 vs Makita BL1830B/BL1850B con carga rápida en 30 min"),
        ("bosch-12v-max-vs-dewalt-12v-xtreme", "Bosch 12V Max (PS31 / PS32) vs DEWALT 12V MAX XTREME (DCD701)", "US$99 – US$139 en Amazon EE. UU.", "Baterías tubulares Bosch 12V en el mango vs baterías deslizantes DEWALT 12V"),
        ("black-decker-ldx120c-vs-dewalt-dcd771c2", "BLACK+DECKER LDX120C vs DEWALT DCD771C2", "US$49 económico vs US$99 gama media-alta", "Mandril 3/8\" de 1 velocidad (B+D) vs Mandril 1/2\" de 2 velocidades y 300 UWO (DEWALT)"),
        ("bosch-flexiclick-vs-dewalt-dcd703-5-en-1", "Bosch Flexiclick 12V vs DEWALT DCD703F1 5-en-1", "US$159 – US$199 en Amazon EE. UU.", "Comparativa de los 2 mejores taladros multicabezal para gabinetes y esquinas"),
        ("makita-subcompact-xfd11-vs-dewalt-atomic-dcd794", "Makita Sub-Compact 18V vs DEWALT ATOMIC 20V MAX", "US$109 – US$159 en Amazon EE. UU.", "Los dos taladros sin escobillas más cortos y ligeros con baterías de 18V/20V"),
        ("bosch-18v-ampshare-vs-dewalt-20v-xr", "Bosch 18V Brushless vs DEWALT 20V MAX XR", "US$139 – US$219 en Amazon EE. UU.", "Baterías CORE18V de Bosch frente a XR / PowerStack de DEWALT para concreto y obra"),
        ("makita-12v-cxt-vs-bosch-12v-max", "Makita 12V max CXT vs Bosch 12V Max", "US$99 – US$149 en Amazon EE. UU.", "Batería deslizante Makita BL1021B vs batería compacta Bosch GBA12V para mueblería"),
        ("taladro-percutor-vs-atornillador-de-impacto", "Taladro Percutor (Hammer Drill) vs Atornillador de Impacto (Impact Driver)", "US$99 – US$179 en Amazon EE. UU.", "Golpe axial hacia adelante para concreto vs golpe rotacional para tornillos largos"),
        ("destornillador-electrico-4v-8v-vs-taladro-12v", "Destornillador Eléctrico (4V / 8V) vs Taladro Inalámbrico de 12V", "US$30 – US$99 en Amazon EE. UU.", "Carga USB / 8V para armar muebles vs mandril de 3/8\" capaz de perforar paredes"),
        ("taladro-inalambrico-20v-vs-taladro-con-cable-120v", "Taladro Inalámbrico a Batería (18V/20V) vs Taladro con Cable", "US$40 – US$149 en Amazon EE. UU.", "Libertad total con baterías de litio vs potencia continua sin recargas"),
    ]
    vs_angles = [
        ("para-departamento-y-arreglos-en-casa", "para Arreglos en Departamento y Mantenimiento del Hogar", "Evaluación práctica en espacios interiores, ruido y facilidad de control"),
        ("para-perforar-concreto-y-ladrillo", "para Perforar Paredes de Concreto, Ladrillo y Mampostería", "Prueba de RPM, golpes por minuto (BPM), mandril y brocas de carburo"),
        ("para-armar-muebles-y-melamina", "para Armar Muebles, Melamina, MDF y Gabinetes de Cocina", "Precisión del embrague de torque, peso en muñeca y largo del cabezal"),
        ("por-presupuesto-y-calidad-precio-amazon", "por Presupuesto y Relación Calidad-Precio en Amazon EE. UU.", "Costo del kit inicial, durabilidad del motor y valor de reventa"),
        ("por-ecosistema-de-baterias-y-cargadores", "por Costo y Variedad de Baterías y Cargadores Compatibles", "Precio de baterías extra de 2.0Ah/5.0Ah y variedad de herramientas que comparten riel"),
        ("por-torque-potencia-y-motor-brushless", "por Torque Real (Nm / in-lbs), Velocidades y Motor Brushless", "Fuerza bruta para tornillos gruesos y eficiencia energética sin escobillas"),
        ("por-peso-tamano-y-ergonomia", "por Peso, Equilibrio en Mano y Trabajo en Espacios Estrechos", "Comodidad para usar sobre la cabeza, instalar cortinas o trabajar en alacenas"),
        ("por-mandril-brocas-y-accesorios", "por Tipo de Mandril (3/8\", 1/2\", 1/4\" Hex) y Brocas Compatibles", "Capacidad máxima de sujeción y rapidez para cambiar entre perforar y atornillar"),
        ("cual-conviene-comprar-primero", "¿Cuál Conviene Comprar Primero según tu Nivel de Experiencia?", "Guía clara de decisión para principiantes vs aficionados avanzados al bricolaje"),
    ]
    for d_slug, d_names, d_bud, d_compat in vs_duels:
        for a_slug, a_label, a_job in vs_angles:
            slug = f"{d_slug}-{a_slug}"
            title = f"{d_names} {a_label}"
            kw = f"{d_slug.replace('-', ' ')} {a_slug.replace('-', ' ')}"
            items.append((
                slug,
                title,
                "comparativas-de-herramientas",
                kw,
                d_bud,
                a_job,
                d_compat,
                "Acepta brocas estándar y puntas de impacto 1/4\" Hex según el tipo de mandril comparado",
                f"{d_names} en Amazon Estados Unidos",
                f"side-by-side comparison of two cordless tools ({d_names}) with lithium batteries and bit sets on a wooden workshop table",
            ))

    # =========================================================================
    # SILO 4: herramientas-por-presupuesto-y-trabajo (80 artículos)
    # =========================================================================
    silo4_flagships = [
        (
            "mejores-taladros-inalambricos-para-departamento-y-casa-amazon",
            "Los 9 Mejores Taladros Inalámbricos para Departamento y Casa en Amazon EE. UU. (Por Presupuesto y Trabajo)",
            "Desde US$49 (económicos) hasta US$169 (percutores Brushless para concreto)",
            "Comparativa completa para colgar cuadros, instalar soportes de TV en concreto, perforar drywall y armar muebles",
            "Baterías de litio incluidas en cada kit recomendado (DEWALT 20V MAX, Bosch 12V Max, Makita 18V LXT y BLACK+DECKER 20V)",
            "Mandriles sin llave de 3/8\" y 1/2\" compatibles con sets universales de brocas para concreto, madera, metal y puntas 1/4\" Hex",
            "DEWALT DCD777D1, Bosch PS31-2A, DEWALT DCD805D2, Makita XFD131 y BLACK+DECKER LDX120C",
            "curated lineup of top cordless drills for apartment DIY arranged on an oak workbench beside wall anchors and drill bits",
        ),
        (
            "mejores-destornilladores-electricos-inalambricos-muebles-amazon",
            "Los 7 Mejores Destornilladores Eléctricos en Amazon EE. UU. para Armar Muebles y Reparaciones en Casa",
            "Desde US$28 (4V USB) hasta US$99 (8V giroscópico y 12V con embrague fino)",
            "Armado sin esfuerzo de muebles planos (IKEA, escritorios, roperos de melamina), bisagras, juguetes y tapas eléctricas",
            "Carga directa por cable USB-C / Micro-USB o baterías compactas extraíbles de 8V / 12V con cargador incluido",
            "Encastre universal hexagonal de 1/4\" (6.35 mm): compatible con todas las puntas PH1, PH2, PZ2, Torx, Allen y extensiones flexibles",
            "DEWALT DCF680N2 8V Giroscópico, Bosch GO USB, Makita DF001DW y BLACK+DECKER BDCSFL20C",
            "compact cordless electric screwdrivers alongside flat-pack furniture hardware, wooden dowels and hex bits in a sunlit apartment",
        ),
    ]
    for s, t, bud, job, bat, bit, picks, subj in silo4_flagships:
        items.append((s, t, "herramientas-por-presupuesto-y-trabajo", s.replace("-", " "), bud, job, bat, bit, picks, subj))

    # 13 perfiles de trabajo × 6 rangos de presupuesto/categoría = 78 -> 2 + 78 = 80 artículos únicos
    job_profiles = [
        ("para-perforar-paredes-de-concreto-y-ladrillo", "para Perforar Paredes de Concreto y Ladrillo en Departamento", "Modo percutor (BPM) indispensable + mandril firme de 1/2\""),
        ("para-armar-muebles-de-melamina-e-ikea", "para Armar Muebles de Melamina, MDF y Tipo IKEA sin Dañarlos", "Embrague suave de baja torsión + diseño ligero y compacto"),
        ("para-colgar-televisores-repisas-y-cortinas", "para Instalar Soportes de TV, Cortinas Roller y Repisas Flotantes", "Precisión al taladrar y fuerza para apretar tirafondos en tarugos"),
        ("para-trabajar-en-drywall-y-tablaroca", "para Instalar y Fijar en Paredes de Drywall (Tablaroca)", "Control fino de velocidad para no romper la placa de yeso"),
        ("para-independizarse-y-primer-departamento", "para tu Primer Departamento o Mudanza (Imprescindibles)", "Equipos versátiles que cubren el 95 % de arreglos domésticos"),
        ("para-departamentos-alquilados-y-arreglos-rapidos", "para Departamentos Alquilados y Mantenimiento sin Obra", "Herramientas prácticas, limpias, compactas y fáciles de guardar"),
        ("para-carpinteria-casera-y-madera", "para Proyectos de Carpintería Doméstica en Madera y Pino", "Velocidad alta para brocas de madera y buen torque para tornillos"),
        ("para-cocinas-alacenas-y-espacios-estrechos", "para Gabinetes de Cocina, Clósets y Rincones Estrechos", "Cabezal ultracorto (< 16 cm) o adaptadores angulares de 90°"),
        ("para-manos-pequenas-mujeres-y-adultos-mayores", "Ligeros y Ergonómicos (Menos de 1.1 kg para Usar sin Cansancio)", "Bajo peso, empuñadura delgada antideslizante y baja vibración"),
        ("para-reparaciones-electricas-y-electronica-hogar", "para Tableros, Enchufes, Luminarias y Reparaciones Finas", "Torque controlado y luz LED integrada para zonas oscuras"),
        ("para-banos-porcelanato-y-accesorios", "para Instalar Toalleros y Espejos en Cerámica de Baño", "Giro suave sin vibración excesiva en modo sin percusión"),
        ("para-remodelacion-y-uso-intensivo-en-casa", "para Remodelación Completa y Uso Pesado de Fin de Semana", "Motores Brushless sin escobillas y baterías de 4.0Ah / 5.0Ah"),
        ("para-regalar-en-dia-del-padre-o-casa-nueva", "para Regalar (Sets Completos Listos para Usar al Abrir la Caja)", "Kits con maletín, batería, cargador y juego de puntas incluidos"),
    ]
    budget_tiers = [
        ("economicos-menos-de-60-dolares", "Económicos por Menos de US$60 en Amazon EE. UU.", "US$29 – US$59 (BLACK+DECKER 20V / 4V y sets básicos)"),
        ("calidad-precio-menos-de-100-dolares", "Mejor Calidad-Precio por Menos de US$100 en Amazon", "US$69 – US$99 (DEWALT 20V / Bosch 12V en oferta)"),
        ("gama-media-100-a-150-dolares", "Gama Media Recomendada (US$100 a US$150) en Amazon", "US$100 – US$150 (Kits Brushless DEWALT, Bosch y Makita)"),
        ("kits-completos-con-bateria-y-maletin", "en Kit Completo con Baterías, Cargador y Maletín", "US$79 – US$199 (Todo incluido sin compras sorpresa)"),
        ("combos-taladro-mas-destornillador-impacto", "en Combo Ahorro (Taladro + Destornillador/Impacto)", "US$99 – US$229 (2 herramientas compartiendo baterías)"),
        ("top-mejores-modelos-dewalt-bosch-makita", "Comparando DEWALT, Bosch, Makita y BLACK+DECKER", "Todos los presupuestos comparados cara a cara en Amazon EE. UU."),
    ]
    for j_slug, j_label, j_req in job_profiles:
        for b_slug, b_label, b_range in budget_tiers:
            slug = f"mejores-herramientas-{j_slug}-{b_slug}"
            title = f"Mejores Taladros, Destornilladores y Kits {j_label}: {b_label}"
            kw = f"mejores herramientas {j_slug.replace('-', ' ')} {b_slug.replace('-', ' ')}"
            items.append((
                slug,
                title,
                "herramientas-por-presupuesto-y-trabajo",
                kw,
                b_range,
                f"{j_label} ({j_req})",
                "Incluye detalle exacto de qué plataforma de batería y cargador usa cada modelo recomendado",
                "Incluye las brocas y puntas compatibles recomendadas en Amazon para este tipo de trabajo",
                "DEWALT 20V MAX, Bosch 12V/18V, Makita 18V LXT y BLACK+DECKER 20V PowerConnect",
                "editorial selection of cordless drills, electric screwdrivers and bit cases arranged on an apartment workbench",
            ))

    # =========================================================================
    # SILO 5: baterias-y-cargadores-compatibles (65 artículos)
    # =========================================================================
    silo5_flagship = (
        "tabla-compatibilidad-baterias-dewalt-20v-bosch-18v-makita-lxt",
        "Guía de Compra de Baterías y Cargadores Originales en Amazon EE. UU. (DEWALT, Bosch, Makita y BLACK+DECKER)",
        "baterias-y-cargadores-compatibles",
        "baterias y cargadores originales compatibles dewalt bosch makita black decker",
        "US$34 – US$149 en Amazon EE. UU. (Baterías individuales 2.0Ah/5.0Ah, packs dobles y Starter Kits con cargador)",
        "Reemplazar baterías agotadas o sumar autonomía para herramientas compradas en versión Bare Tool (sin batería)",
        "DEWALT 20V MAX (DCB203/DCB205/DCB115), DEWALT 12V (DCB122/DCB124), Bosch 12V/18V (GBA12V30/CORE18V), Makita 18V LXT (BL1840B/BL1850B/DC18RC) y BLACK+DECKER 20V (LBXR20)",
        "Accesorio complementario recomendado: cargador multivoltaje o USB-C PD (DEWALT DCB094K) y bolsa ignífuga/maletín organizador",
        "DEWALT DCB205-2, DEWALT DCB115, Makita BL1850B, Bosch GBA12V30 y BLACK+DECKER LBXR2020",
        "official lithium-ion slide battery packs and fast chargers arranged neatly on a wooden workshop bench with green charging LEDs",
    )
    items.append(silo5_flagship)

    # 16 modelos/líneas de batería y cargador × 4 ángulos de compra = 64 -> 1 + 64 = 65 artículos únicos
    battery_skus = [
        ("bateria-dewalt-dcb203-2-0ah-20v-max", "Batería DEWALT DCB203 (20V MAX Compacta 2.0Ah)", "US$44 – US$65", "Todos los taladros y atornilladores DEWALT 20V MAX, XR y ATOMIC (DCD771, DCD777, DCD794, DCD805, DCF885, DCF887)", "Cargadores DEWALT DCB107, DCB112, DCB115, DCB118 y DCB094K"),
        ("bateria-dewalt-dcb204-4-0ah-xr-20v", "Batería DEWALT DCB204 (20V MAX XR 4.0Ah Alta Autonomía)", "US$65 – US$89", "Taladros percutores DEWALT DCD796, DCD805, DCD996 y combos 20V MAX de uso prolongado", "Cargadores rápidos DEWALT DCB115 y DCB118"),
        ("bateria-dewalt-dcb205-5-0ah-xr-20v", "Batería DEWALT DCB205 (20V MAX XR 5.0Ah con Indicador LED)", "US$75 – US$129 (Simple o Pack x2)", "Toda la plataforma DEWALT 20V MAX cuando necesitas máxima potencia y horas de perforación", "Cargadores DEWALT DCB112, DCB115, DCB104 y USB-C DCB094K"),
        ("bateria-dewalt-powerstack-dcbp034-1-7ah", "Batería DEWALT PowerStack DCBP034 (20V MAX Celdas Planas)", "US$69 – US$99", "50 % más potencia y 25 % más compacta en cualquier taladro DEWALT 20V MAX, ATOMIC o XR", "Compatible con todos los cargadores DEWALT 20V MAX existentes"),
        ("bateria-dewalt-12v-max-dcb122-dcb124", "Baterías DEWALT DCB122 (2.0Ah) y DCB124 (3.0Ah) 12V MAX XTREME", "US$45 – US$75", "Exclusivas para herramientas DEWALT 12V MAX (DCD701, DCD706, DCD703, DCF801 — NO entran en 20V)", "Cargadores multivoltaje DEWALT DCB112 y DCB115 (cargan 12V y 20V)"),
        ("cargadores-dewalt-dcb112-dcb115-dcb094k", "Cargadores DEWALT DCB112, DCB115 Rápido y DCB094K USB-C 100W", "US$35 – US$99", "Cargan tanto baterías DEWALT 12V MAX como 20V MAX y FlexVolt 60V", "El modelo DCB094K carga por USB-C PD multivoltaje 100-240V mundial"),
        ("adaptador-dewalt-dca1820-18v-a-20v", "Adaptador Oficial DEWALT DCA1820 (Usar Baterías 20V en Taladros 18V Antiguos)", "US$39 – US$54", "Permite revivir taladros antiguos DEWALT 18V NiCad usando baterías modernas 20V MAX DCB203/DCB204", "Se retira el adaptador antes de poner la batería 20V en el cargador DCB115"),
        ("baterias-bosch-12v-max-bat414-gba12v30", "Baterías Bosch 12V Max BAT414 (2.0Ah) y GBA12V30 (3.0Ah)", "US$39 – US$69", "Compatibles con el 100 % de taladros y destornilladores Bosch 12V Max y 10.8V (PS31, PS32, PS21, PS41, Flexiclick)", "Cargadores Bosch GAL12V-20 y carga rápida GAL12V-40"),
        ("baterias-bosch-core18v-gba18v40-ampshare", "Baterías Bosch 18V CORE18V GBA18V40 (4.0Ah) y GBA18V80 (8.0Ah)", "US$69 – US$129", "Compatibles con todos los taladros Bosch 18V (GSR18V, GSB18V, Freak GDX18V) y alianza AMPShare", "Cargadores Bosch GAL18V-40 y GAL18V6-80"),
        ("cargadores-bosch-gal12v-20-y-gal18v-40", "Cargadores Originales Bosch GAL12V-20 (12V) y GAL18V-40 (18V)", "US$29 – US$59", "Recarga segura regulada por temperatura para baterías Bosch de 12V Max o 18V respectivamente", "Indicador luminoso de 80 % listo para trabajar y carga completa"),
        ("baterias-makita-bl1820b-2-0ah-18v-lxt", "Batería Makita BL1820B (18V LXT Compacta 2.0Ah)", "US$59 – US$79", "Reduce el peso de cualquier taladro Makita 18V LXT (XFD131, XFD11, XPH12, XDT131) para armar muebles", "Cargadores Makita DC18SD y carga rápida de 25 min en DC18RC"),
        ("baterias-makita-bl1840b-bl1850b-18v-lxt", "Baterías Makita BL1840B (4.0Ah) y BL1850B (5.0Ah) 18V LXT", "US$79 – US$139", "Máxima duración con chip Star Protection para taladros percutores Makita XPH12, XPH14 y combos XT269M", "Cargador rápido con ventilador Makita DC18RC (carga 5.0Ah en 45 min)"),
        ("baterias-makita-12v-cxt-bl1021b-bl1041b", "Baterías Makita 12V max CXT BL1021B (2.0Ah) y BL1041B (4.0Ah)", "US$49 – US$79", "Exclusivas para la línea deslizante Makita 12V max CXT (FD09, FD07, PH05, DT03 — no para 18V LXT)", "Cargador Makita DC10WD / DC10SB"),
        ("cargador-rapido-makita-dc18rc-y-doble-dc18rd", "Cargador Rápido Makita DC18RC y Cargador Doble DC18RD (18V LXT)", "US$45 – US$109", "Ventilación forzada que enfría las celdas Makita 18V LXT durante la carga y alarga su vida útil", "Puerto USB adicional en el modelo doble DC18RD"),
        ("baterias-black-decker-lbxr20-lb2x4020-20v", "Baterías BLACK+DECKER LBXR20 (1.5Ah), LBXR2020 (2.0Ah) y LB2X4020 (4.0Ah)", "US$29 – US$64", "Compatibles con todas las herramientas BLACK+DECKER 20V MAX PowerConnect (LDX120C, BCD704C1, MATRIX BDCDMT120C)", "Cargadores BLACK+DECKER LCS1620 y cargador rápido 2A BDCAC202B"),
        ("cargador-rapido-black-decker-bdcac202b-20v", "Cargador Rápido BLACK+DECKER BDCAC202B vs Cargador Estándar LCS1620", "US$24 – US$39", "Reduce el tiempo de espera de 4 horas a menos de 1 hora en baterías BLACK+DECKER 20V MAX", "Compatible con todas las baterías deslizantes de litio 20V MAX de la marca"),
    ]
    battery_angles = [
        ("modelos-compatibles-y-precio-amazon", "Con Qué Taladros es Compatible y Precio en Amazon EE. UU.", "close-up of a slide-on lithium tool battery next to a compatible cordless drill and charger"),
        ("autonomia-peso-y-tiempo-de-carga", "Cuántos Tornillos/Agujeros Rinde, Peso Real y Tiempo de Carga", "lithium battery pack docked on its fast charger with glowing green LED indicator on a wooden bench"),
        ("starter-kit-con-cargador-para-bare-tool", "¿Conviene Comprarla Suelta o en Starter Kit con Cargador?", "starter kit box with two lithium batteries and a charger next to a bare-tool cordless drill"),
        ("original-vs-generica-como-identificarla", "Por Qué Elegir la Original en Amazon y Cómo Evitar Imitaciones", "macro detail of authentic lithium battery contacts, latch button and LED fuel gauge"),
    ]
    for b_slug, b_name, bud, compat_tools, compat_chg in battery_skus:
        for a_slug, a_label, subj in battery_angles:
            slug = f"{b_slug}-{a_slug}"
            title = f"{b_name}: {a_label}"
            kw = f"{b_slug.replace('-', ' ')} {a_slug.replace('-', ' ')}"
            items.append((
                slug,
                title,
                "baterias-y-cargadores-compatibles",
                kw,
                bud,
                compat_tools,
                compat_chg,
                "Ideal para combinar con cualquier taladro o atornillador de la misma plataforma de voltaje",
                f"{b_name} en Amazon Estados Unidos",
                subj,
            ))

    # =========================================================================
    # SILO 6: brocas-puntas-y-accesorios-compatibles (65 artículos)
    # =========================================================================
    silo6_flagship = (
        "mejores-sets-de-brocas-y-puntas-dewalt-bosch-makita-amazon",
        "Los 10 Mejores Sets de Brocas y Puntas en Amazon EE. UU. Compatibles con DEWALT, Bosch, Makita y BLACK+DECKER",
        "brocas-puntas-y-accesorios-compatibles",
        "mejores sets de brocas y puntas dewalt bosch makita amazon",
        "US$12 – US$39 en Amazon EE. UU. (Estuches modulares ToughCase+, Custom Case e Impact XPS)",
        "Cubrir el 100 % de perforaciones (concreto, ladrillo, madera, melamina, metal, cerámica) y atornillado sin barrer cabezas",
        "Funcionan en cualquier herramienta inalámbrica de 4V, 8V, 12V, 18V o 20V MAX sin importar la marca de la batería",
        "Vástagos universales de 1/4\" Hex y cilíndricos compatibles con todos los mandriles de 3/8\" (10 mm) y 1/2\" (13 mm)",
        "DEWALT DWA2T40IR 40 pzs, Bosch ITBHQC201 40 pzs, Makita Impact XPS 60 pzs y Bosch Brocas Concreto/Multi",
        "open modular drill bit and impact driver bit cases arranged on an oak workbench beside cordless drills",
    )
    items.append(silo6_flagship)

    # 16 sets de brocas/puntas/accesorios × 4 enfoques de compra = 64 -> 1 + 64 = 65 artículos únicos
    accessory_skus = [
        ("dewalt-dwa2t40ir-set-40-puntas-flextorq", "DEWALT DWA2T40IR Set 40 Puntas Impact Ready FlexTorq", "US$19 – US$28", "Atornillado intensivo en madera, drywall, melamina y metal con zona de torsión antirotura", "Vástago 1/4\" Hex compatible con todos los taladros y atornilladores de impacto (DEWALT, Bosch, Makita, B+D)"),
        ("dewalt-dw1361-set-21-brocas-titanio", "DEWALT DW1361 Set 21 Brocas Pilot Point de Titanio", "US$22 – US$32", "Perforación limpia sin resbalar en metal, aluminio, plástico, drywall y madera", "Mandriles de 3/8\" y 1/2\" (brocas desde 1/16\" hasta 1/2\" con vástago antirresbalamiento)"),
        ("dewalt-dw5207-set-brocas-concreto-carburo", "DEWALT DW5207 / DW5225 Set de Brocas de Carburo para Concreto y Ladrillo", "US$14 – US$24", "Perforar paredes de concreto y mampostería para tarugos de 3/16\", 1/4\", 5/16\" y 3/8\"", "Vástago de 3 caras planas compatible con cualquier taladro percutor de 3/8\" o 1/2\""),
        ("dewalt-dwara120-adaptador-angulo-recto-90", "DEWALT DWARA120 Adaptador de Ángulo Recto 90° Impact Ready", "US$21 – US$29", "Atornillar y perforar dentro de cajones, esquinas de clósets y gabinetes estrechos de 3.8 cm", "Se inserta en cualquier mandril 3/8\", 1/2\" o portapuntas 1/4\" Hex y recibe puntas de 1/4\" Hex"),
        ("bosch-itbhqc201-set-40-puntas-impact-tough", "Bosch ITBHQC201 Set 40 Puntas Impact Tough en Custom Case", "US$19 – US$29", "Vida útil 10x superior frente a puntas estándar en atornilladores de impacto y taladros", "Vástago 1/4\" Hex universal compatible con Bosch, DEWALT, Makita y BLACK+DECKER"),
        ("bosch-cwcm10-set-brocas-multiconstruccion", "Bosch Multi-Construction / HEX-9 Set de Brocas Todo Terreno", "US$18 – US$32", "Perforar ladrillo, cerámica blanda, madera, aluminio y drywall con una sola broca sin cambiar", "Vástago hexagonal 1/4\" o cilíndrico compatible con mandriles 3/8\", 1/2\" y atornilladores"),
        ("bosch-bm5000-set-brocas-concreto-fast-spiral", "Bosch Fast Spiral Masonry Set de Brocas para Concreto y Ladrillo", "US$15 – US$25", "Extracción rápida de polvo en paredes de departamento usando modo percutor", "Mandriles de 3/8\" y 1/2\" (NOTA: para rotomartillos SDS-Plus elegir Bosch HCFC SDS-Plus)"),
        ("bosch-gt2000-set-brocas-ceramica-porcelanato", "Bosch GT2000 / Brocas Diamantadas para Cerámica, Vidrio y Porcelanato", "US$16 – US$29", "Instalar jaboneras, toalleros y mamparas en baño sin rajar el enchape (usar SIN percutor)", "Compatible con cualquier taladro de 3/8\" o 1/2\" a bajas RPM"),
        ("makita-e-01644-set-60-puntas-impact-xps", "Makita Impact XPS (E-01644 / E-01638) Set Profesional de Puntas y Dados", "US$26 – US$39", "Acero de alto carbono con anillos de torsión y magnetizador para no soltar ningún tornillo", "Vástago universal 1/4\" Hex compatible con todas las marcas de taladros e impacto"),
        ("makita-b-65399-set-dados-impacto-brocas", "Makita Set de Brocas Hex-Shank Titanio y Dados Magnéticos Nutsetter", "US$19 – US$34", "Cambiar en 1 segundo entre perforar el agujero guía y apretar pernos hexagonales de soporte TV", "Encastre directo 1/4\" Hex para atornilladores de impacto y taladros de 3/8\" o 1/2\""),
        ("black-decker-bda91109-set-109-piezas", "BLACK+DECKER BDA91109 Maletín de 109 Brocas y Puntas para Hogar", "US$22 – US$34", "El surtido económico más completo de brocas de madera, metal, mampostería y puntas variadas", "Compatible con BLACK+DECKER LDX120C y cualquier taladro con mandril de 3/8\" o 1/2\""),
        ("set-brocas-brad-point-forstner-madera-melamina", "Set de Brocas Tres Puntas (Brad Point) y Forstner 35 mm para Melamina y Muebles", "US$16 – US$32", "Agujeros limpios sin astillar melamina y cazoletas exactas de 35 mm para bisagras de cocina", "Vástago de 3/8\" o 1/4\" compatible con taladros de 3/8\" y 1/2\""),
        ("set-brocas-avellanadoras-countersink-madera", "Set de Brocas Avellanadoras (Countersink) con Tope de Profundidad", "US$14 – US$25", "Perforar guía y avellanar en un solo paso para que la cabeza del tornillo quede al ras del mueble", "Vástago rápido 1/4\" Hex compatible con todas las marcas"),
        ("kits-tarugos-anclajes-drywall-concreto-tapcon", "Kits Surtidos de Tarugos para Concreto, Mariposa Drywall y Tornillos Tapcon", "US$12 – US$26", "Fijar desde cuadros ligeros hasta muebles altos y soportes de TV de 65 pulgadas con seguridad", "Incluyen la broca exacta recomendada (3/16\", 1/4\" o 5/16\") según el anclaje"),
        ("detector-de-vigas-tuberias-y-cables-pared", "Detectores de Metales, Vigas (Stud Finder) y Cables Eléctricos Vivos en Amazon", "US$19 – US$49", "Escanea la pared del departamento antes de taladrar para no perforar tubos de agua ni cables", "Complemento indispensable para cualquier taladro DEWALT, Bosch, Makita o BLACK+DECKER"),
        ("nivel-laser-autonivelante-bosch-dewalt-colector", "Nivel Láser Autonivelante (Bosch / DEWALT) y Colector de Polvo para Taladrar", "US$39 – US$99", "Alinear cuadros, repisas y cortinas al milímetro y atrapar el polvo antes de que caiga al piso", "Universal para cualquier proyecto de instalación en departamento"),
    ]
    accessory_angles = [
        ("resena-piezas-y-mandriles-compatibles", "Qué Piezas Trae, Mandriles Compatibles y Precio en Amazon EE. UU.", "macro studio photograph of the drill bit and driver bit organizer set open on a wooden workbench"),
        ("para-que-materiales-y-taladros-sirve", "En Qué Materiales Rinde Mejor (Concreto, Melamina o Metal) y Con Qué Taladros Usarlo", "hands inserting a compatible bit from the organizer case into a cordless drill chuck"),
        ("durabilidad-vs-accesorios-genericos", "Prueba de Durabilidad Frente a Brocas y Puntas Económicas Genéricas", "close-up comparison of precision torsion screwdriver bits and titanium drill flutes"),
        ("guia-de-uso-velocidades-y-consejos", "A Qué Velocidad (RPM) Usarlo para No Quemar la Punta ni Barrer Tornillos", "action close-up of a drill bit cleanly boring into wood and masonry on a clean work surface"),
    ]
    for ac_slug, ac_name, bud, job, compat in accessory_skus:
        for a_slug, a_label, subj in accessory_angles:
            slug = f"{ac_slug}-{a_slug}"
            title = f"{ac_name}: {a_label}"
            kw = f"{ac_slug.replace('-', ' ')} {a_slug.replace('-', ' ')}"
            items.append((
                slug,
                title,
                "brocas-puntas-y-accesorios-compatibles",
                kw,
                bud,
                job,
                "Compatible sin restricciones de voltaje (funciona en equipos de 4V, 8V, 12V, 18V y 20V MAX)",
                compat,
                f"{ac_name} en Amazon Estados Unidos",
                subj,
            ))

    assert len(items) == 500, f"Expected 500 transactional items, got {len(items)}"
    return items


def generate_seo_1500():
    """
    Genera exactamente 1,500 artículos SEO informacionales únicos en 8 silos:
    200 + 200 + 200 + 190 + 190 + 180 + 170 + 170 = 1,500.
    Cero canibalización con los 500 transaccionales (sin títulos de 'mejores', 'reseña' ni duelos comerciales).
    Cada tupla:
    (slug, title, pillar, kw, focus_summary, visual_subject)
    """
    seo = []

    def populate_silo(pillar_slug, target_count, flagship_tuple, topics_list, contexts_list, default_subj):
        seo.append(flagship_tuple)
        added = 1
        for t_slug, t_label in topics_list:
            for c_slug, c_label in contexts_list:
                if added >= target_count:
                    break
                slug = f"{t_slug}-{c_slug}"
                title = f"{t_label} {c_label}"
                kw = f"{t_slug.replace('-', ' ')} {c_slug.replace('-', ' ')}"
                focus = f"guía técnica y práctica sobre {t_label.lower()} {c_label.lower()}, explicando compatibilidad real y pasos seguros"
                seo.append((slug, title, pillar_slug, kw, focus, default_subj))
                added += 1
            if added >= target_count:
                break
        assert added == target_count, f"Silo {pillar_slug}: expected {target_count}, got {added}"

    # SILO 7: guia-de-compatibilidad-baterias-y-voltaje (200)
    populate_silo(
        "guia-de-compatibilidad-baterias-y-voltaje",
        200,
        (
            "diferencia-real-entre-18v-y-20v-max-en-taladros-inalambricos",
            "¿Por Qué Dicen 20V MAX en EE. UU. y 18V en Otros Países? La Verdad Técnica sobre el Voltaje Nominal",
            "guia-de-compatibilidad-baterias-y-voltaje",
            "diferencia real entre 18v y 20v max en taladros inalambricos",
            "explicación eléctrica de las 5 celdas de litio 18650/21700 en serie (3.6V nominal = 18V en trabajo continuo y 20V pico sin carga) en DEWALT, Bosch, Makita y BLACK+DECKER",
            "macro view of lithium-ion tool battery packs showing voltage specifications and terminal rails on a workbench",
        ),
        [
            ("que-significan-los-amperios-hora-ah-1-5ah-2ah-4ah-5ah", "Qué Significan los Amperios-Hora (1.5Ah, 2.0Ah, 4.0Ah y 5.0Ah) en Duración y Peso"),
            ("como-usar-un-cargador-de-110v-comprado-en-amazon-usa-en-220v", "Cómo Usar sin Quemar un Cargador de 110V–120V Comprado en Amazon EE. UU. en Países de 220V"),
            ("cuantos-watts-necesita-el-transformador-220v-a-110v-para-cargador", "Cómo Calcular los Watts Exactos del Transformador 220V a 110V según los Amperios del Cargador"),
            ("por-que-una-bateria-de-12v-no-entra-en-un-taladro-de-20v", "Por Qué las Baterías de 12V No Encajan en Herramientas de 18V/20V Aunque Usen el Mismo Cargador"),
            ("que-significan-las-luces-led-parpadeantes-en-el-cargador", "Qué Significa Cada Código de Luz LED Roja o Amarilla en el Cargador de Baterías"),
            ("como-saber-si-una-bateria-de-litio-esta-bloqueada-por-temperatura", "Qué Es el Retardo por Batería Fría o Caliente (Hot/Cold Pack Delay) y Cómo Solucionarlo"),
            ("cuanto-tiempo-tarda-en-cargar-cada-bateria-segun-los-amperios", "Tabla de Tiempos Exactos de Carga según la Capacidad (Ah) y los Amperios del Cargador"),
            ("se-puede-dejar-la-bateria-del-taladro-conectada-al-cargador", "¿Se Daña la Batería de Litio si la Dejas Puesta en el Cargador o en el Taladro?"),
            ("a-que-porcentaje-guardar-las-baterias-si-no-usas-el-taladro", "Con Qué Nivel de Carga Guardar las Baterías de Litio durante Meses en tu Departamento"),
            ("por-que-no-usar-adaptadores-no-oficiales-entre-distintas-marcas", "Riesgos Electrónicos (BMS y Sobredescarga) de Usar Adaptadores de Batería entre Distintas Marcas"),
            ("diferencia-entre-celdas-cilindricas-18650-21700-y-celdas-pouch", "Diferencia entre Baterías de Celdas Cilíndricas (18650 / 21700) y Celdas Planas Pouch"),
            ("como-cargar-baterias-de-herramientas-por-puerto-usb-c-100w", "Cómo Funciona la Carga Bidireccional por USB-C PD (100V–240V Universal) sin Transformador"),
            ("influye-el-amperaje-ah-de-la-bateria-en-el-torque-maximo", "Cómo una Batería de 4.0Ah o 5.0Ah Entrega Más Corriente y Torque Bajo Carga que una de 1.5Ah"),
            ("como-medir-el-estado-de-salud-de-una-bateria-con-multimetro", "Cómo Comprobar el Voltaje Real de tu Batería de Taladro en Casa con un Multímetro"),
            ("que-hacer-cuando-una-bateria-descargada-al-cero-no-inicia-carga", "Por Qué el Cargador Rechaza una Batería Descargada por Debajo del Voltaje Mínimo y Qué Hacer"),
            ("diferencia-entre-voltaje-12v-y-20v-para-trabajos-domesticos", "Cuándo Te Basta el Voltaje de 12V y Cuándo Necesitas 18V/20V en un Departamento"),
            ("como-afecta-la-humedad-de-ciudades-costeras-a-los-contactos", "Cómo Proteger los Contactos Metálicos de tus Baterías frente a la Humedad y el Salitre"),
        ],
        [
            ("en-taladros-dewalt-20v-max-y-xr", "en Taladros y Atornilladores DEWALT 20V MAX y XR"),
            ("en-herramientas-dewalt-12v-max-xtreme", "en la Línea Compacta DEWALT 12V MAX XTREME"),
            ("en-taladros-bosch-12v-max-compactos", "en Taladros y Destornilladores Bosch 12V Max"),
            ("en-equipos-bosch-18v-core18v-ampshare", "en Equipos Bosch 18V CORE18V y Alianza AMPShare"),
            ("en-herramientas-makita-18v-lxt-star-protection", "en la Plataforma Makita 18V LXT Star Protection"),
            ("en-taladros-makita-12v-max-cxt", "en Taladros Deslizantes Makita 12V max CXT"),
            ("en-equipos-black-decker-20v-powerconnect", "en Herramientas BLACK+DECKER 20V MAX PowerConnect"),
            ("en-destornilladores-electricos-4v-y-8v-usb", "en Destornilladores Eléctricos de 4V y 8V"),
            ("cuando-compras-desde-peru-y-latinoamerica", "al Comprar en Amazon EE. UU. desde Perú y Latinoamérica"),
            ("para-uso-ocasional-en-departamento", "cuando Solo Usas el Taladro 1 o 2 Veces al Mes"),
            ("en-proyectos-intensivos-de-fin-de-semana", "durante Jornadas Largas de Armado y Perforación"),
            ("para-maximizar-los-anos-de-vida-util", "para Duplicar los Años de Vida Útil del Pack"),
        ],
        "close-up of a cordless drill lithium-ion battery pack, LED charge indicator and charger terminals on an oak workbench",
    )

    # SILO 8: guia-de-mandriles-brocas-y-puntas (200)
    populate_silo(
        "guia-de-mandriles-brocas-y-puntas",
        200,
        (
            "diferencia-mandril-3-8-vs-1-2-pulgada-y-1-4-hex-que-brocas-entran",
            "Mandril de 3/8\" (10 mm) vs 1/2\" (13 mm) vs 1/4\" Hex: Qué Brocas y Puntas Entran en Cada Uno",
            "guia-de-mandriles-brocas-y-puntas",
            "diferencia mandril 3 8 vs 1 2 pulgada y 1 4 hex que brocas entran",
            "guía mecánica exacta con medidas en pulgadas y milímetros para saber qué diámetros y tipos de vástago acepta el portabrocas de tu taladro o atornillador",
            "macro comparison of a 3/8-inch keyless chuck, a 1/2-inch metal chuck and a 1/4-inch hex quick-release collet with drill bits",
        ),
        [
            ("tabla-equivalencia-broca-tarugo-y-tornillo-pulgadas-milimetros", "Tabla Exacta de Equivalencias entre Broca, Tarugo y Tornillo (Pulgadas a Milímetros)"),
            ("diferencia-entre-punta-phillips-ph2-y-pozidriv-pz2", "Diferencia entre Punta Phillips (PH2) y Pozidriv (PZ2): Por Qué Se Barren las Bisagras de Cocina"),
            ("que-son-las-puntas-impact-rated-zona-de-torsion", "Qué Son las Puntas Impact Rated con Zona de Torsión y Por Qué las Normales Se Parten"),
            ("vastago-cilindrico-vs-tres-caras-vs-hexagonal-1-4", "Vástago Cilíndrico Redondo vs 3 Caras Planas vs Hexagonal 1/4\": Cuándo Usar Cada Uno"),
            ("puedo-usar-brocas-sds-plus-en-un-taladro-normal", "¿Entra una Broca SDS-Plus en un Taladro Normal de 1/2\"? Diferencias de Encastre"),
            ("como-reconocer-a-simple-vista-broca-madera-metal-y-concreto", "Cómo Distinguir por la Punta una Broca para Concreto, una para Madera y una para Metal"),
            ("brocas-oxido-negro-vs-titanio-vs-cobalto-m35", "Brocas de Óxido Negro vs Recubiertas de Titanio vs Cobalto M35: Cuál Elegir según el Material"),
            ("cuando-usar-puntas-ph1-ph2-ph3-y-torx-t15-t20-t25", "Guía de Tamaños de Puntas (PH1, PH2, PH3, T15, T20, T25 y Cuadradas SQ2) sin Dañar Tornillos"),
            ("que-es-un-portapuntas-magnetico-con-anillo-de-retencion", "Cómo Funciona un Portapuntas Magnético con Camisa Deslizante para Atornillar con Una Sola Mano"),
            ("como-apretar-correctamente-un-mandril-sin-llave-con-trinquete", "Cómo Ajustar y Bloquear un Mandril sin Llave (Keyless Chuck) para que la Broca No Patine"),
            ("uso-de-dados-magneticos-nut-drivers-1-4-5-16-y-3-8", "Cómo Usar Dados Magnéticos (Nut Setters) en tu Taladro para Apretar Pernos y Tirafondos"),
            ("extensiones-flexibles-y-adaptadores-de-90-grados-para-esquinas", "Cómo Usar Extensiones Flexibles y Cabezales de 90° donde No Entra el Cuerpo del Taladro"),
            ("brocas-de-paleta-vs-forstner-vs-sierra-copa-hole-saw", "Broca de Paleta vs Broca Forstner vs Sierra Copa: Cómo Hacer Agujeros Grandes para Pasacables"),
            ("como-usar-topes-de-profundidad-o-cinta-en-la-broca", "Cómo Medir y Limitar la Profundidad Exacta de Perforación para No Atravesar la Pared o Melamina"),
            ("adaptador-para-usar-vasos-de-1-4-3-8-y-1-2-en-taladro", "Cómo Funcionan los Adaptadores de Hexágono 1/4\" a Cuadrado de 1/4\", 3/8\" y 1/2\""),
            ("por-que-patina-la-broca-en-el-mandril-y-como-evitarlo", "Por Qué Se Afloja o Resbala la Broca dentro del Portabrocas al Perforar"),
            ("largo-de-puntas-1-pulgada-con-portapuntas-vs-2-y-3-pulgadas", "Cuándo Usar Puntas Cortas de 1\" con Portapuntas frente a Puntas Directas de 2\" y 3.5\""),
        ],
        [
            ("en-taladros-compactos-de-3-8-pulgadas", "en Taladros Compactos con Mandril de 3/8\" (10 mm)"),
            ("en-taladros-percutores-de-1-2-pulgada", "en Taladros y Percutores con Mandril de 1/2\" (13 mm)"),
            ("en-atornilladores-de-impacto-1-4-hex", "en Atornilladores de Impacto de 1/4\" Hexagonal"),
            ("en-destornilladores-electricos-de-precision", "en Destornilladores Eléctricos de 4V y 8V"),
            ("en-modelos-dewalt-20v-y-12v", "en Equipos DEWALT (DCD771, DCD777, DCD805 y DCF887)"),
            ("en-modelos-bosch-12v-y-flexiclick", "en Taladros Bosch 12V Max, 18V y Sistema Flexiclick"),
            ("en-modelos-makita-18v-lxt-y-cxt", "en Taladros y Atornilladores Makita 18V LXT y 12V CXT"),
            ("en-taladros-black-decker-20v-y-matrix", "en Equipos BLACK+DECKER 20V MAX y Cabezales MATRIX"),
            ("para-tarugos-de-6mm-8mm-y-10mm", "al Instalar Tarugos de 6 mm (1/4\"), 8 mm (5/16\") y 10 mm (3/8\")"),
            ("al-perforar-acero-inoxidable-y-aluminio", "al Perforar Perfiles de Aluminio, Fierro y Acero"),
            ("al-armar-muebles-y-bisagras-europeas", "al Instalar Tornillos de Muebles, Melamina y Bisagras"),
            ("para-arreglos-rapidos-en-departamento", "en tu Caja Básica de Herramientas para Departamento"),
        ],
        "macro studio shot of drill chucks, hex bit holders, carbide masonry bits and torsion screwdriver bits on birch wood",
    )

    # SILO 9: perforar-paredes-concreto-drywall-y-ceramica (200)
    populate_silo(
        "perforar-paredes-concreto-drywall-y-ceramica",
        200,
        (
            "como-saber-si-la-pared-de-tu-departamento-es-concreto-ladrillo-o-drywall",
            "Cómo Saber si la Pared de tu Departamento es Concreto Armado, Ladrillo Hueco o Drywall Antes de Taladrar",
            "perforar-paredes-concreto-drywall-y-ceramica",
            "como saber si la pared de tu departamento es concreto ladrillo o drywall",
            "método infalible por sonido al golpear, color del polvo inicial (gris cemento, rojo arcilla o blanco yeso) y resistencia de avance para elegir el modo del taladro y el tarugo correcto",
            "hands holding a cordless hammer drill and testing a modern apartment wall next to masonry bits and wall anchors",
        ),
        [
            ("cuando-activar-y-cuando-apagar-el-modo-percutor-martillo", "Cuándo Activar el Modo Percutor (Martillo) y Cuándo Apagarlo para No Destrozar la Pared"),
            ("como-perforar-ladrillo-hueco-pandereta-sin-romper-tabiques", "Cómo Perforar Ladrillo Hueco (Pandereta) sin Romper las Celdas Internas ni que el Tarugo Gire Loco"),
            ("como-perforar-placa-de-concreto-armado-duro-en-edificio", "Técnica para Perforar Placas y Columnas de Concreto Duro en Edificios de Departamentos"),
            ("que-hacer-si-la-broca-choca-con-una-varilla-de-fierro", "Qué Hacer si al Taladrar Concreto la Broca Toca Fierro de Construcción o Malla Metálica"),
            ("como-perforar-ceramica-mayolica-y-porcelanato-sin-rajar", "Paso a Paso para Perforar Cerámica, Mayólica y Porcelanato de Baño o Cocina sin Rajarlo"),
            ("que-tarugo-elegir-para-drywall-segun-el-peso-en-kilos", "Qué Anclaje o Tarugo Usar en Drywall según el Peso (Autoperforante, Mariposa, Molly o Toggle Bolt)"),
            ("como-encontrar-parantes-metalicos-o-vigas-en-pared-drywall", "Cómo Ubicar los Parantes Metálicos (Studs) en una Pared de Drywall para Fijar Cargas Pesadas"),
            ("como-detectar-tuberias-de-agua-y-cables-electricos-ocultos", "Zonas Prohibidas y Cómo Detectar Cables Eléctricos y Tuberías de Agua Antes de Perforar"),
            ("truco-del-sobre-o-colector-para-taladrar-sin-ensuciar-piso", "5 Formas de Taladrar Paredes Dentro de tu Departamento sin Dejar Polvo en el Piso ni Muebles"),
            ("por-que-el-tarugo-gira-dentro-del-agujero-y-como-fijarlo", "Por Qué el Tarugo Queda Flojo o Gira al Meter el Tornillo y Cómo Arreglar un Agujero Agrandado"),
            ("a-que-velocidad-rpm-y-presion-perforar-cada-tipo-de-muro", "Cuánta Presión Ejercer y en Qué Velocidad (1 o 2) Poner el Taladro según el Tipo de Pared"),
            ("como-enfriar-la-broca-para-no-quemar-la-punta-de-carburo", "Cómo Evitar Sobrecalentar y Destemplar la Punta de Carburo o Diamante al Hacer Varios Agujeros"),
            ("diferencia-entre-tornillos-tapcon-azules-y-tarugos-plasticos", "Tornillos Directos para Concreto (Tapcon) vs Tarugos de Nylon de Expansión: Cuál Aguanta Más"),
            ("horarios-y-consejos-para-reducir-ruido-al-taladrar-edificio", "Cómo Reducir el Tiempo y Ruido de Vibración al Perforar en un Edificio con Vecinos"),
            ("como-iniciar-el-agujero-exacto-sin-que-la-broca-resbale", "Cómo Marcar con Punzón o Cinta Adhesiva para que la Broca No Patine ni Raye la Pintura"),
            ("cuantos-kilos-resiste-un-tarugo-de-6mm-8mm-y-10mm-en-pared", "Tabla de Carga Real en Kilos de Tarugos de 6 mm, 8 mm y 10 mm en Concreto vs Ladrillo"),
            ("como-sacar-un-tarugo-hundido-o-resanar-un-agujero-en-pared", "Cómo Extraer limpiamente un Tarugo Viejo y Resanar la Pared con Masilla Antes de Pintar"),
        ],
        [
            ("al-colgar-un-televisor-de-55-o-65-pulgadas", "al Instalar un Soporte de TV de 55\" a 75\""),
            ("al-instalar-repisas-flotantes-con-peso", "al Colocar Repisas Flotantes para Libros o Cocina"),
            ("en-banos-y-cocinas-enchapadas", "en Paredes de Baño y Cocina con Azulejos"),
            ("en-departamentos-modernos-con-tabiques-mixtos", "en Departamentos Nuevos (Muros de Concreto + Tabiques Drywall)"),
            ("usando-un-taladro-percutor-de-18v-o-20v", "usando un Taladro Percutor Inalámbrico de 18V / 20V MAX"),
            ("cuando-solo-tienes-un-taladro-sin-percutor", "si Tienes un Taladro Compacto sin Modo Percutor"),
            ("con-brocas-multiconstruccion-y-carburo", "utilizando Brocas de Carburo o Multi-Construction"),
            ("para-colgar-cuadros-espejos-y-relojes", "para Colgar Espejos Grandes y Cuadros Pesados"),
            ("al-fijar-cortinas-roller-blackout-en-techo", "al Taladrar Dinteles de Ventana o Techo para Cortinas"),
            ("al-anclar-muebles-altos-contra-sismos", "al Asegurar Estanterías y Cómodas a la Pared por Seguridad"),
            ("en-paredes-antiguas-de-quincha-o-tarrajeo-grueso", "en Paredes con Tarrajeo Grueso o Revoque Antiguo"),
            ("paso-a-paso-para-principiantes-en-casa", "Explicado Paso a Paso si Es tu Primera Vez Taladrando"),
        ],
        "hands drilling cleanly into an apartment wall using a cordless hammer drill, level and dust-catching guide",
    )

    # SILO 10: armado-de-muebles-madera-y-melamina (190)
    populate_silo(
        "armado-de-muebles-madera-y-melamina",
        190,
        (
            "en-que-numero-poner-el-torque-del-taladro-para-melamina-y-muebles",
            "¿En Qué Número Poner el Embrague de Torque del Taladro (1 al 15) para No Barrer Tornillos en Melamina?",
            "armado-de-muebles-madera-y-melamina",
            "en que numero poner el torque del taladro para melamina y muebles",
            "tabla práctica de posiciones del anillo numerado de embrague en DEWALT, Bosch, Makita y BLACK+DECKER para melamina de 15/18 mm, MDF, aglomerado y madera maciza",
            "close-up of a hand adjusting the numbered torque clutch ring to position 3 on a cordless drill while assembling white melamine furniture",
        ),
        [
            ("como-armar-muebles-en-caja-sin-estrellar-el-aglomerado", "Cómo Usar un Destornillador Eléctrico o Taladro en Muebles en Caja sin Romper el Tablero"),
            ("como-hacer-perforacion-guia-pilot-hole-en-melamina-18mm", "Qué Broca Guía (en mm) Usar para Tornillos Spax o Autorroscantes de 3.5 mm y 4.0 mm en Melamina"),
            ("como-instalar-y-regular-bisagras-cazoleta-de-35mm", "Cómo Perforar con Broca Forstner de 35 mm y Regular los 3 Tornillos de las Bisagras de Cocina"),
            ("como-instalar-correderas-telescopicas-de-cajones-a-nivel", "Paso a Paso para Atornillar Correderas Telescópicas de Cajones sin que Rocen ni Queden Chuecas"),
            ("por-que-no-usar-atornillador-de-impacto-en-bisagras-finas", "Cuándo Evitar el Atornillador de Impacto en Melamina Delgada y Cuándo Usar Modo Precision Drive"),
            ("como-avellanar-tornillos-para-que-queden-al-ras-y-poner-stickers", "Cómo Avellanar Melamina y Madera para Ocultar la Cabeza del Tornillo bajo Tapas Adhesivas"),
            ("como-sacar-un-tornillo-con-la-cabeza-barrida-o-redondeada", "6 Trucos Reales para Extraer un Tornillo Barrido (Liga de Goma, Extractor Invertido y Ranura)"),
            ("como-reparar-una-bisagra-arrancada-de-puerta-de-melamina", "Cómo Reparar el Agujero Desgarrado de una Bisagra de Cocina o Clóset (Tarugo de Madera / Placa)"),
            ("como-perforar-melamina-sin-astillar-la-cara-decorativa", "Cómo Hacer Agujeros Pasantes o Pasacables en Escritorios de Melamina sin Astillar el Laminado"),
            ("uso-de-prensas-esquineras-de-90-grados-al-unir-tableros", "Cómo Sujetar Dos Tableros a 90° exactos para Atornillar Solo en Casa sin Ayuda"),
            ("como-fijar-el-fondo-de-mdf-a-escuadra-en-roperos-y-libreros", "Por Qué el Fondo Delgado del Ropero Es lo que Le Da Firmeza y Cómo Fijarlo a Escuadra"),
            ("diferencia-entre-tornillos-para-melamina-madera-y-drywall", "Por Qué No Debes Usar Tornillos Negros de Drywall para Armar Estructuras de Madera Pesadas"),
            ("como-ajustar-excéntricas-minifix-y-tarugos-de-madera", "Cómo Apretar Conectores Minifix (Cam Lock) sin Partir la Pieza de Zamak con el Destornillador"),
            ("como-cortar-o-rebajar-un-liston-de-madera-en-departamento", "Guía Básica para Cortar, Lijar y Atornillar Listones de Pino Seco Cepillado en tu Balcón"),
            ("velocidad-1-vs-velocidad-2-al-atornillar-vs-perforar-madera", "Por Qué Siempre Debes Poner Velocidad 1 para Atornillar Muebles y Velocidad 2 para Brocas Finas"),
            ("como-atornillar-en-el-interior-estrecho-de-un-cajon-armado", "Cómo Atornillar Tiradores y Escuadras Dentro de Espacios de Menos de 12 cm de Ancho"),
        ],
        [
            ("con-un-taladro-compacto-de-12v", "usando un Taladro Compacto de 12V (Bosch / DEWALT / Makita)"),
            ("con-un-destornillador-electrico-de-4v-u-8v", "usando un Destornillador Eléctrico de 4V u 8V"),
            ("con-un-taladro-de-20v-max-en-torque-bajo", "si Usas un Taladro Potente de 18V / 20V MAX"),
            ("en-escritorios-de-home-office-y-estanterias", "al Armar Escritorios de Estudio y Libreros"),
            ("en-roperos-closets-y-comodas-de-dormitorio", "al Montar Clósets, Cómodas y Veladores"),
            ("en-alacenas-y-muebles-bajos-de-cocina", "en Gabinetes y Muebles de Cocina"),
            ("en-camas-tarimas-y-cabeceras-de-madera", "al Armar o Reforzar una Cama que Rechina"),
            ("en-repisas-y-organizadores-de-bano", "en Muebles Resistentes a la Humedad"),
            ("usando-puntas-pz2-ph2-y-allen-hexagonales", "eligiendo la Punta Exacta (PH2, PZ2 o Hexagonal Allen 4 mm)"),
            ("sin-experiencia-previa-paso-a-paso", "Paso a Paso Aunque Sea tu Primer Mueble Armado en Casa"),
            ("para-desarmar-y-volver-a-armar-en-mudanza", "al Desarmar y Reensamblar Muebles en una Mudanza"),
            ("cuidando-las-munecas-y-el-acabado-del-tablero", "con Acabado Limpio de Carpintero Profesional"),
        ],
        "sunlit apartment floor scene assembling a wooden and melamine desk with a compact cordless screwdriver, hex bits and corner clamp",
    )

    # SILO 11: instalaciones-y-mejoras-en-departamento (190)
    populate_silo(
        "instalaciones-y-mejoras-en-departamento",
        190,
        (
            "como-instalar-un-soporte-de-tv-en-pared-que-taladro-y-broca-usar",
            "Cómo Instalar un Soporte de TV en Pared (Fijo o Articulado): Qué Taladro, Broca, Dado y Tarugo Necesitas",
            "instalaciones-y-mejoras-en-departamento",
            "como instalar un soporte de tv en pared que taladro y broca usar",
            "guía completa de altura ergonómica, nivelación, diámetro de broca (3/8\" o 5/16\"), uso de dado hexagonal en el taladro y diferencia entre muro de concreto y tabique de drywall",
            "modern apartment living room showing a mounted TV wall bracket, spirit level, cordless hammer drill and socket driver on a console",
        ),
        [
            ("como-instalar-cortinas-roller-blackout-y-duo-en-ventana", "Cómo Instalar Cortinas Roller (Blackout y Dúo) en Techo o Pared de Concreto y Drywall"),
            ("como-colocar-barras-de-cortina-tradicionales-sin-que-se-caigan", "Cómo Fijar Soportes de Barras de Cortina Pesadas cerca del Borde del Dintel sin Despostillar"),
            ("como-instalar-repisas-flotantes-invisibles-perfectamente-rectas", "Cómo Instalar Repisas Flotantes de Soporte Oculto para que No Queden Inclinadas hacia Adelante"),
            ("como-colgar-espejos-grandes-y-pesados-de-sala-o-bano", "Cómo Colgar un Espejo Grande y Pesado con Anclajes Seguros y Nivelación Exacta"),
            ("como-instalar-un-soporte-de-bicicleta-vertical-u-horizontal", "Cómo Anclar un Rack de Bicicleta en la Pared del Departamento o Cochera"),
            ("como-instalar-toalleros-portarrollos-y-repisas-de-ducha", "Cómo Instalar Accesorios de Baño sobre Porcelanato o Mayólica sin Tocar Tuberías"),
            ("como-instalar-una-cerradura-digital-inteligente-en-puerta", "Qué Brocas y Sierras Copa Necesitas para Instalar una Cerradura Digital en la Puerta Principal"),
            ("como-colocar-un-tendedero-de-ropa-plegable-o-de-techo", "Cómo Instalar un Tendedero de Ropa Retráctil o de Techo en la Lavandería del Depa"),
            ("como-instalar-lamparas-plafones-led-y-ventiladores-de-techo", "Cómo Fijar Plafones LED, Rieles de Luz y Ventiladores de Techo con Seguridad Eléctrica"),
            ("como-fijar-barras-de-closet-y-organizadores-modulares", "Cómo Instalar Tubos Colgadores y Repisas Adicionales Dentro del Clóset"),
            ("como-instalar-un-soporte-de-monitor-o-pasa-cables-escritorio", "Cómo Perforar un Pasacables de 60 mm e Instalar Brazos de Monitor en tu Escritorio"),
            ("como-colgar-una-galeria-de-cuadros-alineados-con-nivel-laser", "Cómo Alinear una Galería de Varios Cuadros en el Pasillo o Sala sin Hacer Agujeros de Más"),
            ("como-instalar-topes-de-puerta-magneticos-en-piso-o-zocalo", "Cómo Atornillar o Perforar Topes de Puerta para que las Manijas No Golpeen el Drywall"),
            ("como-instalar-estantes-especieros-y-portacopas-bajo-alacena", "Cómo Fijar Accesorios Bajo los Gabinetes de Cocina sin Atravesar el Tablero Superior"),
            ("como-instalar-mallas-o-seguros-de-ventanas-para-ninos-mascotas", "Herramientas y Brocas para Asegurar Ventanas y Balcones en Pisos Altos"),
            ("checklist-para-dejar-impecable-un-departamento-al-mudarte", "Cómo Retirar Soportes, Resanar Agujeros y Dejar las Paredes Listas al Entregar un Depa Alquilado"),
        ],
        [
            ("en-pared-de-concreto-con-taladro-percutor", "en Pared de Concreto usando Taladro Percutor"),
            ("en-pared-de-drywall-con-anclajes-mariposa-molly", "en Pared de Drywall usando Tarugos Metálicos o Toggle"),
            ("en-ladrillo-hueco-sin-aflojar-el-soporte", "en Muros de Ladrillo Hueco o Pandereta"),
            ("con-herramientas-dewalt-20v-max", "con Taladro y Puntas DEWALT 20V MAX"),
            ("con-herramientas-bosch-12v-y-18v", "con Taladro Bosch y Nivel Láser"),
            ("con-herramientas-makita-18v-lxt", "con Equipos Inalámbricos Makita 18V LXT"),
            ("con-un-kit-basico-black-decker-20v", "usando un Kit Doméstico BLACK+DECKER 20V"),
            ("midiendo-altura-y-distancia-paso-a-paso", "con Medidas Estándar de Altura y Ergonomía"),
            ("sin-ayuda-de-otra-persona-en-casa", "Trucos para Hacer la Instalación Tú Solo en 20 Minutos"),
            ("evitando-los-errores-mas-comunes-de-principiantes", "Evitando los 5 Errores Típicos que Dañan la Pared"),
            ("eligiendo-los-tornillos-y-brocas-exactas", "Lista Exacta de Brocas, Puntas y Tornillos Necesarios"),
            ("sin-ensuciar-la-sala-ni-el-dormitorio", "Manteniendo Limpio tu Departamento Durante el Trabajo"),
        ],
        "bright modern apartment interior DIY project installing roller blinds and floating wooden shelves with a cordless drill and laser level",
    )

    # SILO 12: motores-torque-embrague-y-ergonomia (180)
    populate_silo(
        "motores-torque-embrague-y-ergonomia",
        180,
        (
            "motor-brushless-sin-escobillas-vs-con-carbones-vale-la-pena",
            "Motor Brushless (Sin Escobillas) vs Motor con Carbones: ¿Cuándo Vale la Pena Pagar la Diferencia?",
            "motores-torque-embrague-y-ergonomia",
            "motor brushless sin escobillas vs con carbones en taladros",
            "comparación real de eficiencia de batería (+30 % a +50 % de autonomía), menor calentamiento, cabezal más corto y cero cambio de escobillas frente al ahorro inicial de un motor tradicional",
            "cutaway-style clean studio close-up of a modern brushless cordless drill housing, vents and gear selector on a dark slate workbench",
        ),
        [
            ("cuando-usar-velocidad-1-y-cuando-usar-velocidad-2-en-taladro", "Para Qué Sirve el Botón 1 y 2 Arriba del Taladro (Torque Alto vs Velocidad Alta RPM)"),
            ("como-entender-el-torque-en-nm-in-lbs-y-uwo-al-comparar", "Cómo Convertir y Comparar Torque en Newton-Metro (Nm), Libras-Pulgada (in-lbs) y UWO de DEWALT"),
            ("diferencia-entre-torque-duro-hard-torque-y-torque-blando", "Torque Duro vs Torque Blando en las Fichas Técnicas: El Dato que Explica la Fuerza Real"),
            ("como-funciona-el-embrague-mecanico-y-el-simbolo-de-broca", "Por Qué el Taladro Hace 'Clic-Clic-Clic' al Llegar al Tope y Cuándo Poner el Símbolo de Broca"),
            ("como-funciona-el-martilleo-tangencial-del-atornillador-impacto", "Por Qué un Atornillador de Impacto No Te Tuerce la Muñeca al Meter Tornillos Gruesos"),
            ("diferencia-entre-taladro-percutor-y-rotomartillo-neumatico", "Diferencia Mecánica entre Percutor de Engranajes (BPM) y Rotomartillo Electroneumático (Joules)"),
            ("que-es-el-freno-electronico-del-motor-al-soltar-el-gatillo", "Cómo el Freno Electrónico Detiene el Giro al Instante y Evita Hundir de Más el Tornillo"),
            ("como-funciona-el-gatillo-de-velocidad-variable-progresiva", "Cómo Dominar el Gatillo de Velocidad Variable para Iniciar Tornillos a 50 RPM"),
            ("control-de-retroceso-kickback-control-anti-giro-brusco", "Qué Es el Sensor Anti-Kickback cuando una Broca Grande Se Traba en Madera o Metal"),
            ("importancia-del-largo-del-cabezal-head-length-en-pulgadas", "Por Qué 3 Centímetros Menos en el Cabezal del Taladro Cambian Todo Dentro de un Mueble"),
            ("ubicacion-de-la-luz-led-en-la-base-vs-bajo-el-mandril", "Por Qué la Luz LED en la Base del Mango Ilumina Mejor sin Sombra del Mandril"),
            ("peso-con-bateria-puesta-equilibrio-y-fatiga-en-trabajos-altos", "Cuánto Pesa Realmente un Taladro con Batería de 2.0Ah vs 5.0Ah al Trabajar sobre los Hombros"),
            ("control-giroscopico-en-destornilladores-electricos-como-se-usa", "Cómo Funciona el Sensor Giroscópico que Regula Velocidad y Giro al Mover la Muñeca"),
            ("ruido-en-decibelios-db-taladro-normal-vs-impacto-vs-percutor", "Cuántos Decibelios (dB) Produce un Taladro Atornillador frente a un Impacto o Percutor"),
            ("mandril-de-plastico-reforzado-vs-mandril-100-metalico", "Cuándo Basta un Portabrocas de Polímero y Cuándo Exigir Mandril Metálico con Mordazas de Carburo"),
        ],
        [
            ("en-la-linea-dewalt-20v-max-atomic-y-xr", "en las Series DEWALT Estándar, ATOMIC y XR"),
            ("en-herramientas-bosch-12v-max-y-18v", "en Equipos Bosch 12V Max y 18V Brushless"),
            ("en-la-familia-makita-18v-lxt-y-subcompact", "en Taladros Makita 18V LXT y Sub-Compact"),
            ("en-equipos-domesticos-black-decker-20v", "en la Gama Doméstica BLACK+DECKER 20V MAX"),
            ("para-bricolaje-ocasional-en-departamento", "si Solo Haces Arreglos Caseros en tu Departamento"),
            ("para-armado-frecuente-de-muebles-y-cocinas", "si Armas Muebles y Carpintería con Frecuencia"),
            ("al-perforar-mamposteria-y-concreto", "cuando Necesitas Perforar Paredes Duras"),
            ("comparando-equipos-de-12v-frente-a-20v", "al Elegir entre Formato de 12V y Formato de 18V/20V"),
            ("para-cuidar-tus-articulaciones-y-munecas", "Priorizando la Ergonomía y el Bajo Peso"),
            ("antes-de-invertir-en-amazon-estados-unidos", "Cómo Leer la Ficha de Amazon EE. UU. sin Confundirte"),
            ("en-atornilladores-de-3-velocidades-y-modo-precision", "en Modelos con Selector Electrónico de 3 Velocidades"),
            ("explicado-con-ejemplos-reales-de-casa", "Explicado de Forma Sencilla con Ejemplos del Hogar"),
        ],
        "technical studio close-up of a cordless brushless drill's torque collar, 2-speed switch and metal chuck on a clean bench",
    )

    # SILO 13: mantenimiento-seguridad-y-solucion-de-fallas (170)
    populate_silo(
        "mantenimiento-seguridad-y-solucion-de-fallas",
        170,
        (
            "como-destrabar-un-mandril-de-taladro-atascado-sin-romperlo",
            "Cómo Destrabar el Mandril Atascado de tu Taladro sin Dañar las Mordazas ni el Engranaje",
            "mantenimiento-seguridad-y-solucion-de-fallas",
            "como destrabar un mandril de taladro atascado sin romperlo",
            "procedimiento seguro paso a paso (retirar batería antes de todo, desactivar bloqueo del husillo, técnica de golpecito controlado y limpieza de óxido/polvo interno) para DEWALT, Bosch, Makita y BLACK+DECKER",
            "close-up of gloved hands carefully freeing and cleaning a keyless metal drill chuck on a rubberized workbench mat",
        ),
        [
            ("por-que-salen-chispas-dentro-del-taladro-es-normal-o-falla", "Por Qué Se Ven Chispas Azules en las Rejillas del Taladro (Carbones Normales vs Desgaste)"),
            ("por-que-el-taladro-se-detiene-a-mitad-del-tornillo-o-agujero", "Por Qué tu Taladro Inalámbrico Se Corta de Golpe Bajo Esfuerzo (Protección de Sobrecarga vs Batería)"),
            ("como-limpiar-el-polvo-de-concreto-y-yeso-despues-de-taladrar", "Cómo Limpiar Polvo Fino de Concreto y Drywall del Mandril, Gatillo y Ventilación"),
            ("por-que-la-broca-gira-chueca-o-descentrada-wobble-solucion", "Cómo Saber si Está Doblada la Broca o Desalineadas las 3 Mordazas del Portabrocas"),
            ("que-hacer-cuando-el-gatillo-falla-o-la-luz-solo-parpadea", "Diagnóstico Cuando Presionas el Gatillo, Prende el LED pero el Motor No Gira"),
            ("por-que-huele-a-quemado-el-motor-del-taladro-y-como-enfriarlo", "Qué Hacer al Instante si el Taladro Se Calienta Demasiado o Huele a Barniz Caliente"),
            ("como-lubricar-y-eliminar-oxido-superficial-en-mandril-y-brocas", "Con Qué Producto Limpiar las Mordazas del Mandril y Proteger tus Brocas del Óxido"),
            ("como-sacar-una-broca-partida-dentro-del-mandril-o-la-pared", "Cómo Extraer con Seguridad un Trozo de Broca Quebrada en el Portabrocas o en Madera"),
            ("equipo-basico-de-seguridad-para-taladrar-en-departamento", "Gafas de Policarbonato, Mascarilla y Reglas de Seguridad (Cabello, Guantes y Ropa) al Taladrar"),
            ("por-que-no-usar-guantes-holgados-de-tela-con-herramientas-rotativas", "El Peligro Oculto de los Guantes Sueltos cerca de Brocas en Giro y Qué Guantes Sí Usar"),
            ("como-evitar-que-el-taladro-te-gire-la-muneca-al-trabajar", "Postura de Brazos y Agarre a Dos Manos para Evitar Torceduras cuando la Broca Se Engancha"),
            ("cuando-cambiar-los-carbones-escobillas-en-un-taladro-brushed", "Señales de que los Carbones de tu Taladro Están Gastados y Cómo Reemplazarlos"),
            ("como-limpiar-los-rieles-y-terminales-entre-taladro-y-bateria", "Cómo Limpiar el Polvo Acumulado en los Terminales de la Batería sin Usar Agua ni Solventes"),
            ("que-hacer-si-el-selector-de-velocidad-1-y-2-queda-a-medio-camino", "Por Qué Raspan los Engranajes si el Botón 1/2 No Entra Completo y Cómo Encajarlo"),
            ("como-desechar-o-reciclar-una-bateria-de-litio-hinchada-danada", "Señales de Peligro en una Batería Golpeada o Hinchada y Cómo Manejarla con Seguridad"),
        ],
        [
            ("en-taladros-dewalt-20v-max-y-xr", "en Taladros DEWALT (DCD771, DCD777, DCD791 y DCD805)"),
            ("en-taladros-bosch-12v-y-18v", "en Herramientas Bosch 12V Max y 18V"),
            ("en-equipos-makita-18v-lxt", "en Taladros y Atornilladores Makita 18V LXT"),
            ("en-taladros-black-decker-20v-max", "en Equipos Domésticos BLACK+DECKER 20V MAX"),
            ("despues-de-perforar-techo-o-concreto", "Después de Perforar Concreto o Hacia Arriba en el Techo"),
            ("en-climas-humedos-como-lima-o-costa", "en Departamentos de Zonas Húmedas o Costeras"),
            ("sin-perder-la-garantia-del-fabricante", "Cuidados Básicos en Casa sin Abrir la Carcasa"),
            ("para-alargar-la-vida-util-por-mas-de-10-anos", "Rutina de 3 Minutos al Terminar Cada Proyecto"),
            ("cuando-la-herramienta-estuvo-guardada-mucho-tiempo", "al Volver a Usar un Taladro Guardado por Más de un Año"),
            ("en-atornilladores-de-impacto-con-collarin-1-4", "cuando una Punta Hexagonal Se Queda Pegada en el Impacto"),
            ("paso-a-paso-con-herramientas-caseras", "Soluciones Simples sin Ir al Servicio Técnico"),
            ("revisando-seguridad-electrica-y-mecanica", "Guía Preventiva de Seguridad en tu Taller Casero"),
        ],
        "well-lit home repair bench showing safety glasses, cleaning brush, microfiber cloth and a cordless drill ready for maintenance",
    )

    # SILO 14: organizacion-de-herramientas-y-compra-en-amazon (170)
    populate_silo(
        "organizacion-de-herramientas-y-compra-en-amazon",
        170,
        (
            "que-significa-bare-tool-tool-only-codigos-b-z-c2-d2-en-amazon",
            "¿Qué Significa 'Tool Only / Bare Tool' y las Letras B, Z, C1, C2, D2 y P2 al Comprar Herramientas en Amazon EE. UU.?",
            "organizacion-de-herramientas-y-compra-en-amazon",
            "que significa bare tool tool only codigos b z c2 d2 en amazon",
            "diccionario imprescindible para comprar en Amazon Estados Unidos sin sorpresas: cómo saber en 5 segundos si el taladro DEWALT, Bosch, Makita o BLACK+DECKER viene con batería y cargador o solo el cuerpo",
            "newly delivered cardboard shipping box open on an apartment table revealing a cordless drill kit case, lithium battery and charger",
        ),
        [
            ("como-organizar-tus-herramientas-en-un-departamento-pequeno", "Cómo Guardar Taladro, Baterías y Herramientas Manuales en un Departamento sin Garaje"),
            ("bolso-de-lona-vs-caja-rigida-plastica-vs-cajas-apilables", "Bolso de Lona vs Caja de Herramientas Clásica vs Maletines Modulares Apilables (TSTAK / L-BOXX / Makpac)"),
            ("como-usar-sobres-de-silica-gel-para-que-no-se-oxiden-las-brocas", "El Truco de los Sobres de Sílica Gel en tu Maletín para Evitar el Óxido por Humedad"),
            ("como-ordenar-tornillos-tarugos-y-clavos-por-medida-en-cajas", "Cómo Clasificar Tarugos (6 mm, 8 mm, Drywall) y Tornillos en Organizadores Transparentes"),
            ("como-aprovechar-envio-internacional-amazonglobal-herramientas", "Cómo Funcionan los Envíos Internacionales y Restricciones de Baterías de Litio en Amazon EE. UU."),
            ("se-pueden-enviar-taladros-con-bateria-de-litio-por-courier", "Normativa Aérea IATA (Batería Instalada vs Batería Suelta < 100 Wh) al Importar desde Amazon.com"),
            ("mejores-fechas-de-ofertas-black-friday-prime-day-herramientas", "En Qué Épocas del Año Bajan Más de Precio DEWALT, Bosch y Makita en Amazon Estados Unidos"),
            ("como-verificar-que-compras-al-vendedor-oficial-en-amazon", "Cómo Revisar 'Ships from and Sold by Amazon.com' para Evitar Réplicas o Equipos Reacondicionados"),
            ("diferencia-entre-amazon-renewed-warehouse-y-herramienta-nueva", "¿Conviene Comprar Herramientas 'Amazon Renewed' o Usadas 'Like New' o Siempre Nuevas?"),
            ("como-ampliar-tu-taller-comprando-bare-tools-con-una-sola-bateria", "Cómo Ahorrar hasta 40 % en tu Segunda y Tercera Herramienta Comprando 'Bare Tool' de la Misma Marca"),
            ("lista-de-las-10-herramientas-basicas-que-todo-depa-necesita", "Checklist de las 10 Herramientas Esenciales que Resuelven el 99 % de Emergencias en un Departamento"),
            ("como-etiquetar-cargadores-de-110v-para-que-nadie-los-enchufe-a-220v", "Por Qué Poner una Etiqueta Roja 'SOLO 110V' en el Cable de tu Cargador Importado de EE. UU."),
            ("donde-NO-guardar-las-baterias-de-litio-en-tu-departamento", "Por Qué Nunca Guardar tu Taladro bajo el Lavadero Húmedo ni al Sol Directo del Balcón"),
            ("como-guardar-estuches-de-puntas-y-brocas-sin-que-se-mezclen", "Cómo Usar Estuches Modulares Encajables para Tener Siempre a Mano la Punta PH2 y la Broca de 1/4\""),
            ("como-registrar-el-numero-de-serie-de-tus-herramientas-nuevas", "Por Qué Anotar el Código de Serie y Fecha (Date Code) al Recibir tu Pedido de Amazon"),
        ],
        [
            ("comprando-en-amazon-estados-unidos-paso-a-paso", "Guía Práctica para Compradores en Amazon Estados Unidos"),
            ("para-equipos-dewalt-20v-max-y-tstak", "Aplicado al Ecosistema DEWALT 20V MAX y Cajas TSTAK"),
            ("para-equipos-bosch-12v-18v-y-l-boxx", "Aplicado a Herramientas Bosch y Maletines L-BOXX"),
            ("para-equipos-makita-18v-lxt-y-makpac", "Aplicado a Herramientas Makita 18V LXT y Makpac"),
            ("para-equipos-black-decker-20v-hogar", "Aplicado a Kits Domésticos BLACK+DECKER 20V"),
            ("en-closets-alacenas-o-cajones-de-departamento", "Aprovechando un Estante del Clóset o Lavandería"),
            ("cuando-compras-desde-estados-unidos-latinoamerica", "Consejos Clave para Compradores Hispanos en EE. UU. y LATAM"),
            ("cuidando-tu-presupuesto-sin-gastar-doble", "Cómo Comprar Bien una Sola Vez sin Gastar de Más"),
            ("para-tener-todo-listo-en-menos-de-1-minuto", "Orden Rápido para Hacer un Arreglo en 5 Minutos"),
            ("protegiendo-baterias-y-aceros-de-la-humedad", "Máxima Protección contra Humedad, Polvo y Golpes"),
            ("comparando-kits-de-inicio-frente-a-piezas-sueltas", "Estrategia Inteligente para Armar tu Kit Poco a Poco"),
            ("verificando-garantia-y-autenticidad-oficial", "Comprobando Autenticidad y Garantía de Fábrica"),
        ],
        "organized apartment utility closet shelf with compact stackable tool cases, labeled screw boxes and cordless drill charger station",
    )

    assert len(seo) == 1500, f"Expected 1500 SEO items, got {len(seo)}"
    return seo


if __name__ == "__main__":
    t = generate_transactional_500()
    s = generate_seo_1500()
    print(f"Pilares: {len(PILLARS)} | Transaccionales: {len(t)} | SEO: {len(s)} | Total: {len(PILLARS) + len(t) + len(s)}")
