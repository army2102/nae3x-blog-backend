interface GetArticleDetailInput {
  id: string
}

interface GetArticleDetailOutput {
  article: {
    id: string
    title: string
    thumbnail: string
    content: string
    updatedAt: Date
    createdAt: Date
  }
}

interface GetArticleDetailInterface {
  execute(input: GetArticleDetailInput): Promise<GetArticleDetailOutput>
}

export {
  GetArticleDetailInput,
  GetArticleDetailInterface,
  GetArticleDetailOutput
}
