"use client";

import ExperienceCard from "./ExperienceCard";

export default function ExperienceTimeline({ experiences }) {
  return (
    <div className="relative">
      <div className="absolute left-[11px] top-0 h-full w-px bg-neutral-800" />

      <div className="space-y-8">
        {experiences.map((experience, index) => (
          <ExperienceCard
            key={experience.id}
            experience={experience}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}