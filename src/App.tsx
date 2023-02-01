import "./App.css";
import React from "react";
import { useEffect, useState } from "react";
import { HeaderMenu } from "./pages/header/HeaderMenu";
import { Timeline } from "./pages/timeline/Timeline";
import { Skills } from "./pages/skills/Skills";
import { Projetos } from "./pages/projetos/Projects";

function App() {
  const [navBar, setNavBar] = useState<boolean>(false);

  useEffect(() => {
    const scrollListerner = () => {
      if (window.scrollY > 150) {
        setNavBar(true);
      } else {
        setNavBar(false);
      }
    };
    window.addEventListener("scroll", scrollListerner);
    return () => {
      window.removeEventListener("scroll", scrollListerner);
    };
  }, []);
  return (
    <div className="App">
      <HeaderMenu navBar={navBar} />
      <Timeline />
      <Skills />
      <Projetos />
    </div>
  );
}

export default App;
