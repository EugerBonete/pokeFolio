import { OrbitControls, ScrollControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense, useState, useEffect } from "react";
import Model from "./Model";
import Pokeball from "./Pokeball";
import Trainer from "./Trainer";
import LoadingScreen from "./LoadingScreen";
import Overlay from "./Overlay";

export default function Experience() {
  const [start, setStart] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  return (
    <>
      <Canvas
        className={`${start && "z-30"} fixed top-0`}
        shadows
        camera={{ position: [0, 10, 25], fov: 25 }}
      >
        <ambientLight intensity={0.7} />
        <spotLight
          intensity={0.5}
          angle={0.1}
          penumbra={1}
          position={[10, 15, -5]}
          castShadow
        />
        {/* <OrbitControls enableZoom={false} /> */}
        <ScrollControls pages={3} damping={0.25}>
          <Suspense fallback={null}>
            <Overlay start={start} setStart={setStart} />
            {scrollPosition > 0 ? (
              <Model />
            ) : (
              <Pokeball
                rotation={[4.5, 0, -6.3]}
                start={start}
                setStart={setStart}
              />
            )}

            {/* <Trainer start={start} setStart={setStart} /> */}
          </Suspense>
        </ScrollControls>
      </Canvas>
      <LoadingScreen start={start} setStart={setStart} />
    </>
  );
}
