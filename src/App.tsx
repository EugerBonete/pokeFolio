import { useState } from "react";
import Experience from "./components/Experience/index.jsx";
import ThemeToggle from "./components/ThemeToggle.js";

function App() {
  const [dark, setDark] = useState<boolean>(false);

  return (
    <div
      className={`h-screen flex flex-col dark:text-white text-black ${
        dark
          ? "bg-gradient-to-b from-[#404040] to-[#938a82]"
          : "bg-gradient-to-b from-[#e3e4e8] to-[#897f84]"
      }`}
    >
      <ThemeToggle dark={dark} setDark={setDark} />
      <Experience dark={dark} />
    </div>
  );
}

export default App;
