import { ArticleRepositoryInterface } from '@/usecases/commons/repositories/articleRepository.interface'
import {
  DeleteArticleInput,
  DeleteArticleInterface
} from './deleteArticle.interface'

class DeleteArticle implements DeleteArticleInterface {
  constructor(private readonly articleRepository: ArticleRepositoryInterface) {}

  public async execute(input: DeleteArticleInput): Promise<void> {
    const { id } = input

    await this.articleRepository.delete(id)
  }
}

export { DeleteArticle }
