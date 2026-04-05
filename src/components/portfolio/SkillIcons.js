"use client";

import { useState, useEffect } from "react";
import { motion } from "motion/react";

// const iconPositions = [
//   { x: 50, y: 30 },
//   { x: -20, y: 80 },
//   { x: 120, y: 55 },
//   { x: 150, y: 130 },
//   { x: 230, y: 30 },
//   { x: 280, y: 70 },
//   { x: 350, y: 40 },
//   { x: 30, y: 380 },
// ];

const iconPositions = [
  { x: "14%", y: "12%" },
  { x: "-4%", y: "32%" },
  { x: "34%", y: "20%" },
  { x: "44%", y: "52%" },
  { x: "66%", y: "12%" },
  { x: "80%", y: "28%" },
  { x: "96%", y: "16%" },
  { x: "8%", y: "78%" },
];

export default function SkillIcons({ skills }) {
  const [availableIcons, setAvailableIcons] = useState([]);

  useEffect(() => {
    let cancelled = false;

    async function checkIcons() {
      const results = await Promise.all(
        skills.map(
          (skill) =>
            new Promise((resolve) => {
              const img = new Image();
              img.src = `/icons/${skill}.png`;

              img.onload = () => resolve(skill);
              img.onerror = () => resolve(null);
            })
        )
      );

      if (!cancelled) {
        setAvailableIcons(results.filter(Boolean));
      }
    }

    checkIcons();

    return () => {
      cancelled = true;
    }; 
  }, [skills]);

  return (
    <div className="w-full">
      <p className="mb-6 text-l uppercase tracking-[0.22em] text-neutral-400">
        My Technical Headspace
      </p>

      <div className="relative mx-auto h-[220px] w-full max-w-[300px] sm:max-w-[360px] lg:max-w-[400px] lg:h-[220px] lg:w-[400px]">
        {availableIcons.slice(0, iconPositions.length).map((skill, index) => {
          const position = iconPositions[index];

          return (
            <motion.img
              key={skill}
              src={`/icons/${skill}.png`}
              alt={skill}
              className="absolute h-10 w-10 -translate-x-1/2 -translate-y-1/2 object-contain"
              
              initial={{
                left: "50%",
                top: "50%",
                opacity: 1,
                scale: 0.6
              }}

              animate={{
                left: position.x,
                top: position.y,
                opacity: 1,
                scale: 1
              }}

              transition={{
                delay: index * 0.02,
                duration: 0.6,
                type: "spring",
                bounce: 0.7,
                stiffness: 120
              }}

              whileHover={{
                scale: 1.2,
              }}
            />
          );
        })}
      </div>
    </div>
  );
}