import { Renderer } from './Renderer'
import { Form } from './RenderableObjects/Form'
import { FormOptions } from './interfaces'

export default class HexletCode {
  public static formFor(template: Record<string, string>, options: FormOptions, callback: (param: Form) => void): string {
    const form = new Form(template, options)
    callback(form)
    return Renderer.render(form)
  }
}
