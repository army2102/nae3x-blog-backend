import {
  ArticleEntityInput,
  ArticleEntityInterface
} from './articleEntity.interface'

class Article implements ArticleEntityInterface {
  public id: string
  public content: string
  public title: string
  public thumbnail: string
  public createdAt: Date
  public updatedAt: Date

  constructor(input: ArticleEntityInput) {
    const { id, content, title, thumbnail, createdAt, updatedAt } = input

    this.id = id
    this.content = content
    this.title = title
    this.thumbnail = thumbnail
    this.createdAt = createdAt
    this.updatedAt = updatedAt
  }
}

export { Article }
