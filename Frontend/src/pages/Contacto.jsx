import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Container, Form, Button } from "react-bootstrap";
import "./Contacto.css";

export default function Contacto() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // Reemplaza estos valores con tus credenciales de EmailJS
    const SERVICE_ID = "service_s0jb918";
    const TEMPLATE_ID = "template_1xgn5yn";
    const PUBLIC_KEY = "ly9TTYPvA92zkDVKu";

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then((result) => {
          alert("¡Mensaje enviado con éxito!");
          form.current.reset();
      }, (error) => {
          alert("Hubo un error al enviar el mensaje, por favor intenta de nuevo.");
      });
  };

  return (
    <div className="contact-wrapper">
      <Container className="py-5">

        {/* TITULO DE LA SECCIÓN */}
        <div className="contact-header">
          <h2>Comunícate con nosotros</h2>
          <p>
            Estamos aquí para ayudarte. Puedes escribirnos a través del formulario
            o utilizar cualquiera de nuestros canales de contacto.
          </p>
        </div>

        <div className="contact-grid">
          
          {/* SECCIÓN IZQUIERDA: INFO */}
          <div className="contact-left">
            <div className="contact-card">
              <h4 className="contact-section-title">Datos de contacto</h4>
              <ContactItem label="EMAIL" value="Contacto@privara.cl" />
              <ContactItem label="TELÉFONO" value="+56 9 8139 2664" />
              <ContactItem label="DIRECCIÓN" value="Santiago, Chile" />
              <ContactItem label="HORARIO" value="Lunes a Viernes 9:00 - 17:00" />
            </div>
          </div>

          {/* SECCIÓN DERECHA: FORMULARIO */}
          <div className="contact-right">
            <div className="contact-card">
              <h4 className="contact-section-title">Formulario de contacto</h4>

              {/* Añadimos el ref y el onSubmit */}
              <Form ref={form} onSubmit={sendEmail} className="contact-form-pro">

                <div>
                  <label>NOMBRE</label>
                  <Form.Control 
                    name="user_name" 
                    placeholder="Tu nombre completo" 
                    required 
                  />
                </div>

                <div>
                  <label>EMAIL</label>
                  <Form.Control 
                    name="user_email" 
                    placeholder="tu@correo.com" 
                    type="email" 
                    required 
                  />
                </div>

                <div>
                  <label>TELÉFONO</label>
                  <Form.Control 
                    name="user_phone" 
                    placeholder="Ej: +56 9 6843 4272" 
                  />
                </div>

                <div className="textarea-col">
                  <label>MENSAJE</label>
                  <Form.Control 
                    as="textarea"
                    name="message"
                    placeholder="Cuéntanos tu caso y contexto (empresa, industria, urgencia, etc.)"
                    required
                    style={{ minHeight: '120px' }}
                  />
                </div>

                <div className="contact-btn-wrap">
                  <Button type="submit" className="btn-contact-pro">
                    Enviar Mensaje →
                  </Button>
                </div>

              </Form>

            </div>
          </div>

        </div>
      </Container>
    </div>
  );
}

function ContactItem({ label, value }) {
  return (
    <div className="contact-item">
      <span>{label}</span>
      <p>{value}</p>
    </div>
  );
}