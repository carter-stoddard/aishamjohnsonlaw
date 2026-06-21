import type { Metadata } from "next";
import LegalPage, { LegalSection } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy | AMJ Law",
  description:
    "How the Law Offices of Aisha M. Johnson collects, uses, shares, and protects information submitted through this website, including California privacy rights.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy" updated="June 2026">
      <p>
        This Privacy Policy explains how the Law Offices of Aisha M. Johnson, A
        Professional Corporation (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or
        &ldquo;our&rdquo;) collects, uses, shares, and protects information when
        you visit this website or submit our consultation request form. By using
        this website, you agree to the practices described below.
      </p>

      <LegalSection heading="Information We Collect">
        <p>
          <strong>Information you provide.</strong> When you submit the
          consultation form, we collect the information you choose to give us,
          which may include your name, email address, phone number, the area of
          your legal matter, your preferred contact method, any details you
          share about your matter, and whether you have opted in to receive
          follow-up and marketing communications.
        </p>
        <p>
          <strong>Information collected automatically.</strong> When you visit
          the site, certain information may be collected automatically through
          cookies and similar technologies, such as your IP address, browser
          type, device information, pages viewed, and the dates and times of
          your visit.
        </p>
      </LegalSection>

      <LegalSection heading="How We Use Your Information">
        <p>We use the information we collect to:</p>
        <ul className="list-disc space-y-1 pl-5">
          <li>Respond to your inquiry and schedule a consultation;</li>
          <li>Communicate with you about your potential legal matter;</li>
          <li>
            Send follow-up messages or marketing communications, where you have
            opted in;
          </li>
          <li>Operate, maintain, and improve this website; and</li>
          <li>Comply with our legal and professional obligations.</li>
        </ul>
      </LegalSection>

      <LegalSection heading="How We Share Information">
        <p>
          <strong>We do not sell your personal information.</strong> We share
          information only as needed with trusted service providers who help us
          operate this website and communicate with you — for example, our
          website hosting provider and the email delivery service used to
          transmit form submissions. These providers are permitted to use your
          information only to provide services to us. We may also disclose
          information where required by law or to protect our legal rights.
        </p>
      </LegalSection>

      <LegalSection heading="Cookies">
        <p>
          This website uses cookies to remember your preferences and improve
          your browsing experience. You may accept or decline non-essential
          cookies using the banner shown on your first visit, and you can adjust
          cookie settings in your browser at any time. Disabling cookies may
          affect how parts of the site function.
        </p>
      </LegalSection>

      <LegalSection heading="Data Retention">
        <p>
          We retain the information you submit for as long as necessary to
          respond to your inquiry, provide any services you request, and comply
          with our legal, professional, and recordkeeping obligations. When
          information is no longer needed, we take reasonable steps to delete or
          de-identify it.
        </p>
      </LegalSection>

      <LegalSection heading="Data Security">
        <p>
          We use reasonable administrative and technical safeguards designed to
          protect the information you submit. However, no method of transmission
          over the internet or method of electronic storage is completely
          secure, and we cannot guarantee absolute security.
        </p>
      </LegalSection>

      <LegalSection heading="Your California Privacy Rights">
        <p>
          If you are a California resident, the California Consumer Privacy Act
          (as amended by the CPRA) gives you certain rights regarding your
          personal information, subject to legal exceptions, including the right
          to:
        </p>
        <ul className="list-disc space-y-1 pl-5">
          <li>Know what personal information we collect and how we use it;</li>
          <li>Request access to or deletion of your personal information;</li>
          <li>Request correction of inaccurate personal information; and</li>
          <li>
            Not be discriminated against for exercising your privacy rights.
          </li>
        </ul>
        <p>
          We do not sell or share your personal information for cross-context
          behavioral advertising. To exercise any of these rights, contact us
          using the details below. We may need to verify your identity before
          responding.
        </p>
      </LegalSection>

      <LegalSection heading="Marketing Communications">
        <p>
          If you opt in to receive updates or marketing emails, you may
          unsubscribe at any time using the link in those emails or by
          contacting us directly. Opting out of marketing does not affect
          communications about a consultation you have requested.
        </p>
      </LegalSection>

      <LegalSection heading="Children's Privacy">
        <p>
          This website is intended for adults and is not directed to children
          under 13. We do not knowingly collect personal information from
          children.
        </p>
      </LegalSection>

      <LegalSection heading="Confidentiality">
        <p>
          Information submitted through this form is treated as confidential.
          Please note that contacting us through this website does not create an
          attorney-client relationship. Avoid sending sensitive or
          time-critical details until such a relationship has been established
          through a signed engagement agreement.
        </p>
      </LegalSection>

      <LegalSection heading="Changes to This Policy">
        <p>
          We may update this Privacy Policy from time to time. Any changes will
          be posted on this page with a revised &ldquo;Last updated&rdquo; date.
        </p>
      </LegalSection>

      <LegalSection heading="Contact">
        <p>
          Questions about this Privacy Policy or your information may be directed
          to{" "}
          <a href="mailto:aisha@amjlaw.com" className="text-rose underline">
            aisha@amjlaw.com
          </a>{" "}
          or by mail at 21250 Hawthorne Boulevard, Suite 500, Torrance,
          California 90503.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
