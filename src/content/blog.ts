export type BlogSubsection = {
  heading: string;
  paragraphs: string[];
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  /** Cover photo (header + cards). Use a stable HTTPS URL (e.g. Unsplash). */
  coverImage: string;
  coverAlt: string;
  /** Opening paragraphs (shown before optional subsections). */
  paragraphs: string[];
  /** Optional grouped sections with headings — improves scanability. */
  subsections?: BlogSubsection[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "your-app-doesnt-feel-slow-it-feels-dishonest",
    title: "Your App Doesn't Feel Slow — It Feels Dishonest",
    excerpt:
      "Benchmarks lie. Users decide in the first 200ms whether your mobile app feels premium or abandoned. Here's what actually registers as \"fast\" on a phone.",
    date: "2026-03-18",
    category: "Mobile",
    coverImage:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1600&q=85&auto=format&fit=crop",
    coverAlt: "Hands holding a smartphone with a colorful app screen",
    paragraphs: [
      "We obsess over cold start times and frame averages, but nobody walks away saying \"that app scored 58fps on a spreadsheet.\" They walk away with a feeling: either the interface answers the moment your thumb expects it, or something is off — even when the numbers say you're fine.",
    ],
    subsections: [
      {
        heading: "Where \"slow\" really comes from",
        paragraphs: [
          "On mobile, dishonesty shows up as mismatched feedback. You tap; nothing moves for a beat; then three things animate at once. Or a sheet slides in while the keyboard is still deciding whether it exists. The OS trained people to expect cause and effect in the same gesture — when that chain breaks, \"slow\" is the only word they have.",
        ],
      },
      {
        heading: "What to fix first",
        paragraphs: [
          "Indie teams win here by sequencing honestly: acknowledge input immediately (even a micro-state), never ship empty skeletons that pretend content loaded, and treat scroll physics as part of brand.",
          "Speed isn't the metric — trust is. Fix the honesty, and the app suddenly feels \"fast\" without a single new server.",
        ],
      },
    ],
  },
  {
    slug: "we-killed-the-tutorial-onboarding-got-better",
    title: "We Killed the Tutorial — and Onboarding Got Better",
    excerpt:
      "Full-screen walkthroughs aren't education; they're a tax on curiosity. A tighter UX pattern is to let people fail in place — with guardrails — instead of front-loading every rule.",
    date: "2026-03-10",
    category: "UX",
    coverImage:
      "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=1600&q=85&auto=format&fit=crop",
    coverAlt: "UX sketches and interface wireframes on paper",
    paragraphs: [
      "The best mobile UX doesn't celebrate how much you taught; it celebrates how little you had to. Users aren't stupid — they're busy. When the first screen is a carousel of features they haven't earned context for yet, you're not onboarding them; you're delaying their first success.",
    ],
    subsections: [
      {
        heading: "Teach in context, not in slides",
        paragraphs: [
          "What works now is progressive disclosure tied to intent: show one control when it matters, dim the rest, and let muscle memory compound. Tooltips that appear on pause, not on launch. Defaults that are good enough to ship a first task in under ten seconds.",
          "The goal isn't zero confusion — it's confusion in the right room.",
        ],
      },
      {
        heading: "Measure what matters",
        paragraphs: [
          "Measure onboarding by time-to-first meaningful action, not slide completion. If someone finishes your tour and still doesn't know what to tap, the tour lost.",
          "Kill it, ship the empty state with a single suggested move, and watch retention climb — not because you taught more, but because you stopped talking over the app.",
        ],
      },
    ],
  },
  {
    slug: "ai-agents-rewired-how-we-build-mobile-apps",
    title: "AI Agents Rewired How We Build Mobile Apps — Not Who Builds Them",
    excerpt:
      "Autonomous loops are in the repo now: codegen, tests, triage, even release notes. The shift isn't \"fewer developers\" — it's a different split between taste and throughput.",
    date: "2026-03-02",
    category: "Future",
    coverImage:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1600&q=85&auto=format&fit=crop",
    coverAlt: "Abstract AI neural network visualization with glowing nodes",
    paragraphs: [
      "For mobile, \"AI\" stopped being a chat window in the corner. Agents — systems that plan, act, and retry inside guardrails — are now part of the delivery pipeline: scaffolding screens, generating snapshot tests, chasing flaky UI tests, drafting copy for empty states, and proposing diffs when crash spikes cluster.",
      "That changes the job. The bottleneck used to be typing; now it's judgment about what should exist at all.",
    ],
    subsections: [
      {
        heading: "What actually changed",
        paragraphs: [
          "Specs move faster from napkin to build: you still own the product call, but the first implementation pass arrives in hours, not days. Test coverage stops being a heroic weekend — agents iterate on failing cases the way juniors used to, except they don't sleep and they don't take offense at review.",
          "Localization and accessibility drafts show up early, which surfaces awkward strings before they ship. CI gets chatty in a good way: bots that summarize diffs, flag risky API usage, and nag about missing privacy strings before App Review does.",
        ],
      },
      {
        heading: "What didn't get easier",
        paragraphs: [
          "Agents amplify sloppiness. Feed them a vague feature, you get a confident wrong architecture. Secrets, signing, entitlements, and keychain flows are still human territory — the parts where \"almost right\" is indistinguishable from malware until it's too late.",
          "Apple's bar didn't move. Review still punishes ambiguity, and users still punish jank. The craft of motion, hierarchy, and offline behavior is more valuable, not less — because generic AI output all looks the same after a week.",
        ],
      },
      {
        heading: "Where this is heading",
        paragraphs: [
          "Teams compress: fewer people ship more surface area, but the senior role skews toward taste, risk, and editing — curating what the agents produce. The indie advantage isn't access to models; it's a point of view users can feel in the pixels.",
          "The future isn't unmanned apps. It's smaller crews with louder standards — and agents that finally made grunt work too cheap to romanticize.",
        ],
      },
    ],
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
