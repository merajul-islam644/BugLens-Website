import { STAGES } from '../../content/how'
import { BookDemo } from '../../components/BookDemo'
import { EventFeed } from './EventFeed'
import { BugReportExample } from './BugReportExample'
import { CompareSections } from './CompareSections'

export function HowItWorksPage() {
  return (
    <>
      <section className="section hero">
        <div className="container">
          <p className="eyebrow">How it works</p>
          <h1>Four stages, from first run to a bug report</h1>
          <p className="lede measure">
            Each investigation follows the same path, so the evidence is complete before anyone tries to
            explain the cause.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <ol className="stack" style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {STAGES.map((stage, i) => (
              <li className="card" key={stage.title} style={{ marginTop: '1.25rem' }}>
                <div className="step">
                  <span className="step__num">0{i + 1}</span>
                  <div>
                    <h2 style={{ fontSize: '1.35rem' }}>{stage.title}</h2>
                    <p className="muted measure">{stage.paragraph}</p>
                    <h3 style={{ fontSize: '0.95rem', marginTop: '1rem' }}>It produces</h3>
                    <ul className="stack" style={{ paddingLeft: '1.1rem', margin: 0 }}>
                      {stage.produces.map((p) => (
                        <li key={p} className="muted small">
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="eyebrow">An example run</p>
          <h2>The investigation event feed</h2>
          <p className="lede measure">
            As a run happens, BugLens records each event in order. Here is what a profile-save
            investigation looks like.
          </p>
          <div style={{ marginTop: '1.5rem' }}>
            <EventFeed />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container container--narrow">
          <p className="eyebrow">The report</p>
          <h2>A full bug report, written from the evidence</h2>
          <p className="lede measure">
            This is the report BugLens produced for the profile-save bug above — every section an engineer
            needs, with the evidence attached.
          </p>
          <div style={{ marginTop: '1.5rem' }}>
            <BugReportExample />
          </div>
        </div>
      </section>

      <CompareSections />

      <section className="section">
        <div className="container container--narrow" style={{ textAlign: 'center' }}>
          <h2>Try it on one of your own bugs</h2>
          <p className="lede" style={{ margin: '0 auto 1.5rem' }}>
            Book a demo and we'll run the investigation together.
          </p>
          <BookDemo origin="How it works" />
        </div>
      </section>
    </>
  )
}