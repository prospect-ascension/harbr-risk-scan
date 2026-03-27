import { Pillar, ScoreBand } from '@/types'

type InsightMap = Record<Pillar, Record<ScoreBand, string>>

export const pillarInsights: InsightMap = {
  fragmentation: {
    controlled:
      'Your external data sharing infrastructure appears relatively consolidated. A small number of mechanisms and consistent configuration across counterparties reduces operational overhead and makes governance significantly easier.',
    at_risk:
      'You\'re managing data sharing across several mechanisms, and configuration isn\'t fully consistent. This is common in regulated utilities, but each additional mechanism and exception adds hidden complexity that compounds over time.',
    fragmented_exposed:
      'You\'re operating across 5+ mechanisms with inconsistent configuration per counterparty. Every new connection adds complexity. This creates hidden operational debt that compounds with every regulatory change or new data sharing obligation.',
  },
  operational_load: {
    controlled:
      'Onboarding and change management appear well-structured, with limited manual intervention. This positions you well as data sharing obligations scale under DUAA.',
    at_risk:
      'Onboarding and change management involve material manual effort spread across multiple teams. As the volume and velocity of external data sharing obligations increase under DUAA, the current operating model may not scale without significant additional resource.',
    fragmented_exposed:
      'External party onboarding is largely manual, changes trigger work across 4+ systems, and provisioning is handled ad hoc by distributed teams. This level of operational load is unsustainable as regulatory obligations expand. Small changes are already creating disproportionate effort.',
  },
  governance_audit: {
    controlled:
      'You can evidence access, apply consistent controls, and demonstrate audit readiness. This is a strong foundation for meeting the transparency requirements of the Data (Use and Access) Act.',
    at_risk:
      'You have partial visibility into who accessed what and when, but compiling a complete picture takes time. Some gaps exist in how controls are applied across delivery methods. This creates exposure that may surface during regulatory scrutiny.',
    fragmented_exposed:
      'You would struggle to answer a regulator\'s basic question: who accessed what, when, and why. With the Data (Use and Access) Act now in force, this is not a theoretical risk \u2014 it\'s an active compliance exposure that grows with every new counterparty and data sharing obligation.',
  },
}

export const weakestPillarInsights: Record<Pillar, string> = {
  fragmentation:
    'Fragmentation is your primary area of exposure. The number of mechanisms and inconsistency across counterparties means that every operational change \u2014 a new data field, a new party, a regulatory update \u2014 creates unpredictable ripple effects. This isn\'t just an infrastructure problem; it drives the operational load and governance gaps you may also be seeing.',
  operational_load:
    'Operational load is your primary area of exposure. The manual effort required to onboard parties, apply changes, and coordinate across teams is absorbing capacity that should be going elsewhere. As DUAA expands the scope and frequency of external data sharing, this pressure will intensify \u2014 not reduce.',
  governance_audit:
    'Governance and audit readiness is your primary area of exposure. The inability to quickly evidence who accessed what, when, and under what authority is a material compliance risk. Under DUAA, regulated utilities must demonstrate structured, auditable control over external data sharing \u2014 and the current setup leaves significant gaps.',
}

export const overallBandSummaries: Record<ScoreBand, string> = {
  controlled:
    'Your organisation appears to have a relatively well-managed approach to external data sharing. As obligations scale under DUAA, the focus should be on maintaining this standard across new counterparties and use cases.',
  at_risk:
    'Your external data sharing setup shows signs of strain. While individual elements may be manageable today, the combination of fragmentation, manual processes, and governance gaps creates compounding risk as obligations grow.',
  fragmented_exposed:
    'Your external data sharing is fragmented, operationally heavy, and difficult to govern. This is not unusual in regulated utilities \u2014 but under DUAA, it represents a material and growing exposure across operations, compliance, and scalability.',
}
