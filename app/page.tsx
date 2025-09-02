import * as React from "react"
import { registryItemSchema } from "shadcn/schema"
import registry from "@/registry.json"
import { ExampleInfoList01 } from "@/registry/examples/info-list-01"
import { ExampleInlineText01 } from "@/registry/examples/inline-text-01"
import { OpenInV0 } from "@/components/open-in-v0"
import { Preview } from "@/components/preview"
import { AddCommand } from "@/components/add-command"
import { Separator } from "@/registry/default/ui/separator"

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
]

const getRegistryItemFromJson = React.cache((name: string) => {
  const registryItem = registry.items.find((item) => item.name === name)

  const result = registryItemSchema.safeParse(registryItem)
  if (!result.success) {
    return null
  }

  return result.data
})

export default async function Home() {
  return (
    <main className="max-w-7xl mx-auto flex flex-col px-4 py-8 flex-1 gap-8 md:gap-12">
      {items.map(async (item) => {
        const registryItem = getRegistryItemFromJson(item.name)
        if (!registryItem) {
          return null
        }

        return (
          <section key={registryItem.title} className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <h2 className="text-sm line-clamp-1 font-medium">
                  {registryItem.title}
                </h2>
                <Separator
                  orientation="vertical"
                  className="!h-4 hidden lg:flex"
                />
                <div className="text-sm text-muted-foreground line-clamp-1 hidden lg:flex">
                  {registryItem.description}
                </div>
              </div>
              <div className="flex gap-2">
                <AddCommand registryItem={registryItem} />
                <OpenInV0 name={registryItem.name} className="w-fit" />
              </div>
            </div>
            <Preview>
              <item.example.component />
            </Preview>
          </section>
        )
      })}
    </main>
  )
}
