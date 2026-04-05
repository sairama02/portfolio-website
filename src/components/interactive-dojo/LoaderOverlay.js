"use client";

import { Html } from "@react-three/drei";
import useAssetProgress from "../../hooks/useAssetProgress";

export default function LoaderOverlay({ started, onStart }) {
  const { progress, active } = useAssetProgress();
  const ready = !active && progress >= 100;

  if (started) return null;

  return (
    <Html center>
      <div style={overlayStyle}>
        {!ready ? (
          <>
            <h1>Tying your belt...</h1>
            <p>{progress.toFixed(0)}%</p>
          </>
        ) : (
          <>
            <img
              src="/logo192.png"
              alt="Dojo Logo"
              style={{ width: 200, marginBottom: 30 }}
            />
            <button onClick={onStart}>Enter the Dojo</button>
          </>
        )}
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