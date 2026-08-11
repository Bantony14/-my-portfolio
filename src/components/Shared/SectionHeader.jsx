const SectionHeader = ({ icon: Icon, title, subtitle }) => (
  <>
    <div className="mb-7 flex items-center gap-4">
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-[#4f7df3]/20 to-[#8da7f7]/10 ring-1 ring-[#4f7df3]/20">
        <Icon size={20} className="text-[#4f7df3]" />
      </div>
      <div>
        <h3 className="text-xl font-bold tracking-tight text-white">{title}</h3>
        <p className="mt-0.5 text-xs tracking-wide text-gray-500">{subtitle}</p>
      </div>
    </div>
    <div className="mb-7 h-px bg-gradient-to-r from-transparent via-[#4f7df3]/20 to-transparent" />
  </>
);

export default SectionHeader;
