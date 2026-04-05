"use client";

import { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import LoaderOverlay from "./components/interactive-dojo/LoaderOverlay";
import Dojo from "./components/interactive-dojo/Dojo";
import { OrbitControls } from "@react-three/drei";

export default function Scene() {
  const [started, setStarted] = useState(false)

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Canvas camera={{ position: [2, 3, 20], fov: 50 }}>
        <Suspense fallback={<LoaderOverlay started={started} onStart={() => setStarted(true)} />}>
          <Dojo started={started} />
        </Suspense>
        <axesHelper args={[5]} />
        <gridHelper args={[50, 50]} />
        <ambientLight intensity={1} />
        <directionalLight position={[5, 10, 5]} intensity={1} />
      </Canvas>
    </div>
  )
}