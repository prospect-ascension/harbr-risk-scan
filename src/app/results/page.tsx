'use client'

import { Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import Image from 'next/image'
import { decodeState, calculateResults } from '@/lib/scoring'
import { weakestPillarInsights } from '@/lib/insights'
import { pillarLabels } from '@/lib/questions'
import OverallScoreBanner from '@/components/OverallScoreBanner'
import PillarScoreCard from '@/components/PillarScoreCard'
import CTASection from '@/components/CTASection'

function ResultsContent() {
  const searchParams = useSearchParams()
  const data = searchParams.get('data')

  if (!data) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p className="text-gray-500">No assessment data found. Please start from the beginning.</p>
      </div>
    )
  }

  const state = decodeState(data)
  if (!state) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p className="text-gray-500">Invalid assessment data. Please start from the beginning.</p>
      </div>
    )
  }

  const result = calculateResults(state.answers)

  return (
    <div className="flex min-h-screen flex-col bg-navy-50/50">
      <header className="w-full border-b border-gray-100 bg-white no-print">
        <div className="mx-auto flex h-16 max-w-4xl items-center px-6">
          <Image
            src="/harbr-logo.png"
            alt="Harbr Data"
            width={140}
            height={32}
            className="h-8 w-auto"
            priority
          />
        </div>
      </header>

      <main className="mx-auto w-full max-w-4xl px-6 py-10">
        {/* Overall Score */}
        <section className="mb-8">
          <OverallScoreBanner result={result} companyName={state.company.name} />
        </section>

        {/* Pillar Scores */}
        <section className="mb-8">
          <h2 className="mb-4 text-xl font-bold text-navy-900">Assessment by area</h2>
          <div className="grid gap-4 sm:grid-cols-3">
            {result.pillars.map((pillar) => (
              <PillarScoreCard
                key={pillar.pillar}
                result={pillar}
                isWeakest={pillar.pillar === result.weakestPillar}
              />
            ))}
          </div>
        </section>

        {/* Primary Finding */}
        <section className="mb-8">
          <div className="rounded-2xl border border-navy-200 bg-white p-8">
            <div className="mb-1 text-sm font-semibold uppercase tracking-wider text-navy-500">
              Primary area of exposure
            </div>
            <h2 className="mb-4 text-2xl font-bold text-navy-900">
              {pillarLabels[result.weakestPillar]}
            </h2>
            <p className="text-base leading-relaxed text-gray-600">
              {weakestPillarInsights[result.weakestPillar]}
            </p>
          </div>
        </section>

        {/* Regulatory Context */}
        <section className="mb-8">
          <div className="rounded-2xl bg-white p-8 border border-gray-200">
            <h3 className="mb-3 text-lg font-bold text-navy-900">Regulatory context</h3>
            <p className="text-sm leading-relaxed text-gray-600">
              The Data (Use and Access) Act 2025 requires regulated utilities to provide structured access to consumer and operational data. As Smart Data schemes are established, the volume, variety, and velocity of external data sharing obligations will increase. Organisations that rely on fragmented, manual processes face growing compliance and operational risk that compounds with each new counterparty, dataset, and regulatory requirement.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="mb-10 no-print">
          <CTASection />
        </section>

        {/* Footer */}
        <footer className="border-t border-gray-200 py-6 text-center">
          <div className="flex items-center justify-center gap-2 text-sm text-gray-400">
            <span>Powered by</span>
            <Image
              src="/harbr-logo.png"
              alt="Harbr Data"
              width={80}
              height={20}
              className="h-4 w-auto opacity-50"
            />
          </div>
        </footer>
      </main>
    </div>
  )
}

export default function ResultsPage() {
  return (
    <Suspense fallback={
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-gray-400">Loading results...</div>
      </div>
    }>
      <ResultsContent />
    </Suspense>
  )
}
