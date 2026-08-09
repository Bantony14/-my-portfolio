// components/About/MyStrengths.jsx

import { useEffect, useRef, useState } from "react";
import { Target, Zap, Brain, RefreshCw, Clock, TrendingUp } from "lucide-react";
import { useInView } from "../Helper/UseInView";

const strengths = [
  { text: "Quick Learner", icon: Zap },
  { text: "Problem Solver", icon: Brain },
  { text: "Adaptable", icon: RefreshCw },
  { text: "Consistent", icon: Clock },
  { text: "Always willing to improve", icon: TrendingUp },
];

const MyStrengths = () => {
  const [ref, inView] = useInView();

  return (
    <div
      ref={ref}
      className={`group relative h-full transition-all duration-700 ${
        inView ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
      }`}
      style={{ transitionDelay: "300ms" }}
    >
      {/* gradient border */}
      <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-b from-[#4f7df3]/30 via-white/5 to-transparent" />

      <div className="relative h-full overflow-hidden rounded-2xl bg-[#080d1f]">
        {/* top accent bar */}
        <div className="h-1 w-full bg-gradient-to-r from-[#6b8ff5] via-[#8da7f7] to-[#4f7df3]" />

        <div className="p-6 sm:p-8">
          {/* card header */}
          <div className="mb-7 flex items-center gap-4">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-[#4f7df3]/20 to-[#8da7f7]/10 ring-1 ring-[#4f7df3]/20">
              <Target size={20} className="text-[#4f7df3]" />
            </div>
            <div>
              <h3 className="text-xl font-bold tracking-tight text-white">
                My Strengths
              </h3>
              <p className="mt-0.5 text-xs tracking-wide text-gray-500">
                What sets me apart
              </p>
            </div>
          </div>

          <div className="mb-6 h-px bg-gradient-to-r from-transparent via-[#4f7df3]/20 to-transparent" />

          {/* strengths list */}
          <div className="grid gap-3">
            {strengths.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.text}
                  className="group/item flex items-center gap-3.5 rounded-xl border border-white/[0.04] bg-white/[0.02] p-3.5 transition-all duration-400 hover:border-[#4f7df3]/30 hover:bg-[#4f7df3]/[0.04]"
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#4f7df3]/[0.08] ring-1 ring-[#4f7df3]/15 transition-all duration-300 group-hover/item:bg-[#4f7df3]/[0.15] group-hover/item:ring-[#4f7df3]/40 group-hover/item:shadow-[0_0_15px_rgba(79,125,243,0.15)]">
                    <Icon
                      size={14}
                      className="text-[#4f7df3] transition-all duration-300 group-hover/item:text-[#8da7f7] group-hover/item:drop-shadow-[0_0_6px_rgba(79,125,243,0.5)]"
                    />
                  </div>
                  <span className="text-sm font-medium text-gray-300 transition-colors duration-300 group-hover/item:text-white">
                    {item.text}
                  </span>
                </div>
              );
            })}
          </div>

          {/* bottom count */}
          <div className="mt-6 flex items-center justify-between border-t border-white/5 pt-5">
            <span className="text-xs uppercase tracking-widest text-gray-600">
              Core Qualities
            </span>
            <span className="text-sm font-semibold text-[#4f7df3]">
              {strengths.length}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyStrengths;
