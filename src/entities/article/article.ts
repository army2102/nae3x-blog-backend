import { v4 as uuidv4 } from 'uuid'

import { Entity } from '@/entities/commons/entity.interface'

class Article implements Entity {
  public readonly id: string
  private createdAt: Date
  private updatedAt: Date

  constructor(private content: string) {
    this.id = uuidv4()
    this.createdAt = new Date()
    this.updatedAt = new Date()
  }
}

export { Article }
