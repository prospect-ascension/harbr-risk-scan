'use client'

import { useState, useCallback, Suspense } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import Image from 'next/image'
import { questions } from '@/lib/questions'
import { pillarLabels, pillarDescriptions } from '@/lib/questions'
import { encodeState } from '@/lib/scoring'
import { Pillar } from '@/types'
import ProgressBar from '@/components/ProgressBar'
import QuestionCard from '@/components/QuestionCard'
import SectionIntro from '@/components/SectionIntro'

interface SectionIntroStep {
  type: 'intro'
  pillar: Pillar
  sectionNumber: number
}

interface QuestionStep {
  type: 'question'
  questionIndex: number
}

type Step = SectionIntroStep | QuestionStep

function buildSteps(): Step[] {
  const steps: Step[] = []
  let currentPillar: Pillar | null = null
  let sectionNumber = 0

  for (let i = 0; i < questions.length; i++) {
    const q = questions[i]
    if (q.pillar !== currentPillar) {
      currentPillar = q.pillar
      sectionNumber++
      steps.push({ type: 'intro', pillar: q.pillar, sectionNumber })
    }
    steps.push({ type: 'question', questionIndex: i })
  }

  return steps
}

const allSteps = buildSteps()

function AssessmentContent() {
  const router = useRouter()
  const searchParams = useSearchParams()

  const companyName = searchParams.get('name') || ''
  const sector = searchParams.get('sector') || ''
  const role = searchParams.get('role') || ''

  const [currentStepIndex, setCurrentStepIndex] = useState(0)
  const [answers, setAnswers] = useState<Record<string, number>>({})

  const currentStep = allSteps[currentStepIndex]

  const questionStepsCount = questions.length
  const currentQuestionNumber = (() => {
    let count = 0
    for (let i = 0; i <= currentStepIndex; i++) {
      if (allSteps[i].type === 'question') count++
    }
    return count - 1
  })()

  const handleSelect = useCallback((questionId: string, value: number) => {
    setAnswers((prev) => ({ ...prev, [questionId]: value }))
  }, [])

  const handleNext = () => {
    if (currentStepIndex < allSteps.length - 1) {
      setCurrentStepIndex((prev) => prev + 1)
    } else {
      const state = {
        company: {
          name: companyName,
          sector: sector as 'electricity' | 'gas' | 'water' | 'market_operator',
          ...(role && { role }),
        },
        answers,
      }
      router.push(`/results?data=${encodeState(state)}`)
    }
  }

  const handleBack = () => {
    if (currentStepIndex > 0) {
      setCurrentStepIndex((prev) => prev - 1)
    }
  }

  const isLastStep = currentStepIndex === allSteps.length - 1
  const canProceed =
    currentStep.type === 'intro' ||
    (currentStep.type === 'question' &&
      answers[questions[currentStep.questionIndex].id] !== undefined)

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <header className="w-full border-b border-gray-100">
        <div className="mx-auto flex h-20 max-w-4xl items-center justify-center px-6">
          <Image
            src="/harbr-logo.png"
            alt="Harbr Data"
            width={220}
            height={50}
            className="h-12 w-auto"
            priority
          />
        </div>
      </header>

      <main className="flex flex-1 flex-col items-center px-6 py-8">
        <div className="w-full max-w-xl">
          {currentStep.type === 'question' && (
            <div className="mb-10">
              <ProgressBar
                currentStep={currentQuestionNumber}
                totalSteps={questionStepsCount}
              />
            </div>
          )}

          <div className="min-h-[400px] flex items-center">
            <div className="w-full">
              {currentStep.type === 'intro' ? (
                <SectionIntro
                  pillar={currentStep.pillar}
                  title={pillarLabels[currentStep.pillar]}
                  description={pillarDescriptions[currentStep.pillar]}
                  sectionNumber={currentStep.sectionNumber}
                  onContinue={handleNext}
                />
              ) : (
                <>
                  <QuestionCard
                    key={questions[currentStep.questionIndex].id}
                    question={questions[currentStep.questionIndex]}
                    questionIndex={currentStep.questionIndex}
                    selectedValue={
                      answers[questions[currentStep.questionIndex].id] ?? null
                    }
                    onSelect={(value) =>
                      handleSelect(questions[currentStep.questionIndex].id, value)
                    }
                  />

                  <div className="mt-8 flex items-center justify-between">
                    <button
                      onClick={handleBack}
                      className="text-sm font-medium text-gray-400 transition-colors hover:text-gray-600"
                    >
                      &larr; Back
                    </button>
                    <button
                      onClick={handleNext}
                      disabled={!canProceed}
                      className={`rounded-xl px-8 py-3 text-base font-semibold text-white transition-all ${
                        canProceed
                          ? 'bg-harbr-blue shadow-lg shadow-harbr-blue/20 hover:bg-blue-700'
                          : 'cursor-not-allowed bg-gray-300'
                      }`}
                    >
                      {isLastStep ? 'View Results' : 'Next'}
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default function AssessmentPage() {
  return (
    <Suspense fallback={
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-gray-400">Loading...</div>
      </div>
    }>
      <AssessmentContent />
    </Suspense>
  )
}
