import type { Metadata } from "next";
import { IBM_Plex_Sans, Source_Serif_4 } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { company } from "@/data/company";

const sans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-sans",
  display: "swap"
});

const serif = Source_Serif_4({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-serif",
  display: "swap"
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || company.siteUrl;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "AVIVA Foodstuff Trading | FMCG Wholesale Supplier, Ajman, UAE",
    template: "%s | AVIVA Foodstuff Trading"
  },
  description:
    "AVIVA Foodstuff Trading S.P.S-LLC supplies beverages, chips & snacks, and chocolates & confectionery to supermarkets, retailers, cafes, hotels and wholesale buyers across the UAE. Based in Ajman.",
  openGraph: {
    type: "website",
    siteName: "AVIVA Foodstuff Trading",
    title: "AVIVA Foodstuff Trading | FMCG Wholesale Supplier, Ajman, UAE",
    description:
      "Beverages, chips & snacks, and chocolates & confectionery for supermarkets, retailers, cafes, hotels and wholesale buyers across the UAE.",
    url: siteUrl,
    locale: "en_AE"
  },
  twitter: {
    card: "summary_large_image",
    title: "AVIVA Foodstuff Trading | FMCG Wholesale Supplier, Ajman, UAE",
    description:
      "Beverages, chips & snacks, and chocolates & confectionery for UAE supermarkets, retailers, cafes and hotels."
  },
  alternates: {
    canonical: "/"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: company.legalName,
    url: siteUrl,
    logo: `${siteUrl}/logo.png`,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Shop No. 2, Industrial Area-1, Ajman Medical Center Building, Al Muwaihat",
      addressLocality: "Ajman",
      addressCountry: "AE"
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: company.phone,
        contactType: "sales",
        areaServed: "AE"
      }
    ]
  };

  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: company.legalName,
    image: `${siteUrl}/logo.png`,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Shop No. 2, Industrial Area-1, Ajman Medical Center Building, Al Muwaihat",
      addressLocality: "Ajman",
      addressCountry: "AE"
    },
    telephone: company.phone,
    email: company.email,
    url: siteUrl
  };

  return (
    <html lang="en" className={`${sans.variable} ${serif.variable}`}>
      <body className="font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
