// src/components/Education.jsx
import React from "react";

const Education = ({ education }) => {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-semibold border-b-2 border-gray-300 pb-2 mb-4">
        Education
      </h2>
      {education.map((edu, index) => (
        <div key={index} className="mb-4">
          <h3 className="text-lg font-medium text-gray-800">{edu.degree}</h3>
          <p className="text-gray-700">{edu.school}</p>
          <p className="text-sm text-gray-500">{edu.year}</p>
        </div>
      ))}
    </section>
  );
};

export default Education;
