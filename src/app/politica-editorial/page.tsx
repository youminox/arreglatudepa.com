import type { Metadata } from "next";
import SimplePage from "@/components/SimplePage";
import {
  SITE_URL,
  LEGAL_OWNER,
  LEGAL_LOCATION,
  LEGAL_EMAIL,
} from "@/lib/content";

export const metadata: Metadata = {
  title: "Política Editorial y Metodología Técnica | ArreglaTuDepa.com",
  description: `Cómo evaluamos taladros, destornilladores, kits, baterías y brocas compatibles en ArreglaTuDepa.com (${LEGAL_OWNER}).`,
  alternates: { canonical: `${SITE_URL}/politica-editorial/` },
};

export default function PoliticaEditorialPage() {
  return (
    <SimplePage
      title="Política Editorial y Metodología Técnica"
      crumb="Política editorial"
      href="/politica-editorial/"
      intro="Los criterios de ingeniería y compatibilidad que aplicamos en cada guía de ArreglaTuDepa.com."
    >
      <h2>1. Dirección editorial responsable</h2>
      <p>
        Toda la estructura editorial de <strong>ArreglaTuDepa.com</strong> está
        supervisada por <strong>{LEGAL_OWNER}</strong> ({LEGAL_LOCATION} ·{" "}
        <a href={`mailto:${LEGAL_EMAIL}`}>{LEGAL_EMAIL}</a>).
      </p>

      <h2>2. Nuestros 4 criterios de verificación</h2>
      <ul>
        <li>
          <strong>1. Presupuesto transparente en Amazon EE. UU.:</strong>{" "}
          distinguimos claramente el costo de equipos <em>Bare Tool</em>{" "}
          (terminados en B o Z, sin batería) frente a <em>Kits completos</em>{" "}
          (terminados en C1, C2, D1, D2 o P2).
        </li>
        <li>
          <strong>2. Adecuación real al tipo de trabajo:</strong> separamos las
          herramientas de embrague suave para melamina y muebles de los taladros
          percutores necesarios para placas de concreto armado y ladrillo.
        </li>
        <li>
          <strong>3. Compatibilidad exacta de baterías y cargadores:</strong>{" "}
          documentamos los códigos oficiales de riel y voltaje (DEWALT 20V MAX
          vs 12V XTREME, Bosch 12V Max vs 18V CORE18V, Makita 18V LXT vs 12V CXT
          y BLACK+DECKER 20V PowerConnect), así como las precauciones eléctricas
          de 110V frente a 220V.
        </li>
        <li>
          <strong>4. Compatibilidad mecánica de mandriles y accesorios:</strong>{" "}
          especificamos capacidades en pulgadas y milímetros (3/8&quot;,
          1/2&quot;, 1/4&quot; Hex y SDS-Plus).
        </li>
      </ul>

      <h2>3. Correcciones y actualización</h2>
      <p>
        Si detectas que un fabricante ha actualizado el código de un kit o
        deseas sugerir la revisión de un modelo específico, escríbenos a{" "}
        <a href={`mailto:${LEGAL_EMAIL}`}>{LEGAL_EMAIL}</a>.
      </p>
    </SimplePage>
  );
}
