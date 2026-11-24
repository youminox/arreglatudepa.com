"use client";

import { useCallback, useRef, useState } from "react";

const clamp = (v: number, a = 0, b = 1) => Math.min(b, Math.max(a, v));

export default function WorkTypeComparisonSlider() {
  const [v, setV] = useState(26);
  const [touched, setTouched] = useState(false);
  const scene = useRef<HTMLDivElement>(null);
  const t = v / 100;
  const mid = clamp(1 - Math.abs(t - 0.5) * 2.4);
  const heavy = clamp((t - 0.45) / 0.45);
  const fullHeavy = clamp((t - 0.55) / 0.4);

  const phase =
    t < 0.35
      ? "Modo A · Armado de Muebles, Melamina y Drywall (8V / 12V Compacto)"
      : t < 0.68
      ? "Transición · Comparando Control de Embrague vs Golpe Percutor"
      : "Modo B · Perforación en Concreto y Soportes TV (18V / 20V Percutor)";

  const torqueReading =
    t < 0.45 ? "Embrague 1–5 · < 1 kg" : "34.000 BPM · Mandril 1/2\"";

  const fromPointer = useCallback((clientX: number) => {
    const el = scene.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    setV(Math.round(clamp((clientX - r.left) / r.width) * 100));
    setTouched(true);
  }, []);

  return (
    <div className="daynight bg-[#090e1a] shadow-[0_40px_80px_-40px_rgba(15,23,42,0.75)]">
      <div
        ref={scene}
        className="relative aspect-[4/5] cursor-ew-resize select-none sm:aspect-[16/9]"
        onPointerDown={(e) => {
          if (e.pointerType === "mouse") e.preventDefault();
          (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
          fromPointer(e.clientX);
        }}
        onPointerMove={(e) => {
          if (e.buttons === 1 || e.pointerType === "touch") {
            if (
              (e.currentTarget as HTMLElement).hasPointerCapture(e.pointerId)
            )
              fromPointer(e.clientX);
          }
        }}
      >
        <svg
          viewBox="0 0 800 450"
          preserveAspectRatio="xMidYMid slice"
          className="absolute inset-0 h-full w-full"
          aria-hidden
        >
          <defs>
            <linearGradient id="wt-light" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#e0f2fe" />
              <stop offset="1" stopColor="#f8fafc" />
            </linearGradient>
            <linearGradient id="wt-mid" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#0284c7" />
              <stop offset="0.55" stopColor="#d97706" />
              <stop offset="1" stopColor="#fef3c7" />
            </linearGradient>
            <linearGradient id="wt-heavy" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#090e1a" />
              <stop offset="0.7" stopColor="#1e293b" />
              <stop offset="1" stopColor="#0f172a" />
            </linearGradient>
          </defs>
          <rect width="800" height="450" fill="url(#wt-light)" />
          <rect width="800" height="450" fill="url(#wt-mid)" opacity={mid} />
          <rect
            width="800"
            height="450"
            fill="url(#wt-heavy)"
            opacity={heavy}
          />

          <rect
            x="0"
            y="365"
            width="800"
            height="85"
            fill={heavy > 0.5 ? "#0b1322" : "#cbd5e1"}
          />

          {heavy < 0.5 ? (
            <g>
              <rect
                x="210"
                y="145"
                width="380"
                height="195"
                rx="18"
                fill="#ffffff"
                stroke="#0284c7"
                strokeWidth="4"
              />
              <text
                x="400"
                y="196"
                textAnchor="middle"
                fontFamily="Outfit, sans-serif"
                fontWeight="800"
                fontSize="17"
                fill="#0369a1"
              >
                🪵 Bosch 12V Max (PS31-2A) / DEWALT 8V DCF680N2
              </text>
              <text
                x="400"
                y="230"
                textAnchor="middle"
                fontSize="13.5"
                fontWeight="700"
                fill="#0f172a"
              >
                ✓ Embrague suave (1 al 5) que NUNCA barre la melamina
              </text>
              <text
                x="400"
                y="258"
                textAnchor="middle"
                fontSize="13"
                fontWeight="600"
                fill="#334155"
              >
                ✓ Cabezal corto para interiores de alacenas y cajones
              </text>
              <text
                x="400"
                y="286"
                textAnchor="middle"
                fontSize="13"
                fontWeight="700"
                fill="#059669"
              >
                ✓ Compatible: Batería 12V GBA12V + Puntas PH2 / PZ2 1/4&quot; Hex
              </text>
            </g>
          ) : (
            <g opacity={fullHeavy}>
              <rect
                x="195"
                y="140"
                width="410"
                height="205"
                rx="18"
                fill="#0f172a"
                stroke="#f59e0b"
                strokeWidth="4"
              />
              <text
                x="400"
                y="194"
                textAnchor="middle"
                fontFamily="Outfit, sans-serif"
                fontWeight="800"
                fontSize="17"
                fill="#fde68a"
              >
                🧱 DEWALT 20V XR Percutor (DCD805) / Makita XPH12
              </text>
              <text
                x="400"
                y="228"
                textAnchor="middle"
                fontSize="13.5"
                fontWeight="700"
                fill="#ffffff"
              >
                ✓ Modo Martillo (34.000 BPM) para concreto armado y ladrillo
              </text>
              <text
                x="400"
                y="256"
                textAnchor="middle"
                fontSize="13"
                fontWeight="600"
                fill="#cbd5e1"
              >
                ✓ Mandril metálico 1/2&quot; (13 mm) que no suelta la broca
              </text>
              <text
                x="400"
                y="284"
                textAnchor="middle"
                fontSize="13"
                fontWeight="700"
                fill="#6ee7b7"
              >
                ✓ Compatible: Batería 20V XR / 18V LXT + Brocas Carburo
              </text>
            </g>
          )}

          <rect
            x="120"
            y="354"
            width="560"
            height="34"
            rx="10"
            fill="#090e1a"
            stroke="#f59e0b"
            strokeWidth="2"
          />
          <text
            x="400"
            y="375"
            textAnchor="middle"
            fontFamily="Outfit, sans-serif"
            fontWeight="800"
            fontSize="12"
            fill="#fef08a"
          >
            {heavy > 0.5
              ? "Ideal para colgar soportes de TV de 65\", cortinas roller en techo y repisas en concreto"
              : "Ideal para muebles IKEA, bisagras cazoleta 35mm, drywall e instalaciones sin peso en muñeca"}
          </text>
        </svg>

        <div className="pointer-events-none absolute left-4 top-4 rounded-2xl border border-white/30 bg-slate-950/65 px-4 py-2 text-white backdrop-blur-md sm:left-6 sm:top-6">
          <p className="text-[0.68rem] font-bold uppercase tracking-[0.14em] text-white/75">
            {phase}
          </p>
          <p className="font-display text-xl sm:text-2xl font-extrabold tabular-nums text-amber-300">
            {torqueReading}
          </p>
        </div>
        {!touched && (
          <div className="pointer-events-none absolute bottom-2 left-1/2 -translate-x-1/2 animate-pulse whitespace-nowrap rounded-full bg-white/95 px-3 py-1.5 text-xs font-semibold text-fxink shadow-lg sm:bottom-5 sm:px-4 sm:py-2 sm:text-sm">
            ← Arrastra: Armado Ligero (8V/12V) vs Concreto Pesado (20V Percutor) →
          </div>
        )}
      </div>
      <div className="flex items-center gap-4 bg-[#090e1a] px-5 py-4 text-white sm:px-7">
        <span className="text-xs font-bold whitespace-nowrap text-sky-300">
          🪵 Muebles y Drywall (12V)
        </span>
        <label className="sr-only" htmlFor="wt-range">
          Comparador de tipo de trabajo en departamento
        </label>
        <input
          id="wt-range"
          type="range"
          min={0}
          max={100}
          value={v}
          onChange={(e) => {
            setV(Number(e.target.value));
            setTouched(true);
          }}
          aria-valuetext={`${phase}, ${torqueReading}`}
        />
        <span className="text-xs font-bold whitespace-nowrap text-fxlime">
          🧱 Concreto y Obra (20V XR)
        </span>
      </div>
    </div>
  );
}
