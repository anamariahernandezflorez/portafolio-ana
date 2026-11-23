import { motion } from "framer-motion";

export default function Servicios() {
  const servicios = [
    { numero: "01", titulo: "Diseño Crossmedia", desc: "Creación de piezas visuales que se adaptan y cobran vida en múltiples formatos, manteniendo siempre la esencia y el propósito de la marca.", color: '#147B80' }, // Teal
    { numero: "02", titulo: "Diseño de Experiencias", desc: "Construcción de recorridos donde lo visual, lo emocional y lo conceptual se entrelazan para generar conexiones reales y memorables.", color: '#C9B8E3' }, // Lavanda
    { numero: "03", titulo: "Narrativas Visuales", desc: "Transformación de ideas en animación, video y editorial. Historias que no solo comunican, sino que permanecen y transforman.", color: '#F3D46C' } // Amarillo
  ];

  return (
    <section id="servicios" style={{ padding: '100px 20px', backgroundColor: '#F9F6EF' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '12px', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#147B80', marginBottom: '16px', fontWeight: 600 }}>
          — Lo que hacemos
        </motion.p>
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 'clamp(32px, 4vw, 48px)', fontWeight: 300, marginBottom: '60px', color: '#1A1A1A' }}>
          Transformar ideas en <span style={{ fontFamily: "'Great Vibes', cursive", color: '#147B80', fontSize: '1.2em' }}>experiencias</span>
        </motion.h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {servicios.map((s, index) => (
            <motion.div key={s.numero} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }} viewport={{ once: true }}
              whileHover={{ x: 10 }} style={{ display: 'flex', alignItems: 'center', gap: '32px', padding: '32px', backgroundColor: '#FFFFFF', borderRadius: '12px', borderLeft: `6px solid ${s.color}`, cursor: 'pointer', transition: 'all 0.3s ease', boxShadow: '0 4px 15px rgba(0,0,0,0.03)' }}>
              <span style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '32px', fontWeight: 700, color: s.color }}>{s.numero}</span>
              <div>
                <h3 style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '20px', fontWeight: 600, marginBottom: '8px', color: '#1A1A1A' }}>{s.titulo}</h3>
                <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '15px', color: '#555555', lineHeight: 1.6 }}>{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}