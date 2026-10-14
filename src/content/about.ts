export const ABOUT_INTRO = [
  'BugLens is a tool for QA leads and engineering managers who lose hours turning a vague bug into something an engineer can act on.',
  'It gathers screenshots, console errors, network calls and reproduction steps in one place, then turns them into a clear, reproducible bug report.',
  'The evidence does the talking: what was observed is kept apart from what is only a possible cause.',
]

export const AUDIENCE = [
  { role: 'QA engineers', detail: 'Capture a failure once and hand over everything an engineer needs.' },
  { role: 'Developers', detail: 'Receive a bug you can actually reproduce, with the logs and calls attached.' },
  { role: 'QA leads', detail: 'See every open investigation and its evidence in one place.' },
  { role: 'Engineering managers', detail: 'Stop losing hours to bug reports that cannot be acted on.' },
]

export const SAFETY = [
  {
    title: 'Only test what you own or are authorised to investigate',
    detail:
      'BugLens is for applications you own or have written permission to test. You choose the target and you stay responsible for it.',
  },
  {
    title: 'No irreversible actions',
    detail:
      'Investigations avoid destructive steps. BugLens does not delete data, change customer records or take actions that cannot be undone.',
  },
  {
    title: 'Secrets and personal data are masked',
    detail:
      'Tokens, passwords and personal details found in logs or responses are masked, so they do not end up in a report or a shared link.',
  },
]