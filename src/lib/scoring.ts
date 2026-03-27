import { questions, pillarLabels } from './questions'
import { AssessmentState, OverallResult, Pillar, PillarResult, ScoreBand } from '@/types'

function getPillarBand(score: number, maxScore: number): ScoreBand {
  const percentage = score / maxScore
  if (percentage <= 0.4) return 'controlled'
  if (percentage <= 0.7) return 'at_risk'
  return 'fragmented_exposed'
}

function getOverallBand(totalScore: number): ScoreBand {
  if (totalScore <= 10) return 'controlled'
  if (totalScore <= 18) return 'at_risk'
  return 'fragmented_exposed'
}

export function calculateResults(answers: Record<string, number>): OverallResult {
  const pillarScores: Record<Pillar, { score: number; max: number }> = {
    fragmentation: { score: 0, max: 0 },
    operational_load: { score: 0, max: 0 },
    governance_audit: { score: 0, max: 0 },
  }

  for (const q of questions) {
    const answer = answers[q.id] ?? 1
    pillarScores[q.pillar].score += answer
    pillarScores[q.pillar].max += 3
  }

  const pillars: PillarResult[] = (Object.keys(pillarScores) as Pillar[]).map((pillar) => {
    const { score, max } = pillarScores[pillar]
    return {
      pillar,
      label: pillarLabels[pillar],
      score,
      maxScore: max,
      percentage: score / max,
      band: getPillarBand(score, max),
    }
  })

  const totalScore = pillars.reduce((sum, p) => sum + p.score, 0)
  const maxScore = pillars.reduce((sum, p) => sum + p.maxScore, 0)

  const weakestPillar = pillars.reduce((worst, p) =>
    p.percentage > worst.percentage ? p : worst
  ).pillar

  return {
    totalScore,
    maxScore,
    band: getOverallBand(totalScore),
    pillars,
    weakestPillar,
  }
}

export function encodeState(state: AssessmentState): string {
  return btoa(JSON.stringify(state))
}

export function decodeState(encoded: string): AssessmentState | null {
  try {
    return JSON.parse(atob(encoded))
  } catch {
    return null
  }
}

export const bandLabels: Record<ScoreBand, string> = {
  controlled: 'Controlled',
  at_risk: 'At Risk',
  fragmented_exposed: 'Fragmented & Exposed',
}

export const bandColors: Record<ScoreBand, { bg: string; text: string; bar: string; border: string }> = {
  controlled: {
    bg: 'bg-emerald-50',
    text: 'text-emerald-700',
    bar: 'bg-emerald-500',
    border: 'border-emerald-500',
  },
  at_risk: {
    bg: 'bg-amber-50',
    text: 'text-amber-700',
    bar: 'bg-amber-500',
    border: 'border-amber-500',
  },
  fragmented_exposed: {
    bg: 'bg-red-50',
    text: 'text-red-700',
    bar: 'bg-red-500',
    border: 'border-red-500',
  },
}
