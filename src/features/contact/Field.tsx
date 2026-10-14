import type { ReactNode } from 'react'

interface FieldProps {
  id: string
  label: string
  required?: boolean
  error?: string
  children: ReactNode
}

export function Field({ id, label, required, error, children }: FieldProps) {
  return (
    <div className={`field ${error ? 'field--error' : ''}`}>
      <label className="field__label" htmlFor={id}>
        {label} {required ? <span className="field__required">(required)</span> : null}
      </label>
      {children}
      {error ? (
        <span className="field__error" role="alert" id={`${id}-error`}>
          {error}
        </span>
      ) : null}
    </div>
  )
}