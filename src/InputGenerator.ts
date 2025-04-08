import { IInputAttributes, ITextareaAttributes } from './interfaces'
import { InputTag } from './tags/InputTag'
import { TextareaTag } from './tags/TextareaTag'

export class InputGenerator {
  public static generateInput(templateFieldName: string, templateFieldValue: string, attributes?: IInputAttributes | ITextareaAttributes): InputTag | TextareaTag {
    if (attributes?.as === 'textarea') {
      attributes.value = templateFieldValue
      attributes.name = templateFieldName
      return new TextareaTag(attributes as ITextareaAttributes)
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
