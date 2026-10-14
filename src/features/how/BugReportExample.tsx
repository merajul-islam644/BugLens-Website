import { BUG_REPORT } from '../../content/how'

export function BugReportExample() {
  return (
    <article className="card report" aria-labelledby="report-title">
      <span className="tag">Example bug report</span>
      <h3 id="report-title" style={{ marginTop: '0.9rem' }}>
        Profile save fails on the account screen
      </h3>
      <dl>
        {BUG_REPORT.map((f) => (
          <div key={f.label}>
            <dt>{f.label}</dt>
            <dd className={f.mono ? 'hard mono' : ''} style={f.mono ? { whiteSpace: 'pre-line' } : undefined}>
              {f.severity && <span className="tag tag--severity" style={{ marginRight: '0.5rem' }}>{f.severity}</span>}
              {f.value}
            </dd>
          </div>
        ))}
      </dl>
    </article>
  )
}