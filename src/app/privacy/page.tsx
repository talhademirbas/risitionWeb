import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Align — Privacy Policy",
  description: "Privacy policy for the Align mobile app.",
};

export default function PrivacyPage() {
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
            Privacy Policy
          </h1>
          <p className="mt-3 text-sm text-zinc-500">
            Align app · Updated {updated}
          </p>
        </header>

        <div className="mt-10 space-y-6 rounded-2xl border border-white/[0.08] bg-gradient-to-br from-white/[0.04] to-transparent p-6 text-sm leading-relaxed text-zinc-300 sm:p-8">
          <p>
            This policy describes how we handle information in connection with
            the <strong className="font-medium text-zinc-200">Align</strong>{" "}
            mobile app. It does not describe our marketing website; that may be
            covered by a separate notice if needed.
          </p>
          <p>
            When you use the App, we may process data such as account details you
            enter, content you create in the App, device identifiers needed for
            the App to run, crash logs, and usage analytics to improve the
            experience.
          </p>
          <p>
            We use service providers (for example cloud or analytics vendors)
            where needed to host and operate the App, under agreements that
            protect your information.
          </p>
          <p>
            We do not sell your personal information. Depending on where you
            live, you may have rights to access, correct, or delete certain data.
            Contact us via the Risition site for privacy requests related to the
            App.
          </p>
          <p className="text-zinc-400">
            If the App integrates with Apple or Google services, their policies
            may also apply to how they process data on their side.
          </p>
        </div>

        <p className="mt-8 text-center text-[11px] leading-relaxed text-zinc-600 sm:text-left">
          Placeholder copy for development. Replace with counsel-reviewed privacy
          policy for the Align app before release.
        </p>
      </div>
    </main>
  );
}
