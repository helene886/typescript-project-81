export class Tag {
  private static pairedTags = ['div', 'label', 'form', 'textarea', 'label']

  constructor(protected name: string, protected attributes?: object, protected content?: string) {
    let attrs = ''
    if (this.attributes !== undefined) {
      const attributesObject = this.attributes
      const entries = Object.entries(attributesObject)
      if (entries.length > 0) {
        attrs = ' ' + entries.map(entry => `${entry[0]}="${entry[1]}"`).join(' ')
      }
    }
    const text = Tag.pairedTags.includes(this.name) && this.content !== undefined ? this.content : ''
    const closingTag = Tag.pairedTags.includes(this.name) ? `</${this.name}>` : ''
    this.tagParts.opening = `<${this.name}${attrs}>`
    this.tagParts.middle = text
    this.tagParts.closing = closingTag
  }

  protected tagParts: { opening: string, middle: string, closing: string } = { opening: '', middle: '', closing: '' }

  public toString() {
    return this.tagParts.opening + this.tagParts.middle + this.tagParts.closing
  }
}
