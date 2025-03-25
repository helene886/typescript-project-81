export class Tag {
  private static pairedTags = ['div', 'label']

  constructor(private name: string, private attributes?: object, private text?: string) {}

  public toString() {
    let attributes = ''
    if (this.attributes !== undefined) {
      const attributesObject = this.attributes
      const entries = Object.entries(attributesObject)
      if (entries.length > 0) {
        attributes = ' ' + entries.map(entry => `${entry[0]}="${entry[1]}"`).join(' ')
      }
    }
    const text = Tag.pairedTags.includes(this.name) && this.text !== undefined ? this.text : ''
    const closingTag = Tag.pairedTags.includes(this.name) ? `</${this.name}>` : ''
    return `<${this.name}${attributes}>${text}${closingTag}`
  }
}
