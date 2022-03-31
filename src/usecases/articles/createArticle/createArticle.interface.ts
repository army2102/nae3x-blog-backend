interface CreateArticleInput {
  title: string
  thumbnail: string
  content: string
}

interface CreateArticleOutput {
  id: string
}

interface CreateArticleInterface {
  execute(input: CreateArticleInput): Promise<CreateArticleOutput>
}

export { CreateArticleInput, CreateArticleInterface, CreateArticleOutput }
