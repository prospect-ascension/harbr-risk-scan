'use client'

import { PillarResult } from '@/types'
import { bandColors, bandLabels } from '@/lib/scoring'
import { pillarInsights } from '@/lib/insights'
import ScoreBar from './ScoreBar'

interface PillarScoreCardProps {
  result: PillarResult
  isWeakest: boolean
}

export default function PillarScoreCard({ result, isWeakest }: PillarScoreCardProps) {
  const colors = bandColors[result.band]
  const insight = pillarInsights[result.pillar][result.band]

  return (
    <div
      className={`rounded-2xl border bg-white p-6 ${
        isWeakest ? `border-l-4 ${colors.border}` : 'border-gray-200'
      }`}
    >
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-lg font-bold text-navy-900">{result.label}</h3>
        <span
          className={`rounded-full px-3 py-1 text-xs font-semibold ${colors.bg} ${colors.text}`}
        >
          {bandLabels[result.band]}
        </span>
      </div>
      <div className="mb-2">
        <ScoreBar score={result.score} maxScore={result.maxScore} band={result.band} />
      </div>
      <div className="mb-4 text-right text-sm text-gray-400">
        {result.score} / {result.maxScore}
      </div>
      <p className="text-sm leading-relaxed text-gray-600">{insight}</p>
    </div>
  )
}
