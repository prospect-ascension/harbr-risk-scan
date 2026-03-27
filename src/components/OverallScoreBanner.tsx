'use client'

import { OverallResult, ScoreBand } from '@/types'
import { bandLabels } from '@/lib/scoring'
import { overallBandSummaries } from '@/lib/insights'

const bannerStyles: Record<ScoreBand, { bg: string; text: string; accent: string }> = {
  controlled: {
    bg: 'bg-gradient-to-br from-emerald-50 to-emerald-100/50',
    text: 'text-emerald-700',
    accent: 'bg-emerald-500',
  },
  at_risk: {
    bg: 'bg-gradient-to-br from-amber-50 to-amber-100/50',
    text: 'text-amber-700',
    accent: 'bg-amber-500',
  },
  fragmented_exposed: {
    bg: 'bg-gradient-to-br from-red-50 to-red-100/50',
    text: 'text-red-700',
    accent: 'bg-red-500',
  },
}

interface OverallScoreBannerProps {
  result: OverallResult
  companyName: string
}

export default function OverallScoreBanner({ result, companyName }: OverallScoreBannerProps) {
  const styles = bannerStyles[result.band]

  return (
    <div className={`rounded-2xl ${styles.bg} p-8 border border-gray-100`}>
      <p className="mb-1 text-sm font-medium text-gray-500">
        Results for {companyName}
      </p>
      <div className="mb-1 flex items-end gap-4">
        <h1 className={`text-4xl font-bold ${styles.text}`}>
          {bandLabels[result.band]}
        </h1>
        <div className={`mb-1.5 h-2 w-2 rounded-full ${styles.accent}`} />
        <span className="mb-1 text-xl font-semibold text-navy-800">
          {result.totalScore} / {result.maxScore}
        </span>
      </div>
      <p className="mt-4 max-w-2xl text-base leading-relaxed text-gray-600">
        {overallBandSummaries[result.band]}
      </p>
    </div>
  )
}
