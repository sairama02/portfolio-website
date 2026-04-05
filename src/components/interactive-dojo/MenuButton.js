"use client";

import { Text, Image } from "@react-three/drei"
import {useState} from "react"

export default function MenuButton({
  position,
  label = "",
  onClick,
  icon = "",
  color = "white",
  fontSize = 1,
  width = 1.5,
  height = 0.5,
  iconScale = [0.35, 0.35, 1],
}) {
    const [hovered, setHovered] = useState(false)

    return (
        <group position={position} frustumCulled={false}>
            <mesh
                onClick={onClick}
                onPointerOver={() => setHovered(true)}
                onPointerOut={() => setHovered(false)}
                renderOrder={1000}
                frustumCulled={false}
            >
                <planeGeometry args={[width, height]} />
                <meshStandardMaterial 
                    color="white"
                    transparent 
                    opacity={0} 
                    depthTest={false}
                    depthWrite={false}
                />
            </mesh>
            {icon ? (
                <Image
                    url={icon}
                    position={[0, 0, 0.01]}
                    scale={iconScale}
                    color={hovered ? "#4fd1ff" : "white"}
                    transparent
                    renderOrder={1001}
                    frustumCulled={false}
                >
                    {/* <meshBasicMaterial 
                        depthTest={false} 
                        depthWrite={false}
                        color={hovered ? "#4fd1ff" : "white"}
                        transparent 
                    /> */}
                </Image>
            ) : (
                <Text
                    position={[0, 0, 0.01]}
                    font = "/fonts/go3v2.ttf"
                    fontSize={0.25 * fontSize}
                    color={hovered ?  "#4fd1ff" : "white"}
                    anchorX="center"
                    anchorY="middle"
                    renderOrder={1001}
                    frustumCulled={false}
                >
                    {label}
                    <meshBasicMaterial depthTest={false} depthWrite={false} />
                </Text>
            )}
            </group>

        )
    }
