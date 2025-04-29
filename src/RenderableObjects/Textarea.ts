import { IRenderableObject, ITextareaAttributes } from '../interfaces'

export class Textarea implements IRenderableObject {
  public name: string
  public attributes?: Record<string, string | number> | undefined
  public content?: string | IRenderableObject[] | undefined

  constructor(attributes: ITextareaAttributes) {
    this.name = 'textarea'
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { as, value, ...restAttributes } = attributes
    this.attributes = {
      cols: attributes.cols ?? 20,
      rows: attributes.rows ?? 40,
      ...restAttributes,
    }
    this.content = value
  }
}
