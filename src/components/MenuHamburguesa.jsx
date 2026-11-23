import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function MenuHamburguesa({ isOpen, onClose }) {
  const navigate = useNavigate();

  const handleNav = (ruta, idSeccion) => {
    onClose();
    if (ruta === "/") {
      navigate("/");
      setTimeout(() => {
        document.getElementById(idSeccion)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      navigate(ruta);
    }
  };

  const menuItems = [
    { nombre: "Sobre mí", ruta: "/", id: "quiénsoy" },
    { nombre: "¿Qué podemos lograr juntos?", ruta: "/", id: "enfoque" },
    { nombre: "Proyectos destacados", ruta: "/proyectos", id: null },
    { nombre: "Información de contacto", ruta: "/", id: "contacto" }
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay oscuro de fondo */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            style={{
              position: "fixed", top: 0, left: 0, width: "100%", height: "100vh",
              backgroundColor: "rgba(0,0,0,0.5)",
              zIndex: 10001
            }}
          />
          
          {/* Panel lateral rosa */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.4 }}
            style={{
              position: "fixed", top: 0, right: 0, width: "100%", maxWidth: "400px", height: "100vh",
              backgroundColor: "#7A2048",
              zIndex: 10002,
              display: "flex", flexDirection: "column",
              padding: "60px 40px 40px",
              boxShadow: "-10px 0 30px rgba(0,0,0,0.3)"
            }}
          >
            {/* Botón cerrar */}
            <button onClick={onClose} style={{ position: "absolute", top: "25px", right: "25px", background: "none", border: "none", color: "#F9F6EF", fontSize: "32px", cursor: "pointer", zIndex: 10003 }}>✕</button>
            
            {/* Título del menú */}
            <p style={{ fontFamily: "Montserrat", fontSize: "12px", fontWeight: 700, color: "#D4AF37", letterSpacing: "3px", textTransform: "uppercase", marginBottom: "40px" }}>
              Navegación
            </p>

            {/* Items del menú */}
            <div style={{ display: "flex", flexDirection: "column", gap: "25px" }}>
              {menuItems.map((item, i) => (
                <motion.button
                  key={item.nombre}
                  onClick={() => handleNav(item.ruta, item.id)}
                  initial={{ opacity: 0, x: 50 }} 
                  animate={{ opacity: 1, x: 0 }} 
                  transition={{ delay: i * 0.1 }}
                  style={{ 
                    background: "none", border: "none", cursor: "pointer", padding: "0",
                    fontFamily: "Montserrat, sans-serif", fontSize: "clamp(20px, 4vw, 28px)", 
                    fontWeight: 700, color: "#F9F6EF", textAlign: "left",
                    borderBottom: "1px solid rgba(249, 246, 239, 0.2)",
                    paddingBottom: "20px"
                  }}
                  onMouseOver={(e) => e.target.style.color = "#D4AF37"}
                  onMouseOut={(e) => e.target.style.color = "#F9F6EF"}
                >
                  {item.nombre}
                </motion.button>
              ))}
            </div>

            {/* Footer del menú */}
            <div style={{ marginTop: "auto", paddingTop: "30px", borderTop: "1px solid rgba(249, 246, 239, 0.2)" }}>
              <p style={{ fontFamily: "Montserrat", fontSize: "12px", color: "#EBD5D5", marginBottom: "10px" }}>
                Ana Hernández Studio Creative
              </p>
              <p style={{ fontFamily: "Montserrat", fontSize: "11px", color: "#D4AF37" }}>
                Medellín, Colombia · 2026
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}