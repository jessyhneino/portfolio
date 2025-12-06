import React, { useRef, useEffect } from "react";
import { FaGithub, FaFacebook, FaInstagram } from "react-icons/fa";
import { motion, useAnimation, useInView } from "framer-motion";
import "./footer.css";

function Footer() {
  const ref = useRef(null);
  const controls = useAnimation();
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);

  const footerVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 20, when: "beforeChildren", staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <motion.footer
  ref={ref}
  variants={footerVariants}
  initial="hidden"
  animate={controls}
  className="
    bg-[var(--color-bg-var)]/70 
    py-10 text-center mt-24 overflow-hidden 
    border-t border-[var(--color-primary)]
  "
>
  {/* Logo */}
  <motion.a
    variants={itemVariants}
    href="#"
    className="
      text-[22px] md:text-[26px]
      text-[var(--color-primary)]
      hover:text-[var(--color-white)]
      font-semibold inline-block mb-8
      transition-[var(--transition)]
    "
  >
    Jessy Hneino
  </motion.a>

  {/* Navigation Links */}
  <motion.ul
    variants={itemVariants}
    className="
      flex flex-wrap justify-center gap-8 mb-8
      max-[600px]:flex-col max-[600px]:items-center max-[600px]:gap-3
    "
  >
    {["Home", "About", "Skills", "Services", "Projects", "Contact"].map(
      (link) => (
        <motion.li key={link} variants={itemVariants}>
          <a
            href={`#${link.toLowerCase()}`}
            className="
              text-[18px]
              text-[var(--color-white)] 
              hover:text-[var(--color-primary)]
              transition-[var(--transition)]
              font-medium
            "
          >
            {link}
          </a>
        </motion.li>
      )
    )}
  </motion.ul>

  {/* Social Icons */}
<motion.div
  variants={itemVariants}
  className="flex justify-center gap-6 text-[22px] mb-8"
>
  {/* Facebook */}
  <motion.a
    whileHover={{ scale: 1.2, rotate: 10 }}
    transition={{ type: "spring", stiffness: 300 }}
    className="
      text-[var(--color-bg)]
      hover:text-[var(--color-primary)]
      bg-[var(--color-primary)]
      hover:bg-transparent 
      p-[12px]
      rounded-[10px]
      flex border border-transparent
      hover:border-[var(--color-primary)]
      transition-[var(--transition)]
    "
    href="https://facebook.com/jojo.mo.hn.2025"   // 🔥 ضعي رابطك هنا
    target="_blank"
    rel="noopener noreferrer"
  >
    <FaFacebook />
  </motion.a>

  {/* Instagram */}
  <motion.a
    whileHover={{ scale: 1.2, rotate: 10 }}
    transition={{ type: "spring", stiffness: 300 }}
    className="
      text-[var(--color-bg)]
      hover:text-[var(--color-primary)]
      bg-[var(--color-primary)]
      hover:bg-transparent 
      p-[12px]
      rounded-[10px]
      flex border border-transparent
      hover:border-[var(--color-primary)]
      transition-[var(--transition)]
    "
    href="https://instagram.com/hnjojo2024"  // 🔥 ضعي رابطك هنا
    
    target="_blank"
    rel="noopener noreferrer"
  >
    <FaInstagram />
  </motion.a>

  {/* Github */}
  <motion.a
    whileHover={{ scale: 1.2, rotate: 10 }}
    transition={{ type: "spring", stiffness: 300 }}
    className="
      text-[var(--color-bg)]
      hover:text-[var(--color-primary)]
      bg-[var(--color-primary)]
      hover:bg-transparent 
      p-[12px]
      rounded-[10px]
      flex border border-transparent
      hover:border-[var(--color-primary)]
      transition-[var(--transition)]
    "
    href="https://github.com/jessyhneino"     // 🔥 ضعي رابطك هنا
    target="_blank"
    rel="noopener noreferrer"
  >
    <FaGithub />
  </motion.a>
</motion.div>


  {/* Copyright */}
  <motion.div variants={itemVariants}>
    <small className="text-[var(--color-white)] text-[16px]">
      &copy;{" "}
      <a
        href="#"
        className="text-[var(--color-primary)] font-semibold transition-[var(--transition)]"
      >
        JessyHneino
      </a>{" "}
      All rights reserved
    </small>
  </motion.div>
</motion.footer>

  );
}

export default Footer;
