// IMPORTS correctos (con nombres reales)
import dpd from "../assets/img/DPD.jpg";
import ciberseguridad from "../assets/img/ciberseguridad.webp";
import compliance from "../assets/img/compliance.jpg";

export const serviciosData = [
  {
    id: "proteccion-datos-personales",
    titulo: "PROTECCIÓN DE DATOS PERSONALES",
    subtitulo: "Servicios de cumplimiento normativo",
    descripcion:
      "Aseguramos que tu empresa cumpla con las regulaciones de protección de datos actuales.",
    detalles: [
      "Diagnóstico de cumplimiento.",
      "Implementación de la Ley 21.719.",
      "Elaboración de políticas y documentos.",
      "Registro de actividades de tratamiento (RAT).",
      "DPO as an service."
    ],
    imagen: dpd // Usando DPD.jpg para protección de datos
  },
  {
    id: "ciberseguridad-gestion-riesgos",
    titulo: "CIBERSEGURIDAD Y GESTIÓN DE RIESGOS",
    subtitulo: "Seguridad de la información",
    descripcion:
      "Protegemos tus activos digitales y gestionamos los riesgos de seguridad.",
    detalles: [
      "Implementación de la Ley Marco de Ciberseguridad.",
      "Identificación y evaluación de riesgos.",
      "Diseño de controles y medidas.",
      "CISO as an service."
    ],
    imagen: ciberseguridad // Usando ciberseguridad.webp
  },
  {
    id: "compliance-gobernanza",
    titulo: "COMPLIANCE Y GOBERNANZA",
    subtitulo: "Gobernanza corporativa y control",
    descripcion:
      "Implementamos estructuras de cumplimiento corporativo y legal.",
    detalles: [
      "Diseño de modelos de gobernanza.",
      "Programas de cumplimiento.",
      "Mapas de riesgo.",
      "Gobierno corporativo.",
      "Responsabilidad penal de las empresas."
    ],
    imagen: compliance // Usando compliance.jpg
  }
];