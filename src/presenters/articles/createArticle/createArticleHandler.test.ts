import { CreateArticleInterface } from '@/usecases/articles/createArticle/createArticle.interface'
import { CreateArticleHandler } from './createArticleHandler.impl'

describe('Test CreateArticleHandler', () => {
  let createArticleUseCase: CreateArticleInterface

  beforeEach(() => {
    createArticleUseCase = jest.fn() as unknown as CreateArticleInterface
  })

  describe('Test execute', () => {
    it('Should create Article correctly', async () => {
      const request = {
        body: {
          title: 'This is a title',
          content: 'This is a content',
          thumbnail: 'This is a thumbnail'
        }
      } as any
      const mockSend = jest.fn()
      const reply = {
        status: jest.fn().mockReturnValue({ send: mockSend })
      } as any
      createArticleUseCase.execute = jest.fn().mockResolvedValue({ id: '1' })
      const handler = new CreateArticleHandler(createArticleUseCase)

      await handler.execute(request, reply)

      expect(createArticleUseCase.execute).toBeCalledWith({
        title: request.body.title,
        content: request.body.content,
        thumbnail: request.body.thumbnail
      })
      expect(reply.status).toBeCalledWith(201)
      expect(mockSend).toBeCalledWith({ id: '1' })
    })
  })
})
