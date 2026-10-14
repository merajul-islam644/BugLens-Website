import { useState } from 'react'
import { Field } from './Field'
import { buildMailto, openMailto } from '../../lib/mail'

const BLANK = { name: '', email: '', message: '' }
const MESSAGE_ERROR = 'Please write a short message.'

export function MessageForm() {
  const [values, setValues] = useState(BLANK)
  const [error, setError] = useState<string>('')

  const set = (key: keyof typeof BLANK) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setValues((v) => ({ ...v, [key]: e.target.value }))

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!values.message.trim()) {
      setError(MESSAGE_ERROR)
      return
    }
    setError('')
    openMailto(
      buildMailto('Message from the BugLens site', {
        Name: values.name,
        Email: values.email,
        Message: values.message,
      }),
    )
  }

  return (
    <form className="card" onSubmit={submit} noValidate aria-labelledby="message-title">
      <h2 id="message-title" style={{ fontSize: '1.35rem' }}>
        Send a message
      </h2>
      <p className="muted small">Three fields. Your mail app opens with the message ready to send.</p>

      <Field id="msg-name" label="Name">
        <input id="msg-name" name="name" autoComplete="name" value={values.name} onChange={set('name')} />
      </Field>

      <Field id="msg-email" label="Email">
        <input id="msg-email" name="email" type="email" autoComplete="email" value={values.email} onChange={set('email')} />
      </Field>

      <Field id="msg-message" label="Message" error={error}>
        <textarea
          id="msg-message"
          name="message"
          value={values.message}
          onChange={set('message')}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? 'msg-message-error' : undefined}
        />
      </Field>

      <button type="submit" className="button button--primary button--block">
        Send message
      </button>
    </form>
  )
}