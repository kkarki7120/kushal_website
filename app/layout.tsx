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
  title: "Kushal Karki - DevOps Engineer",
  description:
    "Personal portfolio website of Kushal Karki, a DevOps Engineer specializing in cloud infrastructure, CI/CD, and Kubernetes.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange>
          <SkipLink />
          {children}
          <BackToTop />
        </ThemeProvider>
      </body>
      <GoogleTagManager gtmId={"G-6FGREXSXS4"} />
    </html>
  )
}



import './globals.css'