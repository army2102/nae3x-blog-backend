import { Article } from '@/entities/articles/article'
import { ArticleAdapterInterface } from '@/usecases/commons/adapters/articleAdapter.interface'
import { CreateArticle } from './createArticle.impl'

jest.mock('uuid', () => {
  const originalModule = jest.requireActual('uuid')
  return {
    __esModule: true,
    ...originalModule,
    v4: jest.fn(() => 'f8d63f08-0b15-4bf4-835b-c5c4e6780f9e')
  }
})

describe('Test CreateArticle', () => {
  let articleAdapter: ArticleAdapterInterface

  beforeEach(() => {
    articleAdapter = jest.fn() as unknown as ArticleAdapterInterface
  })

  describe('Test execute', () => {
    it('Should create article correctly', async () => {
      articleAdapter.insert = jest.fn()
      const article = new Article(
        'This is a content',
        'This is a title',
        'This is a thumbnail'
      )
      const useCase = new CreateArticle(articleAdapter)

      const expected = {
        id: 'f8d63f08-0b15-4bf4-835b-c5c4e6780f9e'
      }
      const actual = await useCase.execute({
        title: 'This is a title',
        content: 'This is a content',
        thumbnail: 'This is a thumbnail'
      })

      expect(articleAdapter.insert).toBeCalledWith(article)
      expect(actual).toStrictEqual(expected)
    })
  })
})
