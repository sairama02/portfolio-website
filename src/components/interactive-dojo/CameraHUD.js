"use client";

import { useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";

export default function CameraHUD({ children }) {
  const groupRef = useRef();
  const { camera } = useThree();

  useFrame(() => {
    if (!groupRef.current) return;

    groupRef.current.position.copy(camera.position);
    groupRef.current.quaternion.copy(camera.quaternion);
  });

  return <group ref={groupRef}>{children}</group>;
}