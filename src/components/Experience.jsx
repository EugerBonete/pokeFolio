import { Loader, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense, useState } from "react";
import Model from "./Model";
import Pokeball from "./Pokeball";
import Trainer from "./Trainer";
import LoadingScreen from "./LoadingScreen";

export default function Experience() {
  const [start, setStart] = useState(false);
  console.log(start);
  return (
    <>
      <Canvas className="" shadows camera={{ position: [0, 10, 25], fov: 25 }}>
        <ambientLight intensity={0.7} />
        <spotLight
          intensity={0.5}
          angle={0.1}
          penumbra={1}
          position={[10, 15, -5]}
          castShadow
        />
        {/* <OrbitControls enableZoom={false} /> */}
        <Suspense fallback={null}>
          <Pokeball
            rotation={[4.5, 0, -6.3]}
            start={start}
            setStart={setStart}
          />
          {/* <Model />
          <Trainer /> */}
        </Suspense>
      </Canvas>
      <LoadingScreen start={start} setStart={setStart} />
    </>
  );
}
