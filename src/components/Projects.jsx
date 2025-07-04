import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Excel Data Visualizer",
    description:
      "A full-stack web app to upload Excel files and visualize data using 2D/3D charts with Plotly and Three.js. Users can select chart types, axes, and download charts. Includes secure login, upload history, and admin management.",
    tech: ["React", "Vite", "Tailwind CSS", "Node.js", "Express", "MongoDB Atlas", "JWT", "Plotly", "Three.js"],
    live: "https://excel-plotiply-app.vercel.app",
    github: "https://github.com/Ra786bajrangi/excel-plotiply-app",
  },
  {
    title: "Lexora Blog Platform",
    description:
      "A modern blog CMS for posting, editing, and managing blogs with user authentication, role-based access, and MongoDB storage. Admins can manage posts and users, and readers can explore content with a clean UI.",
    tech: ["React", "Vite", "Tailwind CSS", "Node.js", "Express", "MongoDB Atlas", "JWT"],
    live: "https://your-lexora-blog.vercel.app",
    github: "https://github.com/Ra786bajrangi/lexora-platform",
  },
  {
    title: "Green Plantation Dashboard",
    description:
      "A tree plantation tracking platform with weather comparison charts, leaderboards, maps, and user profiles. Admins can assign planting goals, and users can log plantations and view rankings.",
    tech: ["React", "Vite", "Tailwind CSS", "Node.js", "Express", "MongoDB Atlas", "JWT", "Visual Crossing API"],
    live: "https://green-plantation-dashboard.vercel.app",
    github: "https://github.com/Ra786bajrangi/green-plantation-dashboard",
  },
  {
  title: "Ecommerce Stripe Payment UI",
  description:
    "A responsive eCommerce frontend built with React and Bootstrap featuring product listings, cart functionality using Redux, and Stripe Checkout integration. Designed for seamless payment experience without a backend.",
  tech: ["React", "Redux", "Bootstrap", "Stripe"],
  live: "https://your-stripe-shop.vercel.app",
  github: "https://github.com/Ra786bajrangi/ecommerce-stripe-app",
}

];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-[#0f172a] text-white px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          🌟 My Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="bg-[#1e293b] rounded-xl p-6 shadow-lg border border-transparent hover:border-cyan-400 hover:shadow-cyan-400/40 transition duration-300"
            >
              <h3 className="text-xl font-semibold mb-2 text-cyan-400">
                {project.title}
              </h3>
              <p className="text-gray-300 text-sm mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 text-xs mb-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-cyan-600/20 text-cyan-300 px-2 py-1 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4 text-lg">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan-400"
                  title="GitHub"
                >
                  <FaGithub />
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan-400"
                  title="Live Demo"
                >
                  <FaExternalLinkAlt />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
