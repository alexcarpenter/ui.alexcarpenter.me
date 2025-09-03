"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/registry/default/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/registry/default/ui/dialog"
import { CopyTrigger } from "@/components/copy-trigger"
import { CodeBlock } from "./code-block"

export function RegistrySetup({
  className,
}: React.ComponentProps<typeof Button>) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" size="sm" className={cn(className)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 256 256"
            className="size-4"
          >
            <rect width="256" height="256" fill="none"></rect>
            <line
              x1="208"
              y1="128"
              x2="128"
              y2="208"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="32"
            ></line>
            <line
              x1="192"
              y1="40"
              x2="40"
              y2="192"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="32"
            ></line>
          </svg>
          <span className="max-sm:sr-only">Setup Registry</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="md:max-w-2xl">
        <DialogHeader>
          <DialogTitle>Setup Registry</DialogTitle>
          <DialogDescription>
            Use the code below to configure the @alexcarpenter registry for your
            project.
          </DialogDescription>
        </DialogHeader>
        <div className="font-medium">
          Copy and paste the code into{" "}
          <code className="font-mono text-foreground">components.json</code>
        </div>
        <div className="relative isolate">
          <div className="overflow-x-auto max-w-full bg-muted p-4 rounded-md">
            <pre className="text-sm font-mono">
              <code>{registrySetupCode}</code>
            </pre>
          </div>
          <CopyTrigger
            value={registrySetupCode}
            className="absolute top-4 right-4"
            aria-label="Copy setup code to clipboard."
          />
        </div>
        <div className="font-medium">
          Then use the following command to add components:
        </div>
        <div className="overflow-x-auto bg-muted p-4 rounded-md">
          <pre className="text-sm font-mono">
            <code>npx shadcn@latest add @alexcarpenter/[component-name]</code>
          </pre>
        </div>
      </DialogContent>
    </Dialog>
  )
}

const registrySetupCode = `"registries": {
  "@alexcarpenter": "${process.env.NEXT_PUBLIC_BASE_URL}/r/{name}.json"
}
`
