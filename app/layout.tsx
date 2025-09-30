import type { Metadata } from "next";
import { Poppins, Caveat } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";

import "./globals.css";

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-caveat",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: {
    default: "Event Platform",
    template: "%s | Event Platform",
  },
  description:
    "Discover and attend cultural events with ease. Our platform connects you to concerts, exhibitions, festivals, and workshops, offering detailed event info, seamless ticket booking, and personalized recommendations. Experience culture like never before.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${caveat.variable} ${poppins.variable} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
