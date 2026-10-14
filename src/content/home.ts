export interface EvidenceType {
  name: string
  detail: string
}

export const EVIDENCE_TYPES: EvidenceType[] = [
  { name: 'Screenshots', detail: 'The state of the page when something went wrong.' },
  { name: 'Browser console logs', detail: 'Errors and warnings printed by the page.' },
  { name: 'Network requests', detail: 'Which calls were made, and what came back.' },
  { name: 'API responses', detail: 'The exact body and status of each response.' },
  { name: 'Reproduction steps', detail: 'The actions needed to trigger the problem again.' },
  { name: 'Playwright runs', detail: 'An automated run that repeats the steps for you.' },
]

export interface WorkflowStep {
  name: string
  detail: string
}

export const WORKFLOW: WorkflowStep[] = [
  { name: 'Add project or URL', detail: 'Point BugLens at what you want to test.' },
  { name: 'Capture evidence', detail: 'Screenshots, logs, network and traces are collected.' },
  { name: 'Investigate', detail: 'BugLens reproduces the problem and reads the evidence.' },
  { name: 'Verify reproduction', detail: 'The failure is confirmed as repeatable, not a one-off.' },
  { name: 'Generate report', detail: 'A clear bug report is written from the evidence.' },
  { name: 'Retest and resolve', detail: 'After a fix, the run repeats and results are compared.' },
]

export interface ComparisonRow {
  fact: string
  hypothesis: string
}

export const COMPARISON: ComparisonRow[] = [
  {
    fact: 'Taken directly from the evidence: the screenshot, the log line, the response body.',
    hypothesis: 'A possible cause, clearly labelled as a hypothesis.',
  },
  {
    fact: 'Reads as a statement of what happened, with no guesswork.',
    hypothesis: 'Ships with the evidence behind it and a confidence level.',
  },
  {
    fact: 'Never changes between the original run and a retest.',
    hypothesis: 'Replaced or dropped as new evidence appears.',
  },
]