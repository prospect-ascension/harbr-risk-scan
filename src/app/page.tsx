'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

export default function Home() {
  const router = useRouter()
  const [name, setName] = useState('')
  const [sector, setSector] = useState('')
  const [role, setRole] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!name.trim() || !sector) {
      setError('Please enter your organisation name and select a sector.')
      return
    }
    const params = new URLSearchParams({
      name: name.trim(),
      sector,
      ...(role.trim() && { role: role.trim() }),
    })
    router.push(`/assessment?${params.toString()}`)
  }

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

      <main className="flex flex-1 items-center justify-center px-6 py-16">
        <div className="w-full max-w-xl">
          <div className="mb-2 inline-block rounded-full bg-navy-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-navy-700">
            Diagnostic Tool
          </div>
          <h1 className="mb-4 text-4xl font-bold leading-tight text-navy-900 sm:text-5xl">
            External Data Sharing Health Check
          </h1>
          <p className="mb-2 text-lg text-gray-500">
            A focused diagnostic for UK regulated utilities. Assess how your organisation manages the complexity, operational load, and governance of external data sharing.
          </p>
          <p className="mb-10 text-sm text-gray-400">
            ~5 minutes &middot; 8 questions &middot; 3 assessment areas
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="name" className="mb-1 block text-sm font-medium text-navy-900">
                Organisation name
              </label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => { setName(e.target.value); setError('') }}
                placeholder="e.g. National Grid"
                className="w-full rounded-xl border border-gray-200 px-4 py-3 text-base text-navy-900 placeholder-gray-400 outline-none transition-colors focus:border-navy-400 focus:ring-1 focus:ring-navy-400"
              />
            </div>

            <div>
              <label htmlFor="sector" className="mb-1 block text-sm font-medium text-navy-900">
                Sector
              </label>
              <select
                id="sector"
                value={sector}
                onChange={(e) => { setSector(e.target.value); setError('') }}
                className="w-full appearance-none rounded-xl border border-gray-200 bg-white px-4 py-3 text-base text-navy-900 outline-none transition-colors focus:border-navy-400 focus:ring-1 focus:ring-navy-400"
              >
                <option value="">Select your sector</option>
                <option value="electricity">Electricity</option>
                <option value="gas">Gas</option>
                <option value="water">Water</option>
                <option value="market_operator">Energy Market Operator</option>
              </select>
            </div>

            <div>
              <label htmlFor="role" className="mb-1 block text-sm font-medium text-navy-900">
                Your role <span className="font-normal text-gray-400">(optional)</span>
              </label>
              <input
                id="role"
                type="text"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                placeholder="e.g. Head of Regulatory Operations"
                className="w-full rounded-xl border border-gray-200 px-4 py-3 text-base text-navy-900 placeholder-gray-400 outline-none transition-colors focus:border-navy-400 focus:ring-1 focus:ring-navy-400"
              />
            </div>

            {error && (
              <p className="text-sm text-red-600">{error}</p>
            )}

            <button
              type="submit"
              className="w-full rounded-xl bg-harbr-blue py-4 text-base font-semibold text-white shadow-lg shadow-harbr-blue/20 transition-all hover:bg-blue-700 hover:shadow-xl"
            >
              Start Assessment
            </button>
          </form>

          <p className="mt-6 text-center text-xs text-gray-400">
            Your responses are not stored or shared.
          </p>
        </div>
      </main>
    </div>
  )
}
