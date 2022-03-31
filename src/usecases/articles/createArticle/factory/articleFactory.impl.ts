import { v4 as uuidV4 } from 'uuid'

import { Article } from '@/entities/articles/articleEntity.impl'

import { ArticleFactoryInterface } from './articleFactory.interface'

class ArticleFactory implements ArticleFactoryInterface {
  public create(title: string, content: string, thumbnail: string): Article {
    const article = new Article({
      id: uuidV4(),
      title,
      content,
      thumbnail,
      createdAt: new Date(),
      updatedAt: new Date()
    })

    return article
  }
}

export { ArticleFactory }
