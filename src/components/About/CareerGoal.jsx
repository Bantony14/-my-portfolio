import { Mail } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const CareerGoal = () => {
  return (
    <div className="rounded-2xl border border-[#1c2640] bg-[#0d1326] p-7 lg:col-span-2">
      <h2 className="mb-4 text-2xl font-semibold text-[#e2e8f0]">
        Career Goal
      </h2>

      <p className="leading-7 text-[#7a8baa]">
        My goal is to start my professional career as a React or Full Stack
        Developer, work on real-world applications, strengthen my development
        skills and gradually become a better software developer.
      </p>

      <div className="mt-7 flex flex-wrap gap-3">
        <a
          href="mailto:bantonysin95@gmail.com"
          className="flex items-center gap-2 rounded-full bg-gradient-to-r from-[#6366f1] to-[#4f7df3] px-6 py-3 text-sm font-semibold text-white no-underline transition-all duration-300 hover:shadow-[0_0_25px_rgba(99,102,241,0.4)] hover:scale-105"
        >
          <Mail size={17} />
          Contact Me
        </a>

        <a
          href="https://github.com/Bantony14"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 rounded-full border border-[#1c2640] bg-[#111827] px-6 py-3 text-sm font-semibold text-[#e2e8f0] no-underline transition-all duration-300 hover:border-[#4f7df3] hover:text-white"
        >
          <FaGithub size={17} />
          GitHub
        </a>
      </div>
    </div>
  );
};

export default CareerGoal;
