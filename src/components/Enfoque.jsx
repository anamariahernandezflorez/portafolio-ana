import { motion } from "framer-motion";

// Definimos los íconos como siluetas SVG blancas para un look premium
const IconoEnfoque = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
    <line x1="8" y1="21" x2="16" y2="21"></line>
    <line x1="12" y1="17" x2="12" y2="21"></line>
  </svg>
);

const IconoColab = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
    <circle cx="9" cy="7" r="4"></circle>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
  </svg>
);

const IconoComu = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
  </svg>
);

const IconoObjetivo = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"></circle>
    <circle cx="12" cy="12" r="6"></circle>
    <circle cx="12" cy="12" r="2"></circle>
  </svg>
);

const pasos = [
  { 
    num: "01", 
    titulo: "MI ENFOQUE", 
    texto: "Mi enfoque combina el marketing digital, el diseño gráfico y la creación de contenido, con una mirada estratégica y atenta a las nuevas tendencias.", 
    icono: <IconoEnfoque /> 
  },
  { 
    num: "02", 
    titulo: "TRABAJO COLABORATIVO", 
    texto: "Creo en el trabajo colaborativo: escucho tus necesidades y construimos juntos una estrategia visual pensada para tu marca.", 
    icono: <IconoColab /> 
  },
  { 
    num: "03", 
    titulo: "COMUNICACIÓN CONSTANTE", 
    texto: "Mantengo una comunicación cercana, con espacios de revisión que nos permitan evolucionar y asegurar la esencia de tu marca.", 
    icono: <IconoComu /> 
  },
  { 
    num: "04", 
    titulo: "OBJETIVO", 
    texto: "Mi objetivo es que cada proyecto no solo se vea bien, sino que comunique, conecte y deje una huella real en tu audiencia, transformando tu visión en una experiencia memorable.", 
    icono: <IconoObjetivo /> 
  }
];

export default function Enfoque() {
  return (
    <section id="enfoque" style={{ padding: "80px 5%", backgroundColor: "#F9F6EF" }}>
      <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
        <h2 style={{ fontFamily: "Montserrat", fontSize: "clamp(40px, 6vw, 60px)", fontWeight: 900, color: "#7A2048", marginBottom: "60px", textAlign: "center", textTransform: "uppercase", lineHeight: 1.1 }}>
          ¿QUÉ PODEMOS<br/>LOGRAR JUNTOS?
        </h2>
        
        <div style={{ display: "flex", flexDirection: "column" }}>
          {pasos.map((paso, index) => (
            <motion.div 
              key={paso.num} 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.5, delay: index * 0.1 }} 
              viewport={{ once: true }}
              style={{ 
                display: "flex", 
                alignItems: "center", 
                gap: "30px", 
                padding: "40px 0", 
                borderBottom: index !== pasos.length - 1 ? "2px solid #7A2048" : "none", 
                flexWrap: "wrap" 
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "20px", minWidth: "200px" }}>
                <span style={{ fontFamily: "Montserrat", fontSize: "50px", fontWeight: 900, color: "#7A2048", lineHeight: 1 }}>{paso.num}</span>
                
                {/* Círculo Vino con Silueta Blanca */}
                <div style={{ 
                  width: "70px", 
                  height: "70px", 
                  borderRadius: "50%", 
                  backgroundColor: "#7A2048", /* Fondo Vino */
                  display: "flex", 
                  alignItems: "center", 
                  justifyContent: "center", 
                  flexShrink: 0 
                }}>
                  {paso.icono}
                </div>
              </div>
              
              <div style={{ flex: "1 1 300px" }}>
                <h3 style={{ fontFamily: "Montserrat", fontSize: "22px", fontWeight: 800, color: "#7A2048", marginBottom: "10px", textTransform: "uppercase", letterSpacing: "1px" }}>
                  {paso.titulo}
                </h3>
                <p style={{ fontFamily: "Montserrat", fontSize: "15px", lineHeight: 1.6, color: "#1A1A1A" }}>
                  {paso.texto}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}