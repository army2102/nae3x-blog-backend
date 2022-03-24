import { v4 as uuidv4 } from 'uuid'

import { Entity } from '@/entities/commons/entity.interface'

class Article implements Entity {
  public readonly id: string
  public createdAt: Date
  public updatedAt: Date

  constructor(public content: string, public title: string) {
    this.id = uuidv4()
    this.createdAt = new Date()
    this.updatedAt = new Date()
  }
}

export { Article }
