import { useRef } from "react"
import { useThree } from "@react-three/fiber"
import { useState } from "react"
import gsap from "gsap"

const START_POSITION = { x: 2, y: 3, z: 20 }
const START_TARGET = { x: 0, y: 0, z: 0 } 

export default function usePanCamera() {
  const { camera } = useThree()
  const controlsRef = useRef()
  
  const [isAtStart, setIsAtStart] = useState(true)

  const panCamera = ({ position, target }, duration = 2) => {
    if (!camera || !controlsRef.current) return

    gsap.to(camera.position, {
      ...position,
      duration,
      ease: "power2.inOut",
    })

    gsap.to(controlsRef.current.target, {
      ...target,
      duration,
      ease: "power2.inOut",
      onUpdate: () => controlsRef.current.update(),
      onComplete: () => {
        setIsAtStart(false)
      },
    })
  }

  const goToStart = (duration = 2) => {
    if (!camera || !controlsRef.current) return

    gsap.to(camera.position, {
      ...START_POSITION,
      duration,
      ease: "power2.inOut",
    })

    gsap.to(controlsRef.current.target, {
      ...START_TARGET,
      duration,
      ease: "power2.inOut",
      onUpdate: () => controlsRef.current.update(),
      onComplete: () => {
        setIsAtStart(true)
      },
    })
  }

  return { panCamera, goToStart, isAtStart, controlsRef }
}