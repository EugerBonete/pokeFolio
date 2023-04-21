import React, { useLayoutEffect, useRef } from "react";
import { Html, useGLTF } from "@react-three/drei";
import gsap from "gsap";
import { Tween } from "gsap/gsap-core";
import { TweenMax } from "gsap/gsap-core";
import { useFrame } from "@react-three/fiber";

export default function Pokeball(props) {
  const { nodes, materials } = useGLTF("./models/pokeball.glb");

  const comp = useRef();
  const ball = useRef();

  if (ball.current && props.start) {
    gsap.fromTo(
      ball.current.position,
      {
        y: 10,
        duration: 2,
        ease: "bounce",
        delay: 1,
      },
      {
        y: 0,
        duration: 2,
        ease: "bounce",
        delay: 1,
      }
    );
    gsap.from(ball.current, {
      x: 300,
      stagger: 0.25,
      duration: 3,
      scrollTrigger: {
        trigger: ball.current,
        pin: true,
        end: `+=${window?.innerHeight * 1.3}`,
      },
    });
  }

  useFrame(() => {
    ball.current.rotation.z += 0.03;
    ball.current.rotation.y = 0.5;
  });

  return (
    <group
      ref={ball}
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
