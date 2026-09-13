import type { Metadata } from "next";
import { Outfit, Plus_Jakarta_Sans, Caveat } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "../components/providers/SmoothScrollProvider";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aardvark Book Club — Unbox Stories Worth Talking About",
  description:
    "Join the book club that's anything but traditional. Choose up to 3 curated hardcovers every month, delivered to your door. Dive into the stories, and the conversations.",
  keywords: [
    "book club",
    "book subscription",
    "hardcover books",
    "curated reading",
    "aardvark",
    "monthly book box",
  ],
  openGraph: {
    title: "Aardvark Book Club — Unbox Stories Worth Talking About",
    description:
      "Join the book club that's anything but traditional. Curated hardcovers delivered monthly.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${jakarta.variable} ${caveat.variable}`}
    >
      <head>
        <link
          href="https://cdn.prod.website-files.com/696173cb00865d1b386e4af8/css/aardvark-book-club.webflow.shared.3d9712638.min.css"
          rel="stylesheet"
          type="text/css"
        />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/lenis@1.3.17/dist/lenis.css" />
      </head>
      <body data-barba="wrapper" data-scrolling-started="false">
        <SmoothScrollProvider>
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
