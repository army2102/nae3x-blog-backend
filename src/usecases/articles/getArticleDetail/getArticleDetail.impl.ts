import { Service } from 'typedi'

import { ArticleAdapterInterface } from '@/usecases/commons/adapters/articleAdapter.interface'
import {
  GetArticleDetailInput,
  GetArticleDetailInterface,
  GetArticleDetailOutput
} from './getArticleDetail.interface'
@Service()
class GetArticleDetail implements GetArticleDetailInterface {
  constructor(private readonly articleAdapter: ArticleAdapterInterface) {}

  public async execute(
    input: GetArticleDetailInput
  ): Promise<GetArticleDetailOutput> {
    const { id } = input

    const article = await this.articleAdapter.findOne(id)

    return {
      article
    }
  }
}

export { GetArticleDetail }
