import { Entity } from '../commons/entity.interface'

interface ArticleEntityInput {
  id: string
  content: string
  title: string
  thumbnail: string
  createdAt: Date
  updatedAt: Date
}

interface ArticleEntityInterface extends Entity {
  content: string
  title: string
  thumbnail: string
  createdAt: Date
  updatedAt: Date
}

export { ArticleEntityInput, ArticleEntityInterface }
