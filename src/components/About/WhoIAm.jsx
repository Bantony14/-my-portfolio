// components/About/WhoIAm.jsx

import { useEffect, useRef, useState } from "react";
import { Code2, Layers, Rocket } from "lucide-react";
import { useInView } from "../Helper/UseInView";

const WhoIAm = () => {
  const [ref, inView] = useInView();

  return (
    <div
      ref={ref}
      className={`group relative h-full transition-all duration-700 lg:col-span-2 ${
        inView ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
      }`}
      style={{ transitionDelay: "150ms" }}
    >
      {/* gradient border */}
      <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-b from-[#4f7df3]/30 via-white/5 to-transparent" />

      <div className="relative h-full overflow-hidden rounded-2xl bg-[#080d1f]">
        {/* top accent bar */}
        <div className="h-1 w-full bg-gradient-to-r from-[#8da7f7] via-[#4f7df3] to-[#6b8ff5]" />

        <div className="p-6 sm:p-8">
          {/* card header */}
          <div className="mb-7 flex items-center gap-4">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-[#4f7df3]/20 to-[#8da7f7]/10 ring-1 ring-[#4f7df3]/20">
              <Code2 size={20} className="text-[#4f7df3]" />
            </div>
            <div>
              <h3 className="text-xl font-bold tracking-tight text-white">
                Who I Am
              </h3>
              <p className="mt-0.5 text-xs tracking-wide text-gray-500">
                My story & passion
              </p>
            </div>
          </div>

          <div className="mb-6 h-px bg-gradient-to-r from-transparent via-[#4f7df3]/20 to-transparent" />

          {/* content paragraphs */}
          <div className="space-y-4 text-[15px] leading-relaxed text-gray-400">
            <p>
              I am a{" "}
              <span className="font-semibold text-white">BCA graduate</span>{" "}
              from Veer Narmad South Gujarat University and a fresher passionate
              about web development.
            </p>

            <p>
              I have hands-on experience with{" "}
              <span className="font-semibold text-[#4f7df3]">React</span>,{" "}
              <span className="font-semibold text-[#4f7df3]">Node.js</span>,{" "}
              <span className="font-semibold text-[#4f7df3]">Express.js</span>,{" "}
              <span className="font-semibold text-[#4f7df3]">MongoDB</span>,{" "}
              Tailwind CSS, JavaScript, HTML, CSS, Git and GitHub. I enjoy
              building clean, responsive and practical web applications.
            </p>

            <p>
              I have built projects like{" "}
              <span className="font-semibold text-[#4f7df3]">RentFlow</span>, a
              full-fledged rent management system, and{" "}
              <span className="font-semibold text-[#4f7df3]">FashionKart</span>,
              a frontend e-commerce project using React and Redux.
            </p>

            <p>
              I am currently looking for an opportunity where I can grow as a
              React or Full Stack Developer and contribute to real-world
              projects.
            </p>
          </div>

          {/* highlight chips row */}
          <div className="mt-7 flex flex-wrap gap-3">
            {[
              { text: "MERN Stack", icon: Layers },
              { text: "Frontend Focused", icon: Code2 },
              { text: "Ready to Build", icon: Rocket },
            ].map((chip) => {
              const Icon = chip.icon;
              return (
                <div
                  key={chip.text}
                  className="group/chip flex items-center gap-2 rounded-full border border-[#4f7df3]/15 bg-[#4f7df3]/[0.06] px-4 py-2 text-xs font-semibold text-[#4f7df3] transition-all duration-300 hover:border-[#4f7df3]/40 hover:bg-[#4f7df3]/[0.12] hover:shadow-[0_0_15px_rgba(79,125,243,0.1)]"
                >
                  <Icon
                    size={13}
                    className="transition-all duration-300 group-hover/chip:drop-shadow-[0_0_4px_rgba(79,125,243,0.6)]"
                  />
                  {chip.text}
                </div>
              );
            })}
          </div>

          {/* bottom featured projects bar */}
          <div className="mt-6 flex items-center gap-6 border-t border-white/5 pt-5">
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-medium uppercase tracking-[0.15em] text-gray-600">
                Featured
              </span>
            </div>
            <div className="flex gap-3">
              {["RentFlow", "FashionKart"].map((project) => (
                <span
                  key={project}
                  className="rounded-md border border-[#4f7df3]/15 bg-[#4f7df3]/[0.05] px-3 py-1 text-xs font-medium text-[#6b8ff5]"
                >
                  {project}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoIAm;
