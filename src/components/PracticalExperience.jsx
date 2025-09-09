import React, { useState } from "react";

export default function PracticalExperience({ onSubmit }) {
  const [editing, setEditing] = useState(true);
  const [form, setForm] = useState({
    company: "",
    position: "",
    responsibilities: "",
    dateFrom: "",
    dateUntil: "",
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
    <section className="section practical-section">
      <h2>Practical Experience</h2>

      {editing ? (
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

          <button type="submit">Submit</button>
        </form>
      ) : (
        <div>
          <p>
            <strong>Company:</strong> {submitted?.company}
          </p>
          <p>
            <strong>Position:</strong> {submitted?.position}
          </p>
          <p>
            <strong>Responsibilities:</strong> {submitted?.responsibilities}
          </p>
          <p>
            <strong>From:</strong> {submitted?.dateFrom}
          </p>
          <p>
            <strong>Until:</strong> {submitted?.dateUntil}
          </p>
          <button className="edit" onClick={handleEdit}>
            Edit
          </button>
        </div>
      )}
    </section>
  );
}
