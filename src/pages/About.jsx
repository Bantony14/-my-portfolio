import PersonalInfo from "../components/About/PersonalInfo";
import WhoIAm from "../components/About/WhoIAm";
import MyStrengths from "../components/About/PersonalInfo";
import CareerGoal from "../components/About/CareerGoal";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen bg-[#060b18] px-6 py-24 text-white"
    >
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-14 text-center">
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-[#4f7df3]">
            Get To Know Me
          </p>

          <h1 className="text-4xl font-bold md:text-5xl">
            About{" "}
            <span className="bg-gradient-to-r from-[#6366f1] to-[#4f7df3] bg-clip-text text-transparent">
              Me
            </span>
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-[#7a8baa]">
            A little more about my background, skills and journey as a
            developer.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid gap-6 lg:grid-cols-3">
          <PersonalInfo />
          <WhoIAm />
          <MyStrengths />
          <CareerGoal />
        </div>
      </div>
    </section>
  );
};

export default About;
