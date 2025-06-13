import React from "react";

const Projects = () => {
  return (
    <section id="projects" className="min-h-screen px-6 py-24 bg-[#ffffff10]">
      <h2 className="text-3xl font-bold mb-10 text-center text-white">
        Projects
      </h2>

      <div className="grid grid-cols-1 bg-[#7A2077]/60 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {/* Project 1: Code Analyzer */}
        <div className="bg-[#7A2077]/60 p-6 rounded-lg shadow-lg">
          <img
            src="/codinganalyser.png"
            alt="Code Analyzer"
            className="w-full h-48 object-cover rounded-md mb-4"
          />
          <h3 className="text-2xl font-semibold mb-2 text-white">
            Coding Skills Analyzer
          </h3>
          <p className="text-white/90 mb-4">
            An educational web app that helps students analyze their coding
            solutions by detecting time and space complexity, their weak and
            strong topics. It uses machine learning to suggest improvements and
            visualizes topic-wise strengths.
          </p>
          <a
            href="https://github.com/MeghanaJammu/codingskillsanalyser"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-200 hover:underline"
          >
            View on GitHub →
          </a>
        </div>

        {/* Project 2: FarmWise */}
        <div className="bg-[#7A2077]/60 p-6 rounded-lg shadow-lg">
          <img
            src="/farmwise.png"
            alt="Project 2"
            className="w-full h-48 object-cover rounded-md mb-4"
          />
          <h3 className="text-2xl font-semibold mb-2 text-white">FarmWise</h3>
          <p className="text-white/90 mb-4">
            A smart SUSTAINABLE agriculture support platform designed to help
            farmers make data-driven decisions using crop and soil analysis.
          </p>
          <a
            href="https://github.com/MeghanaJammu/Sustainable_Farming"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-200 hover:underline"
          >
            View on GitHub →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
