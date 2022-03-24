import { ArticleRepositoryInterface } from '@/usecases/commons/repositories/articleRepository.interface'
import { AddArticle } from './addArticle.impl'

describe('Test AddArticle', () => {
  let articleRepository: ArticleRepositoryInterface

  beforeEach(() => {
    articleRepository = jest.fn as unknown as ArticleRepositoryInterface
  })

  describe('Test execute', () => {
    it('Should create article correctly', async () => {
      articleRepository.add = jest
        .fn()
        .mockResolvedValue('f8d63f08-0b15-4bf4-835b-c5c4e6780f9e')
      const useCase = new AddArticle(articleRepository)

      const expected = {
        id: 'f8d63f08-0b15-4bf4-835b-c5c4e6780f9e'
      }
      const actual = await useCase.execute({
        title: 'This is a title',
        thumbnail: 'This is a thumbnail',
        content: 'This is a content'
      })

      expect(articleRepository.add).toBeCalledWith(
        'This is a title',
        'This is a thumbnail',
        'This is a content'
      )
      expect(actual).toStrictEqual(expected)
    })
  })
})
