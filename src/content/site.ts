export const SITE = {
  name: 'BugLens',
  tagline: 'Find the signal. Explain the bug.',
  email: 'merajzoarder7@gmail.com',
} as const

export type NavId = 'home' | 'how' | 'pricing' | 'about' | 'contact'

export interface NavItem {
  id: NavId
  label: string
  path: string
}

export const NAV: NavItem[] = [
  { id: 'home', label: 'Home', path: '/' },
  { id: 'how', label: 'How it works', path: '/how-it-works' },
  { id: 'pricing', label: 'Pricing', path: '/pricing' },
  { id: 'about', label: 'About', path: '/about' },
  { id: 'contact', label: 'Contact', path: '/contact' },
]

export function navByPath(path: string): NavItem | undefined {
  return NAV.find((n) => n.path === path)
}