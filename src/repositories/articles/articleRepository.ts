import { Article } from '@/entities/articles/article'
import { ArticleRepositoryInterface } from '@/usecases/articles/getArticleList/getArticleList.interface'

class ArticleRepository implements ArticleRepositoryInterface {
  constructor() {}

  public async findMany(
    limit: number,
    offset: number
  ): Promise<{ articles: Article[]; total: number }> {
    throw new Error('Not Implement')
  }
}
