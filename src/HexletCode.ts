import { Form } from './Form'
export default class HexletCode {
  public static formFor(template: Record<string, unknown>, action: Record<string, unknown>, func: (param: Form) => void): string {
    const form = new Form(template, action)
    func(form)
    return form.toString()
  }
}
