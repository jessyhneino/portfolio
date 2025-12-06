import React from "react";
import "./services.css";
import { motion } from "framer-motion";

import { MdDesignServices } from "react-icons/md";
import { IoIosRocket } from "react-icons/io";
import { FaCode } from "react-icons/fa";

const servicesData = [
  {
    id: 1,
    icon: <MdDesignServices className="text-[40px] mx-auto mb-3 text-[var(--color-primary)]" />,
    title: "Web Design",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis voluptatem, commodi facilis velit dolorum fugit in ullam vero.",
  },
  {
    id: 2,
    icon: <IoIosRocket className="text-[40px] mx-auto mb-3 text-[var(--color-primary)]" />,
    title: "Fast Performance",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis voluptatem, commodi facilis velit dolorum fugit in ullam vero.",
  },
  {
    id: 3,
    icon: <FaCode className="text-[40px] mx-auto mb-3 text-[var(--color-primary)]" />,
    title: "Clean Code",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis voluptatem, commodi facilis velit dolorum fugit in ullam vero.",
  },
];

function Services() {
  return (
    <section className="pt-32 max-[600px]:pt-[5rem] max-lg:pt-[6rem]" id="service">
      {/* top_section */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <h5 className="font-medium text-center text-[var(--color-light)]">What I Offer</h5>
        <h2 className="font-medium text-[1.8rem] text-center text-[var(--color-primary)] mb-12 max-[600px]:mb-8">
          Services
        </h2>
      </motion.div>

      {/* container_services */}
      <div className="w-[80%] max-[600px]:w-[90%] max-lg:w-[85%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {servicesData.map(({ id, icon, title, desc }, index) => (
          <motion.article
            key={id}
            className="bg-[var(--color-bg-var)] p-6 rounded-xl transition-all border border-transparent hover:bg-[var(--color-bg)] hover:border-[var(--color-primary)] text-center"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            {icon}
            <h3 className="font-medium mb-2">{title}</h3>
            <p className="text-[var(--color-light)]">{desc}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

export default Services;
