import { useState } from "react";
import "./styles/App.css";
import EducationItem from "./components/EducationItem.jsx";
import ExperienceItem from "./components/ExperienceItem.jsx";
import GeneralInfo from "./components/GeneralInfo.jsx";
import Education from "./components/Education.jsx";
import PracticalExperience from "./components/PracticalExperience.jsx";

function App() {
  // store submitted data centrally so preview can use it
  const [generalData, setGeneralData] = useState(null);
  const [educationData, setEducationData] = useState([]);
  const [practicalData, setPracticalData] = useState([]);

  function updateExperience(index, updatedJob) {
    setPracticalData((prev) =>
      prev.map((job, i) => (i === index ? updatedJob : job))
    );
  }

  function deleteExperience(index) {
    setPracticalData((prev) => prev.filter((_, i) => i !== index));
  }

  function updateEducation(index, updatedEdu) {
    setEducationData((prev) =>
      prev.map((edu, i) => (i === index ? updatedEdu : edu))
    );
  }

  function deleteEducation(index) {
    setEducationData((prev) => prev.filter((_, i) => i !== index));
  }

  return (
    <div className="app-container">
      {/* Sidebar with forms */}
      <aside className="sidebar">
        <h1>CV Builder</h1>
        <GeneralInfo onSubmit={setGeneralData} />
        <Education
          onSubmit={(edu) => setEducationData((prev) => [...prev, edu])}
        />
        <PracticalExperience
          onSubmit={(job) => setPracticalData((prev) => [...prev, job])}
        />
      </aside>

      {/* Main CV Preview */}
      <main className="preview">
        <h1>{generalData?.name || "Your Name"}</h1>
        <p className="contact-info">
          {generalData?.email || "your.email@example.com"} |{" "}
          {generalData?.phone || "000-000-0000"}
        </p>

        <section>
          <h2>Education</h2>
          {educationData.length > 0 ? (
            educationData.map((edu, index) => (
              <EducationItem
                key={index}
                edu={edu}
                index={index}
                onUpdate={updateEducation}
                onDelete={deleteEducation}
              />
            ))
          ) : (
            <p>No education added yet.</p>
          )}
        </section>

        <section>
          <h2>Experience</h2>
          {practicalData.length > 0 ? (
            practicalData.map((job, index) => (
              <ExperienceItem
                key={index}
                job={job}
                index={index}
                onUpdate={updateExperience}
                onDelete={deleteExperience}
              />
            ))
          ) : (
            <p>No experience added yet.</p>
          )}
        </section>
      </main>
    </div>
  );
}

export default App;
