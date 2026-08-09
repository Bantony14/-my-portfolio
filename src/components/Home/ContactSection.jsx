// components/ContactSection.jsx

import React from "react";
import { NavLink } from "react-router-dom";
import { Send, ArrowRight, Sparkles } from "lucide-react";
import { useInView } from "../Helper/UseInView";

const ContactSection = () => {
  const [ref, inView] = useInView();

  return (
    <section className="relative overflow-hidden bg-[#050816] px-6 pb-14 pt-6 sm:px-12">
      {/* background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute bottom-0 left-1/2 h-[300px] w-[600px] -translate-x-1/2 translate-y-1/2 rounded-full bg-[#4f7df3]/[0.04] blur-[100px]" />
      </div>

      <div
        ref={ref}
        className={`relative z-10 transition-all duration-700 ${
          inView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        {/* outer gradient border */}
        <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-[#4f7df3]/30 via-white/5 to-[#8da7f7]/30" />

        <div className="relative overflow-hidden rounded-2xl bg-[#080d1f]">
          {/* top accent bar */}
          <div className="h-1 w-full bg-gradient-to-r from-[#4f7df3] via-[#6b8ff5] to-[#8da7f7]" />

          <div className="flex flex-col items-center justify-between gap-6 px-8 py-8 sm:flex-row">
            {/* Left — Icon + Text */}
            <div className="flex items-center gap-5">
              {/* icon circle */}
              <div className="group/icon relative flex h-14 w-14 shrink-0 items-center justify-center">
                {/* glow ring */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#4f7df3] to-[#8da7f7] opacity-20 blur-md transition-all duration-500 group-hover/icon:opacity-40" />
                {/* solid circle */}
                <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#4f7df3] to-[#6b8ff5] shadow-[0_0_25px_rgba(79,125,243,0.3)] transition-transform duration-500 hover:scale-110">
                  <Send size={20} className="text-white" />
                </div>
              </div>

              {/* text */}
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-lg font-bold tracking-tight text-white sm:text-xl">
                    Let's Work Together!
                  </h3>
                  <Sparkles
                    size={16}
                    className="text-[#4f7df3] animate-pulse"
                  />
                </div>
                <p className="mt-1 text-sm text-gray-400">
                  I'm always open to discussing new projects and opportunities.
                </p>
              </div>
            </div>

            {/* Right — CTA Button */}
            <NavLink
              to="/contact"
              className="group/btn relative flex shrink-0 items-center gap-2 overflow-hidden rounded-full px-7 py-3.5 text-sm font-semibold text-white no-underline transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(79,125,243,0.35)]"
            >
              {/* button gradient bg */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#4f7df3] to-[#6b8ff5] transition-all duration-300 group-hover/btn:from-[#6b8ff5] group-hover/btn:to-[#4f7df3]" />
              {/* shimmer sweep */}
              <div className="absolute inset-0 translate-x-[-100%] bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform duration-700 group-hover/btn:translate-x-[100%]" />
              <span className="relative z-10">Get In Touch</span>
              <ArrowRight
                size={16}
                className="relative z-10 transition-transform duration-300 group-hover/btn:translate-x-1"
              />
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
