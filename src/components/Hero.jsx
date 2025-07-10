import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <div className="text-center px-4 max-w-2xl z-10">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-5xl font-bold text-white mb-4"
        >
          Hi 👋 I'm{" "}
          <span className="text-cyan-400 underline underline-offset-4">
            Rakesh Ranjan
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-lg text-gray-300 mb-6"
        >
          A passionate Full-Stack Developer crafting beautiful web experiences.
        </motion.p>

        <motion.div
          className="flex justify-center gap-6 text-white text-2xl mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <a
            href="https://github.com/Ra786bajrangi"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition"
          >
            <FaGithub />
          </a>
          
        </motion.div>

        <motion.a
          href="/Rakesh_Ranjan_CV.pdf" // replace with your actual file path
          download
          className="inline-block bg-cyan-400 text-black px-6 py-2 rounded-full font-semibold hover:bg-cyan-500 transition"
          whileHover={{ scale: 1.05 }}
        >
          Download CV
        </motion.a>
      </div>
    </section>
  );
};

export default Hero;
