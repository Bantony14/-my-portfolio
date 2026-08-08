import React, { useState, useRef } from "react";
import { NavLink } from "react-router-dom";
import { FaGithub, FaLinkedinIn, FaTwitter, FaInstagram } from "react-icons/fa";

const HeroSection = () => {
  const [profileImage, setProfileImage] = useState(null);
  const fileInputRef = useRef(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfileImage(imageUrl);
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-between px-12 pt-24 pb-12 bg-[#060b18] relative overflow-hidden">
      {/* ===== Decorative Background Orbs ===== */}
      <div className="absolute top-[20%] right-[30%] w-3 h-3 rounded-full bg-[#4f7df3] opacity-60"></div>
      <div className="absolute bottom-[25%] right-[38%] w-2.5 h-2.5 rounded-full bg-[#4f7df3] opacity-40"></div>
      <div className="absolute top-[60%] right-[22%] w-2 h-2 rounded-full bg-[#4f7df3] opacity-50"></div>

      {/* ===== Left Content ===== */}
      <div className="max-w-[560px] z-10">
        {/* Greeting */}
        <p className="text-[1rem] font-medium bg-gradient-to-r from-[#6366f1] to-[#4f7df3] bg-clip-text text-transparent mb-3">
          Hi, I'm
        </p>

        {/* Name */}
        <h1 className="text-[3.5rem] font-extrabold leading-tight mb-1">
          <span className="text-white">Bantony </span>
          <span className="bg-gradient-to-r from-[#6366f1] via-[#5a6ef5] to-[#4f7df3] bg-clip-text text-transparent italic">
            Singh
          </span>
        </h1>

        {/* Title */}
        <h2 className="text-[1.25rem] font-semibold text-white mb-5 tracking-wide">
          MERN Stack Developer
        </h2>

        {/* Description */}
        <p className="text-[0.95rem] leading-relaxed text-[#7a8baa] mb-8 max-w-[440px]">
          I build modern, responsive and scalable web applications using the
          MERN stack. Passionate about clean code, UI/UX and solving real-world
          problems.
        </p>

        {/* Buttons */}
        <div className="flex items-center gap-4 mb-8">
          <NavLink
            to="/projects"
            className="flex items-center gap-2 bg-gradient-to-r from-[#6366f1] to-[#4f7df3] text-white px-6 py-3 rounded-full text-[0.9rem] font-semibold no-underline transition-all duration-300 hover:shadow-[0_0_25px_rgba(99,102,241,0.4)] hover:scale-105"
          >
            View My Work &nbsp;→
          </NavLink>

          <NavLink
            to="/contact"
            className="flex items-center gap-2 bg-transparent text-white border border-[#1c2640] px-6 py-3 rounded-full text-[0.9rem] font-medium no-underline transition-all duration-300 hover:bg-[#111827] hover:border-[#2a3a5c]"
          >
            ✉ &nbsp;Contact Me
          </NavLink>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-5">
          {[
            { label: "GitHub", icon: <FaGithub />, link: "#" },
            { label: "LinkedIn", icon: <FaLinkedinIn />, link: "#" },
            { label: "Twitter", icon: <FaTwitter />, link: "#" },
            { label: "Instagram", icon: <FaInstagram />, link: "#" },
          ].map((social) => (
            <a
              key={social.label}
              href={social.link}
              aria-label={social.label}
              className="w-10 h-10 rounded-full border border-[#1c2640] bg-[#111827] flex items-center justify-center text-[#7a8baa] text-lg no-underline transition-all duration-300 hover:bg-[#1a2338] hover:text-white hover:border-[#4f7df3]"
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>

      {/* ===== Right Side - Profile Image ===== */}
      <div className="relative z-10 mr-12">
        {/* Decorative Dots Grid */}
        <div className="absolute -right-16 top-4 grid grid-cols-4 gap-2 opacity-30">
          {Array(16)
            .fill(0)
            .map((_, i) => (
              <div
                key={i}
                className="w-1.5 h-1.5 rounded-full bg-[#4f7df3]"
              ></div>
            ))}
        </div>

        {/* Outer Glowing Ring */}
        <div className="w-[340px] h-[340px] rounded-full bg-gradient-to-br from-[#6366f1] via-[#4f7df3] to-[#1e3a8a] p-[3px] shadow-[0_0_60px_rgba(79,125,243,0.25)]">
          {/* Inner Dark Ring */}
          <div className="w-full h-full rounded-full bg-[#060b18] p-[4px]">
            {/* Image Container */}
            <div className="w-full h-full rounded-full overflow-hidden bg-[#0d1326]">
              <img
                src="/images/profile.png"
                alt="Bantony Singh"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Bottom-left decorative circle */}
        <div className="absolute -bottom-4 -left-6 w-5 h-5 rounded-full border-2 border-[#4f7df3] opacity-50"></div>
      </div>
    </section>
  );
};

export default HeroSection;
