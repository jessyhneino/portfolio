import React from "react";
import { motion } from "framer-motion";
import Me from "../../assets/me.png";
import CV from "../../assets/cv.pdf";

function Home() {
  return (
    <div className="w-[100%] p-[40px] sm:p-[60px] md:p-[100px] overflow-hidden" id="home">
      <div className="w-[100%] md:w-[85%] lg:w-[80%] mx-auto h-full relative lg:contents">

        {/* layout: split left + right */}
        <div className="w-[100%] pt-[96px] flex flex-col-reverse justify-center md:flex-row items-center gap-10">

          {/* LEFT SIDE – TEXT */}
          <motion.div
            className="flex-1 text-center md:text-left lg:ml-[20px]"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <h4 className="font-medium text-[1.5rem]">Hello I'm</h4>
            <h1 className="text-[2.3rem] sm:text-[2.5rem] font-bold text-(--color-primary)">
              Jessy Hneino
            </h1>
            <h4 className="font-medium text-(--color-light) text-[1.5rem]">
              Full Stack Developer 
            </h4>

            <p className="mt-6 text-[1rem] leading-7 text-gray-300">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Curabitur id nunc nec urna ultricies vulputate. Duis feugiat 
              magna vel lectus fermentum, nec facilisis risus tempus.
            </p>

            {/* buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-[0.8rem] sm:gap-[1.2rem] mt-[2.5rem] justify-center md:justify-start items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <a
                href={CV}
                download
                className="w-max inline-block p-3 rounded-[0.4rem] cursor-pointer 
                border border-(--color-primary) transition-(--transition) text-(--color-primary)
                hover:bg-(--color-white) hover:text-(--color-bg) hover:border-transparent"
              >
                Download CV
              </a>

              <a
                href="#contact"
                className="w-max inline-block p-3 rounded-[0.4rem] cursor-pointer 
                border border-(--color-primary) transition-(--transition) 
                hover:bg-(--color-white) hover:text-(--color-bg) hover:border-transparent bg-(--color-primary)"
              >
                Let's Talk
              </a>
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE – IMAGE */}
          <motion.div
            className="flex-1 flex justify-end"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <div className="
                w-[230px] h-[300px]
                sm:w-[300px] sm:h-[360px]
                md:w-[330px] md:h-[400px]
                bg-[linear-gradient(var(--color-primary),_transparent)]
                rounded-t-[12rem]
                p-[3rem_1rem_1rem_1rem]
                sm:p-[5rem_1.5rem_1.5rem_1.5rem]
                overflow-hidden
                flex
                justify-center
                lg:mr-[45px]
              "
            >
              <img className="object-cover h-full w-[80%] ml-[18px]" src={Me} alt="" />
            </div>
          </motion.div>

        </div>

        {/* scroll_down
        <motion.a
          href="#about"
          className="hidden sm:block text-(--color-primary) hover:text-(--color-white) absolute right-[-140px] rotate-90 font-light transition-all"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          Scroll Down
        </motion.a> */}

      </div>
    </div>
  );
}

export default Home;
