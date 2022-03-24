import { ArticleRepositoryInterface } from '@/usecases/commons/repositories/articleRepository.interface'
import {
  AddArticleInput,
  AddArticleInterface,
  AddArticleOutput
} from './addArticle.interface'

class AddArticle implements AddArticleInterface {
  constructor(private readonly articleRepository: ArticleRepositoryInterface) {}

  public async execute(input: AddArticleInput): Promise<AddArticleOutput> {
    const { title, thumbnail, content } = input

    const articleId = await this.articleRepository.add(
      title,
      thumbnail,
      content
    )

    return {
      id: articleId
    }
  }
}

export { AddArticle }
