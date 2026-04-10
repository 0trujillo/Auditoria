🛡️ Privara Consultores - Plataforma Corporativa
Sistema web desarrollado con React y Bootstrap para la firma consultora especializada en gobernanza digital, cumplimiento legal y protección de datos en el contexto chileno.

📋 Resumen del Proyecto
Privara es una plataforma diseñada para proyectar una imagen profesional y técnica, enfocada en la gestión de riesgos legales y tecnológicos. El diseño utiliza una paleta de colores Deep Forest Green (#0F2F24) y Mint Mist (#C6D6C8) para transmitir seriedad y modernidad.

Tecnologías Principales
Frontend: React.js.

Estilos: React-Bootstrap & CSS3 personalizado (con uso intensivo de CSS Grid y Flexbox).

Enrutamiento: React Router DOM.

Integraciones: EmailJS para la gestión del formulario de contacto.

🚀 Progreso de Desarrollo (Log)
Home & Hero: Implementación del banner principal con el mensaje central de gobernanza y cumplimiento en entornos digitales.

Navbar: Navegación responsiva con un botón de hamburguesa personalizado y efecto de línea activa en los enlaces.

Footer: Diseño de pie de página modular con secciones para servicios, contacto, redes y aviso legal.

Fase 2: Servicios y Contenidos (Completado)
Catálogo de Servicios: Sistema de tarjetas interactivas que consumen datos estructurados desde serviciosData.

Detalle de Servicio: Ruta dinámica (/servicios/:id) para mostrar la descripción profunda y los entregables de cada consultoría.

Metodología: Sección que desglosa el proceso de trabajo (Diagnóstico, Diseño, Implementación, Seguimiento).

Nosotros: Página de visión institucional sobre derecho digital y ciberseguridad.

Fase 3: Funcionalidad de Contacto (Completado)
Formulario Pro: Integración con EmailJS para envío directo de correos desde el cliente.

Validaciones: Campos obligatorios y manejo de estados (éxito/error) mediante alertas.
src/
├── components/
│   ├── NavbarComponent.jsx  # Navegación con sticky-top
│   ├── Footer.jsx           # Pie de página institucional
│   ├── Hero.jsx             # Sección de impacto principal
│   └── InfoSection.jsx      # Tabla de infracciones UTM
├── pages/
│   ├── Home.jsx             # Landing page
│   ├── Servicios.jsx        # Catálogo de consultorías
│   ├── ServicioDetalle.jsx  # Vista detallada dinámica
│   ├── Metodologia.jsx      # Flujo de trabajo
│   ├── Nosotros.jsx         # Historia y enfoque
│   └── Contacto.jsx         # Formulario con EmailJS
└── styles/
    └── [Cada componente tiene su propio .css para modularidad]

Parámetro,Valor Actual
Service ID,service_s0jb918
Template ID,template_1xgn5yn
Public Key,ly9TTYPvA92zkDVKu