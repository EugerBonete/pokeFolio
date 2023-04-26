import React, { useLayoutEffect, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import gsap from "gsap";

export default function Ball(props) {
  const { nodes, materials } = useGLTF("./models/pokeball2.glb");
  const ref = useRef();
  useFrame(() => {});
  useLayoutEffect(() => {
    gsap.from(ref.current.position, {
      y: 10,
      rotation: 180,
      duration: 2,
    });
  }, []);
  return (
    <group {...props} dispose={null} ref={ref}>
      <mesh
        geometry={nodes.Object_6.geometry}
        material={materials.material_0}
      />
    </group>
  );
}

useGLTF.preload("./models/pokeball2.glb");
