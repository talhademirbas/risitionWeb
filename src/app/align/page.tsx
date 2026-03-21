import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Align: Daily Tasks | Risition",
  description:
    "Organize, track, and complete your daily tasks effortlessly with Align. AI-powered smart features and a clean interface for smarter daily planning.",
};

const keyFeatures = [
  {
    title: "Smart Task Suggestions",
    body: "AI automatically assigns emojis and estimated durations to your tasks.",
  },
  {
    title: "Boost Productivity",
    body: "Track your progress and stay motivated to get more done each day.",
  },
  {
    title: "Simple, Elegant UX",
    body: "A thoughtfully designed interface that makes daily planning effortless.",
  },
  {
    title: "Innovative Daily Planning",
    body:
      "Align transforms how you organize your day, blending AI with practical productivity tools.",
  },
];

export default function AlignPage() {
  return (
    <main className="relative flex min-h-screen flex-col overflow-hidden bg-black text-white">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_20%,rgba(167,139,250,0.18),transparent_40%),radial-gradient(circle_at_85%_30%,rgba(109,40,217,0.12),transparent_35%)]" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.02),transparent_30%)]" />

      <div className="mx-auto w-full max-w-3xl flex-1 px-6 pb-16 pt-8 sm:px-10">
        <header className="mb-14 flex items-center justify-between">
          <Link
            href="/"
            className="text-sm text-zinc-500 transition hover:text-purple-200"
          >
            ← Risition
          </Link>
          <span className="rounded-full border border-amber-400/30 bg-amber-500/[0.08] px-3 py-1 text-[11px] font-medium uppercase tracking-[0.12em] text-amber-200/90">
            Under construction
          </span>
        </header>

        <div className="mt-2 flex flex-col gap-8 sm:flex-row sm:items-start sm:gap-10">
          <div className="flex shrink-0 justify-center sm:justify-start">
            <div className="rounded-2xl bg-white p-5 shadow-[0_0_48px_rgba(168,85,247,0.22)] ring-1 ring-white/15">
              <Image
                src="/align-icon.png"
                alt="Align: Daily Tasks app icon"
                width={120}
                height={120}
                className="h-[7.5rem] w-[7.5rem] object-contain sm:h-32 sm:w-32"
                priority
              />
            </div>
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-sm tracking-[0.28em] text-purple-300/90">
              AI + Productivity App
            </p>
            <h1 className="mt-3 bg-gradient-to-r from-white via-white to-purple-200/90 bg-clip-text text-3xl font-semibold tracking-tight text-transparent balance sm:text-4xl md:text-5xl">
              Align: Daily Tasks
            </h1>
          </div>
        </div>

        <div className="mt-8 space-y-5 text-lg leading-relaxed text-zinc-300">
          <p>
            Organize, track, and complete your daily tasks effortlessly with
            Align. Designed for individuals who want to boost productivity, Align
            combines a clean, intuitive interface with AI-powered smart features
            to make task management faster and more motivating.
          </p>
        </div>

        <section className="mt-12 rounded-2xl border border-white/[0.08] bg-gradient-to-br from-white/[0.06] to-transparent p-6 sm:p-8">
          <h2 className="text-xs font-medium uppercase tracking-[0.22em] text-zinc-500">
            Key Features
          </h2>
          <ul className="mt-6 space-y-6 text-zinc-300">
            {keyFeatures.map((item) => (
              <li key={item.title} className="border-l-2 border-purple-500/40 pl-4">
                <p className="font-medium text-white">{item.title}</p>
                <p className="mt-1.5 text-[15px] leading-relaxed text-zinc-400">
                  {item.body}
                </p>
              </li>
            ))}
          </ul>
        </section>

        <p className="mt-10 text-lg leading-relaxed text-zinc-400">
          Join thousands of users who are completing more tasks, staying organized,
          and achieving their goals with Align. Start today and experience smarter
          daily planning!
        </p>
      </div>

      <footer className="mt-auto border-t border-white/[0.06] bg-black/40 px-6 py-6 backdrop-blur-sm">
        <div className="mx-auto flex max-w-3xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-center text-sm text-zinc-600 sm:text-left">
            © {new Date().getFullYear()} Risition
          </p>
          <nav
            aria-label="Align app legal"
            className="flex items-center justify-center gap-6 sm:justify-end"
          >
            <Link
              href="/align/terms"
              className="text-sm text-zinc-500 transition hover:text-purple-200"
            >
              Terms
            </Link>
            <span className="h-3 w-px bg-zinc-800" aria-hidden />
            <Link
              href="/align/privacy"
              className="text-sm text-zinc-500 transition hover:text-purple-200"
            >
              Privacy
            </Link>
          </nav>
        </div>
      </footer>
    </main>
  );
}
