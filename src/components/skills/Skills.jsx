import React from "react";
import "./skills.css";
import { motion } from "framer-motion";

import css from "../../assets/css3.svg";
import Bootstrap from "../../assets/bootstrap.svg";
import Figma from "../../assets/figma.svg";
import Javascript from "../../assets/javascript.svg";
import MySql from "../../assets/mysql.svg";
import Nextjs from "../../assets/nextjs.svg";
import Reactjs from "../../assets/react.svg";
import Tailwind from "../../assets/tailwindcss.svg";

const SkillsData = [
  { id: 1, image: css, title: "CSS", disc: "User Interface" },
  { id: 2, image: Bootstrap, title: "Bootstrap", disc: "CSS Framework" },
  { id: 3, image: Figma, title: "Figma", disc: "Design tool" },
  { id: 4, image: Javascript, title: "JavaScript", disc: "Interaction" },
  { id: 5, image: MySql, title: "MySql", disc: "Database" },
  { id: 6, image: Nextjs, title: "NextJS", disc: "Web Server" },
  { id: 7, image: Reactjs, title: "React", disc: "Framework" },
  { id: 8, image: Tailwind, title: "TailwindCSS", disc: "User Interface" },
];

function Skills() {
  return (
    <section
      className="pt-32 max-[600px]:pt-[5rem] max-lg:pt-[6rem]"
      id="skill"
    >
      {/* top_section */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <h5 className="font-medium text-center text-[var(--color-light)]">
          What Skills I Have
        </h5>
        <h2 className="font-medium text-[1.8rem] text-center text-[var(--color-primary)] mb-12 max-[600px]:mb-8">
          My Experience
        </h2>
      </motion.div>

      {/* container_skills */}
      <div
        className="
          w-[80%] max-[600px]:w-[90%] max-lg:w-[85%] mx-auto
          grid grid-cols-4 gap-6
          max-[1000px]:grid-cols-3
          max-[750px]:grid-cols-2
        "
      >
        {SkillsData.map(({ id, image, title, disc }, index) => (
          <motion.article
            key={id}
            className="flex max-[750px]:flex-col max-[750px]:text-center max-[750px]:justify-center
              items-center gap-[10px] border border-[var(--color-bg-variant)]
              p-[10px] rounded-[12px] mb-[20px]"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            {/* icon */}
            <div className="w-[65px] h-[65px] p-[7px] rounded-[10px] bg-[var(--color-bg-variant)]">
              <img className="block w-full object-cover" src={image} alt={title} />
            </div>

            {/* content */}
            <div>
              <h4 className="font-medium text-[16px]">{title}</h4>
              <p className="text-[var(--color-light)] text-[14px]">{disc}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

export default Skills;
