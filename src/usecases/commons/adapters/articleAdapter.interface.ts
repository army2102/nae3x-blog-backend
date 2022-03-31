import { Article } from '@/entities/articles/articleEntity.impl'

interface ArticleAdapterInterface {
  findMany(
    limit: number,
    offset: number
  ): Promise<{ articles: Article[]; hasNext: boolean }>

  findOne(id: string): Promise<Article>

  insert(article: Article): Promise<void>

  update(
    id: string,
    updateData: {
      title?: string
      content?: string
      thumbnail?: string
    }
  ): Promise<Article>

  deleteOne(id: string): Promise<void>
}

export { ArticleAdapterInterface }
