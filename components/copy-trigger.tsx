"use client"
import { useCopyToClipboard } from "@/hooks/use-copy-to-clipboard"
import { cn } from "@/lib/utils"
import { Button } from "@/registry/default/ui/button"
import { CheckIcon, CopyIcon } from "lucide-react"
import { toast } from "sonner"

export function CopyTrigger({
  value,
  className,
  onClick,
  ...props
}: Omit<React.ComponentProps<typeof Button>, "variant" | "size"> & {
  value: string
}) {
  const { isCopied, copyToClipboard } = useCopyToClipboard()
  return (
    <Button
      variant="outline"
      size="icon"
      className={cn("bg-secondary! size-8 rounded-md", className)}
      onClick={(e) => {
        copyToClipboard(value)
        toast.success(`Code copied to clipboard`)
        onClick?.(e)
      }}
      {...props}
    >
      {isCopied ? <CheckIcon /> : <CopyIcon />}
    </Button>
  )
}
