import React, { useLayoutEffect, useRef } from "react";
import { Html, useGLTF, useScroll } from "@react-three/drei";
import gsap from "gsap";
import { useFrame } from "@react-three/fiber";

export default function Pokeball(props) {
  const { nodes, materials } = useGLTF("./models/pokeball.glb");

  const scroll = useScroll();
  const ballRef = useRef();
  const tl = useRef();
  useFrame(({ state, delta, mouse }) => {
    // tl.current.seek(scroll.offset * tl.current.duration());
    // const x = (mouse.x * Math.PI) / 8;
    // const y = (mouse.y * Math.PI) / 2;
    // ballRef.current.rotation.set(0, x, 0);
    if (scroll.offset > 0) {
      gsap.to(ballRef.current.position, {
        y: 20,
        duration: 2,
      });
    }
  });

  useLayoutEffect(() => {
    gsap.from(ballRef.current.position, {
      y: 4,
      ease: "bounce",
      duration: 2,
    });

    if (props.sizeProp === "sm") {
      gsap.to(ballRef.current.position, {
        x: 0.2,
      });
    }

    if (props.sizeProp === "md") {
      gsap.to(ballRef.current.position, {
        x: -1.6,
        ease: "bounce",
        delay: 2,
      });
    }

    if (props.sizeProp === "lg") {
      gsap.to(ballRef.current.position, {
        x: -1.9,
        ease: "bounce",
        delay: 2,
      });
    }

    // ballRef.current.rotation.x = 5;
    // ballRef.current.rotation.y = 0.1 / 4;
    // ballRef.current.rotation.z = 0.1;
  }, []);

  return (
    <group
      ref={ballRef}
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
