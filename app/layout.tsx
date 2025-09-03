import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Providers } from "@/components/providers"
import { Toaster } from "sonner"
import Link from "next/link"
import { RegistrySetup } from "@/components/registry-setup"
import { Separator } from "@/registry/default/ui/separator"
import { ModeToggle } from "@/components/mode-toggle"

const fontSans = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
})

const title = "ui.alexcarpenter.me"
const description = "shadcn/ui registry by Alex Carpenter"

export const metadata: Metadata = {
  title: {
    default: `${title} | ${description}`,
    template: "%s | Alex Carpenter",
  },
  description,
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL!),
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
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`${fontSans.variable} font-sans`}>
        <Providers>
          <header className="border-b sticky top-0 z-40 bg-background/80 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto flex items-center p-4">
              <div className="flex items-center gap-4">
                <Link href="/">ui.alexcarpenter.me</Link>
                <Separator orientation="vertical" className="!h-6" />
                <p className="text-muted-foreground hidden md:block line-clamp-1 text-sm">
                  shadcn/ui registry by Alex Carpenter
                </p>
              </div>
              <div className="ml-auto flex gap-2">
                <RegistrySetup />
                <ModeToggle />
              </div>
            </div>
          </header>
          {children}
          <Toaster position="bottom-right" />
        </Providers>
      </body>
    </html>
  )
}
