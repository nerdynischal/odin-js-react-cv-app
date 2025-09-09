import { useState } from "react";
import "./styles/App.css";
import GeneralInfo from "./components/GeneralInfo.jsx";
import Education from "./components/Education.jsx";
import PracticalExperience from "./components/PracticalExperience.jsx";

function App() {
  // store submitted data centrally so preview can use it
  const [generalData, setGeneralData] = useState(null);
  const [educationData, setEducationData] = useState(null);
  const [practicalData, setPracticalData] = useState(null);

  return (
    <div className="app-container">
      {/* Sidebar with forms */}
      <aside className="sidebar">
        <h1>CV Builder</h1>
        <GeneralInfo onSubmit={setGeneralData} />
        <Education onSubmit={setEducationData} />
        <PracticalExperience onSubmit={setPracticalData} />
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
          {educationData ? (
            <>
              <p>
                <strong>{educationData.title}</strong>
              </p>
              <p>{educationData.school}</p>
              <p>{educationData.date}</p>
            </>
          ) : (
            <p>No education added yet.</p>
          )}
        </section>

        <section>
          <h2>Experience</h2>
          {practicalData ? (
            <>
              <p>
                <strong>{practicalData.position}</strong> —{" "}
                {practicalData.company}
              </p>
              <p>
                {practicalData.dateFrom} – {practicalData.dateUntil}
              </p>
              <p>{practicalData.responsibilities}</p>
            </>
          ) : (
            <p>No experience added yet.</p>
          )}
        </section>
      </main>
    </div>
  );
}

export default App;
