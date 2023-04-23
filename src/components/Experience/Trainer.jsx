import React, { useRef } from "react";
import { useGLTF, useScroll } from "@react-three/drei";
import { motion } from "framer-motion-3d";
import { useFrame } from "@react-three/fiber";

export default function Trainer(props) {
  const { nodes, materials } = useGLTF("./models/trainer.glb");
  const data = useScroll();

  const trainerRef = useRef();

  useFrame(() => {});
  return (
    <motion.group
      ref={trainerRef}
      {...props}
      dispose={null}
      initial={{ x: 0, y: 100, scale: 100 }}
      animate={{ x: -2, y: 0, scale: 1 }}
      transition={{ duration: 2 }}
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
