import { ArticleRepositoryInterface } from '@/usecases/commons/repositories/articleRepository.interface'
import {
  GetArticleDetailInput,
  GetArticleDetailInterface,
  GetArticleDetailOutput
} from './getArticleDetail.interface'

class GetArticleDetail implements GetArticleDetailInterface {
  constructor(private readonly articleRepository: ArticleRepositoryInterface) {}

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
