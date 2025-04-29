import { IRenderableObject } from './interfaces'

export class Tag {
  private static singleTags = ['img', 'br', 'input']

  constructor(private obj: IRenderableObject) {}

  public toString(): string {
    const attrs = this.obj.attributes === undefined ? '' : ' ' + Object.entries(this.obj.attributes).map(([key, value]) => `${key}="${value as string}"`).join(' ')
    return `<${`${this.obj.name}${attrs}`.trim()}>`
      + (Tag.singleTags.includes(this.obj.name) || this.obj.content === undefined ? '' : typeof this.obj.content == 'string' ? this.obj.content : this.obj.content.map(e => new Tag(e).toString()).join(''))
      + (!Tag.singleTags.includes(this.obj.name) ? `</${this.obj.name}>` : '')
  }
}
