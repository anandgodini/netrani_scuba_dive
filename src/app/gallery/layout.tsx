import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Netrani Island Scuba Diving Underwater Gallery | Photos & Videos",
  description:
    "Explore real underwater scuba diving photos and videos from Netrani Island, Murudeshwar with Netrani Scuba Dive. Vibrant coral reefs, exotic marine life & diver moments.",
  keywords: [
    "Netrani scuba diving gallery",
    "Netrani Island underwater photos",
    "Murudeshwar scuba diving photos",
    "scuba diving videos Netrani",
    "Netrani coral reef images",
    "Murudeshwar diving pictures",
  ],
  alternates: {
    canonical: "https://www.netraniscubadive.in/gallery",
  },
  openGraph: {
    title: "Netrani Island Scuba Diving Underwater Gallery | Photos & Videos",
    description:
      "Explore real underwater scuba diving photos and videos from Netrani Island, Murudeshwar with Netrani Scuba Dive. Vibrant coral reefs, exotic marine life & diver moments.",
    url: "https://www.netraniscubadive.in/gallery",
    siteName: "Netrani Scuba Dive",
    images: [
      {
        url: "/images/murudeshwara/murudeshwar_scuba_diving.webp",
        width: 1200,
        height: 630,
        alt: "Scuba diver exploring vibrant coral reef formations at Netrani Island",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Netrani Island Scuba Diving Underwater Gallery | Photos & Videos",
    description:
      "Explore real underwater scuba diving photos and videos from Netrani Island, Murudeshwar with Netrani Scuba Dive. Vibrant coral reefs, exotic marine life & diver moments.",
    images: ["/images/murudeshwara/murudeshwar_scuba_diving.webp"],
  },
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
