export interface IInputAttributes extends Record<string, string> {
  name: string
  type: 'text' | 'submit'
  value: string
}

export interface ITextareaAttributes extends Record<string, string | number | undefined> {
  rows?: number
  cols?: number
  name?: string
  value?: string
  as?: 'textarea'
}

export interface IRenderableObject {
  name: string
  attributes?: Record<string, string | number>
  content?: string | IRenderableObject[]
}

export interface FormOptions extends Record<string, string | undefined> {
  action?: string
  method?: string
}
