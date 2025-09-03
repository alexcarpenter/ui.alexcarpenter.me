import {
  PricingTable,
  PricingTableCard,
  PricingTableCardAction,
  PricingTableCardBadge,
  PricingTableCardButton,
  PricingTableCardContent,
  PricingTableCardDescription,
  PricingTableCardFooter,
  PricingTableCardHeader,
  PricingTableCardList,
  PricingTableCardListIcon,
  PricingTableCardListItem,
  PricingTableCardListText,
  PricingTableCardPrice,
  PricingTableCardTitle,
  PricingTableGrid,
  PricingTableSwitch,
  PricingTableSwitchGroup,
  PricingTableSwitchItem,
} from "@/registry/default/ui/pricing-table"
import { BadgeCheck } from "lucide-react"

export function ExamplePricingTable01() {
  return (
    <PricingTable>
      <PricingTableSwitchGroup>
        <PricingTableSwitchItem value="monthly">Monthly</PricingTableSwitchItem>
        <PricingTableSwitch />
        <PricingTableSwitchItem value="yearly">Yearly</PricingTableSwitchItem>
      </PricingTableSwitchGroup>
      <PricingTableGrid>
        <PricingTableCard>
          <PricingTableCardHeader>
            <PricingTableCardTitle>Basic</PricingTableCardTitle>
            <PricingTableCardDescription>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis,
              impedit.
            </PricingTableCardDescription>
            <PricingTableCardAction>
              <PricingTableCardPrice monthly={25} yearly={20} />
            </PricingTableCardAction>
          </PricingTableCardHeader>
          <PricingTableCardContent>
            <PricingTableCardList>
              {Array.from({ length: 3 }).map((_, index) => (
                <PricingTableCardListItem key={index}>
                  <PricingTableCardListIcon>
                    <BadgeCheck />
                  </PricingTableCardListIcon>
                  <PricingTableCardListText>
                    Lorem ipsum dolor sit amet.
                  </PricingTableCardListText>
                </PricingTableCardListItem>
              ))}
            </PricingTableCardList>
          </PricingTableCardContent>
          <PricingTableCardFooter>
            <PricingTableCardButton>Subscribe to Basic</PricingTableCardButton>
          </PricingTableCardFooter>
        </PricingTableCard>
        <PricingTableCard highlight>
          <PricingTableCardBadge>Popular</PricingTableCardBadge>
          <PricingTableCardHeader>
            <PricingTableCardTitle>Pro</PricingTableCardTitle>
            <PricingTableCardDescription>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis,
              impedit.
            </PricingTableCardDescription>
            <PricingTableCardAction>
              <PricingTableCardPrice monthly={50} yearly={40} />
            </PricingTableCardAction>
          </PricingTableCardHeader>
          <PricingTableCardContent>
            <PricingTableCardList>
              {Array.from({ length: 5 }).map((_, index) => (
                <PricingTableCardListItem key={index}>
                  <PricingTableCardListIcon>
                    <BadgeCheck />
                  </PricingTableCardListIcon>
                  <PricingTableCardListText>
                    Lorem ipsum dolor sit amet.
                  </PricingTableCardListText>
                </PricingTableCardListItem>
              ))}
            </PricingTableCardList>
          </PricingTableCardContent>
          <PricingTableCardFooter>
            <PricingTableCardButton>Subscribe to Pro</PricingTableCardButton>
          </PricingTableCardFooter>
        </PricingTableCard>
        <PricingTableCard>
          <PricingTableCardHeader>
            <PricingTableCardTitle>Enterprise</PricingTableCardTitle>
            <PricingTableCardDescription>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis,
              impedit.
            </PricingTableCardDescription>
          </PricingTableCardHeader>
          <PricingTableCardContent>
            <PricingTableCardList>
              {Array.from({ length: 7 }).map((_, index) => (
                <PricingTableCardListItem key={index}>
                  <PricingTableCardListIcon>
                    <BadgeCheck />
                  </PricingTableCardListIcon>
                  <PricingTableCardListText>
                    Lorem ipsum dolor sit amet.
                  </PricingTableCardListText>
                </PricingTableCardListItem>
              ))}
            </PricingTableCardList>
          </PricingTableCardContent>
          <PricingTableCardFooter>
            <PricingTableCardButton>Contact us</PricingTableCardButton>
          </PricingTableCardFooter>
        </PricingTableCard>
      </PricingTableGrid>
    </PricingTable>
  )
}
