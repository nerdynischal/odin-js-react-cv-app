import { useState } from "react";
import "./styles/App.css";
import GeneralInfo from "./components/GeneralInfo.jsx";
import Education from "./components/Education.jsx";
import Experience from "./components/Experience.jsx";

function App() {
  return (
    <>
      <header>
        <h1>CV Builder</h1>
      </header>

      <GeneralInfo />
      <Education />
      <Experience />
    </>
  );
}

export default App;
