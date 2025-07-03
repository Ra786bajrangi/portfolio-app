import { useState } from "react";
import { motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

const links = ["Home", "About", "Projects", "Contact"];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollTo = (id) => {
    const el = document.getElementById(id.toLowerCase());
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 w-full z-50 bg-black/60 backdrop-blur-md shadow-md"
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3 text-white">
        <h1 className="text-2xl font-bold tracking-wider">
          <span className="text-cyan-400">Crafted</span> by Rakesh
        </h1>

        {/* Desktop menu */}
        <ul className="hidden md:flex gap-8 font-medium">
          {links.map((link) => (
            <li
              key={link}
              onClick={() => scrollTo(link)}
              className="cursor-pointer hover:text-cyan-400 transition"
            >
              {link}
            </li>
          ))}
        </ul>

        {/* Mobile toggle button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.ul
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-black/90 text-white px-4 py-4 space-y-4"
        >
          {links.map((link) => (
            <li
              key={link}
              onClick={() => scrollTo(link)}
              className="cursor-pointer hover:text-cyan-400 transition"
            >
              {link}
            </li>
          ))}
        </motion.ul>
      )}
    </motion.nav>
  );
};

export default Navbar;
