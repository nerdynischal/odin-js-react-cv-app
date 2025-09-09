import React, { useState } from "react";

export default function Education({ onSubmit }) {
  const [form, setForm] = useState({
    school: "",
    title: "",
    date: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (onSubmit) onSubmit(form);
    setForm({ school: "", title: "", date: "" }); // reset
  }

  return (
    <section className="section education-section">
      <h2>Add Education</h2>
      <form onSubmit={handleSubmit}>
        <label>
          School Name
          <input
            name="school"
            value={form.school}
            onChange={handleChange}
            placeholder="University of ..."
          />
        </label>

        <label>
          Title of Study
          <input
            name="title"
            value={form.title}
            onChange={handleChange}
            placeholder="Bachelor of Science"
          />
        </label>

        <label>
          Date of Study
          <input
            name="date"
            value={form.date}
            onChange={handleChange}
            placeholder="2019 – 2023"
          />
        </label>

        <button type="submit">Add Education</button>
      </form>
    </section>
  );
}
