import {
  InlineText,
  InlineTextIcon,
} from "@/registry/default/components/inline-text"
import { MessageCircle } from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <div>
      <p className="text-xl">
        <InlineText asChild>
          <Link href="https://www.google.com">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit,
            placeat nemo nihil aliquam ipsum facilis harum enim voluptas
            reprehenderit veritatis fuga dignissimos quam cupiditate at
            similique dicta fugit molestiae eum.
            <InlineTextIcon>
              <MessageCircle />
            </InlineTextIcon>
          </Link>
        </InlineText>
      </p>
    </div>
  )
}
