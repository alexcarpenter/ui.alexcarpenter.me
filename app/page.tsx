import * as React from "react"
import { ExampleInfoList01 } from "@/registry/examples/info-list-01"
import { ExampleInlineText01 } from "@/registry/examples/inline-text-01"
import { OpenInV0 } from "@/components/open-in-v0"
import { Preview } from "@/components/preview"
import { AddCommand } from "@/components/add-command"
import { Separator } from "@/registry/default/ui/separator"
import { CodeBlock } from "@/components/code-block"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/registry/default/ui/tabs"
import { getRegistryItemFromJson } from "@/lib/registry"
import { ExamplePricingTable01 } from "@/registry/examples/pricing-table-01"

const items = [
  {
    name: "info-list",
    example: {
      name: "example-info-list-01",
      component: ExampleInfoList01,
    },
  },
  {
    name: "inline-text",
    example: {
      name: "example-inline-text-01",
      component: ExampleInlineText01,
    },
  },
  {
    name: "pricing-table",
    example: {
      name: "example-pricing-table-01",
      component: ExamplePricingTable01,
    },
  },
]

export default async function Home() {
  return (
    <main className="mx-auto flex w-full max-w-7xl flex-1 flex-col gap-12 px-4 py-12">
      {await Promise.all(
        items.map(async (item) => {
          const registryItem = await getRegistryItemFromJson(item.name)
          if (!registryItem) {
            return null
          }
          return (
            <section
              key={registryItem.title}
              className="flex scroll-mt-24 flex-col gap-4"
              id={item.name}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <h2 className="line-clamp-1 text-sm font-medium">
                    {registryItem.title}
                  </h2>
                  <Separator
                    orientation="vertical"
                    className="hidden !h-4 lg:flex"
                  />
                  <div className="text-muted-foreground line-clamp-1 hidden text-sm lg:flex">
                    {registryItem.description}
                  </div>
                </div>
                <div className="flex gap-2">
                  <AddCommand registryItem={registryItem} />
                  <OpenInV0 name={item.example.name} className="w-fit" />
                </div>
              </div>
              {registryItem.files?.at(0)?.content ? (
                <Tabs defaultValue="preview">
                  <TabsList className="w-full sm:w-fit">
                    <TabsTrigger value="preview">Preview</TabsTrigger>
                    <TabsTrigger value="code">Source</TabsTrigger>
                  </TabsList>
                  <TabsContent value="preview">
                    <Preview>
                      <item.example.component />
                    </Preview>
                  </TabsContent>
                  <TabsContent value="code">
                    <CodeBlock lang="typescript">
                      {registryItem.files?.at(0)?.content}
                    </CodeBlock>
                  </TabsContent>
                </Tabs>
              ) : (
                <Preview>
                  <item.example.component />
                </Preview>
              )}
            </section>
          )
        })
      )}
    </main>
  )
}
