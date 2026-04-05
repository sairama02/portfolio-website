"use client";

import { useTexture } from "@react-three/drei"

export default function Curtain({ start, end }) {
  const curtains = useTexture("/textures/curtains.png")
  const strings = []

  for (let i = start[2]; i <= end[2]; i += 0.05) {
    strings.push(
      <mesh key={i} position={[start[0], start[1], i]}>
        <cylinderGeometry args={[0.01, 0.01, 5, 8]} />
        <meshStandardMaterial map={curtains} />
      </mesh>
    )
  }

  return <>{strings}</>
}