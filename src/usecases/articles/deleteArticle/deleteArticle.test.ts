import { ArticleAdapterInterface } from '@/usecases/commons/adapters/articleAdapter.interface'
import { DeleteArticle } from './deleteArticle.impl'

describe('Test DeleteArticle', () => {
  let articleAdapter: ArticleAdapterInterface

  beforeEach(() => {
    articleAdapter = jest.fn() as unknown as ArticleAdapterInterface
  })

  describe('Test execute', () => {
    it('Should delete Article correctly', async () => {
      articleAdapter.deleteOne = jest.fn()
      const useCase = new DeleteArticle(articleAdapter)

      await useCase.execute({ id: '1' })

      expect(articleAdapter.deleteOne).toBeCalledWith('1')
    })
  })
})
