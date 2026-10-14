import { useState } from 'react'
import { NAV, SITE } from '../../content/site'
import type { NavId } from '../../content/site'
import { navigate } from '../../lib/router'
import type { Theme } from '../../lib/useTheme'

interface HeaderProps {
  active: NavId
  theme: Theme
  onToggleTheme: () => void
}

export function Header({ active, theme, onToggleTheme }: HeaderProps) {
  const [open, setOpen] = useState(false)

  const go = (path: string) => {
    setOpen(false)
    navigate(path)
  }

  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <a
          className="brand"
          href="#/"
          onClick={(e) => {
            e.preventDefault()
            go('/')
          }}
        >
          {SITE.name}
        </a>

        <nav className={`nav header__nav ${open ? 'nav--open' : ''}`} aria-label="Main">
          {NAV.map((item) => (
            <a
              key={item.id}
              className={`nav__link ${item.id === active ? 'is-active' : ''}`}
              href={`#${item.path}`}
              aria-current={item.id === active ? 'page' : undefined}
              onClick={(e) => {
                e.preventDefault()
                go(item.path)
              }}
            >
              {item.label}
            </a>
          ))}
          <a
            className="button button--primary drawer-cta"
            href="#/contact"
            onClick={(e) => {
              e.preventDefault()
              go('/contact')
            }}
          >
            Book a demo
          </a>
        </nav>

        <div className="header__actions">
          <button
            type="button"
            className="icon-button"
            onClick={onToggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
          </button>
          <a
            className="button button--primary header__cta"
            href="#/contact"
            onClick={(e) => {
              e.preventDefault()
              go('/contact')
            }}
          >
            Book a demo
          </a>
          <button
            type="button"
            className="icon-button menu-toggle"
            aria-expanded={open}
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
          >
            <MenuIcon open={open} />
          </button>
        </div>
      </div>
    </header>
  )
}

function SunIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
    </svg>
  )
}

function MoonIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
    </svg>
  )
}

function MenuIcon({ open }: { open: boolean }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M3 6h18M3 12h18M3 18h18" />}
    </svg>
  )
}