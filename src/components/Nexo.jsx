import { motion } from "framer-motion";

export default function Nexo() {
  return (
    <section id="nexo" style={{ padding: "100px 5%", backgroundColor: "#FFFFFF", position: "relative", overflow: "hidden" }}>
      {/* Forma decorativa Lavanda de fondo */}
      <div style={{ position: "absolute", top: "-5%", left: "-5%", width: "400px", height: "400px", backgroundColor: "#C9B8E3", borderRadius: "50%", opacity: 0.4, zIndex: 0 }} />
      
      <div style={{ maxWidth: "1100px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={{ 
            backgroundColor: "#F9F6EF", 
            borderRadius: "30px", 
            padding: "60px", 
            border: "3px solid #147B80",
            boxShadow: "15px 15px 0px #C9B8E3"
          }}
        >
          {/* Título con tipografía manuscrita */}
          <h2 style={{ fontFamily: "'Great Vibes', cursive", fontSize: "clamp(50px, 7vw, 80px)", color: "#147B80", marginBottom: "20px", marginTop: "0" }}>
            Mi mundo con Nexo
          </h2>
          
          {/* Frase principal */}
          <p style={{ fontFamily: "Montserrat", fontSize: "clamp(20px, 3vw, 28px)", fontWeight: 700, color: "#1A1A1A", textTransform: "uppercase", letterSpacing: "2px", marginBottom: "40px", lineHeight: 1.3 }}>
            Todo comienza con una conexión...<br/>
            Y esa conexión puede<br/>
            <span style={{ color: "#147B80" }}>TRANSFORMARLO TODO</span>
          </p>
          
          {/* Descripción de Nexo */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "40px", alignItems: "center" }}>
            <div style={{ flex: "1 1 300px" }}>
              <h3 style={{ fontFamily: "Montserrat", fontSize: "24px", fontWeight: 800, color: "#147B80", marginBottom: "20px", textTransform: "uppercase" }}>
                ¿QUIÉN ES NEXO?
              </h3>
              <p style={{ fontFamily: "Montserrat", fontSize: "16px", lineHeight: 1.7, color: "#1A1A1A", marginBottom: "15px" }}>
                Soy el punto de encuentro donde las ideas toman forma. Represento la intuición y el impulso creativo que habita en cada trazo, color y movimiento.
              </p>
              <p style={{ fontFamily: "Montserrat", fontSize: "16px", lineHeight: 1.7, color: "#1A1A1A" }}>
                Vengo del resplandor, y acompaño a Ana Hernández en su viaje visual: transformar emociones en experiencias que conectan con la esencia humana.
              </p>
            </div>
            
            {/* Elemento visual decorativo (Colibrí o símbolo) */}
            <div style={{ 
              flex: "1 1 200px", 
              height: "250px", 
              backgroundColor: "#C9B8E3", 
              borderRadius: "20px", 
              display: "flex", 
              alignItems: "center", 
              justifyContent: "center",
              border: "3px solid #147B80"
            }}>
              <span style={{ fontSize: "80px" }}>🐦</span>
            </div>
          </div>
          
          {/* Frase final del manual */}
          <div style={{ marginTop: "50px", paddingTop: "30px", borderTop: "2px solid #147B80", textAlign: "center" }}>
            <p style={{ fontFamily: "'Great Vibes', cursive", fontSize: "clamp(28px, 4vw, 40px)", color: "#F3D46C", margin: 0, textShadow: "1px 1px 0px #147B80" }}>
              "El diseño es una experiencia que se siente antes de entenderse"
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}