import type { Metadata } from "next";
import { Antonio, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const antonio = Antonio({
  variable: "--font-antonio",
  subsets: ["latin"],
  display: "swap",
  weight: ["700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});


export const metadata: Metadata = {
  title: "Netrani Scuba Dive | Premier Scuba Diving Packages & Netrani Island Booking",
  description:
    "Explore scuba diving at Netrani Island with Netrani Scuba Dive. Transparent package pricing from ₹3,500, beginner & non-swimmer guidance, and free HD underwater photos.",
  keywords: [
    "Netrani Scuba Dive",
    "Netrani Island scuba diving",
    "Scuba diving in Murudeshwar",
    "Murudeshwara scuba dive",
    "Netrani Island diving",
    "Best scuba diving in Murudeshwar",
    "Scuba diving near Netrani Island",
    "Beginner scuba diving in Murudeshwar",
    "Scuba diving packages in Murudeshwar",
    "netrani scuba",
    "netrani scuba diving",
    "netrani island murudeshwar",
    "scuba diving for non swimmers",
    "pigeon island scuba diving",
    "best scuba diving in karnataka",
    "scuba diving in karnataka",
    "murudeshwar beach scuba diving",
    "padi scuba diving murudeshwar",
    "netrani dive packages",
    "scuba diving cost in murudeshwar",
    "scuba diving timings murudeshwar",
  ],
  metadataBase: new URL("https://www.murudeshwarscubadive.in"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Netrani Scuba Dive | Premier Scuba Diving Packages & Netrani Island Booking",
    description:
      "Explore scuba diving at Netrani Island with Netrani Scuba Dive. Transparent package pricing from ₹3,500, beginner & non-swimmer guidance, and free HD underwater photos.",
    url: "https://www.murudeshwarscubadive.in",
    siteName: "Netrani Scuba Dive",
    images: [
      {
        url: "/hero.webp",
        width: 1200,
        height: 630,
        alt: "Netrani Scuba Dive at Netrani Island coral reef with certified instructors",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Netrani Scuba Dive | Packages & Netrani Island Booking",
    description:
      "Discover scuba diving at Netrani Island with packages from ₹3,500. Certified instructors, full gear, and free HD underwater photos.",
    images: ["/hero.webp"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${antonio.variable} antialiased`}
    >
      <head>
        <link
          rel="alternate"
          type="text/plain"
          href="/llms.txt"
          title="LLM Business Information"
        />
      </head>
      <body className="bg-[#ffffff] text-[#000000] min-h-screen flex flex-col font-sans selection:bg-[#4da2ff] selection:text-[#ffffff] antialiased">
        <Navbar />
        {children}
        <Analytics />
        <SpeedInsights />
        <FloatingWhatsApp />
        <Footer />
      </body>
    </html>
  );
}
