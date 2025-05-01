import { IRenderableObject } from './interfaces'
import { Tag } from './Tag'

export class Renderer {
  public static render(objectToRender: IRenderableObject, format = 'html'): string {
    let result = ''
    if (format === 'html') {
      result = new Tag(objectToRender.name, objectToRender.attributes, Renderer.getContent(objectToRender)).toString()
    }
    return result
  }

  private static getContent(objectToRender: IRenderableObject): string {
    if (typeof objectToRender.content === 'string') {
      return objectToRender.content
    }
    let content = ''
    if (typeof objectToRender.content !== 'string' && objectToRender.content !== undefined) {
      objectToRender.content.forEach(e => content += new Tag(e.name, e.attributes, typeof e.content === 'string' ? e.content : e.content?.map(el => Renderer.getContent(el)).join('')).toString())
    }
    return content
  }
}
