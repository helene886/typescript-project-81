import { Tag } from './tags/Tag'

export class TagRenderer {
  private static singleTags = ['img', 'br', 'input']

  public static renderTag(tag: Tag, format = 'html'): string {
    let result = ''
    if (format === 'html') {
      let attrs = ''
      if (tag.attributes !== undefined) {
        const entries = Object.entries(tag.attributes)
        if (entries.length > 0) {
          attrs = ' ' + entries.map(([key, value]) => `${key}="${value as string}"`).join(' ')
        }
      }
      const tagParts = { opening: '', middle: '', closing: '' }
      tagParts.opening = `<${tag.name}${attrs}>`
      tagParts.middle = this.singleTags.includes(tag.name) || tag.content === undefined ? '' : typeof tag.content == 'string' ? tag.content : tag.content.map(e => TagRenderer.renderTag(e)).join('')
      tagParts.closing = !this.singleTags.includes(tag.name) ? `</${tag.name}>` : ''
      result = tagParts.opening + tagParts.middle + tagParts.closing
    }
    return result
  }
}
