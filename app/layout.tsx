import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "2A Construction - Top-notch Painting & Residential Remodels in Seattle",
  description: "Family company delivering unbeatable quality & affordability for over 10 years. Specializing in Residential Remodels, Painting & Bathrooms in Seattle & surrounding areas.",
  keywords: ["painting seattle", "bathroom remodeling", "residential remodels", "seattle construction", "home renovation seattle", "house painting", "bathroom renovation"],
  authors: [{ name: "2A Construction" }],
  creator: "2A Construction",
  publisher: "2A Construction",
  openGraph: {
    title: "2A Construction - Top-notch Painting & Residential Remodels in Seattle",
    description: "Family company delivering unbeatable quality & affordability for over 10 years in Seattle",
    type: "website",
    locale: "en_US",
    siteName: "2A Construction",
  },
  twitter: {
    card: "summary_large_image",
    title: "2A Construction - Top-notch Painting & Residential Remodels in Seattle",
    description: "Family company delivering unbeatable quality & affordability for over 10 years in Seattle",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-body antialiased">
        {children}
      </body>
    </html>
  );
}
