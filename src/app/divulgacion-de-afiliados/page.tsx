import type { Metadata } from "next";
import SimplePage from "@/components/SimplePage";
import {
  SITE_URL,
  LEGAL_OWNER,
  LEGAL_LOCATION,
  LEGAL_EMAIL,
} from "@/lib/content";
import { AMAZON_TAG_US, AMAZON_TAG_ES } from "@/lib/amazon";

export const metadata: Metadata = {
  title: "Divulgación de Afiliados de Amazon | ArreglaTuDepa.com",
  description: `Declaración transparente de participación en el Programa de Afiliados de Amazon Estados Unidos (${AMAZON_TAG_US}) y España (${AMAZON_TAG_ES}).`,
  alternates: { canonical: `${SITE_URL}/divulgacion-de-afiliados/` },
};

export default function DivulgacionAfiliadosPage() {
  return (
    <SimplePage
      title="Divulgación de Afiliados de Amazon"
      crumb="Divulgación de afiliados"
      href="/divulgacion-de-afiliados/"
      intro="Transparencia total sobre cómo financiamos nuestras más de 2,000 guías gratuitas en español sin ningún costo extra para ti."
    >
      <h2>1. Participación oficial en Amazon Associates</h2>
      <p>
        <strong>ArreglaTuDepa.com</strong>, sitio web titularidad de{" "}
        <strong>{LEGAL_OWNER}</strong> (domiciliado en {LEGAL_LOCATION} · email:{" "}
        <a href={`mailto:${LEGAL_EMAIL}`}>{LEGAL_EMAIL}</a>), participa en el
        Programa de Afiliados de <strong>Amazon.com Services LLC</strong>{" "}
        (Estados Unidos, ID de seguimiento: <code>{AMAZON_TAG_US}</code>) y en
        el Programa de Afiliados de <strong>Amazon EU</strong> (España, ID de
        seguimiento: <code>{AMAZON_TAG_ES}</code>).
      </p>
      <p>
        <em>
          &ldquo;En calidad de Afiliado de Amazon, ArreglaTuDepa.com obtiene
          ingresos por las compras adscritas que cumplen los requisitos
          aplicables.&rdquo;
        </em>
      </p>

      <h2>2. ¿Cambia el precio para ti al usar nuestros enlaces?</h2>
      <p>
        <strong>No, jamás pagas ni un centavo más.</strong> El precio que ves en
        Amazon Estados Unidos o Amazon España es exactamente el mismo que si
        entraras directamente por tu cuenta. La pequeña comisión que Amazon nos
        paga sale del margen comercial de la tienda y nos permite mantener en
        línea nuestro buscador de compatibilidad y el Asesor de Herramientas IA.
      </p>

      <h2>3. Independencia en nuestras recomendaciones técnicas</h2>
      <p>
        Ninguna marca (DEWALT, Bosch, Makita, BLACK+DECKER ni otra) paga por
        alterar las conclusiones técnicas de nuestras comparativas. Recomendamos
        tanto modelos económicos de menos de US$50 cuando cubren el trabajo del
        lector como equipos Brushless profesionales cuando el muro o la
        exigencia lo requieren.
      </p>
    </SimplePage>
  );
}
