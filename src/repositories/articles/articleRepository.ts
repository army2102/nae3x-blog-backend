import { Article } from '@/entities/articles/article'
import { ArticleRepositoryInterface } from '@/usecases/commons/repositories/articleRepository.interface'

class ArticleRepository implements ArticleRepositoryInterface {
  constructor() {}

  public async findMany(
    limit: number,
    offset: number
  ): Promise<{ articles: Article[]; total: number }> {
    throw new Error('Not Implement')
  }

  public async findOne(id: string): Promise<Article> {
    throw new Error('Not Implement')
  }

  public async add(title: string, content: string): Promise<string> {
    throw new Error('Not Implement')
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

  public async delete(id: string): Promise<void> {
    throw new Error('Not Implement')
  }
}
