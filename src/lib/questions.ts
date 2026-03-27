import { Question } from '@/types'

export const questions: Question[] = [
  // Pillar 1: Fragmentation
  {
    id: 'frag_mechanisms',
    pillar: 'fragmentation',
    text: 'How many different mechanisms do you use to share data externally?',
    subtitle: 'Think portals, file transfer, cloud sharing, APIs, email-based exchanges...',
    options: [
      { label: '1\u20132 mechanisms', value: 1 },
      { label: '3\u20134 mechanisms', value: 2 },
      { label: '5 or more', value: 3 },
    ],
  },
  {
    id: 'frag_consistency',
    pillar: 'fragmentation',
    text: 'Are these configured consistently across counterparties?',
    subtitle: 'Does every external party get the same setup, or does it vary?',
    options: [
      { label: 'Yes, consistently configured', value: 1 },
      { label: 'Mostly, with some exceptions', value: 2 },
      { label: 'No, it varies significantly', value: 3 },
    ],
  },
  // Pillar 2: Operational Load
  {
    id: 'ops_onboarding',
    pillar: 'operational_load',
    text: 'When onboarding a new external party, how much manual setup is required?',
    subtitle: 'Consider provisioning, configuration, testing, and handover.',
    options: [
      { label: 'Low \u2014 mostly automated or templated', value: 1 },
      { label: 'Moderate \u2014 some manual steps required', value: 2 },
      { label: 'High \u2014 largely manual, custom each time', value: 3 },
    ],
  },
  {
    id: 'ops_change',
    pillar: 'operational_load',
    text: 'When a regulatory or operational change occurs, how many systems need updating?',
    subtitle: 'E.g., a new data field is required, or an access rule changes.',
    options: [
      { label: '1 system', value: 1 },
      { label: '2\u20133 systems', value: 2 },
      { label: '4 or more systems', value: 3 },
    ],
  },
  {
    id: 'ops_centralisation',
    pillar: 'operational_load',
    text: 'Is access provisioning centralised or handled across multiple teams?',
    subtitle: 'Who decides and executes when a new party needs data access?',
    options: [
      { label: 'Centralised \u2014 one team owns it', value: 1 },
      { label: 'Shared \u2014 a few teams coordinate', value: 2 },
      { label: 'Distributed \u2014 handled ad hoc by multiple teams', value: 3 },
    ],
  },
  // Pillar 3: Governance & Audit
  {
    id: 'gov_visibility',
    pillar: 'governance_audit',
    text: 'Can you easily answer: who accessed what data, when, and why?',
    subtitle: 'Imagine a regulator asks tomorrow. How quickly could you respond?',
    options: [
      { label: 'Yes, within hours', value: 1 },
      { label: 'Partially \u2014 it would take days to compile', value: 2 },
      { label: 'No \u2014 it would be a significant effort', value: 3 },
    ],
  },
  {
    id: 'gov_controls',
    pillar: 'governance_audit',
    text: 'Are access controls applied consistently across all delivery methods?',
    subtitle: 'Same rules whether data goes via API, portal, file transfer, or other channels.',
    options: [
      { label: 'Yes, consistent controls everywhere', value: 1 },
      { label: 'Mostly, but some gaps exist', value: 2 },
      { label: 'No, controls vary by method', value: 3 },
    ],
  },
  {
    id: 'gov_audit_readiness',
    pillar: 'governance_audit',
    text: 'How confident are you in your audit readiness today?',
    subtitle: 'Could you demonstrate full compliance with data sharing obligations right now?',
    options: [
      { label: 'High confidence', value: 1 },
      { label: 'Medium \u2014 some areas need work', value: 2 },
      { label: 'Low \u2014 significant gaps exist', value: 3 },
    ],
  },
]

export const pillarLabels: Record<string, string> = {
  fragmentation: 'Fragmentation',
  operational_load: 'Operational Load',
  governance_audit: 'Governance & Audit',
}

export const pillarDescriptions: Record<string, string> = {
  fragmentation: 'How many systems and mechanisms are involved in external data sharing, and how consistently are they configured.',
  operational_load: 'The manual effort involved in onboarding, change management, and day-to-day coordination of external data sharing.',
  governance_audit: 'Your ability to evidence access, apply consistent controls, and demonstrate audit readiness.',
}
