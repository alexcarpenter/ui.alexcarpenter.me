import {
  InfoList,
  InfoListItem,
  InfoListIcon,
  InfoListText,
} from "@/registry/default/ui/info-list"
import { Expand, Aperture, Palette } from "lucide-react"

export function ExampleInfoList01() {
  return (
    <InfoList className="grid grid-cols-1 gap-8 @md/preview:grid-cols-3">
      <InfoListItem>
        <InfoListIcon className="text-muted-foreground">
          <Expand />
        </InfoListIcon>
        <InfoListText>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam
          eaque quidem rem.
        </InfoListText>
      </InfoListItem>

      <InfoListItem>
        <InfoListIcon className="text-muted-foreground">
          <Aperture />
        </InfoListIcon>
        <InfoListText>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga porro
          magnam expedita blanditiis recusandae excepturi veritatis repudiandae.
        </InfoListText>
      </InfoListItem>

      <InfoListItem>
        <InfoListIcon className="text-muted-foreground">
          <Palette />
        </InfoListIcon>
        <InfoListText>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus
          excepturi doloribus velit qui enim.
        </InfoListText>
      </InfoListItem>
    </InfoList>
  )
}
