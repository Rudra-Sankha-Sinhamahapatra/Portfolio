"use client"

import TabsComponent from "@/components/ui/TabsComponent"

export function MainNav({ changeScale }: { changeScale: (scale: number) => void }) {
  const tabsProps = [
    {
      id: "about",
      label: "about",
      content: null
    },
    {
      id: "skills",
      label: "skills",
      content: null
    },
    {
      id: "projects",
      label: "projects",
      content: null
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