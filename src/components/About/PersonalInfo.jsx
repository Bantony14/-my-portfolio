import { GraduationCap, MapPin } from "lucide-react";

const PersonalInfo = () => {
  return (
    <div className="rounded-2xl border border-[#1c2640] bg-[#0d1326] p-7">
      <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-[#4f7df3]/10 text-[#4f7df3]">
        <GraduationCap size={24} />
      </div>

      <h2 className="mb-6 text-xl font-semibold text-[#e2e8f0]">
        Personal Info
      </h2>

      <div className="space-y-5">
        <div>
          <p className="text-sm text-[#7a8baa]">Name</p>
          <p className="mt-1 text-[#e2e8f0]">Singh Bantony Upendra</p>
        </div>

        <div>
          <p className="text-sm text-[#7a8baa]">Education</p>
          <p className="mt-1 text-[#e2e8f0]">BCA</p>
          <p className="text-sm text-[#7a8baa]">
            Veer Narmad South Gujarat University
          </p>
        </div>

        <div>
          <p className="text-sm text-[#7a8baa]">Location</p>
          <p className="mt-1 flex items-center gap-2 text-[#e2e8f0]">
            <MapPin size={16} className="text-[#4f7df3]" />
            Surat, Gujarat, India
          </p>
        </div>

        <div>
          <p className="text-sm text-[#7a8baa]">Experience</p>
          <p className="mt-1 text-[#34d399] font-medium">Fresher</p>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
