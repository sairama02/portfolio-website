"use client";

import Link from "next/link";
import { motion } from "motion/react";

export default function ProjectCard({ project, onSelect }) {
  return (
    <article className="rounded-2xl border border-[#1a0f19] bg-neutral-900/50 p-6 transition hover:border-neutral-700 hover:bg-neutral-900">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h3 className="text-xl font-semibold">{project.title}</h3>

          {project.headline && (
            <p className="mt-1 text-sm text-neutral-400">{project.headline}</p>
          )}
        </div>

        <div className="flex flex-wrap gap-3 text-sm">
          {project.live_url &&
            (project.live_url.includes("devpost") ? (
              <Link
                href={project.live_url}
                className="text-neutral-300 transition hover:text-white"
              >
                <motion.img
                  src="/icons/devpost.svg"
                  alt="Devpost"
                  title="View Devpost"
                  className="h-6 w-6 invert"

                  whileHover={{
                    scale: 1.2,
                  }}
                />
              </Link>
            ) : (
              <a
                href={project.live_url}
                target="_blank"
                rel="noreferrer"
                className="text-neutral-300 transition hover:text-white"
              >
                <motion.img
                  src="/icons/live-site.png"
                  alt="Live Site"
                  title="View Live Site"                      
                  className="h-6 w-6 invert"

                  whileHover={{
                    scale: 1.2,
                  }}
                />
              </a>
            ))}

          {project.github_url && (
            <a
              href={project.github_url}
              target="_blank"
              rel="noreferrer"
              className="text-neutral-300 transition hover:text-white"
            >
              <motion.img
                src="/icons/github.svg"
                alt="GitHub"
                title="View Codebase"
                className="h-6 w-6 invert"

                whileHover={{
                  scale: 1.1,
                }}
              />
            </a>
          )}
        </div>
      </div>

      <p className="mt-4 leading-7 text-neutral-300">{project.description}</p>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.tech_stack.map((tech) => (
          <span
            key={`${project.id}-${tech}`}
            className="rounded-full border border-neutral-700 px-3 py-1 text-sm text-neutral-300"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="mt-6 flex justify-end">
        <button
          onClick={() => onSelect(project)}
          className="rounded-xl px-4 py-2 transition"
          title="View More"
        >
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}

            initial={{ x: 0 }}
            whileHover={{ x: 6 }}
            whileTap={{ x: 6 }}

            transition={{
              type: "spring",
              stiffness: 400,
              damping: 20
            }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 5l7 7-7 7" />
          </motion.svg>
        </button>
      </div>
    </article>
  );
}