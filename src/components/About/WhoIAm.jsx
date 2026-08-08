import { Code2 } from "lucide-react";

const WhoIAm = () => {
  return (
    <div className="rounded-2xl border border-[#1c2640] bg-[#0d1326] p-7 lg:col-span-2">
      <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-[#6366f1]/10 text-[#6366f1]">
        <Code2 size={24} />
      </div>

      <h2 className="mb-5 text-2xl font-semibold text-[#e2e8f0]">Who I Am</h2>

      <div className="space-y-4 leading-7 text-[#7a8baa]">
        <p>
          I am a BCA graduate from Veer Narmad South Gujarat University and a
          fresher passionate about web development.
        </p>

        <p>
          I have hands-on experience with React, Node.js, Express.js, MongoDB,
          Tailwind CSS, JavaScript, HTML, CSS, Git and GitHub. I enjoy building
          clean, responsive and practical web applications.
        </p>

        <p>
          I have built projects like{" "}
          <span className="font-medium text-[#4f7df3]">RentFlow</span>, a
          full-fledged rent management system, and{" "}
          <span className="font-medium text-[#4f7df3]">FashionKart</span>, a
          frontend e-commerce project using React and Redux.
        </p>

        <p>
          I am currently looking for an opportunity where I can grow as a React
          or Full Stack Developer and contribute to real-world projects.
        </p>
      </div>
    </div>
  );
};

export default WhoIAm;
