import { Tag } from './Tag'

export class Form extends Tag {
  constructor(private template: Record<string, unknown>, private action: Record<string, unknown>) {
    const entries = Object.entries(action)
    const attributes: Record<string, unknown> = { method: 'post' }
    attributes.action = entries.length > 0 && !(entries.length == 1 && action.method == 'post') ? entries[0][1] : '#'
    super('form', attributes)
  }

  public input(name: string, attributes?: Record<string, unknown>) {
    if (!Object.keys(this.template).includes(name)) {
      throw new Error(`Field '${name}' does not exist in the template.`)
    }
    let tagName = 'input'
    let tagAttributes: Record<string, unknown> = {}
    let resultingTagAttributes: Record<string, unknown> = { name: name }
    let content = ''
    if (attributes !== undefined) {
      const entries = Object.entries(attributes)
      const asAttribute = entries.find(e => e[0] == 'as')
      if (asAttribute !== undefined) {
        tagAttributes = Object.fromEntries(entries.filter(([key]) => key != 'as'))
        tagName = asAttribute[1] as string
        if (tagName == 'textarea') {
          content = this.template[name] as string
          tagAttributes.cols = tagAttributes.cols ?? 20
          tagAttributes.rows = tagAttributes.rows ?? 40
        }
      }
      else {
        tagAttributes = attributes
        tagAttributes.type = 'text'
        tagAttributes.value = this.template[name]
        tagAttributes = Object.fromEntries(Object.entries(tagAttributes).concat(entries))
      }
    }
    else {
      tagAttributes.type = 'text'
      tagAttributes.value = this.template[name]
    }
    resultingTagAttributes = Object.fromEntries(Object.entries(resultingTagAttributes).concat(Object.entries(tagAttributes)))
    this.tagParts.middle += new Tag('label', { for: name }, name[0].toUpperCase() + name.toLowerCase().slice(1)).toString()
    this.tagParts.middle += new Tag(tagName, resultingTagAttributes, content).toString()
  }

  public submit(value?: string) {
    const tagAttributes: Record<string, string> = { type: 'submit', value: value ?? 'Save' }
    this.tagParts.middle += new Tag('input', tagAttributes).toString()
  }
}
