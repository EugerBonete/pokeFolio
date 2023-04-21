import React, { useRef } from "react";
import { useGLTF, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export default function Trainer(props) {
  const { nodes, materials } = useGLTF("./models/trainer.glb");
  const meshRef = useRef();

  const scroll = useScroll();
  console.log(scroll);

  React.useEffect(() => {
    if (meshRef.current) {
      meshRef.current.position.x = -2;
      meshRef.current.scale.set(0.8, 0.8, 0.8);

      // meshRef.current.position.y = 0.5;
      // meshRef.current.rotation.x = -0.5;
    }
  }, []);

  useFrame(({ mouse, viewport }) => {
    const x = (mouse.x * viewport.width) / 4;
    const y = (mouse.y * viewport.height) / 4;
    meshRef.current.rotation.y = (x * Math.PI) / 180;
    meshRef.current.rotation.x = (-y * Math.PI) / 180;
  });

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
