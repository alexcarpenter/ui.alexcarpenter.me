import {
  InfoList,
  InfoListItem,
  InfoListHeader,
  InfoListIcon,
} from "@/registry/default/components/info-list"
import { UserIcon } from "lucide-react"

export function ExampleInfoList02() {
  return (
    <div className="@container w-full space-y-8">
      <InfoList className="grid grid-cols-1 @md:grid-cols-3 gap-8">
        <InfoListItem>
          <InfoListHeader>
            <InfoListIcon>
              <UserIcon />
            </InfoListIcon>
            <h2 className="font-medium">Hello world</h2>
          </InfoListHeader>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis
          voluptates sint.
        </InfoListItem>

        <InfoListItem>
          <InfoListHeader>
            <InfoListIcon>
              <UserIcon />
            </InfoListIcon>
            <h2 className="font-medium">Hello world</h2>
          </InfoListHeader>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis
          voluptates sint.
        </InfoListItem>

        <InfoListItem>
          <InfoListHeader>
            <InfoListIcon>
              <UserIcon />
            </InfoListIcon>
            <h2 className="font-medium">Hello world</h2>
          </InfoListHeader>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis
          voluptates sint.
        </InfoListItem>
      </InfoList>
    </div>
  )
}
