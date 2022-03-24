interface DeleteArticleInput {
  id: string
}

type DeleteArticleOutput = void

interface DeleteArticleInterface {
  execute(input: DeleteArticleInput): Promise<DeleteArticleOutput>
}

export { DeleteArticleInput, DeleteArticleInterface, DeleteArticleOutput }
