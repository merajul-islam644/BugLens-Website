import { INCLUDED, PLANS, PRICING_NOTE } from '../../content/pricing'
import { BookDemo } from '../../components/BookDemo'

export function PricingPage() {
  return (
    <>
      <section className="section hero">
        <div className="container">
          <p className="eyebrow">Pricing</p>
          <h1>Two ways to use BugLens</h1>
          <p className="lede measure">
            Both options include the full evidence toolset. The right fit depends on how many teams need
            it and how much you need to keep in order.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="eyebrow">Included in every plan</p>
          <h2>Everything you need to turn a failure into a report</h2>
          <ul className="grid grid--2" style={{ listStyle: 'none', padding: 0, marginTop: '1.25rem' }}>
            {INCLUDED.map((item) => (
              <li className="card" key={item} style={{ display: 'flex', gap: '0.6rem', alignItems: 'baseline' }}>
                <CheckIcon />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid grid--2">
            {PLANS.map((plan) => (
              <div className="card" key={plan.name} style={{ display: 'flex', flexDirection: 'column' }}>
                <h2 style={{ fontSize: '1.5rem' }}>{plan.name}</h2>
                <p className="muted" style={{ flex: 1 }}>
                  {plan.description}
                </p>
                <p className="small" style={{ fontWeight: 600, marginBottom: '1.25rem' }}>
                  {PRICING_NOTE}
                </p>
                <BookDemo origin="Pricing" block />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

function CheckIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="hsl(217,91%,60%)" strokeWidth="2.5" aria-hidden="true" style={{ flex: 'none', position: 'relative', top: '2px' }}>
      <path d="M20 6L9 17l-5-5" />
    </svg>
  )
}