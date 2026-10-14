export interface Stage {
  title: string
  paragraph: string
  produces: string[]
}

export const STAGES: Stage[] = [
  {
    title: 'Start an investigation',
    paragraph:
      'You add a project and the URL you want to look at. BugLens sets up a clean session so the run starts from a known state every time.',
    produces: ['A saved investigation with the target URL', 'A record of who started it and when'],
  },
  {
    title: 'Capture evidence',
    paragraph:
      'As you browse, BugLens quietly collects what is happening: screenshots, console logs, network requests, API responses and the steps you took.',
    produces: [
      'Screenshots of the page at each step',
      'Console logs and warnings',
      'Network requests and API responses',
      'A trace you can replay with Playwright',
    ],
  },
  {
    title: 'Verify reproduction',
    paragraph:
      'Before calling something a bug, BugLens repeats the steps to check the problem really does happen again — and rules out a one-off glitch.',
    produces: ['A confirmed set of reproduction steps', 'A clear note when reproduction cannot be confirmed'],
  },
  {
    title: 'Produce the bug report',
    paragraph:
      'Everything gathered is written up as a single report an engineer can pick up: what happened, how to repeat it, and what the evidence shows.',
    produces: ['A structured bug report', 'Evidence attached to each step', 'A shareable summary for your tracker'],
  },
]

export interface FeedEvent {
  tone: 'info' | 'error' | 'capture'
  text: string
}

export const EVENT_FEED: FeedEvent[] = [
  { tone: 'info', text: 'Loaded /profile' },
  { tone: 'error', text: 'Observed PATCH /api/profile returning HTTP 500' },
  { tone: 'capture', text: 'Captured screenshot after save action' },
]

export interface ReportField {
  label: string
  value: string
  mono?: boolean
  severity?: string
}

export const BUG_REPORT: ReportField[] = [
  { label: 'Title', value: 'Saving the profile form returns an error and the change is not kept' },
  {
    label: 'Summary',
    value:
      'When a signed-in user edits their profile and saves, the page shows an error and the change is lost. The save request fails on the server.',
  },
  { label: 'Environment', value: 'Chrome on desktop, staging environment, user account of a QA test user.' },
  { label: 'Preconditions', value: 'Signed in as a test user with a profile that already has a name and photo.' },
  {
    label: 'Steps to reproduce',
    value: '1. Open /profile. 2. Change the display name. 3. Press Save.',
    mono: true,
  },
  { label: 'Actual result', value: 'The save fails. The page shows an error and the new name is not kept.' },
  { label: 'Expected result', value: 'The profile saves and the new name appears after the page reloads.' },
  {
    label: 'Evidence',
    value:
      'Screenshot of the error after Save; console log showing the failed call; network entry for PATCH /api/profile with status 500; API response body; the saved reproduction steps.',
  },
  {
    label: 'Severity',
    value: 'High — a core action fails for every user who tries to save a profile change.',
    severity: 'High',
  },
  {
    label: 'Possible cause',
    value:
      'Hypothesis: the server rejects the update because a required field is missing from the request. Confidence: medium. Evidence: the PATCH body does not include the unchanged fields the endpoint expects.',
  },
]

export interface CompareSide {
  label: string
  entries: string[]
}

export const RETEST: { original: CompareSide; retest: CompareSide; note: string } = {
  original: {
    label: 'Original run',
    entries: ['PATCH /api/profile returned HTTP 500', 'Profile change lost', 'Captured before the fix'],
  },
  retest: {
    label: 'Retest after fix',
    entries: ['PATCH /api/profile returned HTTP 200', 'Profile change kept', 'Same steps as the original run'],
  },
  note: 'The original and retest evidence appear side by side so the two runs can be read together. A QA engineer confirms the final status — BugLens never closes a bug on its own.',
}

export const DUPLICATE_NOTE =
  'Before a report is filed, BugLens compares it with earlier investigations of the same project. When the steps and the failing evidence line up, it flags the report as a likely duplicate so the same bug is not worked twice.'