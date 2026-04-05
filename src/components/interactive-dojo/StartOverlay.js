"use client";

import { Html } from "@react-three/drei";

export default function StartOverlay({ onStart }) {
  return (
    <Html center>
      <div style={overlayStyle}>
        <img
          src="/logo192.png"
          alt="Dojo Logo"
          style={{ width: 200, marginBottom: 30 }}
        />
        <button onClick={onStart}>Enter the Dojo</button>
      </div>
    </Html>
  );
}

const overlayStyle = {
  width: "100vw",
  height: "100vh",
  background: "black",
  color: "white",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
};