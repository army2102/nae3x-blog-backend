import { Inject, Service } from 'typedi'

import { ArticleAdapterInterface } from '@/usecases/commons/adapters/articleAdapter.interface'
import {
  UpdateArticleInput,
  UpdateArticleInterface,
  UpdateArticleOutput
} from './updateArticle.interface'
@Service()
class UpdateArticle implements UpdateArticleInterface {
  constructor(
    @Inject('ArticleAdapterDi')
    private readonly articleAdapter: ArticleAdapterInterface
  ) {}

  public async execute(
    input: UpdateArticleInput
  ): Promise<UpdateArticleOutput> {
    const { id, updateData } = input

    const updatedArticle = await this.articleAdapter.update(id, updateData)

    return {
      article: updatedArticle
    }
  }
}

export { UpdateArticle }
