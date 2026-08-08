import { Target } from "lucide-react";

const MyStrengths = () => {
  const strengths = [
    "Quick Learner",
    "Problem Solver",
    "Adaptable",
    "Consistent",
    "Always willing to improve",
  ];

  return (
    <div className="rounded-2xl border border-[#1c2640] bg-[#0d1326] p-7">
      <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-[#764abc]/10 text-[#764abc]">
        <Target size={24} />
      </div>

      <h2 className="mb-5 text-xl font-semibold text-[#e2e8f0]">
        My Strengths
      </h2>

      <ul className="space-y-3 text-[#7a8baa]">
        {strengths.map((item) => (
          <li key={item} className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#4f7df3]"></span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MyStrengths;
