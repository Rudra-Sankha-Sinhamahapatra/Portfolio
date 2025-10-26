"use client"

import React, { useState, useEffect } from "react"
import { ContributionGraph, ContributionData } from "../ui/ContributionGraph"
import { fetchGitHubContributions } from "@/lib/githubContributions"

export function ContributionGraphDemo() {
  const [contributions, setContributions] = useState<ContributionData[]>([])
  const [totalContributions, setTotalContributions] = useState(0)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const currentYear = new Date().getFullYear()

  useEffect(() => {
    async function loadContributions() {
      try {
        setIsLoading(true)
        const data = await fetchGitHubContributions('Rudra-Sankha-Sinhamahapatra')
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
      <div className="bg-background max-w-lg rounded-lg border p-2 flex justify-center items-center">
        <p className="text-foreground">Loading contributions...</p>
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
        <p className="text-lg text-gray-500">
          {totalContributions} contributions in {currentYear}
        </p>
      </div>
      <ContributionGraph
        data={contributions}
        year={currentYear}
        showLegend={true}
        showTooltips={true}
        className="w-full"
      />
    </div>
  )
}

export default ContributionGraphDemo
