import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const springConfig = { damping: 20, stiffness: 300, mass: 0.5 };
  const x = useSpring(0, springConfig);
  const y = useSpring(0, springConfig);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      x.set(e.clientX - 16);
      y.set(e.clientY - 16);
    };

    const handleHoverStart = () => setIsHovering(true);
    const handleHoverEnd = () => setIsHovering(false);

    window.addEventListener("mousemove", handleMouseMove);

    const addListeners = () => {
      const interactives = document.querySelectorAll("a, button, [data-hover]");
      interactives.forEach((el) => {
        el.addEventListener("mouseenter", handleHoverStart);
        el.addEventListener("mouseleave", handleHoverEnd);
      });
    };
    addListeners();

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [x, y]);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] hidden md:block"
        style={{ x, y }}
      >
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          className={`transition-transform duration-200 ${
            isHovering ? "scale-150" : "scale-100"
          }`}
        >
          <ellipse cx="16" cy="18" rx="5" ry="7" fill="#1B5E6B" />
          <ellipse cx="16" cy="20" rx="3" ry="4" fill="#D97757" />
          <path d="M20 16 L26 14 L20 18 Z" fill="#1E1D1B" />
          <circle cx="18" cy="15" r="1" fill="#F4F1EA" />
          <motion.path
            d="M12 14 Q8 8 14 12 Z"
            fill="#1B5E6B"
            animate={{
              rotate: isHovering ? [0, -20, 0] : [0, -10, 0],
            }}
            transition={{
              duration: isHovering ? 0.1 : 0.3,
              repeat: Infinity,
            }}
            style={{ originX: "14px", originY: "14px" }}
          />
        </svg>
      </motion.div>

      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-coral pointer-events-none z-[9999] hidden md:block mix-blend-multiply"
        animate={{
          x: mousePos.x - 4,
          y: mousePos.y - 4,
        }}
        transition={{ type: "spring", damping: 30, stiffness: 500 }}
      />
    </>
  );
} //