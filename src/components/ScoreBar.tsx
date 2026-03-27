'use client'

import { ScoreBand } from '@/types'
import { bandColors } from '@/lib/scoring'
import { useEffect, useState } from 'react'

interface ScoreBarProps {
  score: number
  maxScore: number
  band: ScoreBand
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
        className={`h-full rounded-full transition-score-bar ${bandColors[band].bar}`}
        style={{ width: `${width}%` }}
      />
    </div>
  )
}
