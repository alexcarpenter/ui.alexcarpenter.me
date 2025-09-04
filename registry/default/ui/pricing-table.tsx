"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { Badge } from "@/registry/default/ui/badge"
import { Button } from "@/registry/default/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/default/ui/card"
import {
  InfoList,
  InfoListIcon,
  InfoListItem,
  InfoListText,
} from "@/registry/default/ui/info-list"
import { Switch } from "@/registry/default/ui/switch"
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/registry/default/ui/toggle-group"
import NumberFlow from "@number-flow/react"
import { useControllableState } from "@radix-ui/react-use-controllable-state"

type BillingPeriod = "monthly" | "yearly"
export type { BillingPeriod as PricingTableBillingPeriod }

type PriceFormatterOptions = {
  style: "currency"
  currency: string
  trailingZeroDisplay?: "stripIfInteger" | "auto"
  minimumFractionDigits?: number
  maximumFractionDigits?: number
}

type PricingTableContextValue = {
  billingPeriod: BillingPeriod
  setBillingPeriod: (period: BillingPeriod) => void
  priceFormatter: Intl.NumberFormat
  priceFormatterOptions: PriceFormatterOptions
  locale: Intl.LocalesArgument
}

const defaultPriceFormatterOptions: PriceFormatterOptions = {
  style: "currency",
  currency: "USD",
  trailingZeroDisplay: "stripIfInteger",
} as const

const PricingTableContext = React.createContext<PricingTableContextValue>({
  billingPeriod: "monthly",
  setBillingPeriod: () => {},
  priceFormatter: new Intl.NumberFormat("en-US", defaultPriceFormatterOptions),
  priceFormatterOptions: defaultPriceFormatterOptions,
  locale: "en-US",
})

export const usePricingTableContext = () =>
  React.useContext(PricingTableContext)

export function PricingTable({
  billingPeriod: billingPeriodProp,
  setBillingPeriod: setBillingPeriodProp,
  defaultBillingPeriod = "monthly",
  priceFormatterOptions = defaultPriceFormatterOptions,
  locale = "en-US",
  children,
  className,
  ...props
}: React.ComponentProps<"div"> & {
  billingPeriod?: BillingPeriod
  setBillingPeriod?: (period: BillingPeriod) => void
  defaultBillingPeriod?: BillingPeriod
  priceFormatterOptions?: PriceFormatterOptions
  locale?: string
}) {
  const [billingPeriod, setBillingPeriod] = useControllableState({
    prop: billingPeriodProp,
    defaultProp: defaultBillingPeriod,
    onChange: setBillingPeriodProp,
    caller: "pricing-table",
  })

  const priceFormatter = React.useMemo(
    () => new Intl.NumberFormat(locale, priceFormatterOptions),
    [locale, priceFormatterOptions]
  )

  const contextValue = React.useMemo(
    () => ({
      billingPeriod,
      setBillingPeriod,
      priceFormatter,
      priceFormatterOptions,
      locale,
    }),
    [
      billingPeriod,
      setBillingPeriod,
      priceFormatter,
      priceFormatterOptions,
      locale,
    ]
  )

  return (
    <PricingTableContext.Provider value={contextValue}>
      <div
        className={cn("@container/pricing-table w-full", className)}
        {...props}
      >
        {children}
      </div>
    </PricingTableContext.Provider>
  )
}

export function PricingTableSwitchGroup({
  children,
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "mb-16 grid grid-cols-[1fr_theme(spacing.8)_1fr] gap-2",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

export function PricingTableSwitchItem({
  value,
  children,
  className,
  ...props
}: React.ComponentProps<"span"> & {
  value: BillingPeriod
}) {
  const { billingPeriod } = usePricingTableContext()
  return (
    <span
      className={cn(
        "truncate text-sm font-semibold first:text-right",
        {
          "text-primary": billingPeriod === value,
        },
        className
      )}
      data-active={billingPeriod === value}
      {...props}
    >
      {children}
    </span>
  )
}

export function PricingTableSwitch({
  children,
  className,
  ...props
}: React.ComponentProps<typeof Switch>) {
  const { billingPeriod, setBillingPeriod } = usePricingTableContext()
  return (
    <Switch
      className={cn(className)}
      checked={billingPeriod === "yearly"}
      onCheckedChange={(checked) => {
        setBillingPeriod(checked ? "yearly" : "monthly")
      }}
      {...props}
    />
  )
}

export function PricingTableToggleGroup({
  children,
  className,
  ...props
}: Omit<
  React.ComponentProps<typeof ToggleGroup>,
  "type" | "value" | "onValueChange" | "defaultValue"
>) {
  const { billingPeriod, setBillingPeriod } = usePricingTableContext()

  return (
    <ToggleGroup
      type="single"
      value={billingPeriod}
      onValueChange={(value: string) => {
        if (value === "monthly" || value === "yearly") {
          setBillingPeriod(value as BillingPeriod)
        }
      }}
      variant="outline"
      className={cn("mx-auto mb-16", className)}
      {...props}
    >
      {children}
    </ToggleGroup>
  )
}

export function PricingTableToggleItem({
  children,
  value,
  ...props
}: React.ComponentProps<typeof ToggleGroupItem> & {
  value: BillingPeriod
}) {
  return (
    <ToggleGroupItem value={value} {...props}>
      {children}
    </ToggleGroupItem>
  )
}

export function PricingTableGrid({
  children,
  className,
  ...props
}: React.ComponentProps<"div">) {
  const count = React.Children.count(children)
  return (
    <div
      className={cn(
        "group/pricing-table-grid",
        "grid grid-rows-[auto_auto_auto] gap-x-4 gap-y-12",
        "data-[count=1]:grid-cols-1",
        "data-[count=2]:@xl/pricing-table:grid-cols-2",
        "data-[count=3]:@3xl/pricing-table:grid-cols-3",
        "data-[count=4]:@4xl/pricing-table:grid-cols-4",
        className
      )}
      data-count={count}
      {...props}
    >
      {children}
    </div>
  )
}

type PricingTableCardContextValue = {
  highlight?: boolean
}

const PricingTableCardContext =
  React.createContext<PricingTableCardContextValue>({
    highlight: false,
  })

export const usePricingTableCardContext = () =>
  React.useContext(PricingTableCardContext)

export function PricingTableCard({
  highlight,
  children,
  className,
  ...props
}: React.ComponentProps<typeof Card> & { highlight?: boolean }) {
  return (
    <PricingTableCardContext.Provider value={{ highlight }}>
      <Card
        className={cn(
          "group/pricing-table-card relative row-span-3 grid grid-rows-subgrid",
          highlight && [
            "ring-primary border-primary -my-4 py-10 ring",
            "group-data-[count=1]/pricing-table-grid:my-0",
            "group-data-[count=2]/pricing-table-grid:@xl/pricing-table:-my-4 group-data-[count=2]/pricing-table-grid:@xl/pricing-table:py-10",
            "group-data-[count=3]/pricing-table-grid:@3xl/pricing-table:-my-4 group-data-[count=3]/pricing-table-grid:@3xl/pricing-table:py-10",
            "group-data-[count=4]/pricing-table-grid:@4xl/pricing-table:-my-4 group-data-[count=4]/pricing-table-grid:@4xl/pricing-table:py-10",
          ],
          className
        )}
        data-highlight={highlight}
        {...props}
      >
        {children}
      </Card>
    </PricingTableCardContext.Provider>
  )
}

export function PricingTableCardHeader({
  className,
  ...props
}: React.ComponentProps<typeof CardHeader>) {
  return (
    <CardHeader className={cn("grid-rows-[auto_1fr]", className)} {...props} />
  )
}

export function PricingTableCardBadge({
  children,
  className,
  ...props
}: React.ComponentProps<typeof Badge>) {
  const { highlight } = usePricingTableCardContext()
  if (!highlight) return null
  return (
    <Badge
      className={cn(
        "absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2",
        className
      )}
      {...props}
    >
      {children}
    </Badge>
  )
}

export function PricingTableCardTitle({
  className,
  ...props
}: React.ComponentProps<typeof CardTitle>) {
  return <CardTitle className={cn("text-lg", className)} {...props} />
}

export function PricingTableCardDescription({
  className,
  ...props
}: React.ComponentProps<typeof CardDescription>) {
  return (
    <CardDescription
      className={cn(
        "text-muted-foreground col-span-full row-start-2 line-clamp-2 text-sm",
        className
      )}
      {...props}
    />
  )
}

export function PricingTableCardSlot(
  props: React.ComponentProps<typeof CardAction>
) {
  return <CardAction {...props} data-slot="card-action testing" />
}

export function PricingTableCardPrice({
  monthly,
  yearly,
  className,
  suffix,
  ...props
}: Omit<
  React.ComponentProps<typeof NumberFlow>,
  "value" | "format" | "suffix"
> & {
  monthly: number
  yearly?: number
  suffix?: string | ((billingPeriod: BillingPeriod) => string)
}) {
  const { billingPeriod, priceFormatterOptions, locale } =
    usePricingTableContext()

  if (!monthly) {
    return null
  }

  const currentPrice = billingPeriod === "monthly" ? monthly : yearly || monthly

  return (
    <NumberFlow
      className={cn(
        "[&::part(suffix)]:text-muted-foreground text-lg font-semibold",
        className
      )}
      locales={locale}
      format={priceFormatterOptions}
      value={currentPrice}
      suffix={typeof suffix === "function" ? suffix(billingPeriod) : suffix}
      {...props}
    />
  )
}

export function PricingTableCardContent({
  className,
  ...props
}: React.ComponentProps<typeof CardContent>) {
  return (
    <CardContent
      className={cn("row-start-2 flex flex-col gap-2", className)}
      {...props}
    />
  )
}

export function PricingTableCardList(
  props: React.ComponentProps<typeof InfoList>
) {
  return <InfoList {...props} />
}

export function PricingTableCardListItem({
  className,
  ...props
}: React.ComponentProps<typeof InfoListItem>) {
  return <InfoListItem className={cn("gap-2 text-sm", className)} {...props} />
}

export function PricingTableCardListIcon({
  className,
  ...props
}: React.ComponentProps<typeof InfoListIcon>) {
  return (
    <InfoListIcon
      className={cn("text-muted-foreground", className)}
      {...props}
    />
  )
}

export function PricingTableCardListText(
  props: React.ComponentProps<typeof InfoListText>
) {
  return <InfoListText {...props} />
}

export function PricingTableCardFooter({
  className,
  ...props
}: React.ComponentProps<typeof CardFooter>) {
  return (
    <CardFooter
      className={cn("row-start-3 [&>[data-slot=button]]:w-full", className)}
      {...props}
    />
  )
}

export function PricingTableCardButton({
  className,
  ...props
}: React.ComponentProps<typeof Button>) {
  const { highlight } = usePricingTableCardContext()
  return (
    <Button
      className={cn("w-full", className)}
      variant={highlight ? "default" : "outline"}
      {...props}
    />
  )
}
