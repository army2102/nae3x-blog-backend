interface GetArticleListInput {
  limit: number
  offset: number
}

interface GetArticleListOutput {
  articles: {
    id: string
    title: string
    thumbnail: string
    createdAt: Date
  }[]
  total: number
}

interface GetArticleListInterface {
  execute(input: GetArticleListInput): Promise<GetArticleListOutput>
}

export { GetArticleListInterface, GetArticleListInput, GetArticleListOutput }
