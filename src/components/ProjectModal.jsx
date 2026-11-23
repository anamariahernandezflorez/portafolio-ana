import { useState } from "react";

export default function ProjectModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div style={{
      position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
      display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 10000, padding: '20px'
    }}>
      {/* Fondo difuminado */}
      <div 
        onClick={onClose}
        style={{
          position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
          background: 'rgba(249, 246, 239, 0.85)', backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)', cursor: 'pointer'
        }}
      />
      
      {/* Contenido del Modal */}
      <div style={{
        position: 'relative', background: '#FFFFFF', borderRadius: '24px',
        width: '100%', maxWidth: '600px', maxHeight: '90vh',
        display: 'flex', flexDirection: 'column', boxShadow: '0 12px 40px rgba(20, 123, 128, 0.15)', overflow: 'hidden', zIndex: 10
      }}>
        <button 
          onClick={onClose}
          style={{
            position: 'absolute', top: '16px', right: '16px', background: 'none', border: 'none',
            fontSize: '28px', color: '#999', cursor: 'pointer', width: '36px', height: '36px',
            display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', transition: 'background 0.2s'
          }}
          onMouseEnter={e => e.target.style.background = '#F5F5F5'}
          onMouseLeave={e => e.target.style.background = 'none'}
        >
          ×
        </button>

        <h2 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600, fontSize: '24px', color: '#147B80', margin: '32px 32px 12px', textAlign: 'center' }}>
          Planea tu proyecto con Ana Hernández
        </h2>
        <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '15px', color: '#555', textAlign: 'center', margin: '0 32px 24px', lineHeight: 1.5 }}>
          Cuéntame sobre tu idea, su propósito y el impacto que quieres lograr. Si resuena con mi enfoque creativo, te contactaré para construir algo extraordinario juntos.
        </p>

        <div style={{ flex: 1, overflowY: 'auto', padding: '0 32px 32px' }}>
          <form onSubmit={(e) => { e.preventDefault(); alert("¡Formulario enviado! (Conecta esto a FormSubmit o tu backend)"); onClose(); }}>
            {[
              { label: "Nombre completo", type: "text", name: "name", required: true },
              { label: "Correo electrónico", type: "email", name: "email", required: true },
              { label: "Teléfono / WhatsApp", type: "tel", name: "phone", required: true }
            ].map((field) => (
              <div key={field.name} style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', fontFamily: 'Montserrat, sans-serif', fontSize: '14px', color: '#1A1A1A', marginBottom: '8px', fontWeight: 500 }}>{field.label}</label>
                <input type={field.type} name={field.name} required={field.required} style={inputStyle} />
              </div>
            ))}

            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', fontFamily: 'Montserrat, sans-serif', fontSize: '14px', color: '#1A1A1A', marginBottom: '8px', fontWeight: 500 }}>Tipo de proyecto</label>
              <select name="projectType" required style={inputStyle}>
                <option value="">Selecciona una opción</option>
                <option value="Identidad visual">Identidad visual</option>
                <option value="Sitio web">Sitio web</option>
                <option value="Ilustración">Ilustración</option>
                <option value="Animación">Animación</option>
                <option value="Editorial">Editorial</option>
                <option value="Audiovisual">Audiovisual</option>
                <option value="Otro">Otro</option>
              </select>
            </div>

            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', fontFamily: 'Montserrat, sans-serif', fontSize: '14px', color: '#1A1A1A', marginBottom: '8px', fontWeight: 500 }}>Breve descripción del proyecto</label>
              <textarea name="description" rows="4" required style={{ ...inputStyle, minHeight: '100px', resize: 'vertical' }} />
            </div>

            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', fontFamily: 'Montserrat, sans-serif', fontSize: '14px', color: '#1A1A1A', marginBottom: '8px', fontWeight: 500 }}>Presupuesto aproximado (opcional)</label>
              <input type="text" name="budget" style={inputStyle} />
            </div>

            <p style={{ fontSize: '13px', color: '#777', margin: '16px 0 24px', textAlign: 'center', fontStyle: 'italic', lineHeight: 1.5 }}>
              Una vez envíes este formulario, revisaré tu información y me pondré en contacto contigo para definir los siguientes pasos.
            </p>

            <button type="submit" style={{
              width: '100%', padding: '14px', background: '#147B80', color: '#FFFFFF',
              fontFamily: 'Montserrat, sans-serif', fontWeight: 600, fontSize: '17px',
              border: 'none', borderRadius: '16px', cursor: 'pointer', transition: 'all 0.3s ease'
            }}
            onMouseEnter={e => { e.target.style.background = '#F3D46C'; e.target.style.color = '#1A1A1A'; }}
            onMouseLeave={e => { e.target.style.background = '#147B80'; e.target.style.color = '#FFFFFF'; }}>
              Enviar propuesta
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

// Estilo reutilizable para los inputs
const inputStyle = {
  width: '100%', padding: '12px 16px', border: '1px solid #EAE5DD', borderRadius: '12px',
  fontFamily: 'Montserrat, sans-serif', fontSize: '15px', transition: 'border 0.3s, box-shadow 0.3s', background: '#F9F6EF', outline: 'none'
};