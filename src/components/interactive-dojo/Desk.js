"use client";

import { Html, useTexture, useGLTF } from "@react-three/drei"
import ContactForm from "../ContactForm"

export default function Desk({ started }) {
  const desk = useTexture("/textures/desk.jpg")
  const { scene } = useGLTF("/models/pen_holder.glb")

  return (
    <group position={[1.5, 1, 3]} rotation={[0, Math.PI / 5, 0]}>
      <primitive object={scene} position={[-1, 1.2, 0.3]} scale={2.2}/>
      <mesh>
        <boxGeometry args={[2.5, 2, 1]} />
        <meshStandardMaterial map={desk} />
      </mesh>

      <mesh position={[0.25, 1.01, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[1, 0.75]} />
        <meshStandardMaterial color="white" />
      </mesh>

        {started && (<Html 
          transform
          rotation={[-Math.PI / 2, 0, 0]}
          position={[0.25, 1.02, 0]}
          distanceFactor={1}
          style={{ pointerEvents: "auto" }}
        >
          <div
             onPointerDown={(e) => e.stopPropagation()}
              onPointerUp={(e) => e.stopPropagation()}
              onPointerMove={(e) => e.stopPropagation()}
              onPointerOver={(e) => e.stopPropagation()}
              onPointerOut={(e) => e.stopPropagation()}
              onClick={(e) => e.stopPropagation()}
              style={{
                width: "350px",
                height: "280px",
                overflow: "hidden",
                borderRadius: "12px",
                background: "white",
                pointerEvents: "auto",
              }}
          >
            <ContactForm variant="dojo" />
          </div>
        </Html>
        )}
    </group>
  )
}