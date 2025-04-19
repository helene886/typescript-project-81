import { ITextareaAttributes } from '../interfaces'
import { ITextareaOutputAttributes } from '../interfaces'
import { RenderableObject } from './RenderableObject'

export class Textarea extends RenderableObject {
  constructor(attributes: ITextareaAttributes) {
    // following is to get expected attribute order for hexlet tests
    const attrColsRowsOrder = attributes.cols || attributes.rows ? ['rows', 'cols'] : ['cols', 'rows']
    const attributesOrder = attrColsRowsOrder.concat(['name']).concat(Object.keys(attributes).filter(e => !['cols', 'rows', 'name'].includes(e)))
    const orderedAttributes: Record<string, string | number | undefined> = {}
    attributesOrder.forEach(e => orderedAttributes[e] = attributes[e])

    orderedAttributes.cols = attributes.cols ?? 20
    orderedAttributes.rows = attributes.rows ?? 40
    super('textarea', Object.fromEntries(Object.entries(orderedAttributes).filter(([key]) => key != 'as' && key != 'value')) as ITextareaOutputAttributes, attributes.value)
  }
}
