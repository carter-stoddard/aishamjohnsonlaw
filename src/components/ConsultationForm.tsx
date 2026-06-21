"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";

const PRACTICE_AREAS = [
  "Business & Corporate Law",
  "Contract Review & Drafting",
  "Real Estate Law",
  "Estate Planning",
  "General Counsel / Consultation",
  "Other",
];

type Status = "idle" | "submitting" | "success" | "error";

export default function ConsultationForm() {
  const [status, setStatus] = useState<Status>("idle");
  const successRef = useRef<HTMLDivElement>(null);

  // Move focus to the confirmation so screen-reader users are taken to it.
  useEffect(() => {
    if (status === "success") successRef.current?.focus();
  }, [status]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");

    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/consultation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  // ── Confirmation state (replaces the form on success) ──
  if (status === "success") {
    return (
      <div
        ref={successRef}
        tabIndex={-1}
        role="status"
        aria-live="polite"
        className="amj-enter rounded-md bg-ivory px-8 py-14 text-center shadow-xl shadow-black/20 outline-none"
      >
        <h2 className="font-display text-4xl font-light text-plum">Thank You</h2>
        <p className="mx-auto mt-5 max-w-[420px] font-body text-base leading-relaxed text-plum/80">
          Your consultation request has been received. I&apos;ll be in touch
          within one business day to confirm your appointment.
        </p>
        <p className="mt-6 font-body text-sm text-plum/70">
          Questions in the meantime? Reach out at{" "}
          <a href="mailto:aisha@amjlaw.com" className="underline">
            aisha@amjlaw.com
          </a>
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-md bg-ivory px-6 py-8 shadow-xl shadow-black/20 sm:px-8 sm:py-10">
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <Field label="Full Name" htmlFor="name" required>
            <input
              id="name"
              name="name"
              type="text"
              required
              autoComplete="name"
              className={inputClass}
            />
          </Field>

          <Field label="Email Address" htmlFor="email" required>
            <input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="email"
              className={inputClass}
            />
          </Field>

          <Field label="Phone Number" htmlFor="phone">
            <input
              id="phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              className={inputClass}
            />
          </Field>

          <Field label="Area of Legal Matter" htmlFor="area" required>
            <select
              id="area"
              name="area"
              required
              defaultValue=""
              className={`${inputClass} appearance-none bg-[length:12px] bg-[right_0.9rem_center] bg-no-repeat pr-9`}
              style={{
                backgroundImage:
                  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12'%3E%3Cpath fill='%236B4765' d='M6 8L1 3h10z'/%3E%3C/svg%3E\")",
              }}
            >
              <option value="" disabled>
                Select a practice area…
              </option>
              {PRACTICE_AREAS.map((area) => (
                <option key={area} value={area}>
                  {area}
                </option>
              ))}
            </select>
          </Field>
        </div>

        <Field label="Tell me about your matter" htmlFor="message">
          <textarea
            id="message"
            name="message"
            rows={4}
            className={`${inputClass} resize-y`}
          />
        </Field>

        <fieldset>
          <legend className="mb-2 block font-body text-sm font-bold text-plum">
            Preferred contact method{" "}
            <span className="text-mauve">*</span>
          </legend>
          <div className="flex gap-6">
            {["Email", "Phone"].map((method, i) => (
              <label
                key={method}
                className="flex cursor-pointer items-center gap-2 font-body text-sm text-plum/90"
              >
                <input
                  type="radio"
                  name="contactMethod"
                  value={method}
                  required
                  defaultChecked={i === 0}
                  className="h-4 w-4 accent-[#6B4765]"
                />
                {method}
              </label>
            ))}
          </div>
        </fieldset>

        <label className="flex cursor-pointer items-start gap-3 font-body text-sm leading-snug text-plum/80">
          <input
            type="checkbox"
            name="marketingConsent"
            value="yes"
            className="mt-0.5 h-4 w-4 shrink-0 accent-[#6B4765]"
          />
          <span>
            Yes, I&apos;d like Aisha to follow up with me and to receive
            occasional updates and marketing emails from the firm. You can
            unsubscribe at any time.
          </span>
        </label>

        {status === "error" && (
          <p
            role="alert"
            className="rounded-sm bg-rose/40 px-4 py-3 text-center font-body text-sm text-plum"
          >
            Something went wrong sending your request. Please try again, or
            email{" "}
            <a href="mailto:aisha@amjlaw.com" className="underline">
              aisha@amjlaw.com
            </a>
            .
          </p>
        )}

        <button
          type="submit"
          disabled={status === "submitting"}
          aria-busy={status === "submitting"}
          className="w-full rounded-sm bg-mauve px-6 py-4 font-body text-sm font-bold uppercase tracking-[0.12em] text-cream transition-colors hover:bg-plum disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "submitting" ? "Sending…" : "Request a Consultation"}
        </button>

        <p className="text-center font-body text-xs text-plum/70">
          Your information is confidential and will not be shared with third
          parties.
        </p>
      </form>
    </div>
  );
}

const inputClass =
  "w-full rounded-sm border border-plum/30 bg-white px-3.5 py-2.5 font-body text-sm text-plum outline-none transition-colors placeholder:text-plum/60 focus:border-mauve focus:ring-2 focus:ring-mauve/40";

function Field({
  label,
  htmlFor,
  required,
  children,
}: {
  label: string;
  htmlFor: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="mb-1.5 block font-body text-sm font-bold text-plum"
      >
        {label} {required && <span className="text-mauve">*</span>}
      </label>
      {children}
    </div>
  );
}
