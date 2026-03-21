import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Align — Terms of Use",
  description: "Terms of Use for the Align productivity app.",
};

export default function TermsPage() {
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
            Terms of Use
          </h1>
          <p className="mt-3 text-sm text-zinc-500">
            Last updated: 26 February 2026
          </p>
        </header>

        <article className="mt-10 space-y-10 rounded-2xl border border-white/[0.08] bg-gradient-to-br from-white/[0.04] to-transparent p-6 text-sm leading-relaxed text-zinc-300 sm:p-8">
          <section className="space-y-3">
            <h2 className="text-base font-semibold text-white">Welcome to Align</h2>
            <p>
              Align is a productivity application that provides to-do planning,
              daily organization tools, and AI-powered assistance.
            </p>
            <p>
              By downloading or using Align, you agree to these Terms of Use.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base font-semibold text-white">1. Use of the App</h2>
            <p>
              You may use Align for personal, non-commercial purposes only.
            </p>
            <p>You agree not to:</p>
            <ul className="list-disc space-y-2 pl-5 text-zinc-300">
              <li>Use the app for unlawful purposes</li>
              <li>Attempt to reverse engineer or disrupt the service</li>
              <li>Abuse or exploit the AI features</li>
            </ul>
            <p>
              We reserve the right to suspend accounts that violate these terms.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base font-semibold text-white">
              2. Subscriptions &amp; Payments
            </h2>
            <p>Align offers auto-renewable subscriptions.</p>
            <p>
              Payment will be charged to your Apple ID account at confirmation of
              purchase.
            </p>
            <p>
              Subscriptions automatically renew unless cancelled at least 24 hours
              before the end of the current billing period.
            </p>
            <p>
              Your account will be charged for renewal within 24 hours prior to the
              end of the current period.
            </p>
            <p>
              You can manage or cancel your subscription anytime in your Apple ID
              account settings.
            </p>
            <p>
              We do not manage billing directly. All payments are handled by Apple.
            </p>
            <p>
              No refunds are provided except through Apple&apos;s refund process.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base font-semibold text-white">
              3. AI-Generated Content
            </h2>
            <p>Align may provide AI-generated suggestions or task recommendations.</p>
            <p>AI outputs:</p>
            <ul className="list-disc space-y-2 pl-5">
              <li>Are generated automatically</li>
              <li>May not always be accurate</li>
              <li>
                Should not be relied upon for legal, medical, or financial decisions
              </li>
            </ul>
            <p>
              You are responsible for how you use AI-generated content.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base font-semibold text-white">
              4. Intellectual Property
            </h2>
            <p>
              All app content, branding, design, and features are owned by Align.
            </p>
            <p>
              You may not copy, reproduce, or distribute any part of the app
              without permission.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base font-semibold text-white">5. Termination</h2>
            <p>
              We may suspend or terminate access if these Terms are violated.
            </p>
            <p>You may stop using the app at any time.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base font-semibold text-white">
              6. Limitation of Liability
            </h2>
            <p>
              Align is provided &quot;as is&quot; without warranties of any kind.
            </p>
            <p>We are not liable for:</p>
            <ul className="list-disc space-y-2 pl-5">
              <li>Data loss</li>
              <li>Missed tasks or reminders</li>
              <li>Business losses</li>
              <li>Indirect or consequential damages</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-base font-semibold text-white">
              7. Changes to These Terms
            </h2>
            <p>
              We may update these Terms occasionally. Continued use of the app
              means you accept the updated Terms.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base font-semibold text-white">8. Contact</h2>
            <p>If you have questions, contact us at:</p>
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
