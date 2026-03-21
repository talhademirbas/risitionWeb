import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Align | Risition",
  description:
    "Align is an AI-powered productivity app for everyday planning and focus.",
};

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

        <p className="text-sm tracking-[0.28em] text-purple-300/90">
          AI + Productivity App
        </p>
        <h1 className="mt-3 bg-gradient-to-r from-white via-white to-purple-200/90 bg-clip-text text-4xl font-semibold tracking-tight text-transparent sm:text-5xl">
          Align
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-zinc-300">
          Align helps you plan your day, pick what matters, and stay in flow.
          Built as a calm, everyday companion—not another noisy dashboard.
        </p>
        <p className="mt-4 text-lg leading-relaxed text-zinc-500">
          We are still shaping the experience. When it ships, you will get
          thoughtful defaults, quick capture, and gentle nudges so your week
          feels lighter.
        </p>

        <section className="mt-12 rounded-2xl border border-white/[0.08] bg-gradient-to-br from-white/[0.06] to-transparent p-6 sm:p-8">
          <h2 className="text-xs font-medium uppercase tracking-[0.22em] text-zinc-500">
            What to expect
          </h2>
          <ul className="mt-5 space-y-4 text-zinc-300">
            <li className="flex gap-3 border-l-2 border-purple-500/40 pl-4">
              Simple daily structure you can actually stick to
            </li>
            <li className="flex gap-3 border-l-2 border-purple-500/40 pl-4">
              AI that suggests priorities without taking over
            </li>
            <li className="flex gap-3 border-l-2 border-purple-500/40 pl-4">
              An interface that stays out of your way
            </li>
          </ul>
        </section>
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
              href="/terms"
              className="text-sm text-zinc-500 transition hover:text-purple-200"
            >
              Terms
            </Link>
            <span className="h-3 w-px bg-zinc-800" aria-hidden />
            <Link
              href="/privacy"
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
