"use client";

import { useEffect, useState } from "react";

export default function PointerGlow() {
  const [position, setPosition] = useState({ x: 50, y: 50 });

  useEffect(() => {
    function handleMouseMove(e) {
      const xPercent = (e.clientX / window.innerWidth) * 100;
      const yPercent = (e.clientY / window.innerHeight) * 100;

      setPosition({
        x: xPercent,
        y: yPercent,
      });
    }

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-0"
      style={{
        background: `radial-gradient(circle at ${position.x}% ${position.y}%, rgba(255,255,255,0.05), transparent 40%)`,
      }}
    />
  );
}