"use client";

import { useEffect, useState } from "react";
import { OrbitControls, useTexture } from "@react-three/drei";
import { BackSide, Euler } from "three";
import { useThree } from "@react-three/fiber";

import usePanCamera from "../../hooks/usePanCamera";
import Column from "./Column";
import Curtain from "./Curtain";
import Chair from "./Chair";
import Waterfall from "./Waterfall";
import Desk from "./Desk";
import MenuButton from "./MenuButton";

export default function Dojo({ started, onMounted }) {
  const floors = useTexture("/textures/floors.jpg");
  const wallpaper = useTexture("/textures/wallpaper.jpg");
  const unmute = useTexture("/icons/volume-up.png");
  const muted = useTexture("/icons/volume-mute.png");

  const { panCamera, goToStart, isAtStart, controlsRef } = usePanCamera();
  const { camera } = useThree();

  const [mute, setMute] = useState(false);

  useEffect(() => {
    onMounted?.();
  }, [onMounted]);

  return (
    <>
      <OrbitControls
        ref={controlsRef}
        makeDefault
        enabled={started}
      />

      <primitive object={camera}>
        {!isAtStart && started && (
          <MenuButton
            label="Back"
            fontSize={0.4}
            onClick={goToStart}
            position={[-1.7, 0.8, -2]}
            width={0.25}
            height={0.1}
          />
        )}

        {started && (
          <MenuButton
            icon={mute ? "/icons/volume-mute.png" : "/icons/volume-up.png"}
            onClick={() => setMute(!mute)}
            position={[-1.75, -0.8, -2]}
            width={0.15}
            height={0.15}
            iconScale={[0.15, 0.15, 1]}
          />
        )}
      </primitive>

      <mesh position={[10, 2.5, 10]}>
        <boxGeometry args={[20, 5, 20]} />
        <meshStandardMaterial color="white" side={BackSide} />
      </mesh>

      <Column position={[5, 2.5, 7]} />
      <Column position={[5, 2.5, 12]} />
      <Column position={[5, 2.5, 17]} />

      <Chair position={[0.75, 0, 8]} scale={2} rotation={[0, Math.PI / 2, 0]} />
      <Chair position={[0.75, 0, 9.5]} scale={2} rotation={[0, Math.PI / 2, 0]} />
      <Chair position={[0.75, 0, 11]} scale={2} rotation={[0, Math.PI / 2, 0]} />
      <Chair position={[0.75, 0, 12.5]} scale={2} rotation={[0, Math.PI / 2, 0]} />
      <Chair position={[0.75, 0, 14]} scale={2} rotation={[0, Math.PI / 2, 0]} />
      <Chair position={[0.75, 0, 15.5]} scale={2} rotation={[0, Math.PI / 2, 0]} />
      <Chair position={[0.75, 0, 17]} scale={2} rotation={[0, Math.PI / 2, 0]} />
      <Chair position={[0.75, 0, 18.5]} scale={2} rotation={[0, Math.PI / 2, 0]} />

      <Curtain start={[5, 2.5, 7]} end={[5, 2.5, 12]} />
      <Curtain start={[5, 2.5, 12]} end={[5, 2.5, 17]} />
      <Curtain start={[5, 2.5, 17]} end={[5, 2.5, 20]} />

      <mesh position={[10, 2.5, 0.01]}>
        <planeGeometry args={[20, 5]} />
        <meshStandardMaterial map={wallpaper} />
      </mesh>

      <mesh
        position={[10, 0.01, 10]}
        rotation={new Euler(Math.PI / 2, 0, 0)}
      >
        <planeGeometry args={[20, 20]} />
        <meshStandardMaterial map={floors} side={BackSide} />
      </mesh>

      <Waterfall
        position={[4.1, 0, 0]}
        panCamera={panCamera}
        mute={mute}
      />

      <Desk started={started} />
    </>
  );
}