import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const basePath =
  process.env.NEXT_PUBLIC_BASE_PATH ??
  (process.env.NODE_ENV === "production" ? "/cv" : "");

export const metadata: Metadata = {
  title: "Niloy Pal — Brand Designer & Creative AI Specialist",
  description: "Curriculum Vitae and Portfolio of Niloy Pal — Brand Designer & Creative AI Specialist.",
  icons: {
    icon: `${basePath}/avatar.jpg`,
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100">
        {children}
      </body>
    </html>
  );
}
