export class Tag {
  private static singleTags = ['img', 'br', 'input']

  constructor(protected name: string, protected attributes?: Record<string, string | number>, protected content?: string) {
    let attrs = ''
    if (this.attributes !== undefined) {
      const entries = Object.entries(this.attributes)
      if (entries.length > 0) {
        attrs = ' ' + entries.map(([key, value]) => `${key}="${value as string}"`).join(' ')
      }
    }
    this.tagParts.opening = `<${this.name}${attrs}>`
    this.tagParts.middle = !Tag.singleTags.includes(this.name) && this.content !== undefined ? this.content : ''
    this.tagParts.closing = !Tag.singleTags.includes(this.name) ? `</${this.name}>` : ''
  }

  protected tagParts = { opening: '', middle: '', closing: '' }

  public toString() {
    return this.tagParts.opening + this.tagParts.middle + this.tagParts.closing
  }
}
