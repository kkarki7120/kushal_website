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
  title: 'Kushal Karki | DevOps Engineer Nepal | AWS & Kubernetes Expert',
  description: 'AWS-certified DevOps engineer in Nepal. Expert in CI/CD automation, Kubernetes, Terraform & cloud infrastructure. Proven fintech & SaaS solutions. Free consultation.',
  keywords: 'devops engineer nepal, aws devops engineer, kubernetes expert nepal, terraform specialist, ci/cd automation, cloud infrastructure engineer, devops freelancer kathmandu, docker kubernetes nepal, aws certified engineer nepal, infrastructure automation specialist, kushal karki',
  openGraph: {
    title: 'Kushal Karki | DevOps Engineer Nepal',
    description: 'AWS-certified DevOps engineer specializing in cloud infrastructure, CI/CD pipelines, and Kubernetes orchestration.',
    url: 'https://kushal-karki.com.np',
    siteName: 'Kushal Karki Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kushal Karki | DevOps Engineer Nepal',
    description: 'AWS-certified DevOps engineer in Nepal. CI/CD automation, Kubernetes & cloud infrastructure expert.',
  },
  alternates: {
    canonical: 'https://kushal-karki.com.np',
  }
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