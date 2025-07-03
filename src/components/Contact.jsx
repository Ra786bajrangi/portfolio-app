import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-[#0f172a] text-white px-4">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-8 text-cyan-400"
        >
          📬 Contact Me
        </motion.h2>

        <motion.form
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="space-y-6 max-w-xl mx-auto"
          onSubmit={(e) => {
            e.preventDefault();
            alert("Email sending not connected yet.");
          }}
        >
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-3 bg-[#1e293b] border border-cyan-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-4 py-3 bg-[#1e293b] border border-cyan-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
            required
          />
          <textarea
            rows="5"
            placeholder="Your Message"
            className="w-full px-4 py-3 bg-[#1e293b] border border-cyan-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
            required
          ></textarea>
          <button
            type="submit"
            className="bg-cyan-400 hover:bg-cyan-500 text-black font-semibold py-3 px-6 rounded-lg transition duration-300"
          >
            Send Message
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
