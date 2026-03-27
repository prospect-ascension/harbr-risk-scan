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
          <div className="rounded-2xl border-l-4 border-l-harbr-blue border border-gray-100 bg-white p-8 shadow-sm">
            <div className="mb-1 text-sm font-bold uppercase tracking-wider text-harbr-blue">
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
          <div className="rounded-2xl bg-navy-900 p-8">
            <h3 className="mb-3 text-lg font-bold text-white">Regulatory context</h3>
            <p className="text-sm leading-relaxed text-navy-200">
              The Data (Use and Access) Act 2025 requires regulated utilities to provide structured access to consumer and operational data. As Smart Data schemes are established, the volume, variety, and velocity of external data sharing obligations will increase. Organisations that rely on fragmented, manual processes face growing compliance and operational risk that compounds with each new counterparty, dataset, and regulatory requirement.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="mb-10 no-print">
          <CTASection />
        </section>

        {/* Footer */}
        <footer className="border-t border-gray-200 py-8 text-center">
          <div className="flex items-center justify-center gap-3 text-sm text-gray-400">
            <span>Powered by</span>
            <Image
              src="/harbr-logo.png"
              alt="Harbr Data"
              width={120}
              height={28}
              className="h-6 w-auto opacity-60"
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
