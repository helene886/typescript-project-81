import { Form } from './Form'

// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace HexletCode {
  export function formFor(template: Record<string, unknown>, action: Record<string, unknown>, func: (param: Form) => void): Form {
    const form = new Form(template, action)
    func(form)
    return form
  }
}
