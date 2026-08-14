// components/ProjectSection.jsx

import RentFlowImage from "../Project/ProjectImage/Rent-Flow/Screenshot (2).png";
import FashionKartImage from "../Project/ProjectImage/Fashion-Kart/Screenshot (19).png";

import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  ArrowRight,
  ExternalLink,
  FolderGit2,
  Star,
  BookOpen,
  ChevronRight,
  Rocket,
} from "lucide-react";
import { FaReact, FaNodeJs, FaGithub } from "react-icons/fa";
import { SiExpress, SiMongodb, SiRedux, SiTailwindcss } from "react-icons/si";
import { useInView } from "../Helper/UseInView";

/* ──────────────── data ──────────────── */

const projects = [
  {
    title: "RentFlow",
    category: "Rent Management",
    description:
      "Full-stack rent management system with separate admin and tenant portals, Razorpay payments, receipts and Cloudinary uploads.",
    image: RentFlowImage,
    techStack: [
      { name: "React", icon: FaReact, color: "#61dafb" },
      { name: "Node", icon: FaNodeJs, color: "#68a063" },
      { name: "Express", icon: SiExpress, color: "#e2e8f0" },
      { name: "MongoDB", icon: SiMongodb, color: "#4db33d" },
    ],
    liveLink: "https://rent-flow-management-by-bantony.vercel.app/",
    githubLink: "https://github.com/Bantony14/Rent-Flow-Management",
    isPrimary: true,
  },
  {
    title: "FashionKart",
    category: "E-Commerce",
    description:
      "A React e-commerce frontend with product listing, cart, wishlist and Redux state management.",
    image: FashionKartImage,
    techStack: [
      { name: "React", icon: FaReact, color: "#61dafb" },
      { name: "Redux", icon: SiRedux, color: "#764abc" },
      { name: "Tailwind", icon: SiTailwindcss, color: "#38bdf8" },
    ],
    liveLink: "https://fashion-kart-by-bantony.vercel.app/",
    githubLink: "https://github.com/Bantony14/fashion-kart",
    isPrimary: false,
  },
];

/* ──────────────── Primary Card (RentFlow) ──────────────── */

const PrimaryCard = ({ project, onClick }) => {
  const [ref, inView] = useInView();

  return (
    <div
      ref={ref}
      className={`md:col-span-2 transition-all duration-700 ${
        inView ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
      }`}
    >
      <div onClick={onClick} className="group relative cursor-pointer">
        {/* glow border */}
        <div className="absolute -inset-[1px] rounded-xl bg-gradient-to-b from-[#4f7df3]/40 via-[#4f7df3]/10 to-transparent transition-all duration-500 group-hover:from-[#4f7df3]/60 group-hover:via-[#4f7df3]/20" />

        {/* outer glow */}
        <div className="absolute -inset-2 rounded-2xl bg-[#4f7df3]/[0.03] blur-lg transition-all duration-500 group-hover:bg-[#4f7df3]/[0.06]" />

        <div className="relative overflow-hidden rounded-xl bg-[#080d1f]">
          <div className="flex flex-col md:flex-row">
            {/* ── Image Side ── */}
            <div className="relative h-[200px] overflow-hidden md:h-auto md:w-[45%]">
              <img
                src={project.image}
                alt={project.title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#080d1f]/80 hidden md:block" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080d1f]/80 via-transparent to-transparent md:hidden" />

              {/* badges on image */}
              <div className="absolute left-4 top-4 flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-[#4f7df3]/30 bg-[#080d1f]/80 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#4f7df3] backdrop-blur-sm">
                  <Star size={10} className="fill-[#4f7df3]" />
                  Primary
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/20 bg-[#080d1f]/80 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-emerald-400 backdrop-blur-sm">
                  <Rocket size={10} />
                  Full-Stack
                </span>
              </div>
            </div>

            {/* ── Content Side ── */}
            <div className="flex-1 p-6">
              {/* category */}
              <span className="mb-3 inline-block rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-[10px] font-semibold text-emerald-400">
                {project.category}
              </span>

              {/* title */}
              <div className="mb-3 flex items-center gap-2">
                <h3 className="text-2xl font-extrabold tracking-tight text-white">
                  {project.title}
                </h3>
                <ChevronRight
                  size={18}
                  className="text-gray-600 transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#4f7df3]"
                />
              </div>

              {/* description */}
              <p className="mb-5 text-[14px] leading-relaxed text-gray-400">
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
                      className="group/tech flex h-9 w-9 items-center justify-center rounded-lg border border-white/[0.06] bg-white/[0.02] transition-all duration-300 hover:scale-110 hover:border-[#4f7df3]/30"
                    >
                      <Icon size={16} style={{ color: tech.color }} />
                    </div>
                  );
                })}
              </div>

              {/* divider */}
              <div className="mb-4 h-px bg-gradient-to-r from-transparent via-[#4f7df3]/15 to-transparent" />

              {/* buttons */}
              <div className="flex items-center gap-3">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
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
                  onClick={(e) => e.stopPropagation()}
                  className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] px-4 py-2 text-xs font-semibold text-gray-300 no-underline transition-all duration-300 hover:border-[#4f7df3]/40 hover:text-white"
                >
                  <FaGithub size={13} />
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/* ──────────────── Secondary Card (FashionKart) ──────────────── */

const SecondaryCard = ({ project, onClick }) => {
  const [ref, inView] = useInView();

  return (
    <div
      ref={ref}
      className={`md:col-span-2 transition-all duration-700 delay-150 ${
        inView ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
      }`}
    >
      <div onClick={onClick} className="group relative cursor-pointer">
        <div className="absolute -inset-[1px] rounded-xl bg-gradient-to-b from-white/10 via-white/[0.03] to-transparent opacity-50 transition-opacity duration-500 group-hover:opacity-100" />

        <div className="relative overflow-hidden rounded-xl bg-[#080d1f]">
          <div className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:p-6">
            {/* thumbnail */}
            <div className="h-20 w-full shrink-0 overflow-hidden rounded-lg border border-white/[0.06] bg-[#0a0f1e] sm:h-16 sm:w-24">
              <img
                src={project.image}
                alt={project.title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* info */}
            <div className="flex-1 min-w-0">
              <div className="mb-1 flex items-center gap-2">
                <span className="inline-flex items-center gap-1 rounded-full border border-gray-600/20 bg-gray-600/[0.06] px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-gray-500">
                  <BookOpen size={9} />
                  Learning
                </span>
                <span className="rounded-full border border-emerald-400/15 bg-emerald-400/[0.06] px-2 py-0.5 text-[9px] font-semibold text-emerald-400/70">
                  {project.category}
                </span>
              </div>

              <h3 className="text-[15px] font-bold text-white">
                {project.title}
              </h3>
              <p className="mt-0.5 text-[12px] text-gray-500 line-clamp-1">
                {project.description}
              </p>
            </div>

            {/* tech icons */}
            <div className="flex items-center gap-1.5">
              {project.techStack.map((tech) => {
                const Icon = tech.icon;
                return (
                  <div
                    key={tech.name}
                    className="flex h-7 w-7 items-center justify-center rounded-md border border-white/[0.04] bg-white/[0.02]"
                  >
                    <Icon
                      size={12}
                      style={{ color: tech.color }}
                      className="opacity-60"
                    />
                  </div>
                );
              })}
            </div>

            {/* links + arrow */}
            <div className="flex items-center gap-3">
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="text-[11px] font-semibold text-gray-500 no-underline transition hover:text-[#4f7df3]"
              >
                Live
              </a>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="text-[11px] font-semibold text-gray-500 no-underline transition hover:text-white"
              >
                Code
              </a>
              <div className="flex h-8 w-8 items-center justify-center rounded-full border border-white/[0.06] bg-white/[0.02] transition-all duration-300 group-hover:border-[#4f7df3]/30 group-hover:bg-[#4f7df3]/[0.06]">
                <ChevronRight
                  size={14}
                  className="text-gray-600 transition-all duration-300 group-hover:translate-x-0.5 group-hover:text-[#4f7df3]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/* ──────────────── Main Component ──────────────── */

const ProjectSection = () => {
  const [ref, inView] = useInView();
  const navigate = useNavigate();

  return (
    <section className="relative overflow-hidden bg-[#060b18] px-6 py-10 sm:px-12">
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

              {/* ── Projects ── */}
              <div className="grid gap-5 md:grid-cols-2">
                <PrimaryCard
                  project={projects[0]}
                  onClick={() => navigate("/projects")}
                />
                <SecondaryCard
                  project={projects[1]}
                  onClick={() => navigate("/projects")}
                />
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
