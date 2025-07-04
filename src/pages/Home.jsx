import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import image3 from "../assets/image3.jpg"
const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-white flex items-center justify-center"
    >
      <div className="text-center p-6 max-w-3xl">
        <motion.img
          src={image3}
          alt="Profile"
          className="mx-auto w-32 h-32 rounded-full border-4 border-white mb-6"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 120 }}
        />

        <motion.h1
          className="text-4xl md:text-6xl font-extrabold mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Hi, I'm <span className="text-yellow-300">Rakesh</span>
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-white/90 mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          Full Stack Developer • Data Visualizer • Open Source Enthusiast
        </motion.p>

        <motion.div
          className="flex justify-center gap-6 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <a
            href="#projects"
            className="px-6 py-3 bg-white text-indigo-600 font-semibold rounded-full shadow-lg hover:scale-105 transition"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-white text-white font-semibold rounded-full hover:bg-white hover:text-indigo-600 transition"
          >
            Contact Me
          </a>
        </motion.div>

        <motion.div
          className="flex justify-center gap-6 text-2xl"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.8 }}
        >
          <a href="https://github.com/Ra786bajrangi" target="_blank" rel="noreferrer">
            <FaGithub className="hover:text-gray-300" />
          </a>
          <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noreferrer">
            <FaLinkedin className="hover:text-gray-300" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
