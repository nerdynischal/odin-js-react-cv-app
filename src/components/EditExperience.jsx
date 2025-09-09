import React, { useState } from "react";

export default function EditExperience({ job, onSave, onCancel }) {
  const [form, setForm] = useState(job);

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
        Company
        <input name="company" value={form.company} onChange={handleChange} />
      </label>
      <label>
        Position
        <input name="position" value={form.position} onChange={handleChange} />
      </label>
      <label>
        Responsibilities
        <textarea
          name="responsibilities"
          value={form.responsibilities}
          onChange={handleChange}
        />
      </label>
      <label>
        From
        <input name="dateFrom" value={form.dateFrom} onChange={handleChange} />
      </label>
      <label>
        Until
        <input
          name="dateUntil"
          value={form.dateUntil}
          onChange={handleChange}
        />
      </label>

      <button type="submit">Save</button>
      <button type="button" onClick={onCancel} className="edit">
        Cancel
      </button>
    </form>
  );
}
