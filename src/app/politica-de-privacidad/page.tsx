import type { Metadata } from "next";
import SimplePage from "@/components/SimplePage";
import {
  SITE_URL,
  LEGAL_OWNER,
  LEGAL_LOCATION,
  LEGAL_EMAIL,
} from "@/lib/content";

export const metadata: Metadata = {
  title: "Política de Privacidad | ArreglaTuDepa.com",
  description: `Política de privacidad y protección de datos personales de ArreglaTuDepa.com, gestionado por ${LEGAL_OWNER} (${LEGAL_LOCATION}).`,
  alternates: { canonical: `${SITE_URL}/politica-de-privacidad/` },
};

export default function PrivacidadPage() {
  return (
    <SimplePage
      title="Política de Privacidad"
      crumb="Política de privacidad"
      href="/politica-de-privacidad/"
      intro="Cómo protegemos y tratamos la información técnica y las consultas enviadas en ArreglaTuDepa.com."
    >
      <h2>1. Responsable del tratamiento de datos</h2>
      <ul>
        <li>
          <strong>Responsable:</strong> {LEGAL_OWNER}
        </li>
        <li>
          <strong>Domicilio:</strong> {LEGAL_LOCATION}
        </li>
        <li>
          <strong>Correo electrónico para ejercicio de derechos:</strong>{" "}
          <a href={`mailto:${LEGAL_EMAIL}`}>{LEGAL_EMAIL}</a>
        </li>
      </ul>

      <h2>2. Qué datos recopilamos y con qué finalidad</h2>
      <p>
        En ArreglaTuDepa.com no exigimos registro de cuenta ni recopilamos datos
        financieros. Únicamente se tratan los siguientes datos mínimos:
      </p>
      <ul>
        <li>
          <strong>Consultas en el Asesor de Herramientas IA:</strong> los
          mensajes enviados voluntariamente al chat en línea, junto con un
          identificador anónimo de sesión y la URL de consulta, se procesan para
          responder tus dudas técnicas sobre herramientas y compatibilidad y
          mejorar la calidad de nuestras guías. Te recomendamos no ingresar
          datos personales sensibles en el chat.
        </li>
        <li>
          <strong>Comunicaciones por correo electrónico:</strong> si nos
          escribes a <a href={`mailto:${LEGAL_EMAIL}`}>{LEGAL_EMAIL}</a>,
          utilizaremos tu dirección exclusivamente para atender tu mensaje.
        </li>
        <li>
          <strong>Métricas técnicas y atribución de afiliados:</strong> registro
          agregado de clics salientes hacia guías internas y productos de Amazon
          para medir el rendimiento editorial.
        </li>
      </ul>

      <h2>3. Normativa aplicable y derechos del usuario</h2>
      <p>
        Respetamos los principios de la Ley N.º 29733 (Ley de Protección de
        Datos Personales del Perú), así como los estándares internacionales del
        RGPD europeo y leyes estatales de privacidad de EE. UU. (CCPA/CPRA). En
        cualquier momento puedes solicitar el acceso, rectificación, supresión u
        oposición respecto de cualquier dato asociado a tu correo o sesión
        escribiendo a <a href={`mailto:${LEGAL_EMAIL}`}>{LEGAL_EMAIL}</a>.
      </p>
    </SimplePage>
  );
}
