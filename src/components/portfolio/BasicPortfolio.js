"use client";

import { useMemo, useState } from "react";
import Navbar from "./Navbar";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import ExperienceTimeline from "./ExperienceTimeline";
import SkillIcons from "./SkillIcons";
import ContactForm from "../ContactForm";
import SectionMenu from "./SectionMenu";
import PointerGlow from "./PointerGlow";
import { getUniqueSkills } from "@/src/lib/portfolio";

export default function BasicPortfolio({ projects, experiences }) {
  const [selectedProject, setSelectedProject] = useState(null);
  const skills = useMemo(() => getUniqueSkills(projects), [projects]);

  return (
    <>
      <Navbar />
      <PointerGlow />

      <div
        className="pointer-events-none fixed inset-0 z-0 opacity-[0.025]"
        style={{ backgroundImage: "url('textures/pattern.png')" }}
      />

      <main className="min-h-screen bg-[#1a0f19] text-white">
        <div className="mx-auto max-w-6xl px-6 py-0 sm:px-8 lg:px-2">
          <div className="grid items-start gap-12 lg:grid-cols-[0.9fr_1.3fr] lg:gap-16">
            <aside className="lg:fixed lg:top-16 ...">
              <div className="space-y-8">
                <div>
                  <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
                    Sai Rama Balakrishan
                  </h1>
                  <p className="mb-3 text-sm uppercase tracking-[0.25em] text-neutral-400">
                    Full-Stack Software Engineer
                  </p>
                </div>

                <div>
                  <SkillIcons skills={skills} />
                  <div className="grid items-start gap-6 lg:grid-cols-[160px_1.3fr]">
                    <div className="hidden lg:block">
                      <SectionMenu />
                    </div>

                    <div className="flex justify-center lg:justify-end">
                      <img
                        src="/moi.png"
                        alt="Sai"
                        className="h-[420px] w-auto object-contain lg:-mt-20 -mt-25"
                      />
                    </div>
                  </div>

                </div>
              </div>
            </aside>

            

            <div className="space-y-12 pt-12 lg:ml-[30rem] lg:w-[40rem]">
              <section id="about" className="border-b border-neutral-800 pb-12">
                <h2 className="sticky top-12 z-20 -mx-12 border-b border-neutral-800 bg-neutral-950 px-6 py-3 text-2xl font-semibold lg:hidden bg-neutral-950/80 backdrop-blur">
                  About
                </h2>

                <div className="mt-6 space-y-4 text-neutral-300">
                  <p>
                    Hi, I'm Sai Rama, a software engineer and recent graduate from Cal Poly SLO focused on full-stack development and applied AI. I enjoy building products that turn complex ideas into intuitive user experiences, especially when they help address problems that are often overlooked.
                  </p>
                  <p>
                    I've worked on projects ranging from a full-stack academic planning platform to AI-powered tools that transform unstructured information into usable insights. I like working closely with stakeholders, moving quickly from idea to implementation, and continuously refining systems based on real feedback.
                  </p>
                  <p>
                    I'm currently looking to join a team where I can contribute to meaningful products, learn from experienced engineers, and continue building technology that improves how people interact with information.
                  </p>
                  <p>
                    I'm especially motivated by opportunities to work on under-addressed problems and create tools that genuinely improve how people interact with information.
                  </p>
                  <a
                    href="#contact"
                    className="inline-block mt-4 rounded-lg bg-white px-5 py-2 text-med font-medium text-black transition hover:bg-neutral-200"
                  >
                    Get in Touch
                  </a>
                </div>
              </section>

              <section id="projects" className="border-b border-neutral-800 pb-12">
                <h2 className="sticky top-12 z-20 -mx-12 border-b border-neutral-800 bg-neutral-950 px-6 py-3 text-2xl font-semibold lg:hidden bg-neutral-950/80 backdrop-blur">
                  Projects
                </h2>

                <div className="mt-6 grid gap-5">
                  {projects.map((project) => (
                    <ProjectCard
                      key={project.id}
                      project={project}
                      onSelect={setSelectedProject}
                    />
                  ))}
                </div>
              </section>

              {experiences?.length > 0 && (
                <section id="experience" className="border-b border-neutral-800 pb-12">
                  <h2 className="sticky top-12 z-20 -mx-12 border-b border-neutral-800 bg-neutral-950 px-6 py-3 text-2xl font-semibold lg:hidden bg-neutral-950/80 backdrop-blur">
                    Experience
                  </h2>

                  <div className="mt-6">
                    <ExperienceTimeline experiences={experiences} />
                  </div>
                </section>
              )}

              <section id="contact" className="pb-12">
                <h2 className="sticky top-12 z-20 -mx-12 border-b border-neutral-800 bg-neutral-950 px-6 py-3 text-2xl font-semibold lg:hidden bg-neutral-950/80 backdrop-blur">
                  Contact
                </h2>

                <div className="mt-6 space-y-2 text-neutral-300">
                  <p>
                    I’m currently seeking software engineering opportunities where I can build thoughtful, user-focused products and continue growing as a developer. I’m especially interested in teams working on meaningful problems. I’m also always open to feedback or suggestions on my projects. If you’d like to connect, I’d love to hear from you!
                  </p>
                </div>

                <ContactForm variant="portfolio" />
              </section>
            </div>
          </div>
        </div>
      </main>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </>
  );
}