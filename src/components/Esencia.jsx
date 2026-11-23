import { motion } from "framer-motion";

export default function Esencia({ onOpenModal }) {
  return (
    <section style={{ 
      position: 'relative',
      padding: 'clamp(80px, 10vw, 120px) 5%', 
      backgroundColor: '#F9F6EF', /* Crema Base */
      overflow: 'hidden' /* Para que las formas de fondo no se salgan */
    }}>
      
      {/* 1. FORMA ORGÁNICA DE FONDO (Lavanda sutil) */}
      <div style={{
        position: 'absolute',
        top: '10%',
        right: '-10%',
        width: '500px',
        height: '500px',
        backgroundColor: '#C9B8E3',
        borderRadius: '50%',
        filter: 'blur(100px)', /* Efecto difuminado elegante */
        opacity: 0.5,
        zIndex: 0
      }} />

      <div style={{ 
        display: 'flex', 
        flexWrap: 'wrap', 
        maxWidth: '1200px', 
        margin: '0 auto', 
        position: 'relative', 
        zIndex: 1, 
        gap: '60px', 
        alignItems: 'center' 
      }}>

        {/* 2. COLUMNA DE TEXTO */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={{ flex: '1 1 500px' }}
        >
          {/* Pequeña línea Amarillo Lume */}
          <div style={{ width: '60px', height: '4px', backgroundColor: '#F3D46C', marginBottom: '24px', borderRadius: '2px' }} />
          
          <h2 style={{ 
            fontFamily: 'Montserrat, sans-serif', 
            fontSize: 'clamp(32px, 4vw, 48px)', 
            fontWeight: 600, 
            color: '#147B80', /* Teal */
            marginBottom: '32px',
            lineHeight: 1.2
          }}>
            La esencia detrás del diseño
          </h2>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 'clamp(15px, 1.6vw, 17px)', color: '#1A1A1A', lineHeight: 1.8 }}>
              Soy Ana Hernández, una diseñadora crossmedia que transforma ideas en experiencias visuales que respiran emoción. Creo que el diseño no se trata solo de formas ni de colores que agradan a la vista, sino de historias que se sienten y de mensajes que permanecen cuando las palabras se detienen.
            </p>
            <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 'clamp(15px, 1.6vw, 17px)', color: '#1A1A1A', lineHeight: 1.8 }}>
              Mi trabajo nace de la unión entre la estrategia y la sensibilidad, entre la estética y la intención. Cada trazo busca comunicar con propósito; cada composición, dejar una huella. Encuentro inspiración en lo natural, en la elegancia sutil de lo simple y en lo simbólico que habita en lo cotidiano. Ilustro, animo y diseño para revelar la esencia que vive detrás de lo visible — porque para mí, la elegancia está en la esencia.
            </p>
          </div>
        </motion.div>

        {/* 3. COLUMNA DE IMAGEN (Elegante y Sutil) */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          style={{ 
            flex: '1 1 400px', 
            position: 'relative', 
            display: 'flex', 
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          {/* Forma orgánica Lavanda detrás de la foto */}
          <div style={{
            position: 'absolute',
            top: '20px',
            left: '20px',
            width: '100%',
            maxWidth: '380px',
            height: '450px',
            backgroundColor: '#C9B8E3',
            borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%', /* Forma de "blob" orgánico */
            zIndex: 0
          }} />
          
          {/* Tu Foto (con sombra suave y bordes redondeados) */}
          <img 
            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800" 
            alt="Ana Hernández" 
            style={{ 
              position: 'relative', 
              zIndex: 1, 
              width: '100%', 
              maxWidth: '350px', 
              aspectRatio: '3/4',
              objectFit: 'cover', 
              borderRadius: '20px', 
              boxShadow: '0 20px 40px rgba(20, 123, 128, 0.15)' /* Sombra color Teal muy sutil */
            }} 
          />
        </motion.div>
      </div>

      {/* 4. 🟡 BOTÓN FLOTANTE (Movido a la derecha) */}
      <motion.button 
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 0.5, type: 'spring' }}
        onClick={onOpenModal}
        style={{
          position: 'absolute', 
          top: '15%', 
          right: '8%', /* Más a la derecha */
          width: 'clamp(160px, 18vw, 200px)', 
          height: 'clamp(160px, 18vw, 200px)',
          background: '#F3D46C', /* Amarillo Lume */
          borderRadius: '50%',
          display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center',
          fontFamily: 'Montserrat, sans-serif', fontWeight: 600, fontSize: 'clamp(14px, 1.5vw, 18px)',
          color: '#1A1A1A', textTransform: 'uppercase', lineHeight: 1.2,
          boxShadow: '0 10px 30px rgba(243, 212, 108, 0.5)', zIndex: 20, cursor: 'pointer', border: 'none', padding: '20px',
          transition: 'transform 0.3s ease'
        }}
        onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.08)'}
        onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
      >
        Planea tu<br/>proyecto
      </motion.button>

      {/* Ajuste responsive para que en móvil se vea bien */}
      <style>{`
        @media (max-width: 768px) {
          button[style*="right: 8%"] {
            position: relative !important;
            top: auto !important; right: auto !important;
            transform: none !important;
            margin: 40px auto 0 auto !important;
            display: flex !important;
          }
        }
      `}</style>
    </section>
  );
}