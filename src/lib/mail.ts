import { SITE } from '../content/site'

export interface MailFields {
  [label: string]: string
}

export function buildMailto(subject: string, fields: MailFields): string {
  const body = Object.entries(fields)
    .filter(([, value]) => value.trim() !== '')
    .map(([label, value]) => `${label}: ${value}`)
    .join('\n')
  const params = new URLSearchParams()
  params.set('subject', subject)
  params.set('body', body)
  return `mailto:${SITE.email}?${params.toString().replace(/\+/g, '%20')}`
}

export function openMailto(url: string): void {
  window.location.href = url
}