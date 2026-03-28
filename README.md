This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Contact form (email)

Messages go to **talhaademirbas@gmail.com** by default. The form uses [Resend](https://resend.com).

1. Copy `.env.example` to `.env.local`.
2. Add `RESEND_API_KEY` from the Resend dashboard.
3. For local testing, Resend’s default sender `onboarding@resend.dev` can send to your Resend account email; for production, add a domain in Resend and set `RESEND_FROM_EMAIL` (e.g. `Risition <hello@yourdomain.com>`).

On Vercel: **Project → Settings → Environment Variables** — add `RESEND_API_KEY` (and optional `CONTACT_TO_EMAIL`, `RESEND_FROM_EMAIL`).

### RiseUI docs — `https://www.risition.com/riseui/docs/`

Visitors only ever see **`/riseui/docs/`** on this domain (no `/apps` in the path). The docs Next app is built from the **public** `riseUI` GitHub repo; Vercel’s “Root Directory” may be `apps/docs` inside that repo — that is **not** part of the public URL.

1. Deploy the docs as its own Vercel project from `riseUI`. Copy the deployment URL including `/riseui/docs`, e.g. `https://<riseui-docs>.vercel.app/riseui/docs`.
2. On **this** project, set **`RISEUI_DOCS_URL`** to that value (see `.env.example`).
3. Redeploy **risitionWeb** once after setting or changing the variable. After that, **pushing `riseUI` updates the live docs** without redeploying this site for content-only changes.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
