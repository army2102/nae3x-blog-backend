interface UpdateArticleInput {
  id: string
  updateData: {
    title?: string
    content?: string
    thumbnail?: string
  }
}

interface UpdateArticleOutput {
  article: {
    id: string
    title: string
    thumbnail: string
    content: string
    updatedAt: Date
    createdAt: Date
  }
}

interface UpdateArticleInterface {
  execute(input: UpdateArticleInput): Promise<UpdateArticleOutput>
}

export { UpdateArticleInput, UpdateArticleOutput, UpdateArticleInterface }
