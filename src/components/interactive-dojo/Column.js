"use client";

import { useTexture } from "@react-three/drei"
import { SRGBColorSpace, RepeatWrapping } from "three"

export default function Column(props) {
  const wall = useTexture("/textures/wall.jpg")
  wall.colorSpace = SRGBColorSpace

  wall.wrapS = wall.wrapT = RepeatWrapping
  wall.repeat.set(2, 2)

  return (
    <mesh {...props}> 
    <boxGeometry args={[1, 5, 1]} /> 
    <meshStandardMaterial map={wall} roughness={1} metalness={0} /> 
    </mesh>
  )
}