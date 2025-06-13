import React from "react";

const About = () => {
  return (
    <section id="about" className="min-h-screen justify-center px-6 py-24">
      <h2 className="text-6xl text-white font-bold mb-8 text-center">
        About Me
      </h2>

      <div className="p-6 flex flex-col bg-[#7A2077]/60 md:flex-row items-center md:items-center gap-10 max-w-6xl mx-auto">
        {/* Profile Image */}
        <div className="w-20 h-20 md:w-40 md:h-40 md:ml-5 rounded-full flex items-center overflow-hidden shadow-lg">
          <img
            src="/pic_for_profile.jpg"
            alt="Meghana Jammu"
            className="w-full h-full object-cover object-center rounded-xl shadow-md"
          />
        </div>

        {/* Content */}
        <div className="text-center md:text-left space-y-4 max-w-xl">
          <p className="text-lg leading-relaxed">
            Hi, I’m{" "}
            <span className="font-semibold text-purple-200">Meghana Jammu</span>
            , a passionate B.Tech Chemistry student at{" "}
            <span className="text-purple-300">IIT Guwahati</span> with a deep
            interest in technology and innovation.
          </p>
          <p className="text-lg leading-relaxed">
            I'm a self-taught{" "}
            <span className="text-purple-300 font-medium">
              Full Stack Developer
            </span>{" "}
            and an aspiring
            <span className="text-purple-300 font-medium">
              {" "}
              Machine Learning Engineer
            </span>
            . I enjoy building meaningful applications and exploring the
            intersection of science and tech.
          </p>
          <p className="text-lg leading-relaxed">
            I come from a small village called{" "}
            <span className="font-semibold text-purple-200">Koyyalagudem</span>
            ,In Andhra Pradesh and my father and mother are farmers,They
            MOTIVATE me. I’m driven by curiosity and the desire to create real
            impact.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
