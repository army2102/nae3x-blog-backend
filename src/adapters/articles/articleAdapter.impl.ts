import { Article } from '@/entities/articles/article'
import { ArticleAdapterInterface } from '@/usecases/commons/adapters/articleAdapter.interface'
import { Collection, ObjectId } from 'mongodb'

class ArticleAdapter implements ArticleAdapterInterface {
  constructor(private readonly mongoCollection: Collection) {}

  public async findMany(
    limit: number,
    offset: number
  ): Promise<{ articles: Article[]; total: number }> {
    throw new Error('Not Implement')
  }

  public async findOne(id: string): Promise<Article> {
    throw new Error('Not Implement')
  }

  public async insert(article: Article): Promise<void> {
    const { id, title, content, thumbnail, createdAt, updatedAt } = article
    await this.mongoCollection.insertOne({
      id,
      title,
      content,
      thumbnail,
      createdAt,
      updatedAt
    })
  }

  public async update(
    id: string,
    updateData: {
      title?: string | undefined
      content?: string | undefined
      thumbnail?: string | undefined
    }
  ): Promise<Article> {
    throw new Error('Not Implement')
  }

  public async deleteOne(id: string): Promise<void> {
    await this.mongoCollection.deleteOne({ id })
  }
}

export { ArticleAdapter }
