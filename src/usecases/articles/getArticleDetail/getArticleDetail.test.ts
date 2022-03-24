import { ArticleRepositoryInterface } from '@/usecases/commons/repositories/articleRepository.interface'
import { GetArticleDetail } from './getArticleDetail.impl'

describe('Test GetArticleDetail', () => {
  let articleRepository: ArticleRepositoryInterface

  beforeEach(() => {
    articleRepository = jest.fn() as unknown as ArticleRepositoryInterface
  })

  describe('Test execute', () => {
    it('Should return Article detail correctly', async () => {
      const mockArticle = {
        id: '1',
        title: 'This is a title',
        thumbnail: 'This is a thumbnail',
        content: 'This is a content',
        createdAt: '2022-03-18T08:45:21.963Z',
        updatedAt: '2022-03-18T09:00:00.000Z'
      }
      articleRepository.findOne = jest.fn().mockResolvedValue(mockArticle)
      const useCase = new GetArticleDetail(articleRepository)

      const expected = { article: mockArticle }
      const actual = await useCase.execute({
        id: '1'
      })

      expect(articleRepository.findOne).toBeCalledWith('1')
      expect(actual).toStrictEqual(expected)
    })
  })
})
