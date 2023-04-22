import { useState } from "react";
import Experience from "./components/Experience.jsx";
import Overlay from "./components/Overlay.js";
import ThemeToggle from "./components/ThemeToggle.js";
import { BiChevronDown } from "react-icons/bi";
import { useRef } from "react";
import gsap from "gsap";

function App() {
  const arrowRef = useRef(null);
  const timeline = gsap.timeline({ repeat: -1 });
  timeline
    .to(arrowRef.current, { y: -10, ease: "power1.out", duration: 0.9 })
    .to(arrowRef.current, { y: 0, ease: "power1.out", duration: 0.9 })
    .to(arrowRef.current, { y: -10, ease: "power1.out", duration: 0.9 })
    .to(arrowRef.current, { y: 0, ease: "power1.out", duration: 0.9 });
  return (
    <div className="h-screen flex flex-col bg-gray-100 dark:bg-gray-900 dark:text-[#9ca3b1] text-black">
      <ThemeToggle />
      <Experience />
    </div>
  );
}

export default App;
