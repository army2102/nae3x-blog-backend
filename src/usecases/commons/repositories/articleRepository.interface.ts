import { Article } from '@/entities/articles/article'

interface ArticleRepositoryInterface {
  findMany(
    limit: number,
    offset: number
  ): Promise<{ articles: Article[]; total: number }>

  findOne(id: string): Promise<Article>

  add(title: string, thumbnail: string, content: string): Promise<string>

  update(
    id: string,
    updateData: {
      title?: string
      content?: string
      thumbnail?: string
    }
  ): Promise<Article>
}

export { ArticleRepositoryInterface }
