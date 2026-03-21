import Link from "next/link";
import type { Metadata } from "next";
import { blogPosts } from "@/content/blog";

export const metadata: Metadata = {
  title: "Blog | Risition",
  description:
    "Notes on mobile apps, UX craft, and where indie development is headed.",
};

export default function BlogIndexPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_0%,rgba(167,139,250,0.12),transparent_45%),radial-gradient(circle_at_100%_40%,rgba(109,40,217,0.08),transparent_40%)]" />
      <div className="mx-auto max-w-3xl px-6 pb-24 pt-10 sm:px-8">
        <Link
          href="/"
          className="text-sm text-zinc-500 transition hover:text-purple-200"
        >
          ← Risition
        </Link>
        <header className="mt-10">
          <h1 className="bg-gradient-to-r from-white to-purple-200/80 bg-clip-text text-4xl font-semibold tracking-tight text-transparent">
            Blog
          </h1>
          <p className="mt-3 text-zinc-500">
            Mobile craft, UX, and what&apos;s next.
          </p>
        </header>
        <ul className="mt-12 space-y-6">
          {blogPosts.map((post) => (
            <li key={post.slug}>
              <Link
                href={`/blog/${post.slug}`}
                className="group block rounded-2xl border border-white/[0.08] bg-gradient-to-br from-white/[0.04] to-transparent p-6 transition hover:border-purple-400/35 hover:shadow-[0_0_40px_rgba(168,85,247,0.12)]"
              >
                <p className="text-xs uppercase tracking-[0.2em] text-purple-300/90">
                  {post.category} ·{" "}
                  {new Date(post.date).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </p>
                <h2 className="mt-2 text-xl font-semibold text-white transition group-hover:text-purple-100">
                  {post.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                  {post.excerpt}
                </p>
                <span className="mt-4 inline-block text-sm font-medium text-purple-300 transition group-hover:text-purple-200">
                  Read →
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
