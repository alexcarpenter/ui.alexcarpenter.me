import type { BundledLanguage } from "shiki"
import { codeToHtml } from "shiki"
import { CopyTrigger } from "@/components/copy-trigger"
import { cn } from "@/lib/utils"

export async function CodeBlock({
  className,
  children,
  lang,
  ...props
}: React.ComponentProps<"div"> & {
  lang: BundledLanguage
}) {
  if (!children || typeof children !== "string") {
    return null
  }
  const cleanedCode = children
    .replaceAll("@/registry/default", "@/components")
    .trimEnd()
  const html = await codeToHtml(cleanedCode, {
    lang: lang,
    themes: {
      dark: "github-dark",
      light: "github-light",
    },
  })
  return (
    <div className={cn("relative isolate", className)} {...props}>
      <div className="code-block" dangerouslySetInnerHTML={{ __html: html }} />
      <CopyTrigger
        value={cleanedCode}
        className="absolute top-4 right-4"
        aria-label="Copy code to clipboard"
      />
    </div>
  )
}
