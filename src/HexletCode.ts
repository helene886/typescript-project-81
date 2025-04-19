import { Renderer } from './Renderer'
import { Form } from './RenderableObjects/Form'

export default class HexletCode {
  public static formFor(template: Record<string, string>, action: Record<string, string>, func: (param: Form) => void): string {
    const formTag = new Form(template, action)
    func(formTag)
    return Renderer.renderTag(formTag)
  }
}
