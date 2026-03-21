export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  paragraphs: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "your-app-doesnt-feel-slow-it-feels-dishonest",
    title: "Your App Doesn't Feel Slow — It Feels Dishonest",
    excerpt:
      "Benchmarks lie. Users decide in the first 200ms whether your mobile app feels premium or abandoned. Here's what actually registers as \"fast\" on a phone.",
    date: "2026-03-18",
    category: "Mobile",
    paragraphs: [
      "We obsess over cold start times and frame averages, but nobody walks away saying \"that app scored 58fps on a spreadsheet.\" They walk away with a feeling: either the interface answers the moment your thumb expects it, or something is off — even when the numbers say you're fine.",
      "On mobile, dishonesty shows up as mismatched feedback. You tap; nothing moves for a beat; then three things animate at once. Or a sheet slides in while the keyboard is still deciding whether it exists. The OS trained people to expect cause and effect in the same gesture — when that chain breaks, \"slow\" is the only word they have.",
      "Indie teams win here by sequencing honestly: acknowledge input immediately (even a micro-state), never ship empty skeletons that pretend content loaded, and treat scroll physics as part of brand. Speed isn't the metric — trust is. Fix the honesty, and the app suddenly feels \"fast\" without a single new server.",
    ],
  },
  {
    slug: "we-killed-the-tutorial-onboarding-got-better",
    title: "We Killed the Tutorial — and Onboarding Got Better",
    excerpt:
      "Full-screen walkthroughs aren't education; they're a tax on curiosity. A tighter UX pattern is to let people fail in place — with guardrails — instead of front-loading every rule.",
    date: "2026-03-10",
    category: "UX",
    paragraphs: [
      "The best mobile UX doesn't celebrate how much you taught; it celebrates how little you had to. Users aren't stupid — they're busy. When the first screen is a carousel of features they haven't earned context for yet, you're not onboarding them; you're delaying their first success.",
      "What works now is progressive disclosure tied to intent: show one control when it matters, dim the rest, and let muscle memory compound. Tooltips that appear on pause, not on launch. Defaults that are good enough to ship a first task in under ten seconds. The goal isn't zero confusion — it's confusion in the right room.",
      "Measure onboarding by time-to-first meaningful action, not slide completion. If someone finishes your tour and still doesn't know what to tap, the tour lost. Kill it, ship the empty state with a single suggested move, and watch retention climb — not because you taught more, but because you stopped talking over the app.",
    ],
  },
  {
    slug: "on-device-models-will-split-the-app-store-in-two",
    title: "On-Device Models Will Split the App Store in Two",
    excerpt:
      "Cloud-only AI apps are about to feel as heavy as desktop suites on dial-up. The next wave of mobile development isn't bigger models — it's thinner clients with judgment sitting next to the glass.",
    date: "2026-03-02",
    category: "Future",
    paragraphs: [
      "For a decade, \"mobile-first\" meant responsive layouts and smaller payloads. The next split is architectural: apps that can reason offline, on-device, with zero round-trip latency — versus apps that still pipe every keystroke to a datacenter for a spinner salad. Users won't compare feature lists; they'll compare who feels present when the network isn't.",
      "That changes how teams ship: smaller binaries matter again, but so does battery honesty and privacy posture — not as legal checkboxes, but as product vibes. An app that says \"your data stays on your phone\" and means it wins trust in markets where every notification already feels like surveillance.",
      "The future isn't \"AI in every app\" generically — it's hybrid stacks where the cloud does heavy training and the phone does taste, timing, and tact. Builders who treat the device as a first-class brain, not a thin remote, will own categories that still look like gimmicks today. The App Store won't double in size; it'll fork: instant utilities on one side, laggy dashboards on the other.",
    ],
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
