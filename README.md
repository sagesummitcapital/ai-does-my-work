# AI Does My Work — Web

Marketing site for **AI Does My Work** — an AI-native portfolio transformation company.
A Sage Summit Capital company.

> Replace repetitive work with intelligent systems.

---

## Stack

- **Next.js 15** (App Router) · **React 19** · **TypeScript**
- **Tailwind CSS v3** + custom CSS layer
- **Inter** (body) · **Instrument Serif** (accent headlines) · **JetBrains Mono** (technical)
- **HubSpot** form embed (portal `244871017`)
- **Clerk · Supabase · Stripe** scaffolded for future activation
- Deployed on **Vercel**

## Project structure

```
.
├── app/
│   ├── layout.tsx        # Fonts + metadata
│   ├── page.tsx          # Composes the homepage
│   └── globals.css       # Design system + section styles
├── components/
│   ├── Nav.tsx
│   ├── Wordmark.tsx      # Uses real logo PNG
│   ├── Hero.tsx          # With animated dashboard
│   ├── Sections.tsx      # Problem / Audit / Framework
│   ├── CTA.tsx           # Hosts the HubSpot form
│   ├── HubSpotForm.tsx
│   ├── Footer.tsx        # Clickable Sage Summit Capital link
│   └── Reveal.tsx        # Scroll-triggered fade-in
├── lib/
│   ├── cn.ts
│   ├── supabase.ts       # Scaffolded
│   └── stripe.ts         # Scaffolded
├── middleware.ts         # Clerk middleware stub
├── public/
│   ├── assets/aidmw-mark.png
│   └── robots.txt
├── tailwind.config.ts
├── next.config.ts
├── tsconfig.json
├── .env.example
└── vercel.json
```

## Sections

| # | Section | Purpose |
|---|---|---|
| Hero | The pitch + animated operational dashboard | First impression, primary CTA |
| 01 | The Shift (Problem) | Before/after — traditional vs AI-native |
| 02 | The AI Infrastructure Audit | 6 deliverables in a card grid |
| 03 | Framework | 4-step Analyze → Identify → Transform → Scale |
| CTA | HubSpot audit booking form | The single conversion point |

The site is intentionally short: 5 main blocks, every CTA points to the HubSpot form.

## Brand system

The brand mark is the real PNG at `public/assets/aidmw-mark.png` (the triangular green logo). It is used in nav, hero dashboard chrome, footer, and as the favicon.

Color tokens are in `tailwind.config.ts` and CSS variables in `globals.css`:

```
--c-green:        #1DBF73   Primary brand green (on white)
--c-green-bright: #3EF3A2   Bright accent
--c-green-deep:   #0E7C4A   Darker text/border accent
--c-green-ink:    #063D24   Deepest green (rare)
--c-green-haze:   #F0FDF4   Light wash
--c-canvas:       #FFFFFF
--c-paper:        #FAFBFC
--c-haze:         #F3F6F4
```

Headlines use a gradient treatment:
- `.gradient-headline` — soft top-to-bottom ink gradient on the base headline text
- `.gradient-accent` — vivid green gradient on accent words
- `.gradient-accent--underline` — adds a subtle shimmer underline

## Getting started

```bash
npm install
cp .env.example .env.local
npm run dev          # http://localhost:3000
```

## Scripts

| Script | What |
| --- | --- |
| `npm run dev` | Dev server on :3000 |
| `npm run build` | Production build |
| `npm run start` | Run production build locally |
| `npm run lint` | ESLint |
| `npm run type-check` | TypeScript check |

## Deploy to Vercel

```bash
npx vercel
```

Or connect the GitHub repo at vercel.com. No build config needed — Vercel auto-detects Next.js. Set `NEXT_PUBLIC_SITE_URL` in env vars once your domain is attached.

## Activating Clerk / Supabase / Stripe

The stack is wired but inactive on the marketing site. To turn each on:

- **Clerk**: set keys in `.env.local`, replace the no-op export in `middleware.ts` with the commented `clerkMiddleware` block, wrap `app/layout.tsx` body with `<ClerkProvider>`.
- **Supabase**: set the three `*_SUPABASE_*` env vars, then `import { supabase } from "@/lib/supabase"`.
- **Stripe**: set the three `STRIPE_*` env vars, then use `import { stripe } from "@/lib/stripe"` in route handlers.

## License

Proprietary. See `LICENSE`.
