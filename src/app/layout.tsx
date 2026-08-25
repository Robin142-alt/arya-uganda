import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import SkipLink from "@/components/layout/SkipLink";
import { organizationData } from "@/data/organization";
import { generateOrganizationSchema } from "@/lib/seo";

export const metadata: Metadata = {
  metadataBase: new URL("https://arya-uganda.org"),
  title: {
    default: "Acholi Renaissance Youth Association (ARYA) | Kitgum, Northern Uganda",
    template: "%s | Acholi Renaissance Youth Association (ARYA)",
  },
  description:
    "Acholi Renaissance Youth Association (ARYA) is a grassroots community organisation in Kitgum, Northern Uganda, advancing health equity, adolescent girls' empowerment (HER Voice), youth education, and resilient livelihoods.",
  keywords: [
    "Acholi Renaissance Youth Association",
    "ARYA Uganda",
    "ARYA Kitgum",
    "youth organisation Kitgum",
    "NGO Kitgum Uganda",
    "youth empowerment Northern Uganda",
    "HIV youth programmes Kitgum",
    "HER Voice Fund Uganda",
    "girls empowerment Kitgum",
    "livelihood programmes Northern Uganda",
    "ENR-CSO Uganda",
    "Charter for Change Uganda",
  ],
  authors: [{ name: "Acholi Renaissance Youth Association" }],
  creator: "ARYA Kitgum",
  openGraph: {
    type: "website",
    locale: "en_UG",
    url: "https://arya-uganda.org",
    title: "Acholi Renaissance Youth Association (ARYA) | Kitgum, Uganda",
    description:
      "Healthy. Educated. Self-Reliant Communities. Grassroots community-led development in Northern Uganda.",
    siteName: "Acholi Renaissance Youth Association",
  },
  twitter: {
    card: "summary_large_image",
    title: "Acholi Renaissance Youth Association (ARYA)",
    description:
      "Healthy. Educated. Self-Reliant Communities in Kitgum & Northern Uganda.",
    creator: "@ARYA_Kitgum",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schemaJson = JSON.stringify(generateOrganizationSchema());

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: schemaJson }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-arya-ivory text-arya-charcoal-900 antialiased selection:bg-arya-ochre selection:text-white">
        <SkipLink />
        <Header />
        <main id="main-content" className="flex-grow">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
