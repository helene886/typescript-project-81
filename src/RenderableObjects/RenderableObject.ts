export class RenderableObject {
  constructor(public name: string, public attributes?: Record<string, string | number>, public content?: string | RenderableObject[]) {}
}
