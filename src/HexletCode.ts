import { FormTag } from './FormTag'

export default class HexletCode {
  public static formFor(template: Record<string, string>, action: Record<string, string>, func: (param: FormTag) => void): string {
    const formTag = new FormTag(template, action)
    func(formTag)
    return formTag.toString()
  }
}
