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

  public async add(title: string, content: string): Promise<string> {
    throw new Error('Not Implement')
  }
}
