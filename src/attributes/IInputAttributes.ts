export interface IInputAttributes extends Record<string, string> {
  name: string
  type: 'text' | 'submit'
  value: string
}
