import { IInputAttributes } from './IInputAttributes'
import { Tag } from './Tag'

export class InputTag extends Tag {
  constructor(attributes: IInputAttributes) {
    super('input', attributes)
  }
}
