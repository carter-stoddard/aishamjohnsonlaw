import Link from "next/link";

export default function LegalPage({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: React.ReactNode;
}) {
  return (
    <main className="flex min-h-dvh flex-col items-center px-6 py-14 sm:py-20">
      <article className="amj-enter w-full max-w-[720px]">
        <Link
          href="/"
          className="font-body text-xs font-bold uppercase tracking-[0.2em] text-rose transition-colors hover:text-cream"
        >
          ← Back to AMJ Law
        </Link>

        <h1 className="mt-8 font-display text-4xl font-light text-cream sm:text-5xl">
          {title}
        </h1>
        <p className="mt-3 font-body text-sm text-cream/50">
          Last updated: {updated}
        </p>

        <div className="legal-body mt-10 space-y-6 font-body text-[15px] leading-relaxed text-cream/80">
          {children}
        </div>

        <p className="mt-12 font-body text-xs text-cream/40">
          © 2026 Law Offices of Aisha M. Johnson · Torrance, CA
        </p>
      </article>
    </main>
  );
}

// Shared section heading for legal pages.
export function LegalSection({
  heading,
  children,
}: {
  heading: string;
  children: React.ReactNode;
}) {
  return (
    <section className="space-y-3">
      <h2 className="font-display text-2xl font-light text-cream">{heading}</h2>
      {children}
    </section>
  );
}
