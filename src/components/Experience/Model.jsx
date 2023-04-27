import React, { useLayoutEffect, useRef } from "react";
import { Html, useGLTF, useScroll } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import gsap from "gsap";

export default function Model(props) {
  const { nodes, materials } = useGLTF("./models/room.glb");

  const scroll = useScroll();
  const ref = useRef();
  const tl = useRef();

  useFrame(() => {
    tl.current.seek(scroll.offset * tl.current.duration());
  });

  useLayoutEffect(() => {
    ref.current.rotation.x = 0.5;
    let ctx = gsap.context(() => {
      tl.current = gsap.timeline({
        defaults: { duration: 2, ease: "power1.inOut" },
      });
      tl.current.from(ref.current.position, { x: -0.4, y: 0.7, z: 10 }, 0.5);
      tl.current.from(ref.current.scale, { x: 1.5, y: 1.5, z: 1.5 }, 0.5);
      tl.current.from(ref.current.rotation, { x: -0.4, y: 0, z: 0 }, 0.5);
    }, tl);

    return () => ctx.revert();
  }, []);

  return (
    <group className="hidden" {...props} dispose={null} ref={ref}>
      <mesh
        geometry={nodes.base_fireRed_material_0.geometry}
        material={materials.fireRed_material}
      />
      <mesh
        geometry={nodes.tiles_fireRed_material_0.geometry}
        material={materials.fireRed_material}
      />
      <mesh
        geometry={nodes.chair_fireRed_material_0.geometry}
        material={materials.fireRed_material}
      />
      <mesh
        geometry={nodes.table_fireRed_material_0.geometry}
        material={materials.fireRed_material}
      />
      <mesh
        geometry={nodes.Computer_fireRed_material_0.geometry}
        material={materials.fireRed_material}
        //pc
      >
        <Html
          className="content"
          rotation-x={-Math.PI / 2}
          position={[0, 0.05, -0.09]}
          transform
          occlude
        >
          <div className="wrapper" onPointerDown={(e) => e.stopPropagation()}>
            <h1>hello world</h1>
          </div>
        </Html>
      </mesh>
      <mesh
        geometry={nodes.TV_stand_fireRed_material_0.geometry}
        material={materials.fireRed_material}
      />
      <mesh
        geometry={nodes.TV_fireRed_material_0.geometry}
        material={materials.fireRed_material}
        //tv
      />
      <mesh
        geometry={nodes.carpet_A_fireRed_material_0.geometry}
        material={materials.fireRed_material}
      />
      <mesh
        geometry={nodes.carpet_B_fireRed_material_0.geometry}
        material={materials.fireRed_material}
      />
      <mesh
        geometry={nodes.bed_fireRed_material_0.geometry}
        material={materials.fireRed_material}
      />
      <mesh
        geometry={nodes.dresser_fireRed_material_0.geometry}
        material={materials.fireRed_material}
      />
      <mesh
        geometry={nodes.bookShelf_fireRed_material_0.geometry}
        material={materials.fireRed_material}
      />
      <mesh
        geometry={nodes.NES_fireRed_material_0.geometry}
        material={materials.fireRed_material}
      />
      <mesh
        geometry={nodes.railing_fireRed_material_0.geometry}
        material={materials.fireRed_material}
      />
      <mesh
        geometry={nodes.stairs_fireRed_material_0.geometry}
        material={materials.fireRed_material}
      />
      <mesh
        geometry={nodes.wall_picture_fireRed_material_0.geometry}
        material={materials.fireRed_material}
      />
      <mesh
        geometry={nodes.ambient_occlusion_fireRed_material_0.geometry}
        material={materials.fireRed_material}
      />
      <mesh
        geometry={nodes.title_fireRed_material_0.geometry}
        material={materials.fireRed_material}
      />
    </group>
  );
}

useGLTF.preload("./models/room.glb");
