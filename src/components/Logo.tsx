import { useId } from "react";

/** Logotipo de ArreglaTuDepa.com: Techo de Departamento + Taladro Inalámbrico + Batería Compatible */
export function LogoMark({ className = "h-9 w-9" }: { className?: string }) {
  const id = useId().replace(/:/g, "");
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden>
      <defs>
        <linearGradient id={`${id}bg`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#0F172A" />
          <stop offset="0.55" stopColor="#1E293B" />
          <stop offset="1" stopColor="#0284C7" />
        </linearGradient>
        <linearGradient id={`${id}amber`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#FEF08A" />
          <stop offset="1" stopColor="#F59E0B" />
        </linearGradient>
      </defs>
      <rect width="64" height="64" rx="16" fill={`url(#${id}bg)`} />
      <path
        d="M12 24 L32 10 L52 24"
        fill="none"
        stroke={`url(#${id}amber)`}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect x="16" y="25" width="22" height="11" rx="3" fill={`url(#${id}amber)`} />
      <rect x="38" y="27" width="7" height="7" rx="1.5" fill="#94A3B8" />
      <line
        x1="45"
        y1="30.5"
        x2="53"
        y2="30.5"
        stroke="#E2E8F0"
        strokeWidth="2.6"
        strokeLinecap="round"
      />
      <path d="M23 36 L20 48 L29 48 L30 36 Z" fill={`url(#${id}amber)`} />
      <rect x="17" y="48" width="15" height="6" rx="2" fill="#10B981" />
    </svg>
  );
}

export default function Logo({ dark = false }: { dark?: boolean }) {
  return (
    <span className="flex items-center gap-2.5 font-display text-lg font-extrabold tracking-tight">
      <LogoMark />
      <span>
        ArreglaTu<span className={dark ? "text-fxlime" : "text-fxblue"}>Depa</span>
        <span
          className={`ml-1.5 hidden text-[10px] font-bold uppercase tracking-[0.18em] sm:inline ${
            dark ? "text-white/60" : "text-[var(--muted)]"
          }`}
        >
          .com
        </span>
      </span>
    </span>
  );
}
