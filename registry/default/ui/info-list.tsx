import { cn } from "@/lib/utils"
import { Slot } from "@radix-ui/react-slot"

export function InfoList({ className, ...props }: React.ComponentProps<"ul">) {
  return (
    <ul
      {...props}
      className={cn("flex flex-col gap-2", className)}
      data-slot="list"
    />
  )
}

export function InfoListItem({
  className,
  ...props
}: React.ComponentProps<"li">) {
  return (
    <li
      {...props}
      className={cn(
        "flex gap-4 has-[*[data-slot='header']]:flex-col",
        className
      )}
      data-slot="item"
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
      {...props}
      className={cn(
        "flex h-[1lh] items-center flex-none [&>svg]:size-[1em]",
        className
      )}
      data-slot="icon"
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
      {...props}
      className={cn("text-pretty", className)}
      data-slot="text"
    />
  )
}
