import { IInputAttributes, IRenderableObject } from '../interfaces'

export class Input implements IRenderableObject {
  public name: string
  public attributes?: Record<string, string | number> | undefined
  public content?: string | IRenderableObject[] | undefined

  constructor(attributes: IInputAttributes) {
    this.name = 'input'
    const { name, type, value, ...restAttributes } = attributes
    this.attributes = {
      name: name,
      type: type,
      value: value,
      ...restAttributes,
    }
  }
}
