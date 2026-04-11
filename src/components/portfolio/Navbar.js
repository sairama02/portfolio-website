import Link from "next/link";

export default function Navbar() {
  return (
    <div className="sticky top-0 z-40 bg-[#1a0f19]/80 backdrop-blur">
      <div className="flex w-full items-center justify-between px-6 lg:px-15 py-2">
        <Link
          href="/"
        >
          <img
              src="/icons/logo.png"
              alt="SBLogo"
              className="h-6 w-6"
            />
        </Link>

        <div className="flex items-center gap-4">
          <a
            href="/resume.pdf"
            target="_blank"
            aria-label="Resume"
            className="text-neutral-300 transition hover:text-white"
          >
            <p>Resume</p>
          </a>

          <a
            href="mailto:sairamaa13@gmail.com"
            target="_blank"
            aria-label="Email"
            className="text-neutral-300 transition hover:text-white"
          >
            <img
              src="/icons/email.png"
              alt="Email"
              className="h-7 invert"
            />
          </a>

          <a
            href="https://github.com/sairama02"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="text-neutral-300 transition hover:text-white"
          >
            <img
              src="/icons/github.svg"
              alt="GitHub"
              className="h-6 w-6 invert"
            />
          </a>

          <a
            href="https://linkedin.com/in/sai-rama/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="text-neutral-300 transition hover:text-white"
          >
            <img
              src="/icons/linkedin.svg"
              alt="LinkedIn"
              className="h-9 w-9 invert"
            />
          </a>
        </div>
      </div>
    </div>
  );
}