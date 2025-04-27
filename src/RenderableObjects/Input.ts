import { IInputAttributes, IRenderableObject } from '../interfaces'

export class Input implements IRenderableObject {
  public name: string
  public attributes?: Record<string, string | number> | undefined
  public content?: string | IRenderableObject[] | undefined

  constructor(attributes: IInputAttributes) {
    // following is to get expected attribute order for hexlet tests
    let attrs: Record<string, string | number> = { name: attributes.name }
    attrs = Object.fromEntries(Object.entries(attrs).concat(Object.entries(attributes).filter(([key]) => key != 'type' && key != 'value')));
    (attrs as IInputAttributes).type = attributes.type;
    (attrs as IInputAttributes).value = attributes.value
    this.name = 'input'
    this.attributes = attrs
  }
}
