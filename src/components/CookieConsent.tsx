"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const STORAGE_KEY = "amj-cookie-consent";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  // Only show if the visitor hasn't already made a choice.
  useEffect(() => {
    try {
      if (!localStorage.getItem(STORAGE_KEY)) setVisible(true);
    } catch {
      setVisible(true);
    }
  }, []);

  function decide(choice: "accepted" | "declined") {
    try {
      localStorage.setItem(STORAGE_KEY, choice);
    } catch {
      /* ignore storage errors */
    }
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Cookie consent"
      className="amj-enter fixed inset-x-0 bottom-0 z-50 px-4 pb-4 sm:px-6 sm:pb-6"
    >
      <div className="mx-auto flex max-w-[760px] flex-col gap-4 rounded-md border border-cream/10 bg-ivory px-5 py-5 shadow-2xl shadow-black/40 sm:flex-row sm:items-center sm:gap-6 sm:px-7">
        <p className="font-body text-sm leading-relaxed text-plum/80">
          We use cookies to improve your experience on this site. By continuing,
          you agree to our use of cookies. See our{" "}
          <Link href="/privacy" className="font-bold text-mauve underline">
            Privacy Policy
          </Link>
          .
        </p>
        <div className="flex shrink-0 gap-3">
          <button
            type="button"
            onClick={() => decide("declined")}
            className="rounded-sm border border-plum/20 px-4 py-2.5 font-body text-xs font-bold uppercase tracking-[0.1em] text-plum transition-colors hover:bg-plum/5"
          >
            Decline
          </button>
          <button
            type="button"
            onClick={() => decide("accepted")}
            className="rounded-sm bg-mauve px-5 py-2.5 font-body text-xs font-bold uppercase tracking-[0.1em] text-cream transition-colors hover:bg-plum"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
