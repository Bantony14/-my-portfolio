import React from "react";
import { NavLink } from "react-router-dom";
import { Send } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="px-12 pt-6 pb-10 bg-[#060b18]">
      {/* ===== CTA Banner ===== */}
      <div className="flex items-center justify-between bg-[#0d1326] border border-[#1c2640] rounded-2xl px-8 py-6">
        {/* Left - Icon + Text */}
        <div className="flex items-center gap-5">
          {/* Paper Plane Icon Circle */}
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#6366f1] to-[#4f7df3] flex items-center justify-center text-white shadow-[0_0_20px_rgba(99,102,241,0.3)]">
            <Send size={20} />
          </div>
          {/* Text */}
          <div>
            <h3 className="text-white text-[1.1rem] font-bold m-0 mb-1">
              Let's Work Together!
            </h3>
            <p className="text-[#7a8baa] text-[0.85rem] m-0">
              I'm always open to discussing new projects and opportunities.
            </p>
          </div>
        </div>

        {/* Right - CTA Button */}
        <NavLink
          to="/contact"
          className="flex items-center gap-2 bg-gradient-to-r from-[#6366f1] to-[#4f7df3] text-white px-6 py-3 rounded-full text-[0.85rem] font-semibold no-underline transition-all duration-300 hover:shadow-[0_0_25px_rgba(99,102,241,0.4)] hover:scale-105"
        >
          Get In Touch &nbsp;→
        </NavLink>
      </div>
    </section>
  );
};

export default ContactSection;
