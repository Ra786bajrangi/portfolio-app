import { motion } from "framer-motion";
import image3 from "../assets/image3.jpg";




const skills = [
  "React.js", "Tailwind CSS", "Node.js", "MongoDB", "JWT",
  "Firebase", "Chart.js", "Three.js", "Redux Toolkit",
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-[#0f172a] text-white px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 items-center gap-12">
        {/* Text Content */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-cyan-400">
            About Me
          </h2>
          <p className="text-gray-300 mb-4 leading-relaxed">
            I'm <span className="text-cyan-300 font-semibold">Rakesh Ranjan</span>,
            a full-stack developer passionate about building modern, interactive web applications.
            I love turning ideas into reality using clean code and scalable systems.
          </p>
          <p className="text-gray-400 mb-6">
            Whether it's crafting dashboards, visualizing data, or implementing authentication,
            I focus on performance, user experience, and elegant design.
          </p>

          <h3 className="text-xl font-semibold text-white mb-2">Technologies I Use:</h3>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, i) => (
              <span
                key={i}
                className="bg-cyan-600/20 text-cyan-300 px-3 py-1 rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Profile Image */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="w-full flex justify-center"
        >
          <img
            src={image3} // Replace with your image path
            alt="Rakesh Ranjan Behera"
            className="w-64 h-64 rounded-full object-cover shadow-xl border-4 border-cyan-400"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default About;
