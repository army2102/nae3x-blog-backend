interface AddArticleInput {
  title: string
  thumbnail: string
  content: string
}

interface AddArticleOutput {
  id: string
}

interface AddArticleInterface {
  execute(input: AddArticleInput): Promise<AddArticleOutput>
}

export { AddArticleInput, AddArticleInterface, AddArticleOutput }
