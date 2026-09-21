import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import "./landing.css";

const STORE_URL =
  "https://apps.apple.com/us/app/align-ai-planner-to-do-list/id6758886076";

export const metadata: Metadata = {
  title: "Align: Daily Planner & To Do List",
  description:
    "Planning your day should be simple, not overwhelming. Align helps you organise your tasks without the clutter.",
  openGraph: {
    title: "Align: Daily Planner & To Do List",
    description:
      "From overwhelmed to organised. Speak or type your tasks, put them on the clock, and get through your day.",
    url: "/align",
    siteName: "Risition",
    type: "website",
    images: [{ url: "/align/appicon.png" }],
  },
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
    <a className={className} href={STORE_URL}>
      <AppleMark />
      View on the App Store
    </a>
  );
}

export default function AlignPage() {
  return (
    <main className="align-landing">
      <div className="hero">
        <div className="hero-inner">
          <div className="hero-top">
            <Image
              src="/align/appicon.png"
              alt="Align"
              width={48}
              height={48}
              priority
            />
            <div>
              <p className="name">Align: Daily Planner &amp; To Do List</p>
              <p className="sub">Daily Task Manager</p>
            </div>
          </div>
          <div className="hero-main">
            <h1 className="hero-promise">From overwhelmed to organised.</h1>
            <p className="hero-lede">
              Planning your day should be simple, not overwhelming. Align helps
              you organise your tasks without the clutter.
            </p>
            <StoreCta className="cta" />
          </div>
        </div>
        <div className="hero-shots">
          <p className="platforms">iPhone, iPad</p>
          <div className="shots">
            <img src="/align/ss-todo.png" alt="Daily Planning Made Easy" />
            <img src="/align/ss-speak.png" alt="Speak to save your tasks" />
            <img src="/align/ss-timebox.png" alt="Your day, on a clock" />
            <img src="/align/ss-progress.png" alt="See yourself moving forward" />
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
          <h2>What you can do</h2>
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
            No complicated productivity system. Just a simple way to turn
            scattered tasks into a clear plan.
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
          <div className="close">
            <StoreCta className="cta cta-dark" />
          </div>
        </section>

        <footer className="page-foot">
          <p>© Talha Demirbaş. Align: Daily Planner &amp; To Do List.</p>
          <div className="links">
            <a href={STORE_URL}>App Store</a>
            <Link href="/align/privacy">Privacy Policy</Link>
            <Link href="/align/terms">Terms</Link>
          </div>
        </footer>
      </div>
    </main>
  );
}
