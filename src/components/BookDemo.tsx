import { navigate } from '../lib/router'

export function demoHref(origin: string): string {
  return `#/contact?from=${encodeURIComponent(origin)}`
}

interface BookDemoProps {
  origin: string
  variant?: 'primary' | 'outline'
  block?: boolean
  label?: string
}

export function BookDemo({ origin, variant = 'primary', block, label = 'Book a demo' }: BookDemoProps) {
  return (
    <a
      className={`button button--${variant}${block ? ' button--block' : ''}`}
      href={demoHref(origin)}
      onClick={(e) => {
        e.preventDefault()
        navigate(`/contact?from=${encodeURIComponent(origin)}`)
      }}
    >
      {label}
    </a>
  )
}