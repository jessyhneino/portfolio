import React from "react";
import "./about.css";
import ImageMe from "../../assets/me-about.png";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
import { motion } from "framer-motion";

function About() {
  return (
    <section
      className="pt-32 max-[600px]:pt-[5rem] max-lg:pt-[6rem]"
      id="about"
    >
      {/* top_section */}
      <motion.div 
        className=""
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <h5 className="font-medium text-center text-[var(--color-light)]">
          Get To Know
        </h5>
        <h2 className="font-medium text-[1.8rem] text-center text-[var(--color-primary)] mb-12 max-[600px]:mb-8">
          About Me
        </h2>
      </motion.div>

      {/* container about_container */}
      <div className="w-[80%] max-[600px]:w-[90%] max-lg:w-[85%] mx-auto grid grid-cols-[35%_50%] gap-[15%] max-lg:grid-cols-1 max-lg:gap-0">

        {/* about_me */}
        <motion.div
          className="w-full aspect-[1/1] rounded-[2rem] bg-[linear-gradient(45deg,transparent,var(--color-primary),transparent)]
          max-[600px]:w-[65%] max-[600px]:mx-auto max-[600px]:mb-[60px] 
          max-lg:w-[65%] max-lg:mx-auto max-lg:my-8 max-lg:mb-[60px]"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <div className="rotate-[10deg] h-[140%]  hover:rotate-0 rounded-[2rem] overflow-hidden transition-all duration-300">
            <img className="block w-full object-cover" src={ImageMe} alt="" />
          </div>
        </motion.div>

        {/* about_content */}
        <motion.div
          className="max-[600px]:text-center"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* about_cards */}
          <div className="grid grid-cols-3 gap-6 max-[600px]:grid-cols-2 max-[600px]:gap-4">
            {/* about_card 1 */}
            <motion.div
              className="bg-(--color-bg-variant) border border-transparent rounded-[1rem] p-8 text-center transition-(--transition)
                hover:bg-transparent hover:border-[var(--color-bg-variant)] flex flex-col items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <FaAward className="text-[var(--color-primary)] text-[2rem] mb-4" />
              <h5 className="font-medium text-[0.9rem]">Experience</h5>
              <small className="text-[0.7rem] text-[var(--color-light)]">2+ years experience</small>
            </motion.div>

            {/* about_card 2 */}
            <motion.div
              className="bg-(--color-bg-variant) border border-transparent rounded-[1rem] p-8 text-center transition-(--transition)
                hover:bg-transparent hover:border-[var(--color-bg-variant)] flex flex-col items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <FiUsers className="text-[var(--color-primary)] text-[2rem] mb-4" />
              <h5 className="font-medium text-[0.9rem]">Clients</h5>
              <small className="text-[0.7rem] text-[var(--color-light)]">200+ worldwide</small>
            </motion.div>

            {/* about_card 3 */}
            <motion.div
              className="bg-(--color-bg-variant) border border-transparent rounded-[1rem] p-8 text-center transition-(--transition)
                hover:bg-transparent hover:border-[var(--color-bg-variant)] flex flex-col items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <VscFolderLibrary className="text-[var(--color-primary)] text-[2rem] mb-4" />
              <h5 className="font-medium text-[0.9rem]">Projects</h5>
              <small className="text-[0.7rem] text-[var(--color-light)]">80+ completed</small>
            </motion.div>
          </div>

          <p className="my-[2rem] mt-[2rem] mb-[2.6rem] text-[var(--color-light)] max-[600px]:my-6 max-lg:my-6">
            I'm Jessy Hneino, a full-stack developer from Syria with 2+ years of experience shipping 
            React.js frontends powered by Laravel and PHP backends. Graduated from the Faculty of Informatics Engineering 
            at the University of Latakia. I thrive on translating product ideas into performant interfaces, strong APIs, and reusable component systems. 
            I completed my full-stack training at AraTech Company. Beyond shipping features, I care deeply about collaboration,
            accessibility, and building in both Arabic and English.
          </p>

          {/* btn btn-primary */}
          <motion.a
            href="#contact"
            className="w-max inline-block p-3 rounded-[0.4rem] cursor-pointer 
              border border-(--color-primary) transition-(--transition) text-(--color-primary)
              hover:bg-(--color-white) hover:text-(--color-bg) hover:border-transparent"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Let's Talk
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
