'use client'

import { PillarResult, ScoreBand } from '@/types'
import { bandLabels } from '@/lib/scoring'
import { pillarInsights } from '@/lib/insights'
import ScoreBar from './ScoreBar'

const badgeStyles: Record<ScoreBand, string> = {
  controlled: 'bg-emerald-100 text-emerald-800 border border-emerald-200',
  at_risk: 'bg-amber-100 text-amber-800 border border-amber-200',
  fragmented_exposed: 'bg-red-100 text-red-800 border border-red-200',
}

const accentBorder: Record<ScoreBand, string> = {
  controlled: 'border-l-emerald-500',
  at_risk: 'border-l-amber-500',
  fragmented_exposed: 'border-l-red-500',
}

interface PillarScoreCardProps {
  result: PillarResult
  isWeakest: boolean
}

export default function PillarScoreCard({ result, isWeakest }: PillarScoreCardProps) {
  const insight = pillarInsights[result.pillar][result.band]

  return (
    <div
      className={`rounded-2xl border bg-white p-6 shadow-sm transition-shadow hover:shadow-md ${
        isWeakest
          ? `border-l-4 ${accentBorder[result.band]} border-t border-r border-b border-gray-100`
          : 'border-gray-100'
      }`}
    >
      <div className="mb-4 flex items-start justify-between gap-2">
        <h3 className="text-lg font-bold text-navy-900">{result.label}</h3>
        <span
          className={`shrink-0 rounded-full px-3 py-1 text-xs font-bold ${badgeStyles[result.band]}`}
        >
          {bandLabels[result.band]}
        </span>
      </div>
      <div className="mb-2">
        <ScoreBar score={result.score} maxScore={result.maxScore} band={result.band} />
      </div>
      <div className="mb-4 text-right text-sm font-semibold text-navy-800">
        {result.score} / {result.maxScore}
      </div>
      <p className="text-sm leading-relaxed text-gray-600">{insight}</p>
    </div>
  )
}
