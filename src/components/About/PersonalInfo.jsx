// components/About/PersonalInfo.jsx

import { useEffect, useRef, useState } from "react";
import { GraduationCap, MapPin, User, Briefcase, Sparkles } from "lucide-react";
import { useInView } from "../Helper/UseInView";

const info = [
  {
    label: "Name",
    value: "Singh Bantony Upendra",
    icon: User,
  },
  {
    label: "Education",
    value: "BCA",
    sub: "Veer Narmad South Gujarat University",
    icon: GraduationCap,
  },
  {
    label: "Location",
    value: "Surat, Gujarat, India",
    icon: MapPin,
  },
  {
    label: "Experience",
    value: "Fresher",
    highlight: true,
    icon: Briefcase,
  },
];

const PersonalInfo = () => {
  const [ref, inView] = useInView();

  return (
    <div
      ref={ref}
      className={`group relative h-full transition-all duration-700 ${
        inView ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
      }`}
    >
      {/* gradient border */}
      <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-b from-[#4f7df3]/30 via-white/5 to-transparent" />

      <div className="relative h-full overflow-hidden rounded-2xl bg-[#080d1f]">
        {/* top accent bar */}
        <div className="h-1 w-full bg-gradient-to-r from-[#4f7df3] via-[#6b8ff5] to-[#8da7f7]" />

        <div className="p-6 sm:p-8">
          {/* card header */}
          <div className="mb-7 flex items-center gap-4">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-[#4f7df3]/20 to-[#8da7f7]/10 ring-1 ring-[#4f7df3]/20">
              <Sparkles size={20} className="text-[#4f7df3]" />
            </div>
            <div>
              <h3 className="text-xl font-bold tracking-tight text-white">
                Personal Info
              </h3>
              <p className="mt-0.5 text-xs tracking-wide text-gray-500">
                Quick facts about me
              </p>
            </div>
          </div>

          <div className="mb-6 h-px bg-gradient-to-r from-transparent via-[#4f7df3]/20 to-transparent" />

          {/* info items */}
          <div className="grid gap-4">
            {info.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.label}
                  className="group/item flex items-start gap-4 rounded-xl border border-white/[0.04] bg-white/[0.02] p-4 transition-all duration-400 hover:border-[#4f7df3]/30 hover:bg-[#4f7df3]/[0.04]"
                >
                  <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#4f7df3]/[0.08] ring-1 ring-[#4f7df3]/15 transition-all duration-300 group-hover/item:bg-[#4f7df3]/[0.15] group-hover/item:ring-[#4f7df3]/40 group-hover/item:shadow-[0_0_15px_rgba(79,125,243,0.15)]">
                    <Icon
                      size={16}
                      className="text-[#4f7df3] transition-all duration-300 group-hover/item:text-[#8da7f7] group-hover/item:drop-shadow-[0_0_6px_rgba(79,125,243,0.5)]"
                    />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[11px] font-medium uppercase tracking-[0.15em] text-gray-600">
                      {item.label}
                    </p>
                    <p
                      className={`mt-1 text-[15px] font-semibold transition-colors duration-300 group-hover/item:text-white ${
                        item.highlight ? "text-emerald-400" : "text-gray-200"
                      }`}
                    >
                      {item.value}
                    </p>
                    {item.sub && (
                      <p className="mt-0.5 text-xs text-gray-500">{item.sub}</p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* bottom stat bar */}
          <div className="mt-6 flex items-center justify-between border-t border-white/5 pt-5">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_6px_rgba(52,211,153,0.6)]" />
              <span className="text-xs font-medium text-emerald-400/80">
                Open to Work
              </span>
            </div>
            <span className="text-xs uppercase tracking-widest text-gray-600">
              Available
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
