import type { Metadata } from "next";
import LegalPage, { LegalSection } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Terms & Conditions | AMJ Law",
  description:
    "Terms and conditions governing the use of the Law Offices of Aisha M. Johnson website.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <LegalPage title="Terms & Conditions" updated="June 2026">
      <p>
        By accessing and using this website, you agree to the following terms
        and conditions. If you do not agree, please discontinue use of the site.
      </p>

      <LegalSection heading="Use of This Website">
        <p>
          This website is provided for general informational purposes and to
          allow you to request a consultation. You agree to use it only for
          lawful purposes and not to misuse the consultation form or any other
          feature of the site.
        </p>
      </LegalSection>

      <LegalSection heading="No Attorney-Client Relationship">
        <p>
          Submitting the consultation form or otherwise contacting us through
          this website does not create an attorney-client relationship. Such a
          relationship is formed only through a signed engagement agreement.
        </p>
      </LegalSection>

      <LegalSection heading="No Legal Advice">
        <p>
          Content on this website is not legal advice and should not be relied
          upon as such. Every legal matter is unique; you should consult a
          qualified attorney regarding your specific circumstances.
        </p>
      </LegalSection>

      <LegalSection heading="Intellectual Property">
        <p>
          All content on this site, including text, design, and branding, is the
          property of the Law Offices of Aisha M. Johnson and may not be
          reproduced without permission.
        </p>
      </LegalSection>

      <LegalSection heading="Changes to These Terms">
        <p>
          We may update these terms from time to time. Continued use of the site
          after changes are posted constitutes acceptance of the revised terms.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
