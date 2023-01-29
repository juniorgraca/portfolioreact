import "./App.css";
import React from "react";
import { HeaderMenu } from "./pages/header/HeaderMenu";
import { Timeline } from "./pages/timeline/Timeline";

function App() {
  return (
    <div className="App">
      <HeaderMenu />
      <Timeline />
    </div>
  );
}

export default App;
