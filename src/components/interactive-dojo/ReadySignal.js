"use client";

import { useEffect } from "react";

export default function ReadySignal({ onReady }) {
  useEffect(() => {
    onReady();
  }, [onReady]);

  return null;
}