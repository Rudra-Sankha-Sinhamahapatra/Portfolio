"use client"

import React, { useState, useEffect } from "react"
import { ContributionGraph, ContributionData } from "../ui/ContributionGraph"
import { getLastOneYearRange } from "@/lib/year"
import { ContributionSkeleton } from "../ui/ContributionSkeleton"

export function ContributionGraphDemo() {
  const [contributions, setContributions] = useState<ContributionData[]>([])
  const [totalContributions, setTotalContributions] = useState(0)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function loadContributions() {
      try {
        setIsLoading(true);

        let data: ContributionData[] = [];

          const { from, to } = getLastOneYearRange()

          data = await fetch('/api/github-contributions', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ from, to }),
          }).then(res => {
            if (!res.ok) {
              throw new Error(`Error fetching contributions: ${res.statusText}`);
            }
            return res.json();
          });

        setContributions(data)

        const total = data.reduce((sum, contribution) => sum + contribution.count, 0)
        setTotalContributions(total)

        setIsLoading(false)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load GitHub contributions')
        setIsLoading(false)
      }
    }

    loadContributions()
  }, [])

  if (isLoading) {
    return (
     <div className="w-full rounded-lg border p-4">
         <ContributionSkeleton />
      </div>
    )
  }

  if (error) {
    return (
      <div className="bg-background max-w-lg rounded-lg border p-2 flex justify-center items-center">
        <p className="text-red-500">{error}</p>
      </div>
    )
  }

  return (
    <div className="space-y-6 w-full">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Contribution Graph</h2>
           <p className="text-sm text-gray-400">
         {totalContributions} contributions
        </p>
      </div>

        <ContributionGraph
          data={contributions}
          showLegend={true}
          showTooltips={true}
          className="w-full"
        />

    </div>
  )
}

export default ContributionGraphDemo
