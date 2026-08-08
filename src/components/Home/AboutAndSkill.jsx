import React from "react";
import { NavLink } from "react-router-dom";
import { User, Mail, MapPin, CircleDot } from "lucide-react";
import { FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import {
  SiExpress,
  SiMongodb,
  SiRedux,
  SiTailwindcss,
  SiJavascript,
} from "react-icons/si";

const AboutAndSkill = () => {
  const personalInfo = [
    { icon: <User size={18} />, label: "Name", value: "Bantony Singh" },
    { icon: <Mail size={18} />, label: "Email", value: "bantony14@gmail.com" },
    { icon: <MapPin size={18} />, label: "Location", value: "India" },
    {
      icon: <CircleDot size={18} />,
      label: "Availability",
      value: "Open to Work",
      isGreen: true,
    },
  ];

  const techStack = [
    {
      name: "React",
      icon: <FaReact size={28} />,
      color: "#61dafb",
      bg: "#0d2137",
    },
    {
      name: "Node.js",
      icon: <FaNodeJs size={28} />,
      color: "#68a063",
      bg: "#0d2117",
    },
    {
      name: "Express.js",
      icon: <SiExpress size={28} />,
      color: "#e2e8f0",
      bg: "#1a1a2e",
    },
    {
      name: "MongoDB",
      icon: <SiMongodb size={28} />,
      color: "#4db33d",
      bg: "#0d2117",
    },
    {
      name: "Redux Toolkit",
      icon: <SiRedux size={28} />,
      color: "#764abc",
      bg: "#1a1230",
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss size={28} />,
      color: "#38bdf8",
      bg: "#0d2137",
    },
    {
      name: "JavaScript",
      icon: <SiJavascript size={28} />,
      color: "#f7df1e",
      bg: "#2a2a0d",
    },
    {
      name: "Git & GitHub",
      icon: <FaGitAlt size={28} />,
      color: "#f05032",
      bg: "#2a1010",
    },
  ];

  return (
    <section className="px-12 py-10 bg-[#060b18]">
      <div className="grid grid-cols-[1fr_1.2fr_1.5fr] gap-5">
        {/* ===== Card 1: Personal Info ===== */}
        <div className="bg-[#0d1326] border border-[#1c2640] rounded-2xl p-6 flex flex-col justify-center gap-5">
          {personalInfo.map((item) => (
            <div key={item.label} className="flex items-center gap-3">
              <span
                className={`w-5 flex items-center justify-center ${item.isGreen ? "text-[#34d399]" : "text-[#4f7df3]"}`}
              >
                {item.icon}
              </span>
              <div>
                <p className="text-[0.75rem] text-[#7a8baa] m-0 leading-none mb-1">
                  {item.label}
                </p>
                <p
                  className={`text-[0.85rem] font-medium m-0 leading-none
        ${item.isGreen ? "text-[#34d399]" : "text-[#e2e8f0]"}
      `}
                >
                  {item.value}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* ===== Card 2: About Me ===== */}
        <div className="bg-[#0d1326] border border-[#1c2640] rounded-2xl p-7">
          {/* Title */}
          <div className="flex items-center gap-2 mb-5">
            <span className="text-[#4f7df3] text-lg">👤</span>
            <h3 className="text-white text-[1.15rem] font-semibold m-0">
              About Me
            </h3>
          </div>

          {/* Description */}
          <p className="text-[0.88rem] leading-relaxed text-[#7a8baa] m-0 mb-3">
            I'm a BCA graduate and a passionate full-stack developer
            specializing in the MERN stack. I enjoy building intuitive user
            interfaces and robust backend systems.
          </p>
          <p className="text-[0.88rem] leading-relaxed text-[#7a8baa] m-0 mb-6">
            Always eager to learn new technologies and take on challenging
            projects.
          </p>

          {/* Read More Button */}
          <NavLink
            to="/about"
            className="inline-flex items-center gap-2 bg-transparent text-white border border-[#1c2640] px-5 py-2.5 rounded-full text-[0.85rem] font-medium no-underline transition-all duration-300 hover:bg-[#111827] hover:border-[#2a3a5c]"
          >
            Read More &nbsp;→
          </NavLink>
        </div>

        {/* ===== Card 3: Tech Stack ===== */}
        <div className="bg-[#0d1326] border border-[#1c2640] rounded-2xl p-7">
          {/* Title */}
          <div className="flex items-center gap-2 mb-6">
            <span className="text-[#4f7df3] text-lg font-bold">&lt;/&gt;</span>
            <h3 className="text-white text-[1.15rem] font-semibold m-0">
              Tech Stack
            </h3>
          </div>

          {/* Tech Grid */}
          <div className="grid grid-cols-4 gap-4">
            {techStack.map((tech) => (
              <div key={tech.name} className="flex flex-col items-center gap-2">
                {/* Icon Box */}
                <div
                  key={tech.name}
                  title={tech.name}
                  className="w-14 h-14 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 cursor-default"
                  style={{ backgroundColor: tech.bg, color: tech.color }}
                >
                  {tech.icon}
                </div>
                {/* Label */}
                <span className="text-[0.7rem] text-[#7a8baa] text-center font-medium">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutAndSkill;
