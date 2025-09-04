import { cn } from "@/lib/utils"
import { Slot } from "@radix-ui/react-slot"

export function InlineText({
  className,
  asChild,
  ...props
}: React.ComponentProps<"span"> & {
  asChild?: boolean
}) {
  const Comp = asChild ? Slot : "span"

  return (
    <Comp
      data-slot="inline-text"
      className={cn("relative inline-block pr-[1.25em]", className)}
      {...props}
    />
  )
}

export function InlineTextIcon({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="inline-text-icon"
      className={cn(
        "absolute ml-[.25em] inline-flex h-[1lh] flex-none items-center [&>svg]:size-[1em]",
        className
      )}
      {...props}
    />
  )
}
