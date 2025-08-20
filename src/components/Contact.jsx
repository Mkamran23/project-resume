// src/components/Contact.jsx
import React from "react";

const Contact = ({ contact }) => {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-semibold border-b-2 border-gray-300 pb-2 mb-4">
        Contact
      </h2>
      <p className="text-gray-700">
        Email:{" "}
        <a
          href={`mailto:${contact.email}`}
          className="text-blue-600 hover:underline"
        >
          {contact.email}
        </a>
      </p>
      <p className="text-gray-700">Phone: {contact.phone}</p>
      <p className="text-gray-700">
        LinkedIn:{" "}
        <a
          href={contact.linkedin}
          target="_blank"
          rel="noreferrer"
          className="text-blue-600 hover:underline"
        >
          {contact.linkedin}
        </a>
      </p>
      <p className="text-gray-700">
        GitHub:{" "}
        <a
          href={contact.github}
          target="_blank"
          rel="noreferrer"
          className="text-blue-600 hover:underline"
        >
          {contact.github}
        </a>
      </p>
    </section>
  );
};

export default Contact;
