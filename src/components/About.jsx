// src/components/About.jsx
import React from "react";

const About = ({ about }) => {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-semibold border-b-2 border-gray-300 pb-2 mb-4">
        About Me
      </h2>
      <p className="text-gray-700 leading-relaxed">{about}</p>
    </section>
  );
};

export default About;
