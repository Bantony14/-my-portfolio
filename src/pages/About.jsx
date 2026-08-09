import { useEffect, useRef, useState } from "react";
import PersonalInfo from "../components/About/PersonalInfo";
import WhoIAm from "../components/About/WhoIAm";
import MyStrengths from "../components/About/MyStrengths";
import CareerGoal from "../components/About/CareerGoal";
import { useInView } from "../components/Helper/UseInView";

const About = () => {
  const [headRef, headInView] = useInView();

  return (
    <section
      id="about"
      className="relative min-h-screen overflow-hidden bg-[#050816] px-6 py-28 text-white"
    >
      {/* ─── Background decorations ─── */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[600px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#4f7df3]/[0.04] blur-[120px]" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="absolute right-[12%] top-[15%] h-2 w-2 animate-pulse rounded-full bg-[#4f7df3]/40" />
        <div className="absolute left-[8%] top-[55%] h-1.5 w-1.5 animate-pulse rounded-full bg-[#6b8ff5]/30 [animation-delay:1s]" />
        <div className="absolute right-[20%] bottom-[20%] h-1 w-1 animate-pulse rounded-full bg-[#8da7f7]/30 [animation-delay:2s]" />
        <div className="absolute left-[30%] bottom-[10%] h-1.5 w-1.5 animate-pulse rounded-full bg-[#4f7df3]/25 [animation-delay:3s]" />
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
              Get To Know Me
            </span>
          </div>

          <h2 className="text-4xl font-extrabold tracking-tight md:text-5xl lg:text-6xl">
            About{" "}
            <span className="bg-gradient-to-r from-[#4f7df3] via-[#6b8ff5] to-[#8da7f7] bg-clip-text text-transparent">
              Me
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-gray-400">
            A little more about my background, skills, and journey as a
            developer — from where I started to where I'm headed.
          </p>

          {/* decorative line */}
          <div className="mx-auto mt-8 flex w-24 items-center justify-center gap-1">
            <div className="h-[2px] w-6 rounded-full bg-[#4f7df3]/40" />
            <div className="h-[2px] w-10 rounded-full bg-[#4f7df3]" />
            <div className="h-[2px] w-6 rounded-full bg-[#4f7df3]/40" />
          </div>
        </div>

        {/* ─── Cards Grid ─── */}
        <div className="grid gap-6 lg:grid-cols-3">
          {/* PersonalInfo spans 1 col, row 1 */}
          <div className="lg:row-span-2">
            <PersonalInfo />
          </div>

          {/* WhoIAm spans 2 cols */}
          <div className="lg:col-span-2">
            <WhoIAm />
          </div>

          {/* MyStrengths */}
          <div>
            <MyStrengths />
          </div>

          {/* CareerGoal */}
          <div>
            <CareerGoal />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
