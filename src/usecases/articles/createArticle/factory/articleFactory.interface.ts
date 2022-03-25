import { Article } from '@/entities/articles/articleEntity.impl'

interface ArticleFactoryInterface {
  create(title: string, content: string, thumbnail: string): Article
}

export { ArticleFactoryInterface }
