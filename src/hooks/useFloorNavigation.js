"use client";

import { useState } from "react";
import { Vector3 } from "three";

export default function useFloorNavigation({
  started,
  camera,
  controlsRef,
  panCamera,
  hoverY = 0.03,
  moveDuration = 1.2,
}) {
  const [hoverPoint, setHoverPoint] = useState(null);

  function isWalkable(x, z) {
    // block desk area
    if (x > 2 && x < 6 && z > 1 && z < 6) return false;

    // block column strip
    if (x > 4 && x < 6 && z > 6 && z < 20) return false;

    // block chair rows
    if (x > -1 && x < 2 && z > 7 && z < 19) return false;

    return true;
  }

  function handleFloorMove(e) {
    if (!started) return;

    const x = e.point.x;
    const z = e.point.z;

    if (!isWalkable(x, z)) {
      setHoverPoint(null);
      return;
    }

    setHoverPoint([x, 0.03, z]);
  }

  function handleFloorLeave() {
    setHoverPoint(null);
  }

  function handleFloorClick(e) {
    if (!started) return;

    e.stopPropagation();

    const clickedPoint = e.point;

    const currentTarget =
      controlsRef.current?.target?.clone?.() || new Vector3(0, 0, 0);

    const currentPosition = camera.position.clone();
    const offset = currentTarget.clone().sub(currentPosition);

    const nextPosition = {
      x: clickedPoint.x,
      y: camera.position.y,
      z: clickedPoint.z,
    };

    const nextTarget = {
      x: clickedPoint.x + offset.x,
      y: currentTarget.y,
      z: clickedPoint.z + offset.z,
    };

    panCamera(
      {
        position: nextPosition,
        target: nextTarget,
      },
      moveDuration
    );
  }

  return {
    hoverPoint,
    handleFloorMove,
    handleFloorLeave,
    handleFloorClick,
  };
}