"use client";

import Link from "next/link";

export default function ProjectCard({ project, onSelect }) {
  return (
    <article className="rounded-2xl border border-neutral-800 bg-neutral-900/50 p-6 transition hover:border-neutral-700 hover:bg-neutral-900 hover:-translate-y-1">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h3 className="text-xl font-semibold">{project.title}</h3>

          {project.headline && (
            <p className="mt-1 text-sm text-neutral-400">{project.headline}</p>
          )}
        </div>

        <div className="flex flex-wrap gap-3 text-sm">
          {project.live_url &&
            (project.live_url.startsWith("/") ? (
              <Link
                href={project.live_url}
                className="text-neutral-300 transition hover:text-white"
              >
                <img
                  src="/icons/live-site.png"
                  alt="Live Site"
                  title="View Live Site"                      
                  className="h-6 w-6 invert"
                />
              </Link>
            ) : (
              <a
                href={project.live_url}
                target="_blank"
                rel="noreferrer"
                className="text-neutral-300 transition hover:text-white"
              >
                <img
                  src="/icons/live-site.png"
                  alt="Live Site"
                  title="View Live Site"                      
                  className="h-6 w-6 invert"
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
              <img
                src="/icons/github.svg"
                alt="GitHub"
                title="View Codebase"
                className="h-6 w-6 invert"
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

      <div className="mt-6">
        <button
          onClick={() => onSelect(project)}
          className="rounded-xl border border-neutral-700 px-4 py-2 text-sm text-neutral-200 transition hover:border-neutral-500 hover:text-white"
        >
          View More
        </button>
      </div>
    </article>
  );
}