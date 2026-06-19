import type { Metadata } from "next";
import LegalPage, { LegalSection } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy | AMJ Law",
  description:
    "How the Law Offices of Aisha M. Johnson collects, uses, and protects information submitted through this website.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy" updated="June 2026">
      <p>
        This Privacy Policy explains how the Law Offices of Aisha M. Johnson
        (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) handles
        information you provide when you use this website and its consultation
        request form.
      </p>

      <LegalSection heading="Information We Collect">
        <p>
          When you submit the consultation form, we collect the information you
          provide, which may include your name, email address, phone number, the
          area of your legal matter, your preferred contact method, and any
          details you choose to share about your matter.
        </p>
      </LegalSection>

      <LegalSection heading="How We Use Your Information">
        <p>
          We use the information you submit solely to respond to your inquiry,
          schedule a consultation, and communicate with you about your potential
          legal matter. We do not sell your information.
        </p>
      </LegalSection>

      <LegalSection heading="Cookies">
        <p>
          This website uses cookies to remember your preferences and improve
          your browsing experience. You may accept or decline non-essential
          cookies using the banner shown on your first visit, and you can adjust
          cookie settings in your browser at any time.
        </p>
      </LegalSection>

      <LegalSection heading="Confidentiality">
        <p>
          Information submitted through this form is treated as confidential.
          Please note that contacting us through this website does not create an
          attorney-client relationship. Avoid sending sensitive or
          time-critical details until such a relationship has been established.
        </p>
      </LegalSection>

      <LegalSection heading="Contact">
        <p>
          Questions about this Privacy Policy may be directed to{" "}
          <a href="mailto:aisha@amjlaw.com" className="text-rose underline">
            aisha@amjlaw.com
          </a>
          .
        </p>
      </LegalSection>
    </LegalPage>
  );
}
