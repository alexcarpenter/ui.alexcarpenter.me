import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const fontSans = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
})

const title = "ui.alexcarpenter.me"
const description = ""

export const metadata: Metadata = {
  title: {
    default: `${title} | ${description}`,
    template: "%s | Alex Carpenter",
  },
  description,
  // metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL!),
  manifest: `${process.env.NEXT_PUBLIC_BASE_URL}/site.webmanifest`,
  openGraph: {
    images: [
      {
        url: `/og?title=${encodeURIComponent(
          title
        )}&description=${encodeURIComponent(description)}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: [
      {
        url: `/og?title=${encodeURIComponent(
          title
        )}&description=${encodeURIComponent(description)}`,
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${fontSans.variable} font-sans`}>{children}</body>
    </html>
  )
}
