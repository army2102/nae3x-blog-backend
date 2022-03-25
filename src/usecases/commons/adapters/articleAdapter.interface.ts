import { Article } from '@/entities/articles/article'

interface ArticleAdapterInterface {
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

  delete(id: string): Promise<void>
}

export { ArticleAdapterInterface }
