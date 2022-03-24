import { Article } from '@/entities/articles/article'

interface UpdateArticleInput {
  id: string
  updateData: {
    title?: string
    content?: string
    thumbnail?: string
  }
}

interface UpdateArticleOutput {
  article: Article
}

interface UpdateArticleInterface {
  execute(input: UpdateArticleInput): Promise<UpdateArticleOutput>
}

export { UpdateArticleInput, UpdateArticleOutput, UpdateArticleInterface }
