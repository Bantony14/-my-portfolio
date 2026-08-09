import { useEffect, useRef, useState } from "react";

import {
  SiReact,
  SiRedux,
  SiTailwindcss,
  SiJavascript,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiCloudinary,
  SiGit,
  SiGithub,
  SiVite,
} from "react-icons/si";

import {
  FaHtml5,
  FaCss3Alt,
  FaKey,
  FaLock,
  FaFileUpload,
  FaEnvelope,
} from "react-icons/fa";

/* ───────────────────────── data ───────────────────────── */

const skills = {
  Frontend: {
    tagline: "Crafting pixel-perfect interfaces",
    items: [
      { name: "HTML", icon: FaHtml5 },
      { name: "CSS", icon: FaCss3Alt },
      { name: "JavaScript", icon: SiJavascript },
      { name: "React", icon: SiReact },
      { name: "Redux", icon: SiRedux },
      { name: "Tailwind CSS", icon: SiTailwindcss },
    ],
  },
  Backend: {
    tagline: "Building robust server-side systems",
    items: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express.js", icon: SiExpress },
      { name: "MongoDB", icon: SiMongodb },
      { name: "JWT", icon: FaKey },
      { name: "bcrypt", icon: FaLock },
      { name: "Multer", icon: FaFileUpload },
      { name: "Cloudinary", icon: SiCloudinary },
      { name: "Nodemailer", icon: FaEnvelope },
    ],
  },
  Tools: {
    tagline: "Streamlining the dev workflow",
    items: [
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub },
      { name: "Vite", icon: SiVite },
    ],
  },
};

/* ──────────────────── useInView hook ──────────────────── */

function useInView(options = {}) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setInView(true),
      { threshold: 0.15, ...options },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return [ref, inView];
}

/* ──────────────────── Skill Chip ──────────────────────── */

const SkillChip = ({ skill, delay }) => {
  const Icon = skill.icon;

  return (
    <div className="group relative" style={{ animationDelay: `${delay}ms` }}>
      {/* outer glow on hover */}
      <div className="absolute -inset-[1px] rounded-xl bg-gradient-to-r from-[#4f7df3]/0 via-[#6b8ff5]/0 to-[#8da7f7]/0 opacity-0 blur-sm transition-all duration-500 group-hover:from-[#4f7df3]/60 group-hover:via-[#6b8ff5]/40 group-hover:to-[#8da7f7]/60 group-hover:opacity-100" />

      {/* animated gradient border */}
      <div className="absolute -inset-[1px] rounded-xl bg-gradient-to-r from-[#4f7df3]/0 via-white/0 to-[#8da7f7]/0 transition-all duration-500 group-hover:from-[#4f7df3] group-hover:via-[#6b8ff5] group-hover:to-[#8da7f7]" />

      {/* card body */}
      <div className="relative flex items-center gap-4 rounded-xl bg-[#0a0f1e] p-4 transition-all duration-500 group-hover:bg-[#0d1228]">
        {/* icon container */}
        <div className="relative flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-[#4f7df3]/[0.08] ring-1 ring-[#4f7df3]/20 transition-all duration-500 group-hover:bg-[#4f7df3]/[0.15] group-hover:ring-[#4f7df3]/50 group-hover:shadow-[0_0_20px_rgba(79,125,243,0.2)]">
          {/* spinning ring behind icon */}
          <div className="absolute inset-0 rounded-lg border border-dashed border-[#4f7df3]/0 transition-all duration-700 group-hover:border-[#4f7df3]/30" />
          <Icon
            size={22}
            className="relative z-10 text-[#4f7df3] transition-all duration-300 group-hover:scale-110 group-hover:text-[#8da7f7] group-hover:drop-shadow-[0_0_8px_rgba(79,125,243,0.6)]"
          />
        </div>

        <span className="text-[15px] font-medium tracking-wide text-gray-300 transition-colors duration-300 group-hover:text-white">
          {skill.name}
        </span>
      </div>
    </div>
  );
};

/* ──────────────────── Category Card ──────────────────── */

const CategoryCard = ({ category, data, index }) => {
  const [ref, inView] = useInView();

  return (
    <div
      ref={ref}
      className={`relative transition-all duration-700 ${
        inView ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {/* outer gradient border */}
      <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-b from-[#4f7df3]/30 via-white/5 to-transparent" />

      <div className="relative overflow-hidden rounded-2xl bg-[#080d1f]/80 p-[1px] backdrop-blur-2xl">
        {/* inner card */}
        <div className="rounded-2xl bg-[#080d1f] p-6 sm:p-8">
          {/* header */}
          <div className="mb-7 flex items-center gap-4">
            {/* category number badge */}
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-[#4f7df3]/20 to-[#8da7f7]/10 text-sm font-bold text-[#4f7df3] ring-1 ring-[#4f7df3]/20">
              {String(index + 1).padStart(2, "0")}
            </div>

            <div>
              <h3 className="text-xl font-bold tracking-tight text-white">
                {category}
              </h3>
              <p className="mt-0.5 text-xs tracking-wide text-gray-500">
                {data.tagline}
              </p>
            </div>
          </div>

          {/* divider line with gradient */}
          <div className="mb-6 h-px bg-gradient-to-r from-transparent via-[#4f7df3]/20 to-transparent" />

          {/* skills grid */}
          <div className="grid gap-3">
            {data.items.map((skill, i) => (
              <SkillChip key={skill.name} skill={skill} delay={i * 60} />
            ))}
          </div>

          {/* bottom stat */}
          <div className="mt-6 flex items-center justify-between border-t border-white/5 pt-5">
            <span className="text-xs uppercase tracking-widest text-gray-600">
              Technologies
            </span>
            <span className="text-sm font-semibold text-[#4f7df3]">
              {data.items.length}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

/* ──────────────────────── Main ──────────────────────── */

const Skills = () => {
  const [headRef, headInView] = useInView();
  const totalSkills = Object.values(skills).reduce(
    (acc, cat) => acc + cat.items.length,
    0,
  );

  return (
    <section
      id="skills"
      className="relative min-h-screen overflow-hidden bg-[#050816] px-6 py-28 text-white"
    >
      {/* ─── Background decorations ─── */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* large radial glow */}
        <div className="absolute left-1/2 top-0 h-[600px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#4f7df3]/[0.04] blur-[120px]" />
        {/* grid lines overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        {/* floating orbs */}
        <div className="absolute right-[15%] top-[20%] h-2 w-2 animate-pulse rounded-full bg-[#4f7df3]/40" />
        <div className="absolute left-[10%] top-[60%] h-1.5 w-1.5 animate-pulse rounded-full bg-[#6b8ff5]/30 [animation-delay:1s]" />
        <div className="absolute right-[25%] bottom-[25%] h-1 w-1 animate-pulse rounded-full bg-[#8da7f7]/30 [animation-delay:2s]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* ─── Heading ─── */}
        <div
          ref={headRef}
          className={`mb-20 text-center transition-all duration-700 ${
            headInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          {/* pill badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#4f7df3]/20 bg-[#4f7df3]/[0.06] px-4 py-1.5">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#4f7df3]" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#4f7df3]">
              Tech Stack
            </span>
          </div>

          <h2 className="text-4xl font-extrabold tracking-tight md:text-5xl lg:text-6xl">
            Skills &{" "}
            <span className="bg-gradient-to-r from-[#4f7df3] via-[#6b8ff5] to-[#8da7f7] bg-clip-text text-transparent">
              Technologies
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-gray-400">
            A curated collection of{" "}
            <span className="font-semibold text-[#4f7df3]">{totalSkills}+</span>{" "}
            technologies and tools I leverage to build fast, scalable, and
            beautiful web applications.
          </p>

          {/* decorative line */}
          <div className="mx-auto mt-8 flex w-24 items-center justify-center gap-1">
            <div className="h-[2px] w-6 rounded-full bg-[#4f7df3]/40" />
            <div className="h-[2px] w-10 rounded-full bg-[#4f7df3]" />
            <div className="h-[2px] w-6 rounded-full bg-[#4f7df3]/40" />
          </div>
        </div>

        {/* ─── Category cards grid ─── */}
        <div className="grid gap-8 lg:grid-cols-3">
          {Object.entries(skills).map(([category, data], index) => (
            <CategoryCard
              key={category}
              category={category}
              data={data}
              index={index}
            />
          ))}
        </div>

        {/* ─── Bottom CTA row ─── */}
        <div
          className={`mt-16 flex flex-col items-center gap-4 transition-all duration-700 delay-500 sm:flex-row sm:justify-center ${
            headInView ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          <div className="flex items-center gap-3 rounded-full border border-white/5 bg-white/[0.02] px-6 py-3 text-sm text-gray-500 backdrop-blur-sm">
            <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_6px_rgba(52,211,153,0.6)]" />
            Always learning · Always building
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
