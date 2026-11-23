import { motion } from "framer-motion";

export default function QuienSoy() {
  return (
    <section id="quiénsoy" style={{ padding: "80px 5%", backgroundColor: "#EBD5D5" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        
        {/* TÍTULO */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ textAlign: "center", marginBottom: "50px" }}>
          <h2 style={{ fontFamily: "Montserrat", fontSize: "clamp(50px, 7vw, 80px)", fontWeight: 900, color: "#7A2048", lineHeight: 1, textTransform: "uppercase", letterSpacing: "-2px" }}>
            ¿QUIÉN<br/>SOY?
          </h2>
          <div style={{ width: "80px", height: "6px", backgroundColor: "#D4AF37", margin: "20px auto 0" }} />
        </motion.div>

        {/* FILA 1: DESCRIPCIÓN + ILUSTRACIÓN */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "60px", alignItems: "center", marginBottom: "60px" }}>
          
          {/* Columna Izquierda: Texto */}
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} style={{ flex: "1 1 500px" }}>
            <p style={{ fontFamily: "Montserrat", fontSize: "16px", lineHeight: 1.6, color: "#1A1A1A", fontWeight: 500, marginBottom: "20px" }}>
              Hola, mi nombre es <strong>Ana Hernández</strong> y me especializo en el <strong>diseño crossmedia y desarrollo de medios digitales</strong>. Soy técnica en Marketing Digital y actualmente me encuentro en formación como tecnóloga en Desarrollo de Medios Gráficos Visuales, fortaleciendo mis conocimientos en diseño, composición, comunicación visual y producción de piezas gráficas.
            </p>
            <p style={{ fontFamily: "Montserrat", fontSize: "16px", lineHeight: 1.6, color: "#1A1A1A", fontWeight: 500 }}>
              Durante los últimos cuatro años he trabajado de manera independiente, colaborando con emprendimientos y marcas de diferentes sectores en el desarrollo de soluciones visuales orientadas a <strong>fortalecer su presencia digital</strong> y comunicar su identidad de forma estratégica.
            </p>
          </motion.div>

          {/* Columna Derecha: Ilustración (Recorte al 50%) */}
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} style={{ flex: "1 1 300px", display: "flex", justifyContent: "center" }}>
            <div style={{ 
              width: "300px", 
              height: "300px", 
              borderRadius: "100%", 
              overflow: "hidden", 
              border: "4px solid #7A2048", 
              boxShadow: "10px 10px 0px #D4AF37", 
              backgroundColor: "#EBD5D5" 
            }}>
              <img
                src="/imagenes/personaje.png"
                alt="Ilustración de Ana"
                style={{ 
                  width: "100%", 
                  height: "200%", 
                  objectFit: "cover", 
                  objectPosition: "center 100%", /* ¡AJUSTADO AL 50%! */
                  transform: "scale(1.0)" 
                }}
              />
            </div>
          </motion.div>
        </div>

        {/* FILA 2: TARJETAS (Formación y Certificaciones) */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "30px", justifyContent: "center" }}>
          
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ 
            flex: "1 1 450px", backgroundColor: "#7A2048", borderRadius: "20px", padding: "40px", color: "#F9F6EF", boxShadow: "0 15px 40px rgba(122, 32, 72, 0.25)"
          }}>
            <h3 style={{ fontFamily: "Montserrat", fontSize: "22px", fontWeight: 900, marginBottom: "30px", textTransform: "uppercase", color: "#D4AF37", margin: 0 }}>🎓 Formación Académica</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "25px" }}>
              <div style={{ borderBottom: "1px solid rgba(249, 246, 239, 0.2)", paddingBottom: "25px" }}>
                <p style={{ fontFamily: "Montserrat", fontSize: "18px", fontWeight: 700, color: "#F9F6EF", marginBottom: "8px", margin: 0 }}>Diseño Crossmedia</p>
                <p style={{ fontFamily: "Montserrat", fontSize: "14px", color: "#EBD5D5", marginBottom: "4px", margin: 0 }}>Universidad Cooperativa de Colombia, Medellín</p>
                <p style={{ fontFamily: "Montserrat", fontSize: "13px", color: "#D4AF37", fontWeight: 700, margin: 0 }}>2024 - Actualidad</p>
              </div>
              <div>
                <p style={{ fontFamily: "Montserrat", fontSize: "18px", fontWeight: 700, color: "#F9F6EF", marginBottom: "8px", margin: 0 }}>Curso Especializado en Concept Art</p>
                <p style={{ fontFamily: "Montserrat", fontSize: "14px", color: "#EBD5D5", marginBottom: "4px", margin: 0 }}>Universidad EAFIT, Medellín</p>
                <p style={{ fontFamily: "Montserrat", fontSize: "13px", color: "#D4AF37", fontWeight: 700, margin: 0 }}>2024 - 2025</p>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} style={{ 
            flex: "1 1 450px", backgroundColor: "#F9F6EF", borderRadius: "20px", padding: "40px", boxShadow: "0 15px 40px rgba(122, 32, 72, 0.15)"
          }}>
            <h3 style={{ fontFamily: "Montserrat", fontSize: "22px", fontWeight: 900, marginBottom: "30px", textTransform: "uppercase", color: "#7A2048", margin: 0 }}>✨ Certificaciones EAFIT 2025</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
              {["Fundamentos del Concept Art", "Fundamentos de Arte Digital", "Creación de modelos 3D", "Arte digital (nivel II)"].map((cert, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: "15px" }}>
                  <div style={{ width: "12px", height: "12px", borderRadius: "50%", backgroundColor: "#D4AF37", flexShrink: 0 }} />
                  <p style={{ fontFamily: "Montserrat", fontSize: "16px", fontWeight: 600, color: "#1A1A1A", margin: 0 }}>{cert}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}