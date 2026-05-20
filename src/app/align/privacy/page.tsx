import Link from "next/link";
import type { Metadata } from "next";

const CONTACT_EMAIL = "apphitectbusiness@gmail.com";

export const metadata: Metadata = {
  title: "Align — Privacy Policy",
  description: "Privacy Policy for the Align: Daily Tasks app.",
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
            Last updated: 20 May 2026
          </p>
        </header>

        <article className="mt-10 space-y-10 rounded-2xl border border-white/[0.08] bg-gradient-to-br from-white/[0.04] to-transparent p-6 text-sm leading-relaxed text-zinc-300 sm:p-8">
          <section className="space-y-3">
            <p>
              Your privacy matters to us. At Risition (&quot;Risition,&quot;
              &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), we operate{" "}
              <strong className="font-medium text-zinc-200">
                Align: Daily Tasks
              </strong>{" "}
              (&quot;Align&quot; or &quot;the app&quot;). We are committed to
              protecting your personal information and handling it responsibly.
              This policy explains what data we collect, why we collect it, how
              we use it, and your rights under the General Data Protection
              Regulation (GDPR) and other applicable privacy laws.
            </p>
            <p>
              Got questions? Reach out to us anytime at{" "}
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
            <h2 className="text-base font-semibold text-white">Who we are</h2>
            <p>
              We are Risition, an indie app studio that builds Align to help you
              organize, plan, and complete your daily tasks. We are responsible
              for keeping your personal data secure and ensuring it is processed
              in line with GDPR.
            </p>
            <p>
              We work with trusted third-party providers (such as Apple for
              subscriptions, cloud hosting, analytics, and AI services) to deliver
              Align. When we share your data with them, we require that they
              handle it with the same care and legal compliance we do.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-base font-semibold text-white">
              What data we collect
            </h2>
            <p>
              We only collect what is necessary to provide and improve Align.
              Here is what we may collect:
            </p>

            <div className="space-y-2">
              <h3 className="font-medium text-zinc-200">Information you provide</h3>
              <ul className="list-disc space-y-1 pl-5">
                <li>Email address (if you create an account or contact support)</li>
                <li>Tasks, notes, planner entries, and other content you create in the app</li>
                <li>AI prompts and related input when you use AI features</li>
                <li>Subscription status and related account details</li>
              </ul>
            </div>

            <div className="space-y-2">
              <h3 className="font-medium text-zinc-200">Payment data</h3>
              <p>
                We work with third-party payment processors (such as the Apple
                App Store) to handle subscriptions. Depending on your location
                and payment method, we may receive limited payment-related
                information to manage your subscription (for example, whether a
                subscription is active). We do not store your full payment card
                details; all payment transactions are handled securely by Apple
                or other payment partners.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="font-medium text-zinc-200">Automatically collected data</h3>
              <p>When you use Align or our website, we may automatically collect:</p>
              <ul className="list-disc space-y-1 pl-5">
                <li>Device information (for example, device type and operating system)</li>
                <li>IP address</li>
                <li>Approximate location (based on your IP address)</li>
                <li>Usage data (for example, how you interact with the app or website)</li>
                <li>Crash logs and technical diagnostics to fix issues</li>
              </ul>
              <p>
                Crash and diagnostic data is used to improve stability and may not
                always be linked to you personally.
              </p>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-base font-semibold text-white">
              Why we collect your data
            </h2>
            <p>We collect your data to:</p>
            <ul className="list-disc space-y-2 pl-5">
              <li>Provide and improve Align&apos;s core features (tasks, planning, and AI assistance)</li>
              <li>Manage your subscription and account</li>
              <li>Communicate updates, support responses, and important service notices</li>
              <li>Ensure the security, reliability, and stability of the app</li>
            </ul>
            <p>
              We will not use your data for unrelated purposes without your
              consent.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base font-semibold text-white">AI processing</h2>
            <p>If you use AI features in Align:</p>
            <ul className="list-disc space-y-2 pl-5">
              <li>Your prompts and related content may be processed by third-party AI providers</li>
              <li>Data is processed only to generate suggestions or responses for you</li>
              <li>We do not use your content for advertising</li>
              <li>We do not sell your personal data</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-base font-semibold text-white">Data sharing</h2>
            <p>
              We do not sell your personal data. However, we may share your data
              with trusted third-party providers who help us deliver and improve
              Align. These providers process your data on our behalf and are
              required to comply with GDPR and keep your data safe.
            </p>
            <p>We may share data with:</p>
            <ul className="list-disc space-y-2 pl-5">
              <li>Apple (and other app store partners, if applicable) to manage subscriptions and payments</li>
              <li>Cloud and hosting providers to store and sync your data securely</li>
              <li>Analytics services to understand how users engage with Align and improve the service</li>
              <li>AI infrastructure providers to power AI features you choose to use</li>
            </ul>
            <p>
              In some cases, your data may be processed outside the EU/EEA. When
              this happens, we ensure your data is protected by:
            </p>
            <ul className="list-disc space-y-2 pl-5">
              <li>Standard Contractual Clauses approved by the European Commission</li>
              <li>Other equivalent safeguards in compliance with GDPR</li>
            </ul>
            <p>
              We only share the minimum amount of data necessary for these
              providers to perform their tasks.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base font-semibold text-white">
              Children&apos;s privacy
            </h2>
            <p>
              Align is designed for individuals who want to organize their daily
              tasks, and we take protecting children&apos;s personal information
              seriously.
            </p>
            <p>
              Align is not intended for children under 13 years of age. If a child
              under 13 uses Align, their account should be created and supervised
              by a parent or legal guardian, who provides consent for processing
              the child&apos;s data.
            </p>
            <p>
              We do not knowingly collect personal data from children without
              appropriate parental consent. If we become aware that a child has
              provided personal information without consent, we will delete that
              information promptly.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base font-semibold text-white">
              How we keep your data safe
            </h2>
            <p>
              We take security seriously and use reasonable industry-standard
              measures to protect your data from unauthorized access, loss, or
              misuse. These measures may include encryption, access controls, and
              secure infrastructure practices.
            </p>
            <p>
              However, no system is completely secure. We encourage you to protect
              your account by keeping login details private. By using Align, you
              acknowledge the risks associated with transmitting data online.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base font-semibold text-white">
              Legal basis for processing
            </h2>
            <p>We process your personal data based on:</p>
            <ul className="list-disc space-y-2 pl-5">
              <li>Your agreement to use Align when you sign up or use the app</li>
              <li>Our legal obligations to protect your data and comply with applicable law</li>
              <li>
                Our legitimate interest in improving Align, as long as it does
                not override your rights
              </li>
              <li>Your consent, where required (for example, for certain optional features)</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-base font-semibold text-white">
              Who can access your data?
            </h2>
            <p>
              We do not sell your personal data. We share data only with trusted
              partners who help us operate Align, including payment processing,
              technical infrastructure, analytics, and AI services. All partners
              are required to comply with GDPR and protect your data. Where data
              is processed outside the EU/EEA, we apply equivalent safeguards as
              described above.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base font-semibold text-white">
              Cookies and tracking
            </h2>
            <p>
              Our website at risition.com may use cookies and similar technologies
              to improve your experience, understand usage, and deliver relevant
              content. Cookies help us see how visitors interact with our site so
              we can make improvements.
            </p>
            <p>
              The Align mobile app does not use browser cookies in the same way a
              website does, but it may use similar technologies (such as device
              identifiers or analytics SDKs) for performance and usage insights.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base font-semibold text-white">
              How long we keep your data
            </h2>
            <p>
              We keep your data for as long as you have an active account or
              subscription, or as long as needed to provide the service. If you
              cancel or delete your account, we may retain certain data for a
              limited period (for example, up to two years) to resolve disputes,
              comply with legal obligations, or allow you to restore your account.
              After that, we delete or anonymize your data unless we must keep it
              longer by law.
            </p>
            <p>
              You may request earlier deletion by contacting us at the email below.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base font-semibold text-white">
              Your rights under GDPR
            </h2>
            <ul className="list-disc space-y-2 pl-5">
              <li>
                <strong className="font-medium text-zinc-200">Access:</strong> You
                can ask to see the personal data we hold about you.
              </li>
              <li>
                <strong className="font-medium text-zinc-200">Correction:</strong>{" "}
                You can ask us to fix inaccurate or incomplete information.
              </li>
              <li>
                <strong className="font-medium text-zinc-200">Deletion:</strong> You
                can ask us to delete your data when it is no longer needed.
              </li>
              <li>
                <strong className="font-medium text-zinc-200">Restriction:</strong>{" "}
                You can ask us to limit how we process your data.
              </li>
              <li>
                <strong className="font-medium text-zinc-200">Portability:</strong>{" "}
                You can request your data in a machine-readable format.
              </li>
              <li>
                <strong className="font-medium text-zinc-200">Objection:</strong> You
                can object to certain types of processing, such as marketing.
              </li>
              <li>
                <strong className="font-medium text-zinc-200">Withdraw consent:</strong>{" "}
                You can withdraw your consent at any time where processing is
                based on consent.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-base font-semibold text-white">
              How to exercise your rights
            </h2>
            <p>
              To make a request, email us at{" "}
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="font-medium text-purple-300 underline-offset-4 transition hover:text-purple-200 hover:underline"
              >
                {CONTACT_EMAIL}
              </a>
              . We will handle your request within one month. If your request is
              complex, we may need more time, but we will let you know.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base font-semibold text-white">
              Updates to this privacy policy
            </h2>
            <p>
              We may update this policy from time to time to reflect changes in
              Align, our practices, or legal requirements. If we make significant
              changes, we will notify you by email or through the app where
              appropriate. Continuing to use Align after an update means you agree
              to the revised policy.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base font-semibold text-white">Contact us</h2>
            <p>
              If you have any questions or concerns about this policy or your
              personal data, contact us at:
            </p>
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
