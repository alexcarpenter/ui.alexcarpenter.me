"use client"
import { PanelGroup, PanelResizeHandle } from "react-resizable-panels"

import { Panel } from "react-resizable-panels"

export function Preview({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative -mr-3">
      <div className="background-grid absolute inset-y-0 left-0 right-3 rounded-lg -z-10" />
      <PanelGroup direction="horizontal" className="flex w-full">
        <Panel
          defaultSize={100}
          minSize={30}
          maxSize={100}
          className="flex items-center border rounded-lg justify-center min-h-[400px] p-4 md:p-10 relative bg-[color-mix(in_srgb,var(--color-background),var(--color-muted)_30%)]"
        >
          {children}
        </Panel>
        <PanelResizeHandle className="flex w-3 items-center justify-center bg-transparent">
          <span className="h-8 w-1 rounded-sm bg-border" />
        </PanelResizeHandle>
        <Panel defaultSize={0} minSize={0} />
      </PanelGroup>
    </div>
  )
}
