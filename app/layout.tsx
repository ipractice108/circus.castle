import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Circus Castle Bali | Unique Aerials & Trampolines Club",
  description: "Pro circus artists & world/national champions coaching for adults & kids 5+. Train aerial arts, acrobatics, trampoline & ballet in a real castle in Ubud, Bali.",
  keywords: ["circus", "aerial arts", "trampoline", "bali", "ubud", "acrobatics", "gymnastics"],
  openGraph: {
    title: "Circus Castle Bali | Unique Aerials & Trampolines Club",
    description: "Pro circus artists & world/national champions coaching in a real castle in Bali.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
