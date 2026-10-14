export const INCLUDED = [
  'Manual issue creation',
  'Evidence upload',
  'Browser capture',
  'AI-assisted analysis',
  'Retest comparison',
  'Exports',
]

export interface Plan {
  name: string
  description: string
}

export const PLANS: Plan[] = [
  {
    name: 'Team',
    description:
      'For a QA or engineering team that tests regularly and wants every bug to arrive with its evidence attached.',
  },
  {
    name: 'Enterprise',
    description:
      'For organisations with several teams, stricter access needs and a larger library of investigations to keep in order.',
  },
]

export const PRICING_NOTE = "Pricing is quoted for your team — book a demo and we'll walk it through."