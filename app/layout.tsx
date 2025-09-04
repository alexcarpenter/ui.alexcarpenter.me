import type { Metadata } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import "./globals.css"
import { Providers } from "@/components/providers"
import { Toaster } from "sonner"
import { RegistrySetup } from "@/components/registry-setup"
import { ModeToggle } from "@/components/mode-toggle"
import { cn } from "@/lib/utils"

const fontSans = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
})

const fontMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
})

const title = "ui.alexcarpenter.me"
const description = "shadcn/ui registry by Alex Carpenter"

export const metadata: Metadata = {
  title: {
    default: `${title}`,
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
    <html lang="en" className="dark h-full" suppressHydrationWarning>
      <body
        className={cn("font-sans antialiased flex flex-col min-h-full", [
          fontSans.variable,
          fontMono.variable,
        ])}
      >
        <Providers>
          <header className="border-b sticky top-0 z-40 bg-background/80 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto flex items-center p-4">
              <h1 className="text-muted-foreground font-medium text-sm tracking-tight">
                shadcn/ui registry by{" "}
                <a
                  href="https://alexcarpenter.me"
                  target="_blank"
                  rel="noopenner noreferrer"
                  className="underline text-foreground"
                >
                  Alex Carpenter
                </a>
              </h1>
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
