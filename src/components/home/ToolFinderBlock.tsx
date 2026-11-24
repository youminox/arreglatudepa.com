"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  CATALOG,
  buildAmazonUrl,
  detectUserAmazonRegion,
  type AmazonStoreRegion,
  type AmazonProductRecommendation,
} from "@/lib/amazon";
import { trackClick } from "@/lib/client-constants";
import OpenChatButton from "@/components/OpenChatButton";

export type ToolTier = {
  key: string;
  label: string;
  budgetSpec: string;
  batteryCompat: string;
  bitsCompat: string;
  img: string;
  alt: string;
  idealFor: string;
  reviewHref: string;
  productKey: keyof typeof CATALOG;
};

export default function ToolFinderBlock({ options }: { options: ToolTier[] }) {
  const [k, setK] = useState(options[0].key);
  const [ampHours, setAmpHours] = useState(2);
  const [region, setRegion] = useState<AmazonStoreRegion>("US");

  useEffect(() => {
    setRegion(detectUserAmazonRegion());
  }, []);

  const p = options.find((o) => o.key === k) || options[0];
  const amzProd: AmazonProductRecommendation =
    CATALOG[p.productKey] || CATALOG.DEWALT_DCD777_BRUSHLESS;
  const amzUrl = buildAmazonUrl(amzProd, region);
  const storeName = region === "US" ? "Amazon.com" : "Amazon.es";

  const screwsPerCharge = Math.round(ampHours * 185);
  const concreteHoles = Math.round(ampHours * 28);
  const chargeMinutes = ampHours <= 2 ? 30 : ampHours <= 4 ? 45 : 60;

  return (
    <div className="grid items-stretch gap-6 lg:grid-cols-[1.05fr_1fr]">
      <div className="card card-static spot relative overflow-hidden p-6 sm:p-8">
        <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-fxblue/10 blur-3xl" />
        <div className="relative">
          <div
            className="inline-flex flex-wrap rounded-full bg-fxsky p-1 gap-1"
            role="tablist"
            aria-label="Selector de herramienta por presupuesto y trabajo"
          >
            {options.map((o) => (
              <button
                key={o.key}
                role="tab"
                type="button"
                aria-selected={o.key === k}
                onClick={() => setK(o.key)}
                className={`rounded-full px-3.5 py-2 text-xs sm:text-sm font-bold transition cursor-pointer ${
                  o.key === k
                    ? "bg-fxink text-amber-300 shadow"
                    : "text-[var(--muted)] hover:text-fxink"
                }`}
              >
                {o.label}
              </button>
            ))}
          </div>

          <div className="mt-6 grid items-center gap-6 sm:grid-cols-[1fr_1.2fr]">
            <div className="relative mx-auto aspect-[4/3] w-full max-w-[240px] overflow-hidden rounded-2xl border border-[var(--line)] shadow-sm">
              <Image
                key={p.img}
                src={p.img}
                alt={p.alt}
                fill
                sizes="240px"
                className="object-cover"
              />
            </div>
            <div>
              <span className="inline-block rounded-full bg-amber-100 px-2.5 py-0.5 text-[11px] font-extrabold text-amber-950">
                {amzProd.badge}
              </span>
              <p className="mt-1.5 font-display text-xl sm:text-2xl font-extrabold tracking-tight text-fxink leading-snug">
                {amzProd.title.split("—")[0].trim()}
              </p>
              <p className="mt-1 text-sm text-[var(--muted)] leading-relaxed">
                <strong className="text-fxink">Trabajo ideal:</strong>{" "}
                {p.idealFor}
              </p>
              <div className="mt-2.5 rounded-xl bg-fxsky p-2.5 text-xs space-y-1">
                <p className="font-bold text-fxbluedeep">
                  💵 Presupuesto: {p.budgetSpec}
                </p>
                <p className="font-semibold text-emerald-900">
                  🔋 Batería/Cargador: {p.batteryCompat}
                </p>
                <p className="font-semibold text-fxink">
                  🔩 Brocas y Puntas: {p.bitsCompat}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href={amzUrl}
              target="_blank"
              rel="nofollow sponsored noopener noreferrer"
              onClick={() =>
                trackClick(`finder-amazon-${p.key}`, {
                  article_slug: amzProd.id,
                  article_title: amzProd.title,
                  category: "amazon",
                  target_url: amzUrl,
                })
              }
              className="btn btn-buy shine flex-1 text-sm"
              data-magnetic
            >
              🛠️ Consultar precio en {storeName} ↗
            </a>
            <Link href={p.reviewHref} className="btn btn-ghost text-sm">
              Ver ficha y compatibles →
            </Link>
          </div>
        </div>
      </div>

      <div className="relative overflow-hidden rounded-[22px] bg-gradient-to-br from-[#090e1a] via-[#0f172a] to-[#1e293b] p-6 text-white sm:p-8">
        <div className="pointer-events-none absolute -bottom-24 -right-16 h-72 w-72 rounded-full bg-fxlime/15 blur-3xl" />
        <p className="text-xs font-bold uppercase tracking-[0.16em] text-fxlime">
          Calculadora de Amperaje (Ah) y Rendimiento por Carga
        </p>
        <h3 className="mt-2 font-display text-2xl font-extrabold sm:text-3xl">
          ¿Qué batería elegir: 1.5Ah, 2.0Ah, 4.0Ah o 5.0Ah?
        </h3>
        <p className="mt-2 text-sm text-white/75">
          Desliza la capacidad en Amperios-Hora (`Ah`) para estimar cuántos
          tornillos en melamina/madera o perforaciones en concreto rinde una
          carga completa.
        </p>
        <label
          htmlFor="ah-slider"
          className="mt-6 flex items-center justify-between text-sm font-semibold"
        >
          <span>Capacidad de la batería de litio</span>
          <span className="rounded-full bg-white/10 px-3.5 py-1 font-display text-lg text-fxlime">
            {ampHours.toFixed(1)} Ah
          </span>
        </label>
        <input
          id="ah-slider"
          type="range"
          min={1.5}
          max={5.0}
          step={0.5}
          value={ampHours}
          onChange={(e) => setAmpHours(Number(e.target.value))}
          className="mt-3 w-full accent-[#F59E0B]"
        />
        <div className="mt-1 flex justify-between text-[0.7rem] text-white/50">
          <span>1.5Ah (Ligera)</span>
          <span>2.0Ah (Estándar Kit)</span>
          <span>4.0Ah (Obra)</span>
          <span>5.0Ah (Máxima XR/LXT)</span>
        </div>

        <dl className="mt-6 grid grid-cols-3 gap-3 text-center">
          {[
            ["Tornillos / Carga", `~${screwsPerCharge} tornillos`],
            ["Agujeros 1/4\" Concreto", `~${concreteHoles} agujeros`],
            ["Carga Rápida Est.", `~${chargeMinutes} min`],
          ].map(([l, val], i) => (
            <div
              key={l}
              className={`glass flex flex-col-reverse p-3 ${
                i === 0 ? "border-fxlime/50 bg-fxlime/10" : ""
              }`}
            >
              <dt className="mt-1 text-[0.7rem] leading-tight text-white/65">
                {l}
              </dt>
              <dd
                className={`font-display font-extrabold ${
                  i === 0
                    ? "text-sm text-fxlime sm:text-base"
                    : "text-xs sm:text-base"
                }`}
              >
                {val}
              </dd>
            </div>
          ))}
        </dl>

        <div className="mt-5 flex flex-wrap items-center justify-between gap-2 pt-3 border-t border-white/10 text-xs text-white/65">
          <span>
            Consejo: usa <strong>2.0Ah</strong> para armar muebles sin cansar el
            brazo y <strong>4.0Ah / 5.0Ah</strong> para perforar paredes duras.
          </span>
          <OpenChatButton
            label="Confirmar batería compatible en el Chat IA"
            prompt={`Quiero saber si me conviene batería de ${ampHours.toFixed(1)}Ah para la opción "${p.label}" y qué cargador compatible elegir en Amazon EE. UU.`}
            className="text-fxlime font-bold hover:underline !bg-transparent !p-0"
          />
        </div>
      </div>
    </div>
  );
}
