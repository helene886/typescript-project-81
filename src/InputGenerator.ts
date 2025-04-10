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
    attributes ??= {}
    attributes.name = templateFieldName
    attributes.type = 'text'
    attributes.value = templateFieldValue
    return new InputTag(attributes as IInputAttributes)
  }
}
