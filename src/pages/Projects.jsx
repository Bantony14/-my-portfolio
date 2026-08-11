import { useState } from "react";
import {
  Layout,
  ShoppingBag,
  ExternalLink,
  ArrowLeft,
  Star,
  BookOpen,
  ChevronRight,
  Rocket,
  Monitor,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { useInView } from "../components/Helper/UseInView";

import RentFlowCard from "../components/Project/RentFlow/RentFlowCard";
import FashionKartCard from "../components/Project/FashionKart/FashionKartCard";

import {
  projectInfo as rentFlowInfo,
  screenshots as rentFlowScreenshots,
} from "../components/Project/RentFlow/data";
import {
  projectInfo as fashionKartInfo,
  screenshots as fashionKartScreenshots,
} from "../components/Project/FashionKart/data";

/* ══════════════════ RentFlow Spotlight Card ══════════════════ */

const RentFlowSpotlight = ({ onClick }) => {
  const [ref, inView] = useInView();

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${
        inView ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
      }`}
    >
      <div onClick={onClick} className="group relative cursor-pointer">
        {/* glowing border */}
        <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-b from-[#4f7df3]/50 via-[#4f7df3]/15 to-[#8da7f7]/10 transition-all duration-500 group-hover:from-[#4f7df3]/70 group-hover:via-[#4f7df3]/25 group-hover:to-[#8da7f7]/20" />

        {/* outer glow */}
        <div className="absolute -inset-3 rounded-3xl bg-[#4f7df3]/[0.04] blur-xl transition-all duration-500 group-hover:bg-[#4f7df3]/[0.08]" />

        <div className="relative overflow-hidden rounded-2xl bg-[#080d1f]">
          {/* thick accent bar */}
          <div className="h-1.5 w-full bg-gradient-to-r from-[#4f7df3] via-[#6b8ff5] to-[#8da7f7]" />

          <div className="p-7 md:p-10">
            {/* badges row */}
            <div className="mb-6 flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#4f7df3]/30 bg-[#4f7df3]/[0.12] px-4 py-1.5">
                <Star size={12} className="fill-[#4f7df3] text-[#4f7df3]" />
                <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#4f7df3]">
                  Primary Project
                </span>
              </div>

              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/[0.06] px-3 py-1.5">
                <Rocket size={11} className="text-emerald-400" />
                <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400">
                  Full-Stack
                </span>
              </div>

              <div className="ml-auto">
                <ChevronRight
                  size={20}
                  className="text-gray-600 transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#4f7df3]"
                />
              </div>
            </div>

            {/* main content — 2 columns */}
            <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
              {/* left — info */}
              <div>
                {/* title */}
                <div className="mb-5 flex items-center gap-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#4f7df3]/25 to-[#8da7f7]/15 ring-1 ring-[#4f7df3]/30 transition-all duration-300 group-hover:shadow-[0_0_30px_rgba(79,125,243,0.2)]">
                    <Layout
                      size={30}
                      className="text-[#4f7df3] transition-all duration-300 group-hover:drop-shadow-[0_0_10px_rgba(79,125,243,0.6)]"
                    />
                  </div>
                  <div>
                    <h3 className="text-3xl font-extrabold tracking-tight text-white">
                      {rentFlowInfo.title}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-[#6b8ff5]">
                      {rentFlowInfo.subtitle}
                    </p>
                  </div>
                </div>

                {/* description */}
                <p className="mb-6 text-[15px] leading-8 text-gray-400">
                  {rentFlowInfo.description}
                </p>

                {/* key highlights */}
                <div className="mb-6 grid grid-cols-2 gap-3">
                  {rentFlowInfo.features.slice(0, 6).map((feat, i) => (
                    <div
                      key={feat}
                      className="flex items-center gap-2 rounded-lg border border-white/[0.04] bg-white/[0.02] px-3 py-2"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded text-[9px] font-bold text-[#4f7df3] bg-[#4f7df3]/[0.08]">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="text-[12px] font-medium text-gray-400">
                        {feat}
                      </span>
                    </div>
                  ))}
                </div>

                {/* tech + links */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {[
                    ...rentFlowInfo.frontend,
                    ...rentFlowInfo.backend.slice(0, 3),
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-[#4f7df3]/15 bg-[#4f7df3]/[0.06] px-3 py-1 text-[11px] font-semibold text-[#6b8ff5]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3">
                  <a
                    href={rentFlowInfo.links.live}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="group/btn relative flex items-center gap-2 overflow-hidden rounded-lg px-5 py-2.5 text-sm font-semibold text-white no-underline transition-all duration-300 hover:shadow-[0_0_20px_rgba(79,125,243,0.25)]"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-[#4f7df3] to-[#6b8ff5] transition-all duration-300 group-hover/btn:from-[#6b8ff5] group-hover/btn:to-[#4f7df3]" />
                    <ExternalLink size={14} className="relative z-10" />
                    <span className="relative z-10">Live Demo</span>
                  </a>
                  <a
                    href={rentFlowInfo.links.github}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] px-5 py-2.5 text-sm font-semibold text-gray-300 no-underline transition hover:border-[#4f7df3]/40 hover:text-white"
                  >
                    <FaGithub size={14} />
                    GitHub
                  </a>
                </div>
              </div>

              {/* right — screenshot grid */}
              <div className="grid grid-cols-2 gap-3">
                {rentFlowScreenshots.slice(0, 4).map((ss, i) => (
                  <div
                    key={i}
                    className="group/img relative overflow-hidden rounded-xl border border-white/[0.06] bg-[#0a0f1e]"
                  >
                    <img
                      src={ss.src}
                      alt={ss.label}
                      className="h-full w-full object-cover transition-all duration-500 group-hover:scale-105 group-hover/img:scale-105"
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#080d1f] to-transparent px-3 pb-2.5 pt-6">
                      <div className="flex items-center gap-2">
                        <Monitor size={11} className="text-[#4f7df3]/60" />
                        <span className="text-[11px] font-semibold text-gray-300">
                          {ss.label}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}

                {/* "+more" tile */}
                <div className="col-span-2 flex items-center justify-center rounded-xl border border-white/[0.04] bg-white/[0.02] py-3">
                  <span className="text-xs font-semibold text-gray-500">
                    +{rentFlowScreenshots.length - 4} more screenshots inside
                  </span>
                  <ChevronRight
                    size={14}
                    className="ml-1 text-gray-600 transition-all duration-300 group-hover:text-[#4f7df3]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/* ══════════════════ FashionKart Compact Card ══════════════════ */

const FashionKartCompact = ({ onClick }) => {
  const [ref, inView] = useInView();

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 delay-150 ${
        inView ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
      }`}
    >
      <div onClick={onClick} className="group relative cursor-pointer">
        <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-b from-white/10 via-white/[0.03] to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-100" />

        <div className="relative overflow-hidden rounded-2xl bg-[#080d1f]">
          <div className="h-[3px] w-full bg-gradient-to-r from-gray-600/40 via-gray-500/20 to-gray-600/40" />

          <div className="flex flex-col gap-6 p-6 md:flex-row md:items-center md:p-8">
            {/* left — info */}
            <div className="flex-1">
              <div className="mb-4 flex items-center gap-3">
                <div className="inline-flex items-center gap-2 rounded-full border border-gray-600/20 bg-gray-600/[0.06] px-3 py-1">
                  <BookOpen size={11} className="text-gray-400" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-gray-400">
                    Learning Project
                  </span>
                </div>
              </div>

              <div className="mb-3 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/[0.04] ring-1 ring-white/10">
                  <ShoppingBag
                    size={20}
                    className="text-gray-400 transition-all duration-300 group-hover:text-[#4f7df3]"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold tracking-tight text-white">
                    {fashionKartInfo.title}
                  </h3>
                  <p className="mt-0.5 text-xs text-gray-500">
                    {fashionKartInfo.subtitle}
                  </p>
                </div>
              </div>

              <p className="mb-4 max-w-xl text-[13px] leading-relaxed text-gray-500">
                {fashionKartInfo.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {fashionKartInfo.frontend.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-white/[0.06] bg-white/[0.02] px-2.5 py-1 text-[10px] font-semibold text-gray-500"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* right — small preview + arrow */}
            <div className="flex items-center gap-4">
              <div className="flex gap-2">
                {fashionKartScreenshots.slice(0, 3).map((ss, i) => (
                  <div
                    key={i}
                    className="h-14 w-20 shrink-0 overflow-hidden rounded-lg border border-white/[0.06] bg-[#0a0f1e]"
                  >
                    <img
                      src={ss.src}
                      alt={ss.label}
                      className="h-full w-full object-cover transition-all duration-500 group-hover:scale-105"
                    />
                  </div>
                ))}
              </div>

              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/[0.06] bg-white/[0.02] transition-all duration-300 group-hover:border-[#4f7df3]/30 group-hover:bg-[#4f7df3]/[0.06]">
                <ChevronRight
                  size={18}
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

/* ══════════════════ Main Projects Page ══════════════════ */

function Projects() {
  const [activeProject, setActiveProject] = useState(null);
  const [headRef, headInView] = useInView();

  // full project detail views
  if (activeProject === "rentflow") {
    return (
      <section className="relative min-h-screen overflow-hidden bg-[#060b18] px-6 pb-16 pt-28 text-white">
        <div className="mx-auto max-w-6xl">
          <button
            onClick={() => setActiveProject(null)}
            className="group mb-8 flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-5 py-2.5 text-sm font-semibold text-gray-300 transition-all duration-300 hover:border-[#4f7df3]/40 hover:bg-[#4f7df3]/[0.08] hover:text-white"
          >
            <ArrowLeft
              size={16}
              className="transition-transform duration-300 group-hover:-translate-x-1"
            />
            Back to Projects
          </button>
          <RentFlowCard />
        </div>
      </section>
    );
  }

  if (activeProject === "fashionkart") {
    return (
      <section className="relative min-h-screen overflow-hidden bg-[#060b18] px-6 pb-16 pt-28 text-white">
        <div className="mx-auto max-w-6xl">
          <button
            onClick={() => setActiveProject(null)}
            className="group mb-8 flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-5 py-2.5 text-sm font-semibold text-gray-300 transition-all duration-300 hover:border-[#4f7df3]/40 hover:bg-[#4f7df3]/[0.08] hover:text-white"
          >
            <ArrowLeft
              size={16}
              className="transition-transform duration-300 group-hover:-translate-x-1"
            />
            Back to Projects
          </button>
          <FashionKartCard />
        </div>
      </section>
    );
  }

  // default listing
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#060b18] px-6 pb-16 pt-28 text-white">
      {/* background */}
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
        <div className="absolute left-[8%] top-[55%] h-1.5 w-1.5 animate-pulse rounded-full bg-[#6b8ff5]/30 [animation-delay:1s]" />
        <div className="absolute right-[22%] bottom-[15%] h-1 w-1 animate-pulse rounded-full bg-[#8da7f7]/25 [animation-delay:2s]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* heading */}
        <div
          ref={headRef}
          className={`mb-16 text-center transition-all duration-700 ${
            headInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#4f7df3]/20 bg-[#4f7df3]/[0.06] px-4 py-1.5">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#4f7df3]" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#4f7df3]">
              My Work
            </span>
          </div>

          <h2 className="text-4xl font-extrabold tracking-tight md:text-5xl lg:text-6xl">
            Featured{" "}
            <span className="bg-gradient-to-r from-[#4f7df3] via-[#6b8ff5] to-[#8da7f7] bg-clip-text text-transparent">
              Projects
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-gray-400">
            Real-world applications I've built to solve problems and sharpen my
            development skills.
          </p>

          <div className="mx-auto mt-8 flex w-24 items-center justify-center gap-1">
            <div className="h-[2px] w-6 rounded-full bg-[#4f7df3]/40" />
            <div className="h-[2px] w-10 rounded-full bg-[#4f7df3]" />
            <div className="h-[2px] w-6 rounded-full bg-[#4f7df3]/40" />
          </div>
        </div>

        {/* project cards */}
        <div className="space-y-8">
          <RentFlowSpotlight onClick={() => setActiveProject("rentflow")} />
          <FashionKartCompact onClick={() => setActiveProject("fashionkart")} />
        </div>
      </div>
    </section>
  );
}

export default Projects;
