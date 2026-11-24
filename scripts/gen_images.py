#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Genera imágenes fotorrealistas y visualmente diversas para arreglatudepa.com vía la Edge Function arreglatudepa-images
(Supabase charlielingan → OpenAI ChatGPT Image API con quality="medium") y las comprime en WebP
ligeros (<= 68 KB, garantizado estrictamente < 100 KB para Google SEO) en public/img/,
incluyendo verificación perceptual dHash anti-similitud.

Uso:
  python3 scripts/gen_images.py home        # genera 68 imágenes diversas (Home + 14 Silos + Escenas + Artículos Top)
  python3 scripts/gen_images.py articles    # genera imágenes individuales por artículo
  python3 scripts/gen_images.py one <slug> "<prompt>"
"""
import concurrent.futures as cf
import io
import json
import pathlib
import sys
import urllib.request
from PIL import Image

ROOT = pathlib.Path(__file__).resolve().parent.parent
ENDPOINT = "https://ehwjvuhbimqakvzqbvvg.supabase.co/functions/v1/arreglatudepa-images"
TOKEN = "arreglatudepa-img-2026"
RAW = ROOT / "scripts/.cache/raw"
RAW.mkdir(parents=True, exist_ok=True)

# 52 escenas fotográficas ultra diversas (distintos ángulos, entornos de departamento, marcas/colores, baterías, brocas e iluminación)
HOME_PROMPTS = {
    "home-hero-herramientas": "Three-quarter editorial studio photograph on a warm birch apartment workbench featuring a yellow-and-black 20V brushless cordless drill, a compact blue 12V driver, a slide-on lithium battery on its charger and an open titanium and masonry bit case, morning window light",
    "og-default": "Clean sunlit modern apartment renovation table displaying four cordless power drills (yellow, blue, teal and orange) alongside compatible lithium battery packs, chargers and organized drill bit cases",
    "home-armado-melamina": "Eye-level realistic photograph of hands using a compact blue 12V cordless drill-driver set on low torque clutch to install a 35mm hinge inside a white oak melamine kitchen cabinet",
    "home-perforar-concreto": "Action close-up of a heavy-duty yellow-and-black 20V cordless hammer drill with a carbide masonry bit drilling cleanly into a modern gray concrete apartment wall beside a green laser level line",
    "home-baterias-cargadores": "Detailed studio close-up on walnut wood of 12V, 18V and 20V slide-style lithium-ion tool battery packs with glowing green LED charge bars next to fast chargers",
    "home-brocas-y-puntas": "Overhead flat-lay knolling on birch wood of carbide concrete drill bits, brad-point wood bits, gold titanium metal bits and magnetic 1/4-inch hex torsion screwdriver bits",
    "home-soporte-tv-depa": "Wide bright apartment living room scene with a black steel TV wall mount leveled on the wall, nylon anchors, socket nut driver and a teal 18V cordless drill on a side console",
    "home-kit-primer-depa": "Open orange-and-black household DIY tool bag on a dining table showing a 20V cordless drill, claw hammer, slip-joint pliers, tape measure, spirit level and wall anchor assortment",
    "home-espacios-estrechos": "Close-up inside a narrow wooden closet shelf where a compact cordless screwdriver with a 90-degree right-angle hex adapter tightens a bracket screw effortlessly",
    # 14 Categorías Pilares
    "cat-resenas-taladros-y-atornilladores": "Editorial tool testing bench featuring cordless drills, hammer drills and electric screwdrivers arranged neatly with a digital caliper and torque test block under soft daylight",
    "cat-juegos-y-kits-de-herramientas": "Overhead studio view of a complete 2-tool cordless drill and impact driver combo kit beside an open mechanics socket and hand tool case on birch wood",
    "cat-comparativas-de-herramientas": "Balanced side-by-side studio comparison of two cordless brushless drills—one yellow-black and one teal—facing each other on a split oak workbench",
    "cat-herramientas-por-presupuesto-y-trabajo": "Graduated display of an affordable 4V USB screwdriver, a 12V compact drill and a 20V hammer drill matched with furniture screws, drywall anchors and concrete bolts",
    "cat-baterias-y-cargadores-compatibles": "Technical workshop lineup of compact 2.0Ah and high-capacity 5.0Ah lithium slide batteries docked on multi-voltage chargers with cooling vents",
    "cat-brocas-puntas-y-accesorios-compatibles": "Macro angle of an open modular bit organizer case showing impact torsion bits, magnetic nut setters, countersinks and masonry flutes",
    "cat-guia-de-compatibilidad-baterias-y-voltaje": "Close-up of lithium battery terminal rails, contact blades and a digital multimeter resting on a clean dark slate mat",
    "cat-guia-de-mandriles-brocas-y-puntas": "Extreme macro shot comparing a 1/2-inch metal keyless chuck, a 3/8-inch chuck and a 1/4-inch quick-release hex collet with matching shanks",
    "cat-perforar-paredes-concreto-drywall-y-ceramica": "Split-surface DIY demonstration showing concrete masonry, white drywall with metal stud finder and glossy bathroom ceramic tile with specialized drill bits",
    "cat-armado-de-muebles-madera-y-melamina": "Sunlit apartment floor assembly of a Scandinavian wooden desk using a gyroscopic cordless screwdriver, wooden dowels, cam locks and corner clamp",
    "cat-instalaciones-y-mejoras-en-departamento": "Modern apartment window and wall upgrade with blackout roller blind brackets, floating oak shelf, laser level and compact cordless drill",
    "cat-motores-torque-embrague-y-ergonomia": "Studio profile close-up of a compact brushless drill highlighting the numbered 1-to-15 clutch collar, 2-speed gear switch and ventilation slots",
    "cat-mantenimiento-seguridad-y-solucion-de-fallas": "Clean home workbench with clear polycarbonate safety glasses, soft cleaning brush, microfiber cloth and a well-maintained cordless drill",
    "cat-organizacion-de-herramientas-y-compra-en-amazon": "Tidy apartment utility closet with stackable modular tool cases, transparent wall-anchor organizer boxes and a freshly opened delivery box",
    # 28 Variantes Visuales Anti-Similitud (2 adicionales por cada uno de los 14 silos)
    "scene-resenas-2": "Low-angle hero shot of a subcompact 12V black-and-yellow cordless drill standing on a pine board with brass wood screws and warm afternoon light",
    "scene-resenas-3": "Close-up of a USB-rechargeable inline electric screwdriver tightening an electrical wall plate screw in a bright apartment hallway",
    "scene-kits-2": "Canvas contractor tool bag unzipped on a wooden bench revealing a brushless drill, impact driver and two 4.0Ah lithium batteries",
    "scene-kits-3": "Hard-shell molded household tool case open on a kitchen counter displaying wrenches, hex keys, magnetic screwdriver and cordless driver",
    "scene-comparativas-2": "Side-profile size comparison between a tall 20V hammer drill with 5.0Ah battery and an ultra-short 12V pocket driver on a ruler mat",
    "scene-comparativas-3": "Close-up comparison of an impact driver 1/4-inch hex collet on the left and a hammer drill 1/2-inch metal chuck on the right",
    "scene-presupuesto-2": "Budget-friendly orange cordless drill driving a screw into a curtain rod bracket beside a sunlit apartment window",
    "scene-presupuesto-3": "Professional teal brushless hammer drill with side handle and depth rod resting beside heavy lag bolts on a solid oak bench",
    "scene-baterias-2": "Compact USB-C power delivery charger charging a yellow 20V lithium tool battery via braided USB-C cable on a modern desk",
    "scene-baterias-3": "Hand pressing the release latch to slide a 2.0Ah lithium battery pack smoothly onto the base of a cordless drill",
    "scene-brocas-2": "Macro shot of a spear-point carbide glass-and-tile bit resting on a white porcelain bathroom tile with water cooling droplets",
    "scene-brocas-3": "35mm Forstner hinge bit boring a clean circular cup hole into a white melamine cabinet door on a clamped worktable",
    "scene-voltaje-2": "Step-down voltage converter transformer on a workshop shelf powering a battery charger safely with a clean green indicator light",
    "scene-voltaje-3": "Three-LED battery fuel gauge glowing bright green on the back of a lithium tool battery held in a carpenter's hand",
    "scene-mandriles-2": "Magnetic bit holder sleeve gripping a Torx T25 screw horizontally without dropping it above a wooden deck board",
    "scene-mandriles-3": "Graduated masonry drill bits (5mm, 6mm, 8mm, 10mm) paired side by side with their matching nylon and toggle wall anchors",
    "scene-paredes-2": "Electronic stud and AC wire scanner held against a white apartment drywall lighting up to mark a safe drilling spot",
    "scene-paredes-3": "Folded paper envelope taped beneath a drilling mark on a painted living room wall catching every grain of masonry dust",
    "scene-muebles-2": "Close-up of metal drawer slides being aligned with a torpedo level and fastened with a compact 12V screwdriver",
    "scene-muebles-3": "Countersink pilot drill bit creating a flush bevel in natural pine wood on a sunlit balcony workbench",
    "scene-instalaciones-2": "Wall-mounted vertical bicycle rack being bolted securely into an apartment storage wall with a socket driver bit",
    "scene-instalaciones-3": "Bathroom mirror and brushed nickel towel bar installation using a cordless drill in rotary-only mode on ceramic wall tiles",
    "scene-motores-2": "Bright LED worklight at the foot of a cordless drill illuminating a dark under-sink plumbing cabinet corner",
    "scene-motores-3": "Ergonomic rubber overmold handle of a lightweight subcompact drill held comfortably overhead while installing ceiling track lighting",
    "scene-mantenimiento-2": "Dry nylon brush cleaning fine white drywall dust out of the ventilation slots of a cordless power drill",
    "scene-mantenimiento-3": "Pair of snug nitrile-coated grip gloves and safety goggles resting next to a cordless drill with battery detached for bit change",
    "scene-organizacion-2": "Transparent compartmentalized organizer box sorted with wall plugs, wood screws, washers and silica gel moisture packets",
    "scene-organizacion-3": "Interlocking modular tool chests stacked neatly in the corner of a compact modern apartment laundry closet",
}

TOP_ARTICLE_SLUGS = [
    "dewalt-dcd777d1-taladro-brushless-20v-max-resena-y-compatibilidad",
    "bosch-ps31-2a-taladro-12v-max-compacto-resena-y-baterias",
    "black-decker-ldx120c-taladro-20v-max-economico-resena",
    "makita-xfd131-taladro-18v-lxt-brushless-resena-completa",
    "dewalt-dcd805d2-taladro-percutor-xr-concreto-resena",
    "dewalt-dcf680n2-destornillador-electrico-giroscopico-8v-resena",
    "dewalt-dck240c2-combo-taladro-e-impacto-20v-resena",
    "black-decker-ldx120pk-juego-68-herramientas-taladro-resena",
    "dewalt-vs-bosch-vs-makita-vs-black-decker-cual-elegir",
    "mejores-taladros-inalambricos-para-departamento-y-casa-amazon",
    "mejores-destornilladores-electricos-inalambricos-muebles-amazon",
    "tabla-compatibilidad-baterias-dewalt-20v-bosch-18v-makita-lxt",
    "mejores-sets-de-brocas-y-puntas-dewalt-bosch-makita-amazon",
    "diferencia-real-entre-18v-y-20v-max-en-taladros-inalambricos",
    "diferencia-mandril-3-8-vs-1-2-pulgada-y-1-4-hex-que-brocas-entran",
    "como-saber-si-la-pared-de-tu-departamento-es-concreto-ladrillo-o-drywall",
    "en-que-numero-poner-el-torque-del-taladro-para-melamina-y-muebles",
    "como-instalar-un-soporte-de-tv-en-pared-que-taladro-y-broca-usar",
    "motor-brushless-sin-escobillas-vs-con-carbones-vale-la-pena",
    "que-significa-bare-tool-tool-only-codigos-b-z-c2-d2-en-amazon",
]


def compute_dhash(im: Image.Image, hash_size: int = 8) -> int:
    small = im.convert("L").resize((hash_size + 1, hash_size), Image.LANCZOS)
    pixels = list(small.getdata())
    bits = 0
    for row in range(hash_size):
        offset = row * (hash_size + 1)
        for col in range(hash_size):
            bits = (bits << 1) | (1 if pixels[offset + col] > pixels[offset + col + 1] else 0)
    return bits


def call(slug: str, prompt: str) -> bytes:
    data = json.dumps({"slug": slug, "prompt": prompt}).encode()
    req = urllib.request.Request(
        ENDPOINT,
        data=data,
        headers={
            "Content-Type": "application/json",
            "x-arreglatudepa-token": TOKEN,
        },
    )
    with urllib.request.urlopen(req, timeout=240) as r:
        res = json.loads(r.read())
    if not res.get("ok"):
        raise RuntimeError(res.get("error"))
    with urllib.request.urlopen(res["url"] + "?v=1", timeout=120) as r:
        return r.read()


def save_variants(slug: str, raw_bytes: bytes, outdir: pathlib.Path) -> tuple[dict, int]:
    outdir.mkdir(parents=True, exist_ok=True)
    im = Image.open(io.BytesIO(raw_bytes)).convert("RGB")
    w, h = im.size
    target = 16 / 9
    if w / h > target:
        nw = int(h * target)
        im = im.crop(((w - nw) // 2, 0, (w - nw) // 2 + nw, h))
    else:
        nh = int(w / target)
        im = im.crop((0, (h - nh) // 2, w, (h - nh) // 2 + nh))

    dhash = compute_dhash(im)
    # Tope duro: <= 68 KB para 1200x675 (estrictamente < 100 KB como solicitó el usuario)
    sizes = {"": 1200, "-800": 800, "-400": 400}
    limits = {"": 68_000, "-800": 42_000, "-400": 18_000}
    out = {}
    for suf, width in sizes.items():
        cur_w = width
        q = 78
        while True:
            r = im.resize((cur_w, round(cur_w * 9 / 16)), Image.LANCZOS)
            buf = io.BytesIO()
            r.save(buf, "WEBP", quality=q, method=6)
            if buf.tell() <= limits[suf]:
                break
            if q > 28:
                q -= 5
            elif cur_w > 640:
                cur_w = int(cur_w * 0.88)
            else:
                break
        p = outdir / f"{slug}{suf}.webp"
        p.write_bytes(buf.getvalue())
        out[suf] = buf.tell()
    return out, dhash


def job(slug: str, prompt: str, outdir: pathlib.Path):
    final = outdir / f"{slug}.webp"
    if final.exists() and final.stat().st_size <= 68_000:
        im = Image.open(final)
        return slug, f"skip ({final.stat().st_size // 1024}KB)", compute_dhash(im)
    rawp = RAW / f"{slug}.webp"
    if rawp.exists():
        b = rawp.read_bytes()
    else:
        last = None
        for _ in range(3):
            try:
                b = call(slug, prompt)
                break
            except Exception as e:
                last = e
        else:
            return slug, f"ERROR {last}", 0
        rawp.write_bytes(b)
    sizes, dhash = save_variants(slug, b, outdir)
    return slug, f"ok {sizes[''] // 1024}KB", dhash


def main():
    mode = sys.argv[1] if len(sys.argv) > 1 else "home"
    tasks = []
    if mode == "home":
        for s, p in HOME_PROMPTS.items():
            tasks.append((s, p, ROOT / "public/img/ambiente"))
        art_dir = ROOT / "src/content/articles"
        for slug in TOP_ARTICLE_SLUGS:
            f = art_dir / f"{slug}.json"
            if f.exists():
                a = json.loads(f.read_text(encoding="utf-8"))
                tasks.append(
                    (a["slug"], a["image"]["prompt"], ROOT / "public/img/articulos")
                )
    elif mode == "articles":
        for f in sorted((ROOT / "src/content/articles").glob("*.json")):
            a = json.loads(f.read_text(encoding="utf-8"))
            tasks.append(
                (a["slug"], a["image"]["prompt"], ROOT / "public/img/articulos")
            )
    elif mode == "one":
        tasks.append((sys.argv[2], sys.argv[3], ROOT / "public/img/ambiente"))

    hashes = []
    with cf.ThreadPoolExecutor(max_workers=8) as ex:
        for slug, status, dh in ex.map(lambda t: job(*t), tasks):
            if dh:
                hashes.append((slug, dh))
            print(slug, status, flush=True)

    # Reporte de diversidad visual dHash
    near_dups = 0
    for i in range(len(hashes)):
        for j in range(i + 1, len(hashes)):
            dist = bin(hashes[i][1] ^ hashes[j][1]).count("1")
            if dist <= 4:
                near_dups += 1
    print(f"Auditoría visual dHash completada sobre {len(hashes)} imágenes (duplicados cercanos: {near_dups}).")


if __name__ == "__main__":
    main()
