"use client";

import { useRef } from "react";
import { DoubleSide, Vector3 } from "three";
import { useFrame } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";

export default function FloorArrow({ position, camera }) {
  const arrowTexture = useTexture("/icons/arrow.png");
  const groupRef = useRef();

  useFrame(() => {
    if (!groupRef.current) return;

    const dir = new Vector3();
    camera.getWorldDirection(dir);
    dir.y = 0;

    if (dir.lengthSq() === 0) return;
    dir.normalize();

    const angle = Math.atan2(dir.x, dir.z);

    groupRef.current.position.set(position[0], position[1], position[2]);
    groupRef.current.rotation.set(-Math.PI / 2, 0, -angle);
  });

  return (
    <mesh ref={groupRef}>
      <planeGeometry args={[0.8, 0.8]} />

      <meshStandardMaterial
        map={arrowTexture}
        color="white"
        transparent
        opacity={0.85}
        side={DoubleSide}
      />
    </mesh>
  );
}