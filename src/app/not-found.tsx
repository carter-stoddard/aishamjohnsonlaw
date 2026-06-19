import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-dvh flex-col items-center justify-center px-6 text-center">
      <p className="font-body text-xs font-bold uppercase tracking-[0.32em] text-rose">
        Page not found
      </p>
      <h1 className="mt-4 font-display text-5xl font-light text-cream">
        404
      </h1>
      <p className="mt-4 font-body text-cream/70">
        The page you&apos;re looking for doesn&apos;t exist.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-sm bg-mauve px-6 py-3 font-body text-sm font-bold uppercase tracking-[0.12em] text-cream transition-colors hover:bg-cream hover:text-plum"
      >
        Return Home
      </Link>
    </main>
  );
}
