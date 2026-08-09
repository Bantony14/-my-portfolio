// components/ProjectSection.jsx

import React from "react";
import { NavLink } from "react-router-dom";
import { ArrowRight, ExternalLink, FolderGit2 } from "lucide-react";
import { FaReact, FaNodeJs, FaGithub } from "react-icons/fa";
import { SiExpress, SiMongodb } from "react-icons/si";
import { useInView } from "../Helper/UseInView";

/* ──────────────── data ──────────────── */

const projects = [
  {
    title: "FashionKart",
    category: "E-Commerce",
    description:
      "A full-stack e-commerce platform with product listing, cart, wishlist, authentication and admin panel.",
    image: null,
    techStack: [
      { name: "React", icon: FaReact, color: "#61dafb" },
      { name: "Node", icon: FaNodeJs, color: "#68a063" },
      { name: "Express", icon: SiExpress, color: "#e2e8f0" },
      { name: "MongoDB", icon: SiMongodb, color: "#4db33d" },
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
      { name: "React", icon: FaReact, color: "#61dafb" },
      { name: "Node", icon: FaNodeJs, color: "#68a063" },
      { name: "Express", icon: SiExpress, color: "#e2e8f0" },
      { name: "MongoDB", icon: SiMongodb, color: "#4db33d" },
    ],
    liveLink: "#",
    githubLink: "#",
  },
];

/* ──────────────── Project Card ──────────────── */

const ProjectCard = ({ project, index }) => {
  const [ref, inView] = useInView();

  return (
    <div
      ref={ref}
      className={`group relative transition-all duration-700 ${
        inView ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {/* gradient border */}
      <div className="absolute -inset-[1px] rounded-xl bg-gradient-to-b from-[#4f7df3]/20 via-white/5 to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-100" />

      <div className="relative overflow-hidden rounded-xl bg-[#080d1f]">
        {/* ── Thumbnail ── */}
        <div className="relative h-[150px] overflow-hidden bg-[#0a0f1e]">
          {project.image ? (
            <img
              src={project.image}
              alt={project.title}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center">
              {/* placeholder pattern */}
              <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
                  backgroundSize: "20px 20px",
                }}
              />
              <div className="relative flex flex-col items-center gap-2">
                <FolderGit2 size={28} className="text-[#4f7df3]/30" />
                <span className="text-xs font-medium text-gray-600">
                  Project Screenshot
                </span>
              </div>
            </div>
          )}

          {/* category badge overlay */}
          <div className="absolute left-4 top-4">
            <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-[11px] font-semibold text-emerald-400 backdrop-blur-sm">
              {project.category}
            </span>
          </div>

          {/* hover overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#080d1f] via-transparent to-transparent opacity-60" />
        </div>

        {/* ── Content ── */}
        <div className="p-5">
          {/* title */}
          <div className="mb-3 flex items-center gap-2">
            <h3 className="text-[1.05rem] font-bold tracking-tight text-white">
              {project.title}
            </h3>
            <ExternalLink
              size={14}
              className="text-[#4f7df3]/50 transition-all duration-300 group-hover:text-[#4f7df3]"
            />
          </div>

          {/* description */}
          <p className="mb-5 text-[13px] leading-relaxed text-gray-400">
            {project.description}
          </p>

          {/* tech stack */}
          <div className="mb-5 flex items-center gap-2">
            {project.techStack.map((tech) => {
              const Icon = tech.icon;
              return (
                <div
                  key={tech.name}
                  title={tech.name}
                  className="group/tech flex h-8 w-8 items-center justify-center rounded-lg border border-white/[0.04] bg-white/[0.02] transition-all duration-300 hover:scale-110 hover:border-opacity-40"
                >
                  <Icon
                    size={15}
                    style={{ color: tech.color }}
                    className="transition-all duration-300 group-hover/tech:drop-shadow-[0_0_6px_var(--tw-shadow-color)]"
                  />
                </div>
              );
            })}
          </div>

          {/* divider */}
          <div className="mb-4 h-px bg-gradient-to-r from-transparent via-[#4f7df3]/15 to-transparent" />

          {/* action buttons */}
          <div className="flex items-center gap-3">
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group/btn relative flex items-center gap-2 overflow-hidden rounded-lg px-4 py-2 text-xs font-semibold text-white no-underline transition-all duration-300 hover:shadow-[0_0_20px_rgba(79,125,243,0.2)]"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#4f7df3] to-[#6b8ff5]" />
              <div className="absolute inset-0 translate-x-[-100%] bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform duration-700 group-hover/btn:translate-x-[100%]" />
              <ExternalLink size={13} className="relative z-10" />
              <span className="relative z-10">Live Demo</span>
            </a>

            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group/btn flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] px-4 py-2 text-xs font-semibold text-gray-300 no-underline transition-all duration-300 hover:border-[#4f7df3]/40 hover:bg-[#4f7df3]/[0.06] hover:text-white"
            >
              <FaGithub
                size={13}
                className="transition-all duration-300 group-hover/btn:drop-shadow-[0_0_4px_rgba(79,125,243,0.5)]"
              />
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

/* ──────────────── Main Component ──────────────── */

const ProjectSection = () => {
  const [ref, inView] = useInView();

  return (
    <section className="relative overflow-hidden bg-[#050816] px-6 py-10 sm:px-12">
      {/* background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 bottom-0 h-[400px] w-[600px] -translate-x-1/2 translate-y-1/2 rounded-full bg-[#4f7df3]/[0.03] blur-[100px]" />
      </div>

      <div
        ref={ref}
        className={`relative z-10 transition-all duration-700 ${
          inView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        {/* outer wrapper card */}
        <div className="relative">
          <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-b from-[#4f7df3]/25 via-white/5 to-transparent" />

          <div className="relative overflow-hidden rounded-2xl bg-[#080d1f]">
            <div className="h-1 w-full bg-gradient-to-r from-[#4f7df3] via-[#6b8ff5] to-[#8da7f7]" />

            <div className="p-6 sm:p-7">
              {/* ── Header Row ── */}
              <div className="mb-7 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#4f7df3]/20 to-[#8da7f7]/10 ring-1 ring-[#4f7df3]/20">
                    <FolderGit2 size={18} className="text-[#4f7df3]" />
                  </div>
                  <div>
                    <h2 className="text-lg font-bold tracking-tight text-white">
                      Projects
                    </h2>
                    <p className="mt-0.5 text-[11px] tracking-wide text-gray-500">
                      Things I've built
                    </p>
                  </div>
                </div>

                <NavLink
                  to="/projects"
                  className="group/link flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs font-semibold text-[#4f7df3] no-underline transition-all duration-300 hover:border-[#4f7df3]/40 hover:bg-[#4f7df3]/[0.08]"
                >
                  View All
                  <ArrowRight
                    size={13}
                    className="transition-transform duration-300 group-hover/link:translate-x-1"
                  />
                </NavLink>
              </div>

              {/* divider */}
              <div className="mb-6 h-px bg-gradient-to-r from-transparent via-[#4f7df3]/20 to-transparent" />

              {/* ── Projects Grid ── */}
              <div className="grid gap-5 md:grid-cols-2">
                {projects.map((project, i) => (
                  <ProjectCard
                    key={project.title}
                    project={project}
                    index={i}
                  />
                ))}
              </div>

              {/* bottom bar */}
              <div className="mt-6 flex items-center justify-between border-t border-white/5 pt-5">
                <span className="text-[11px] uppercase tracking-widest text-gray-600">
                  Featured Projects
                </span>
                <span className="text-sm font-semibold text-[#4f7df3]">
                  {projects.length}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
