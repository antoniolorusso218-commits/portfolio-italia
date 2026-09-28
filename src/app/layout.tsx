import type { Metadata } from "next";
import { Geist, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "./components/LanguageProvider";

const geist = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: {
    default: "Antonio Lorusso — Digital Marketing & E-commerce Specialist",
    template: "%s — Antonio Lorusso",
  },

  description:
    "Portfolio di Antonio Lorusso, Digital Marketing & E-commerce Specialist. Strategia digitale, e-commerce, CRM, content strategy, social media e crescita digitale.",

  keywords: [
    "Antonio Lorusso",
    "Digital Marketing",
    "E-commerce",
    "CRM",
    "Content Strategy",
    "Social Media",
    "Brand Strategy",
    "Digital Growth",
    "Marketing Portfolio",
    "Digital Marketing Puglia",
    "E-commerce Puglia",
    "Marketing Andria",
  ],

  authors: [
    {
      name: "Antonio Lorusso",
    },
  ],

  creator: "Antonio Lorusso",

  category: "portfolio",

  openGraph: {
    type: "website",
    locale: "it_IT",
    title: "Antonio Lorusso — Digital Marketing & E-commerce Specialist",
    description:
      "Strategia digitale, e-commerce, CRM e content strategy. Progetti e case study di Antonio Lorusso.",
    siteName: "Antonio Lorusso Portfolio",
  },

  twitter: {
    card: "summary_large_image",
    title: "Antonio Lorusso — Digital Marketing & E-commerce Specialist",
    description:
      "Strategia digitale, e-commerce, CRM e content strategy. Progetti e case study di Antonio Lorusso.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="it"
      className={`${geist.variable} ${cormorant.variable}`}
    >
      <body>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}