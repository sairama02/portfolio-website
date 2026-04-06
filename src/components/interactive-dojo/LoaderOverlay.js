"use client";

import { useEffect, useState } from "react";
import { useProgress } from "@react-three/drei";

export default function LoaderOverlay({ canEnter, onStart }) {
  const { progress, active } = useProgress();
  const [showReadyState, setShowReadyState] = useState(false);

  useEffect(() => {
    if (!active && progress >= 100 && canEnter) {
      setShowReadyState(true);
    }
  }, [active, progress, canEnter]);

  return (
    <div style={overlayStyle}>
      {!showReadyState ? (
        <>
          <h1 style={titleStyle}>Tying your belt...</h1>
          <p style={progressStyle}>{Math.min(progress, 100).toFixed(0)}%</p>
        </>
      ) : (
        <>
          <img
            src="/logo192.png"
            alt="Dojo Logo"
            style={{ width: 200, marginBottom: 30 }}
          />
          <button onClick={onStart} style={buttonStyle}>
            Enter the Dojo
          </button>
        </>
      )}
    </div>
  );
}

const overlayStyle = {
  position: "absolute",
  inset: 0,
  width: "100%",
  height: "100%",
  background: "black",
  color: "white",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 99999,
  pointerEvents: "auto",
};

const titleStyle = {
  marginBottom: 12,
};

const progressStyle = {
  fontSize: "1.2rem",
};

const buttonStyle = {
  padding: "12px 24px",
  fontSize: "16px",
  cursor: "pointer",
  position: "relative",
  zIndex: 100000,
};