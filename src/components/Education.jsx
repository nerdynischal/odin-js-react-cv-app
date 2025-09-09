import React, { useState } from "react";

export default function Education({ onSubmit }) {
  const [editing, setEditing] = useState(true);
  const [form, setForm] = useState({
    school: "",
    title: "",
    date: "",
  });
  const [submitted, setSubmitted] = useState(null);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(form);
    setEditing(false);
    if (onSubmit) onSubmit(form); // send data to App for preview
  }

  function handleEdit() {
    setEditing(true);
  }

  return (
    <section className="section education-section">
      <h2>Educational Experience</h2>

      {editing ? (
        <form onSubmit={handleSubmit}>
          <label>
            School Name
            <input
              name="school"
              value={form.school}
              onChange={handleChange}
              placeholder="University of..."
            />
          </label>

          <label>
            Title of Study
            <input
              name="title"
              value={form.title}
              onChange={handleChange}
              placeholder="BSc Computer Science"
            />
          </label>

          <label>
            Date of Study
            <input
              name="date"
              value={form.date}
              onChange={handleChange}
              placeholder="2019 - 2023"
            />
          </label>

          <button type="submit">Submit</button>
        </form>
      ) : (
        <div>
          <p>
            <strong>School:</strong> {submitted?.school}
          </p>
          <p>
            <strong>Title of Study:</strong> {submitted?.title}
          </p>
          <p>
            <strong>Date of Study:</strong> {submitted?.date}
          </p>
          <button className="edit" onClick={handleEdit}>
            Edit
          </button>
        </div>
      )}
    </section>
  );
}
