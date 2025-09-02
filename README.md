# ui.alexcarpenter.me

## Components

### `info-list`

#### Install

```bash
npx shadcn@latest add https://ui.alexcarpenter.me/r/info-list.json
```

#### Usage

```tsx
import {
  InfoList,
  InfoListIcon,
  InfoListHeader,
  InfoListItem,
} from "@/components/info-list"
import { UserIcon } from "lucide-react"

export default function Example() {
  return (
    <InfoList>
      <InfoListItem>
        <InfoListIcon>
          <UserIcon />
        </InfoListIcon>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
      </InfoListItem>

      <InfoListItem>
        <InfoListHeader>
          <InfoListIcon>
            <UserIcon />
          </InfoListIcon>
          <h2>Example heading</h2>
        </InfoListHeader>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
      </InfoListItem>
    </InfoList>
  )
}
```

### `inline-text`

#### Install

```bash
npx shadcn@latest add https://ui.alexcarpenter.me/r/inline-text.json
```

#### Usage

```tsx
import { InlineText, InlineTextIcon } from "@/components/inline-text"
import Link from "next/link"
import { ExternalLink } from "lucide-react"

export default function Example() {
  return (
    <>
      <InlineText>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
        <InlineTextIcon>
          <ExternalLink />
        </InlineTextIcon>
      </InlineText>

      <InlineText asChild>
        <Link href="https://www.google.com">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          quos.
          <InlineTextIcon>
            <ExternalLink />
          </InlineTextIcon>
        </Link>
      </InlineText>
    </>
  )
}
```
