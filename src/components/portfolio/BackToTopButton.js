"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";

export default function BackToTopButton() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const scrollPosition = window.scrollY + window.innerHeight;
      const pageHeight = document.documentElement.scrollHeight;

      setShowButton(scrollPosition > pageHeight * 0.75);
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  if (!showButton) return null;

  return (
    <motion.button
      onClick={scrollToTop}
      aria-label="Back to top"
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 8 }}
      whileHover="hover"
      className="
        group
        fixed
        bottom-15

        right-12
        sm:right-14
        md:right-16
        lg:right-8

        z-[1000]
        flex
        cursor-pointer
        flex-col
        items-center
        gap-2
        select-none
        bg-transparent
    "
    >
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 text-neutral-500 transition-colors duration-300 group-hover:text-neutral-100"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
        variants={{
          hover: {
            y: [0, -6, 0],
            transition: {
              duration: 0.8,
              repeat: Infinity,
              ease: "easeInOut",
            },
          },
        }}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 19V5m0 0l-7 7m7-7l7 7"
        />
      </motion.svg>

      <span
        className="text-sm font-semibold uppercase tracking-[0.18em] text-neutral-500 transition-colors duration-300 group-hover:text-neutral-100 [text-orientation:mixed] [writing-mode:vertical-rl]"
      >
        Back to top
      </span>
    </motion.button>
  );
}