import React, { useState } from "react";

function App() {
  const [experience, setExperience] = useState([]);

  const [form, setForm] = useState({
    role: "",
    company: "",
    duration: "",
    detail: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const addExperience = () => {
    setExperience([...experience, { ...form }]);
    setForm({ role: "", company: "", duration: "", detail: "" });
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
     <h2 className="text-3xl font-bold mb-4">Experience</h2>

{/* Display Section */}
      <div>
  
        {experience.map((job, index) => (
          <div key={index} className="mb-4 p-3 border-b">
            <h3 className="text-xl font-medium">
              {job.role} @ {job.company}
            </h3>
            <p className="text-sm text-gray-500">{job.duration}</p>
            <p className="mt-1">{job.detail}</p>
          </div>
        ))}
      </div>
  

      {/* Form Section */}
      <div className="mb-6 p-4 border rounded-lg">
        <h3 className="text-xl font-semibold mb-2">Add Experience</h3>
      </div>

      <input
          type="text"
          name="role"
          value={form.role}
          onChange={handleChange}
          placeholder="Job Title"
          className="border p-2 w-full mb-2"
        />
        <input
          type="text"
          name="company"
          value={form.company}
          onChange={handleChange}
          placeholder="Company"
          className="border p-2 w-full mb-2"
        />
        <input
          type="text"
          name="duration"
          value={form.duration}
          onChange={handleChange}
          placeholder="Duration"
          className="border p-2 w-full mb-2"
        />
        <input
          type="text"
          name="detail"
          value={form.detail}
          onChange={handleChange}
          placeholder="Description"
          className="border p-2 w-full mb-2"
        />
        <button
          onClick={addExperience}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Add
        </button>
     </div>
    );
}

export default App;
