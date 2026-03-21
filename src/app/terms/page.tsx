import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Align — Terms of Service",
  description: "Terms of service for the Align mobile app.",
};

export default function TermsPage() {
  const updated = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_0%,rgba(167,139,250,0.12),transparent_45%),radial-gradient(circle_at_100%_40%,rgba(109,40,217,0.08),transparent_40%)]" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.02),transparent_35%)]" />

      <div className="mx-auto max-w-2xl px-6 pb-20 pt-10 sm:px-8">
        <Link
          href="/align"
          className="inline-flex text-sm text-zinc-500 transition hover:text-purple-200"
        >
          ← Back
        </Link>

        <header className="mt-10">
          <h1 className="bg-gradient-to-r from-white to-purple-200/80 bg-clip-text text-3xl font-semibold tracking-tight text-transparent sm:text-4xl">
            Terms of Service
          </h1>
          <p className="mt-3 text-sm text-zinc-500">
            Align app · Updated {updated}
          </p>
        </header>

        <div className="mt-10 space-y-6 rounded-2xl border border-white/[0.08] bg-gradient-to-br from-white/[0.04] to-transparent p-6 text-sm leading-relaxed text-zinc-300 sm:p-8">
          <p>
            These terms apply to the{" "}
            <strong className="font-medium text-zinc-200">Align</strong> mobile
            application (the &quot;App&quot;) published by Risition. They do not
            govern our marketing website or other products unless we say so
            elsewhere.
          </p>
          <p>
            By downloading, installing, or using the App, you agree to these
            terms. If you do not agree, do not use the App.
          </p>
          <p>
            The App is provided &quot;as is.&quot; We may ship updates, change
            features, or pause the App for maintenance. We may update these
            terms; continued use after changes means you accept the new terms.
          </p>
          <p>
            You agree not to misuse the App—for example by interfering with its
            operation, circumventing security, or using it in violation of law or
            app store rules.
          </p>
          <p>
            App store providers (such as Apple or Google) are not responsible for
            the App or these terms, except where their standard terms apply to
            you as a user of their store.
          </p>
          <p className="text-zinc-400">
            Questions about the App? Use the contact form on the Risition site.
          </p>
        </div>

        <p className="mt-8 text-center text-[11px] leading-relaxed text-zinc-600 sm:text-left">
          Placeholder copy for development. Replace with counsel-reviewed terms
          for the Align app before release.
        </p>
      </div>
    </main>
  );
}
