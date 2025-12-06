import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
// import logo from '../../assets/logo.png'
import logo2 from '../../assets/logo2.png';

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="
        fixed top-0 left-0 w-full z-50
        backdrop-blur-sm bg-[var(--color-bg-var)]/70
        border-b border-[var(--color-primary)]
      "
    >
      <div className="w-[90%] md:w-[85%] mx-auto flex justify-between items-center py-4">
        {/* LOGO */}
        <img 
          src={logo2} 
          className="w-15 h-15 object-contain cursor-pointer"
          alt="Logo"
        />

        {/* DESKTOP MENU */}
        <nav className="hidden md:flex gap-10">
          <a href="#" className="nav_link hover:text-[var(--color-primary)] transition-[var(--transition)]">Home</a>
          <a href="#about" className="nav_link hover:text-[var(--color-primary)] transition-[var(--transition)]">About</a>
          <a href="#skill" className="nav_link hover:text-[var(--color-primary)] transition-[var(--transition)]">Skills</a>
          <a href="#service" className="nav_link hover:text-[var(--color-primary)] transition-[var(--transition)]">Services</a>
          <a href="#contact" className="nav_link hover:text-[var(--color-primary)] transition-[var(--transition)]">Contact</a>
        </nav>

        {/* MOBILE TOGGLE */}
        <button
          className="md:hidden text-[var(--color-primary)] text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="
              md:hidden flex flex-col gap-6 py-6 px-8
              text-center 
              bg-[var(--color-bg-var)]/70 border-t border-[var(--color-primary)]
            "
          >
            <a href="#" className="nav_link hover:text-[var(--color-primary)] transition-[var(--transition)]">Home</a>
            <a href="#about" className="nav_link hover:text-[var(--color-primary)] transition-[var(--transition)]">About</a>
            <a href="#skill" className="nav_link hover:text-[var(--color-primary)] transition-[var(--transition)]">Skills</a>
            <a href="#service" className="nav_link hover:text-[var(--color-primary)] transition-[var(--transition)]">Services</a>
            <a href="#contact" className="nav_link hover:text-[var(--color-primary)] transition-[var(--transition)]">Contact</a>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

export default Navbar;
