import { ArticleRepositoryInterface } from '@/usecases/commons/repositories/articleRepository.interface'
import {
  UpdateArticleInput,
  UpdateArticleInterface,
  UpdateArticleOutput
} from './updateArticle.interface'

class UpdateArticle implements UpdateArticleInterface {
  constructor(private readonly articleRepository: ArticleRepositoryInterface) {}

  public async execute(
    input: UpdateArticleInput
  ): Promise<UpdateArticleOutput> {
    const { id, updateData } = input

    const updatedArticle = await this.articleRepository.update(id, updateData)

    return {
      article: updatedArticle
    }
  }
}

export { UpdateArticle }
