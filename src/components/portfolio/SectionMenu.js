"use client";

import { useEffect, useState } from "react";

const allSections = [
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

export default function SectionMenu() {
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    function updateActiveSection() {
      const viewportHeight = window.innerHeight;
      let mostVisibleSection = allSections[0].id;
      let maxVisiblePixels = -1;

      for (const section of allSections) {
        const element = document.getElementById(section.id);
        if (!element) continue;

        const rect = element.getBoundingClientRect();
        const visibleTop = Math.max(rect.top, 0);
        const visibleBottom = Math.min(rect.bottom, viewportHeight);
        const visiblePixels = Math.max(0, visibleBottom - visibleTop);

        if (visiblePixels > maxVisiblePixels) {
          maxVisiblePixels = visiblePixels;
          mostVisibleSection = section.id;
        }
      }

      setActiveSection(mostVisibleSection);
    }

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  return (
    <nav aria-label="Section navigation" className="space-y-8">
      {allSections.map((section) => {
        const isActive = activeSection === section.id;

        return (
          <a
            key={section.id}
            href={`#${section.id}`}
            className="group flex items-center gap-4"
          >
            <span
              className={`h-px transition-all duration-300 ${
                isActive
                  ? "w-12 bg-neutral-200"
                  : "w-8 bg-neutral-700 group-hover:bg-neutral-500"
              }`}
            />

            <span
              className={`text-sm font-semibold uppercase tracking-[0.18em] transition-colors duration-300 ${
                isActive
                  ? "text-neutral-100"
                  : "text-neutral-500 group-hover:text-neutral-300"
              }`}
            >
              {section.label}
            </span>
          </a>
        );
      })}
    </nav>
  );
}