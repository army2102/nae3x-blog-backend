import { ArticleAdapterInterface } from '@/usecases/commons/adapters/articleRepository.interface'
import { DeleteArticle } from './deleteArticle.impl'

describe('Test DeleteArticle', () => {
  let articleRepository: ArticleAdapterInterface

  beforeEach(() => {
    articleRepository = jest.fn() as unknown as ArticleAdapterInterface
  })

  describe('Test execute', () => {
    it('Should delete Article correctly', async () => {
      articleRepository.delete = jest.fn()
      const useCase = new DeleteArticle(articleRepository)

      await useCase.execute({ id: '1' })

      expect(articleRepository.delete).toBeCalledWith('1')
    })
  })
})
