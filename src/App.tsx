import { useState } from "react";
import Experience from "./components/Experience.jsx";
import Overlay from "./Overlay";
import ThemeToggle from "./components/ThemeToggle.js";

function App() {
  return (
    <div className="h-screen flex flex-col bg-gray-100 dark:bg-gray-900">
      <ThemeToggle />
      <Experience />
      <Overlay />
    </div>
  );
}

export default App;
