"use client";

import { useMemo } from "react";
import { useProgress } from "@react-three/drei";

export function computeGlobalProgress({
  assetIndex,
  totalAssets,
  assetProgress,
}) {
  if (totalAssets === 0) return 0;

  const normalized = assetIndex + assetProgress / 100;

  return Math.min(
    100,
    Math.max(0, (normalized / totalAssets) * 100)
  );
}

export default function useAssetProgress() {
  const { active, progress, item, loaded, total } = useProgress();

  const globalProgress = useMemo(() => {
    if (total === 0) return 0;

    const assetIndex = loaded - (active ? 1 : 0);

    return ((assetIndex + progress / 100) / total) * 100;
  }, [progress, loaded, total, active]);

  return {
    progress: globalProgress,
    active
  };
}
