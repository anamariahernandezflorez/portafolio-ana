import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

// ============ COMPONENTE CÁMARA ANIMADA ============
function CamaraAnimada({ color = "#7A2048", accent = "#D4AF37" }) {
  return (
    <div style={{
      width: "100%", height: "100%",
      background: `linear-gradient(135deg, ${color} 0%, ${color}dd 60%, ${accent}40 100%)`,
      display: "flex", alignItems: "center", justifyContent: "center",
      position: "relative", overflow: "hidden"
    }}>
      {[0, 1, 2].map((i) => (
        <motion.div key={i}
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: [0.5, 1.8, 0.5], opacity: [0, 0.3, 0] }}
          transition={{ duration: 4, delay: i * 1.2, repeat: Infinity, ease: "easeInOut" }}
          style={{
            position: "absolute", width: "220px", height: "220px",
            borderRadius: "50%", border: `2px solid ${accent}`,
            top: "50%", left: "50%", transform: "translate(-50%, -50%)"
          }}
        />
      ))}

      <motion.svg
        width="140" height="110" viewBox="0 0 140 110"
        initial={{ y: 0 }}
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        style={{ filter: "drop-shadow(0 10px 25px rgba(0,0,0,0.3))", zIndex: 2 }}
      >
        <motion.rect x="20" y="35" width="85" height="55" rx="8"
          fill="#F9F6EF"
          animate={{ filter: ["brightness(1)", "brightness(1.05)", "brightness(1)"] }}
          transition={{ duration: 2.5, repeat: Infinity }}
        />
        <rect x="30" y="22" width="30" height="15" rx="3" fill="#F9F6EF" />
        <motion.circle cx="95" cy="28" r="5" fill="#ff3b3b"
          animate={{ opacity: [1, 0.3, 1] }}
          transition={{ duration: 1.2, repeat: Infinity }}
        />
        <circle cx="62" cy="62" r="22" fill="#1A1A1A" />
        <circle cx="62" cy="62" r="18" fill="#2a2a2a" />
        <motion.circle cx="56" cy="56" r="5" fill={accent} opacity="0.8"
          animate={{ opacity: [0.4, 0.9, 0.4] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <circle cx="68" cy="68" r="2" fill="#F9F6EF" opacity="0.6" />
        <rect x="25" y="78" width="15" height="3" rx="1" fill={accent} opacity="0.6" />
        <rect x="45" y="78" width="8" height="3" rx="1" fill={color} opacity="0.4" />
      </motion.svg>

      <motion.div
        animate={{ opacity: [1, 0.2, 1] }}
        transition={{ duration: 1.2, repeat: Infinity }}
        style={{
          position: "absolute", top: "20px", left: "20px",
          display: "flex", alignItems: "center", gap: "8px",
          backgroundColor: "rgba(0,0,0,0.4)", backdropFilter: "blur(10px)",
          padding: "6px 12px", borderRadius: "20px", zIndex: 3
        }}
      >
        <div style={{ width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "#ff3b3b" }} />
        <span style={{
          fontFamily: "Montserrat", fontSize: "10px", fontWeight: 800,
          color: "#F9F6EF", letterSpacing: "2px"
        }}>REC</span>
      </motion.div>

      <div style={{
        position: "absolute", bottom: "20px", right: "20px",
        fontFamily: "Montserrat", fontSize: "10px", fontWeight: 700,
        color: "#F9F6EF", letterSpacing: "3px", textTransform: "uppercase",
        opacity: 0.7, zIndex: 3
      }}>
        Audiovisual
      </div>
    </div>
  );
}

// ============ DATOS DE DESTACADOS ============
const destacados = [
  { 
    id: 5, nombre: "EL ÚLTIMO MENSAJERO", cat: "Animación 2D", color: "#D4AF37",
    sector: "Animación Independiente", servicios: "Animación 2D · Diseño de personajes",
    imagen: "/documentos/bibliadeanimacion/el-ultimo-mensajero20.png",
    videoSrc: "/videos/el-ultimo-mensajero.mp4", 
    bibliaId: 8,
    descripcion: "En una sociedad distópica devastada por una guerra mundial, las palomas son modificadas genéticamente para volverlas inteligentes y participar en el conflicto. Cuando la humanidad se extermina a sí misma, estas aves terminan gobernando el mundo.",
    sobre: "Un cortometraje animado que explora las consecuencias de la guerra a través de una metáfora visual poderosa: las palomas, símbolo de paz, convertidas en armas vivientes.",
    reto: "Construir una narrativa visual coherente para un mundo distópico.", 
    aporte: "Dirección de animación 2D, diseño de personajes y storyboard.", 
    resultado: "Un cortometraje animado con una atmósfera única y una crítica social profunda." 
  },
  { 
    id: 2, nombre: "AJENO", cat: "Cortometraje", color: "#D4AF37",
    sector: "Cine Independiente", servicios: "Dirección · Guión · Edición",
    videoSrc: "/videos/ajeno.mp4", 
    descripcion: "Cortometraje sobre gentrificación.",
    sobre: "Un cortometraje que explora las tensiones sociales y humanas en barrios en proceso de gentrificación, capturando la voz de quienes ven transformarse su hogar.",
    reto: "Documentar un fenómeno social complejo.", 
    aporte: "Narrativa en primera persona.", 
    resultado: "Generó conversaciones importantes." 
  },
  { 
    id: 3, nombre: "HABITANDO LO INCIERTO", cat: "Documental", color: "#EBD5D5",
    sector: "Salud y Sociedad", servicios: "Guión · Dirección · Producción",
    videoSrc: "/videos/habitando.mp4", 
    descripcion: "Documental en primera persona.",
    sobre: "Un documental íntimo que aborda la experiencia de vivir con una condición de salud desde la dignidad, la voz propia y la resignificación del cuerpo.",
    reto: "Abordar la salud con dignidad.", 
    aporte: "Guion poético y acompañamiento sensible.", 
    resultado: "Obra íntima y poderosa." 
  }
];

export default function Portafolio() {
  const [proyectoActivo, setProyectoActivo] = useState(null);

  return (
    <section id="portafolio" style={{ padding: "80px 5%", backgroundColor: "#F9F6EF" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          style={{ fontFamily: "Montserrat", fontSize: "clamp(40px, 6vw, 70px)", fontWeight: 900, color: "#7A2048", textAlign: "center", textTransform: "uppercase", marginBottom: "15px", letterSpacing: "-2px" }}>
          Portafolio
        </motion.h2>
        <p style={{ fontFamily: "Montserrat", fontSize: "16px", color: "#D4AF37", fontWeight: 600, textAlign: "center", marginBottom: "60px", letterSpacing: "2px", textTransform: "uppercase" }}>
          Trabajos Destacados
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "30px", marginBottom: "60px" }}>
          {destacados.map((proy, i) => (
            <motion.div key={proy.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} viewport={{ once: true }}
              whileHover={{ y: -10 }} onClick={() => setProyectoActivo(proy)}
              style={{ 
                backgroundColor: proy.color, borderRadius: "16px", height: "400px", 
                cursor: "pointer", position: "relative", overflow: "hidden", 
                boxShadow: "0 10px 30px rgba(122, 32, 72, 0.15)"
              }}>
              
              {/* 👇 Si tiene imagen definida → muestra imagen, si no → cámara animada */}
              <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}>
                {proy.imagen ? (
                  <img src={proy.imagen} alt={proy.nombre} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                ) : (
                  <CamaraAnimada color={proy.color === "#D4AF37" ? "#7A2048" : proy.color} accent="#D4AF37" />
                )}
              </div>

              {/* Número destacado */}
              <div style={{ position: "absolute", top: "20px", right: "20px", fontFamily: "Montserrat", fontSize: "40px", fontWeight: 900, color: "#F9F6EF", opacity: 0.25, zIndex: 2 }}>0{i+1}</div>

              {/* Gradiente inferior para legibilidad */}
              <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", background: "linear-gradient(to top, rgba(10, 31, 53, 0.9) 0%, rgba(10, 31, 53, 0) 55%)", zIndex: 1 }} />

              {/* Texto superpuesto */}
              <div style={{ position: "absolute", bottom: 0, left: 0, width: "100%", padding: "30px", zIndex: 2, display: "flex", flexDirection: "column", justifyContent: "flex-end" }}>
                <p style={{ fontFamily: "Montserrat", fontSize: "11px", fontWeight: 700, color: "#D4AF37", textTransform: "uppercase", letterSpacing: "2px", margin: 0 }}>{proy.cat}</p>
                <h3 style={{ fontFamily: "Montserrat", fontSize: "26px", fontWeight: 900, color: "#FFF", textTransform: "uppercase", marginTop: "8px", lineHeight: 1.1 }}>{proy.nombre}</h3>
                <p style={{ fontFamily: "Montserrat", fontSize: "13px", color: "#F9F6EF", marginTop: "15px", fontWeight: 600, opacity: 0.9 }}>Ver video →</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div style={{ textAlign: "center" }}>
          <Link to="/proyectos" style={{ textDecoration: "none" }}>
            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
              style={{ 
                padding: "18px 40px", backgroundColor: "#7A2048", color: "#D4AF37", 
                border: "none", borderRadius: "50px", fontFamily: "Montserrat", fontSize: "16px", 
                fontWeight: 700, textTransform: "uppercase", letterSpacing: "2px", cursor: "pointer",
                boxShadow: "0 10px 20px rgba(122, 32, 72, 0.3)"
              }}>
              Ver todos los proyectos →
            </motion.button>
          </Link>
        </div>
      </div>

      {/* ============ MODAL UNIFICADO ============ */}
      <AnimatePresence>
        {proyectoActivo && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setProyectoActivo(null)}
            style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", backgroundColor: "rgba(122, 32, 72, 0.85)", backdropFilter: "blur(8px)", zIndex: 10000, display: "flex", justifyContent: "center", alignItems: "center", padding: "20px" }}>
            <motion.div initial={{ scale: 0.9, y: 50 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 50 }}
              onClick={(e) => e.stopPropagation()}
              style={{ backgroundColor: "#F9F6EF", borderRadius: "24px", padding: "40px", maxWidth: "1000px", width: "100%", maxHeight: "90vh", overflowY: "auto", position: "relative", boxShadow: "0 20px 60px rgba(0,0,0,0.3)" }}>
              
              <button onClick={() => setProyectoActivo(null)} style={{ position: "absolute", top: "20px", right: "20px", background: "#7A2048", color: "#FFF", border: "none", borderRadius: "50%", width: "44px", height: "44px", fontSize: "20px", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 10 }}>✕</button>
              
              {/* Header con dos columnas */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "30px", marginBottom: "40px", flexWrap: "wrap" }}>
                <div style={{ flex: 1, minWidth: "300px" }}>
                  <p style={{ fontFamily: "Montserrat", fontSize: "12px", fontWeight: 700, color: "#D4AF37", textTransform: "uppercase", letterSpacing: "3px", marginBottom: "10px" }}>EXPERIENCIA CREATIVA</p>
                  <h2 style={{ fontFamily: "Montserrat", fontSize: "clamp(32px, 5vw, 48px)", fontWeight: 900, color: "#7A2048", textTransform: "uppercase", lineHeight: 1, marginBottom: "15px" }}>{proyectoActivo.nombre}</h2>
                  <p style={{ fontFamily: "Montserrat", fontSize: "16px", color: "#1A1A1A", fontWeight: 600, lineHeight: 1.4 }}>{proyectoActivo.descripcion}</p>
                </div>
                <div style={{ backgroundColor: "#7A2048", borderRadius: "16px", padding: "25px", minWidth: "280px", maxWidth: "320px", color: "#F9F6EF" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "15px", paddingBottom: "15px", borderBottom: "1px solid rgba(249, 246, 239, 0.2)" }}>
                    <div style={{ width: "36px", height: "36px", backgroundColor: "#D4AF37", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>📁</div>
                    <div><p style={{ fontFamily: "Montserrat", fontSize: "10px", fontWeight: 700, color: "#D4AF37", textTransform: "uppercase", margin: 0 }}>PROYECTO</p><p style={{ fontFamily: "Montserrat", fontSize: "13px", fontWeight: 600, color: "#F9F6EF", margin: 0 }}>{proyectoActivo.nombre}</p></div>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "15px", paddingBottom: "15px", borderBottom: "1px solid rgba(249, 246, 239, 0.2)" }}>
                    <div style={{ width: "36px", height: "36px", backgroundColor: "#D4AF37", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>🏠</div>
                    <div><p style={{ fontFamily: "Montserrat", fontSize: "10px", fontWeight: 700, color: "#D4AF37", textTransform: "uppercase", margin: 0 }}>SECTOR</p><p style={{ fontFamily: "Montserrat", fontSize: "13px", fontWeight: 600, color: "#F9F6EF", margin: 0 }}>{proyectoActivo.sector}</p></div>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                    <div style={{ width: "36px", height: "36px", backgroundColor: "#D4AF37", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>⚙️</div>
                    <div><p style={{ fontFamily: "Montserrat", fontSize: "10px", fontWeight: 700, color: "#D4AF37", textTransform: "uppercase", margin: 0 }}>SERVICIOS</p><p style={{ fontFamily: "Montserrat", fontSize: "13px", fontWeight: 600, color: "#F9F6EF", margin: 0 }}>{proyectoActivo.servicios}</p></div>
                  </div>
                </div>
              </div>

              {/* Sobre el proyecto */}
              <div style={{ backgroundColor: "#FFFFFF", borderRadius: "16px", padding: "30px", marginBottom: "30px", boxShadow: "0 4px 15px rgba(122, 32, 72, 0.05)" }}>
                <h3 style={{ fontFamily: "Montserrat", fontSize: "18px", fontWeight: 800, color: "#7A2048", textTransform: "uppercase", marginBottom: "15px" }}>Sobre el Proyecto</h3>
                <p style={{ fontFamily: "Inter Tight", fontSize: "15px", lineHeight: 1.7, color: "#1A1A1A", margin: 0 }}>{proyectoActivo.sobre}</p>
              </div>

              {/* Tres columnas con bordes de color */}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "20px", marginBottom: "30px" }}>
                <div style={{ backgroundColor: "#FFFFFF", padding: "25px", borderRadius: "16px", boxShadow: "0 4px 15px rgba(122, 32, 72, 0.05)", borderLeft: "4px solid #7A2048" }}>
                  <h4 style={{ color: "#7A2048", fontFamily: "Montserrat", fontWeight: 800, fontSize: "14px", textTransform: "uppercase", margin: "0 0 12px 0" }}>🎯 El Reto</h4>
                  <p style={{ fontFamily: "Inter Tight", fontSize: "14px", lineHeight: 1.6, color: "#1A1A1A", margin: 0 }}>{proyectoActivo.reto}</p>
                </div>
                <div style={{ backgroundColor: "#FFFFFF", padding: "25px", borderRadius: "16px", boxShadow: "0 4px 15px rgba(122, 32, 72, 0.05)", borderLeft: "4px solid #D4AF37" }}>
                  <h4 style={{ color: "#7A2048", fontFamily: "Montserrat", fontWeight: 800, fontSize: "14px", textTransform: "uppercase", margin: "0 0 12px 0" }}>💡 Mi Aporte</h4>
                  <p style={{ fontFamily: "Inter Tight", fontSize: "14px", lineHeight: 1.6, color: "#1A1A1A", margin: 0 }}>{proyectoActivo.aporte}</p>
                </div>
                <div style={{ backgroundColor: "#FFFFFF", padding: "25px", borderRadius: "16px", boxShadow: "0 4px 15px rgba(122, 32, 72, 0.05)", borderLeft: "4px solid #7A2048" }}>
                  <h4 style={{ color: "#7A2048", fontFamily: "Montserrat", fontWeight: 800, fontSize: "14px", textTransform: "uppercase", margin: "0 0 12px 0" }}>✅ Resultado</h4>
                  <p style={{ fontFamily: "Inter Tight", fontSize: "14px", lineHeight: 1.6, color: "#1A1A1A", margin: 0 }}>{proyectoActivo.resultado}</p>
                </div>
              </div>

              {/* Video */}
              <div style={{ width: "100%", borderRadius: "16px", overflow: "hidden", backgroundColor: "#000", marginBottom: "20px" }}>
                <video src={proyectoActivo.videoSrc} controls autoPlay muted loop playsInline 
                  style={{ width: "100%", display: "block", maxHeight: "500px", objectFit: "contain" }} />
              </div>

              {/* 👇 Botón para ir a la biblia de animación (solo si tiene bibliaId) */}
              {proyectoActivo.bibliaId && (
                <div style={{ textAlign: "center", marginTop: "20px" }}>
                  <Link to="/proyectos" style={{ textDecoration: "none" }}>
                    <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                      style={{ 
                        padding: "14px 28px", backgroundColor: "#7A2048", color: "#D4AF37", 
                        border: "none", borderRadius: "50px", fontFamily: "Montserrat", fontSize: "14px", 
                        fontWeight: 700, textTransform: "uppercase", cursor: "pointer"
                      }}>
                      📖 Ir a la biblia de animación
                    </motion.button>
                  </Link>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}