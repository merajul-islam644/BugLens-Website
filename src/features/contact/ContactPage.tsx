import { SITE } from '../../content/site'
import { BookingForm } from './BookingForm'
import { MessageForm } from './MessageForm'

function originLabel(origin: string | null): string {
  switch (origin) {
    case 'Home':
      return 'Home'
    case 'Pricing':
      return 'Pricing'
    case 'How it works':
      return 'How it works'
    case 'About':
      return 'About'
    default:
      return 'Contact'
  }
}

export function ContactPage({ origin }: { origin: string | null }) {
  const from = originLabel(origin)

  return (
    <>
      <section className="section hero">
        <div className="container">
          <p className="eyebrow">Contact</p>
          <h1>Book a demo or send a message</h1>
          <p className="lede measure">
            Email us directly at{' '}
            <a href={`mailto:${SITE.email}`} className="mono">
              {SITE.email}
            </a>
            , or use one of the forms below. Both open your mail app, so nothing is stored on this site.
          </p>
          <p className="muted small measure" style={{ marginTop: '0.5rem' }}>
            Can't open a mail app? The address above is shown as plain text, ready to copy.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid grid--2" style={{ alignItems: 'start' }}>
            <BookingForm origin={from} />
            <div className="stack">
              <MessageForm />
              <p className="muted small">
                Demo bookings are answered by email, usually within one working day.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}