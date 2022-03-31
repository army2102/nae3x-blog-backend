import { Collection, ObjectId, ReturnDocument, WithId } from 'mongodb'

import { Article } from '@/entities/articles/articleEntity.impl'
import { ArticleAdapterInterface } from '@/usecases/commons/adapters/articleAdapter.interface'

class ArticleAdapter implements ArticleAdapterInterface {
  constructor(private readonly mongoCollection: Collection<WithId<Article>>) {}

  public async findMany(
    limit: number,
    offset: number
  ): Promise<{ articles: Article[]; total: number }> {
    throw new Error('Not Implement')
  }

  public async findOne(id: string): Promise<Article> {
    const findResult = await this.mongoCollection.findOne({ id })

    if (!findResult) {
      throw new Error(`Error cannot find article with id: ${id}`)
    }

    const {
      id: articleId,
      title,
      content,
      thumbnail,
      updatedAt,
      createdAt
    } = findResult
    return new Article({
      id: articleId,
      title,
      content,
      thumbnail,
      updatedAt,
      createdAt
    })
  }

  public async insert(article: Article): Promise<void> {
    const { id, title, content, thumbnail, createdAt, updatedAt } = article
    await this.mongoCollection.insertOne({
      _id: new ObjectId(),
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
    const updateResult = await this.mongoCollection.findOneAndUpdate(
      { id },
      {
        $set: updateData
      },
      {
        returnDocument: ReturnDocument.AFTER
      }
    )

    if (!updateResult.value) {
      throw new Error(`Error cannot find article with id: ${id}`)
    }

    return updateResult.value
  }

  public async deleteOne(id: string): Promise<void> {
    await this.mongoCollection.deleteOne({ id })
  }
}

export { ArticleAdapter }
