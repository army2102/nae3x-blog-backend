import { Service } from 'typedi'

import { ArticleAdapterInterface } from '@/usecases/commons/adapters/articleAdapter.interface'
import {
  GetArticleListInput,
  GetArticleListInterface,
  GetArticleListOutput
} from './getArticleList.interface'
@Service()
class GetArticleList implements GetArticleListInterface {
  constructor(private readonly articleAdapter: ArticleAdapterInterface) {}

  public async execute(
    input: GetArticleListInput
  ): Promise<GetArticleListOutput> {
    const { limit, offset } = input

    const { articles, hasNext } = await this.articleAdapter.findMany(
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
      hasNext
    }
  }
}

export { GetArticleList }
