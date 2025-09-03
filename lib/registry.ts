import * as React from "react"
import { registryItemSchema } from "shadcn/schema"

export const getRegistryItemFromJson = React.cache(async (name: string) => {
  const content = await import(`@/public/r/${name}.json`)
  const result = registryItemSchema.safeParse(content)
  if (!result.success) {
    return null
  }
  return result.data
})
