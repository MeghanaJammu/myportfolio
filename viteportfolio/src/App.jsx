import React, { useState } from "react";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="
        min-h-screen bg-fixed bg-cover bg-center scroll-smooth text-white
        bg-[url('https://wallpapersok.com/images/hd/pretty-background-pink-sunset-leaves-xh95a5k44e89b812.jpg')]
      "
    >
      <div className="bg-opacity-60 min-h-screen w-full absolute inset-0 z-0" />

      <div className="relative z-10">
        {/* Navbar */}
        <nav className="fixed top-0 left-0 w-full bg-[#773982] bg-opacity-90 text-white z-50 shadow">
          <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
            <h1 className="text-lg font-bold">My Portfolio</h1>

            {/* Desktop Nav */}
            <ul className="hidden md:flex space-x-6">
              <li>
                <a href="#home" className="hover:text-purple-300">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-purple-300">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-purple-300">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-purple-300">
                  Contact
                </a>
              </li>
            </ul>

            {/* Hamburger Icon */}
            <div className="md:hidden">
              <button onClick={() => setIsOpen(!isOpen)}>
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d={
                      isOpen
                        ? "M6 18L18 6M6 6l12 12"
                        : "M4 6h16M4 12h16M4 18h16"
                    }
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <ul className="md:hidden bg-[#773982] bg-opacity-90 px-4 pb-4 space-y-2 text-sm">
              <li>
                <a
                  href="#home"
                  onClick={() => setIsOpen(false)}
                  className="block hover:text-purple-300"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  onClick={() => setIsOpen(false)}
                  className="block hover:text-purple-300"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  onClick={() => setIsOpen(false)}
                  className="block hover:text-purple-300"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="block hover:text-purple-300"
                >
                  Contact
                </a>
              </li>
            </ul>
          )}
        </nav>

        {/* Hero Section */}
        <section
          id="home"
          className="h-screen flex items-center justify-center text-center px-4"
        >
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-[#ffffff]">
              Meghana Jammu
            </h2>
            <h3 className="text-xl md:text-3xl font-semibold mt-2">
              Full Stack Developer
            </h3>
            <h3 className="text-xl md:text-3xl font-semibold">ML Developer</h3>
            <h3 className="text-xl md:text-3xl font-semibold">Chemist</h3>
            <button className="mt-6 px-6 py-3 bg-[#7A2077] hover:bg-purple-600 text-[#E5CDEB] rounded-lg font-medium">
              View My Work
            </button>
          </div>
        </section>

        {/* Other Sections */}
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
                <span className="font-semibold text-purple-200">
                  Meghana Jammu
                </span>
                , a passionate B.Tech Chemistry student at{" "}
                <span className="text-purple-300">IIT Guwahati</span> with a
                deep interest in technology and innovation.
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
                <span className="font-semibold text-purple-200">
                  Koyyalagudem
                </span>
                ,In Andhra Pradesh and my father and mother are farmers,They
                MOTIVATE me. I’m driven by curiosity and the desire to create
                real impact.
              </p>
            </div>
          </div>
        </section>

        <section id="projects" className="min-h-screen px-6 py-24">
          <h2 className="text-3xl font-bold mb-4">Projects</h2>
          <div className="h-64 bg-white/20 rounded-lg"></div>
        </section>

        <section id="contact" className="min-h-screen px-6 py-24">
          <h2 className="text-3xl font-bold mb-4">Contact</h2>
          <div className="h-64 bg-white/20 rounded-lg"></div>
        </section>
      </div>
    </div>
  );
};

export default App;
