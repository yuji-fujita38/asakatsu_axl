import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Noto_Sans_JP } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  variable: "--font-noto-sans-jp",
  display: "swap",
})

export const metadata: Metadata = {
  title: "BCC - No.1 Business Coaching",
  description: "「成長意欲の高い」を活用する個人事業主様出!!",
  generator: "v0.app",
  keywords: "ビジネスコーチング, 個人事業主, 成長, コンサルティング",
  openGraph: {
    title: "BCC - No.1 Business Coaching",
    description: "「成長意欲の高い」を活用する個人事業主様出!!",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} ${notoSansJP.variable}`}>
        <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
