import { useEffect, useState } from 'react'

export interface Route {
  path: string
  query: URLSearchParams
}

function readRoute(): Route {
  const hash = window.location.hash.replace(/^#/, '')
  const [rawPath, rawQuery = ''] = hash.split('?')
  const path = rawPath || '/'
  return { path: path.startsWith('/') ? path : `/${path}`, query: new URLSearchParams(rawQuery) }
}

export function navigate(to: string): void {
  if (window.location.hash === `#${to}`) {
    window.scrollTo({ top: 0 })
    return
  }
  window.location.hash = to
}

export function useRoute(): Route {
  const [route, setRoute] = useState<Route>(readRoute)

  useEffect(() => {
    const onChange = () => setRoute(readRoute())
    window.addEventListener('hashchange', onChange)
    if (!window.location.hash) window.location.hash = '/'
    return () => window.removeEventListener('hashchange', onChange)
  }, [])

  return route
}