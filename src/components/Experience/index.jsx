import { Canvas } from "@react-three/fiber";
import React, { useRef } from "react";
import { OrbitControls, ScrollControls, Scroll } from "@react-three/drei";
import Trainer from "./Trainer";
import { motion } from "framer-motion";

export default function Experience() {
  return (
    <Canvas>
      <ScrollControls pages={3} damping={0.25}>
        <Trainer />
        <Scroll></Scroll>
        <Scroll html style={{ width: "100%" }}>
          <div className="text-xl">
            <motion.div
              initial={{ scale: 0.4 }}
              animate={{ scale: 1 }}
              className="absolute top-[50vh] left-[50vw] md:top-[40vh]  md:left-[44vw] "
            >
              Welcome to my portfolio
            </motion.div>
            <div className="absolute top-[100vh]">lorem</div>
            <div className="absolute top-[200vh]">lorem</div>
          </div>
        </Scroll>
      </ScrollControls>
    </Canvas>
  );
}

// import React, { Suspense, useState, useEffect } from "react";
// import Model from "./Model";
// import Pokeball from "./Pokeball";
// import LoadingScreen from "./LoadingScreen";
// import Overlay from "./Overlay";

// export default function Experience() {
//   const [start, setStart] = useState(false);
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
//       <LoadingScreen start={start} setStart={setStart} />
//     </>
//   );
// }
