import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Html, useGLTF, useScroll } from "@react-three/drei";
import gsap from "gsap";
import { useFrame } from "@react-three/fiber";

export default function Pokeball(props) {
  const { nodes, materials } = useGLTF("./models/pokeball.glb");

  const scroll = useScroll();
  const ballRef = useRef();
  const tl = useRef();

  useFrame(({ state, delta, mouse }) => {
    tl.current.seek(scroll.offset * tl.current.duration());
    // const x = (mouse.x * Math.PI) / 8;
    // const y = (mouse.y * Math.PI) / 2;
    // ballRef.current.rotation.set(0, x, 0);
    // if (scroll.offset > 0) {
    //   gsap.to(ballRef.current.position, {
    //     y: 20,
    //     duration: 2,
    //   });
    // }
  });
  useLayoutEffect(() => {
    ballRef.current.rotation.x = -1.5;
    ballRef.current.position.y = -0.5;

    let ctx = gsap.context(() => {
      gsap.from(ballRef.current.position, {
        y: 4,
        ease: "bounce",
        duration: 1,
      });
      gsap.to(ballRef.current.rotation, {
        x: -1.5,
        y: 0,
        z: 0,
        delay: 1,
      });

      tl.current = gsap.timeline({
        defaults: { duration: 2, ease: "power1.inOut" },
      });

      tl.current
        .to(ballRef.current.position, { x: -1, y: 0.5, z: 0 }, 0.5)
        .to(ballRef.current.rotation, { x: -1, y: -1, z: 0 }, 0.5);
    }, tl);

    return () => ctx.revert();
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
