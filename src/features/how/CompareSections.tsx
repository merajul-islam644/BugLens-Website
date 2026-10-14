import { RETEST, DUPLICATE_NOTE } from '../../content/how'

export function CompareSections() {
  return (
    <>
      <section className="section">
        <div className="container">
          <p className="eyebrow">Duplicate detection</p>
          <h2>The same bug is not worked twice</h2>
          <p className="lede measure">{DUPLICATE_NOTE}</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="eyebrow">Retest comparison</p>
          <h2>Original and retest evidence, side by side</h2>
          <p className="lede measure--wide">{RETEST.note}</p>
          <div className="grid grid--2" style={{ marginTop: '1.5rem' }}>
            <div className="panel">
              <div className="panel__head">
                <span className="dot" aria-hidden="true" />
                {RETEST.original.label}
              </div>
              <ul className="panel__body" style={{ listStyle: 'none', margin: 0 }}>
                {RETEST.original.entries.map((entry) => (
                  <li key={entry} style={{ padding: '0.2rem 0' }}>
                    <span className="dot dot--red" aria-hidden="true" style={{ display: 'inline-block', marginRight: '0.6rem' }} />
                    <span className="visually-hidden">Failure: </span>
                    {entry}
                  </li>
                ))}
              </ul>
            </div>
            <div className="panel">
              <div className="panel__head">
                <span className="dot dot--green" aria-hidden="true" />
                {RETEST.retest.label}
              </div>
              <ul className="panel__body" style={{ listStyle: 'none', margin: 0 }}>
                {RETEST.retest.entries.map((entry) => (
                  <li key={entry} style={{ padding: '0.2rem 0' }}>
                    <span className="dot dot--green" aria-hidden="true" style={{ display: 'inline-block', marginRight: '0.6rem' }} />
                    <span className="visually-hidden">Pass: </span>
                    {entry}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}