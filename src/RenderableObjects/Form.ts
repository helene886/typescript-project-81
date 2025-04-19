import { IInputAttributes, ITextareaAttributes } from '../interfaces'
import { InputGenerator } from '../InputGenerator'
import { RenderableObject } from './RenderableObject'

export class Form extends RenderableObject {
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
    const label = new RenderableObject('label', { for: name }, name[0].toUpperCase() + name.toLowerCase().slice(1))
    const input = InputGenerator.generateInput(name, this.template[name], attributes)
    this.content ??= [];
    (this.content as RenderableObject[]).push(...[label, input])
  }

  public submit(value?: string) {
    const input = new RenderableObject('input', { type: 'submit', value: value ?? 'Save' })
    this.content ??= [];
    (this.content as RenderableObject[]).push(input)
  }
}
