'use client'

import { OverallResult } from '@/types'
import { bandColors, bandLabels } from '@/lib/scoring'
import { overallBandSummaries } from '@/lib/insights'

interface OverallScoreBannerProps {
  result: OverallResult
  companyName: string
}

export default function OverallScoreBanner({ result, companyName }: OverallScoreBannerProps) {
  const colors = bandColors[result.band]

  return (
    <div className={`rounded-2xl ${colors.bg} p-8`}>
      <p className="mb-1 text-sm font-medium text-gray-500">
        Results for {companyName}
      </p>
      <div className="mb-4 flex items-end gap-4">
        <h1 className={`text-4xl font-bold ${colors.text}`}>
          {bandLabels[result.band]}
        </h1>
        <span className="mb-1 text-lg text-gray-500">
          {result.totalScore} / {result.maxScore}
        </span>
      </div>
      <p className="max-w-2xl text-base leading-relaxed text-gray-600">
        {overallBandSummaries[result.band]}
      </p>
    </div>
  )
}
