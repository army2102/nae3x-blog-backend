import { ArticleAdapterInterface } from '@/usecases/commons/adapters/articleAdapter.interface'
import { CreateArticle } from './createArticle.impl'
import { ArticleFactoryInterface } from './factory/articleFactory.interface'

describe('Test CreateArticle', () => {
  let articleFactory: ArticleFactoryInterface
  let articleAdapter: ArticleAdapterInterface

  beforeEach(() => {
    articleFactory = jest.fn() as unknown as ArticleFactoryInterface
    articleAdapter = jest.fn() as unknown as ArticleAdapterInterface
  })

  describe('Test execute', () => {
    it('Should create article correctly', async () => {
      const useCaseInput = {
        title: 'This is a title',
        content: 'This is a content',
        thumbnail: 'This is a thumbnail'
      }
      const article = {
        id: '1',
        title: 'This is a title',
        content: 'This is a content',
        thumbnail: 'This is a thumbnail',
        createdAt: '2022-03-18T08:45:21.963Z',
        updatedAt: '2022-03-18T08:45:21.963Z'
      }
      articleFactory.create = jest.fn().mockReturnValue(article)
      articleAdapter.insert = jest.fn()
      const useCase = new CreateArticle(articleFactory, articleAdapter)

      const expected = {
        id: article.id
      }
      const actual = await useCase.execute(useCaseInput)

      expect(articleFactory.create).toBeCalledWith(
        useCaseInput.title,
        useCaseInput.content,
        useCaseInput.thumbnail
      )
      expect(articleAdapter.insert).toBeCalledWith(article)
      expect(actual).toStrictEqual(expected)
    })
  })
})
