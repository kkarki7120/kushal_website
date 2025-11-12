import type React from "react"
import "@/app/globals.css"
import { Inter, Playfair_Display } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { SkipLink } from "@/components/skip-link"
import { BackToTop } from "@/components/back-to-top"
import { GoogleTagManager } from '@next/third-parties/google'


const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
})

export const metadata = {
  title: "Kushal Karki | DevOps Engineer & Cloud Infrastructure Specialist",
  description:
    "Explore the portfolio of Kushal Karki — a DevOps Engineer passionate about AWS, Kubernetes, CI/CD automation, and scalable cloud infrastructure. Learn about projects, certifications, and case studies in modern cloud engineering.",
  keywords: [
    "Kushal Karki",
    "DevOps Engineer",
    "Cloud Engineer",
    "AWS",
    "Kubernetes",
    "CI/CD",
    "Terraform",
    "Docker",
    "Cloud Infrastructure",
    "Portfolio",
    "Nepal DevOps",
  ],
  authors: [{ name: "Kushal Karki", url: "https://kushal-karki.com.np" }],
  creator: "Kushal Karki",
  publisher: "Kushal Karki",
  metadataBase: new URL("https://kushal-karki.com.np"),
  openGraph: {
    title: "Kushal Karki | DevOps Engineer & Cloud Infrastructure Specialist",
    description:
      "Portfolio of Kushal Karki — DevOps Engineer specializing in AWS, Kubernetes, and CI/CD pipelines. Explore cloud projects and automation expertise.",
    url: "https://kushal-karki.com.np",
    siteName: "Kushal Karki Portfolio",
    images: [
      {
        url: "/kushal.png",
        width: 1200,
        height: 630,
        alt: "Kushal Karki - DevOps Engineer Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kushal Karki | DevOps Engineer",
    description:
      "Official portfolio of Kushal Karki — DevOps Engineer specializing in AWS, Kubernetes, and cloud automation.",
    creator: "@kushalkarki",
    images: ["/kushal.png"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/kushal.png",
    apple: "/apple-touch-icon.png",
  },
  alternates: {
    canonical: "https://kushal-karki.com.np",
  },
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${playfair.variable}`}>
      <GoogleTagManager gtmId={"G-6FGREXSXS4"} />
      <body className="font-sans">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange>
          <SkipLink />
          
          {children}
          <BackToTop />
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'