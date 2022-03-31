import { ArticleAdapterInterface } from '@/usecases/commons/adapters/articleAdapter.interface'
import { GetArticleDetail } from './getArticleDetail.impl'

describe('Test GetArticleDetail', () => {
  let articleAdapter: ArticleAdapterInterface

  beforeEach(() => {
    articleAdapter = jest.fn() as unknown as ArticleAdapterInterface
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
      articleAdapter.findOne = jest.fn().mockResolvedValue(mockArticle)
      const useCase = new GetArticleDetail(articleAdapter)

      const expected = { article: mockArticle }
      const actual = await useCase.execute({
        id: '1'
      })

      expect(articleAdapter.findOne).toBeCalledWith('1')
      expect(actual).toStrictEqual(expected)
    })
  })
})
