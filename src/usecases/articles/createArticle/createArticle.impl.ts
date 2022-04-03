import { Inject, Service } from 'typedi'

import { ArticleAdapterInterface } from '@/usecases/commons/adapters/articleAdapter.interface'
import {
  CreateArticleInput,
  CreateArticleInterface,
  CreateArticleOutput
} from './createArticle.interface'
import { ArticleFactoryInterface } from './factory/articleFactory.interface'

@Service()
class CreateArticle implements CreateArticleInterface {
  constructor(
    @Inject('ArticleFactoryDi')
    private readonly articleFactory: ArticleFactoryInterface,
    @Inject('ArticleAdapterDi')
    private readonly articleAdapter: ArticleAdapterInterface
  ) {}

  public async execute(
    input: CreateArticleInput
  ): Promise<CreateArticleOutput> {
    const { title, thumbnail, content } = input

    const article = this.articleFactory.create(title, content, thumbnail)

    await this.articleAdapter.insert(article)

    return {
      id: article.id
    }
  }
}

export { CreateArticle }
