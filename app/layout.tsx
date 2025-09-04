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
        className={cn("flex min-h-full flex-col font-sans antialiased", [
          fontSans.variable,
          fontMono.variable,
        ])}
      >
        <Providers>
          <header className="bg-background/80 sticky top-0 z-40 border-b backdrop-blur-sm">
            <div className="mx-auto flex max-w-7xl items-center p-4">
              <h1 className="text-muted-foreground text-sm font-medium tracking-tight">
                shadcn/ui registry by{" "}
                <a
                  href="https://alexcarpenter.me"
                  target="_blank"
                  rel="noopenner noreferrer"
                  className="text-foreground underline"
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
