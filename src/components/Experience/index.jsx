import { Canvas } from "@react-three/fiber";
import React, { useEffect, useRef, useState } from "react";
import {
  OrbitControls,
  ScrollControls,
  Scroll,
  Sparkles,
  Float,
  Ring,
  Environment,
  ContactShadows,
  useScroll,
  Html,
} from "@react-three/drei";
import Trainer from "./Trainer";
import Button from "../Button";
import { motion } from "framer-motion";
import Room from "./Room";
import LoadingScreen from "./LoadingScreen";

export default function Experience({ dark }) {
  const [sizeProp, setSizeProp] = useState("sm");
  const [start, setStart] = useState(false);

  const overlayRef = useRef();

  useEffect(() => {
    const handleResize = () => {
      const { innerWidth } = window;
      if (innerWidth >= 992) {
        setSizeProp("lg");
      } else if (innerWidth >= 768) {
        setSizeProp("md");
      } else {
        setSizeProp("sm");
      }
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <LoadingScreen start={start} setStart={setStart} />
      <Canvas shadows camera={{ position: [0.1, 2, 10] }}>
        <ScrollControls pages={3} damping={0.25}>
          <Sparkles
            size={2}
            color={dark ? "#fff" : "#333"}
            scale={[10, 10, 10]}
          ></Sparkles>
          <ambientLight intensity={0.7} />
          <spotLight
            intensity={0.5}
            angle={0.1}
            penumbra={1}
            position={[10, 15, -5]}
            castShadow
          />
          <Trainer scale={[0.8, 0.8, 0.8]} position={[-1, 1, 1]} />
          <Room />
          <Scroll></Scroll>
          <Scroll html style={{ width: "100%" }} ref={overlayRef}>
            <h1
              className="title"
              style={{
                color: "#cdcbca",
                position: "absolute",
                top: `65vh`,
                left: "50%",
                fontSize: "13em",
                transform: `translate(-50%,-50%)`,
              }}
            >
              PHANTOM
            </h1>

            <div
              className="row px-[20rem]"
              style={{ position: "absolute", top: `132vh` }}
            >
              <h2>Be a Man of the Future.</h2>
              <p style={{ maxWidth: "400px" }}>
                Featuring a sleek, metallic design inspired by advanced
                technology, this aftershave bottle is as stylish as it is
                functional. But it's not just a pretty face - inside, you'll
                find a nourishing and protective aftershave formula that will
                leave your skin feeling refreshed and hydrated.
              </p>
              <Button title="Read More" />
            </div>

            <div className="row" style={{ position: "absolute", top: `230vh` }}>
              <div
                className="col"
                style={{ position: "absolute", right: `40px`, width: "540px" }}
              >
                <h2 style={{ maxWidth: "440px" }}>Tech-Savvy Side</h2>
                <p style={{ maxWidth: "440px" }}>
                  Featuring a sleek, metallic design inspired by advanced
                  technology, this aftershave bottle is as stylish as it is
                  functional. But it's not just a pretty face - inside, you'll
                  find a nourishing and protective aftershave formula that will
                  leave your skin feeling refreshed and hydrated.
                </p>
                <Button title="Read More" />
              </div>
            </div>

            <h2
              style={{
                position: "absolute",
                top: "350vh",
                left: "50%",
                transform: `translate(-50%,-50%)`,
              }}
            >
              Cutting-Edge of Grooming
            </h2>

            <button
              style={{
                position: "absolute",
                top: `590vh`,
                left: "50%",
                transform: `translate(-50%,-50%)`,
              }}
            >
              Buy now
            </button>
          </Scroll>
        </ScrollControls>
      </Canvas>
    </>
  );
}

// import React, { Suspense, useState, useEffect } from "react";
// import Model from "./Model";
// import Overlay from "./Overlay";

// export default function Experience() {
//   const [scrollPosition, setScrollPosition] = useState(0);

//   return (
//     <>
//       <Canvas
//         className={`${start && "z-30"} fixed top-0`}
//         shadows
//         camera={{ position: [0, 10, 25], fov: 25 }}
//       >
//         <ambientLight intensity={0.7} />
//         <spotLight
//           intensity={0.5}
//           angle={0.1}
//           penumbra={1}
//           position={[10, 15, -5]}
//           castShadow
//         />
//         {/* <OrbitControls enableZoom={false} /> */}
//         <ScrollControls pages={3} damping={0.25}>
//           <Suspense fallback={null}>
//             <Overlay start={start} setStart={setStart} />
//             {scrollPosition > 0 ? (
//               <Model />
//             ) : (
//               <Pokeball
//                 rotation={[4.5, 0, -6.3]}
//                 start={start}
//                 setStart={setStart}
//               />
//             )}

//             {/* <Trainer start={start} setStart={setStart} /> */}
//           </Suspense>
//         </ScrollControls>
//       </Canvas>
//     </>
//   );
// }
