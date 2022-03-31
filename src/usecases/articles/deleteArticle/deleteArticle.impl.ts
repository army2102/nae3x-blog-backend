import { ArticleAdapterInterface } from '@/usecases/commons/adapters/articleAdapter.interface'
import {
  DeleteArticleInput,
  DeleteArticleInterface
} from './deleteArticle.interface'

class DeleteArticle implements DeleteArticleInterface {
  constructor(private readonly articleAdapter: ArticleAdapterInterface) {}

  public async execute(input: DeleteArticleInput): Promise<void> {
    const { id } = input

    await this.articleAdapter.deleteOne(id)
  }
}

export { DeleteArticle }
