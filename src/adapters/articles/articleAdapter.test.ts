import { Article } from '@/entities/articles/articleEntity.impl'
import { Collection, ObjectId, ReturnDocument, WithId } from 'mongodb'
import { ArticleAdapter } from './articleAdapter.impl'

jest.mock('mongodb', () => {
  const originalModule = jest.requireActual('mongodb')
  return {
    __esModule: true,
    ...originalModule,
    ObjectId: jest.fn()
  }
})

describe('Test ArticleAdapter', () => {
  let mongoCollection: Collection<WithId<Article>>

  beforeEach(() => {
    mongoCollection = jest.fn() as unknown as Collection<WithId<Article>>
  })

  describe('Test insert', () => {
    it('Should insert article into database correctly', async () => {
      const article = {
        id: '1',
        title: 'This is a title',
        content: 'This is a content',
        thumbnail: 'This is a thumbnail',
        createdAt: '2022-03-25 08:52:27.891Z' as unknown as Date,
        updatedAt: '2022-03-25 08:52:27.891Z' as unknown as Date
      }
      mongoCollection.insertOne = jest.fn()
      const adapter = new ArticleAdapter(mongoCollection)

      await adapter.insert(article)

      expect(mongoCollection.insertOne).toBeCalledWith({
        ...article,
        _id: new ObjectId()
      })
    })
  })

  describe('Test findOne', () => {
    it('Should return Article correctly', async () => {
      const articleMongo = {
        _id: '1',
        id: '1',
        title: 'This is a title',
        content: 'This is a content',
        thumbnail: 'This is a thumbnail',
        createdAt: '2022-03-25 08:52:27.891Z' as unknown as Date,
        updatedAt: '2022-03-25 08:52:27.891Z' as unknown as Date
      }
      mongoCollection.findOne = jest.fn().mockResolvedValue(articleMongo)
      const adapter = new ArticleAdapter(mongoCollection)

      const expected = {
        id: '1',
        title: 'This is a title',
        content: 'This is a content',
        thumbnail: 'This is a thumbnail',
        createdAt: '2022-03-25 08:52:27.891Z' as unknown as Date,
        updatedAt: '2022-03-25 08:52:27.891Z' as unknown as Date
      }
      const actual = await adapter.findOne('1')

      expect(mongoCollection.findOne).toBeCalledWith({ id: '1' })
      expect(actual).toBeInstanceOf(Article)
      expect(actual).toEqual(expected)
    })

    it('Should throw error when cannot find Article', async () => {
      mongoCollection.findOne = jest.fn().mockResolvedValue(null)
      const adapter = new ArticleAdapter(mongoCollection)

      const expected = 'Error cannot find article with id: 1'
      await expect(adapter.findOne('1')).rejects.toThrow(new Error(expected))
    })
  })

  describe('Test Update', () => {
    it('Should return Article correctly', async () => {
      const mockUpdateResult = {
        value: {
          id: '1',
          title: 'This is a title',
          content: 'This is a content',
          thumbnail: 'This is a thumbnail',
          createdAt: '2022-03-25 08:52:27.891Z' as unknown as Date,
          updatedAt: '2022-03-25 08:52:27.891Z' as unknown as Date
        }
      }
      mongoCollection.findOneAndUpdate = jest
        .fn()
        .mockResolvedValue(mockUpdateResult)
      const adapter = new ArticleAdapter(mongoCollection)

      const expected = mockUpdateResult.value
      const actual = await adapter.update('1', {
        title: 'Updated title'
      })

      expect(mongoCollection.findOneAndUpdate).toBeCalledWith(
        { id: '1' },
        {
          $set: {
            title: 'Updated title'
          }
        },
        {
          returnDocument: ReturnDocument.AFTER
        }
      )
      expect(actual).toStrictEqual(expected)
    })

    it('Should return Article correctly', async () => {
      const mockUpdateResult = {
        value: null
      }
      mongoCollection.findOneAndUpdate = jest
        .fn()
        .mockResolvedValue(mockUpdateResult)
      const adapter = new ArticleAdapter(mongoCollection)

      const expected = 'Error cannot find article with id: 1'
      await expect(
        adapter.update('1', {
          title: 'Updated title'
        })
      ).rejects.toThrow(new Error(expected))
    })
  })

  describe('Test deleteOne', () => {
    it('Should delete article', async () => {
      mongoCollection.deleteOne = jest.fn()
      const adapter = new ArticleAdapter(mongoCollection)

      await adapter.deleteOne('1')

      expect(mongoCollection.deleteOne).toBeCalledWith({ id: '1' })
    })
  })
})
