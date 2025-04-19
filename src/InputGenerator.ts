import { IInputAttributes, ITextareaAttributes } from './interfaces'
import { Input } from './RenderableObjects/Input'
import { Textarea } from './RenderableObjects/Textarea'

export class InputGenerator {
  public static generateInput(templateFieldName: string, templateFieldValue: string, attributes?: IInputAttributes | ITextareaAttributes): Input | Textarea {
    if (attributes?.as === 'textarea') {
      attributes.value = templateFieldValue
      attributes.name = templateFieldName
      return new Textarea(attributes as ITextareaAttributes)
    }
    attributes ??= {}
    attributes.name = templateFieldName
    attributes.type = 'text'
    attributes.value = templateFieldValue
    return new Input(attributes as IInputAttributes)
  }
}
