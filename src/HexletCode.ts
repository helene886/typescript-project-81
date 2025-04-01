import { Form } from './Form'

export function formFor(template: Record<string, unknown>, action: Record<string, unknown>, func: (param: Form) => void): Form {
  const form = new Form(template, action)
  func(form)
  return form
}
