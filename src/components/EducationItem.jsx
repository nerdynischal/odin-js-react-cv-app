import React, { useState } from "react";
import EditEducation from "./EditEducation";

export default function EducationItem({ edu, index, onUpdate, onDelete }) {
  const [editing, setEditing] = useState(false);

  function handleSave(updatedEdu) {
    onUpdate(index, updatedEdu);
    setEditing(false);
  }

  return (
    <div className="entry">
      {editing ? (
        <EditEducation
          edu={edu}
          onSave={handleSave}
          onCancel={() => setEditing(false)}
        />
      ) : (
        <>
          <p>
            <strong>{edu.title}</strong>
          </p>
          <p>{edu.school}</p>
          <p>{edu.date}</p>

          <div className="entry-actions">
            <button onClick={() => setEditing(true)}>Edit</button>
            <button onClick={() => onDelete(index)}>Delete</button>
          </div>
        </>
      )}
    </div>
  );
}
