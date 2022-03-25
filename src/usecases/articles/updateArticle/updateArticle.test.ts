import { ArticleAdapterInterface } from '@/usecases/commons/adapters/articleAdapter.interface'
import { UpdateArticle } from './updateArticle.impl'

describe('Test UpdateArticle', () => {
  let articleAdapter: ArticleAdapterInterface

  beforeEach(() => {
    articleAdapter = jest.fn() as unknown as ArticleAdapterInterface
  })

  describe('Test execute', () => {
    it('Should update Article correctly', async () => {
      const mockUpdatedArticle = {
        id: '1',
        title: 'This is a title',
        thumbnail: 'This is a thumbnail',
        content: 'This is a content',
        createdAt: '2022-03-18T08:45:21.963Z',
        updatedAt: '2022-03-18T09:00:00.000Z'
      }
      articleAdapter.update = jest.fn().mockResolvedValue(mockUpdatedArticle)
      const useCase = new UpdateArticle(articleAdapter)

      const expected = { article: mockUpdatedArticle }
      const actual = await useCase.execute({
        id: '1',
        updateData: { title: 'This is an update title' }
      })

      expect(articleAdapter.update).toBeCalledWith('1', {
        title: 'This is an update title'
      })
      expect(actual).toStrictEqual(expected)
    })
  })
})
