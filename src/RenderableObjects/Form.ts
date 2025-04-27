import { IInputAttributes, IRenderableObject, ITextareaAttributes } from '../interfaces'
import { InputGenerator } from '../InputGenerator'

export class Form implements IRenderableObject {
  public name: string
  public attributes?: Record<string, string | number> | undefined
  public content?: string | IRenderableObject[] | undefined

  constructor(private template: Record<string, string>, action: Record<string, string>) {
    const entries = Object.entries(action)
    const attributes: Record<string, string> = { method: 'post' }
    attributes.action = entries.length > 0 && !(entries.length == 1 && action.method == 'post') ? entries[0][1] : '#'

    this.name = 'form'
    this.attributes = attributes
  }

  public input(name: string, attributes?: IInputAttributes | ITextareaAttributes) {
    if (!Object.keys(this.template).includes(name)) {
      throw new Error(`Field '${name}' does not exist in the template.`)
    }
    const label: IRenderableObject = { name: 'label', attributes: { for: name }, content: name[0].toUpperCase() + name.toLowerCase().slice(1) }
    const input = InputGenerator.generateInput(name, this.template[name], attributes)
    this.content ??= [];
    (this.content as IRenderableObject[]).push(...[label, input])
  }

  public submit(value?: string) {
    const input: IRenderableObject = { name: 'input', attributes: { type: 'submit', value: value ?? 'Save' } }
    this.content ??= [];
    (this.content as IRenderableObject[]).push(input)
  }
}
