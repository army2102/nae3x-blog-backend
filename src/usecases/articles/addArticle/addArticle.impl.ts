import { ArticleAdapterInterface } from '@/usecases/commons/adapters/articleAdapter.interface'
import {
  AddArticleInput,
  AddArticleInterface,
  AddArticleOutput
} from './addArticle.interface'

class AddArticle implements AddArticleInterface {
  constructor(private readonly articleAdapter: ArticleAdapterInterface) {}

  public async execute(input: AddArticleInput): Promise<AddArticleOutput> {
    const { title, thumbnail, content } = input

    const articleId = await this.articleAdapter.add(title, thumbnail, content)

    return {
      id: articleId
    }
  }
}

export { AddArticle }
