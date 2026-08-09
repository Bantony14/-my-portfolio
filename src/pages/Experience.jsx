import {
  Code2,
  CalendarDays,
  ExternalLink,
  Layers3,
  Briefcase,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { useInView } from "../components/Helper/UseInView";

/* ──────────────── data ──────────────── */

const experience = [
  {
    title: "Full-Stack Developer",
    type: "Personal Project",
    project: "RentFlow",
    date: "2026",
    description:
      "Built a full-stack rent management application with separate admin and tenant portals.",
    points: [
      "Developed the frontend using React, and Tailwind CSS.",
      "Built REST APIs using Node.js, Express.js and MongoDB.",
      "Implemented JWT authentication and protected routes.",
      "Integrated Razorpay payments and payment verification.",
      "Implemented Cloudinary for image and document uploads.",
      "Generated payment receipts and handled email notifications.",
    ],
    stack: ["React", "Node.js", "Express.js", "MongoDB", "JWT", "Cloudinary"],
    githubLink: "#",
    liveLink: "#",
  },
  {
    title: "Frontend Developer",
    type: "Personal Project",
    project: "FashionKart",
    date: "2026",
    description:
      "Built a responsive fashion e-commerce frontend focused on reusable React components and state management.",
    points: [
      "Built reusable React components.",
      "Implemented responsive layouts using Tailwind CSS.",
      "Used Redux for application state management.",
      "Implemented product browsing and frontend interactions.",
    ],
    stack: ["React", "Redux", "Tailwind CSS", "Vite"],
    githubLink: "#",
    liveLink: "#",
  },
];

/* ──────────────── Timeline Card ──────────────── */

const TimelineCard = ({ item, index }) => {
  const [ref, inView] = useInView();

  return (
    <div
      ref={ref}
      className={`relative transition-all duration-700 md:pl-16 ${
        inView ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
      }`}
      style={{ transitionDelay: `${index * 200}ms` }}
    >
      {/* timeline dot */}
      <div className="absolute left-0 top-8 hidden md:flex">
        <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#4f7df3]/30 bg-[#050816]">
          <div className="relative h-3 w-3 rounded-full bg-[#4f7df3]">
            <div className="absolute inset-0 animate-ping rounded-full bg-[#4f7df3]/40" />
            <div className="absolute -inset-1 rounded-full bg-[#4f7df3]/20 blur-sm" />
          </div>
        </div>
      </div>

      {/* card */}
      <div className="group relative">
        {/* gradient border */}
        <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-b from-[#4f7df3]/25 via-white/5 to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-100" />

        <div className="relative overflow-hidden rounded-2xl bg-[#080d1f]">
          {/* top accent bar */}
          <div className="h-1 w-full bg-gradient-to-r from-[#4f7df3] via-[#6b8ff5] to-[#8da7f7]" />

          <div className="p-6 md:p-8">
            {/* ── Header ── */}
            <div className="flex flex-col justify-between gap-4 md:flex-row md:items-start">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#4f7df3]/20 to-[#8da7f7]/10 ring-1 ring-[#4f7df3]/20 transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(79,125,243,0.15)]">
                  <Code2
                    size={22}
                    className="text-[#4f7df3] transition-all duration-300 group-hover:drop-shadow-[0_0_8px_rgba(79,125,243,0.5)]"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold tracking-tight text-white">
                    {item.title}
                  </h3>
                  <div className="mt-1 flex items-center gap-2">
                    <span className="rounded-md border border-[#4f7df3]/15 bg-[#4f7df3]/[0.06] px-2.5 py-0.5 text-[11px] font-semibold text-[#6b8ff5]">
                      {item.type}
                    </span>
                    <span className="text-sm font-medium text-[#4f7df3]">
                      {item.project}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 rounded-full border border-white/[0.06] bg-white/[0.02] px-3.5 py-1.5 text-xs font-medium text-gray-500">
                <CalendarDays size={13} className="text-[#4f7df3]/60" />
                {item.date}
              </div>
            </div>

            {/* ── Description ── */}
            <div className="mt-6 rounded-xl border border-[#4f7df3]/10 bg-[#4f7df3]/[0.03] p-4">
              <p className="text-[14px] leading-relaxed text-gray-400">
                {item.description}
              </p>
            </div>

            {/* ── Work Points ── */}
            <div className="mt-6">
              <div className="mb-4 flex items-center gap-2">
                <Layers3 size={15} className="text-[#4f7df3]" />
                <h4 className="text-sm font-bold uppercase tracking-[0.1em] text-gray-300">
                  What I Worked On
                </h4>
              </div>

              <div className="grid gap-2.5 sm:grid-cols-2">
                {item.points.map((point, i) => (
                  <div
                    key={i}
                    className="group/point flex items-start gap-3 rounded-lg border border-white/[0.03] bg-white/[0.01] px-3.5 py-2.5 transition-all duration-300 hover:border-[#4f7df3]/20 hover:bg-[#4f7df3]/[0.03]"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#4f7df3]/40 transition-all duration-300 group-hover/point:bg-[#4f7df3] group-hover/point:shadow-[0_0_6px_rgba(79,125,243,0.5)]" />
                    <span className="text-[13px] leading-relaxed text-gray-400 transition-colors duration-300 group-hover/point:text-gray-300">
                      {point}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* ── Tech Stack ── */}
            <div className="mt-7">
              <div className="mb-3 flex items-center gap-2">
                <span className="text-[11px] font-medium uppercase tracking-[0.15em] text-gray-600">
                  Tech Used
                </span>
                <div className="h-px flex-1 bg-gradient-to-r from-white/5 to-transparent" />
              </div>

              <div className="flex flex-wrap gap-2">
                {item.stack.map((tech) => (
                  <span
                    key={tech}
                    className="group/tag rounded-full border border-white/[0.06] bg-white/[0.02] px-3.5 py-1.5 text-xs font-medium text-gray-400 transition-all duration-300 hover:border-[#4f7df3]/30 hover:bg-[#4f7df3]/[0.06] hover:text-[#8da7f7]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* ── Links ── */}
            <div className="mt-7 h-px bg-gradient-to-r from-transparent via-[#4f7df3]/15 to-transparent" />

            <div className="mt-6 flex items-center gap-3">
              <a
                href={item.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group/btn relative flex items-center gap-2 overflow-hidden rounded-lg px-5 py-2.5 text-sm font-semibold text-white no-underline transition-all duration-300 hover:shadow-[0_0_20px_rgba(79,125,243,0.25)]"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#4f7df3] to-[#6b8ff5] transition-all duration-300 group-hover/btn:from-[#6b8ff5] group-hover/btn:to-[#4f7df3]" />
                <div className="absolute inset-0 translate-x-[-100%] bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform duration-700 group-hover/btn:translate-x-[100%]" />
                <ExternalLink size={14} className="relative z-10" />
                <span className="relative z-10">Live Demo</span>
              </a>

              <a
                href={item.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group/btn flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] px-5 py-2.5 text-sm font-semibold text-gray-300 no-underline transition-all duration-300 hover:border-[#4f7df3]/40 hover:bg-[#4f7df3]/[0.06] hover:text-white hover:shadow-[0_0_15px_rgba(79,125,243,0.1)]"
              >
                <FaGithub
                  size={15}
                  className="transition-all duration-300 group-hover/btn:drop-shadow-[0_0_4px_rgba(79,125,243,0.5)]"
                />
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/* ──────────────── Main Component ──────────────── */

const Experience = () => {
  const [headRef, headInView] = useInView();
  const [noteRef, noteInView] = useInView();

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#050816] px-6 py-28 text-white">
      {/* ─── Background ─── */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[600px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#4f7df3]/[0.04] blur-[120px]" />
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="absolute right-[12%] top-[18%] h-2 w-2 animate-pulse rounded-full bg-[#4f7df3]/40" />
        <div className="absolute left-[8%] top-[50%] h-1.5 w-1.5 animate-pulse rounded-full bg-[#6b8ff5]/30 [animation-delay:1s]" />
        <div className="absolute right-[20%] bottom-[15%] h-1 w-1 animate-pulse rounded-full bg-[#8da7f7]/30 [animation-delay:2s]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* ─── Heading ─── */}
        <div
          ref={headRef}
          className={`mb-20 text-center transition-all duration-700 ${
            headInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#4f7df3]/20 bg-[#4f7df3]/[0.06] px-4 py-1.5">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#4f7df3]" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#4f7df3]">
              My Journey
            </span>
          </div>

          <h2 className="text-4xl font-extrabold tracking-tight md:text-5xl lg:text-6xl">
            Development{" "}
            <span className="bg-gradient-to-r from-[#4f7df3] via-[#6b8ff5] to-[#8da7f7] bg-clip-text text-transparent">
              Experience
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-gray-400">
            My hands-on experience building full-stack and frontend applications
            through personal projects.
          </p>

          <div className="mx-auto mt-8 flex w-24 items-center justify-center gap-1">
            <div className="h-[2px] w-6 rounded-full bg-[#4f7df3]/40" />
            <div className="h-[2px] w-10 rounded-full bg-[#4f7df3]" />
            <div className="h-[2px] w-6 rounded-full bg-[#4f7df3]/40" />
          </div>
        </div>

        {/* ─── Timeline ─── */}
        <div className="relative">
          {/* vertical line */}
          <div className="absolute left-[19px] top-0 hidden h-full w-px md:block">
            <div className="h-full w-full bg-gradient-to-b from-[#4f7df3]/50 via-[#4f7df3]/20 to-transparent" />
          </div>

          <div className="space-y-10">
            {experience.map((item, index) => (
              <TimelineCard key={item.project} item={item} index={index} />
            ))}
          </div>
        </div>

        {/* ─── Fresher Note ─── */}
        <div
          ref={noteRef}
          className={`relative mt-14 transition-all duration-700 delay-300 ${
            noteInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <div className="absolute -inset-[1px] rounded-xl bg-gradient-to-r from-[#4f7df3]/20 via-white/5 to-[#8da7f7]/20" />

          <div className="relative rounded-xl bg-[#080d1f] px-6 py-5 text-center">
            <div className="flex items-center justify-center gap-2">
              <Sparkles size={15} className="animate-pulse text-[#4f7df3]" />
              <p className="text-sm text-gray-400">
                Currently seeking my first professional opportunity as a{" "}
                <span className="font-semibold text-white">
                  React / Full-Stack Developer
                </span>
                .
              </p>
              <Sparkles size={15} className="animate-pulse text-[#4f7df3]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
