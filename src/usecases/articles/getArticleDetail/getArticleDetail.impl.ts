import { ArticleAdapterInterface } from '@/usecases/commons/adapters/articleRepository.interface'
import {
  GetArticleDetailInput,
  GetArticleDetailInterface,
  GetArticleDetailOutput
} from './getArticleDetail.interface'

class GetArticleDetail implements GetArticleDetailInterface {
  constructor(private readonly articleRepository: ArticleAdapterInterface) {}

  public async execute(
    input: GetArticleDetailInput
  ): Promise<GetArticleDetailOutput> {
    const { id } = input

    const article = await this.articleRepository.findOne(id)

    return {
      article
    }
  }
}

export { GetArticleDetail }
