import { IRenderableObject, ITextareaAttributes } from '../interfaces'
import { ITextareaOutputAttributes } from '../interfaces'

export class Textarea implements IRenderableObject {
  public name: string
  public attributes?: Record<string, string | number> | undefined
  public content?: string | IRenderableObject[] | undefined

  constructor(attributes: ITextareaAttributes) {
    // following is to get expected attribute order for hexlet tests
    const attrColsRowsOrder = attributes.cols || attributes.rows ? ['rows', 'cols'] : ['cols', 'rows']
    const attributesOrder = attrColsRowsOrder.concat(['name']).concat(Object.keys(attributes).filter(e => !['cols', 'rows', 'name'].includes(e)))
    const orderedAttributes: Record<string, string | number | undefined> = {}
    attributesOrder.forEach(e => orderedAttributes[e] = attributes[e])

    orderedAttributes.cols = attributes.cols ?? 20
    orderedAttributes.rows = attributes.rows ?? 40

    this.name = 'textarea'
    this.attributes = Object.fromEntries(Object.entries(orderedAttributes).filter(([key]) => key != 'as' && key != 'value')) as ITextareaOutputAttributes
    this.content = attributes.value
  }
}
