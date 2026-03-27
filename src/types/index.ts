export type Pillar = 'fragmentation' | 'operational_load' | 'governance_audit'

export type ScoreBand = 'controlled' | 'at_risk' | 'fragmented_exposed'

export interface AnswerOption {
  label: string
  value: number
  description?: string
}

export interface Question {
  id: string
  pillar: Pillar
  text: string
  subtitle?: string
  options: AnswerOption[]
}

export interface CompanyDetails {
  name: string
  sector: 'electricity' | 'gas' | 'water' | 'market_operator'
  role?: string
}

export interface AssessmentState {
  company: CompanyDetails
  answers: Record<string, number>
}

export interface PillarResult {
  pillar: Pillar
  label: string
  score: number
  maxScore: number
  percentage: number
  band: ScoreBand
}

export interface OverallResult {
  totalScore: number
  maxScore: number
  band: ScoreBand
  pillars: PillarResult[]
  weakestPillar: Pillar
}
