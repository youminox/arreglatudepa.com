"use client";

import { useEffect, useRef } from "react";

const STEPS = [
  {
    n: "01",
    t: "Identifica la superficie de tu departamento (Melamina, Drywall o Concreto)",
    d: "Para armar muebles planos, melamina y fijar en drywall te basta un destornillador eléctrico (4V/8V) o un taladro compacto de 12V (Bosch PS31-2A). Si tus paredes son de concreto armado o ladrillo, elige siempre un taladro con modo Percutor (DEWALT DCD805D2 o Makita XPH12).",
  },
  {
    n: "02",
    t: "Ajusta tu presupuesto y revisa Kit Completo vs Bare Tool (B / Z)",
    d: "En Amazon EE. UU. tienes kits listos desde menos de US$60 (BLACK+DECKER LDX120C/LDX120PK) hasta gama media Brushless (US$99–US$149). Fíjate siempre en el código: 'C1/C2/D1/D2' trae batería y cargador; 'B' o 'Z' es solo el cuerpo sin batería.",
  },
  {
    n: "03",
    t: "Confirma la plataforma de batería y el voltaje del cargador",
    d: "Las baterías NO se mezclan entre marcas ni entre 12V y 20V MAX. Quédate en una misma familia (DEWALT 20V MAX, Bosch 12V/18V, Makita 18V LXT o BLACK+DECKER 20V) para compartir baterías y verifica el voltaje si usas red de 220V.",
  },
  {
    n: "04",
    t: "Acopla las brocas y puntas 1/4\" Hex exactas para tu mandril",
    d: "A diferencia de las baterías, las brocas cilíndricas (hasta 3/8\" o 1/2\") y las puntas hexagonales de 1/4\" son 100 % universales entre marcas: suma un set Impact Rated (PH2, PZ2, Torx) y brocas de carburo para tener el equipo completo.",
  },
];

export default function ScrollStory() {
  const root = useRef<HTMLElement>(null);
  useEffect(() => {
    const el = root.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let ctx: { revert: () => void } | null = null;
    let cancelled = false;
    let io: IntersectionObserver | null = null;

    const init = async () => {
      const [{ gsap }, { ScrollTrigger }] = await Promise.all([
        import("gsap"),
        import("gsap/ScrollTrigger"),
      ]);
      if (cancelled) return;
      gsap.registerPlugin(ScrollTrigger);
      ctx = gsap.context(() => {
        const q = gsap.utils.selector(el);
        if (reduce) {
          gsap.set(q(".step"), { opacity: 1 });
          gsap.set(q(".bar"), { scaleX: 1 });
          gsap.set(q(".phone-alert, .night, .sound-wave"), { opacity: 1 });
          return;
        }
        const tl = gsap.timeline({
          defaults: { ease: "none" },
          scrollTrigger: {
            trigger: el,
            start: "top top",
            end: "+=2200",
            scrub: 0.7,
            pin: q(".pin")[0],
            anticipatePin: 1,
          },
        });
        tl.to(q(".step-0"), { opacity: 1, duration: 0.2 }, 0)
          .to(
            q(".step-0 .dot"),
            { backgroundColor: "#D97706", color: "#fff", duration: 0.2 },
            0
          )
          .fromTo(
            q(".bit-insert"),
            { x: 24 },
            { x: 0, duration: 0.6 },
            0.1
          )
          .to(q(".step-0"), { opacity: 0.75, duration: 0.2 }, 1)
          .to(q(".step-1"), { opacity: 1, duration: 0.2 }, 1)
          .to(
            q(".step-1 .dot"),
            { backgroundColor: "#0284C7", color: "#fff", duration: 0.2 },
            1
          )
          .to(
            q(".torque-badge"),
            { scale: 1.06, svgOrigin: "200 130", duration: 0.5 },
            1.15
          )
          .to(q(".step-1"), { opacity: 0.75, duration: 0.2 }, 2)
          .to(q(".step-2"), { opacity: 1, duration: 0.2 }, 2)
          .to(
            q(".step-2 .dot"),
            { backgroundColor: "#059669", color: "#fff", duration: 0.2 },
            2
          )
          .fromTo(
            q(".battery-pack"),
            { y: 20 },
            { y: 0, duration: 0.7 },
            2.05
          )
          .to(q(".sound-wave"), { opacity: 1, scaleX: 1, duration: 0.5 }, 2.1)
          .to(q(".step-2"), { opacity: 0.75, duration: 0.2 }, 3.1)
          .to(q(".step-3"), { opacity: 1, duration: 0.2 }, 3.1)
          .to(
            q(".step-3 .dot"),
            { backgroundColor: "#0F172A", color: "#FDE68A", duration: 0.2 },
            3.1
          )
          .to(q(".night"), { opacity: 1, duration: 0.6 }, 3.1)
          .to(q(".phone-alert"), { opacity: 1, y: 0, duration: 0.5 }, 3.3)
          .to(q(".bar"), { scaleX: 1, duration: 3.8 }, 0);
      }, el);
    };

    io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          io?.disconnect();
          init();
        }
      },
      { rootMargin: "600px 0px" }
    );
    io.observe(el);
    return () => {
      cancelled = true;
      io?.disconnect();
      ctx?.revert();
    };
  }, []);

  return (
    <section
      id="ruta-herramienta"
      ref={root}
      className="relative bg-gradient-to-b from-white via-fxsky to-white"
    >
      <div className="pin flex min-h-[100svh] items-center overflow-hidden py-10 lg:py-14">
        <div className="wrap grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
          <div>
            <span className="eyebrow">Método Sin Errores de Compra</span>
            <h2 className="section-title mt-3">
              Cuatro pasos.{" "}
              <span className="text-prune">
                De la duda técnica al arreglo perfecto en tu departamento.
              </span>
            </h2>
            <div className="mt-4 h-1.5 w-full max-w-sm overflow-hidden rounded bg-[var(--line)]">
              <div className="bar h-full origin-left scale-x-0 bg-gradient-to-r from-fxblue via-drinklight to-prune" />
            </div>
            <ol className="mt-6 space-y-3 sm:mt-8 sm:space-y-4">
              {STEPS.map((s, i) => (
                <li
                  key={s.n}
                  className={`step step-${i} flex gap-4`}
                  style={{ opacity: 0.8 }}
                >
                  <span className="dot grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-white font-display font-extrabold text-fxink shadow-md">
                    {s.n}
                  </span>
                  <div>
                    <p className="font-display text-lg font-bold sm:text-xl">
                      {s.t}
                    </p>
                    <p className="text-sm text-[var(--muted)] sm:text-base">
                      {s.d}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div className="relative mx-auto w-full max-w-[270px] sm:max-w-[360px] lg:max-w-[420px]">
            <svg
              viewBox="0 0 400 440"
              className="relative w-full drop-shadow-[0_30px_50px_rgba(15,23,42,0.22)]"
              role="img"
              aria-label="Esquema interactivo de taladro inalámbrico, mandril, broca y riel de batería compatible"
            >
              <defs>
                <linearGradient id="ss-light" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0" stopColor="#f8fafc" />
                  <stop offset="1" stopColor="#e2e8f0" />
                </linearGradient>
                <linearGradient id="ss-dark" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0" stopColor="#090e1a" />
                  <stop offset="0.65" stopColor="#0f172a" />
                  <stop offset="1" stopColor="#1e293b" />
                </linearGradient>
                <clipPath id="ss-panel">
                  <rect x="0" y="0" width="400" height="440" rx="36" />
                </clipPath>
              </defs>
              <g clipPath="url(#ss-panel)">
                <rect width="400" height="440" fill="url(#ss-light)" />
                <rect
                  className="night"
                  width="400"
                  height="440"
                  fill="url(#ss-dark)"
                  opacity="0"
                />

                <g className="torque-badge">
                  <rect
                    x="70"
                    y="88"
                    width="260"
                    height="36"
                    rx="10"
                    fill="#0f172a"
                    stroke="#f59e0b"
                    strokeWidth="2"
                  />
                  <text
                    x="200"
                    y="110"
                    textAnchor="middle"
                    fontFamily="Outfit, sans-serif"
                    fontWeight="800"
                    fontSize="11"
                    fill="#fde68a"
                  >
                    MOTOR BRUSHLESS + EMBRAGUE 1-15 + PERCUTOR
                  </text>
                </g>

                {/* Cuerpo del taladro */}
                <rect
                  x="92"
                  y="152"
                  width="156"
                  height="74"
                  rx="16"
                  fill="#f59e0b"
                  stroke="#0f172a"
                  strokeWidth="4"
                />
                {/* Rejillas motor */}
                <rect x="108" y="168" width="24" height="8" rx="3" fill="#0f172a" />
                <rect x="108" y="182" width="24" height="8" rx="3" fill="#0f172a" />
                <rect x="108" y="196" width="24" height="8" rx="3" fill="#0f172a" />
                {/* Anillo de torque y Mandril */}
                <rect x="248" y="160" width="24" height="58" rx="4" fill="#1e293b" />
                <rect x="272" y="166" width="32" height="46" rx="5" fill="#475569" />

                {/* Broca / Punta acoplándose */}
                <g className="bit-insert">
                  <rect x="304" y="184" width="66" height="10" rx="3" fill="#94a3b8" />
                  <polygon points="370,184 384,189 370,194" fill="#0284c7" />
                </g>

                {/* Empuñadura */}
                <path
                  d="M142 226 L126 322 L182 322 L192 226 Z"
                  fill="#1e293b"
                  stroke="#f59e0b"
                  strokeWidth="3"
                />

                {/* Batería deslizante compatible */}
                <g className="battery-pack">
                  <rect
                    x="104"
                    y="324"
                    width="116"
                    height="48"
                    rx="10"
                    fill="#0f172a"
                    stroke="#10b981"
                    strokeWidth="3"
                  />
                  <circle cx="126" cy="348" r="5" fill="#10b981" />
                  <circle cx="140" cy="348" r="5" fill="#10b981" />
                  <circle cx="154" cy="348" r="5" fill="#10b981" />
                  <text
                    x="192"
                    y="352"
                    textAnchor="middle"
                    fontSize="10.5"
                    fontWeight="800"
                    fill="#fde68a"
                  >
                    20V / 18V
                  </text>
                </g>

                <line
                  className="sound-wave"
                  x1="54"
                  y1="392"
                  x2="346"
                  y2="392"
                  stroke="#f59e0b"
                  strokeWidth="3.5"
                  strokeDasharray="8 6"
                  strokeLinecap="round"
                  opacity="0.45"
                />

                <g
                  className="phone-alert"
                  opacity="0"
                  transform="translate(40 18)"
                >
                  <rect
                    width="320"
                    height="48"
                    rx="14"
                    fill="#ffffff"
                    stroke="#10b981"
                    strokeWidth="2.5"
                  />
                  <circle cx="24" cy="24" r="13" fill="#10b981" />
                  <text
                    x="24"
                    y="28"
                    textAnchor="middle"
                    fontSize="13"
                    fontWeight="800"
                    fill="#ffffff"
                  >
                    ✓
                  </text>
                  <text
                    x="46"
                    y="20"
                    fontFamily="Outfit, sans-serif"
                    fontWeight="800"
                    fontSize="11.5"
                    fill="#0f172a"
                  >
                    ¡Equipo y Consumibles 100% Compatibles!
                  </text>
                  <text
                    x="46"
                    y="35"
                    fontFamily="Inter, sans-serif"
                    fontWeight="600"
                    fontSize="10"
                    fill="#b45309"
                  >
                    Mandril 1/2&quot; · Puntas 1/4&quot; Hex · Batería Verificada
                  </text>
                </g>
              </g>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
