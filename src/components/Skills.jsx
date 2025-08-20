// src/components/Skills.jsx
import React from "react";

const Skills = ({ skills }) => {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-semibold border-b-2 border-gray-300 pb-2 mb-4">
        Skills
      </h2>
      <ul className="flex flex-wrap gap-3">
        {skills.map((skill, index) => (
          <li
            key={index}
            className="px-3 py-1 bg-gray-100 text-gray-800 rounded-lg shadow-sm"
          >
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
