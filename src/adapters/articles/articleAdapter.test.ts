import { Collection } from 'mongodb'
import { ArticleAdapter } from './articleAdapter.impl'

describe('Test ArticleAdapter', () => {
  let mongoConnection: Collection

  beforeEach(() => {
    mongoConnection = jest.fn() as unknown as Collection
  })

  describe('Test insert', () => {
    it('Should insert article into database correctly', async () => {
      mongoConnection.insertOne = jest.fn()
      const article = {
        id: '1',
        title: 'This is a title',
        content: 'This is a content',
        thumbnail: 'This is a thumbnail',
        createdAt: '2022-03-25 08:52:27.891Z' as unknown as Date,
        updatedAt: '2022-03-25 08:52:27.891Z' as unknown as Date
      }
      const adapter = new ArticleAdapter(mongoConnection)

      await adapter.insert(article)

      expect(mongoConnection.insertOne).toBeCalledWith(article)
    })
  })
})
