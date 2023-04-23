import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { Scroll } from "@react-three/drei";
import { BiChevronDown } from "react-icons/bi";

export default function Overlay({ start }: { start: boolean }) {
  const comp = useRef(); // create a ref for the root level element (for scoping)
  const text = useRef(null);

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

  const Section = ({ children }: { children: any }): any => {
    <section className="h-screen flex flex-col justify-center p-10 bg-red-500">
      {children}
    </section>;
  };

  return (
    <Scroll html>
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
