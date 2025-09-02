import {
  InfoList,
  InfoListItem,
  InfoListHeader,
  InfoListIcon,
} from "@/registry/default/components/info-list"
import { UserIcon } from "lucide-react"

export function ExampleInfoList() {
  return (
    <section>
      <InfoList className="grid grid-cols-3 gap-8">
        <InfoListItem>
          <InfoListIcon>
            <UserIcon />
          </InfoListIcon>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis
          voluptates sint, excepturi quae magnam molestias quas, assumenda,
          explicabo tenetur voluptatem dignissimos commodi? Consequuntur,
          dolores. Voluptate aperiam reiciendis officia eum maxime.
        </InfoListItem>

        <InfoListItem>
          <InfoListHeader>
            <InfoListIcon>
              <UserIcon />
            </InfoListIcon>
            <h2>Hello world</h2>
          </InfoListHeader>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis
          voluptates sint, excepturi quae magnam molestias quas, assumenda,
          explicabo tenetur voluptatem dignissimos commodi? Consequuntur,
          dolores. Voluptate aperiam reiciendis officia eum maxime.
        </InfoListItem>

        <InfoListItem>
          <InfoListIcon>
            <UserIcon />
          </InfoListIcon>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis
          voluptates sint, excepturi quae magnam molestias quas, assumenda,
          explicabo tenetur voluptatem dignissimos commodi? Consequuntur,
          dolores. Voluptate aperiam reiciendis officia eum maxime.
        </InfoListItem>
      </InfoList>
    </section>
  )
}
