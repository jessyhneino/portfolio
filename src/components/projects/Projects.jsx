import React from "react";
import { motion } from "framer-motion";
import "./projects.css";
import IMG1 from "../../assets/weather.png";
import IMG2 from "../../assets/portfolio1.jpg";
import IMG3 from "../../assets/portfolio2.jpg";
import IMG4 from "../../assets/portfolio3.jpg";
import IMG5 from "../../assets/portfolio4.jpg";

const portfolioData = [
  {
    id: 1,
    image: IMG1,
    title: "Portfolio Item 1",
    github: "https://github.com/jessyhneino/weather-project.git",
    demo: "https://joyful-pudding-1a5f22.netlify.app/",
  },
  {
    id: 2,
    image: IMG2,
    title: "Portfolio Item 2",
    github: "https://github.com/jessyhneino/weather-project.git",
    demo: "https://joyful-pudding-1a5f22.netlify.app/",
  },
  {
    id: 3,
    image: IMG3,
    title: "Portfolio Item 3",
    github: "https://github.com/jessyhneino/weather-project.git",
    demo: "https://joyful-pudding-1a5f22.netlify.app/",
  },
  {
    id: 4,
    image: IMG4,
    title: "Portfolio Item 4",
    github: "https://github.com/jessyhneino/weather-project.git",
    demo: "https://joyful-pudding-1a5f22.netlify.app/",
  },
  {
    id: 5,
    image: IMG5,
    title: "Portfolio Item 5",
    github: "https://github.com/jessyhneino/weather-project.git",
    demo: "https://joyful-pudding-1a5f22.netlify.app/",
  },
];

function Project() {
  return (
    <section className="pt-32 max-[600px]:pt-[5rem] max-lg:pt-[6rem]" id="project">
      {/* top_section */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <h5 className="font-medium text-center text-[var(--color-light)]">
          My Recent Work
        </h5>
        <h2 className="font-medium text-[1.8rem] text-center text-[var(--color-primary)] mb-12 max-[600px]:mb-8">
          Portfolio
        </h2>
      </motion.div>

      {/* projects_container */}
      <div className="w-[80%] max-[600px]:w-[90%] max-lg:w-[85%] mx-auto grid grid-cols-3 gap-8 max-[900px]:grid-cols-2 max-sm:grid-cols-1">
        {portfolioData.map(({ id, image, title, github, demo }, index) => (
          <motion.article
            key={id}
            className="bg-[var(--color-bg-var)] border border-[var(--color-bg-variant)] rounded-lg overflow-hidden p-3"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            {/* img */}
            <div>
              <img className="block w-full object-cover rounded-md" src={image} alt={title} />
            </div>

            <h3 className="font-medium text-center mt-3 mb-3 text-[var(--color-primary)]">
              {title}
            </h3>

            {/* buttons */}
            <div className="flex gap-4 justify-center">
              <a
                href={github}
                target="_blank"
                className="text-center w-max inline-block p-3 rounded-[0.4rem] cursor-pointer border border-[var(--color-primary)] text-[var(--color-primary)] transition duration-300 hover:bg-[var(--color-white)] hover:text-[var(--color-bg)] hover:border-transparent"
              >
                Github
              </a>

              <a
                href={demo}
                target="_blank"
                className="text-center w-max inline-block p-3 rounded-[0.4rem] cursor-pointer border border-[var(--color-primary)] bg-[var(--color-primary)] text-[var(--color-bg)] transition duration-300 hover:bg-[var(--color-white)] hover:text-[var(--color-bg)] hover:border-transparent"
              >
                Live Demo
              </a>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

export default Project;
