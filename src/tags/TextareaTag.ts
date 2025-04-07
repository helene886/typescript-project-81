import { ITextareaAttributes } from '../attributes/ITextareaAttributes'
import { ITextareaOutputAttributes } from '../attributes/ITextareaOutputAttributes'
import { Tag } from './Tag'

export class TextareaTag extends Tag {
  constructor(attributes: ITextareaAttributes) {
    attributes.cols = attributes.cols ?? 20
    attributes.rows = attributes.rows ?? 40
    super('textarea', Object.fromEntries(Object.entries(attributes).filter(([key]) => key != 'as' && key != 'value')) as ITextareaOutputAttributes, attributes.value)
  }
}
