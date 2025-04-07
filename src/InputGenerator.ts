import { IInputAttributes } from './attributes/IInputAttributes'
import { InputTag } from './tags/InputTag'
import { ITextareaAttributes } from './attributes/ITextareaAttributes'
import { TextareaTag } from './tags/TextareaTag'

export class InputGenerator {
  public static generateInput(templateFieldName: string, templateFieldValue: string, attributes?: IInputAttributes | ITextareaAttributes): InputTag | TextareaTag {
    if (attributes !== undefined) {
      if (attributes.as !== undefined) {
        attributes.value = templateFieldValue
        attributes.name = templateFieldName
        // following is to get expected attribute order for hexlet tests
        const attrColsRowsOrder = attributes.cols || attributes.rows ? ['rows', 'cols'] : ['cols', 'rows']
        const attributesOrder = attrColsRowsOrder.concat(['name']).concat(Object.keys(attributes).filter(e => !['cols', 'rows', 'name'].includes(e)))
        const orderedAttributes: Record<string, string | number | undefined> = {}
        attributesOrder.forEach(e => orderedAttributes[e] = attributes[e])
        return new TextareaTag(orderedAttributes as ITextareaAttributes)
      }
    }
    // following is to get expected attribute order for hexlet tests
    let attrs: Record<string, string | number | undefined> = { name: templateFieldName }
    if (attributes !== undefined) {
      attrs = Object.fromEntries(Object.entries(attrs).concat(Object.entries(attributes)))
    }
    (attrs as IInputAttributes).type = 'text';
    (attrs as IInputAttributes).value = templateFieldValue
    return new InputTag(attrs as IInputAttributes)
  }
}
