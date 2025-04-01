import { Form } from './Form'
export default class HexletCode {
  public static formFor(template: Record<string, string>, action: Record<string, string>, func: (param: Form) => void): string {
    const form = new Form(template, action)
    func(form)
    return form.toString()
  }
}
