import { useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";

interface ThemeToggleProps {
  dark: boolean;
  setDark: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function ThemeToggle({ dark, setDark }: ThemeToggleProps) {
  const handleThemeChange = () => {
    setDark(!dark);
    if (dark) {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  };

  return (
    <div className="self-end mr-[5vw] md:mr-[7vw] mt-[3vh] md:mt-[5vh] z-50 absolute">
      <div className="flex items-center justify-center gap-5 text-lg md:text-xl">
        <FiSun />
        <input
          type="checkbox"
          className={`toggle text-5xl ${dark ? "bg-gray-100" : "bg-gray-100"}`}
          checked={dark}
          onChange={handleThemeChange}
        />
        <FiMoon />
      </div>
    </div>
  );
}
