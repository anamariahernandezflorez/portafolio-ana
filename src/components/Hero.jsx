import { motion } from "framer-motion";

export default function Hero() {
  const yearText = "2026";

  return (
    <section id="inicio" style={{ 
      backgroundColor: "#7A2048", /* Fondo Vino Elegante */
      padding: "0 5%", 
      minHeight: "100vh", /* Ocupa toda la altura de la pantalla */
      display: "flex", 
      flexDirection: "column", 
      justifyContent: "center", /* Centra todo verticalmente */
      position: "relative", 
      overflow: "hidden" 
    }}>
      
      {/* Estilos CSS para la animación del 2026 */}
      <style>{`
        @keyframes popIn {
          0% { opacity: 0; transform: translateY(30px) scale(0.8); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        .letter-anim {
          display: inline-block;
          opacity: 0;
          animation: popIn 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
        }
      `}</style>

      {/* Resplandor dorado sutil de fondo */}
      <div style={{ position: "absolute", top: "10%", right: "-5%", width: "500px", height: "500px", backgroundColor: "#D4AF37", borderRadius: "50%", filter: "blur(120px)", opacity: 0.1, zIndex: 0 }} />
      
      <div style={{ 
        display: "flex", 
        flexWrap: "wrap", 
        alignItems: "center", 
        justifyContent: "space-between", 
        gap: "40px", 
        maxWidth: "1400px", 
        margin: "0 auto", 
        width: "100%", 
        position: "relative", 
        zIndex: 1,
        padding: "80px 0" /* Espacio arriba y abajo para que no quede pegado a los bordes */
      }}>
        
        {/* COLUMNA IZQUIERDA: TEXTO */}
        <div style={{ flex: "1 1 500px", position: "relative" }}>
          
          {/* 1. Etiqueta Comercial Superior (Eyebrow) */}
          <p style={{ 
            fontFamily: "Montserrat, sans-serif", 
            fontSize: "12px", 
            fontWeight: 700, 
            color: "#D4AF37", /* Oro */
            letterSpacing: "4px", 
            textTransform: "uppercase",
            marginBottom: "15px"
          }}>
            Studio Creative
          </p>

          {/* 2. Ana Hernández */}
          <div style={{ marginBottom: "25px" }}>
            <h2 style={{ 
              fontFamily: "Montserrat, sans-serif", 
              fontSize: "clamp(18px, 2.5vw, 24px)", 
              fontWeight: 700, 
              color: "#F9F6EF", 
              margin: 0, 
              letterSpacing: "2px" 
            }}>
              Ana Hernández
            </h2>
            <div style={{ width: "100px", height: "3px", backgroundColor: "#D4AF37", marginTop: "10px" }} />
          </div>

          {/* Contenedor para PORTAFOLIO y 2026 */}
          <div style={{ position: "relative", display: "inline-block" }}>
            
            {/* 3. PORTAFOLIO */}
            <h1 style={{ 
              fontFamily: "Montserrat, sans-serif", 
              fontSize: "clamp(90px, 14vw, 180px)", 
              fontWeight: 900, 
              lineHeight: 0.85, 
              margin: 0, 
              textTransform: "uppercase", 
              letterSpacing: "-6px", 
              color: "#FFFFFF" 
            }}>
              PORTA<br/>FOLIO
            </h1>

            {/* 4. 2026 Animado */}
            <h3 style={{ 
              position: "absolute", 
              top: "50%", 
              left: "45%", 
              transform: "translate(-50%, -50%)", 
              fontFamily: "'Great Vibes', cursive", 
              fontSize: "clamp(50px, 7vw, 90px)", 
              fontWeight: 400, 
              color: "#D4AF37", 
              margin: 0, 
              zIndex: 2, 
              textShadow: "3px 3px 0px #4A1028", 
              display: "flex",
              gap: "2px"
            }}>
              {yearText.split("").map((letter, i) => (
                <span 
                  key={i} 
                  className="letter-anim" 
                  style={{ animationDelay: `${1 + i * 0.15}s` }} 
                >
                  {letter}
                </span>
              ))}
            </h3>
          </div>

          {/* 5. Instagram (Estilo enlace premium) */}
          <a 
            href="https://instagram.com/anahernandez_design" 
            target="_blank" 
            rel="noopener noreferrer" 
            style={{ 
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              fontFamily: "Montserrat, sans-serif", 
              fontSize: "15px", 
              marginTop: "35px", 
              color: "#F9F6EF", 
              fontWeight: 500, 
              letterSpacing: "1px", 
              textDecoration: "none",
              borderBottom: "1px solid rgba(249, 246, 239, 0.3)",
              paddingBottom: "4px",
              transition: "all 0.3s"
            }}
            onMouseEnter={e => { e.target.style.borderBottom = "1px solid #D4AF37"; e.target.style.color = "#D4AF37"; }}
            onMouseLeave={e => { e.target.style.borderBottom = "1px solid rgba(249, 246, 239, 0.3)"; e.target.style.color = "#F9F6EF"; }}
          >
            <span style={{ fontSize: "18px" }}>📷</span> @anahernandez_design
          </a>
        </div>

        {/* COLUMNA DERECHA: FOTO */}
        <div style={{ 
          flex: "1 1 400px", 
          height: "clamp(400px, 60vh, 750px)", /* Altura adaptable: 400px en móvil, hasta 750px en PC */
          position: "relative", 
          zIndex: 10, 
          overflow: "hidden", 
          borderRadius: "4px" /* Un borde muy sutil para que se vea más editorial */
        }}>
          <img 
            src="/imagenes/FotoHero.png" 
            alt="Ana Hernández" 
            style={{ 
              width: "100%", 
              height: "100%", 
              objectFit: "cover", 
              objectPosition: "center top", /* Mantiene la cabeza visible */
              filter: "grayscale(100%)", 
              transition: "filter 0.6s ease",
              display: "block"
            }}
            onMouseEnter={e => e.target.style.filter = "grayscale(0%)"}
            onMouseLeave={e => e.target.style.filter = "grayscale(100%)"}
          />
        </div>
      </div>

      {/* 6. Indicador de Scroll (CTA) */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 0.7, y: 0 }} 
        transition={{ delay: 2.5, duration: 1 }}
        style={{ 
          position: "absolute", 
          bottom: "30px", 
          left: "50%", 
          transform: "translateX(-50%)", 
          display: "flex", 
          flexDirection: "column", 
          alignItems: "center", 
          gap: "8px", 
          color: "#F9F6EF",
          cursor: "pointer"
        }}
        onClick={() => {
          document.getElementById('quiénsoy')?.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        <span style={{ fontFamily: "Montserrat", fontSize: "11px", letterSpacing: "3px", textTransform: "uppercase" }}>Explorar</span>
        <motion.span 
          animate={{ y: [0, 6, 0] }} 
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          style={{ fontSize: "20px" }}
        >
          ↓
        </motion.span>
      </motion.div>

    </section>
  );
}