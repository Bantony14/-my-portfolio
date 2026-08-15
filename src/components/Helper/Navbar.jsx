import { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Skills", path: "/skills" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#0a0f1a]/80 backdrop-blur-md border-b border-[#ffffff08]">
      <div className="flex items-center justify-between px-5 md:px-10 py-4">
        {/* Logo */}
        <NavLink
          to="/"
          className="text-[1.4rem] font-bold text-[#e2e8f0] tracking-tight no-underline"
        >
          Bantony<span className="text-[#4f7df3]">.</span>
        </NavLink>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex items-center gap-8 list-none m-0 p-0">
          {navLinks.map((link) => (
            <li key={link.name}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `text-[0.9rem] font-medium no-underline transition-all duration-300 relative pb-2
                  ${
                    isActive
                      ? 'text-[#4f7df3] after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[#4f7df3] after:rounded-full'
                      : "text-[#7a8baa] hover:text-[#c5cee0]"
                  }`
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Desktop Download CV Button */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="/Singh-Bantony-Upendra-Resume.pdf"
            download="Singh-Bantony-Upendra-Resume.pdf"
            className="flex items-center gap-2.5 bg-[#111827] text-[#c5cee0] border border-[#1c2640] px-4 py-2 rounded-full text-[0.85rem] font-medium cursor-pointer transition-all duration-300 hover:bg-[#1a2338] hover:border-[#2a3a5c] hover:text-white"
          >
            ⬇ Download CV →
          </a>
        </div>

        {/* Hamburger Button (Mobile only) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col justify-center items-center gap-[5px] bg-transparent border-none cursor-pointer p-2"
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-[2px] bg-[#c5cee0] rounded-full transition-all duration-300 ${
              isOpen ? "rotate-45 translate-y-[7px]" : ""
            }`}
          />
          <span
            className={`block w-6 h-[2px] bg-[#c5cee0] rounded-full transition-all duration-300 ${
              isOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-[2px] bg-[#c5cee0] rounded-full transition-all duration-300 ${
              isOpen ? "-rotate-45 -translate-y-[7px]" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu (hidden on desktop) */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col items-center gap-5 list-none m-0 px-5 py-6 border-t border-[#ffffff08]">
          {navLinks.map((link) => (
            <li key={link.name}>
              <NavLink
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `text-[1rem] font-medium no-underline transition-all duration-300
                  ${isActive ? "text-[#4f7df3]" : "text-[#7a8baa]"}`
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}
          <li>
            <a
              href="/Singh-Bantony-Upendra-Resume.pdf"
              download="Singh-Bantony-Upendra-Resume.pdf"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-2.5 bg-[#111827] text-[#c5cee0] border border-[#1c2640] px-5 py-2.5 rounded-full text-[0.9rem] font-medium cursor-pointer transition-all duration-300 hover:bg-[#1a2338] hover:border-[#2a3a5c] hover:text-white"
            >
              ⬇ Download CV →
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
