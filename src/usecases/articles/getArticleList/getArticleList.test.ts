import { ArticleAdapterInterface } from '@/usecases/commons/adapters/articleAdapter.interface'
import { GetArticleList } from './getArticleList.impl'

describe('Test getArticleList', () => {
  let articleAdapter: ArticleAdapterInterface

  beforeEach(() => {
    articleAdapter = jest.fn() as unknown as ArticleAdapterInterface
  })

  describe('Test execute', () => {
    it('Should return output correctly', async () => {
      const mockFindResult = {
        articles: [
          {
            id: '1',
            title: 'This is a title',
            content: 'This is a content',
            thumbnail: 'This is a thumbnail',
            createdAt: '2022-03-18T08:45:21.963Z',
            updatedAt: '2022-03-18T09:00:00.000Z'
          },
          {
            id: '2',
            title: 'This is a title',
            content: 'This is a content',
            thumbnail: 'This is a thumbnail',
            createdAt: '2022-03-18T08:45:21.963Z',
            updatedAt: '2022-03-18T09:00:00.000Z'
          },
          {
            id: '3',
            title: 'This is a title',
            content: 'This is a content',
            thumbnail: 'This is a thumbnail',
            createdAt: '2022-03-18T08:45:21.963Z',
            updatedAt: '2022-03-18T09:00:00.000Z'
          },
          {
            id: '4',
            title: 'This is a title',
            content: 'This is a content',
            thumbnail: 'This is a thumbnail',
            createdAt: '2022-03-18T08:45:21.963Z',
            updatedAt: '2022-03-18T09:00:00.000Z'
          },
          {
            id: '5',
            title: 'This is a title',
            content: 'This is a content',
            thumbnail: 'This is a thumbnail',
            createdAt: '2022-03-18T08:45:21.963Z',
            updatedAt: '2022-03-18T09:00:00.000Z'
          }
        ],
        total: 10
      }
      articleAdapter.findMany = jest.fn().mockResolvedValue(mockFindResult)
      const useCase = new GetArticleList(articleAdapter)

      const expected = {
        articles: mockFindResult.articles.map(
          ({ id, title, thumbnail, createdAt }) => {
            return {
              id,
              title,
              thumbnail,
              createdAt
            }
          }
        ),
        total: 10
      }
      const actual = await useCase.execute({
        limit: 5,
        offset: 0
      })

      expect(articleAdapter.findMany).toBeCalledWith(5, 0)
      expect(actual).toEqual(expected)
    })
  })
})
