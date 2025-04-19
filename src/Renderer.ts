import { RenderableObject } from './RenderableObjects/RenderableObject'

export class Renderer {
  public static renderTag(objectToRender: RenderableObject, format = 'html'): string {
    let result = ''
    if (format === 'html') {
      const singleTags: readonly string[] = ['img', 'br', 'input']
      let attrs = ''
      if (objectToRender.attributes !== undefined) {
        const entries = Object.entries(objectToRender.attributes)
        if (entries.length > 0) {
          attrs = ' ' + entries.map(([key, value]) => `${key}="${value as string}"`).join(' ')
        }
      }
      const tagParts = { opening: '', middle: '', closing: '' }
      tagParts.opening = `<${objectToRender.name}${attrs}>`
      tagParts.middle = singleTags.includes(objectToRender.name) || objectToRender.content === undefined ? '' : typeof objectToRender.content == 'string' ? objectToRender.content : objectToRender.content.map(e => Renderer.renderTag(e)).join('')
      tagParts.closing = !singleTags.includes(objectToRender.name) ? `</${objectToRender.name}>` : ''
      result = tagParts.opening + tagParts.middle + tagParts.closing
    }
    return result
  }
}
