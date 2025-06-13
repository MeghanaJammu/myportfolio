import React, { useState } from "react";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import About from "./components/About";

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

            <div className="absolute bottom-4 right-4 w-48 h-48 md:w-60 md:h-60 z-0 md:block hidden">
              <iframe
                src="https://my.spline.design/untitled-PDinlIMlg2reUJEhf2VAEXVS/"
                frameborder="0"
                width="100%"
                height="100%"
                style={{ background: "transparent" }}
                allowTransparency="true"
                title="3D Model"
              ></iframe>
            </div>

            {/* Mobile version: show below content */}
            <div className="block md:hidden mt-8 w-48 h-48 mx-auto">
              <iframe
                src="https://my.spline.design/untitled-PDinlIMlg2reUJEhf2VAEXVS/"
                frameborder="0"
                width="100%"
                height="100%"
                style={{ background: "transparent" }}
                allowTransparency="true"
                title="3D Model Mobile"
              ></iframe>
            </div>
          </div>
        </section>

        <About />
        <Projects />
        <Contact />
      </div>
    </div>
  );
};

export default App;
