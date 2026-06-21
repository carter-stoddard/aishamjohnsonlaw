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
        These terms apply to the website of the Law Offices of Aisha M. Johnson,
        A Professional Corporation (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or
        &ldquo;our&rdquo;).
      </p>

      <LegalSection heading="Use of This Website">
        <p>
          This website is provided for general informational purposes and to
          allow you to request a consultation. You agree to use it only for
          lawful purposes and not to misuse the consultation form, submit false
          information, or interfere with the operation or security of the site.
        </p>
      </LegalSection>

      <LegalSection heading="No Attorney-Client Relationship">
        <p>
          Submitting the consultation form or otherwise contacting us through
          this website does not create an attorney-client relationship. Such a
          relationship is formed only through a signed engagement agreement.
          Until then, please do not send confidential or time-sensitive
          information, as we cannot guarantee its confidentiality and may
          already represent another party in the matter.
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
          All content on this site, including text, design, logos, and branding,
          is the property of the Law Offices of Aisha M. Johnson and may not be
          copied, reproduced, or distributed without our prior written
          permission.
        </p>
      </LegalSection>

      <LegalSection heading="Third-Party Links">
        <p>
          This website may contain links to third-party sites. We are not
          responsible for the content, policies, or practices of any
          third-party website, and links are provided for convenience only.
        </p>
      </LegalSection>

      <LegalSection heading="Disclaimer of Warranties">
        <p>
          This website is provided on an &ldquo;as is&rdquo; and &ldquo;as
          available&rdquo; basis, without warranties of any kind, whether
          express or implied. We do not warrant that the site will be
          uninterrupted, error-free, or free of harmful components.
        </p>
      </LegalSection>

      <LegalSection heading="Limitation of Liability">
        <p>
          To the fullest extent permitted by law, we will not be liable for any
          indirect, incidental, or consequential damages arising out of your use
          of, or inability to use, this website.
        </p>
      </LegalSection>

      <LegalSection heading="Governing Law">
        <p>
          These terms are governed by the laws of the State of California,
          without regard to its conflict-of-law principles. Any dispute relating
          to this website shall be subject to the exclusive jurisdiction of the
          state and federal courts located in California.
        </p>
      </LegalSection>

      <LegalSection heading="Changes to These Terms">
        <p>
          We may update these terms from time to time. Continued use of the site
          after changes are posted constitutes acceptance of the revised terms.
        </p>
      </LegalSection>

      <LegalSection heading="Contact">
        <p>
          Questions about these terms may be directed to{" "}
          <a href="mailto:aisha@amjlaw.com" className="text-rose underline">
            aisha@amjlaw.com
          </a>
          .
        </p>
      </LegalSection>
    </LegalPage>
  );
}
