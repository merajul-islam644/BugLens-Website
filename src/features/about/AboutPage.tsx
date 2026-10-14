import { ABOUT_INTRO, AUDIENCE, SAFETY } from '../../content/about'

export function AboutPage() {
  return (
    <>
      <section className="section hero">
        <div className="container">
          <p className="eyebrow">About</p>
          <h1>What BugLens is</h1>
          <div className="measure" style={{ fontSize: '1.1rem' }}>
            {ABOUT_INTRO.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="eyebrow">Who it is for</p>
          <h2>Built for the people closest to the bug</h2>
          <div className="grid grid--2" style={{ marginTop: '1.25rem' }}>
            {AUDIENCE.map((a) => (
              <div className="card" key={a.role}>
                <h3>{a.role}</h3>
                <p className="muted small" style={{ margin: 0 }}>
                  {a.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="eyebrow">Safety</p>
          <h2>How BugLens is kept safe to run</h2>
          <div className="stack" style={{ marginTop: '1.25rem', maxWidth: '78ch' }}>
            {SAFETY.map((s) => (
              <div className="card" key={s.title}>
                <h3>{s.title}</h3>
                <p className="muted" style={{ margin: 0 }}>
                  {s.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}