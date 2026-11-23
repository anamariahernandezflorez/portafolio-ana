import { motion } from "framer-motion";

export default function Manifiesto() {
  const etapas = [
    { numero: "01", titulo: "Donde nace la esencia", texto: "Observo, escucho y siento. Cada proyecto comienza con una mirada sensible hacia lo invisible: las emociones, las texturas, los silencios. Aquí descubro la historia que el diseño debe contar." },
    { numero: "02", titulo: "El lenguaje visual toma forma", texto: "Transformo ideas en trazos, ritmo y color. Exploro posibilidades, juego con el equilibrio y dejo que la intuición guíe la técnica. Cada línea es un puente entre la emoción y la estrategia." },
    { numero: "03", titulo: "La experiencia se revela", texto: "El diseño cobra vida al encontrarse con el otro. En esta fase, integro lo visual con lo funcional para generar experiencias memorables. Porque el diseño, cuando toca el alma, se convierte en comunicación." }
  ];

  return (
    <section id="enfoque" style={{ padding: '100px 20px', backgroundColor: '#C9B8E3' }}> {/* FONDO LAVANDA */}
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ textAlign: 'center', marginBottom: '60px' }}>
          <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '12px', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#147B80', marginBottom: '16px', fontWeight: 600 }}>
            — Mi enfoque creativo
          </p>
          <h2 style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 'clamp(32px, 4vw, 48px)', fontWeight: 300, color: '#1A1A1A' }}>
            Inspirada en la ligereza del <span style={{ fontFamily: "'Great Vibes', cursive", color: '#147B80', fontSize: '1.2em' }}>colibrí</span>
          </h2>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '30px' }}>
          {etapas.map((etapa, index) => (
            <motion.div key={etapa.numero} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: index * 0.15 }} viewport={{ once: true }}
              style={{ padding: '40px 30px', backgroundColor: '#F9F6EF', borderRadius: '16px', display: 'flex', flexDirection: 'column', gap: '20px', boxShadow: '0 10px 30px rgba(20, 123, 128, 0.1)' }}>
              <span style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '56px', fontWeight: 700, color: '#147B80', lineHeight: 1 }}>{etapa.numero}</span>
              <div>
                <h3 style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '20px', fontWeight: 600, marginBottom: '12px', color: '#1A1A1A' }}>{etapa.titulo}</h3>
                <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '15px', color: '#555555', lineHeight: 1.7 }}>{etapa.texto}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <style>{`@media (max-width: 768px) { div[style*="grid-template-columns: repeat(3, 1fr)"] { grid-template-columns: 1fr !important; } }`}</style>
    </section>
  );
}