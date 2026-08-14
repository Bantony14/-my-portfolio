import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Skills", path: "/skills" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-10 py-4 bg-[#0a0f1a]/80 backdrop-blur-md border-b border-[#ffffff08]">
      {/* Logo */}
      <NavLink
        to="/"
        className="text-[1.4rem] font-bold text-[#e2e8f0] tracking-tight no-underline"
      >
        Bantony<span className="text-[#4f7df3]">.</span>
      </NavLink>

      {/* Navigation Links */}
      <ul className="flex items-center gap-8 list-none m-0 p-0">
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

      {/* Actions */}
      <div className="flex items-center gap-3">
        {/* Download CV Button */}
        <a
          href="/resume.pdf"
          download="Singh-Bantony-Upendra-Resume.pdf"
          className="flex items-center gap-2.5 bg-[#111827] text-[#c5cee0] border border-[#1c2640] px-4 py-2 rounded-full text-[0.85rem] font-medium cursor-pointer transition-all duration-300 hover:bg-[#1a2338] hover:border-[#2a3a5c] hover:text-white"
        >
          ⬇ Download CV →
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
