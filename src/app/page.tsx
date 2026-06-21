import Link from "next/link";
import Image from "next/image";
import ConsultationForm from "@/components/ConsultationForm";

const PRACTICE_AREAS = [
  {
    title: "Business & Corporate Law",
    blurb:
      "Formation, governance, and the everyday decisions that keep a company on solid ground.",
  },
  {
    title: "Contract Review & Drafting",
    blurb:
      "Clear, enforceable agreements — carefully drafted, reviewed, and negotiated.",
  },
  {
    title: "Real Estate Law",
    blurb:
      "Purchases, leases, and property matters handled with diligence and discretion.",
  },
  {
    title: "Estate Planning",
    blurb:
      "Wills, trusts, and thoughtful plans that protect the people and things you value.",
  },
  {
    title: "General Counsel & Consultation",
    blurb:
      "Ongoing, trusted guidance for whatever legal questions arise — on call when you need it.",
  },
];

const STEPS = [
  {
    title: "Request a Consultation",
    blurb: "Tell me a little about your matter using the form below.",
  },
  {
    title: "A Confidential Conversation",
    blurb: "We discuss your situation privately, with no obligation.",
  },
  {
    title: "A Clear Path Forward",
    blurb: "You leave with honest guidance and clear next steps.",
  },
];

export default function Home() {
  return (
    <main className="flex min-h-dvh flex-col items-center px-6 py-14 sm:py-20">
      <div className="amj-enter w-full max-w-[640px]">
        {/* ── Header: logo placeholder, centered, links to amjlaw.com ── */}
        <header className="flex justify-center">
          <a
            href="https://amjlaw.com"
            aria-label="Law Offices of Aisha M. Johnson — home"
            className="inline-flex items-center justify-center"
          >
            <Image
              src="/images/logo.png"
              alt="Law Offices of Aisha M. Johnson, A Professional Corporation"
              width={1920}
              height={600}
              priority
              className="h-auto w-[380px] sm:w-[500px]"
            />
          </a>
        </header>

        {/* ── Hero ── */}
        <section className="mt-8 text-center sm:mt-10">
          <h1 className="mx-auto max-w-[560px] font-display text-3xl font-light leading-snug text-cream sm:text-4xl">
            Considered counsel for business, property, and life&apos;s important
            decisions.
          </h1>
        </section>

        {/* ── Practice areas ── */}
        <section className="mt-16 sm:mt-20">
          <p className="text-center font-body text-xs font-bold uppercase tracking-[0.28em] text-rose">
            How I Can Help
          </p>
          <h2 className="mt-3 text-center font-display text-3xl font-light text-cream sm:text-4xl">
            Areas of Practice
          </h2>
          <div className="mt-9 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {PRACTICE_AREAS.map((area, i) => (
              <div
                key={area.title}
                className={`rounded-md border border-cream/10 bg-cream/[0.04] p-6 transition-colors hover:border-rose/40 hover:bg-cream/[0.07] ${
                  i === PRACTICE_AREAS.length - 1 ? "sm:col-span-2" : ""
                }`}
              >
                <h3 className="font-display text-xl font-normal text-cream">
                  {area.title}
                </h3>
                <p className="mt-2 font-body text-sm leading-relaxed text-cream/65">
                  {area.blurb}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── What to expect ── */}
        <section className="mt-16 sm:mt-20">
          <p className="text-center font-body text-xs font-bold uppercase tracking-[0.28em] text-rose">
            The Process
          </p>
          <h2 className="mt-3 text-center font-display text-3xl font-light text-cream sm:text-4xl">
            What to Expect
          </h2>
          <ol className="mt-9 grid grid-cols-1 gap-9 sm:grid-cols-3 sm:gap-6">
            {STEPS.map((step, i) => (
              <li key={step.title} className="text-center">
                <span className="mx-auto flex h-11 w-11 items-center justify-center rounded-full border border-rose/50 font-display text-lg text-rose">
                  {i + 1}
                </span>
                <h3 className="mt-4 font-display text-xl font-normal text-cream">
                  {step.title}
                </h3>
                <p className="mx-auto mt-2 max-w-[240px] font-body text-sm leading-relaxed text-cream/65">
                  {step.blurb}
                </p>
              </li>
            ))}
          </ol>
        </section>

        {/* ── Consultation form (client component, handles thank-you state) ── */}
        <section className="mt-16 sm:mt-20" id="consultation">
          <p className="text-center font-body text-xs font-bold uppercase tracking-[0.28em] text-rose">
            Get Started
          </p>
          <h2 className="mt-3 text-center font-display text-3xl font-light text-cream sm:text-4xl">
            Schedule Your Consultation
          </h2>
          <p className="mx-auto mt-3 max-w-[440px] text-center font-body text-sm leading-relaxed text-cream/70">
            Every matter deserves personal attention. Tell me about yours, and
            I&apos;ll be in touch within one business day.
          </p>
          <div className="mt-9">
            <ConsultationForm />
          </div>
        </section>

        {/* ── Direct contact ── */}
        <section className="mt-12 text-center">
          <p className="font-body text-xs font-bold uppercase tracking-[0.28em] text-rose">
            Prefer to Reach Out Directly?
          </p>
          <div className="mt-5 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-9">
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
            <span
              aria-hidden="true"
              className="hidden h-8 w-px bg-cream/15 sm:block"
            />
            <div className="inline-flex flex-col items-center">
              <span className="font-body text-[11px] uppercase tracking-[0.18em] text-cream/45">
                Fax
              </span>
              <span className="mt-1 font-display text-xl font-light text-cream">
                (310) 642-4684
              </span>
            </div>
          </div>

          <a
            href="https://maps.google.com/?q=21250+Hawthorne+Boulevard+Suite+500+Torrance+CA+90503"
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-7 inline-flex flex-col items-center"
          >
            <span className="font-body text-[11px] uppercase tracking-[0.18em] text-cream/45">
              Office
            </span>
            <span className="mt-1 max-w-[22rem] font-display text-lg font-light leading-snug text-cream transition-colors group-hover:text-rose">
              21250 Hawthorne Boulevard, Suite 500
              <br />
              Torrance, California 90503
            </span>
          </a>
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
            © 2026 Law Offices of Aisha M. Johnson · amjlaw.com · Torrance,
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
