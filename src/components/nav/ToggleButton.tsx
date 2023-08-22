import { useState } from "react";
import { motion } from "framer-motion";
import Nav from "./Nav";

export const ToggleButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const titleButton = isOpen ? "Cerrar" : "Menu";

  const toggleButton = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <motion.button
        onClick={toggleButton}
        className={`burger ${isOpen ? "open" : ""}`}
        animate={{ rotate: isOpen ? 0 : 360 }}
        initial={false}
        style={{
          zIndex: 2,
        }}
      >
        {titleButton}
      </motion.button>

      <Nav isOpen={isOpen} />
    </>
  );
};

export default ToggleButton;
