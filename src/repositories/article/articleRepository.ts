import { Article } from '@/entities/article/article'
import { ArticleRepositoryInterface } from '@/usecases/article/getArticleList/getArticleList.interface'

class ArticleRepository implements ArticleRepositoryInterface {
  constructor() {}

  public async findMany(
    limit: number,
    offset: number
  ): Promise<{ articles: Article[]; total: number }> {
    throw new Error('Not Implement')
  }
}
