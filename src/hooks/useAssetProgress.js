"use client";

import { useEffect, useRef, useState } from "react";
import { DefaultLoadingManager } from "three";

export default function useAssetProgress() {
  const [progress, setProgress] = useState(0);
  const [active, setActive] = useState(true);

  const nextProgressRef = useRef(0);
  const nextActiveRef = useRef(true);
  const rafRef = useRef(null);

  useEffect(() => {
    const flush = () => {
      rafRef.current = null;
      setProgress(nextProgressRef.current);
      setActive(nextActiveRef.current);
    };

    const scheduleFlush = () => {
      if (rafRef.current != null) return;
      rafRef.current = requestAnimationFrame(flush);
    };

    const prevStart = DefaultLoadingManager.onStart;
    const prevLoad = DefaultLoadingManager.onLoad;
    const prevProgress = DefaultLoadingManager.onProgress;
    const prevError = DefaultLoadingManager.onError;

    DefaultLoadingManager.onStart = () => {
      nextActiveRef.current = true;
      nextProgressRef.current = 0;
      scheduleFlush();
    };

    DefaultLoadingManager.onProgress = (_url, loaded, total) => {
      nextActiveRef.current = true;
      nextProgressRef.current = total > 0 ? (loaded / total) * 100 : 0;
      scheduleFlush();
    };

    DefaultLoadingManager.onLoad = () => {
      nextProgressRef.current = 100;
      nextActiveRef.current = false;
      scheduleFlush();
    };

    DefaultLoadingManager.onError = (url) => {
      console.error("Failed to load asset:", url);
    };

    return () => {
      if (rafRef.current != null) {
        cancelAnimationFrame(rafRef.current);
      }
      DefaultLoadingManager.onStart = prevStart;
      DefaultLoadingManager.onLoad = prevLoad;
      DefaultLoadingManager.onProgress = prevProgress;
      DefaultLoadingManager.onError = prevError;
    };
  }, []);

  return { progress, active };
}