import { ArticleAdapterInterface } from '@/usecases/commons/adapters/articleRepository.interface'
import {
  GetArticleListInput,
  GetArticleListInterface,
  GetArticleListOutput
} from './getArticleList.interface'

class GetArticleList implements GetArticleListInterface {
  constructor(private readonly articleRepository: ArticleAdapterInterface) {}

  public async execute(
    input: GetArticleListInput
  ): Promise<GetArticleListOutput> {
    const { limit, offset } = input

    const { articles, total } = await this.articleRepository.findMany(
      limit,
      offset
    )

    const formattedArticles = articles.map(
      ({ id, title, thumbnail, createdAt }) => {
        return {
          id,
          title,
          thumbnail,
          createdAt
        }
      }
    )

    return {
      articles: formattedArticles,
      total
    }
  }
}

export { GetArticleList }
