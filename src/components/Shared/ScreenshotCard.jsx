import { useState } from "react";
import { Monitor, Maximize2 } from "lucide-react";
import { useInView } from "../Helper/UseInView";
import { catColors } from "../Project/RentFlow/data";

const ScreenshotCard = ({ item, index, onOpen }) => {
  const [ref, inView] = useInView();
  const [loaded, setLoaded] = useState(false);
  const colors = catColors[item.category] || catColors.Frontend;

  return (
    <div
      ref={ref}
      className={`group relative cursor-pointer transition-all duration-500 ${
        inView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      }`}
      style={{ transitionDelay: `${(index % 6) * 80}ms` }}
      onClick={() => onOpen(index)}
    >
      <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-b from-[#4f7df3]/15 via-white/5 to-transparent opacity-50 transition-opacity duration-500 group-hover:opacity-100" />

      <div className="relative overflow-hidden rounded-2xl bg-[#080d1f]">
        <div className="relative overflow-hidden bg-[#0a0f1e]">
          {!loaded && (
            <div className="flex aspect-video items-center justify-center">
              <div className="h-7 w-7 animate-spin rounded-full border-2 border-[#4f7df3]/20 border-t-[#4f7df3]" />
            </div>
          )}

          <img
            src={item.src}
            alt={item.label}
            onLoad={() => setLoaded(true)}
            className={`w-full transition-all duration-500 group-hover:scale-[1.03] ${
              loaded ? "opacity-100" : "hidden"
            }`}
          />

          <div className="absolute inset-0 flex items-center justify-center bg-[#060b18]/70 opacity-0 transition-all duration-300 group-hover:opacity-100">
            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-sm">
              <Maximize2 size={20} />
            </div>
          </div>

          <div
            className={`absolute right-3 top-3 rounded-full border ${colors.border} ${colors.bg} px-3 py-1 text-[10px] font-bold uppercase tracking-widest ${colors.text} backdrop-blur-sm`}
          >
            {item.category}
          </div>

          <div className="absolute bottom-3 left-3 flex h-8 w-8 items-center justify-center rounded-lg bg-[#080d1f]/80 text-xs font-bold text-[#4f7df3] ring-1 ring-[#4f7df3]/20 backdrop-blur-sm">
            {String(index + 1).padStart(2, "0")}
          </div>
        </div>

        <div className="flex items-center justify-between border-t border-white/[0.04] px-5 py-4">
          <div className="flex items-center gap-3">
            <Monitor
              size={15}
              className="shrink-0 text-[#4f7df3]/40 transition-colors duration-300 group-hover:text-[#4f7df3]"
            />
            <span className="text-[15px] font-semibold text-gray-300 transition-colors duration-300 group-hover:text-white">
              {item.label}
            </span>
          </div>

          <span
            className={`text-[10px] font-semibold uppercase tracking-wider ${colors.text} opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
          >
            View
          </span>
        </div>
      </div>
    </div>
  );
};

export default ScreenshotCard;
