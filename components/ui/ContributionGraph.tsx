"use client"

import React, { useMemo, useState } from "react"
import { motion } from "motion/react"

export interface ContributionData {
  date: string
  count: number
  level: number
}

export interface ContributionGraphProps {
  data?: ContributionData[]
  className?: string
  showLegend?: boolean
  showTooltips?: boolean
}

const MONTHS = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun", 
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
]

const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

const CONTRIBUTION_COLORS = [
  "bg-gray-400 opacity-30 hover:opacity-100", // Level 0 - No contributions
  "bg-green-700", // Level 1
  "bg-green-600", // Level 2
  "bg-green-500", // Level 3
  "bg-green-300", // Level 4 - Max contributions
]

const CONTRIBUTION_LEVELS = [0, 1, 2, 3, 4]

export function ContributionGraph({
  data = [],
  className = "",
  showLegend = true,
  showTooltips = true,
}: ContributionGraphProps) {
  const [hoveredDay, setHoveredDay] = useState<ContributionData | null>(null)
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 })

  const yearData = useMemo(() => {
    if (!data.length) return []

    const sortedData = [...data].sort(
      (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
    );

    const startDate = new Date(sortedData[0].date)
    const endDate = new Date(sortedData[sortedData.length - 1].date)

    const firstSunday = new Date(startDate)
    firstSunday.setDate(startDate.getDate() - startDate.getDay())


    const lastSaturday = new Date(endDate)
    lastSaturday.setDate(endDate.getDate() + (6 - endDate.getDay()))

    const days: ContributionData[] = []
     const current = new Date(firstSunday)

    while (current <= lastSaturday) {
      const dateString = current.toISOString().split("T")[0]
      const existingData = sortedData.find((d) => d.date === dateString)

      days.push({
        date: dateString,
        count: existingData?.count || 0,
        level: existingData?.level || 0,
      })

      current.setDate(current.getDate() + 1)
    }


    return days
  }, [data])

const monthHeaders = useMemo(() => {
  if (!yearData.length) return []

  const headers: { month: string; colspan: number }[] = []

  let lastMonth = -1
  let lastMonthStartIndex = 0

  for (let i = 0; i < yearData.length; i += 7) {
    const day = yearData[i]
    if (!day?.date) continue

    const date = new Date(day.date)
    const month = date.getMonth()

    if (month !== lastMonth) {
      if (lastMonth !== -1) {
        headers.push({
          month: MONTHS[lastMonth],
          colspan: (i - lastMonthStartIndex) / 7,
        })
      }

      lastMonth = month
      lastMonthStartIndex = i
    }
  }

  if (lastMonth !== -1) {
    headers.push({
      month: MONTHS[lastMonth],
      colspan: (yearData.length - lastMonthStartIndex) / 7,
    })
  }

  return headers
}, [yearData])


  const handleDayHover = (day: ContributionData, event: React.MouseEvent) => {
    if (showTooltips && day.date) {
      setHoveredDay(day)
      setTooltipPosition({ x: event.clientX, y: event.clientY })
    }
  }

  const handleDayLeave = () => {
    setHoveredDay(null)
  }

  const formatDate = (dateString: string) => {
    if (!dateString) return ""
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  const getContributionText = (count: number) => {
    if (count === 0) return "No contributions"
    if (count === 1) return "1 contribution"
    return `${count} contributions`
  }

  return (
    <div className={`contribution-graph w-full max-w-7xl mx-auto ${className}`}>
      <div className="overflow-x-auto">
        <table className="border-separate border-spacing-1 text-xs w-full">
          <caption className="sr-only">Contribution Graph (last 1 year)</caption>


          <thead>
            <tr className="h-3">
              <td className="w-7 min-w-7"></td>
              {monthHeaders.map((header, index) => (
                <td
                  key={index}
                  className="text-foreground relative text-left"
                  colSpan={header.colspan}
                >
                  <span className="absolute top-0 left-1">{header.month}</span>
                </td>
              ))}
            </tr>
          </thead>


          <tbody>
            {Array.from({ length: 7 }, (_, dayIndex) => (
              <tr key={dayIndex} className="h-2.5">

                <td className="text-foreground relative w-7 min-w-7">
                  {dayIndex % 2 === 0 && (
                    <span className="absolute -bottom-0.5 left-0 text-xs">
                      {DAYS[dayIndex]}
                    </span>
                  )}
                </td>

                {Array.from({ length: 53 }, (_, weekIndex) => {
                  const dayData = yearData[weekIndex * 7 + dayIndex]
                  if (!dayData || !dayData.date) {
                    return (
                      <td key={weekIndex} className="h-2.5 w-2.5 p-0">
                        <div className="h-2.5 w-2.5"></div>
                      </td>
                    )
                  }

                  return (
                    <td
                      key={weekIndex}
                      className="h-2.5 w-2.5 cursor-pointer p-0"
                      onMouseEnter={(e) => handleDayHover(dayData, e)}
                      onMouseLeave={handleDayLeave}
                      title={
                        showTooltips
                          ? `${formatDate(dayData.date)}: ${getContributionText(dayData.count)}`
                          : undefined
                      }
                    >
                      <div
                        className={`h-2.5 w-2.5 rounded-sm ${
                          CONTRIBUTION_COLORS[dayData.level]
                        } hover:ring-background hover:ring-2`}
                      />
                    </td>
                  )
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showTooltips && hoveredDay && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className="
            fixed z-50 rounded-lg border 
            dark:bg-black/90 dark:text-white 
            light:bg-blue-50/90 light:text-gray-800 
            light:border-blue-100 
            dark:border-white/10 
            px-3 py-2 text-sm shadow-lg
            backdrop-blur-md
            pointer-events-none
          "
          style={{
            left: tooltipPosition.x + 10,
            top: tooltipPosition.y - 40,
          }}
        >
          <div className="font-semibold dark:text-white light:text-gray-800">
            {getContributionText(hoveredDay.count)}
          </div>
          <div className="dark:text-white/70 light:text-gray-600">
            {formatDate(hoveredDay.date)}
          </div>
        </motion.div>
      )}

      {showLegend && (
        <div className="text-foreground/70 mt-4 flex items-center justify-between text-xs">
          <span>Less</span>
          <div className="flex items-center gap-1">
            {CONTRIBUTION_LEVELS.map((level) => (
              <div
                key={level}
                className={`h-3 w-3 rounded-sm ${CONTRIBUTION_COLORS[level]}`}
              />
            ))}
          </div>
          <span>More</span>
        </div>
      )}
    </div>
  )
}

export default ContributionGraph
