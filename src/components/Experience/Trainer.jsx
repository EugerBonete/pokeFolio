import React, { useLayoutEffect, useRef } from "react";
import { useGLTF, useScroll } from "@react-three/drei";
import { motion } from "framer-motion-3d";
import { useFrame } from "@react-three/fiber";
import gsap from "gsap";

export default function Trainer(props) {
  const { nodes, materials } = useGLTF("./models/trainer.glb");

  const scroll = useScroll();
  const trainerRef = useRef();
  const tl = useRef();

  useFrame(({ state, delta, mouse }) => {
    tl.current.seek(scroll.offset * tl.current.duration());

    const x = (mouse.x * Math.PI) / 8;
    trainerRef.current.rotation.set(0, x, 0);
  });

  useLayoutEffect(() => {
    trainerRef.current.position.y = 1.1;
    trainerRef.current.rotation.x = 1.1;
    tl.current = gsap.timeline({
      defaults: { duration: 2, ease: "power1.inOut" },
    });

    tl.current
      .to(trainerRef.current.rotation, { y: -1 }, 0.8)
      .to(trainerRef.current.position, { x: 1 }, 0.8);

    // .to(trainerRef.current.rotation, { y: 1 }, 8)
    // .to(trainerRef.current.position, { x: -1 }, 8)

    // .to(trainerRef.current.rotation, { y: 0 }, 11)
    // .to(trainerRef.current.rotation, { x: 1 }, 11)
    // .to(trainerRef.current.position, { x: 0 }, 11)

    // .to(trainerRef.current.rotation, { y: 0 }, 13)
    // .to(trainerRef.current.rotation, { x: -1 }, 13)
    // .to(trainerRef.current.position, { x: 0 }, 13)

    // .to(trainerRef.current.rotation, { y: 0 }, 16)
    // .to(trainerRef.current.rotation, { x: 0 }, 16)
    // .to(trainerRef.current.position, { x: 0 }, 16)

    // .to(trainerRef.current.rotation, { y: 0 }, 20)
    // .to(trainerRef.current.rotation, { x: 0 }, 20)
    // .to(trainerRef.current.position, { x: 0 }, 20);
  }, []);

  return (
    <motion.group
      ref={trainerRef}
      {...props}
      dispose={null}
      initial={{ y: 10, rotateY: 100 }}
      animate={{ y: 0, rotateY: 0 }}
      transition={{ delay: 0.2, type: "spring" }}
    >
      <mesh
        geometry={nodes.Object_2.geometry}
        material={materials.palette}
        rotation={[-Math.PI / 2, 0, 0]}
      />
    </motion.group>
  );
}

useGLTF.preload("./models/trainer.glb");
