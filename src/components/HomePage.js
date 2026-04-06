"use client";

import Link from "next/link";
import { redirect } from "next/navigation";


export default function HomePage() {
  redirect("/portfolio");
  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <div className="mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center px-6 text-center">
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-neutral-400">
          Portfolio
        </p>

        <h1 className="text-4xl font-semibold tracking-tight sm:text-6xl">
          Sai Rama Balakrishan
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-7 text-neutral-300 sm:text-lg">
          Software engineer focused on full-stack applications, applied AI, and
          interactive web experiences.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Link
            href="/portfolio"
            className="rounded-xl border border-neutral-700 bg-white px-6 py-3 font-medium text-black transition hover:bg-neutral-200"
          >
            View Basic Portfolio
          </Link>

          <Link
            href="/dojo"
            className="rounded-xl border border-neutral-700 px-6 py-3 font-medium text-white transition hover:bg-neutral-900"
          >
            Enter Interactive Dojo
          </Link>
        </div>
      </div>
    </main>
  );
}