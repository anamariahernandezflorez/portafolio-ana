import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ backgroundColor: "#7A2048", color: "#F9F6EF", padding: "60px 5% 20px", fontFamily: "Montserrat", position: "relative", overflow: "hidden" }}>
      
      {/* Resplandor dorado sutil de fondo */}
      <div style={{ position: "absolute", bottom: "-20%", left: "-10%", width: "400px", height: "400px", backgroundColor: "#D4AF37", borderRadius: "50%", filter: "blur(100px)", opacity: 0.15, zIndex: 0 }} />

      <div style={{ maxWidth: "1100px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        
        {/* Columnas del Footer */}
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: "40px", marginBottom: "50px" }}>
          
          {/* Columna 1: Marca */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ flex: "1 1 250px" }}>
            <h3 style={{ fontFamily: "Montserrat", fontSize: "20px", fontWeight: 900, color: "#F9F6EF", textTransform: "uppercase", letterSpacing: "1px", margin: "0 0 15px 0" }}>
              Ana Hernández
            </h3>
            <p style={{ fontFamily: "Montserrat", fontSize: "13px", color: "#EBD5D5", lineHeight: 1.6, margin: 0 }}>
              Studio Creative · Diseño Crossmedia
              <br />
              <em style={{ color: "#D4AF37" }}>Construyendo identidades visuales que conectan.</em>
            </p>
          </motion.div>

          {/* Columna 2: Navegación Rápida */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} style={{ flex: "1 1 200px" }}>
            <h4 style={{ fontFamily: "Montserrat", fontSize: "12px", fontWeight: 700, color: "#D4AF37", textTransform: "uppercase", letterSpacing: "2px", margin: "0 0 20px 0" }}>
              Navegación
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <Link to="/" style={{ color: "#F9F6EF", textDecoration: "none", fontFamily: "Montserrat", fontSize: "14px", transition: "color 0.3s" }} onMouseOver={e => e.target.style.color = "#D4AF37"} onMouseOut={e => e.target.style.color = "#F9F6EF"}>
                Inicio
              </Link>
              <Link to="/#quiénsoy" style={{ color: "#F9F6EF", textDecoration: "none", fontFamily: "Montserrat", fontSize: "14px", transition: "color 0.3s" }} onMouseOver={e => e.target.style.color = "#D4AF37"} onMouseOut={e => e.target.style.color = "#F9F6EF"}>
                Quién Soy
              </Link>
              <Link to="/proyectos" style={{ color: "#F9F6EF", textDecoration: "none", fontFamily: "Montserrat", fontSize: "14px", transition: "color 0.3s" }} onMouseOver={e => e.target.style.color = "#D4AF37"} onMouseOut={e => e.target.style.color = "#F9F6EF"}>
                Portafolio
              </Link>
              <Link to="/#contacto" style={{ color: "#F9F6EF", textDecoration: "none", fontFamily: "Montserrat", fontSize: "14px", transition: "color 0.3s" }} onMouseOver={e => e.target.style.color = "#D4AF37"} onMouseOut={e => e.target.style.color = "#F9F6EF"}>
                Contacto
              </Link>
            </div>
          </motion.div>

          {/* Columna 3: Contacto Directo */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} style={{ flex: "1 1 250px" }}>
            <h4 style={{ fontFamily: "Montserrat", fontSize: "12px", fontWeight: 700, color: "#D4AF37", textTransform: "uppercase", letterSpacing: "2px", margin: "0 0 20px 0" }}>
              Hablemos
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <a href="mailto:anamariahernandezflorez@gmail.com" style={{ color: "#F9F6EF", textDecoration: "none", fontFamily: "Montserrat", fontSize: "14px" }}>
                ✉️ anamariahernandezflorez@gmail.com
              </a>
              <a href="https://wa.me/573108253629" target="_blank" rel="noopener noreferrer" style={{ color: "#F9F6EF", textDecoration: "none", fontFamily: "Montserrat", fontSize: "14px" }}>
                📱 +57 310 825 3629
              </a>
              <a href="https://instagram.com/anahernandez_design" target="_blank" rel="noopener noreferrer" style={{ color: "#F9F6EF", textDecoration: "none", fontFamily: "Montserrat", fontSize: "14px" }}>
                📷 @anahernandez_design
              </a>
            </div>
          </motion.div>
        </div>

        {/* Línea divisoria y Copyright */}
        <div style={{ borderTop: "1px solid rgba(249, 246, 239, 0.2)", paddingTop: "20px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "10px" }}>
          <p style={{ fontFamily: "Montserrat", fontSize: "11px", color: "#EBD5D5", margin: 0 }}>
            © {currentYear} Ana Hernández. Todos los derechos reservados.
          </p>
          <p style={{ fontFamily: "Montserrat", fontSize: "11px", color: "#D4AF37", margin: 0, fontStyle: "italic" }}>
            Diseñado con pasión en Medellín 🇨🇴
          </p>
        </div>
      </div>
    </footer>
  );
}