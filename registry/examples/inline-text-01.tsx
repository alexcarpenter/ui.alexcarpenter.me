import {
  InlineText,
  InlineTextIcon,
} from "@/registry/default/components/inline-text"
import { ExternalLink } from "lucide-react"

export function ExampleInlineText01() {
  return (
    <p>
      <InlineText asChild className="text-primary">
        <a href="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          quos.
          <InlineTextIcon>
            <ExternalLink />
          </InlineTextIcon>
        </a>
      </InlineText>
    </p>
  )
}
