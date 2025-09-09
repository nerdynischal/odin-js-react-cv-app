import React, { useState } from "react";
import EditExperience from "./EditExperience.jsx";

export default function ExperienceItem({ job, index, onUpdate, onDelete }) {
  const [editing, setEditing] = useState(false);

  function handleSave(updatedJob) {
    onUpdate(index, updatedJob);
    setEditing(false);
  }

  return (
    <div
      style={{
        marginBottom: "1rem",
        paddingBottom: "1rem",
        borderBottom: "1px solid #ddd",
      }}
    >
      {editing ? (
        <EditExperience
          job={job}
          onSave={handleSave}
          onCancel={() => setEditing(false)}
        />
      ) : (
        <>
          <p>
            <strong>{job.position}</strong> — {job.company}
          </p>
          <p>
            {job.dateFrom} – {job.dateUntil}
          </p>
          <p>{job.responsibilities}</p>
          <button className="edit" onClick={() => setEditing(true)}>
            Edit
          </button>
          <button
            style={{ background: "#ff4d4f", color: "white" }}
            onClick={() => onDelete(index)}
          >
            Delete
          </button>
        </>
      )}
    </div>
  );
}
