import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import Cursor from "@/components/ui/Cursor";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Umair Altaf — Full Stack Developer",
  description:
    "Full Stack Developer specializing in Next.js, React, Node.js, and modern web technologies. Building beautiful, high-performance web experiences.",
  keywords: [
    "Full Stack Developer", "Next.js", "React",
    "Node.js", "TypeScript", "Web Developer", "Umair Altaf",
  ],
  authors: [{ name: "Umair Altaf" }],
  openGraph: {
    title: "Umair Altaf — Full Stack Developer",
    description:
      "Full Stack Developer specializing in Next.js, React, Node.js, and modern web technologies.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Umair Altaf — Full Stack Developer",
    description:
      "Full Stack Developer specializing in Next.js, React, Node.js, and modern web technologies.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}>
        <ThemeProvider>
          <Cursor />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
