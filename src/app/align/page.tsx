import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ALIGN_APP_ID,
  ALIGN_DESCRIPTION,
  ALIGN_NAME,
  ALIGN_PATH,
  ALIGN_STORE_URL,
  ALIGN_URL,
  SITE_URL,
} from "@/lib/site";
import "./landing.css";

const faqs = [
  {
    question: "What is Align?",
    answer:
      "Align is a daily planner and to-do list by Risition. You speak or type what you need to do, put tasks on a clock, and work from a list you can actually finish.",
  },
  {
    question: "Is Align a daily planner or a to-do list?",
    answer:
      "Both. Align is a daily planner with a to-do list at the centre: plan today, timebox tasks, get reminders, and check them off as you go.",
  },
  {
    question: "Who is Align for?",
    answer:
      "People who put things off, forget tasks, feel scattered, or just want daily tasks to feel easier. It is not a full calendar, team app, or heavy productivity system.",
  },
  {
    question: "Where can I get the Align daily planner?",
    answer:
      "Align is on the App Store for iPhone and iPad. Download Align: Daily Planner & To Do List, made by Risition.",
  },
];

export const metadata: Metadata = {
  title: "Align: Daily Planner & To Do List",
  description: ALIGN_DESCRIPTION,
  keywords: [
    "Align daily planner",
    "Align to do list",
    "daily planner iPhone",
    "to do list iPad",
    "Risition",
    "timebox tasks",
  ],
  alternates: { canonical: ALIGN_PATH },
  itunes: {
    appId: ALIGN_APP_ID,
    appArgument: ALIGN_URL,
  },
  openGraph: {
    title: ALIGN_NAME,
    description: ALIGN_DESCRIPTION,
    url: ALIGN_PATH,
    siteName: "Risition",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/align/appicon.png",
        alt: "Align daily planner app icon",
        width: 1024,
        height: 1024,
      },
    ],
  },
  twitter: {
    card: "summary",
    title: ALIGN_NAME,
    description: ALIGN_DESCRIPTION,
    images: ["/align/appicon.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      name: ALIGN_NAME,
      alternateName: ["Align", "Align daily planner"],
      applicationCategory: "ProductivityApplication",
      operatingSystem: "iOS, iPadOS",
      url: ALIGN_URL,
      downloadUrl: ALIGN_STORE_URL,
      installUrl: ALIGN_STORE_URL,
      image: `${SITE_URL}/align/appicon.png`,
      screenshot: [
        `${SITE_URL}/align/ss-todo.png`,
        `${SITE_URL}/align/ss-speak.png`,
        `${SITE_URL}/align/ss-timebox.png`,
        `${SITE_URL}/align/ss-progress.png`,
      ],
      description: ALIGN_DESCRIPTION,
      author: {
        "@type": "Organization",
        name: "Risition",
        url: SITE_URL,
      },
      publisher: {
        "@type": "Organization",
        name: "Risition",
        url: SITE_URL,
      },
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
        url: ALIGN_STORE_URL,
      },
    },
    {
      "@type": "WebPage",
      name: ALIGN_NAME,
      url: ALIGN_URL,
      description: ALIGN_DESCRIPTION,
      isPartOf: { "@type": "WebSite", name: "Risition", url: SITE_URL },
      about: { "@type": "SoftwareApplication", name: ALIGN_NAME },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Risition",
          item: SITE_URL,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: ALIGN_NAME,
          item: ALIGN_URL,
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    },
  ],
};

function AppleMark() {
  return (
    <svg
      width="12"
      height="14"
      viewBox="0 0 14 16"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M11.2 8.45c.02 2.25 1.97 3 1.99 3.01-.02.05-.31 1.07-1.03 2.12-.62.9-1.26 1.81-2.27 1.83-.99.02-1.31-.59-2.45-.59s-1.49.57-2.43.61c-.98.04-1.72-.98-2.34-1.88C1.4 11.7.42 8.33 1.73 6.06c.65-1.13 1.81-1.85 3.07-1.87.96-.02 1.86.65 2.45.65s1.68-.8 2.84-.68c.48.02 1.84.2 2.71 1.47-.07.04-1.62.95-1.6 2.82zM9.33 2.37C10.05 1.5 10.4.62 10.3 0c-.75.03-1.65.5-2.19 1.13-.48.56-.9 1.45-.79 2.3.83.06 1.68-.42 2.2-1.06z" />
    </svg>
  );
}

function StoreCta({ className }: { className?: string }) {
  return (
    <a className={className} href={ALIGN_STORE_URL}>
      <AppleMark />
      View on the App Store
    </a>
  );
}

export default function AlignPage() {
  return (
    <main className="align-landing">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="hero">
        <div className="hero-inner">
          <div className="hero-top">
            <Image
              src="/align/appicon.png"
              alt="Align daily planner app icon"
              width={48}
              height={48}
              priority
            />
            <div>
              <h1 className="name">{ALIGN_NAME}</h1>
              <p className="sub">Daily planner by Risition</p>
            </div>
          </div>
          <div className="hero-main">
            <p className="hero-promise">From overwhelmed to organised.</p>
            <p className="hero-lede">
              Align is a daily planner and to-do list for iPhone and iPad.
              Planning your day should be simple, not overwhelming. Speak or
              type your tasks, put them on the clock, and get through your day.
            </p>
            <StoreCta className="cta" />
          </div>
        </div>
        <div className="hero-shots">
          <p className="platforms">iPhone, iPad</p>
          <div className="shots">
            <img src="/align/ss-todo.png" alt="Align daily planner to-do list" />
            <img src="/align/ss-speak.png" alt="Speak to save tasks in Align" />
            <img src="/align/ss-timebox.png" alt="Timebox your day on a clock" />
            <img
              src="/align/ss-progress.png"
              alt="Align weekly progress and streaks"
            />
          </div>
        </div>
      </div>

      <div className="wrap">
        <div className="store-copy">
          <p>
            Speak your tasks or type them. Put them on the clock, get reminders,
            and work from a list you can actually finish.
          </p>
          <p>
            For people who put things off, forget tasks, feel scattered, or just
            want daily tasks to feel easier.
          </p>
        </div>

        <section className="qc-section">
          <div className="qc">
            <div className="qc-copy">
              <p className="qc-kicker">Quick Capture</p>
              <h2>Speak to save your tasks.</h2>
              <p>
                Speak your tasks. Quick Capture saves what you need to do — and
                when.
              </p>
              <p>
                Say what is on your mind. Align turns it into tasks in seconds.
                You can type them too, if you like.
              </p>
              <ol className="qc-steps">
                <li>
                  <span>1</span> Say what you need to do
                </li>
                <li>
                  <span>2</span> Align writes what and when
                </li>
                <li>
                  <span>3</span> Save it to your list
                </li>
              </ol>
            </div>
            <video
              src="/align/preview.mp4"
              autoPlay
              muted
              loop
              playsInline
              poster="/align/ss-speak.png"
              aria-label="Quick Capture app preview"
            />
          </div>
        </section>

        <section>
          <h2>What you can do in this daily planner</h2>
          <ul className="features">
            <li>
              <strong>Quick Capture</strong> — speak what you need to do (and
              when). Align turns it into tasks in seconds
            </li>
            <li>
              <strong>Daily to-do</strong> — add, plan, repeat, and check off
              tasks for today and later
            </li>
            <li>
              <strong>Timebox</strong> — put tasks on a clock so each one has a
              time
            </li>
            <li>
              <strong>Reminders</strong> — we notify you when a task is due
            </li>
            <li>
              <strong>AI assists</strong> — emoji and how long a task might take,
              as you type
            </li>
            <li>
              <strong>Progress</strong> — streaks and a week view of what you did
            </li>
            <li>
              <strong>Home Screen widget</strong> — see today’s tasks without
              opening the app
            </li>
          </ul>
        </section>

        <section className="why">
          <h2>Why we made Align</h2>
          <p className="why-lead">Get your day together, without the hassle.</p>
          <p>
            Align helps you plan your day in seconds, so you know what to focus
            on and what to do next.
          </p>
          <p>
            No complicated productivity system. Just a simple daily planner that
            turns scattered tasks into a clear plan.
          </p>
        </section>

        <section className="fit">
          <h2>Is Align right for me?</h2>
          <p>
            Align is for people who put things off, forget tasks, feel scattered,
            or just want daily tasks to feel easier. Either way, we help you
            start today.
          </p>
          <div className="split">
            <div className="card">
              <h3>It’s for you if</h3>
              <ul>
                <li>You put things off or forget tasks</li>
                <li>You feel scattered or overwhelmed</li>
                <li>You want daily tasks to feel easier</li>
                <li>You want to get organised and start today</li>
              </ul>
            </div>
            <div className="card">
              <h3>It isn’t if</h3>
              <ul>
                <li>You want a big productivity system</li>
                <li>You need a full calendar or a work team app</li>
                <li>You want an app that coaches your whole routine</li>
                <li>You need family sharing or a web planner</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="faq">
          <h2>Questions about Align</h2>
          <dl>
            {faqs.map((faq) => (
              <div key={faq.question} className="faq-item">
                <dt>{faq.question}</dt>
                <dd>{faq.answer}</dd>
              </div>
            ))}
          </dl>
          <div className="close">
            <StoreCta className="cta cta-dark" />
          </div>
        </section>

        <footer className="page-foot">
          <p>
            © Talha Demirbaş. {ALIGN_NAME}.{" "}
            <Link href="/">Risition</Link>
          </p>
          <div className="links">
            <a href={ALIGN_STORE_URL}>App Store</a>
            <Link href="/align/privacy">Privacy Policy</Link>
            <Link href="/align/terms">Terms</Link>
            <Link href="/blog">Blog</Link>
          </div>
        </footer>
      </div>
    </main>
  );
}
