"use client";

import { Clone, useGLTF } from "@react-three/drei"

export default function Chair(props) {
  const { scene } = useGLTF("/models/chair.glb")
  return <Clone object={scene} {...props} />
}