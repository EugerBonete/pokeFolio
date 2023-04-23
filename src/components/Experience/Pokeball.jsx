import React, { useLayoutEffect, useRef } from "react";
import { Html, useGLTF, useScroll } from "@react-three/drei";
import gsap from "gsap";
import { useFrame } from "@react-three/fiber";
import { HEIGHT, NUM } from "./Trainer";

export default function Pokeball(props) {
  const { nodes, materials } = useGLTF("./models/pokeball.glb");

  const comp = useRef(); // create a ref for the root level element (for scoping)
  const meshRef = useRef();
  const tl = useRef();

  const scroll = useScroll();

  useFrame(({ mouse, viewport }) => {
    const x = (mouse.x * viewport.width) / 2;
    const y = (mouse.y * viewport.height) / 2;
    meshRef.current.rotation.y = (x * Math.PI) / 180;
  });

  useLayoutEffect(() => {
    if (props.start) {
      gsap.fromTo(
        meshRef.current.position,
        {
          y: 30,
          opacity: 0,
          duration: 2,
        },
        {
          y: 0,
          duration: 1,
          opacity: 1,
          ease: "bounce",
        }
      );
      gsap.to(meshRef.current.position, {
        x: -2,
        opacity: 0,
        duration: 2,
        // delay: 1.5,
        ease: "circ",
      });
      gsap.to(meshRef.current.rotation, {
        y: 0.5,
        z: 0.5,
        opacity: 0,
        duration: 2,
        // delay: 1.5,
      });
    }
  }, [props.start]);

  return (
    <group
      ref={meshRef}
      {...props}
      dispose={null}
      className="flex items-center justify-center ball"
    >
      <mesh
        geometry={nodes.Object_6.geometry}
        material={materials.material_0}
        rotation={[Math.PI / 2, 0, 0]}
      />
    </group>
  );
}

useGLTF.preload("./models/pokeball.glb");
