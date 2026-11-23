import { useState } from "react";
import { motion } from "framer-motion";

export default function Contacto() {
  const [estadoEnvio, setEstadoEnvio] = useState(null); // 'enviando' | 'exito' | 'error'

  const handleSubmit = async (e) => {
    e.preventDefault();
    setEstadoEnvio('enviando');

    const formData = new FormData(e.target);
    const data = {
      nombre: formData.get('nombre'),
      email: formData.get('email'),
      celular: formData.get('celular'),
      momento: formData.get('momento'),
      mensaje: formData.get('mensaje')
    };

    try {
      const response = await fetch('http://localhost:3000/api/messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });

      const result = await response.json();

      if (response.ok) {
        setEstadoEnvio('exito');
        e.target.reset(); // Limpia el formulario
        setTimeout(() => setEstadoEnvio(null), 6000); // Oculta el mensaje después de 6 seg
      } else {
        setEstadoEnvio('error');
        setTimeout(() => setEstadoEnvio(null), 6000);
      }
    } catch (error) {
      console.error("Error al enviar:", error);
      setEstadoEnvio('error');
      setTimeout(() => setEstadoEnvio(null), 6000);
    }
  };

  return (
    <section id="contacto" style={{ padding: "100px 5%", backgroundColor: "#F9F6EF", position: "relative", overflow: "hidden" }}>
      {/* Círculo decorativo sutil de fondo */}
      <div style={{ position: "absolute", top: "-10%", right: "-10%", width: "500px", height: "500px", backgroundColor: "#D4AF37", borderRadius: "50%", opacity: 0.05, zIndex: 0 }} />
      
      <div style={{ maxWidth: "1100px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        
        {/* --- PARTE SUPERIOR: TÍTULO, FOTO Y DATOS --- */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "50px", alignItems: "center", marginBottom: "60px" }}>
          
          {/* Columna Izquierda: Texto y Datos */}
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} style={{ flex: "1 1 400px" }}>
            <p style={{ fontFamily: "Montserrat", fontSize: "12px", marginBottom: "10px", color: "#1A1A1A", fontWeight: 600, letterSpacing: "2px", textTransform: "uppercase" }}>
              Ana Hernández Studio Creative
            </p>
            <h2 style={{ fontFamily: "Montserrat", fontSize: "clamp(50px, 8vw, 80px)", fontWeight: 900, lineHeight: 0.9, margin: 0, textTransform: "uppercase", color: "#7A2048", letterSpacing: "-2px" }}>
              CONTÁCTANOS
            </h2>
            <h3 style={{ fontFamily: "'Great Vibes', cursive", fontSize: "clamp(35px, 5vw, 60px)", color: "#D4AF37", margin: "0 0 20px 15px", transform: "rotate(-3deg)", textShadow: "1px 1px 0px rgba(122, 32, 72, 0.1)" }}>
              ¡Gracias!
            </h3>
            <p style={{ fontFamily: "Montserrat", fontSize: "16px", lineHeight: 1.6, marginBottom: "30px", maxWidth: "450px", color: "#1A1A1A" }}>
              Si llegaste hasta aquí, es porque algo de mi trabajo conectó contigo. <br/>
              <strong>Cuéntame sobre tu idea y llevemos tu proyecto al siguiente nivel.</strong>
            </p>
            
            {/* Datos de contacto rápidos */}
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <a href="mailto:anamariahernandezflorez@gmail.com" style={{ display: "flex", alignItems: "center", gap: "12px", color: "#1A1A1A", textDecoration: "none", fontFamily: "Montserrat", fontSize: "15px", fontWeight: 500 }}>
                <span style={{ color: "#7A2048", fontSize: "18px" }}>✉️</span> anamariahernandezflorez@gmail.com
              </a>
              <a href="https://wa.me/573108253629" target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", gap: "12px", color: "#1A1A1A", textDecoration: "none", fontFamily: "Montserrat", fontSize: "15px", fontWeight: 500 }}>
                <span style={{ color: "#7A2048", fontSize: "18px" }}>📱</span> +57 310 825 3629
              </a>
              <a href="https://instagram.com/anahernandez_design" target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", gap: "12px", color: "#1A1A1A", textDecoration: "none", fontFamily: "Montserrat", fontSize: "15px", fontWeight: 500 }}>
                <span style={{ color: "#7A2048", fontSize: "18px" }}>📷</span> @anahernandez_design
              </a>
            </div>
          </motion.div>

          {/* Columna Derecha: Foto */}
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }} viewport={{ once: true }} style={{ flex: "1 1 300px", display: "flex", justifyContent: "center" }}>
            <div style={{ width: "100%", maxWidth: "320px", aspectRatio: "3/4", backgroundColor: "#EBD5D5", borderRadius: "20px", overflow: "hidden", border: "4px solid #7A2048", boxShadow: "15px 15px 0px #D4AF37", position: "relative" }}>
              <motion.img 
                src="/imagenes/fotocontacto.jpg" 
                alt="Ana Hernández"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6 }}
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                onError={(e) => { 
                  e.target.style.display = 'none'; 
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              {/* Fallback por si la imagen no carga */}
              <div style={{ display: "none", width: "100%", height: "100%", alignItems: "center", justifyContent: "center", color: "#7A2048", fontFamily: "Montserrat", fontWeight: 700, fontSize: "14px", textAlign: "center", padding: "20px" }}>
                [ Foto de Ana ]
              </div>
            </div>
          </motion.div>
        </div>

        {/* --- PARTE INFERIOR: EL FORMULARIO INDEPENDIENTE --- */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }} 
          viewport={{ once: true }} 
          style={{ 
            backgroundColor: "#FFFFFF", 
            borderRadius: "24px", 
            padding: "clamp(30px, 5vw, 60px)", 
            boxShadow: "0 20px 50px rgba(122, 32, 72, 0.08)",
            border: "1px solid #EBD5D5"
          }}
        >
          <div style={{ marginBottom: "40px", borderBottom: "1px solid #EBD5D5", paddingBottom: "20px" }}>
            <h3 style={{ fontFamily: "Montserrat", fontSize: "24px", fontWeight: 800, color: "#7A2048", margin: 0, textTransform: "uppercase", letterSpacing: "-1px" }}>
              Envíanos tu propuesta
            </h3>
            <p style={{ fontFamily: "Montserrat", fontSize: "14px", color: "#888", marginTop: "8px", margin: 0 }}>
              Completa el siguiente formulario y me pondré en contacto contigo.
            </p>
          </div>

          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "25px" }}>
            
            {/* Fila 1: Nombre Completo */}
            <div>
              <label style={{ fontFamily: "Montserrat", fontSize: "11px", fontWeight: 700, color: "#7A2048", textTransform: "uppercase", letterSpacing: "1px", display: "block", marginBottom: "8px" }}>Nombre Completo *</label>
              <input type="text" name="nombre" required placeholder="Escribe tu nombre completo" style={{ width: "100%", padding: "14px", border: "1px solid #EBD5D5", borderRadius: "8px", fontFamily: "Montserrat", fontSize: "14px", outline: "none", boxSizing: "border-box", transition: "border 0.3s" }} onFocus={(e) => e.target.style.borderColor = "#D4AF37"} onBlur={(e) => e.target.style.borderColor = "#EBD5D5"} />
            </div>

            {/* Fila 2: Correo y Celular */}
            <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
              <div style={{ flex: 1, minWidth: "250px" }}>
                <label style={{ fontFamily: "Montserrat", fontSize: "11px", fontWeight: 700, color: "#7A2048", textTransform: "uppercase", letterSpacing: "1px", display: "block", marginBottom: "8px" }}>Correo Electrónico *</label>
                <input type="email" name="email" required placeholder="tucorreo@ejemplo.com" style={{ width: "100%", padding: "14px", border: "1px solid #EBD5D5", borderRadius: "8px", fontFamily: "Montserrat", fontSize: "14px", outline: "none", boxSizing: "border-box", transition: "border 0.3s" }} onFocus={(e) => e.target.style.borderColor = "#D4AF37"} onBlur={(e) => e.target.style.borderColor = "#EBD5D5"} />
              </div>
              <div style={{ flex: 1, minWidth: "250px" }}>
                <label style={{ fontFamily: "Montserrat", fontSize: "11px", fontWeight: 700, color: "#7A2048", textTransform: "uppercase", letterSpacing: "1px", display: "block", marginBottom: "8px" }}>Celular o WhatsApp *</label>
                <input type="tel" name="celular" required placeholder="+57 300 000 0000" style={{ width: "100%", padding: "14px", border: "1px solid #EBD5D5", borderRadius: "8px", fontFamily: "Montserrat", fontSize: "14px", outline: "none", boxSizing: "border-box", transition: "border 0.3s" }} onFocus={(e) => e.target.style.borderColor = "#D4AF37"} onBlur={(e) => e.target.style.borderColor = "#EBD5D5"} />
              </div>
            </div>

            {/* Fila 3: Momento actual */}
            <div>
              <label style={{ fontFamily: "Montserrat", fontSize: "11px", fontWeight: 700, color: "#7A2048", textTransform: "uppercase", letterSpacing: "1px", display: "block", marginBottom: "8px" }}>¿En qué momento te encuentras actualmente? *</label>
              <select name="momento" required style={{ width: "100%", padding: "14px", border: "1px solid #EBD5D5", borderRadius: "8px", fontFamily: "Montserrat", fontSize: "14px", outline: "none", backgroundColor: "#FFF", boxSizing: "border-box", cursor: "pointer", transition: "border 0.3s" }} onFocus={(e) => e.target.style.borderColor = "#D4AF37"} onBlur={(e) => e.target.style.borderColor = "#EBD5D5"}>
                <option value="" disabled selected>Selecciona una opción...</option>
                <option value="Buscando empleo">Buscando empleo</option>
                <option value="Quiero cambiar de trabajo">Quiero cambiar de trabajo</option>
                <option value="Quiero crecer dentro de mi empresa">Quiero crecer dentro de mi empresa</option>
                <option value="Quiero emprender o independizarme">Quiero emprender o independizarme</option>
                <option value="Ya tengo un negocio pero quiero estructurarlo mejor">Ya tengo un negocio pero quiero estructurarlo mejor</option>
              </select>
            </div>

            {/* Fila 4: Mensaje */}
            <div>
              <label style={{ fontFamily: "Montserrat", fontSize: "11px", fontWeight: 700, color: "#7A2048", textTransform: "uppercase", letterSpacing: "1px", display: "block", marginBottom: "8px" }}>¿Qué te gustaría trabajar o lograr en un proceso conmigo? *</label>
              <textarea name="mensaje" required rows="4" placeholder="Cuéntame sobre tu idea, su propósito y el impacto que quieres lograr..." style={{ width: "100%", padding: "14px", border: "1px solid #EBD5D5", borderRadius: "8px", fontFamily: "Montserrat", fontSize: "14px", outline: "none", resize: "vertical", boxSizing: "border-box", transition: "border 0.3s" }} onFocus={(e) => e.target.style.borderColor = "#D4AF37"} onBlur={(e) => e.target.style.borderColor = "#EBD5D5"} />
            </div>

            {/* Botón de Envío */}
            <motion.button 
              type="submit" 
              disabled={estadoEnvio === 'enviando'}
              whileHover={{ scale: estadoEnvio === 'enviando' ? 1 : 1.02 }} 
              whileTap={{ scale: estadoEnvio === 'enviando' ? 1 : 0.98 }}
              style={{ 
                width: "100%", padding: "18px", backgroundColor: estadoEnvio === 'enviando' ? "#a04060" : "#7A2048", color: "#FFFFFF", 
                border: "none", borderRadius: "50px", fontFamily: "Montserrat", fontSize: "16px", 
                fontWeight: 700, textTransform: "uppercase", letterSpacing: "2px", 
                cursor: estadoEnvio === 'enviando' ? "not-allowed" : "pointer",
                boxShadow: "0 10px 25px rgba(122, 32, 72, 0.25)", marginTop: "10px",
                transition: "background-color 0.3s"
              }}
            >
              {estadoEnvio === 'enviando' ? 'Enviando...' : 'Enviar Propuesta'}
            </motion.button>

            {/* MENSAJES DE ESTADO (Feedback visual) */}
            {estadoEnvio === 'exito' && (
              <div style={{ padding: "15px", backgroundColor: "#d4edda", color: "#155724", borderRadius: "8px", fontFamily: "Montserrat", fontSize: "14px", textAlign: "center", border: "1px solid #c3e6cb" }}>
                ✅ ¡Mensaje enviado con éxito! Te contactaré pronto.
              </div>
            )}
            {estadoEnvio === 'error' && (
              <div style={{ padding: "15px", backgroundColor: "#f8d7da", color: "#721c24", borderRadius: "8px", fontFamily: "Montserrat", fontSize: "14px", textAlign: "center", border: "1px solid #f5c6cb" }}>
                ❌ Hubo un error al enviar. Por favor, verifica que el servidor esté activo o intenta de nuevo.
              </div>
            )}

            {/* Aviso Informativo */}
            <p style={{ fontFamily: "Montserrat", fontSize: "12px", color: "#888", textAlign: "center", lineHeight: 1.5, margin: 0 }}>
              Una vez envíes este formulario, revisaré tu información y me pondré en contacto contigo para definir los siguientes pasos.
            </p>
          </form>
        </motion.div>

      </div>
    </section>
  );
}