# AI Does My Work

Production website for AI Does My Work — a Sage Summit Capital portfolio company.

## Tech Stack

- Next.js 14 (App Router)
- Tailwind CSS
- TypeScript
- Vercel hosting

## Pages

| Page | Purpose |
|------|---------|
| Home | Hero + value prop + CTA |
| What We Automate | Categories with before/after examples |
| How It Works | 4-step process |
| Case Examples | Real implementation outcomes |
| About | Operator background |
| Request Audit | HubSpot form (conversion page) |

## Local Development

```bash
npm install
npm run dev
```

## HubSpot Form Setup

1. Create form in HubSpot with fields:
   - Name
   - Company
   - Email
   - Revenue Range (dropdown)
   - Industry
   - Biggest Manual Bottleneck (textarea)

2. Get Portal ID and Form ID from HubSpot

3. Update `/src/app/request-audit/page.tsx`:
   ```tsx
   import { HubSpotForm } from '@/components'
   
   <HubSpotForm 
     portalId="YOUR_PORTAL_ID" 
     formId="YOUR_FORM_ID" 
   />
   ```

## Deployment

```bash
npm run build
vercel --prod
```

## Design Tokens

### Colors
- `dark-950`: #0A0A0B (primary background)
- `dark-850`: #141415 (card backgrounds)
- `dark-700`: #252528 (borders)
- `light-100`: #FFFFFF (headlines)
- `light-400`: #A0A0A8 (body text)
- `accent-500`: #5A8A5A (CTAs, accents)

### Typography
- Font: Inter
- Headlines: font-semibold, tracking-tight
- Body: text-light-400

## Deployment Checklist

- [ ] HubSpot form configured and tested
- [ ] Mobile responsiveness verified
- [ ] CTA visible above fold
- [ ] SEO metadata complete
- [ ] Deploy to Vercel
- [ ] Connect domain
- [ ] SSL verified
- [ ] Form submissions reaching HubSpot
