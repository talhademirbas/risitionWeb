import Link from "next/link";
import type { Metadata } from "next";

const DOCS_URL = "https://www.risition.com/riseui/docs";

export const metadata: Metadata = {
  title: "RiseUI | Risition",
  description:
    "RiseUI is a Flutter UI library — opinionated defaults, composition, and native Material widgets.",
  openGraph: {
    title: "RiseUI | Risition",
    description:
      "A clean, minimal API for Flutter: variants, sizes, and smooth interaction states out of the box.",
    url: "https://www.risition.com/riseui",
  },
};

export default function RiseUIPage() {
  return (
    <main className="relative flex min-h-screen flex-col overflow-hidden bg-black text-white">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_20%,rgba(167,139,250,0.18),transparent_40%),radial-gradient(circle_at_85%_30%,rgba(109,40,217,0.12),transparent_35%)]" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.02),transparent_30%)]" />

      <div className="mx-auto w-full max-w-3xl flex-1 px-6 pb-16 pt-8 sm:px-10">
        <header className="mb-12">
          <Link
            href="/"
            className="text-sm text-zinc-500 transition hover:text-purple-200"
          >
            ← Risition
          </Link>
        </header>

        <p className="text-sm tracking-[0.28em] text-purple-300/90">FLUTTER UI LIBRARY</p>
        <h1 className="mt-3 bg-gradient-to-r from-white via-white to-purple-200/90 bg-clip-text text-4xl font-semibold tracking-tight text-transparent sm:text-5xl">
          RiseUI
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-zinc-300">
          RiseUI is a Flutter UI library — opinionated defaults, composition, and
          native Material widgets. It brings a{" "}
          <strong className="font-medium text-zinc-200">clean, minimal API</strong>{" "}
          to Flutter: variants, sizes, and smooth interaction states out of the
          box.
        </p>

        <section className="mt-10 rounded-2xl border border-white/[0.08] bg-gradient-to-br from-white/[0.06] to-transparent p-6 sm:p-8">
          <h2 className="text-xs font-medium uppercase tracking-[0.22em] text-zinc-500">
            Goals
          </h2>
          <ul className="mt-5 space-y-3 text-zinc-300">
            <li className="flex gap-3 border-l-2 border-purple-500/40 pl-4">
              Modern, minimal visuals with consistent spacing and typography
            </li>
            <li className="flex gap-3 border-l-2 border-purple-500/40 pl-4">
              <strong className="font-medium text-zinc-200">Flutter-first</strong>{" "}
              APIs (widgets and composition)
            </li>
            <li className="flex gap-3 border-l-2 border-purple-500/40 pl-4">
              Theming via <code className="rounded bg-white/10 px-1.5 py-0.5 text-sm text-purple-200">RiseThemeData</code>{" "}
              and <code className="rounded bg-white/10 px-1.5 py-0.5 text-sm text-purple-200">ThemeExtension</code>
            </li>
            <li className="flex gap-3 border-l-2 border-purple-500/40 pl-4">
              Documented components with copy-paste Dart examples
            </li>
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
            Quick usage
          </h2>
          <pre className="mt-4 overflow-x-auto rounded-xl border border-white/10 bg-black/50 p-4 text-left text-[13px] leading-relaxed text-zinc-300">
            <code>{`MaterialApp(
  theme: ThemeData.light().copyWith(
    extensions: const [RiseThemeData.light],
  ),
  home: RiseButton(
    label: 'Continue',
    onPressed: () {},
  ),
);`}</code>
          </pre>
        </section>

        <p className="mt-8 text-zinc-400">
          Each widget has API notes and examples under{" "}
          <strong className="text-zinc-300">Components</strong> in the docs —
          accordions, buttons, and more with motion tokens and sensible defaults.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href={DOCS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-purple-500 px-8 py-3 text-sm font-medium shadow-[0_0_28px_rgba(168,85,247,0.45)] transition hover:bg-purple-400"
          >
            Documentation
          </a>
          <Link
            href="/#riseui"
            className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm transition hover:border-purple-300/50 hover:text-purple-200"
          >
            Back to home
          </Link>
        </div>

        <p className="mt-8 text-sm text-zinc-600">
          Package:{" "}
          <code className="rounded bg-white/5 px-2 py-1 text-zinc-400">
            rise_ui: ^0.1.0
          </code>{" "}
          — add via pub.dev or path when you integrate in your Flutter app.
        </p>
      </div>
    </main>
  );
}
