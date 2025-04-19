import { IInputAttributes } from '../interfaces'
import { RenderableObject } from './RenderableObject'

export class Input extends RenderableObject {
  constructor(attributes: IInputAttributes) {
    // following is to get expected attribute order for hexlet tests
    let attrs: Record<string, string | number | undefined> = { name: attributes.name }
    attrs = Object.fromEntries(Object.entries(attrs).concat(Object.entries(attributes).filter(([key]) => key != 'type' && key != 'value')));
    (attrs as IInputAttributes).type = attributes.type;
    (attrs as IInputAttributes).value = attributes.value
    super('input', attrs as IInputAttributes)
  }
}
