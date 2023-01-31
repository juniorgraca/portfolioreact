import "./App.css";
import React from "react";
import { HeaderMenu } from "./pages/header/HeaderMenu";
import { Timeline } from "./pages/timeline/Timeline";
import { Skills } from "./pages/skills/Skills";
import { Projetos } from "./pages/projetos/Projects";

function App() {
  return (
    <div className="App">
      <HeaderMenu />
      <Timeline />
      <Skills />
      <Projetos />
    </div>
  );
}

export default App;
