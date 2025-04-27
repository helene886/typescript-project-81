import { IRenderableObject } from './interfaces'
import { Tag } from './Tag'

export class Renderer {
  public static render(objectToRender: IRenderableObject, format = 'html'): string {
    let result = ''
    if (format === 'html') {
      result = new Tag(objectToRender).toString()
    }
    return result
  }
}
