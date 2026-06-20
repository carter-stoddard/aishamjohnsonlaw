import type { Metadata } from "next";
import { Cormorant_Garamond, Lato, Pinyon_Script } from "next/font/google";
import CookieConsent from "@/components/CookieConsent";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  variable: "--font-cormorant",
  display: "swap",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-lato",
  display: "swap",
});

const pinyon = Pinyon_Script({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-pinyon",
  display: "swap",
});

const SITE_URL = "https://amjlaw.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Schedule a Consultation | AMJ Law — Aisha Johnson, Attorney at Law",
  description:
    "Request a confidential legal consultation with Aisha Johnson, Attorney at Law, based in Torrance, CA.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "AMJ Law",
    title: "Schedule a Consultation | AMJ Law — Aisha Johnson, Attorney at Law",
    description:
      "Request a confidential legal consultation with Aisha Johnson, Attorney at Law, based in Torrance, CA.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Schedule a Consultation | AMJ Law",
    description:
      "Request a confidential legal consultation with Aisha Johnson, Attorney at Law, based in Torrance, CA.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${cormorant.variable} ${lato.variable} ${pinyon.variable}`}
      >
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}
