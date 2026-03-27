'use client'

import { AnswerOption } from '@/types'

interface OptionButtonProps {
  option: AnswerOption
  isSelected: boolean
  onClick: () => void
}

export default function OptionButton({ option, isSelected, onClick }: OptionButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`group w-full rounded-xl border-2 px-5 py-4 text-left transition-all duration-200 ${
        isSelected
          ? 'border-navy-800 bg-navy-50 shadow-sm'
          : 'border-gray-200 bg-white hover:border-navy-200 hover:bg-navy-50/50'
      }`}
    >
      <div className="flex items-center justify-between">
        <span
          className={`text-base font-medium ${
            isSelected ? 'text-navy-900' : 'text-gray-700'
          }`}
        >
          {option.label}
        </span>
        <div
          className={`flex h-6 w-6 items-center justify-center rounded-full border-2 transition-all ${
            isSelected
              ? 'border-navy-800 bg-navy-800'
              : 'border-gray-300 group-hover:border-navy-300'
          }`}
        >
          {isSelected && (
            <svg className="h-3.5 w-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          )}
        </div>
      </div>
      {option.description && (
        <p className="mt-1 text-sm text-gray-500">{option.description}</p>
      )}
    </button>
  )
}
