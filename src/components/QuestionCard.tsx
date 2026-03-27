'use client'

import { Question } from '@/types'
import { pillarLabels } from '@/lib/questions'
import OptionButton from './OptionButton'

interface QuestionCardProps {
  question: Question
  questionIndex: number
  selectedValue: number | null
  onSelect: (value: number) => void
}

export default function QuestionCard({
  question,
  questionIndex,
  selectedValue,
  onSelect,
}: QuestionCardProps) {
  return (
    <div className="animate-fadeIn">
      <div className="mb-2">
        <span className="inline-block rounded-full bg-navy-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-navy-700">
          {pillarLabels[question.pillar]}
        </span>
      </div>
      <h2 className="mb-2 text-2xl font-bold text-navy-900">
        {question.text}
      </h2>
      {question.subtitle && (
        <p className="mb-8 text-base text-gray-500">{question.subtitle}</p>
      )}
      <div className="space-y-3">
        {question.options.map((option) => (
          <OptionButton
            key={option.value}
            option={option}
            isSelected={selectedValue === option.value}
            onClick={() => onSelect(option.value)}
          />
        ))}
      </div>
    </div>
  )
}
