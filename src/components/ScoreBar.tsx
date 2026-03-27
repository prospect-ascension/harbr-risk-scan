'use client'

import { ScoreBand } from '@/types'
import { useEffect, useState } from 'react'

interface ScoreBarProps {
  score: number
  maxScore: number
  band: ScoreBand
}

const barColorMap: Record<ScoreBand, string> = {
  controlled: '#059669',
  at_risk: '#D97706',
  fragmented_exposed: '#DC2626',
}

export default function ScoreBar({ score, maxScore, band }: ScoreBarProps) {
  const [width, setWidth] = useState(0)
  const target = (score / maxScore) * 100

  useEffect(() => {
    const timer = setTimeout(() => setWidth(target), 100)
    return () => clearTimeout(timer)
  }, [target])

  return (
    <div className="h-3 w-full overflow-hidden rounded-full bg-gray-100">
      <div
        className="h-full rounded-full transition-score-bar"
        style={{ width: `${width}%`, backgroundColor: barColorMap[band] }}
      />
    </div>
  )
}
