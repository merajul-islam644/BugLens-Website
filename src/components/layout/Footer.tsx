import { NAV, SITE } from '../../content/site'
import { navigate } from '../../lib/router'

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <div>
          <div className="brand" style={{ marginBottom: '0.5rem' }}>
            {SITE.name}
          </div>
          <a href={`mailto:${SITE.email}`} className="muted">
            {SITE.email}
          </a>
        </div>
        <nav className="footer-nav" aria-label="Footer">
          {NAV.map((item) => (
            <a
              key={item.id}
              href={`#${item.path}`}
              onClick={(e) => {
                e.preventDefault()
                navigate(item.path)
              }}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  )
}