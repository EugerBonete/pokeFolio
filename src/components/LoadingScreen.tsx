import React, { useLayoutEffect, useRef, useState } from "react";
import { useProgress } from "@react-three/drei";
import { HashLoader } from "react-spinners";
import gsap from "gsap";

export default function LoadingScreen({
  start,
  setStart,
}: {
  start?: boolean;
  setStart: (value: boolean) => void;
}) {
  const { progress } = useProgress();

  const comp = useRef(); // create a ref for the root level element (for scoping)
  const containerRef = useRef<HTMLInputElement>(null);
  const loaderRef = useRef<HTMLInputElement>(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {}, comp);
    return () => ctx.revert();
  }, []);

  const startHandler = () => {
    const tl = gsap.timeline();
    setStart(true);
    let ctx = gsap.context(() => {
      if (loaderRef.current) {
        gsap.to(loaderRef.current, {
          scale: 100,
        });
        gsap.to(loaderRef.current, {
          delay: 1,
          scale: 1,
          opacity: 0,
        });
      }
      if (containerRef.current) {
        gsap.to(containerRef.current, {
          opacity: 0,
          delay: 1,
        });
      }
    }, comp);

    return () => ctx.revert();
  };

  return (
    <div
      ref={containerRef}
      className={`dark:bg-gray-900 bg-gray-100 absolute top-0 left-0
   right-0 bottom-0 flex items-center justify-between flex-col z-10
   `}
    >
      <div></div>
      {progress === 100 ? (
        <div className="flex flex-col items-center justify-center gap-5">
          <button
            className="btn btn-outline bg-red-500 hover:bg-red-600 shadow-lg text-dark dark:text-white hover:text-white"
            onClick={startHandler}
          >
            start
          </button>
        </div>
      ) : (
        <HashLoader color="#EF4444" />
      )}

      <div
        ref={loaderRef}
        style={{ width: `${progress}%` }}
        className={`bg-[#FF6347] block h-5 self-start`}
      ></div>
    </div>
  );
}
