export class Tag {
  constructor(public name: string, public attributes?: Record<string, string | number>, public content?: string | Tag[]) {}
}
