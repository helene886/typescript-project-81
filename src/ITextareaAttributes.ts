export interface ITextareaAttributes extends Record<string, string | number | undefined> {
  rows?: number
  cols?: number
  name: string
  value: string
  as: 'textarea'
}
