// components/AboutAndSkill.jsx

import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { User, Mail, MapPin, CircleDot, ArrowRight, Code2 } from "lucide-react";
import { FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import {
  SiExpress,
  SiMongodb,
  SiRedux,
  SiTailwindcss,
  SiJavascript,
} from "react-icons/si";
import { useInView } from "../Helper/UseInView";

/* ──────────────── data ──────────────── */

const personalInfo = [
  { icon: User, label: "Name", value: "Bantony Singh" },
  { icon: Mail, label: "Email", value: "bantony14@gmail.com" },
  { icon: MapPin, label: "Location", value: "India" },
  {
    icon: CircleDot,
    label: "Availability",
    value: "Open to Work",
    isGreen: true,
  },
];

const techStack = [
  { name: "React", icon: FaReact, color: "#61dafb", bg: "#61dafb" },
  { name: "Node.js", icon: FaNodeJs, color: "#68a063", bg: "#68a063" },
  { name: "Express.js", icon: SiExpress, color: "#e2e8f0", bg: "#e2e8f0" },
  { name: "MongoDB", icon: SiMongodb, color: "#4db33d", bg: "#4db33d" },
  { name: "Redux Toolkit", icon: SiRedux, color: "#764abc", bg: "#764abc" },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    color: "#38bdf8",
    bg: "#38bdf8",
  },
  { name: "JavaScript", icon: SiJavascript, color: "#f7df1e", bg: "#f7df1e" },
  { name: "Git & GitHub", icon: FaGitAlt, color: "#f05032", bg: "#f05032" },
];

/* ──────────────── Card Wrapper ──────────────── */

const Card = ({ children, className = "", delay = 0 }) => {
  const [ref, inView] = useInView();

  return (
    <div
      ref={ref}
      className={`relative transition-all duration-700 ${
        inView ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* gradient border */}
      <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-b from-[#4f7df3]/30 via-white/5 to-transparent" />

      <div className="relative h-full overflow-hidden rounded-2xl bg-[#080d1f]">
        {/* top accent bar */}
        <div className="h-1 w-full bg-gradient-to-r from-[#4f7df3] via-[#6b8ff5] to-[#8da7f7]" />

        <div className="h-[calc(100%-4px)] p-6 sm:p-7">{children}</div>
      </div>
    </div>
  );
};

/* ──────────────── Main Component ──────────────── */

const AboutAndSkill = () => {
  return (
    <section className="relative overflow-hidden bg-[#050816] px-6 py-14 sm:px-12">
      {/* ─── Background decorations ─── */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#4f7df3]/[0.03] blur-[100px]" />
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="absolute right-[10%] top-[30%] h-1.5 w-1.5 animate-pulse rounded-full bg-[#4f7df3]/40" />
        <div className="absolute left-[15%] bottom-[20%] h-1 w-1 animate-pulse rounded-full bg-[#6b8ff5]/30 [animation-delay:1.5s]" />
      </div>

      <div className="relative z-10 grid gap-5 lg:grid-cols-[1fr_1.2fr_1.5fr]">
        {/* ═══════ Card 1: Personal Info ═══════ */}
        <Card delay={0}>
          <div className="flex h-full flex-col justify-center gap-5">
            {personalInfo.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.label}
                  className="group/item flex items-center gap-4 rounded-xl border border-white/[0.04] bg-white/[0.02] p-3.5 transition-all duration-400 hover:border-[#4f7df3]/30 hover:bg-[#4f7df3]/[0.04]"
                >
                  <div
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ring-1 transition-all duration-300 ${
                      item.isGreen
                        ? "bg-emerald-400/[0.08] ring-emerald-400/15 group-hover/item:bg-emerald-400/[0.15] group-hover/item:ring-emerald-400/40"
                        : "bg-[#4f7df3]/[0.08] ring-[#4f7df3]/15 group-hover/item:bg-[#4f7df3]/[0.15] group-hover/item:ring-[#4f7df3]/40 group-hover/item:shadow-[0_0_15px_rgba(79,125,243,0.15)]"
                    }`}
                  >
                    <Icon
                      size={16}
                      className={`transition-all duration-300 ${
                        item.isGreen
                          ? "text-emerald-400 group-hover/item:drop-shadow-[0_0_6px_rgba(52,211,153,0.5)]"
                          : "text-[#4f7df3] group-hover/item:text-[#8da7f7] group-hover/item:drop-shadow-[0_0_6px_rgba(79,125,243,0.5)]"
                      }`}
                    />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[11px] font-medium uppercase tracking-[0.15em] text-gray-600">
                      {item.label}
                    </p>
                    <p
                      className={`mt-0.5 text-sm font-semibold transition-colors duration-300 group-hover/item:text-white ${
                        item.isGreen ? "text-emerald-400" : "text-gray-200"
                      }`}
                    >
                      {item.value}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </Card>

        {/* ═══════ Card 2: About Me ═══════ */}
        <Card delay={150}>
          {/* header */}
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#4f7df3]/20 to-[#8da7f7]/10 ring-1 ring-[#4f7df3]/20">
              <User size={18} className="text-[#4f7df3]" />
            </div>
            <div>
              <h3 className="text-lg font-bold tracking-tight text-white">
                About Me
              </h3>
              <p className="mt-0.5 text-[11px] tracking-wide text-gray-500">
                My background
              </p>
            </div>
          </div>

          <div className="mb-5 h-px bg-gradient-to-r from-transparent via-[#4f7df3]/20 to-transparent" />

          {/* description */}
          <div className="space-y-3 text-[14px] leading-relaxed text-gray-400">
            <p>
              I'm a{" "}
              <span className="font-semibold text-white">BCA graduate</span> and
              a passionate full-stack developer specializing in the{" "}
              <span className="font-semibold text-[#4f7df3]">MERN stack</span>.
              I enjoy building intuitive user interfaces and robust backend
              systems.
            </p>
            <p>
              Always eager to learn new technologies and take on challenging
              projects.
            </p>
          </div>

          {/* read more button */}
          <NavLink
            to="/about"
            className="group/btn mt-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-6 py-2.5 text-sm font-semibold text-gray-300 no-underline transition-all duration-300 hover:border-[#4f7df3]/50 hover:bg-[#4f7df3]/[0.08] hover:text-white hover:shadow-[0_0_20px_rgba(79,125,243,0.1)]"
          >
            Read More
            <ArrowRight
              size={15}
              className="transition-transform duration-300 group-hover/btn:translate-x-1"
            />
          </NavLink>
        </Card>

        {/* ═══════ Card 3: Tech Stack ═══════ */}
        <Card delay={300}>
          {/* header */}
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#4f7df3]/20 to-[#8da7f7]/10 ring-1 ring-[#4f7df3]/20">
              <Code2 size={18} className="text-[#4f7df3]" />
            </div>

            <div>
              <h3 className="text-lg font-bold tracking-tight text-white">
                Tech Stack
              </h3>

              <p className="mt-0.5 text-[11px] tracking-wide text-gray-500">
                Tools I work with
              </p>
            </div>
          </div>

          <div className="mb-6 h-px bg-gradient-to-r from-transparent via-[#4f7df3]/20 to-transparent" />

          {/* tech grid */}
          <div className="grid grid-cols-4 gap-4">
            {techStack.map((tech) => {
              const Icon = tech.icon;

              return (
                <div
                  key={tech.name}
                  className="group/tech flex flex-col items-center gap-2.5"
                >
                  <div
                    className="relative flex h-14 w-14 items-center justify-center rounded-xl border border-white/[0.04] bg-white/[0.02] transition-all duration-300 group-hover/tech:border-white/20"
                    style={{
                      "--hover-color": tech.color,
                    }}
                  >
                    {/* outer glow on hover */}
                    <div
                      className="pointer-events-none absolute inset-0 rounded-xl opacity-0 blur-md transition-opacity duration-300 group-hover/tech:opacity-20"
                      style={{
                        backgroundColor: tech.color,
                      }}
                    />

                    <Icon
                      size={26}
                      className="relative z-10 transition-transform duration-300 group-hover/tech:scale-110"
                      style={{
                        color: tech.color,
                      }}
                    />
                  </div>

                  <span className="text-center text-[11px] font-medium text-gray-500 transition-colors duration-300 group-hover/tech:text-gray-300">
                    {tech.name}
                  </span>
                </div>
              );
            })}
          </div>

          {/* bottom count */}
          <div className="mt-6 flex items-center justify-between border-t border-white/5 pt-4">
            <span className="text-[11px] uppercase tracking-widest text-gray-600">
              Technologies
            </span>

            <span className="text-sm font-semibold text-[#4f7df3]">
              {techStack.length}
            </span>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default AboutAndSkill;
