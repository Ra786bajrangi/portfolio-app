const Footer = () => {
  return (
    <footer className="bg-[#0f172a] text-gray-400 py-6 border-t border-cyan-700/30">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-sm">
        <p className="mb-3 md:mb-0 text-center">
          © {new Date().getFullYear()} Crafted by{" "}
          <span className="text-cyan-400 font-semibold">Rakesh Ranjan</span>. All rights reserved.
        </p>
        <div className="flex gap-4">
          <a
            href="https://github.com/Ra786bajrangi"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/your-linkedin"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition"
          >
            LinkedIn
          </a>
          <a
            href="#contact"
            className="hover:text-cyan-400 transition"
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
