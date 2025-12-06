import React, { useRef } from "react";
import { motion } from "framer-motion";
import "./contact.css";

import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";

import emailjs from "@emailjs/browser";

const ContactData = [
  {
    id: 1,
    icon: <MdOutlineEmail />,
    title: "Email",
    info: "jessyhneino@gmail.com",
    link: "mailto:jessyhneino@gmail.com",
  },
  {
    id: 2,
    icon: <RiMessengerLine />,
    title: "Messenger",
    info: "Jessy Hneino",
    link: "https://m.me/jojo.mo.hn.2025",
  },
  {
    id: 3,
    icon: <BsWhatsapp />,
    title: "WhatsApp",
    info: "0934512431",
    link: "https://api.whatsapp.com/send?phone=0934512431",
  },
];

function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_kmx7vgo",
      "template_buzoyrq",
      form.current,
      "lxI5idH45n6iQrC6K"
    );
    e.target.reset();
  };

  return (
    <section
      className="pt-32 max-[600px]:pt-[5rem] max-lg:pt-[6rem]"
      id="contact"
    >
      {/* top_section */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <h5 className="font-medium text-center text-[var(--color-light)]">
          Get In Touch
        </h5>
        <h2 className="font-medium text-[1.8rem] text-center text-[var(--color-primary)] mb-12 max-[600px]:mb-8">
          Contact Me
        </h2>
      </motion.div>

      {/* contact_container */}
      <div className="w-[80%] max-[600px]:w-[90%] max-lg:w-[85%] mx-auto flex justify-between gap-10 max-md:flex-col">
        {/* contact_options */}
        <div className="flex flex-col gap-6 w-[35%] max-md:w-full">
          {ContactData.map(({ id, icon, title, info, link }, index) => (
            <motion.article
              key={id}
              className="p-[1.2rem] rounded-[1.2rem] text-center border border-transparent transition-[var(--transition)] bg-[var(--color-bg-var)] hover:bg-[var(--color-bg)] hover:border hover:border-[var(--color-primary)]"
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="text-[40px] mb-2 flex justify-center">{icon}</div>
              <h4 className="font-medium">{title}</h4>
              <h5 className="font-medium text-[var(--color-light)]">{info}</h5>
              <a
                href={link}
                target="_blank"
                className="text-[var(--color-primary)] transition-[var(--transition)] hover:text-[var(--color-white)] mt-2 inline-block"
              >
                Send Message
              </a>
            </motion.article>
          ))}
        </div>

        {/* FORM */}
        <motion.form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col w-[55%] max-md:w-full gap-4"
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <input
            type="text"
            placeholder="Full Name"
            name="name"
            className="border border-[3px] border-[var(--color-bg-variant)] bg-[var(--color-bg)] p-3 rounded-md"
          />
          <input
            type="email"
            placeholder="Your Email"
            name="email"
            className="border border-[3px] border-[var(--color-bg-variant)] p-3 rounded-md"
          />
          <textarea
            placeholder="Enter Your Message"
            name="message"
            rows={10}
            className="border border-[3px] border-[var(--color-bg-variant)] p-5 rounded-md "
          ></textarea>

          <button className="text-center w-max inline-block px-6 py-3 rounded-md cursor-pointer border border-[var(--color-primary)] transition-[var(--transition)] bg-[var(--color-primary)] text-[var(--color-bg)] hover:bg-[var(--color-white)] hover:text-[var(--color-bg)] hover:border-transparent">
            Send Message
          </button>
        </motion.form>
      </div>
    </section>
  );
}

export default Contact;
