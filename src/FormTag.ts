import { IInputAttributes } from './IInputAttributes'
import { InputGenerator } from './InputGenerator'
import { ITextareaAttributes } from './ITextareaAttributes'
import { Tag } from './Tag'

export class FormTag extends Tag {
  constructor(private template: Record<string, string>, action: Record<string, string>) {
    const entries = Object.entries(action)
    const attributes: Record<string, string> = { method: 'post' }
    attributes.action = entries.length > 0 && !(entries.length == 1 && action.method == 'post') ? entries[0][1] : '#'
    super('form', attributes)
  }

  public input(name: string, attributes?: IInputAttributes | ITextareaAttributes) {
    if (!Object.keys(this.template).includes(name)) {
      throw new Error(`Field '${name}' does not exist in the template.`)
    }
    this.tagParts.middle += new Tag('label', { for: name }, name[0].toUpperCase() + name.toLowerCase().slice(1)).toString()
    this.tagParts.middle += InputGenerator.generateInput(name, this.template[name], attributes).toString()
  }

  public submit(value?: string) {
    this.tagParts.middle += new Tag('input', { type: 'submit', value: value ?? 'Save' }).toString()
  }
}
