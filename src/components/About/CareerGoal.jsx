// components/About/CareerGoal.jsx

import { useEffect, useRef, useState } from "react";
import { Mail, Flag, ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { useInView } from "../Helper/UseInView";

const CareerGoal = () => {
  const [ref, inView] = useInView();

  return (
    <div
      ref={ref}
      className={`group relative h-full transition-all duration-700 lg:col-span-2 ${
        inView ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
      }`}
      style={{ transitionDelay: "450ms" }}
    >
      {/* gradient border */}
      <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-b from-[#4f7df3]/30 via-white/5 to-transparent" />

      <div className="relative h-full overflow-hidden rounded-2xl bg-[#080d1f]">
        {/* top accent bar */}
        <div className="h-1 w-full bg-gradient-to-r from-[#4f7df3] via-[#8da7f7] to-[#6b8ff5]" />

        <div className="p-6 sm:p-8">
          {/* card header */}
          <div className="mb-7 flex items-center gap-4">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-[#4f7df3]/20 to-[#8da7f7]/10 ring-1 ring-[#4f7df3]/20">
              <Flag size={20} className="text-[#4f7df3]" />
            </div>
            <div>
              <h3 className="text-xl font-bold tracking-tight text-white">
                Career Goal
              </h3>
              <p className="mt-0.5 text-xs tracking-wide text-gray-500">
                Where I'm headed
              </p>
            </div>
          </div>

          <div className="mb-6 h-px bg-gradient-to-r from-transparent via-[#4f7df3]/20 to-transparent" />

          {/* quote block */}
          <div className="rounded-xl border border-[#4f7df3]/10 bg-[#4f7df3]/[0.04] p-5">
            <p className="text-[15px] leading-relaxed text-gray-400">
              My goal is to start my professional career as a{" "}
              <span className="font-semibold text-[#4f7df3]">
                React or Full Stack Developer
              </span>
              , work on real-world applications, strengthen my development
              skills and gradually become a{" "}
              <span className="font-semibold text-white">
                better software developer
              </span>
              .
            </p>
          </div>

          {/* milestones */}
          <div className="mt-6 grid gap-2.5 sm:grid-cols-2">
            {[
              "Land a Developer Role",
              "Build Real-World Products",
              "Strengthen Core Skills",
              "Grow as a Developer",
            ].map((item, i) => (
              <div
                key={i}
                className="group/item flex items-center gap-2.5 rounded-lg border border-white/[0.04] bg-white/[0.02] px-3.5 py-2.5 transition-all duration-300 hover:border-[#4f7df3]/30 hover:bg-[#4f7df3]/[0.04]"
              >
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#4f7df3]/40 transition-all duration-300 group-hover/item:bg-[#4f7df3] group-hover/item:shadow-[0_0_6px_rgba(79,125,243,0.5)]" />
                <span className="text-sm text-gray-400 transition-colors duration-300 group-hover/item:text-gray-200">
                  {item}
                </span>
              </div>
            ))}
          </div>

          {/* divider */}
          <div className="mt-7 h-px bg-gradient-to-r from-transparent via-[#4f7df3]/15 to-transparent" />

          {/* CTA buttons */}
          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href="mailto:bantonysin95@gmail.com"
              className="group/btn relative flex items-center gap-2 overflow-hidden rounded-full px-6 py-3 text-sm font-semibold text-white no-underline transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(79,125,243,0.35)]"
            >
              {/* button gradient bg */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#4f7df3] to-[#6b8ff5] transition-all duration-300 group-hover/btn:from-[#6b8ff5] group-hover/btn:to-[#4f7df3]" />
              {/* shimmer effect */}
              <div className="absolute inset-0 translate-x-[-100%] bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover/btn:translate-x-[100%]" />
              <Mail size={16} className="relative z-10" />
              <span className="relative z-10">Contact Me</span>
              <ArrowUpRight
                size={14}
                className="relative z-10 opacity-0 transition-all duration-300 group-hover/btn:opacity-100"
              />
            </a>

            <a
              href="https://github.com/Bantony14"
              target="_blank"
              rel="noreferrer"
              className="group/btn flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-6 py-3 text-sm font-semibold text-gray-300 no-underline transition-all duration-300 hover:border-[#4f7df3]/50 hover:bg-[#4f7df3]/[0.08] hover:text-white hover:shadow-[0_0_20px_rgba(79,125,243,0.1)]"
            >
              <FaGithub
                size={16}
                className="transition-all duration-300 group-hover/btn:drop-shadow-[0_0_4px_rgba(79,125,243,0.5)]"
              />
              GitHub
              <ArrowUpRight
                size={14}
                className="opacity-0 transition-all duration-300 group-hover/btn:opacity-100"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerGoal;
