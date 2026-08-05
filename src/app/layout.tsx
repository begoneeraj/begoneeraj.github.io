import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pushpraj Singh Prashant — Software Engineer",
  description:
    "AI + full-stack developer building fact-checking tools, healthcare platforms, and privacy tooling. Python, TypeScript, Flutter.",
  openGraph: {
    title: "Pushpraj Singh Prashant — Software Engineer",
    description:
      "AI + full-stack developer building fact-checking tools, healthcare platforms, and privacy tooling.",
    url: "https://begoneeraj.github.io",
    siteName: "begoneeraj.dev",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`dark ${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
