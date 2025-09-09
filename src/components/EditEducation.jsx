import React, { useState } from "react";

export default function EditEducation({ edu, onSave, onCancel }) {
  const [form, setForm] = useState(edu);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    onSave(form);
  }

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "1rem" }}>
      <label>
        School
        <input name="school" value={form.school} onChange={handleChange} />
      </label>
      <label>
        Title
        <input name="title" value={form.title} onChange={handleChange} />
      </label>
      <label>
        Date
        <input name="date" value={form.date} onChange={handleChange} />
      </label>

      <button type="submit">Save</button>
      <button type="button" onClick={onCancel} className="edit">
        Cancel
      </button>
    </form>
  );
}
