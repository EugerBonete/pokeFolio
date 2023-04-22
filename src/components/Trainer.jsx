import React, { useRef } from "react";
import { useGLTF, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import gsap from "gsap";

export const HEIGHT = 2.3;
export const NUM = 3;

export default function Trainer(props) {
  const { nodes, materials } = useGLTF("./models/trainer.glb");
  const meshRef = useRef();
  const tl = useRef();

  const scroll = useScroll();

  useFrame(({ mouse, viewport }) => {
    tl.current.seek(scroll.offset * tl.current.duration());
    const x = mouse.x * viewport.width;
    const y = mouse.y * viewport.height;
    meshRef.current.rotation.y = (x * Math.PI) / 180;
    gsap.to(meshRef.current.rotation, {
      duration: 10,
      y: Math.PI * 2,
      repeat: -1,
      ease: "none",
    });
  });

  React.useEffect(() => {
    tl.current = gsap.timeline();
    if (meshRef.current) {
      tl.current.to(meshRef.current.position, {
        duration: 2,
        y: -HEIGHT * (NUM - 1),
      });
      meshRef.current.rotation.x = -0.5;
      meshRef.current.position.y = 1.5;
    }
    gsap.to(meshRef.current.rotation, {
      duration: 10,
      y: Math.PI * 2,
      repeat: -1,
      ease: "none",
    });
  }, []);

  return (
    <group ref={meshRef} {...props} dispose={null}>
      <mesh
        geometry={nodes.Object_2.geometry}
        material={materials.palette}
        rotation={[-Math.PI / 2, 0, 0]}
      />
    </group>
  );
}

useGLTF.preload("./models/trainer.glb");
