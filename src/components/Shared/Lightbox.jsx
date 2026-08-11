import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { catColors } from "../Project/RentFlow/data";

const Lightbox = ({ images, currentIndex, onClose, onPrev, onNext }) => {
  const current = images[currentIndex];
  if (!current) return null;
  const colors = catColors[current.category] || catColors.Frontend;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative mx-4 max-h-[90vh] w-full max-w-5xl overflow-hidden rounded-2xl border border-white/10 bg-[#080d1f]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-white/[0.06] px-6 py-4">
          <div className="flex items-center gap-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#4f7df3]/10 text-xs font-bold text-[#4f7df3]">
              {String(currentIndex + 1).padStart(2, "0")}
            </span>
            <div>
              <p className="text-[15px] font-bold text-white">
                {current.label}
              </p>
              <p
                className={`text-[11px] font-semibold uppercase tracking-widest ${colors.text}`}
              >
                {current.category}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs text-gray-500">
              {currentIndex + 1} / {images.length}
            </span>
            <button
              onClick={onClose}
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-gray-400 transition hover:bg-white/[0.08] hover:text-white"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        <div className="relative flex items-center justify-center overflow-auto bg-[#060b18] p-4">
          <img
            src={current.src}
            alt={current.label}
            className="max-h-[70vh] w-full rounded-lg object-contain"
          />

          {currentIndex > 0 && (
            <button
              onClick={onPrev}
              className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-[#080d1f]/90 text-gray-300 backdrop-blur-sm transition hover:border-[#4f7df3]/40 hover:bg-[#4f7df3]/10 hover:text-white"
            >
              <ChevronLeft size={20} />
            </button>
          )}

          {currentIndex < images.length - 1 && (
            <button
              onClick={onNext}
              className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-[#080d1f]/90 text-gray-300 backdrop-blur-sm transition hover:border-[#4f7df3]/40 hover:bg-[#4f7df3]/10 hover:text-white"
            >
              <ChevronRight size={20} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Lightbox;
