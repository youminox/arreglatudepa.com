import type { Metadata } from "next";
import SimplePage from "@/components/SimplePage";
import {
  SITE_URL,
  LEGAL_OWNER,
  LEGAL_LOCATION,
  LEGAL_EMAIL,
} from "@/lib/content";

export const metadata: Metadata = {
  title: "Sobre Nosotros | ArreglaTuDepa.com",
  description: `Conoce la misión de ArreglaTuDepa.com, fundado por ${LEGAL_OWNER} en ${LEGAL_LOCATION}, la guía en español de herramientas y compatibilidad en Amazon EE. UU.`,
  alternates: { canonical: `${SITE_URL}/sobre-nosotros/` },
};

export default function SobreNosotrosPage() {
  return (
    <SimplePage
      title="Sobre ArreglaTuDepa.com"
      crumb="Sobre nosotros"
      href="/sobre-nosotros/"
      intro="Nacimos para que cualquier persona pueda elegir en español el taladro, destornillador o juego de herramientas exacto en Amazon Estados Unidos sin equivocarse de batería ni de broca."
    >
      <h2>¿Por qué creamos ArreglaTuDepa.com?</h2>
      <p>
        Quien vive en un departamento o quiere hacer mejoras en casa por su
        cuenta suele enfrentarse a cientos de códigos confusos en Amazon Estados
        Unidos: modelos que parecen idénticos pero vienen sin batería, diferencias
        entre <code>18V</code> y <code>20V MAX</code>, cargadores de{" "}
        <code>110V</code> o tornillos de melamina que se barren en segundos por
        usar la herramienta equivocada.
      </p>
      <p>
        En <strong>ArreglaTuDepa.com</strong> organizamos más de{" "}
        <strong>2,000 guías técnicas en español</strong> centradas en las marcas
        más confiables y fáciles de conseguir con repuestos en Amazon:{" "}
        <strong>DEWALT, Bosch, Makita y BLACK+DECKER</strong>.
      </p>

      <h2>Quién está detrás del proyecto</h2>
      <p>
        El portal es dirigido y editado por <strong>{LEGAL_OWNER}</strong>,
        domiciliado en <strong>{LEGAL_LOCATION}</strong>. Nuestro objetivo es
        combinar rigor técnico claro, tablas verificadas de compatibilidad de
        baterías, cargadores, brocas y puntas, y un Asesor IA gratuito que te
        ayude en segundos antes de comprar.
      </p>
      <ul>
        <li>
          <strong>Titular y Fundador:</strong> {LEGAL_OWNER}
        </li>
        <li>
          <strong>Sede:</strong> {LEGAL_LOCATION}
        </li>
        <li>
          <strong>Contacto directo:</strong>{" "}
          <a href={`mailto:${LEGAL_EMAIL}`}>{LEGAL_EMAIL}</a>
        </li>
      </ul>
    </SimplePage>
  );
}
