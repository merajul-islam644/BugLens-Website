import { EVENT_FEED } from '../../content/how'
import type { FeedEvent } from '../../content/how'

const TONE_LABEL: Record<FeedEvent['tone'], string> = {
  info: 'Info',
  error: 'Error',
  capture: 'Capture',
}

const TONE_DOT: Record<FeedEvent['tone'], string> = {
  info: '',
  error: 'dot--red',
  capture: 'dot--amber',
}

export function EventFeed() {
  return (
    <div className="panel" role="list" aria-label="Example investigation event feed">
      <div className="panel__head">
        <span className="dot dot--red" aria-hidden="true" />
        <span className="dot dot--amber" aria-hidden="true" />
        <span className="dot dot--green" aria-hidden="true" />
        <span style={{ marginLeft: '0.4rem' }}>investigation — profile-save</span>
      </div>
      <ol className="panel__body" style={{ listStyle: 'none', padding: '1rem 1.1rem', margin: 0 }}>
        {EVENT_FEED.map((e) => (
          <li
            key={e.text}
            role="listitem"
            style={{ display: 'flex', gap: '0.7rem', alignItems: 'baseline', padding: '0.25rem 0' }}
          >
            <span className={`dot ${TONE_DOT[e.tone]}`} style={{ position: 'relative', top: '-1px' }} aria-hidden="true" />
            <span className="visually-hidden">{TONE_LABEL[e.tone]}: </span>
            <span>{e.text}</span>
          </li>
        ))}
      </ol>
    </div>
  )
}