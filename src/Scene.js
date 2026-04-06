"use client";

import { Suspense, useState, useCallback } from "react";
import { Canvas } from "@react-three/fiber";
import LoaderOverlay from "./components/interactive-dojo/LoaderOverlay";
import Dojo from "./components/interactive-dojo/Dojo";

export default function Scene() {
  const [started, setStarted] = useState(false);
  const [dojoMounted, setDojoMounted] = useState(false);

  const handleDojoMounted = useCallback(() => {
    setDojoMounted(true);
  }, []);

  return (
    <div style={sceneWrapperStyle}>
      <Canvas
        style={{ pointerEvents: started ? "auto" : "none" }}
        camera={{ position: [2, 3, 20], fov: 50 }}
      >
        <Suspense fallback={null}>
          <Dojo started={started} onMounted={handleDojoMounted} />
        </Suspense>

        {started && <axesHelper args={[5]} />}
        {started && <gridHelper args={[50, 50]} />}
        <ambientLight intensity={1} />
        <directionalLight position={[5, 10, 5]} intensity={1} />
      </Canvas>

      {!started && (
        <LoaderOverlay
          canEnter={dojoMounted}
          onStart={() => setStarted(true)}
        />
      )}
    </div>
  );
}

const sceneWrapperStyle = {
  width: "100vw",
  height: "100vh",
  position: "relative",
  overflow: "hidden",
};