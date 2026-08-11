import { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  Layout,
  ExternalLink,
  Users,
  CheckCircle2,
  Layers3,
  Code2,
  Plug,
  Server,
  Images,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { useInView } from "../../Helper/UseInView";

import SectionCard from "../../Shared/SectionCard";
import SectionHeader from "../../Shared/SectionHeader";
import ScreenshotCard from "./ScreenshotCard";
import Lightbox from "./Lightbox";
import {
  projectInfo,
  screenshots,
  INITIAL_COUNT,
  CATEGORIES,
  catColors,
} from "./data";

function RentFlowCard() {
  const [showAll, setShowAll] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const [headRef, headInView] = useInView();
  const [overviewRef, overviewInView] = useInView();
  const [featureRef, featureInView] = useInView();
  const [archRef, archInView] = useInView();
  const [stackRef, stackInView] = useInView();
  const [ssRef, ssInView] = useInView();

  const filtered =
    activeCategory === "All"
      ? screenshots
      : screenshots.filter((s) => s.category === activeCategory);

  const visible = showAll ? filtered : filtered.slice(0, INITIAL_COUNT);
  const hasMore = filtered.length > INITIAL_COUNT;

  return (
    <div className="relative space-y-12">
      {/* ════════ Header ════════ */}
      <div
        ref={headRef}
        className={`transition-all duration-700 ${
          headInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
      >
        <SectionCard>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between mt-20">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#4f7df3]/20 to-[#8da7f7]/10 ring-1 ring-[#4f7df3]/20">
                <Layout size={26} className="text-[#4f7df3]" />
              </div>
              <div>
                <div className="mb-1 inline-flex items-center gap-2 rounded-full border border-[#4f7df3]/15 bg-[#4f7df3]/[0.06] px-3 py-0.5">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#4f7df3]" />
                  <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#4f7df3]">
                    Full-Stack Project
                  </span>
                </div>
                <h2 className="text-3xl font-extrabold tracking-tight text-white">
                  {projectInfo.title}
                </h2>
                <p className="mt-1 text-sm text-gray-400">
                  {projectInfo.subtitle}
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <a
                href={projectInfo.links.live}
                target="_blank"
                rel="noreferrer"
                className="group/btn relative flex items-center gap-2 overflow-hidden rounded-lg px-5 py-2.5 text-sm font-semibold text-white no-underline transition-all duration-300 hover:shadow-[0_0_20px_rgba(79,125,243,0.25)]"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#4f7df3] to-[#6b8ff5] transition-all duration-300 group-hover/btn:from-[#6b8ff5] group-hover/btn:to-[#4f7df3]" />
                <ExternalLink size={15} className="relative z-10" />
                <span className="relative z-10">Live Demo</span>
              </a>
              <a
                href={projectInfo.links.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] px-5 py-2.5 text-sm font-semibold text-gray-300 no-underline transition-all duration-300 hover:border-[#4f7df3]/40 hover:bg-[#4f7df3]/[0.06] hover:text-white"
              >
                <FaGithub size={15} />
                GitHub
              </a>
            </div>
          </div>
        </SectionCard>
      </div>

      {/* ════════ Overview ════════ */}
      <div
        ref={overviewRef}
        className={`transition-all duration-700 ${overviewInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
      >
        <div className="grid gap-6 lg:grid-cols-[1.5fr_0.5fr]">
          <SectionCard>
            <SectionHeader
              icon={Layout}
              title="Project Overview"
              subtitle="What RentFlow is about"
            />
            <p className="text-[15px] leading-8 text-gray-400">
              {projectInfo.description}
            </p>
          </SectionCard>

          <SectionCard>
            <SectionHeader
              icon={Users}
              title="Built For"
              subtitle="Target users"
            />
            <div className="space-y-3">
              {projectInfo.users.map((user) => (
                <div
                  key={user}
                  className="group/item flex items-center gap-3 rounded-xl border border-white/[0.04] bg-white/[0.02] p-4 transition-all duration-300 hover:border-[#4f7df3]/30 hover:bg-[#4f7df3]/[0.04]"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#4f7df3]/[0.08] ring-1 ring-[#4f7df3]/15 transition-all duration-300 group-hover/item:bg-[#4f7df3]/[0.15] group-hover/item:ring-[#4f7df3]/40">
                    <Users
                      size={15}
                      className="text-[#4f7df3] transition-all duration-300 group-hover/item:text-[#8da7f7]"
                    />
                  </div>
                  <span className="text-sm font-semibold text-gray-300 transition-colors duration-300 group-hover/item:text-white">
                    {user}
                  </span>
                </div>
              ))}
            </div>
          </SectionCard>
        </div>
      </div>

      {/* ════════ Features ════════ */}
      <div
        ref={featureRef}
        className={`transition-all duration-700 ${featureInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
      >
        <SectionCard>
          <SectionHeader
            icon={CheckCircle2}
            title="Core Features"
            subtitle="What RentFlow handles"
          />
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {projectInfo.features.map((feature, i) => (
              <div
                key={feature}
                className="group/feat flex items-center gap-3 rounded-xl border border-white/[0.04] bg-white/[0.02] px-4 py-3.5 transition-all duration-300 hover:border-[#4f7df3]/25 hover:bg-[#4f7df3]/[0.04]"
              >
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-[#4f7df3]/[0.08] text-[10px] font-bold text-[#4f7df3] transition-all duration-300 group-hover/feat:bg-[#4f7df3]/[0.15]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-[13px] font-medium text-gray-400 transition-colors duration-300 group-hover/feat:text-gray-200">
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </SectionCard>
      </div>

      {/* ════════ Architecture ════════ */}
      <div
        ref={archRef}
        className={`transition-all duration-700 ${archInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
      >
        <SectionCard>
          <SectionHeader
            icon={Layers3}
            title="Application Structure"
            subtitle="How the system is organized"
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {projectInfo.architecture.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="group/arch rounded-xl border border-white/[0.04] bg-white/[0.02] p-5 transition-all duration-300 hover:border-[#4f7df3]/25 hover:bg-[#4f7df3]/[0.03]"
                >
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-[#4f7df3]/[0.08] ring-1 ring-[#4f7df3]/15 transition-all duration-300 group-hover/arch:bg-[#4f7df3]/[0.15] group-hover/arch:ring-[#4f7df3]/40 group-hover/arch:shadow-[0_0_15px_rgba(79,125,243,0.15)]">
                    <Icon
                      size={19}
                      className="text-[#4f7df3] transition-all duration-300 group-hover/arch:text-[#8da7f7]"
                    />
                  </div>
                  <h4 className="mb-2 text-[15px] font-bold text-white">
                    {item.title}
                  </h4>
                  <p className="text-[13px] leading-relaxed text-gray-500 transition-colors duration-300 group-hover/arch:text-gray-400">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </SectionCard>
      </div>

      {/* ════════ Tech Stack ════════ */}
      <div
        ref={stackRef}
        className={`transition-all duration-700 ${stackInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
      >
        <SectionCard>
          <SectionHeader
            icon={Code2}
            title="Tech Stack"
            subtitle="Technologies powering RentFlow"
          />
          <div className="grid gap-5 md:grid-cols-3">
            {[
              { title: "Frontend", icon: Layout, items: projectInfo.frontend },
              { title: "Backend", icon: Server, items: projectInfo.backend },
              {
                title: "Integrations",
                icon: Plug,
                items: projectInfo.integrations,
              },
            ].map((group) => {
              const GIcon = group.icon;
              return (
                <div
                  key={group.title}
                  className="rounded-xl border border-white/[0.04] bg-white/[0.02] p-5"
                >
                  <div className="mb-4 flex items-center gap-2.5">
                    <GIcon size={15} className="text-[#4f7df3]/60" />
                    <h4 className="text-sm font-bold uppercase tracking-wider text-gray-300">
                      {group.title}
                    </h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-[#4f7df3]/15 bg-[#4f7df3]/[0.06] px-3.5 py-1.5 text-xs font-semibold text-[#6b8ff5] transition-all duration-300 hover:border-[#4f7df3]/40 hover:bg-[#4f7df3]/[0.12] hover:text-[#8da7f7]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </SectionCard>
      </div>

      {/* ════════ Screenshots ════════ */}
      <div
        ref={ssRef}
        className={`transition-all duration-700 ${ssInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
      >
        <SectionCard>
          <div className="mb-7 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-[#4f7df3]/20 to-[#8da7f7]/10 ring-1 ring-[#4f7df3]/20">
                <Images size={20} className="text-[#4f7df3]" />
              </div>
              <div>
                <h3 className="text-xl font-bold tracking-tight text-white">
                  Screenshots
                </h3>
                <p className="mt-0.5 text-xs tracking-wide text-gray-500">
                  {screenshots.length} screens · Click to preview
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 rounded-full border border-white/[0.06] bg-white/[0.02] px-4 py-2 text-xs font-medium text-gray-500">
              Showing{" "}
              <span className="font-bold text-[#4f7df3]">{visible.length}</span>{" "}
              of{" "}
              <span className="font-bold text-gray-300">{filtered.length}</span>
            </div>
          </div>

          <div className="mb-7 h-px bg-gradient-to-r from-transparent via-[#4f7df3]/20 to-transparent" />

          {/* filter tabs */}
          <div className="mb-8 flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat;
              const count =
                cat === "All"
                  ? screenshots.length
                  : screenshots.filter((s) => s.category === cat).length;
              return (
                <button
                  key={cat}
                  onClick={() => {
                    setActiveCategory(cat);
                    setShowAll(false);
                  }}
                  className={`flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold transition-all duration-300 ${
                    isActive
                      ? "border border-[#4f7df3]/40 bg-[#4f7df3]/[0.12] text-[#4f7df3] shadow-[0_0_15px_rgba(79,125,243,0.1)]"
                      : "border border-white/[0.06] bg-white/[0.02] text-gray-500 hover:border-white/10 hover:text-gray-300"
                  }`}
                >
                  {cat}
                  <span
                    className={`rounded-md px-1.5 py-0.5 text-[10px] font-bold ${isActive ? "bg-[#4f7df3]/20 text-[#4f7df3]" : "bg-white/[0.04] text-gray-600"}`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {visible.map((item, i) => (
              <ScreenshotCard
                key={item.label}
                item={item}
                index={i}
                onOpen={(idx) => setLightboxIndex(idx)}
              />
            ))}
          </div>

          {visible.length === 0 && (
            <div className="flex flex-col items-center gap-3 py-16 text-center">
              <Images size={32} className="text-gray-600" />
              <p className="text-sm text-gray-500">
                No screenshots in this category
              </p>
            </div>
          )}

          {!showAll && hasMore && (
            <div className="relative mt-[-60px] pt-[80px]">
              <div className="pointer-events-none absolute inset-x-0 top-0 h-[80px] bg-gradient-to-t from-[#080d1f] to-transparent" />
            </div>
          )}

          {hasMore && (
            <div className="mt-8 flex justify-center">
              <button
                onClick={() => setShowAll(!showAll)}
                className="group/btn flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.03] px-7 py-3 text-sm font-semibold text-gray-300 transition-all duration-300 hover:border-[#4f7df3]/40 hover:bg-[#4f7df3]/[0.08] hover:text-white hover:shadow-[0_0_20px_rgba(79,125,243,0.1)]"
              >
                {showAll ? (
                  <>
                    Show Less{" "}
                    <ChevronUp
                      size={16}
                      className="transition-transform duration-300 group-hover/btn:-translate-y-0.5"
                    />
                  </>
                ) : (
                  <>
                    Show All Screenshots
                    <span className="rounded-md bg-[#4f7df3]/10 px-2 py-0.5 text-xs font-bold text-[#4f7df3]">
                      +{filtered.length - INITIAL_COUNT}
                    </span>
                    <ChevronDown
                      size={16}
                      className="transition-transform duration-300 group-hover/btn:translate-y-0.5"
                    />
                  </>
                )}
              </button>
            </div>
          )}
        </SectionCard>
      </div>

      {/* ════════ Lightbox ════════ */}
      {lightboxIndex !== null && (
        <Lightbox
          images={visible}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onPrev={() => setLightboxIndex((p) => Math.max(0, p - 1))}
          onNext={() =>
            setLightboxIndex((p) => Math.min(visible.length - 1, p + 1))
          }
        />
      )}
    </div>
  );
}

export default RentFlowCard;
