import { useState } from 'react'
import { Field } from './Field'
import { buildMailto, openMailto } from '../../lib/mail'

interface BookingFormProps {
  origin: string
}

const BLANK = {
  name: '',
  email: '',
  company: '',
  teamSize: '',
  investigate: '',
}

const NAME_EMAIL_ERROR = 'Please add your name and work email so we can reply.'

export function BookingForm({ origin }: BookingFormProps) {
  const [values, setValues] = useState(BLANK)
  const [errors, setErrors] = useState<{ name?: string; email?: string }>({})

  const set = (key: keyof typeof BLANK) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setValues((v) => ({ ...v, [key]: e.target.value }))

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    const next: { name?: string; email?: string } = {}
    if (!values.name.trim() || !values.email.trim()) {
      if (!values.name.trim()) next.name = NAME_EMAIL_ERROR
      if (!values.email.trim()) next.email = NAME_EMAIL_ERROR
    }
    setErrors(next)
    if (Object.keys(next).length > 0) return

    openMailto(
      buildMailto('BugLens demo request', {
        'Came from': origin,
        Name: values.name,
        'Work email': values.email,
        Company: values.company,
        'Team size': values.teamSize,
        'What you want to investigate': values.investigate,
      }),
    )
  }

  return (
    <form className="card" onSubmit={submit} noValidate aria-labelledby="booking-title">
      <h2 id="booking-title" style={{ fontSize: '1.35rem' }}>
        Book a demo
      </h2>
      <p className="muted small">
        Five fields, then your mail app opens. Demo bookings are answered by email, usually within one
        working day.
      </p>

      <Field id="bk-name" label="Name" required error={errors.name}>
        <input
          id="bk-name"
          name="name"
          autoComplete="name"
          value={values.name}
          onChange={set('name')}
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? 'bk-name-error' : undefined}
        />
      </Field>

      <Field id="bk-email" label="Work email" required error={errors.email}>
        <input
          id="bk-email"
          name="email"
          type="email"
          autoComplete="email"
          value={values.email}
          onChange={set('email')}
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? 'bk-email-error' : undefined}
        />
      </Field>

      <Field id="bk-company" label="Company">
        <input id="bk-company" name="company" autoComplete="organization" value={values.company} onChange={set('company')} />
      </Field>

      <Field id="bk-team" label="Team size">
        <input id="bk-team" name="teamSize" value={values.teamSize} onChange={set('teamSize')} />
      </Field>

      <Field id="bk-investigate" label="What you want to investigate">
        <input id="bk-investigate" name="investigate" value={values.investigate} onChange={set('investigate')} />
      </Field>

      <button type="submit" className="button button--primary button--block">
        Book a demo
      </button>
    </form>
  )
}