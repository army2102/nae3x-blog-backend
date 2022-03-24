import { Article } from '@/entities/articles/article'

interface ArticleRepositoryInterface {
  findMany(
    limit: number,
    offset: number
  ): Promise<{ articles: Article[]; total: number }>

  add(title: string, content: string): Promise<string>
}

export { ArticleRepositoryInterface }
