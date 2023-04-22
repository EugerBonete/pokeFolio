import React, { useLayoutEffect, useRef, useEffect } from "react";
import gsap from "gsap";
import { Scroll } from "@react-three/drei";
import { BiChevronDown } from "react-icons/bi";

interface OverlayProps {
  start: boolean;
}

export default function Overlay({ start }: OverlayProps) {
  const comp = useRef<HTMLDivElement>(null); // specify type of ref
  const text = useRef<HTMLHeadingElement>(null); // specify type of ref
  const containerRef = useRef<HTMLDivElement>(null); // specify type of ref

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      if (text.current) {
        gsap.from(text.current, {
          opacity: 0,
          ease: "power2.out",
          delay: 2,
        });
        gsap.to(text.current, {
          x: 50,
          y: -35,
          delay: 2,
        });
      }
    }, comp);
    return () => ctx.revert();
  }, [start]);

  const handleScroll = () => {
    console.log("Container scrolled!");
  };

  if (containerRef.current) {
    containerRef.current.addEventListener("scroll", handleScroll);
    return () => {
      containerRef.current?.removeEventListener("scroll", handleScroll);
    };
  }

  return (
    <Scroll ref={containerRef} html>
      <div className="flex justify-center text-center flex-col items-end scroll-smooth h-screen w-screen">
        <h1 ref={text} className="text-2xl w-full">
          Welcome to my portfolio!
        </h1>
      </div>
      <div className=" flex flex-col items-center fixed bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <p>Scroll Down</p>
        <div className="text-4xl ">
          <BiChevronDown />
        </div>
      </div>
    </Scroll>
  );
}
