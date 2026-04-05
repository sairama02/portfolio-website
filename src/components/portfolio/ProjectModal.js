"use client";

import { useEffect, useMemo } from "react";
import Link from "next/link";
import { getDetailBullets } from "@/src/lib/portfolio";

function ProjectImage({ project }) {
  return (
    <img
      src={project.image_url}
      alt={`${project.title} preview`}
      className="h-full w-full object-cover"
    />
  );
}

export default function ProjectModal({ project, onClose }) {
  const bullets = useMemo(() => getDetailBullets(project.details), [project]);

  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
      onClick={onClose}
    >
      <div
        className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-2xl border border-neutral-800 bg-neutral-950 shadow-2xl"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="sticky top-4 float-right mr-4 mt-4 rounded-full border border-neutral-700 bg-neutral-900 px-3 py-1 text-sm text-neutral-300 transition hover:border-neutral-500 hover:text-white"
        >
          Close
        </button>

        <div className="grid gap-8 p-6 md:grid-cols-[0.75fr_1.25fr] md:p-8">
          <div className="space-y-6">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-neutral-500">
                Project Details
              </p>
              <h3 className="mt-2 text-3xl font-semibold tracking-tight text-white">
                {project.title}
              </h3>

              {project.headline && (
                <p className="mt-2 text-base text-neutral-400">
                  {project.headline}
                </p>
              )}
            </div>
            
            {project.image_url && (
            <div className="overflow-hidden rounded-2xl border border-neutral-800">
              <div className="aspect-[16/10] w-full">
                <ProjectImage project={project} />
              </div>
            </div>
            )}

            <div className="flex flex-wrap gap-3 text-sm">
              {project.live_url &&
                (project.live_url.startsWith("/") ? (
                  <Link
                    href={project.live_url}
                    className="rounded-xl border border-neutral-700 px-4 py-2 text-neutral-200 transition hover:border-neutral-500 hover:text-white"
                  >
                    <img
                      src="/icons/github.svg"
                      alt="GitHub"
                      title="View Codebase"
                      className="h-6 w-6 invert"
                    />
                  </Link>
                ) : (
                  <a
                    href={project.live_url}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-xl px-4 py-2 text-neutral-200 transition hover:border-neutral-500 hover:text-white"
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
                  className="rounded-xl border border-neutral-700 px-4 py-2 text-neutral-200 transition hover:border-neutral-500 hover:text-white"
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
            <div>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.tech_stack.map((tech) => (
                  <span
                    key={`${project.id}-modal-${tech}`}
                    className="rounded-full border border-neutral-700 px-3 py-1 text-sm text-neutral-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-semibold text-white">Overview</h4>
              <p className="mt-3 leading-7 text-neutral-300">
                {project.description}
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-white">Highlights</h4>
              <ul className="mt-3 space-y-3 text-neutral-300">
                {bullets.map((bullet, index) => (
                  <li key={`${project.id}-bullet-${index}`} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-neutral-400" />
                    <span className="leading-7">{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}