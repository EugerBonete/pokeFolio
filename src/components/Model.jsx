import React, { useLayoutEffect, useRef } from "react";
import { useGLTF, useScroll } from "@react-three/drei";
import { Vector3 } from "three";
import { useFrame, useThree } from "@react-three/fiber";
import gsap from "gsap";

export default function Model(props) {
  const { nodes, materials } = useGLTF("./models/room.glb");
  const ref = useRef();
  const tl = useRef();

  useLayoutEffect(() => {
    tl.current = gsap.timeline();
    tl.current.from(
      ref.current.position,
      {
        x: -50,
        rotation: 180,
        duration: 2,
      },
      0
    );
  }, []);

  useFrame(({ mouse, viewport }) => {
    const x = (mouse.x * viewport.width) / 8;
    const y = (mouse.y * viewport.height) / 8;
    ref.current.rotation.y = (x * Math.PI) / 180;
    ref.current.rotation.x = (-y * Math.PI) / 180;
  });

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
      />
      <mesh
        geometry={nodes.TV_stand_fireRed_material_0.geometry}
        material={materials.fireRed_material}
      />
      <mesh
        geometry={nodes.TV_fireRed_material_0.geometry}
        material={materials.fireRed_material}
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
