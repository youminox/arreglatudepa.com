/** Diagrama técnico SVG animado (equivalente a FiberGel.tsx de prunex1.com): ilustra cómo se relacionan las plataformas cerradas de baterías (DEWALT, Bosch, Makita, BLACK+DECKER) con el estándar universal de brocas y puntas (3/8", 1/2" y 1/4" Hex). */
export default function ToolAnatomyCompatibilitySvg() {
  const strands = Array.from({ length: 8 }).map((_, i) => {
    const a = (i / 8) * Math.PI * 2 + 0.25;
    const x1 = 200 + Math.cos(a) * 38;
    const y1 = 210 + Math.sin(a) * 38;
    const x2 = 200 + Math.cos(a) * 128;
    const y2 = 210 + Math.sin(a) * 128;
    const mx = 200 + Math.cos(a + 0.4) * 84;
    const my = 210 + Math.sin(a + 0.4) * 84;
    return `M${x1.toFixed(1)} ${y1.toFixed(1)} Q${mx.toFixed(1)} ${my.toFixed(1)} ${x2.toFixed(1)} ${y2.toFixed(1)}`;
  });

  return (
    <div className="gel-scene relative mx-auto aspect-square w-full max-w-[460px]">
      <svg
        viewBox="0 0 400 420"
        className="h-full w-full"
        role="img"
        aria-label="Diagrama técnico de compatibilidad entre plataformas de batería exclusivas por marca y mandriles universales de brocas y puntas"
      >
        <defs>
          <radialGradient id="tc-halo" cx="50%" cy="50%" r="50%">
            <stop offset="0" stopColor="#f59e0b" stopOpacity="0.35" />
            <stop offset="0.6" stopColor="#0284c7" stopOpacity="0.16" />
            <stop offset="1" stopColor="#0f172a" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="tc-core" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#fde68a" />
            <stop offset="0.5" stopColor="#f59e0b" />
            <stop offset="1" stopColor="#0284c7" />
          </linearGradient>
        </defs>

        <circle cx="200" cy="210" r="188" fill="url(#tc-halo)" />
        <circle
          cx="200"
          cy="210"
          r="148"
          fill="none"
          stroke="rgba(255,255,255,0.16)"
          strokeDasharray="4 7"
        />
        <circle
          cx="200"
          cy="210"
          r="102"
          fill="none"
          stroke="rgba(245,158,11,0.45)"
          strokeDasharray="6 5"
        />

        {strands.map((d, i) => (
          <path
            key={i}
            d={d}
            className="fiber-strand"
            fill="none"
            stroke={i % 2 === 0 ? "#f59e0b" : "#38bdf8"}
            strokeOpacity="0.8"
            strokeWidth="3"
            strokeLinecap="round"
            style={{ animationDelay: `${i * 0.25}s` }}
          />
        ))}

        {/* Núcleo central: Mandril + Motor */}
        <circle
          cx="200"
          cy="210"
          r="52"
          fill="#0f172a"
          stroke="url(#tc-core)"
          strokeWidth="4"
        />
        <text
          x="200"
          y="204"
          textAnchor="middle"
          fontFamily="Outfit, sans-serif"
          fontWeight="800"
          fontSize="13"
          fill="#fef08a"
        >
          COMPATIBILIDAD
        </text>
        <text
          x="200"
          y="222"
          textAnchor="middle"
          fontFamily="Inter, sans-serif"
          fontWeight="700"
          fontSize="10.5"
          fill="#38bdf8"
        >
          12V · 18V · 20V MAX
        </text>

        {/* Etiquetas técnicas */}
        <g fontFamily="Inter, sans-serif" fontSize="10.5" fontWeight="700">
          <g transform="translate(12 34)">
            <rect
              width="178"
              height="28"
              rx="14"
              fill="rgba(245,158,11,0.2)"
              stroke="rgba(245,158,11,0.65)"
            />
            <text x="89" y="18" textAnchor="middle" fill="#fef08a">
              🔋 Baterías: Exclusivas por Marca
            </text>
          </g>
          <g transform="translate(206 48)">
            <rect
              width="182"
              height="28"
              rx="14"
              fill="rgba(16,185,129,0.22)"
              stroke="rgba(52,211,153,0.65)"
            />
            <text x="91" y="18" textAnchor="middle" fill="#a7f3d0">
              🔩 Puntas 1/4&quot; Hex: Universales
            </text>
          </g>
          <g transform="translate(18 336)">
            <rect
              width="174"
              height="28"
              rx="14"
              fill="rgba(2,132,199,0.28)"
              stroke="rgba(56,189,248,0.65)"
            />
            <text x="87" y="18" textAnchor="middle" fill="#bae6fd">
              ⚙️ Mandril 3/8&quot; (10mm) vs 1/2&quot;
            </text>
          </g>
          <g transform="translate(204 366)">
            <rect
              width="184"
              height="28"
              rx="14"
              fill="rgba(217,119,6,0.28)"
              stroke="rgba(251,191,36,0.65)"
            />
            <text x="92" y="18" textAnchor="middle" fill="#fde68a">
              🔌 Cargadores EE. UU. 110V / USB-C
            </text>
          </g>
        </g>
      </svg>
    </div>
  );
}
