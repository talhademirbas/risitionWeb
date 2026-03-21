import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { blogPosts, getPostBySlug } from "@/content/blog";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Post | Risition" };
  return {
    title: `${post.title} | Risition`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_0%,rgba(167,139,250,0.12),transparent_45%),radial-gradient(circle_at_100%_40%,rgba(109,40,217,0.08),transparent_40%)]" />
      <article className="mx-auto max-w-[42rem] px-6 pb-28 pt-10 sm:px-8">
        <Link
          href="/blog"
          className="text-sm text-zinc-500 transition hover:text-purple-200"
        >
          ← Blog
        </Link>
        <header className="mt-10">
          <p className="text-xs uppercase tracking-[0.2em] text-purple-300/90">
            {post.category} ·{" "}
            {new Date(post.date).toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </p>
          <h1 className="mt-5 text-balance bg-gradient-to-r from-white to-purple-200/80 bg-clip-text text-3xl font-semibold leading-[1.2] tracking-tight text-transparent sm:text-4xl">
            {post.title}
          </h1>
          <p className="mt-8 text-xl font-light leading-relaxed text-zinc-300 sm:text-[1.35rem] sm:leading-[1.65]">
            {post.excerpt}
          </p>
        </header>

        <div className="mt-14 border-t border-white/[0.06] pt-12">
          <div className="space-y-8 text-[1.0625rem] leading-[1.85] text-zinc-300 sm:text-lg sm:leading-[1.8]">
            {post.paragraphs.map((p, i) => (
              <p key={`intro-${i}`}>{p}</p>
            ))}
          </div>

          {post.subsections?.map((section) => (
            <section
              key={section.heading}
              className="mt-12 border-t border-white/[0.06] pt-10"
            >
              <h2 className="text-lg font-semibold tracking-tight text-white sm:text-xl">
                {section.heading}
              </h2>
              <div className="mt-5 space-y-6 text-[1.0625rem] leading-[1.85] text-zinc-300 sm:text-lg sm:leading-[1.8]">
                {section.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </section>
          ))}
        </div>

        <p className="mt-16 border-t border-white/10 pt-8 text-sm text-zinc-600">
          <Link href="/blog" className="text-purple-400 hover:text-purple-300">
            All posts
          </Link>
          {" · "}
          <Link href="/" className="text-purple-400 hover:text-purple-300">
            Home
          </Link>
        </p>
      </article>
    </main>
  );
}
