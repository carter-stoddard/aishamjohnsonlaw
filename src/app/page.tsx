import Link from "next/link";
import ConsultationForm from "@/components/ConsultationForm";

export default function Home() {
  return (
    <main className="flex min-h-dvh flex-col items-center px-6 py-14 sm:py-20">
      <div className="amj-enter w-full max-w-[640px]">
        {/* ── Header: logo placeholder, centered, links to amjlaw.com ── */}
        <header className="flex justify-center">
          <a
            href="https://amjlaw.com"
            aria-label="AMJ Law home"
            className="inline-flex h-[64px] w-[180px] items-center justify-center rounded-sm border border-cream/15 text-cream/40"
          >
            {/* [PLACEHOLDER: AMJ Law Logo — cream version] */}
            <span className="font-display text-2xl tracking-[0.2em] text-cream/70">
              AMJ&nbsp;LAW
            </span>
          </a>
        </header>

        {/* ── Hero ── */}
        <section className="relative mt-14 text-center sm:mt-16">
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 -top-6 select-none font-script text-6xl text-mauve/25 sm:text-7xl"
          >
            Aisha
          </span>
          <h1 className="relative font-display text-5xl font-light leading-[1.05] text-cream sm:text-6xl">
            Aisha Johnson
            <span className="mt-1 block text-2xl font-light text-cream/85 sm:text-3xl">
              Attorney at Law
            </span>
          </h1>
          <p className="mt-4 font-display text-lg font-light text-cream/70">
            Beverly Hills, California
          </p>
          <p className="mt-6 font-body text-xs font-bold uppercase tracking-[0.32em] text-rose">
            Schedule Your Consultation
          </p>
        </section>

        {/* ── Intro copy ── */}
        <section className="mx-auto mt-10 max-w-[520px] text-center">
          <p className="font-body text-base leading-relaxed text-cream/80">
            Every matter deserves personal attention. Schedule a confidential
            consultation to discuss your legal needs and find out how I can
            help.
          </p>
        </section>

        {/* ── Consultation form (client component, handles thank-you state) ── */}
        <section className="mt-12">
          <ConsultationForm />
        </section>

        {/* ── Direct contact ── */}
        <section className="mt-12 text-center">
          <p className="font-body text-xs font-bold uppercase tracking-[0.28em] text-rose">
            Prefer to Reach Out Directly?
          </p>
          <div className="mt-5 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-10">
            <a
              href="mailto:aisha@amjlaw.com"
              className="group inline-flex flex-col items-center"
            >
              <span className="font-body text-[11px] uppercase tracking-[0.18em] text-cream/45">
                Email
              </span>
              <span className="mt-1 font-display text-xl font-light text-cream transition-colors group-hover:text-rose">
                aisha@amjlaw.com
              </span>
            </a>
            <span
              aria-hidden="true"
              className="hidden h-8 w-px bg-cream/15 sm:block"
            />
            <a
              href="tel:+13106420408"
              className="group inline-flex flex-col items-center"
            >
              <span className="font-body text-[11px] uppercase tracking-[0.18em] text-cream/45">
                Phone
              </span>
              <span className="mt-1 font-display text-xl font-light text-cream transition-colors group-hover:text-rose">
                (310) 642-0408
              </span>
            </a>
          </div>
        </section>

        {/* ── Micro footer ── */}
        <footer className="mt-14 text-center">
          <nav className="mb-4 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 font-body text-xs text-cream/70">
            <Link href="/privacy" className="transition-colors hover:text-rose">
              Privacy Policy
            </Link>
            <span aria-hidden="true" className="text-cream/25">
              ·
            </span>
            <Link href="/terms" className="transition-colors hover:text-rose">
              Terms &amp; Conditions
            </Link>
            <span aria-hidden="true" className="text-cream/25">
              ·
            </span>
            <Link
              href="/disclaimer"
              className="transition-colors hover:text-rose"
            >
              Legal Disclaimer
            </Link>
          </nav>
          <p className="font-body text-xs text-cream/55">
            © 2026 Law Offices of Aisha M. Johnson · amjlaw.com · Beverly Hills,
            CA
          </p>
          <p className="mt-2 font-body text-[11px] italic text-cream/40">
            Attorney advertising. Prior results do not guarantee a similar
            outcome.
          </p>
        </footer>
      </div>
    </main>
  );
}
