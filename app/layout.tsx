import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/providers/ThemeProvider";
import Navbar from "@/components/navbar/Navbar";
import WrapperContainer from "@/components/WrapperContainer";
import { Analytics } from "@vercel/analytics/react";

const OpenSans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Code With Credo",
  description: "Hi there! I'm Szakacs Tamas a Frontend Developer! Get to know me!",
  keywords: [
    "Frontend",
    "Developer",
    "Frontend Developer",
    "Szakacs Tamas",
    "Szakács Tamás",
    "web application",
    "website",
    "next.js developer",
    "react developer",
    "code with credo",
  ],
  icons: {
    icon: "https://code-with-credo.vercel.app/images/logo.png",
  },
  openGraph: {
    title: "Code With Credo",
    description: "Hi there! I'm Szakacs Tamas a Frontend Developer! Get to know me!",
    url: "https://code-with-credo.vercel.app/",
    siteName: "Code With Credo",
    images: [
      {
        url: "https://code-with-credo.vercel.app/images/hero.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={OpenSans.className}>
        <ThemeProvider defaultTheme="dark" attribute="class" enableSystem>
          <Navbar />
          <WrapperContainer>{children}</WrapperContainer>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
