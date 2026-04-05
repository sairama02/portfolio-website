"use client";

import { motion } from "motion/react";
import { formatExperienceDateRange } from "@/src/lib/portfolio";

export default function ExperienceCard({ experience, index }) {
  return (
    <motion.div
      className="relative pl-10"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
    >
      <motion.div
        className="absolute left-0 top-6 h-6 w-6 rounded-full border border-neutral-700 bg-[#1a0f19]"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              duration: 0.55,
              delay: index * 0.08,
              ease: "easeOut",
            },
          },
        }}
      />

      <motion.article
        className="rounded-2xl border border-[#1a0f19] bg-neutral-900/50 p-6 transition hover:border-neutral-700 hover:bg-neutral-900"
        variants={{
          hidden: { opacity: 0, x: 48 },
          visible: {
            opacity: 1,
            x: 0,
            transition: {
              duration: 0.55,
              delay: index * 0.08,
              ease: "easeOut",
            },
          },
        }}
      >
        <div className="grid gap-3 sm:grid-cols-[1fr_auto] sm:items-start">
          <div className="min-w-0">
            <h3 className="text-xl font-semibold">{experience.role}</h3>

            {experience.company && (
              <p className="mt-1 text-sm text-neutral-400">
                {experience.company}
              </p>
            )}
          </div>

          <div className="flex flex-col items-start gap-1 sm:items-end">
            {(experience.start_date ||
              experience.end_date ||
              experience.is_current) && (
              <p className="whitespace-nowrap text-sm text-neutral-400">
                {formatExperienceDateRange(
                  experience.start_date,
                  experience.end_date,
                  experience.is_current
                )}
              </p>
            )}

            {experience.location && (
              <span className="flex items-center gap-2 whitespace-nowrap text-sm text-neutral-500">
                <img
                  src="/icons/location.png"
                  alt="Location"
                  className="h-4 w-4 invert opacity-70"
                />
                {experience.location}
              </span>
            )}
          </div>
        </div>

        <p className="mt-4 leading-7 text-neutral-300">
          {experience.description}
        </p>
      </motion.article>
    </motion.div>
  );
}