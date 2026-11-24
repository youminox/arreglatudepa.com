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
  title: "Aviso Legal y Condiciones de Uso | ArreglaTuDepa.com",
  description: `Información legal oficial de ArreglaTuDepa.com, titularidad de ${LEGAL_OWNER}, domiciliado en ${LEGAL_LOCATION} (${LEGAL_EMAIL}).`,
  alternates: { canonical: `${SITE_URL}/aviso-legal/` },
};

export default function AvisoLegalPage() {
  return (
    <SimplePage
      title="Aviso Legal y Condiciones de Uso"
      crumb="Aviso legal"
      href="/aviso-legal/"
      intro="Identificación oficial del responsable del portal ArreglaTuDepa.com, condiciones generales de acceso, propiedad intelectual y limitación de responsabilidad técnica."
    >
      <h2>1. Datos identificativos del titular</h2>
      <p>
        En cumplimiento del deber de transparencia informativa aplicable al
        comercio electrónico y servicios digitales, se informa que el sitio web{" "}
        <strong>https://arreglatudepa.com</strong> (en adelante,{" "}
        <strong>ArreglaTuDepa.com</strong>) es propiedad y está operado por:
      </p>
      <ul>
        <li>
          <strong>Titular responsable:</strong> {LEGAL_OWNER}
        </li>
        <li>
          <strong>Domicilio legal:</strong> {LEGAL_LOCATION}
        </li>
        <li>
          <strong>Correo electrónico oficial de contacto:</strong>{" "}
          <a href={`mailto:${LEGAL_EMAIL}`}>{LEGAL_EMAIL}</a>
        </li>
      </ul>

      <h2>2. Objeto y naturaleza informativa del sitio web</h2>
      <p>
        ArreglaTuDepa.com es una guía editorial independiente en español
        orientada a ayudar a usuarios domésticos y aficionados al bricolaje a
        elegir herramientas eléctricas y manuales disponibles en Amazon Estados
        Unidos y Amazon España (tales como DEWALT, Bosch, Makita y
        BLACK+DECKER), comparando taladros, destornilladores eléctricos y juegos
        de herramientas según presupuesto y tipo de trabajo, e indicando qué
        baterías, cargadores, brocas, puntas y accesorios son compatibles.
      </p>

      <h2>3. Propiedad intelectual y marcas registradas</h2>
      <p>
        Los textos originales, comparativas, diseño e infografías de este sitio
        están protegidos por derechos de autor a favor de {LEGAL_OWNER}. Todas
        las marcas comerciales de terceros citadas con fines estrictamente
        descriptivos y de compatibilidad (Amazon, DEWALT, Bosch, Makita,
        BLACK+DECKER y sus respectivas denominaciones de baterías y accesorios)
        pertenecen a sus legítimos titulares.
      </p>

      <h2>4. Enlaces de afiliación a Amazon</h2>
      <p>
        ArreglaTuDepa.com participa en el Programa de Afiliados de Amazon.com
        Associates (ID de rastreo: <strong>{AMAZON_TAG_US}</strong>) y en el
        Programa de Afiliados de Amazon EU (ID de seguimiento:{" "}
        <strong>{AMAZON_TAG_ES}</strong>). Al hacer clic en enlaces hacia Amazon
        y realizar compras que cumplan los requisitos aplicables, el titular
        percibe una comisión publicitaria sin ningún incremento de precio para
        el usuario.
      </p>

      <h2>5. Seguridad en el uso de herramientas y limitación de responsabilidad</h2>
      <p>
        El uso de herramientas eléctricas rotativas o de impacto requiere leer
        siempre el manual oficial del fabricante, utilizar equipo de protección
        personal (gafas de seguridad, protección auditiva y mascarilla),
        verificar la ausencia de tuberías o cables eléctricos ocultos en muros y
        confirmar la compatibilidad de voltaje de red (110V–120V frente a 220V)
        antes de enchufar cargadores.
      </p>
    </SimplePage>
  );
}
