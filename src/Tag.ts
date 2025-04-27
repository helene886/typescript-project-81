import { IRenderableObject } from './interfaces'

export class Tag {
  private static singleTags = ['img', 'br', 'input']
  private tagParts = { opening: '', middle: '', closing: '' }

  constructor(object: IRenderableObject) {
    let attrs = ''
    if (object.attributes !== undefined) {
      const entries = Object.entries(object.attributes)
      if (entries.length > 0) {
        attrs = ' ' + entries.map(([key, value]) => `${key}="${value as string}"`).join(' ')
      }
    }
    this.tagParts.opening = `<${object.name}${attrs}>`
    this.tagParts.middle = Tag.singleTags.includes(object.name) || object.content === undefined ? '' : typeof object.content == 'string' ? object.content : object.content.map(e => new Tag(e).toString()).join('')
    this.tagParts.closing = !Tag.singleTags.includes(object.name) ? `</${object.name}>` : ''
  }

  public toString() {
    return this.tagParts.opening + this.tagParts.middle + this.tagParts.closing
  }
}
