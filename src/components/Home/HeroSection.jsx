import React from "react";
import { NavLink } from "react-router-dom";
import { ArrowRight, Mail, Download } from "lucide-react";
import { FaGithub, FaLinkedinIn, FaTwitter, FaInstagram } from "react-icons/fa";
import { useInView } from "../Helper/UseInView";

const HeroSection = () => {
  const [ref, inView] = useInView();

  const socials = [
    { label: "GitHub", icon: FaGithub, link: "#" },
    { label: "LinkedIn", icon: FaLinkedinIn, link: "#" },
    { label: "Twitter", icon: FaTwitter, link: "#" },
    { label: "Instagram", icon: FaInstagram, link: "#" },
  ];

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-[#050816] px-6 pb-12 pt-24 sm:px-12">
      {/* ─── Background ─── */}
      <div className="pointer-events-none absolute inset-0">
        {/* large radial glow */}
        <div className="absolute left-[20%] top-[30%] h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#4f7df3]/[0.04] blur-[120px]" />
        <div className="absolute bottom-[10%] right-[15%] h-[400px] w-[400px] rounded-full bg-[#4f7df3]/[0.03] blur-[100px]" />

        {/* grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* floating orbs */}
        <div className="absolute right-[30%] top-[20%] h-2.5 w-2.5 animate-pulse rounded-full bg-[#4f7df3]/50" />
        <div className="absolute bottom-[25%] right-[38%] h-2 w-2 animate-pulse rounded-full bg-[#6b8ff5]/35 [animation-delay:1s]" />
        <div className="absolute right-[22%] top-[60%] h-1.5 w-1.5 animate-pulse rounded-full bg-[#8da7f7]/40 [animation-delay:2s]" />
        <div className="absolute left-[5%] top-[70%] h-1.5 w-1.5 animate-pulse rounded-full bg-[#4f7df3]/30 [animation-delay:3s]" />
        <div className="absolute left-[40%] top-[10%] h-1 w-1 animate-pulse rounded-full bg-[#6b8ff5]/25 [animation-delay:0.5s]" />
      </div>

      <div
        ref={ref}
        className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-16 lg:flex-row"
      >
        {/* ═══════ Left Content ═══════ */}
        <div
          className={`max-w-[580px] transition-all duration-700 ${
            inView ? "translate-x-0 opacity-100" : "-translate-x-12 opacity-0"
          }`}
        >
          {/* status badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#4f7df3]/20 bg-[#4f7df3]/[0.06] px-4 py-1.5">
            <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_6px_rgba(52,211,153,0.6)] animate-pulse" />
            <span className="text-xs font-semibold uppercase tracking-[0.15em] text-gray-400">
              Available for Hire
            </span>
          </div>

          {/* greeting */}
          <p className="mb-3 text-base font-medium text-[#4f7df3]">Hi, I'm</p>

          {/* name */}
          <h1 className="mb-2 text-5xl font-extrabold leading-tight sm:text-6xl lg:text-[3.8rem]">
            <span className="text-white">Bantony </span>
            <span className="bg-gradient-to-r from-[#4f7df3] via-[#6b8ff5] to-[#8da7f7] bg-clip-text text-transparent">
              Singh
            </span>
          </h1>

          {/* title with animated underline */}
          <div className="mb-6 flex items-center gap-3">
            <div className="h-[2px] w-8 rounded-full bg-[#4f7df3]" />
            <h2 className="text-lg font-semibold tracking-widest text-white sm:text-xl">
              MERN Stack Developer
            </h2>
          </div>

          {/* description */}
          <p className="mb-8 max-w-[460px] text-[15px] leading-relaxed text-gray-400">
            I build modern and responsive web applications using{" "}
            <span className="font-semibold text-white">React</span> and the{" "}
            <span className="font-semibold text-white">MERN stack</span>, with a
            focus on clean code, reusable components, and practical solutions to
            real-world problems.
          </p>

          {/* buttons */}
          <div className="mb-10 flex flex-wrap items-center gap-4">
            {/* primary CTA */}
            <NavLink
              to="/projects"
              className="group/btn relative flex items-center gap-2 overflow-hidden rounded-full px-7 py-3.5 text-sm font-semibold text-white no-underline transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(79,125,243,0.35)]"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#4f7df3] to-[#6b8ff5] transition-all duration-300 group-hover/btn:from-[#6b8ff5] group-hover/btn:to-[#4f7df3]" />
              <div className="absolute inset-0 translate-x-[-100%] bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform duration-700 group-hover/btn:translate-x-[100%]" />
              <span className="relative z-10">View My Work</span>
              <ArrowRight
                size={16}
                className="relative z-10 transition-transform duration-300 group-hover/btn:translate-x-1"
              />
            </NavLink>

            {/* secondary CTA */}
            <NavLink
              to="/contact"
              className="group/btn flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-7 py-3.5 text-sm font-semibold text-gray-300 no-underline transition-all duration-300 hover:border-[#4f7df3]/50 hover:bg-[#4f7df3]/[0.08] hover:text-white hover:shadow-[0_0_20px_rgba(79,125,243,0.1)]"
            >
              <Mail size={16} />
              Contact Me
            </NavLink>
          </div>

          {/* social icons */}
          <div className="flex items-center gap-2">
            <span className="mr-2 text-[11px] font-medium uppercase tracking-[0.15em] text-gray-600">
              Find me
            </span>
            {socials.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.link}
                  aria-label={social.label}
                  className="group/social flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.06] bg-white/[0.02] text-gray-500 no-underline transition-all duration-300 hover:border-[#4f7df3]/40 hover:bg-[#4f7df3]/[0.08] hover:text-white hover:shadow-[0_0_15px_rgba(79,125,243,0.15)]"
                >
                  <Icon
                    size={17}
                    className="transition-all duration-300 group-hover/social:drop-shadow-[0_0_6px_rgba(79,125,243,0.5)]"
                  />
                </a>
              );
            })}
          </div>
        </div>

        {/* ═══════ Right — Profile Image ═══════ */}
        <div
          className={`relative transition-all duration-700 delay-300 ${
            inView ? "translate-x-0 opacity-100" : "translate-x-12 opacity-0"
          }`}
        >
          {/* decorative dot grid */}
          <div className="absolute -right-12 -top-4 grid grid-cols-5 gap-2 opacity-20">
            {Array(20)
              .fill(0)
              .map((_, i) => (
                <div
                  key={i}
                  className="h-1.5 w-1.5 rounded-full bg-[#4f7df3]"
                />
              ))}
          </div>

          {/* animated spinning ring */}
          <div className="absolute -inset-3 animate-spin-very-slow rounded-full border border-dashed border-[#4f7df3]/20" />

          {/* outer glow */}
          <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-[#4f7df3]/15 to-[#8da7f7]/10 blur-2xl" />

          {/* gradient ring */}
          <div className="relative h-[320px] w-[320px] rounded-full bg-gradient-to-br from-[#4f7df3] via-[#6b8ff5] to-[#8da7f7] p-[3px] shadow-[0_0_60px_rgba(79,125,243,0.25)] sm:h-[360px] sm:w-[360px]">
            {/* dark gap ring */}
            <div className="h-full w-full rounded-full bg-[#050816] p-[4px]">
              {/* image */}
              <div className="h-full w-full overflow-hidden rounded-full bg-[#080d1f]">
                <img
                  src="../../image.png"
                  alt="Bantony Singh"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* floating badge — bottom left */}
          <div className="absolute -bottom-3 -left-4 rounded-xl border border-white/10 bg-[#080d1f]/90 px-4 py-2.5 backdrop-blur-sm">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_6px_rgba(52,211,153,0.6)]" />
              <span className="text-xs font-semibold text-gray-300">
                Open to Work
              </span>
            </div>
          </div>

          {/* floating badge — top right */}
          <div className="absolute -right-2 top-8 rounded-xl border border-white/10 bg-[#080d1f]/90 px-4 py-2.5 backdrop-blur-sm">
            <p className="text-xs font-bold text-[#4f7df3]">MERN</p>
            <p className="text-[10px] text-gray-500">Full Stack</p>
          </div>

          {/* bottom decorative circle */}
          <div className="absolute -bottom-6 left-[45%] h-3 w-3 rounded-full border-2 border-[#4f7df3]/40" />
        </div>
      </div>

      {/* ─── Keyframes ─── */}
      <style>{`
        @keyframes spin-very-slow {
          to { transform: rotate(360deg); }
        }
        .animate-spin-very-slow {
          animation: spin-very-slow 20s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
