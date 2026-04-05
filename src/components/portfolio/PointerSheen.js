"use client";

import { useEffect, useState } from "react";

export default function PointerSheen() {
  const [mouse, setMouse] = useState({ x: 50, y: 50 });

  useEffect(() => {
    function handleMove(e) {
      setMouse({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    }

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <>
      <div
        className="pointer-events-none absolute inset-0 bg-repeat bg-center opacity-[0.14]"
        style={{
          backgroundImage: "url('/pattern.png')",
          maskImage: `radial-gradient(circle at ${mouse.x}% ${mouse.y}%, black 0%, transparent 35%)`,
          WebkitMaskImage: `radial-gradient(circle at ${mouse.x}% ${mouse.y}%, black 0%, transparent 35%)`,
          filter: "brightness(1.35) saturate(1.1)",
        }}
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: `radial-gradient(circle at ${mouse.x}% ${mouse.y}%, rgba(255,255,255,0.07), transparent 30%)`,
        }}
        aria-hidden="true"
      />
    </>
  );
}