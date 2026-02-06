import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "./components/navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | SpeedList",
    default: `SpeedList`,
  },
  description:
    "SpeedList is a simple, versatile and easy-to-use listing website created solely for shopping. Create, edit, and send your shopping list to friends and family on-the-go.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Import navigation above children layout*/}
        <Navigation />

        {children}
      </body>
    </html>
  );
}
