import React, { useState } from "react";

export default function GeneralInfo({ onSubmit }) {
  const [editing, setEditing] = useState(true);
  const [form, setForm] = useState({ name: "", email: "", phone: "" });
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
    <section className="section general-section">
      <h2>General Information</h2>

      {editing ? (
        <form onSubmit={handleSubmit}>
          <label>
            Name
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your full name"
            />
          </label>

          <label>
            Email
            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="you@example.com"
            />
          </label>

          <label>
            Phone
            <input
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="000-000-0000"
            />
          </label>

          <button type="submit">Submit</button>
        </form>
      ) : (
        <div>
          <p>
            <strong>Name:</strong> {submitted?.name}
          </p>
          <p>
            <strong>Email:</strong> {submitted?.email}
          </p>
          <p>
            <strong>Phone:</strong> {submitted?.phone}
          </p>
          <button className="edit" onClick={handleEdit}>
            Edit
          </button>
        </div>
      )}
    </section>
  );
}
