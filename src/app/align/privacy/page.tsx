import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Align — Privacy Policy",
  description: "Privacy Policy for the Align productivity app.",
};

export default function PrivacyPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_0%,rgba(167,139,250,0.12),transparent_45%),radial-gradient(circle_at_100%_40%,rgba(109,40,217,0.08),transparent_40%)]" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.02),transparent_35%)]" />

      <div className="mx-auto max-w-2xl px-6 pb-24 pt-10 sm:px-8">
        <Link
          href="/align"
          className="inline-flex text-sm text-zinc-500 transition hover:text-purple-200"
        >
          ← Back
        </Link>

        <header className="mt-10">
          <p className="text-xs uppercase tracking-[0.2em] text-purple-300/90">
            Align app
          </p>
          <h1 className="mt-2 bg-gradient-to-r from-white to-purple-200/80 bg-clip-text text-3xl font-semibold tracking-tight text-transparent sm:text-4xl">
            Privacy Policy
          </h1>
          <p className="mt-3 text-sm text-zinc-500">
            Last updated: 26 February 2026
          </p>
        </header>

        <article className="mt-10 space-y-10 rounded-2xl border border-white/[0.08] bg-gradient-to-br from-white/[0.04] to-transparent p-6 text-sm leading-relaxed text-zinc-300 sm:p-8">
          <section className="space-y-3">
            <p>
              Align respects your privacy. This Privacy Policy explains how we
              collect, use, and protect your information.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-base font-semibold text-white">
              1. Information We Collect
            </h2>
            <p>
              Depending on how you use the app, we may collect:
            </p>

            <div className="space-y-2">
              <h3 className="font-medium text-zinc-200">a) Account Information</h3>
              <p>Email address (if login exists)</p>
            </div>

            <div className="space-y-2">
              <h3 className="font-medium text-zinc-200">b) User Content</h3>
              <ul className="list-disc space-y-1 pl-5">
                <li>Tasks</li>
                <li>Notes</li>
                <li>Planner entries</li>
                <li>AI prompts</li>
              </ul>
            </div>

            <div className="space-y-2">
              <h3 className="font-medium text-zinc-200">c) Usage Data</h3>
              <ul className="list-disc space-y-1 pl-5">
                <li>App interactions</li>
                <li>Feature usage</li>
                <li>Crash logs</li>
                <li>Device type</li>
                <li>iOS version</li>
              </ul>
            </div>

            <div className="space-y-2">
              <h3 className="font-medium text-zinc-200">d) Subscription Information</h3>
              <p>
                Subscription status is processed via Apple. We do not store your
                payment details.
              </p>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-base font-semibold text-white">
              2. How We Use Information
            </h2>
            <p>We use collected data to:</p>
            <ul className="list-disc space-y-2 pl-5">
              <li>Provide core app functionality</li>
              <li>Improve AI responses</li>
              <li>Improve performance and features</li>
              <li>Maintain app security</li>
              <li>Provide customer support</li>
            </ul>
            <p>We do not sell your personal data.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base font-semibold text-white">3. AI Processing</h2>
            <p>If you use AI features:</p>
            <ul className="list-disc space-y-2 pl-5">
              <li>Your prompts may be processed by third-party AI providers</li>
              <li>Data is processed only to generate responses</li>
              <li>We do not use your data for advertising</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-base font-semibold text-white">4. Data Storage</h2>
            <p>Your data may be stored:</p>
            <ul className="list-disc space-y-2 pl-5">
              <li>Locally on your device</li>
              <li>On secure cloud infrastructure (if applicable)</li>
            </ul>
            <p>
              We implement reasonable safeguards to protect your information.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base font-semibold text-white">
              5. Third-Party Services
            </h2>
            <p>Align may use third-party services such as:</p>
            <ul className="list-disc space-y-2 pl-5">
              <li>Apple (for subscriptions and payments)</li>
              <li>Analytics providers (for app performance)</li>
              <li>AI infrastructure providers</li>
            </ul>
            <p>
              These providers may process limited data necessary to operate the
              service.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base font-semibold text-white">6. Data Retention</h2>
            <p>
              We retain data only as long as necessary to provide the service or
              comply with legal obligations.
            </p>
            <p>
              You may request deletion of your data by contacting us.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base font-semibold text-white">7. Your Rights</h2>
            <p>Depending on your location, you may have rights to:</p>
            <ul className="list-disc space-y-2 pl-5">
              <li>Access your data</li>
              <li>Correct your data</li>
              <li>Delete your data</li>
              <li>Withdraw consent</li>
            </ul>
            <p>Contact us to exercise these rights.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base font-semibold text-white">
              8. Children&apos;s Privacy
            </h2>
            <p>Align is not intended for children under 13.</p>
            <p>We do not knowingly collect data from children.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base font-semibold text-white">
              9. Changes to This Policy
            </h2>
            <p>
              We may update this Privacy Policy. Continued use of the app means
              you accept the changes.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base font-semibold text-white">10. Contact</h2>
            <p>For privacy questions or data requests:</p>
            <p>
              <a
                href="mailto:apphitectbusiness@gmail.com"
                className="font-medium text-purple-300 underline-offset-4 transition hover:text-purple-200 hover:underline"
              >
                apphitectbusiness@gmail.com
              </a>
            </p>
          </section>
        </article>
      </div>
    </main>
  );
}
