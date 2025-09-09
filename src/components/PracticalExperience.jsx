import React, { useState } from "react";

export default function PracticalExperience({ onSubmit }) {
  const [form, setForm] = useState({
    company: "",
    position: "",
    responsibilities: "",
    dateFrom: "",
    dateUntil: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (onSubmit) onSubmit(form); // send job up to App
    setForm({
      // reset form
      company: "",
      position: "",
      responsibilities: "",
      dateFrom: "",
      dateUntil: "",
    });
  }

  return (
    <section className="section practical-section">
      <h2>Practical Experience</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Company Name
          <input
            name="company"
            value={form.company}
            onChange={handleChange}
            placeholder="Company Inc."
          />
        </label>

        <label>
          Position Title
          <input
            name="position"
            value={form.position}
            onChange={handleChange}
            placeholder="Software Engineer"
          />
        </label>

        <label>
          Main Responsibilities
          <textarea
            name="responsibilities"
            value={form.responsibilities}
            onChange={handleChange}
            placeholder="Describe your main responsibilities..."
          />
        </label>

        <label>
          Date From
          <input
            name="dateFrom"
            value={form.dateFrom}
            onChange={handleChange}
            placeholder="Jan 2021"
          />
        </label>

        <label>
          Date Until
          <input
            name="dateUntil"
            value={form.dateUntil}
            onChange={handleChange}
            placeholder="Dec 2023"
          />
        </label>

        <button type="submit">Add Experience</button>
      </form>
    </section>
  );
}
