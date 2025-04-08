import { IInputAttributes } from '../interfaces'
import { Tag } from './Tag'

export class InputTag extends Tag {
  constructor(attributes: IInputAttributes) {
    super('input', attributes)
  }
}
