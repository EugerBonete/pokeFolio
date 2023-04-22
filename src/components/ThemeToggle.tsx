import { useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";

export default function ThemeToggle() {
  const [dark, setDark] = useState<boolean>(false);
  const handleThemeChange = () => {
    setDark(!dark);
    if (dark) {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  };

  return (
    <div className="self-end mr-[10vw] mt-[10vh] z-50 absolute">
      <div className="flex items-center justify-center gap-5 text-3xl">
        <FiSun />
        <input
          type="checkbox"
          className={`toggle text-5xl ${dark ? "bg-gray-100" : "bg-gray-100"}`}
          checked={dark}
          onClick={handleThemeChange}
        />
        <FiMoon />
      </div>
    </div>
  );
}
