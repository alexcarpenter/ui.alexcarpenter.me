"use client"
import { PanelGroup, PanelResizeHandle } from "react-resizable-panels"

import { Panel } from "react-resizable-panels"

export function Preview({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative -mr-3">
      <div className="background-grid absolute inset-y-0 right-3 left-0 -z-10 rounded-lg" />
      <PanelGroup direction="horizontal" className="flex w-full">
        <Panel
          defaultSize={100}
          minSize={30}
          maxSize={100}
          className="bg-surface @container/preview relative flex min-h-[40rem] items-center justify-center rounded-lg border p-4 md:p-10"
        >
          {children}
        </Panel>
        <PanelResizeHandle className="flex w-3 items-center justify-center bg-transparent">
          <span className="bg-border h-8 w-1 rounded-sm" />
        </PanelResizeHandle>
        <Panel defaultSize={0} minSize={0} />
      </PanelGroup>
    </div>
  )
}
