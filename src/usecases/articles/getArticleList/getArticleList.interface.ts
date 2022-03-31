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
  hasNext: boolean
}

interface GetArticleListInterface {
  execute(input: GetArticleListInput): Promise<GetArticleListOutput>
}

export { GetArticleListInterface, GetArticleListInput, GetArticleListOutput }
