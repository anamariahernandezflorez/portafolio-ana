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

// ============ DATOS DE PROYECTOS ============
const todosLosProyectos = [
  { id: 2, nombre: "AJENO", categoria: "Audiovisual", cat: "Cortometraje", sector: "Cine Independiente", servicios: "Dirección · Guión · Edición", color: "#D4AF37", imagen: "/imagenes/ajeno.jpg", videoSrc: "https://1drv.ms/v/c/ebc425b9c1f3ca2d/IQSTyMSgcPQKR655t9yxru9sAVm6rCsmi_ZLH-rAooQryOY?width=3840&height=2160", esAudiovisualPuro: true, descripcion: "Cortometraje sobre gentrificación.", sobre: "Un cortometraje que explora las tensiones sociales y humanas en barrios en proceso de gentrificación.", reto: "Documentar un fenómeno social complejo.", aporte: "Narrativa en primera persona.", resultado: "Generó conversaciones importantes." },
  { id: 3, nombre: "HABITANDO LO INCIERTO", categoria: "Audiovisual", cat: "Documental", sector: "Salud y Sociedad", servicios: "Guión · Dirección · Producción", color: "#EBD5D5", imagen: "/imagenes/habitando.jpg", videoSrc: "https://1drv.ms/v/c/ebc425b9c1f3ca2d/IQSocWimFauTRISIQNvlx1TAAfHRJbJBWdJPz7okyf7SrSQ", esAudiovisualPuro: true, descripcion: "Documental en primera persona.", sobre: "Un documental íntimo que aborda la experiencia de vivir con una condición de salud desde la dignidad.", reto: "Abordar la salud con dignidad.", aporte: "Guion poético y acompañamiento sensible.", resultado: "Obra íntima y poderosa." },
  { id: 4, nombre: "RESIGNIFICACIÓN", categoria: "Audiovisual", cat: "Video Arte", sector: "Arte Contemporáneo", servicios: "Dirección de arte · Edición · Sonido", color: "#D4AF37", imagen: "/imagenes/resignificacion.jpg", videoSrc: "https://1drv.ms/v/c/ebc425b9c1f3ca2d/IQSawdgsxRs_S5H6QVchtAN4Aa2PTSa-vvOgeweCWBxwKyI", esAudiovisualPuro: true, descripcion: "Narrativa poética visual.", sobre: "Una pieza de video arte que explora la memoria colectiva de los lugares.", reto: "Capturar la esencia de un lugar.", aporte: "Metáforas visuales y sonido inmersivo.", resultado: "Reflexión sobre la memoria colectiva." },
  { id: 5, nombre: "EL ÚLTIMO MENSAJERO", categoria: "Animación", cat: "Animación 2D", sector: "Animación Independiente", servicios: "Animación 2D · Diseño de personajes", color: "#D4AF37", imagen: "/documentos/bibliadeanimacion/el-ultimo-mensajero20.png", videoSrc: "https://1drv.ms/v/c/ebc425b9c1f3ca2d/IQTyQPt1K8dkTpX8coD82AAmAVgqB-wSTFiVgLaX0eDw07s?width=1920&height=1080", bibliaId: 8, descripcion: "Cortometraje animado distópico.", sobre: "En una sociedad distópica, las palomas son modificadas genéticamente para participar en una guerra mundial.", reto: "Construir una narrativa visual coherente para un mundo distópico.", aporte: "Dirección de animación 2D y storyboard.", resultado: "Un cortometraje con atmósfera única." },
  { id: 6, nombre: "PERIÓDICO ECO URBANO", categoria: "Editorial", cat: "Diseño Editorial", sector: "Medios Digitales", servicios: "Dirección de arte · Maquetación", color: "#EBD5D5", imagen: "/documentos/Periodico/periodico1.jpg", videoSrc: "", slides: [["/documentos/Periodico/periodico1.jpg"], ["/documentos/Periodico/periodico2.jpg", "/documentos/Periodico/periodico3.jpg"], ["/documentos/Periodico/periodico4.jpg", "/documentos/Periodico/periodico5.jpg"], ["/documentos/Periodico/periodico6.jpg", "/documentos/Periodico/periodico7.jpg"], ["/documentos/Periodico/periodico8.jpg"]], descripcion: "Periódico digital de sostenibilidad.", sobre: "Diseño y maquetación de un periódico digital enfocado en sostenibilidad y vida urbana.", reto: "Organizar gran cantidad de información en un formato legible.", aporte: "Dirección de arte y maquetación editorial.", resultado: "Publicación visualmente coherente." },
  { id: 7, nombre: "SERES IMAGINARIOS", categoria: "Ilustración", cat: "Ilustración Editorial", sector: "Literatura y Arte", servicios: "Ilustración digital · Concept art", color: "#7A2048", imagen: "/documentos/seresimaginarios/TU_ARCHIVO_7.png", videoSrc: "", slides: [["/documentos/seresimaginarios/TU_ARCHIVO_1.png"], ["/documentos/seresimaginarios/TU_ARCHIVO_2.png"], ["/documentos/seresimaginarios/TU_ARCHIVO_3.png"], ["/documentos/seresimaginarios/TU_ARCHIVO_4.png"], ["/documentos/seresimaginarios/TU_ARCHIVO_5.png"], ["/documentos/seresimaginarios/TU_ARCHIVO_6.png"], ["/documentos/seresimaginarios/TU_ARCHIVO_7.png"], ["/documentos/seresimaginarios/TU_ARCHIVO_8.png"], ["/documentos/seresimaginarios/TU_ARCHIVO_9.png"], ["/documentos/seresimaginarios/TU_ARCHIVO_10.png"]], descripcion: "Serie inspirada en Borges.", sobre: "Ilustraciones inspiradas en 'El libro de los seres imaginarios' de Jorge Luis Borges.", reto: "Traducir descripciones literarias en representaciones visuales.", aporte: "Investigación conceptual y bocetado digital.", resultado: "Colección visual que captura la esencia literaria." },
  { id: 8, nombre: "BIBLIA DE ANIMACIÓN", categoria: "Editorial", cat: "Biblia de Animación", sector: "Animación", servicios: "Diseño de personajes · Escenarios", color: "#EBD5D5", imagen: "/documentos/bibliadeanimacion/el-ultimo-mensajero1.png", videoSrc: "", slides: [["/documentos/bibliadeanimacion/el-ultimo-mensajero1.png"], ["/documentos/bibliadeanimacion/el-ultimo-mensajero2.jpg"], ["/documentos/bibliadeanimacion/el-ultimo-mensajero3.jpg"], ["/documentos/bibliadeanimacion/el-ultimo-mensajero4.jpg"], ["/documentos/bibliadeanimacion/el-ultimo-mensajero5.jpg"], ["/documentos/bibliadeanimacion/el-ultimo-mensajero6.jpg"], ["/documentos/bibliadeanimacion/el-ultimo-mensajero7.jpg"], ["/documentos/bibliadeanimacion/el-ultimo-mensajero8.jpg"], ["/documentos/bibliadeanimacion/el-ultimo-mensajero9.jpg"], ["/documentos/bibliadeanimacion/el-ultimo-mensajero10.jpg"], ["/documentos/bibliadeanimacion/el-ultimo-mensajero11.jpg"], ["/documentos/bibliadeanimacion/el-ultimo-mensajero12.jpg"], ["/documentos/bibliadeanimacion/el-ultimo-mensajero13.jpg"], ["/documentos/bibliadeanimacion/el-ultimo-mensajero14.jpg"], ["/documentos/bibliadeanimacion/el-ultimo-mensajero15.jpg"], ["/documentos/bibliadeanimacion/el-ultimo-mensajero16.jpg"], ["/documentos/bibliadeanimacion/el-ultimo-mensajero17.jpg"], ["/documentos/bibliadeanimacion/el-ultimo-mensajero18.jpg"], ["/documentos/bibliadeanimacion/el-ultimo-mensajero19.jpg"], ["/documentos/bibliadeanimacion/el-ultimo-mensajero20.png"]], descripcion: "Documento técnico de animación.", sobre: "Documento que establece las reglas, personajes y estilo de animación del cortometraje.", reto: "Unificar la visión artística y técnica.", aporte: "Diseño de personajes, escenarios y paletas de color.", resultado: "Guía completa para el equipo de producción." },
  { id: 9, nombre: "SOCIEDAD LÚMINA", categoria: "Editorial", cat: "Diseño Editorial", sector: "Narrativa Visual", servicios: "Dirección de arte · Ilustración", color: "#7A2048", imagen: "/documentos/lumina/lumina1.jpg", videoSrc: "", slides: [["/documentos/lumina/lumina1.jpg"], ["/documentos/lumina/lumina2.jpg", "/documentos/lumina/lumina3.jpg"], ["/documentos/lumina/lumina4.jpg", "/documentos/lumina/lumina5.jpg"], ["/documentos/lumina/lumina6.jpg", "/documentos/lumina/lumina7.jpg"], ["/documentos/lumina/lumina8.jpg", "/documentos/lumina/lumina9.jpg"], ["/documentos/lumina/lumina10.jpg", "/documentos/lumina/lumina11.jpg"], ["/documentos/lumina/lumina12.jpg", "/documentos/lumina/lumina13.jpg"], ["/documentos/lumina/lumina14.jpg", "/documentos/lumina/lumina15.jpg"], ["/documentos/lumina/lumina16.jpg", "/documentos/lumina/lumina17.jpg"], ["/documentos/lumina/lumina18.jpg", "/documentos/lumina/lumina19.jpg"], ["/documentos/lumina/lumina20.jpg", "/documentos/lumina/lumina21.jpg"], ["/documentos/lumina/lumina22.jpg"]], descripcion: "Mito fundacional distópico.", sobre: "Tras una catástrofe, los sobrevivientes descubren fragmentos de una estrella que los eligen para reconstruir el mundo.", reto: "Traducir visualmente un mito fundacional poético.", aporte: "Dirección de arte y maquetación editorial.", resultado: "Universo visual coherente." },
  { id: 10, nombre: "SENEGAL", categoria: "Ilustración", cat: "Ilustración Editorial", sector: "Editorial", servicios: "Ilustración · Diseño tipográfico", color: "#D4AF37", imagen: "/imagenes/senegal.jpg", videoSrc: "", slides: [["/imagenes/senegal.jpg"]], descripcion: "Libro ficticio.", sobre: "Ilustración y maquetación de portada, contraportada y lomo de libro ficticio 'Senegal'.", reto: "Crear una identidad visual completa.", aporte: "Ilustración digital y maquetación.", resultado: "Diseño de libro con identidad sólida." }
];

const filtros = ["Todos", "Audiovisual", "Animación", "Ilustración", "Editorial"];

// ============ COMPONENTE PRINCIPAL ============
export default function TodosLosProyectos() {
  const [filtroActivo, setFiltroActivo] = useState("Todos");
  const [proyectoActivo, setProyectoActivo] = useState(null);

  const proyectosVisibles = filtroActivo === "Todos" ? todosLosProyectos : todosLosProyectos.filter(p => p.categoria === filtroActivo);

  return (
    <section style={{ padding: "100px 5% 60px", backgroundColor: "#F9F6EF", minHeight: "100vh" }}>
      <style>{`
        .filter-scroll { display: flex; gap: 12px; overflow-x: auto; padding-bottom: 15px; scrollbar-width: none; }
        .filter-scroll::-webkit-scrollbar { display: none; }
        .project-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 24px; }
        @media (max-width: 1024px) { .project-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 600px) {
          .project-grid { grid-template-columns: 1fr; }
          .modal-content { padding: 20px !important; border-radius: 20px 20px 0 0 !important; max-height: 95vh !important; }
          .header-commercial { flex-direction: column; align-items: flex-start; gap: 20px; }
          .header-title-group { text-align: left; }
          .modal-header { flex-direction: column !important; }
          .modal-info-box { width: 100% !important; max-width: 100% !important; }
          .tres-columnas { grid-template-columns: 1fr !important; }
        }
      `}</style>

      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <div className="header-commercial" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "50px", flexWrap: "wrap" }}>
          <Link to="/" style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "12px 24px", backgroundColor: "#7A2048", color: "#F9F6EF", borderRadius: "50px", textDecoration: "none", fontFamily: "Montserrat", fontSize: "14px", fontWeight: 700 }}>
            ← Volver al Inicio
          </Link>
          <div className="header-title-group" style={{ textAlign: "right" }}>
            <h1 style={{ fontFamily: "Montserrat", fontSize: "clamp(36px, 5vw, 54px)", fontWeight: 900, color: "#7A2048", textTransform: "uppercase", margin: 0, lineHeight: 1 }}>Portafolio</h1>
            <p style={{ fontFamily: "Montserrat", fontSize: "14px", color: "#D4AF37", fontWeight: 600, margin: "8px 0 0 0", letterSpacing: "2px", textTransform: "uppercase" }}>Trabajos Seleccionados</p>
          </div>
        </div>

        <div className="filter-scroll" style={{ borderBottom: "2px solid #EBD5D5", paddingBottom: "20px", marginBottom: "40px" }}>
          {filtros.map((filtro) => (
            <button key={filtro} onClick={() => setFiltroActivo(filtro)} style={{
              background: "none", border: "1px solid transparent", fontFamily: "Montserrat", fontSize: "14px",
              fontWeight: filtroActivo === filtro ? 800 : 500, color: filtroActivo === filtro ? "#7A2048" : "#888",
              cursor: "pointer", padding: "10px 20px", borderRadius: "30px",
              backgroundColor: filtroActivo === filtro ? "#EBD5D5" : "transparent",
              borderColor: filtroActivo === filtro ? "#7A2048" : "transparent", transition: "all 0.3s ease", whiteSpace: "nowrap"
            }}>{filtro}</button>
          ))}
        </div>

        <motion.div className="project-grid" layout>
          <AnimatePresence>
            {proyectosVisibles.map((proy) => (
              <motion.div key={proy.id} layout initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }} whileHover={{ y: -5 }} onClick={() => setProyectoActivo(proy)}
                style={{ height: "380px", cursor: "pointer", position: "relative", overflow: "hidden", borderRadius: "16px", boxShadow: "0 10px 30px rgba(122, 32, 72, 0.15)", backgroundColor: proy.color }}>
                
                <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", overflow: "hidden" }}>
                  {proy.esAudiovisualPuro ? (
                    <CamaraAnimada color={proy.color === "#D4AF37" ? "#7A2048" : proy.color} accent="#D4AF37" />
                  ) : (
                    <img src={proy.imagen} alt={proy.nombre} style={{ width: "100%", height: "100%", objectFit: "cover" }} onError={(e) => { e.target.style.display = 'none'; }} />
                  )}
                </div>

                <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", background: "linear-gradient(to top, rgba(10, 31, 53, 0.9) 0%, rgba(10, 31, 53, 0) 60%)" }} />
                <div style={{ position: "absolute", bottom: 0, left: 0, width: "100%", padding: "24px", zIndex: 2, display: "flex", flexDirection: "column", justifyContent: "flex-end" }}>
                  <p style={{ fontFamily: "Montserrat", fontSize: "11px", fontWeight: 700, color: "#D4AF37", textTransform: "uppercase", letterSpacing: "2px", margin: 0 }}>{proy.cat}</p>
                  <h3 style={{ fontFamily: "Montserrat", fontSize: "22px", fontWeight: 900, color: "#FFF", textTransform: "uppercase", marginTop: "8px", lineHeight: 1.1 }}>{proy.nombre}</h3>
                  <p style={{ fontFamily: "Montserrat", fontSize: "13px", color: "#F9F6EF", marginTop: "12px", fontWeight: 600, opacity: 0.9 }}>Ver proyecto →</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* ============ MODAL DE PROYECTO ============ */}
      <AnimatePresence>
        {proyectoActivo && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setProyectoActivo(null)}
            style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", backgroundColor: "rgba(122, 32, 72, 0.85)", backdropFilter: "blur(8px)", zIndex: 10000, display: "flex", justifyContent: "center", alignItems: "center", padding: "20px" }}>
            <motion.div key={proyectoActivo.id} initial={{ scale: 0.9, y: 50 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 50 }}
              onClick={(e) => e.stopPropagation()} className="modal-content"
              style={{ backgroundColor: "#F9F6EF", borderRadius: "24px", padding: "40px", maxWidth: "1000px", width: "100%", maxHeight: "90vh", overflowY: "auto", position: "relative", boxShadow: "0 20px 60px rgba(0,0,0,0.3)" }}>
              
              <button onClick={() => setProyectoActivo(null)} style={{ position: "absolute", top: "20px", right: "20px", background: "#7A2048", color: "#FFF", border: "none", borderRadius: "50%", width: "44px", height: "44px", fontSize: "20px", cursor: "pointer", zIndex: 10 }}>✕</button>
              
              <div className="modal-header" style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "30px", marginBottom: "40px", flexWrap: "wrap" }}>
                <div style={{ flex: 1, minWidth: "300px" }}>
                  <p style={{ fontFamily: "Montserrat", fontSize: "12px", fontWeight: 700, color: "#D4AF37", textTransform: "uppercase", letterSpacing: "3px", marginBottom: "10px" }}>EXPERIENCIA CREATIVA</p>
                  <h2 style={{ fontFamily: "Montserrat", fontSize: "clamp(32px, 5vw, 48px)", fontWeight: 900, color: "#7A2048", textTransform: "uppercase", lineHeight: 1, marginBottom: "15px" }}>{proyectoActivo.nombre}</h2>
                  <p style={{ fontFamily: "Montserrat", fontSize: "16px", color: "#1A1A1A", fontWeight: 600, lineHeight: 1.4 }}>{proyectoActivo.descripcion}</p>
                </div>
                <div className="modal-info-box" style={{ backgroundColor: "#7A2048", borderRadius: "16px", padding: "25px", minWidth: "280px", maxWidth: "320px", color: "#F9F6EF" }}>
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

              <div style={{ backgroundColor: "#FFFFFF", borderRadius: "16px", padding: "30px", marginBottom: "30px", boxShadow: "0 4px 15px rgba(122, 32, 72, 0.05)" }}>
                <h3 style={{ fontFamily: "Montserrat", fontSize: "18px", fontWeight: 800, color: "#7A2048", textTransform: "uppercase", marginBottom: "15px" }}>Sobre el Proyecto</h3>
                <p style={{ fontFamily: "Inter Tight", fontSize: "15px", lineHeight: 1.7, color: "#1A1A1A", margin: 0 }}>{proyectoActivo.sobre}</p>
              </div>

              <div className="tres-columnas" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "20px", marginBottom: "30px" }}>
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

              {/* 👇 AQUÍ ESTÁ LA MAGIA: Detecta si es URL de OneDrive (iframe) o video local */}
              {proyectoActivo.videoSrc ? (
                <div style={{ width: "100%", borderRadius: "16px", overflow: "hidden", backgroundColor: "#000", marginBottom: "20px" }}>
                  {proyectoActivo.videoSrc.includes("1drv.ms") ? (
                    <iframe 
                      src={proyectoActivo.videoSrc} 
                      width="100%" 
                      height="400" 
                      frameBorder="0" 
                      allowFullScreen 
                      title={`Video de ${proyectoActivo.nombre}`}
                      style={{ display: "block", maxHeight: "500px" }}
                    />
                  ) : (
                    <video src={proyectoActivo.videoSrc} controls autoPlay muted loop playsInline style={{ width: "100%", display: "block", maxHeight: "500px", objectFit: "contain" }} />
                  )}
                </div>
              ) : proyectoActivo.slides ? (
                <GaleriaInteractiva slides={proyectoActivo.slides} />
              ) : null}

              {proyectoActivo.bibliaId && (
                <div style={{ textAlign: "center", marginTop: "20px" }}>
                  <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                    onClick={() => { const target = todosLosProyectos.find(p => p.id === proyectoActivo.bibliaId); if(target) setProyectoActivo(target); }}
                    style={{ padding: "14px 28px", backgroundColor: "#7A2048", color: "#D4AF37", border: "none", borderRadius: "50px", fontFamily: "Montserrat", fontSize: "14px", fontWeight: 700, textTransform: "uppercase", cursor: "pointer" }}>
                    📖 Ir a la biblia de animación
                  </motion.button>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

// ============ GALERÍA INTERACTIVA ============
function GaleriaInteractiva({ slides }) {
  const [slideActual, setSlideActual] = useState(0);
  const [imagenAmpliada, setImagenAmpliada] = useState(null);
  const irAnterior = () => setSlideActual((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  const irSiguiente = () => setSlideActual((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  const todasLasImagenes = slides.flat();
  const zoomAnterior = () => { const i = todasLasImagenes.indexOf(imagenAmpliada); setImagenAmpliada(todasLasImagenes[(i - 1 + todasLasImagenes.length) % todasLasImagenes.length]); };
  const zoomSiguiente = () => { const i = todasLasImagenes.indexOf(imagenAmpliada); setImagenAmpliada(todasLasImagenes[(i + 1) % todasLasImagenes.length]); };
  const slideActualImages = slides[slideActual];

  return (
    <>
      <div style={{ width: "100%", marginBottom: "30px", position: "relative", borderRadius: "16px", overflow: "hidden", backgroundColor: "#000" }}>
        <div style={{ display: "flex", width: "100%", minHeight: "400px", maxHeight: "600px" }}>
          {slideActualImages.map((img, idx) => (<img key={idx} src={img} alt={`Vista ${slideActual + 1}`} style={{ flex: 1, width: "100%", objectFit: "contain", cursor: "zoom-in" }} onClick={() => setImagenAmpliada(img)} loading="lazy" />))}
        </div>
        <button onClick={() => setImagenAmpliada(slideActualImages[0])} style={{ position: "absolute", top: "15px", right: "15px", background: "rgba(122, 32, 72, 0.8)", color: "#FFF", border: "none", borderRadius: "8px", width: "40px", height: "40px", fontSize: "18px", cursor: "pointer", zIndex: 5 }}>⛶</button>
        <button onClick={irAnterior} style={{ position: "absolute", top: "50%", left: "15px", transform: "translateY(-50%)", background: "rgba(122, 32, 72, 0.8)", color: "#FFF", border: "none", borderRadius: "50%", width: "40px", height: "40px", fontSize: "20px", cursor: "pointer", zIndex: 5 }}>←</button>
        <button onClick={irSiguiente} style={{ position: "absolute", top: "50%", right: "15px", transform: "translateY(-50%)", background: "rgba(122, 32, 72, 0.8)", color: "#FFF", border: "none", borderRadius: "50%", width: "40px", height: "40px", fontSize: "20px", cursor: "pointer", zIndex: 5 }}>→</button>
        <div style={{ position: "absolute", bottom: "15px", left: "50%", transform: "translateX(-50%)", display: "flex", gap: "8px", zIndex: 5 }}>
          {slides.map((_, i) => (<div key={i} style={{ width: "8px", height: "8px", borderRadius: "50%", backgroundColor: i === slideActual ? "#D4AF37" : "rgba(255,255,255,0.5)" }} />))}
        </div>
      </div>
      <AnimatePresence>
        {imagenAmpliada && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setImagenAmpliada(null)} style={{ position: "fixed", top: 0, left: 0, width: "100vw", height: "100vh", backgroundColor: "rgba(0,0,0,0.95)", zIndex: 20000, display: "flex", justifyContent: "center", alignItems: "center", padding: "20px" }}>
            <motion.img initial={{ scale: 0.9 }} animate={{ scale: 1 }} exit={{ scale: 0.9 }} src={imagenAmpliada} alt="Vista ampliada" style={{ maxWidth: "95vw", maxHeight: "95vh", objectFit: "contain", borderRadius: "8px" }} />
            <button onClick={(e) => { e.stopPropagation(); zoomAnterior(); }} style={{ position: "absolute", top: "50%", left: "20px", transform: "translateY(-50%)", background: "rgba(255,255,255,0.2)", color: "#FFF", border: "none", borderRadius: "50%", width: "50px", height: "50px", fontSize: "24px", cursor: "pointer" }}>←</button>
            <button onClick={(e) => { e.stopPropagation(); zoomSiguiente(); }} style={{ position: "absolute", top: "50%", right: "20px", transform: "translateY(-50%)", background: "rgba(255,255,255,0.2)", color: "#FFF", border: "none", borderRadius: "50%", width: "50px", height: "50px", fontSize: "24px", cursor: "pointer" }}>→</button>
            <button onClick={() => setImagenAmpliada(null)} style={{ position: "absolute", top: "30px", right: "30px", background: "none", border: "none", color: "#FFF", fontSize: "40px", cursor: "pointer" }}>✕</button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
