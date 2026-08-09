// components/Contact.jsx

import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { useInView } from "../components/Helper/UseInView";

/* ──────────────── data ──────────────── */

const contactItems = [
  {
    label: "Email",
    value: "bantonysin95@gmail.com",
    href: "mailto:bantonysin95@gmail.com",
    icon: Mail,
    clickable: true,
  },
  {
    label: "Phone",
    value: "+91 91041 53677",
    href: "tel:9104153677",
    icon: Phone,
    clickable: true,
  },
  {
    label: "Location",
    value: "Surat, Gujarat, India",
    icon: MapPin,
    clickable: false,
  },
];

/* ──────────────── Main Component ──────────────── */

const Contact = () => {
  const [headRef, headInView] = useInView();
  const [cardRef, cardInView] = useInView();

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
        <div className="absolute right-[15%] top-[20%] h-2 w-2 animate-pulse rounded-full bg-[#4f7df3]/40" />
        <div className="absolute left-[10%] top-[55%] h-1.5 w-1.5 animate-pulse rounded-full bg-[#6b8ff5]/30 [animation-delay:1s]" />
        <div className="absolute right-[25%] bottom-[20%] h-1 w-1 animate-pulse rounded-full bg-[#8da7f7]/30 [animation-delay:2s]" />
      </div>

      <div className="relative z-10 mx-auto max-w-3xl">
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
              Get In Touch
            </span>
          </div>

          <h2 className="text-4xl font-extrabold tracking-tight md:text-5xl lg:text-6xl">
            Let's{" "}
            <span className="bg-gradient-to-r from-[#4f7df3] via-[#6b8ff5] to-[#8da7f7] bg-clip-text text-transparent">
              Connect
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-gray-400">
            Have a project, opportunity, or just want to talk about development?
            Feel free to reach out.
          </p>

          <div className="mx-auto mt-8 flex w-24 items-center justify-center gap-1">
            <div className="h-[2px] w-6 rounded-full bg-[#4f7df3]/40" />
            <div className="h-[2px] w-10 rounded-full bg-[#4f7df3]" />
            <div className="h-[2px] w-6 rounded-full bg-[#4f7df3]/40" />
          </div>
        </div>

        {/* ─── Contact Info Card ─── */}
        <div
          ref={cardRef}
          className={`relative transition-all duration-700 ${
            cardInView
              ? "translate-y-0 opacity-100"
              : "translate-y-12 opacity-0"
          }`}
        >
          <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-b from-[#4f7df3]/30 via-white/5 to-transparent" />

          <div className="relative overflow-hidden rounded-2xl bg-[#080d1f]">
            <div className="h-1 w-full bg-gradient-to-r from-[#4f7df3] via-[#6b8ff5] to-[#8da7f7]" />

            <div className="p-6 md:p-8">
              {/* header */}
              <div className="mb-7 flex items-center gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-[#4f7df3]/20 to-[#8da7f7]/10 ring-1 ring-[#4f7df3]/20">
                  <Mail size={20} className="text-[#4f7df3]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold tracking-tight text-white">
                    Contact Information
                  </h3>
                  <p className="mt-0.5 text-xs tracking-wide text-gray-500">
                    Let's start a conversation
                  </p>
                </div>
              </div>

              <div className="mb-6 h-px bg-gradient-to-r from-transparent via-[#4f7df3]/20 to-transparent" />

              {/* description */}
              <div className="mb-7 rounded-xl border border-[#4f7df3]/10 bg-[#4f7df3]/[0.03] p-4">
                <p className="text-[14px] leading-relaxed text-gray-400">
                  I'm currently looking for my first professional opportunity as
                  a{" "}
                  <span className="font-semibold text-white">
                    React or Full-Stack Developer
                  </span>
                  .
                </p>
              </div>

              {/* contact items */}
              <div className="space-y-3">
                {contactItems.map((item) => {
                  const Icon = item.icon;
                  const Wrapper = item.clickable ? "a" : "div";
                  const wrapperProps = item.clickable
                    ? { href: item.href }
                    : {};

                  return (
                    <Wrapper
                      key={item.label}
                      {...wrapperProps}
                      className="group/item flex items-center gap-4 rounded-xl border border-white/[0.04] bg-white/[0.02] p-4 no-underline transition-all duration-300 hover:border-[#4f7df3]/30 hover:bg-[#4f7df3]/[0.04]"
                    >
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#4f7df3]/[0.08] ring-1 ring-[#4f7df3]/15 transition-all duration-300 group-hover/item:bg-[#4f7df3]/[0.15] group-hover/item:ring-[#4f7df3]/40 group-hover/item:shadow-[0_0_15px_rgba(79,125,243,0.15)]">
                        <Icon
                          size={17}
                          className="text-[#4f7df3] transition-all duration-300 group-hover/item:text-[#8da7f7] group-hover/item:drop-shadow-[0_0_6px_rgba(79,125,243,0.5)]"
                        />
                      </div>

                      <div className="min-w-0">
                        <p className="text-[11px] font-medium uppercase tracking-[0.15em] text-gray-600">
                          {item.label}
                        </p>
                        <p className="mt-0.5 truncate text-sm font-semibold text-gray-300 transition-colors duration-300 group-hover/item:text-white">
                          {item.value}
                        </p>
                      </div>

                      {item.clickable && (
                        <ArrowUpRight
                          size={15}
                          className="ml-auto shrink-0 text-gray-600 transition-all duration-300 group-hover/item:text-[#4f7df3]"
                        />
                      )}
                    </Wrapper>
                  );
                })}
              </div>

              {/* github */}
              <div className="mt-6 h-px bg-gradient-to-r from-transparent via-[#4f7df3]/15 to-transparent" />

              <a
                href="https://github.com/Bantony14"
                target="_blank"
                rel="noreferrer"
                className="group/gh mt-6 flex items-center gap-4 rounded-xl border border-white/[0.04] bg-white/[0.02] p-4 no-underline transition-all duration-300 hover:border-[#4f7df3]/30 hover:bg-[#4f7df3]/[0.04]"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/[0.04] ring-1 ring-white/10 transition-all duration-300 group-hover/gh:ring-[#4f7df3]/30 group-hover/gh:shadow-[0_0_15px_rgba(79,125,243,0.1)]">
                  <FaGithub
                    size={18}
                    className="text-gray-400 transition-all duration-300 group-hover/gh:text-white group-hover/gh:drop-shadow-[0_0_6px_rgba(79,125,243,0.4)]"
                  />
                </div>
                <div className="min-w-0">
                  <p className="text-[11px] font-medium uppercase tracking-[0.15em] text-gray-600">
                    GitHub
                  </p>
                  <p className="mt-0.5 text-sm font-semibold text-gray-300 transition-colors duration-300 group-hover/gh:text-white">
                    github.com/Bantony14
                  </p>
                </div>
                <ArrowUpRight
                  size={15}
                  className="ml-auto shrink-0 text-gray-600 transition-all duration-300 group-hover/gh:text-[#4f7df3]"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
