import { cn } from "@/lib/utils"
import { Slot } from "@radix-ui/react-slot"

export function InfoList({ className, ...props }: React.ComponentProps<"ul">) {
  return (
    <ul
      className={cn("flex flex-col gap-2", className)}
      data-slot="info-list"
      {...props}
    />
  )
}

export function InfoListItem({
  className,
  ...props
}: React.ComponentProps<"li">) {
  return (
    <li
      className={cn(
        "flex gap-4 has-[*[data-slot='header']]:flex-col",
        className
      )}
      data-slot="info-list-item"
      {...props}
    />
  )
}

export function InfoListHeader({
  className,
  ...props
}: React.ComponentProps<"header">) {
  return (
    <header
      {...props}
      className={cn("flex gap-4", className)}
      data-slot="header"
    />
  )
}

export function InfoListIcon({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      className={cn(
        "flex h-[1lh] flex-none items-center [&>svg]:size-[1em]",
        className
      )}
      data-slot="info-list-icon"
      {...props}
    />
  )
}

export function InfoListText({
  className,
  asChild,
  ...props
}: React.ComponentProps<"p"> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "p"
  return (
    <Comp
      className={cn("text-pretty", className)}
      data-slot="info-list-text"
      {...props}
    />
  )
}
