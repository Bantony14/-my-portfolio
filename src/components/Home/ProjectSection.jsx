import React from "react";
import { NavLink } from "react-router-dom";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiExpress, SiMongodb } from "react-icons/si";

const ProjectSection = () => {
  const projects = [
    {
      title: "FashionKart",
      category: "E-Commerce",
      description:
        "A full-stack e-commerce platform with product listing, cart, wishlist, authentication and admin panel.",
      image: null,
      techStack: [
        { name: "React", icon: <FaReact />, color: "#61dafb" },
        { name: "Node", icon: <FaNodeJs />, color: "#68a063" },
        { name: "Express", icon: <SiExpress />, color: "#e2e8f0" },
        { name: "MongoDB", icon: <SiMongodb />, color: "#4db33d" },
      ],
      liveLink: "#",
      githubLink: "#",
    },
    {
      title: "RentFlow",
      category: "Rent Management",
      description:
        "Rent management system with tenant management, payments, invoices, and admin dashboard.",
      image: null,
      techStack: [
        { name: "React", icon: <FaReact />, color: "#61dafb" },
        { name: "Node", icon: <FaNodeJs />, color: "#68a063" },
        { name: "Express", icon: <SiExpress />, color: "#e2e8f0" },
        { name: "MongoDB", icon: <SiMongodb />, color: "#4db33d" },
      ],
      liveLink: "#",
      githubLink: "#",
    },
  ];

  return (
    <section className="px-12 py-10 bg-[#060b18]">
      {/* ===== Section Container ===== */}
      <div className="bg-[#0d1326] border border-[#1c2640] rounded-2xl p-7">
        {/* ===== Header Row ===== */}
        <div className="flex items-center justify-between mb-7">
          <div className="flex items-center gap-2">
            <span className="text-[#4f7df3] text-lg">☑</span>
            <h2 className="text-white text-[1.2rem] font-semibold m-0">
              Projects
            </h2>
          </div>
          <NavLink
            to="/projects"
            className="text-[#4f7df3] text-[0.85rem] font-medium no-underline flex items-center gap-1 transition-all duration-300 hover:text-[#6d93f5] hover:gap-2"
          >
            View All Projects &nbsp;→
          </NavLink>
        </div>

        {/* ===== Projects Grid ===== */}
        <div className="grid grid-cols-2 gap-5">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-[#0a0f1e] border border-[#1c2640] rounded-xl overflow-hidden transition-all duration-300 hover:border-[#2a3a5c] hover:shadow-[0_0_30px_rgba(79,125,243,0.08)]"
            >
              {/* ===== Project Thumbnail ===== */}
              <div className="h-[140px] bg-[#111827] overflow-hidden">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-[#2a3a5c] text-sm font-medium">
                    Project Screenshot
                  </div>
                )}
              </div>

              {/* ===== Project Info ===== */}
              <div className="p-5">
                {/* Title + External Link */}
                <div className="flex items-center gap-1.5 mb-2">
                  <h3 className="text-white text-[1rem] font-semibold m-0">
                    {project.title}
                  </h3>
                  <span className="text-[#4f7df3] text-xs">↗</span>
                </div>

                {/* Category Badge */}
                <span className="inline-block text-[0.7rem] font-medium text-[#34d399] bg-[#34d399]/10 px-2.5 py-1 rounded-full mb-3">
                  {project.category}
                </span>

                {/* Description */}
                <p className="text-[0.8rem] leading-relaxed text-[#7a8baa] m-0 mb-4">
                  {project.description}
                </p>

                {/* Tech Stack Icons */}
                <div className="flex items-center gap-2 mb-5">
                  {project.techStack.map((tech) => (
                    <div
                      key={tech.name}
                      title={tech.name}
                      className="w-7 h-7 rounded-full flex items-center justify-center text-xs cursor-default"
                      style={{
                        backgroundColor: tech.color + "20",
                        color: tech.color,
                      }}
                    >
                      {tech.icon}
                    </div>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-3">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 bg-transparent text-[#e2e8f0] border border-[#1c2640] px-4 py-2 rounded-lg text-[0.75rem] font-medium no-underline transition-all duration-300 hover:bg-[#111827] hover:border-[#2a3a5c]"
                  >
                    🔗 Live Demo
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 bg-transparent text-[#e2e8f0] border border-[#1c2640] px-4 py-2 rounded-lg text-[0.75rem] font-medium no-underline transition-all duration-300 hover:bg-[#111827] hover:border-[#2a3a5c]"
                  >
                    ⑂ GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
