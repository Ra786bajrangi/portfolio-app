import { motion } from "framer-motion";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {  FaGithub, FaEnvelope } from "react-icons/fa";
import confetti from "canvas-confetti";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          toast.success("🎉 Message sent successfully!");
          form.current.reset();
          confetti({
            particleCount: 120,
            spread: 80,
            origin: { y: 0.6 },
            colors: ["#06b6d4", "#0ea5e9", "#facc15", "#f472b6"],
          });
        },
        (error) => {
          console.error(error);
          toast.error("❌ Failed to send. Try again later.");
        }
      );
  };

  return (
    <section id="contact" className="py-20 bg-[#0f172a] text-white px-4">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-6 text-cyan-400"
        >
          📬 Contact Me
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-gray-300 mb-8"
        >
          Have a project in mind? Let’s build something amazing together.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-white/10 backdrop-blur-md p-8 rounded-xl border border-cyan-500 shadow-lg max-w-xl mx-auto"
        >
          <form ref={form} onSubmit={sendEmail} className="space-y-6">
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              className="w-full px-4 py-3 bg-[#1e293b] border border-cyan-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
              required
            />
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              className="w-full px-4 py-3 bg-[#1e293b] border border-cyan-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
              required
            />
            <textarea
              rows="5"
              name="message"
              placeholder="Your Message"
              className="w-full px-4 py-3 bg-[#1e293b] border border-cyan-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
              required
            ></textarea>
            <button
              type="submit"
              className="bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-black font-semibold py-3 px-6 rounded-lg transition duration-300 w-full"
            >
              Send Message 🚀
            </button>
          </form>
        </motion.div>

        {/* Social Icons */}
        <div className="mt-8 flex justify-center gap-6 text-2xl text-cyan-400">
          <a
            href="https://github.com/Ra786bajrangi"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-300 transition"
          >
            <FaGithub />
          </a>
          <a
            href="mailto:rakeshbeheramuna@gmail.com"
            className="hover:text-cyan-300 transition"
          >
            <FaEnvelope />
          </a>
        </div>

        {/* Resume Download */}
        <a
          href="/resume.pdf"
          download
          className="inline-block mt-6 text-cyan-400 underline hover:text-cyan-300"
        >
          📄 Download Resume
        </a>
      </div>

      {/* Toast Notification */}
      <ToastContainer position="top-center" autoClose={3000} theme="dark" />
    </section>
  );
};

export default Contact;
