import type { Metadata } from "next";
import SimplePage from "@/components/SimplePage";
import {
  SITE_URL,
  LEGAL_OWNER,
  LEGAL_LOCATION,
  LEGAL_EMAIL,
} from "@/lib/content";

export const metadata: Metadata = {
  title: "Política de Cookies | ArreglaTuDepa.com",
  description: `Información sobre el uso de almacenamiento local y cookies en ArreglaTuDepa.com (${LEGAL_OWNER}, ${LEGAL_LOCATION}).`,
  alternates: { canonical: `${SITE_URL}/politica-de-cookies/` },
};

export default function CookiesPage() {
  return (
    <SimplePage
      title="Política de Cookies"
      crumb="Política de cookies"
      href="/politica-de-cookies/"
      intro="Detalle transparente sobre el uso de cookies técnicas, publicitarias y de atribución de afiliados en ArreglaTuDepa.com."
    >
      <h2>1. Almacenamiento técnico propio</h2>
      <p>
        ArreglaTuDepa.com utiliza claves ligeras en el almacenamiento local de
        tu navegador (<code>localStorage</code> y <code>sessionStorage</code>)
        estrictamente para recordar tu preferencia de tienda Amazon (
        <code>atd_amazon_region</code>: EE. UU. o España) y mantener el
        historial reciente de tu conversación con el Asesor de Herramientas IA (
        <code>atd_chat_session</code> y <code>atd_chat_messages</code>).
      </p>

      <h2>2. Cookies de terceros (Amazon y Google)</h2>
      <ul>
        <li>
          <strong>Amazon Associates:</strong> cuando haces clic voluntariamente
          en un enlace de afiliado hacia <code>amazon.com</code> o{" "}
          <code>amazon.es</code>, Amazon establece sus propias cookies en su
          dominio para atribuir correctamente las compras adscritas durante la
          ventana reglamentaria del programa.
        </li>
        <li>
          <strong>Google AdSense:</strong> este sitio puede mostrar anuncios
          gestionados por Google, que emplea cookies para medir impresiones y
          mostrar anuncios relevantes conforme a las políticas de privacidad de
          Google.
        </li>
      </ul>

      <h2>3. Cómo gestionar o eliminar cookies</h2>
      <p>
        Puedes borrar el almacenamiento local y bloquear cookies en cualquier
        momento desde la configuración de privacidad de Chrome, Safari, Firefox
        o Edge. Para cualquier consulta escribe a{" "}
        <strong>{LEGAL_OWNER}</strong> ({LEGAL_LOCATION}) en{" "}
        <a href={`mailto:${LEGAL_EMAIL}`}>{LEGAL_EMAIL}</a>.
      </p>
    </SimplePage>
  );
}
