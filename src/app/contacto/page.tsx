import type { Metadata } from "next";
import SimplePage from "@/components/SimplePage";
import OpenChatButton from "@/components/OpenChatButton";
import {
  SITE_URL,
  LEGAL_OWNER,
  LEGAL_LOCATION,
  LEGAL_EMAIL,
} from "@/lib/content";

export const metadata: Metadata = {
  title: "Contacto Oficial | ArreglaTuDepa.com",
  description: `Comunícate con ${LEGAL_OWNER} (${LEGAL_LOCATION}) en ${LEGAL_EMAIL} o consulta a nuestro Asesor de Herramientas IA.`,
  alternates: { canonical: `${SITE_URL}/contacto/` },
};

export default function ContactoPage() {
  return (
    <SimplePage
      title="Contacto"
      crumb="Contacto"
      href="/contacto/"
      intro="¿Tienes dudas sobre compatibilidad de herramientas, sugerencias editoriales o consultas sobre el sitio? Estamos a tu disposición."
    >
      <h2>1. Datos de contacto directo</h2>
      <ul>
        <li>
          <strong>Responsable:</strong> {LEGAL_OWNER}
        </li>
        <li>
          <strong>Ubicación:</strong> {LEGAL_LOCATION}
        </li>
        <li>
          <strong>Correo electrónico oficial:</strong>{" "}
          <a href={`mailto:${LEGAL_EMAIL}`}>{LEGAL_EMAIL}</a>
        </li>
      </ul>

      <h2>2. Respuesta inmediata para elegir herramientas y repuestos</h2>
      <p>
        Si necesitas saber hoy mismo qué taladro, destornillador eléctrico,
        juego de herramientas, batería, cargador o set de brocas comprar en
        Amazon Estados Unidos según tu presupuesto y tipo de pared, nuestro{" "}
        <strong>Asesor de Herramientas IA</strong> te responde en segundos las
        24 horas:
      </p>
      <div className="my-6">
        <OpenChatButton
          label="Abrir Asesor de Herramientas IA Ahora"
          className="btn btn-buy shine"
        />
      </div>
    </SimplePage>
  );
}
