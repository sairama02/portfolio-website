"use client";

import { useRef, useMemo, useEffect } from "react"
import { useThree, useFrame } from "@react-three/fiber"
import { useGLTF, PositionalAudio } from "@react-three/drei"
import { Vector3, MathUtils } from "three"
import MenuButton from "./MenuButton"

export default function Waterfall({ panCamera, mute, ...props }) {
  const { scene } = useGLTF("/models/waterfall_2.glb")
  const groupRef = useRef()
  const audioRef = useRef()
  const spotLightRef = useRef()
  const spotTargetRef = useRef()
  const { camera } = useThree()

  const waterfallPos = useMemo(() => new Vector3(), [])
  const camPos = useMemo(() => new Vector3(), [])
  const camForward = useMemo(() => new Vector3(), [])
  const toWaterfall = useMemo(() => new Vector3(), [])

  useEffect(() => {
    if (!spotLightRef.current || !spotTargetRef.current) return
    spotLightRef.current.target = spotTargetRef.current
  }, [])

  useFrame(() => {
    if (!groupRef.current || !audioRef.current) return

    if (mute) {
      audioRef.current.setVolume(0)
    }
    else {
      groupRef.current.getWorldPosition(waterfallPos)
      camera.getWorldPosition(camPos)
      camera.getWorldDirection(camForward)

      toWaterfall.copy(waterfallPos).sub(camPos).normalize()

      const facingDot = camForward.dot(toWaterfall)
      const facingFactor = MathUtils.clamp((facingDot + 1) / 2, 0.15, 1)

      const distance = camPos.distanceTo(waterfallPos)
      const distanceFactor = MathUtils.clamp(1 - distance / 18, 0.2, 1)

      const targetVolume = 0.5 * facingFactor * distanceFactor

      audioRef.current.setVolume(
        MathUtils.lerp(audioRef.current.getVolume(), targetVolume, 0.08)
      )
    }
    if (spotLightRef.current?.target) {
      spotLightRef.current.target.updateMatrixWorld()
    }
  })

  return (
    <group ref={groupRef} {...props}>
      <primitive object={scene} position={[0, 2.55, 0.5]} />

      {/* Backlight placed behind the glass, near the wallpaper side */}
      <spotLight
        ref={spotLightRef}
        position={[0, 0.1, 0.25]}
        intensity={200}
        angle={0.5}
        penumbra={0.9}
        distance={5.5}
        color="#f5fbff"
      />

      {/* Local target slightly in front of the glass, into the room */}
      <object3D ref={spotTargetRef} position={[0, 2.55, 0.5]} />

      <PositionalAudio
        ref={audioRef}
        url="/audio/waterfall.m4a"
        distance={5}
        loop
        volume={0.4}
        autoplay
      />

      <MenuButton
        position={[-0.3, 4, 0.5]}
        label="About Me"
        onClick={() =>
          panCamera({
            position: { x: 12, y: 2.5, z: 5 },
            target: { x: 12, y: 2.5, z: 0 },
          })
        }
      />

      <MenuButton
        position={[0.3, 3.25, 0.5]}
        label="Projects"
        onClick={() =>
          panCamera({
            position: { x: 5, y: 2.5, z: 5 },
            target: { x: 12, y: 2.5, z: 15 },
          })
        }
      />

      <MenuButton
        position={[-0.3, 2.5, 0.5]}
        label="Contact"
        onClick={() =>
          panCamera({
            position: { x: 1.63, y: 3.5, z: 3.18 },
            target: { x: 1.5, y: 1.2, z: 3 },
          })
        }
      />

      <MenuButton
        position={[0.3, 1.75, 0.5]}
        label="Credits"
        onClick={() =>
          panCamera({
            position: { x: 1.63, y: 3.5, z: 3.18 },
            target: { x: 1.5, y: 1.2, z: 3 },
          })
        }
      />
    </group>
  )
}