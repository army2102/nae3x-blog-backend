import { Article } from '@/entities/article/article'

interface GetArticleListInput {
  limit: number
  offset: number
}

interface GetArticleListOutput {
  articles: {
    id: string
    title: string
    content: string
    createdAt: Date
  }[]
  total: number
}

interface GetArticleListInterface {
  execute(input: GetArticleListInput): Promise<GetArticleListOutput>
}

interface ArticleRepositoryInterface {
  findMany(
    limit: number,
    offset: number
  ): Promise<{ articles: Article[]; total: number }>
}

export {
  GetArticleListInterface,
  GetArticleListInput,
  GetArticleListOutput,
  ArticleRepositoryInterface
}