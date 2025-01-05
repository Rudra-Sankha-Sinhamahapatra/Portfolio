"use client"

import TabsComponent from "@/components/ui/TabsComponent"

export function MainNav({ changeScale }: { changeScale: (scale: number) => void }) {
  const tabsProps = [
    {
      id: "about",
      label: "about",
    },
    {
      id: "skills",
      label: "skills",
    },
    {
      id: "projects",
      label: "projects",
    },
  ]

  return (
    <div className="flex gap-6 md:gap-10">
      <div className="flex flex-row space-x-0">
        <TabsComponent tabs={tabsProps} changeScale={changeScale} />
      </div>
    </div>
  )
}