const SectionCard = ({ children }) => (
  <div className="relative">
    <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-b from-[#4f7df3]/25 via-white/5 to-transparent" />
    <div className="relative overflow-hidden rounded-2xl bg-[#080d1f]">
      <div className="h-1 w-full bg-gradient-to-r from-[#4f7df3] via-[#6b8ff5] to-[#8da7f7]" />
      <div className="p-6 md:p-8">{children}</div>
    </div>
  </div>
);

export default SectionCard;
