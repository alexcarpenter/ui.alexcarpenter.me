import {
  InfoList,
  InfoListItem,
  InfoListIcon,
} from "@/registry/default/components/info-list"
import { UserIcon } from "lucide-react"

export function ExampleInfoList01() {
  return (
    <div className="@container w-full">
      <InfoList className="grid grid-cols-1 @md:grid-cols-3 @md:gap-8">
        <InfoListItem>
          <InfoListIcon>
            <UserIcon />
          </InfoListIcon>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis
          voluptates sint.
        </InfoListItem>

        <InfoListItem>
          <InfoListIcon>
            <UserIcon />
          </InfoListIcon>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis
          voluptates sint.
        </InfoListItem>

        <InfoListItem>
          <InfoListIcon>
            <UserIcon />
          </InfoListIcon>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis
          voluptates sint.
        </InfoListItem>
      </InfoList>
    </div>
  )
}
