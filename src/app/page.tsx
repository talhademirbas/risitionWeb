"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

const reveal: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Home() {
  return (
    <main className="relative overflow-hidden bg-black text-white">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_20%,rgba(167,139,250,0.2),transparent_35%),radial-gradient(circle_at_85%_10%,rgba(109,40,217,0.14),transparent_30%),radial-gradient(circle_at_50%_90%,rgba(147,51,234,0.1),transparent_45%)]" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.03),transparent_25%),linear-gradient(to_top,rgba(168,85,247,0.06),transparent_30%)]" />
      <div className="mx-auto max-w-6xl px-6 pb-24 pt-8 sm:px-10 lg:px-12">
        <motion.header
          variants={reveal}
          initial="hidden"
          animate="show"
          className="sticky top-4 z-20 mb-20 flex items-center justify-between rounded-2xl bg-black/40 px-4 py-3 backdrop-blur-xl"
        >
          <p className="text-lg font-semibold tracking-[0.2em] text-white">RISITION</p>
          <nav className="hidden items-center gap-6 text-sm text-zinc-300 sm:flex">
            <a href="#apps" className="transition hover:text-purple-200">
              Apps
            </a>
            <a href="#contact" className="transition hover:text-purple-200">
              Contact
            </a>
          </nav>
        </motion.header>

        <section className="pb-24">
          <motion.div
            variants={reveal}
            initial="hidden"
            animate="show"
            transition={{ delay: 0.15 }}
            className="max-w-3xl space-y-8"
          >
            <p className="text-sm tracking-[0.28em] text-purple-300">INDIE APP STUDIO</p>
            <h1 className="bg-gradient-to-r from-white via-white to-purple-200 bg-clip-text text-5xl font-semibold leading-tight text-transparent sm:text-6xl">
              Lame apps.. No more.
            </h1>
            <p className="max-w-xl text-lg text-zinc-300">
              Risition is an indie app studio. We will make app store great
              again.
            </p>
          </motion.div>
        </section>

        <motion.section
          id="apps"
          variants={reveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="space-y-8 py-14"
        >
          <h2 className="text-3xl font-semibold">Apps</h2>
          <Link
            href="/align"
            className="group relative block cursor-pointer overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.05] to-white/[0.01] p-8 pt-16 shadow-[0_0_50px_rgba(168,85,247,0.14)] outline-none transition duration-300 hover:-translate-y-0.5 hover:border-purple-400/45 hover:shadow-[0_0_60px_rgba(168,85,247,0.22)] focus-visible:ring-2 focus-visible:ring-purple-400/60 sm:pt-8 sm:pr-44"
          >
            <div className="pointer-events-none absolute -right-16 -top-12 h-44 w-44 rounded-full bg-purple-500/25 blur-3xl transition duration-500 group-hover:bg-purple-400/30" />
            <div className="pointer-events-none absolute -bottom-20 left-10 h-44 w-44 rounded-full bg-violet-500/15 blur-3xl transition duration-500 group-hover:bg-violet-400/20" />
            <div className="absolute right-4 top-4 rounded-full border border-amber-400/35 bg-amber-500/10 px-3 py-1.5 text-xs font-medium uppercase tracking-[0.15em] text-amber-200">
              Under construction
            </div>
            <p className="text-sm uppercase tracking-[0.2em] text-purple-300 transition group-hover:text-purple-200">
              AI + Productivity App
            </p>
            <h3 className="mt-4 text-3xl font-semibold sm:text-4xl">Align</h3>
            <p className="mt-4 max-w-2xl text-zinc-300 transition group-hover:text-zinc-200">
              A fresh, everyday AI companion for planning, prioritizing, and
              finishing what matters.
            </p>
          </Link>
        </motion.section>

        <motion.section
          id="contact"
          variants={reveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="rounded-3xl border border-white/10 bg-gradient-to-br from-black/70 to-zinc-900/70 p-8 shadow-[0_0_40px_rgba(168,85,247,0.08)] sm:p-12"
        >
          <h2 className="text-3xl font-semibold">Contact</h2>
          <p className="mt-4 max-w-2xl text-zinc-300">
            Questions or ideas? Drop a note — we read everything.
          </p>
          <form className="mt-8 grid gap-4 sm:grid-cols-2">
            <input
              type="text"
              placeholder="Name"
              className="rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 outline-none ring-purple-300/70 transition placeholder:text-zinc-500 focus:border-purple-300/40 focus:ring-2"
            />
            <input
              type="email"
              placeholder="Email"
              className="rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 outline-none ring-purple-300/70 transition placeholder:text-zinc-500 focus:border-purple-300/40 focus:ring-2"
            />
            <textarea
              rows={4}
              placeholder="Your message"
              className="rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 outline-none ring-purple-300/70 transition placeholder:text-zinc-500 focus:border-purple-300/40 focus:ring-2 sm:col-span-2"
            />
            <button
              type="button"
              className="sm:col-span-2 rounded-xl bg-purple-500 px-6 py-3 font-medium shadow-[0_0_30px_rgba(168,85,247,0.45)] transition hover:bg-purple-400"
            >
              Send Inquiry
            </button>
          </form>
        </motion.section>
      </div>
    </main>
  );
}
