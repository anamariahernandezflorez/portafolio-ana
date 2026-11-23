import { motion } from "framer-motion";

export default function Preloader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.8, delay: 3.5, ease: "easeInOut" }}
      style={{
        position: "fixed", top: 0, left: 0, width: "100vw", height: "100vh",
        backgroundColor: "#7A2048", /* FONDO VINO/BORGONDA UNIFICADO */
        zIndex: 10000, display: "flex",
        justifyContent: "center", alignItems: "center", 
        pointerEvents: "none"
      }}
    >
      {/* Contenedor del Colibrí */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5, y: 20 }}
        animate={{
          opacity: [0, 1, 1, 0],
          scale: [0.5, 1, 1, 1.5], 
          y: [20, 0, 0, -150] 
        }}
        transition={{ duration: 3.5, times: [0, 0.2, 0.8, 1], ease: "easeInOut" }}
        style={{ position: "relative", width: "160px", height: "160px" }}
      >
        {/* Dibujo SVG del Colibrí Geométrico */}
        <svg width="100%" height="100%" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Cuerpo (Crema para contrastar con el fondo vino) */}
          <path d="M35 60 C 35 40, 60 40, 70 55 C 60 65, 35 65, 35 60 Z" fill="#F9F6EF" />
          {/* Pico (Crema) */}
          <path d="M70 52 L 90 48" stroke="#F9F6EF" strokeWidth="2" strokeLinecap="round"/>
          {/* Cola (Crema) */}
          <path d="M35 60 L 15 70 M 35 60 L 15 50" stroke="#F9F6EF" strokeWidth="2" strokeLinecap="round"/>
          
          {/* Ala (Amarillo Oro) - Animación de aleteo */}
          <motion.path
            d="M45 55 C 45 20, 80 20, 75 45 C 70 55, 50 55, 45 55 Z"
            fill="#FFD700"
            animate={{ rotate: [0, -40, 10, -40, 0], scale: [1, 1.1, 0.9, 1.1, 1] }}
            transition={{ duration: 0.12, repeat: 20, ease: "linear" }}
            style={{ transformOrigin: "45px 55px" }}
          />
        </svg>
      </motion.div>

      {/* Texto sutil inferior (Crema para que se lea sobre el vino) */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: [0, 1, 1, 0], y: [10, 0, 0, -20] }}
        transition={{ duration: 3.5, times: [0, 0.2, 0.8, 1] }}
        style={{
          position: "absolute", bottom: "35%", 
          fontFamily: "Montserrat, sans-serif",
          fontSize: "12px", letterSpacing: "0.3em", textTransform: "uppercase",
          color: "#F9F6EF", fontWeight: 600
        }}
      >
        Studio Creative
      </motion.p>
    </motion.div>
  );
}