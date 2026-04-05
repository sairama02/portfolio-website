"use client";

import { useState } from "react"
import { Text, useCursor } from "@react-three/drei"

export default function ApproachTrigger({
  position,
  size,
  approachCamera,
  distance = 2,
  duration = 1.5,
  arrowPosition,
  label = "↑",
}) {
  const [hovered, setHovered] = useState(false)
  useCursor(hovered)

  const [width, depth] = size
  const arrowPos = arrowPosition ?? [position[0], position[1] + 0.05, position[2]]

  return (
    <group>
      <mesh
        position={position}
        rotation={[-Math.PI / 2, 0, 0]}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        onClick={() => approachCamera(distance, duration)}
      >
        <planeGeometry args={[width, depth]} />
        <meshBasicMaterial transparent opacity={0} />
      </mesh>

      {hovered && (
        <group position={arrowPos} rotation={[-Math.PI / 2, 0, 0]}>
          <Text
            fontSize={0.5}
            color="#ffffff"
            anchorX="center"
            anchorY="middle"
          >
            {label}
          </Text>
        </group>
      )}
    </group>
  )
}