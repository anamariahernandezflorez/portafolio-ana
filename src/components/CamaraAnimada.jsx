import { motion } from "framer-motion";

export default function CamaraAnimada({ color = "#7A2048", accent = "#D4AF37" }) {
  return (
    <div style={{
      width: "100%", height: "100%",
      background: `linear-gradient(135deg, ${color} 0%, ${color}dd 60%, ${accent}40 100%)`,
      display: "flex", alignItems: "center", justifyContent: "center",
      position: "relative", overflow: "hidden"
    }}>
      {/* Ondas de fondo sutiles */}
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

      {/* Cámara SVG */}
      <motion.svg
        width="140" height="110" viewBox="0 0 140 110"
        initial={{ y: 0 }}
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        style={{ filter: "drop-shadow(0 10px 25px rgba(0,0,0,0.3))", zIndex: 2 }}
      >
        {/* Cuerpo de la cámara */}
        <motion.rect x="20" y="35" width="85" height="55" rx="8"
          fill="#F9F6EF"
          animate={{ filter: ["brightness(1)", "brightness(1.05)", "brightness(1)"] }}
          transition={{ duration: 2.5, repeat: Infinity }}
        />
        {/* Parte superior */}
        <rect x="30" y="22" width="30" height="15" rx="3" fill="#F9F6EF" />
        {/* Botón de grabación */}
        <motion.circle cx="95" cy="28" r="5" fill={accent}
          animate={{ opacity: [1, 0.3, 1] }}
          transition={{ duration: 1.2, repeat: Infinity }}
        />
        {/* Lente exterior */}
        <circle cx="62" cy="62" r="22" fill="#1A1A1A" />
        <circle cx="62" cy="62" r="18" fill="#2a2a2a" />
        {/* Reflejo del lente */}
        <motion.circle cx="56" cy="56" r="5" fill={accent} opacity="0.8"
          animate={{ opacity: [0.4, 0.9, 0.4] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <circle cx="68" cy="68" r="2" fill="#F9F6EF" opacity="0.6" />
        {/* Detalles */}
        <rect x="25" y="78" width="15" height="3" rx="1" fill={accent} opacity="0.6" />
        <rect x="45" y="78" width="8" height="3" rx="1" fill={color} opacity="0.4" />
      </motion.svg>

      {/* Indicador REC */}
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

      {/* Etiqueta de categoría */}
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