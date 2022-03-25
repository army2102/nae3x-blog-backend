import { Article } from '@/entities/articles/article'
import { ArticleAdapterInterface } from '@/usecases/commons/adapters/articleAdapter.interface'
import {
  CreateArticleInput,
  CreateArticleInterface,
  CreateArticleOutput
} from './createArticle.interface'

class CreateArticle implements CreateArticleInterface {
  constructor(private readonly articleAdapter: ArticleAdapterInterface) {}

  public async execute(
    input: CreateArticleInput
  ): Promise<CreateArticleOutput> {
    const { title, thumbnail, content } = input

    const article = new Article(content, title, thumbnail)

    await this.articleAdapter.insert(article)

    return {
      id: article.id
    }
  }
}

export { CreateArticle }
