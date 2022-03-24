import {
  ArticleRepositoryInterface,
  GetArticleListInput,
  GetArticleListInterface,
  GetArticleListOutput
} from './getArticleList.interface'

class GetArticleList implements GetArticleListInterface {
  constructor(private readonly articleRepository: ArticleRepositoryInterface) {}

  public async execute(
    input: GetArticleListInput
  ): Promise<GetArticleListOutput> {
    const { limit, offset } = input

    const { articles, total } = await this.articleRepository.findMany(
      limit,
      offset
    )

    const formattedArticles = articles.map(
      ({ id, title, content, createdAt }) => {
        return {
          id,
          title,
          content,
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
