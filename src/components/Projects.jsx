// src/components/Projects.jsx
import React from "react";

const Projects = ({ projects }) => {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-semibold border-b-2 border-gray-300 pb-2 mb-4">
        Projects
      </h2>
      {projects.map((project, index) => (
        <div key={index} className="mb-6">
          <h3 className="text-lg font-medium text-gray-800">{project.name}</h3>
          <p className="text-gray-700">{project.description}</p>
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="text-blue-600 hover:underline"
          >
            View Project
          </a>
        </div>
      ))}
    </section>
  );
};

export default Projects;
