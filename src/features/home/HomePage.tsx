import { SITE } from '../../content/site'
import { EVIDENCE_TYPES, WORKFLOW, COMPARISON } from '../../content/home'
import { BookDemo } from '../../components/BookDemo'
import { navigate } from '../../lib/router'

export function HomePage() {
  return (
    <>
      <section className="section hero">
        <div className="container">
          <p className="eyebrow">Evidence-driven bug reports</p>
          <h1 className="measure--wide">{SITE.tagline}</h1>
          <p className="lede measure">
            BugLens turns a vague failure into a clear, reproducible engineering issue — gathering the
            screenshot, the logs, the network calls and the steps in one place.
          </p>
          <div className="hero__actions">
            <BookDemo origin="Home" />
            <a
              className="button button--outline"
              href="#/how-it-works"
              onClick={(e) => {
                e.preventDefault()
                navigate('/how-it-works')
              }}
            >
              How it works
            </a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="eyebrow">What BugLens collects</p>
          <h2>Six kinds of evidence, gathered automatically</h2>
          <p className="lede measure">
            Screenshots, logs and calls usually live in different tools. BugLens brings them together so
            nothing is missing when the report is written.
          </p>
          <div className="grid grid--6">
            {EVIDENCE_TYPES.map((e) => (
              <div className="card" key={e.name}>
                <h3>{e.name}</h3>
                <p className="muted small" style={{ margin: 0 }}>
                  {e.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="eyebrow">The workflow</p>
          <h2>From a target URL to a resolved bug</h2>
          <p className="lede measure">Six steps, in order, from the first run to the final retest.</p>
          <div className="workflow-line" role="list" aria-label="Workflow steps">
            {WORKFLOW.map((s, i) => (
              <span key={s.name} role="listitem" style={{ display: 'inline-flex', gap: '0.75rem', alignItems: 'center' }}>
                <span>{s.name}</span>
                {i < WORKFLOW.length - 1 && (
                  <span className="workflow-line__arrow" aria-hidden="true">
                    →
                  </span>
                )}
              </span>
            ))}
          </div>
          <ol className="stack" style={{ marginTop: '1.5rem', paddingLeft: '1.1rem' }}>
            {WORKFLOW.map((s) => (
              <li key={s.name}>
                <strong>{s.name}.</strong>{' '}
                <span className="muted">{s.detail}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="eyebrow">Facts and hypotheses</p>
          <h2>Observed facts stay separate from AI hypotheses</h2>
          <p className="lede measure">
            BugLens keeps them apart so a possible cause is never mistaken for something the evidence
            actually showed.
          </p>
          <div className="facts-compare" style={{ marginTop: '1.5rem' }}>
            <div className="card">
              <span className="tag">Observed fact</span>
              <ul className="stack" style={{ marginTop: '1rem', paddingLeft: '1.1rem' }}>
                {COMPARISON.map((r) => (
                  <li key={r.fact} className="muted">
                    {r.fact}
                  </li>
                ))}
              </ul>
            </div>
            <div className="card">
              <span className="tag tag--severity">Hypothesis</span>
              <ul className="stack" style={{ marginTop: '1rem', paddingLeft: '1.1rem' }}>
                {COMPARISON.map((r) => (
                  <li key={r.hypothesis} className="muted">
                    {r.hypothesis}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container container--narrow" style={{ textAlign: 'center' }}>
          <h2>See it work on a bug you already have</h2>
          <p className="lede measure" style={{ margin: '0 auto 1.5rem' }}>
            Book a demo and we'll walk through an investigation together.
          </p>
          <BookDemo origin="Home" />
        </div>
      </section>
    </>
  )
}