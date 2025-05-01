export class Tag {
  private static singleTags = ['img', 'br', 'input']

  constructor(private name: string, private attributes?: Record<string, string | number>, private content?: string) {}

  public toString(): string {
    const attrs = this.attributes === undefined ? '' : ' ' + Object.entries(this.attributes).map(([key, value]) => `${key}="${value as string}"`).join(' ')
    return `<${`${this.name}${attrs}`.trim()}>`
      + (Tag.singleTags.includes(this.name) || this.content === undefined ? '' : this.content)
      + (!Tag.singleTags.includes(this.name) ? `</${this.name}>` : '')
  }
}
