import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "./Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "WorkHub Central",
  description: "Find Your Perfect Office Here",
  icons: {
    icon: "/svg.webp",
  },
  keywords: [
    "Cooworking",
    "Coo-working",
    "Cooworking space",
    "Coo-working space",
    "WorkHub Central",
    "WorkHub",
    "Central",
    "Office",
    "Virtual Meeting Room",
    "Meeting Room",
    "Private Office",
    "Peacefull Space",
    "Networking Space",
    "Hackathon"
  ],
  openGraph: {
    title: "Xurshed's Portfolio",
    description:
      "Explore a collection of web development projects showcasing skills in React, JavaScript, and modern front-end technologies.",
    url: "https://my-portfolio-v2--seven.vercel.app",
    siteName: "Xurshed's Portfolio",
    images: [
      {
        url: "/logo.svg",
        width: 1200,
        height: 630,
        alt: "Portfolio Thumbnail",
      },
    ],
    locale: "en_US",
    type: "website",
  },
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
        <div className="max-w-screen-2xl w-full mx-auto min-h-screen flex flex-col justify-between pb-8 relative">
          
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
