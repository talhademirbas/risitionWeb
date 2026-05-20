import Link from "next/link";
import type { Metadata } from "next";

const CONTACT_EMAIL = "apphitectbusiness@gmail.com";

export const metadata: Metadata = {
  title: "Align — Terms of Use",
  description: "Terms of Use for the Align: Daily Tasks app.",
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
            Last updated: 20 May 2026
          </p>
        </header>

        <article className="mt-10 space-y-10 rounded-2xl border border-white/[0.08] bg-gradient-to-br from-white/[0.04] to-transparent p-6 text-sm leading-relaxed text-zinc-300 sm:p-8">
          <section className="space-y-3">
            <p>
              Welcome to Align! These terms govern your use of our app, website,
              and related services. By accessing or using{" "}
              <strong className="font-medium text-zinc-200">
                Align: Daily Tasks
              </strong>{" "}
              (&quot;Align&quot; or &quot;the app&quot;), you agree to these Terms
              of Use. Please read them carefully.
            </p>
            <p>
              If you have any questions, contact us by emailing{" "}
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="font-medium text-purple-300 underline-offset-4 transition hover:text-purple-200 hover:underline"
              >
                {CONTACT_EMAIL}
              </a>
              .
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base font-semibold text-white">What is Align?</h2>
            <p>
              Align is a productivity app designed to help you organize, plan,
              and complete your daily tasks. It provides to-do planning, daily
              organization tools, and AI-powered assistance. You can access Align
              through our mobile app and related services on risition.com.
            </p>
            <p>
              Align is owned and operated by Risition (&quot;we,&quot;
              &quot;us,&quot; or &quot;our&quot;). By downloading, signing up
              for, or using Align, you agree to the terms outlined here.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base font-semibold text-white">Use of the app</h2>
            <p>
              You may use Align for personal, non-commercial purposes unless we
              agree otherwise in writing.
            </p>
            <p>You agree not to:</p>
            <ul className="list-disc space-y-2 pl-5">
              <li>Use the app for unlawful purposes</li>
              <li>Attempt to reverse engineer, hack, disrupt, or misuse the service</li>
              <li>Abuse or exploit AI features or other parts of the app</li>
            </ul>
            <p>
              We reserve the right to suspend or terminate access if these terms
              are violated.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-base font-semibold text-white">
              Subscriptions and payment
            </h2>
            <p>
              Align may offer auto-renewable subscriptions with different plans
              depending on your preferences and region. Subscription options and
              pricing are shown in the app and on the Apple App Store (or other
              platforms, if applicable).
            </p>

            <div className="space-y-2">
              <h3 className="font-medium text-zinc-200">Free trial</h3>
              <p>
                If we offer a free trial, it will be described in the app or at
                checkout. When a trial ends, your subscription may automatically
                start unless you cancel before the trial period ends, in line with
                the platform where you subscribed (for example, the Apple App
                Store).
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="font-medium text-zinc-200">Recurring payments</h3>
              <p>
                Payment will be charged to your Apple ID account (or other
                payment account on the platform you use) at confirmation of
                purchase. Your subscription will automatically renew unless you
                cancel at least 24 hours before the end of the current billing
                period. Your account may be charged for renewal within 24 hours
                prior to the end of the current period.
              </p>
              <p>
                We do not manage billing directly. Payments and renewals are
                handled by Apple or the platform where you signed up.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="font-medium text-zinc-200">Cancellation</h3>
              <p>
                You can cancel your subscription at any time through the platform
                where you signed up (for example, your Apple ID account settings
                under Subscriptions). Cancellation stops future charges; it does
                not always remove access immediately for the rest of the current
                billing period.
              </p>
              <p>
                Align does not provide refunds for any remaining subscription
                period after cancellation, except where required by law or
                through Apple&apos;s refund process.
              </p>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-base font-semibold text-white">
              AI-generated content
            </h2>
            <p>
              Align may provide AI-generated suggestions, task recommendations, or
              other automated outputs.
            </p>
            <p>AI outputs:</p>
            <ul className="list-disc space-y-2 pl-5">
              <li>Are generated automatically</li>
              <li>May not always be accurate or complete</li>
              <li>
                Should not be relied on for legal, medical, financial, or other
                professional decisions
              </li>
            </ul>
            <p>
              You are responsible for how you use AI-generated content and for
              verifying information before acting on it.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base font-semibold text-white">
              Privacy and data security
            </h2>
            <p>
              We take your privacy and data protection seriously. We only collect
              the minimum personal data necessary to provide our services and
              improve your experience.
            </p>
            <p>
              For more details, please review our{" "}
              <Link
                href="/align/privacy"
                className="font-medium text-purple-300 underline-offset-4 transition hover:text-purple-200 hover:underline"
              >
                Privacy Policy
              </Link>
              .
            </p>

            <h3 className="pt-2 font-medium text-zinc-200">Data security</h3>
            <p>
              We use reasonable industry-standard security measures to protect
              your data from unauthorized access. However, we cannot guarantee
              complete security, as risks such as cyberattacks or other external
              threats exist.
            </p>
            <p>
              By using Align, you acknowledge that no online service is completely
              risk-free, and you agree to use Align at your own discretion.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base font-semibold text-white">
              Maintenance and availability
            </h2>
            <p>
              We are constantly working to improve and update Align. While we
              strive to provide uninterrupted service, there may be occasional
              downtime due to maintenance, updates, or factors beyond our control
              (for example, internet outages or third-party issues). We will do
              our best to notify you of planned maintenance where practical.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base font-semibold text-white">
              Website terms of use
            </h2>
            <p>
              When accessing our website at risition.com (including pages about
              Align), you agree to the following:
            </p>
            <ul className="list-disc space-y-2 pl-5">
              <li>You will not use our website for illegal purposes</li>
              <li>
                You will not attempt to hack, disrupt, or misuse any part of the
                website
              </li>
              <li>
                All content, including text, images, logos, and branding, is
                protected by copyright and may not be used without our permission
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-base font-semibold text-white">
              Content disclaimers
            </h2>
            <p>
              Information on our website and in the app is provided for general
              information and productivity purposes only. While we make
              reasonable efforts to keep content accurate and up to date, we do
              not guarantee its completeness, accuracy, reliability, suitability,
              or availability.
            </p>
            <p>
              Any reliance you place on information provided through Align or our
              website is at your own risk. To the maximum extent permitted by law,
              we disclaim liability for direct, indirect, or consequential loss
              arising from your use of or reliance on that content.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base font-semibold text-white">
              Intellectual property
            </h2>
            <p>
              All app content, branding, design, features, and related materials
              are owned by Risition or its licensors. You may not copy,
              reproduce, distribute, or create derivative works from any part of
              Align without our permission.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base font-semibold text-white">
              Liability and disclaimer of warranties
            </h2>
            <p>
              By using Align, you agree to use the service at your own risk.
              Align is provided &quot;as is&quot; and we disclaim all warranties,
              whether express or implied, to the extent permitted by law.
            </p>
            <p>We are not responsible for:</p>
            <ul className="list-disc space-y-2 pl-5">
              <li>Errors, bugs, or interruptions in our service</li>
              <li>Data loss, missed tasks, or reminders</li>
              <li>Issues caused by third-party providers (for example, Apple)</li>
              <li>Business losses or indirect or consequential damages</li>
              <li>Any loss, damage, or harm caused by your use of Align</li>
            </ul>
            <p>
              We strive to maintain reasonable security standards, but we cannot
              guarantee the prevention of all unauthorized access, data breaches,
              or other external attacks.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base font-semibold text-white">Third-party links</h2>
            <p>
              Our website or app may contain links to third-party websites or
              services. We provide these links for convenience, but we are not
              responsible for the content, privacy practices, or availability of
              those external sites. You access third-party links at your own risk.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base font-semibold text-white">
              Changes to these terms
            </h2>
            <p>
              We may update these Terms of Use periodically to reflect changes in
              our services or legal requirements. If we make significant changes,
              we will notify you by email or through the app where appropriate.
              Your continued use of Align after any updates means you agree to
              the revised terms.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base font-semibold text-white">Contact us</h2>
            <p>If you have questions about these terms, contact us at:</p>
            <p>
              Risition — Align: Daily Tasks
              <br />
              Email:{" "}
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="font-medium text-purple-300 underline-offset-4 transition hover:text-purple-200 hover:underline"
              >
                {CONTACT_EMAIL}
              </a>
            </p>
          </section>
        </article>
      </div>
    </main>
  );
}
