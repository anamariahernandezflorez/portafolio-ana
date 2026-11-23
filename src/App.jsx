import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MenuHamburguesa from "./components/MenuHamburguesa";
import Preloader from "./components/Preloader";
import Hero from "./components/Hero";
import QuienSoy from "./components/QuienSoy";
import Enfoque from "./components/Enfoque";
import Portafolio from "./components/Portafolio";
import Contacto from "./components/Contacto";
import TodosLosProyectos from "./components/TodosLosProyectos";
import Footer from "./components/Footer";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Router>
      <div style={{ backgroundColor: "#F9F6EF", overflowX: "hidden" }}>
        
        {/* Animación de entrada (Colibrí) */}
        <Preloader />

        {/* Botón Hamburguesa Fijo */}
        <button 
          onClick={() => setMenuOpen(true)}
          style={{
            position: "fixed", top: "30px", right: "30px", zIndex: 10001,
            background: "#7A2048", border: "none", borderRadius: "50%",
            width: "60px", height: "60px", cursor: "pointer",
            display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: "6px",
            boxShadow: "0 4px 15px rgba(0,0,0,0.2)"
          }}
        >
          <span style={{ width: "24px", height: "3px", backgroundColor: "#F9F6EF", borderRadius: "2px" }} />
          <span style={{ width: "24px", height: "3px", backgroundColor: "#F9F6EF", borderRadius: "2px" }} />
          <span style={{ width: "24px", height: "3px", backgroundColor: "#F9F6EF", borderRadius: "2px" }} />
        </button>

        <MenuHamburguesa isOpen={menuOpen} onClose={() => setMenuOpen(false)} />

        <main>
          <Routes>
            {/* Página Principal */}
            <Route path="/" element={
              <> 
                <Hero /> 
                <QuienSoy /> 
                <Enfoque /> 
                <Portafolio /> 
                <Contacto /> 
              </>
            } />
            
            {/* Página de Todos los Proyectos */}
            <Route path="/proyectos" element={<TodosLosProyectos />} />
          </Routes>
        </main>

        {/* Footer en todas las páginas */}
        <Footer />

      </div>
    </Router>
  );
}