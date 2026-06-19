# AMJ Law — Consultation Booking Page

Single-purpose landing page for the Law Offices of Aisha M. Johnson. A visitor
arrives, reads a short intro, and books a confidential consultation. That's the
only job.

Built with **Next.js (App Router) + TypeScript + Tailwind CSS**. Consultation
form emails leads to Aisha via **Resend**.

## Run it locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Make the form send real emails

The form works out of the box (it shows the thank-you screen and logs each
request to the server console). To deliver leads by email:

1. Create a free account at https://resend.com and generate an API key.
2. Copy `.env.example` to `.env.local` and fill in:
   - `RESEND_API_KEY` — your key
   - `CONSULTATION_TO_EMAIL` — the inbox that should receive leads
   - `CONSULTATION_FROM_EMAIL` — a verified sender (use `onboarding@resend.dev`
     for testing; verify the `amjlaw.com` domain in Resend for production)
3. Restart `npm run dev`.

> `.env.local` holds secrets and is never committed to GitHub.

## Before publishing — confirm with Aisha

- Real **email** and **phone** (the spec leaves these as TBD)
- Final **logo** files (cream + plum versions) to replace the placeholder
- Optional attorney **portrait**

> ⚠️ Do **not** use the real estate phone `(310) 621-2219` or RE office address.
> AMJ Law and Aisha Johnson Realty are completely separate brands.
