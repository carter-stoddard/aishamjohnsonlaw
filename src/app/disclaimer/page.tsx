import type { Metadata } from "next";
import LegalPage, { LegalSection } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Legal Disclaimer | AMJ Law",
  description:
    "Legal disclaimer and attorney advertising notice for the Law Offices of Aisha M. Johnson.",
  alternates: { canonical: "/disclaimer" },
};

export default function DisclaimerPage() {
  return (
    <LegalPage title="Legal Disclaimer" updated="June 2026">
      <LegalSection heading="Attorney Advertising">
        <p>
          This website may be considered attorney advertising under applicable
          rules. Prior results do not guarantee a similar outcome.
        </p>
      </LegalSection>

      <LegalSection heading="Informational Purposes Only">
        <p>
          The information provided on this website is for general informational
          purposes only and does not constitute legal advice. You should not act
          or refrain from acting based on any content here without seeking advice
          from a licensed attorney.
        </p>
      </LegalSection>

      <LegalSection heading="No Guarantee of Outcome">
        <p>
          Every legal matter is different. Nothing on this site is a promise or
          guarantee regarding the outcome of any matter.
        </p>
      </LegalSection>

      <LegalSection heading="Jurisdiction">
        <p>
          Aisha Johnson is licensed to practice law in California. This website
          is not intended to solicit clients in jurisdictions where doing so
          would not comply with applicable laws and ethical rules.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
