import {
  InfoList,
  InfoListItem,
  InfoListIcon,
  InfoListText,
} from "@/registry/default/components/info-list"
import { Expand, Aperture, Palette } from "lucide-react"

export function ExampleInfoList01() {
  return (
    <div className="@container w-full">
      <InfoList className="grid grid-cols-1 @md:grid-cols-3 gap-8">
        <InfoListItem>
          <InfoListIcon>
            <Expand />
          </InfoListIcon>
          <InfoListText>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam
            eaque quidem rem.
          </InfoListText>
        </InfoListItem>

        <InfoListItem>
          <InfoListIcon>
            <Aperture />
          </InfoListIcon>
          <InfoListText>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga porro
            magnam expedita blanditiis recusandae excepturi veritatis
            repudiandae.
          </InfoListText>
        </InfoListItem>

        <InfoListItem>
          <InfoListIcon>
            <Palette />
          </InfoListIcon>
          <InfoListText>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus
            excepturi doloribus velit qui enim.
          </InfoListText>
        </InfoListItem>
      </InfoList>
    </div>
  )
}
