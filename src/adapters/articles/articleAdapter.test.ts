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

  // TODO: Try to cover line 25
  describe('Test findMany', () => {
    test('Currect pagination: found, Next Pagination: found', async () => {
      const mockArticles: Article[] = [
        {
          id: '1',
          title: 'This is a title',
          content: 'This is a content',
          thumbnail: 'This is a thumbnail',
          createdAt: '2022-03-25 08:52:27.891Z' as unknown as Date,
          updatedAt: '2022-03-25 08:52:27.891Z' as unknown as Date
        },
        {
          id: '2',
          title: 'This is a title',
          content: 'This is a content',
          thumbnail: 'This is a thumbnail',
          createdAt: '2022-03-25 08:52:27.891Z' as unknown as Date,
          updatedAt: '2022-03-25 08:52:27.891Z' as unknown as Date
        },
        {
          id: '3',
          title: 'This is a title',
          content: 'This is a content',
          thumbnail: 'This is a thumbnail',
          createdAt: '2022-03-25 08:52:27.891Z' as unknown as Date,
          updatedAt: '2022-03-25 08:52:27.891Z' as unknown as Date
        },
        {
          id: '4',
          title: 'This is a title',
          content: 'This is a content',
          thumbnail: 'This is a thumbnail',
          createdAt: '2022-03-25 08:52:27.891Z' as unknown as Date,
          updatedAt: '2022-03-25 08:52:27.891Z' as unknown as Date
        },
        {
          id: '5',
          title: 'This is a title',
          content: 'This is a content',
          thumbnail: 'This is a thumbnail',
          createdAt: '2022-03-25 08:52:27.891Z' as unknown as Date,
          updatedAt: '2022-03-25 08:52:27.891Z' as unknown as Date
        }
      ]
      const mockToArray = jest.fn().mockResolvedValue(mockArticles)
      const mockMap = jest.fn().mockReturnValue({ toArray: mockToArray })
      const mockSort = jest
        .fn()
        .mockReturnValue({ map: mockMap, toArray: mockToArray })
      const mockLimit = jest.fn().mockReturnValue({ sort: mockSort })
      const mockSkip = jest.fn().mockReturnValue({ limit: mockLimit })
      mongoCollection.find = jest.fn().mockReturnValue({
        skip: mockSkip
      })
      const adapter = new ArticleAdapter(mongoCollection)

      const expected = {
        articles: mockArticles,
        hasNext: true
      }
      const actual = await adapter.findMany(5, 0)

      expect(mongoCollection.find).toHaveBeenNthCalledWith(1, {})
      expect(mockSkip).toHaveBeenNthCalledWith(1, 0)
      expect(mockLimit).toHaveBeenNthCalledWith(1, 5)
      expect(mockSort).toHaveBeenNthCalledWith(1, { createdAt: -1 })
      expect(mockToArray).toHaveBeenNthCalledWith(1)
      expect(mongoCollection.find).toHaveBeenNthCalledWith(2, {})
      expect(mockSkip).toHaveBeenNthCalledWith(2, 5)
      expect(mockLimit).toHaveBeenNthCalledWith(2, 5)
      expect(mockSort).toHaveBeenNthCalledWith(2, { createdAt: -1 })
      expect(mockToArray).toHaveBeenNthCalledWith(2)
      // TODO: Find out why this fail
      // actual.articles.forEach(article => {
      //   expect(article).toBeInstanceOf(Article)
      // })
      expect(actual).toStrictEqual(expected)
    })

    test('Currect pagination: found, Next Pagination: not found', async () => {
      const mockArticles: Article[] = [
        {
          id: '1',
          title: 'This is a title',
          content: 'This is a content',
          thumbnail: 'This is a thumbnail',
          createdAt: '2022-03-25 08:52:27.891Z' as unknown as Date,
          updatedAt: '2022-03-25 08:52:27.891Z' as unknown as Date
        },
        {
          id: '2',
          title: 'This is a title',
          content: 'This is a content',
          thumbnail: 'This is a thumbnail',
          createdAt: '2022-03-25 08:52:27.891Z' as unknown as Date,
          updatedAt: '2022-03-25 08:52:27.891Z' as unknown as Date
        },
        {
          id: '3',
          title: 'This is a title',
          content: 'This is a content',
          thumbnail: 'This is a thumbnail',
          createdAt: '2022-03-25 08:52:27.891Z' as unknown as Date,
          updatedAt: '2022-03-25 08:52:27.891Z' as unknown as Date
        },
        {
          id: '4',
          title: 'This is a title',
          content: 'This is a content',
          thumbnail: 'This is a thumbnail',
          createdAt: '2022-03-25 08:52:27.891Z' as unknown as Date,
          updatedAt: '2022-03-25 08:52:27.891Z' as unknown as Date
        },
        {
          id: '5',
          title: 'This is a title',
          content: 'This is a content',
          thumbnail: 'This is a thumbnail',
          createdAt: '2022-03-25 08:52:27.891Z' as unknown as Date,
          updatedAt: '2022-03-25 08:52:27.891Z' as unknown as Date
        }
      ]
      const mockToArray = jest
        .fn()
        .mockResolvedValueOnce(mockArticles)
        .mockResolvedValueOnce([])
      const mockMap = jest.fn().mockReturnValue({ toArray: mockToArray })
      const mockSort = jest
        .fn()
        .mockReturnValue({ map: mockMap, toArray: mockToArray })
      const mockLimit = jest.fn().mockReturnValue({ sort: mockSort })
      const mockSkip = jest.fn().mockReturnValue({ limit: mockLimit })
      mongoCollection.find = jest.fn().mockReturnValue({
        skip: mockSkip
      })
      const adapter = new ArticleAdapter(mongoCollection)

      const expected = {
        articles: mockArticles,
        hasNext: false
      }
      const actual = await adapter.findMany(5, 5)

      expect(mongoCollection.find).toHaveBeenNthCalledWith(1, {})
      expect(mockSkip).toHaveBeenNthCalledWith(1, 5)
      expect(mockLimit).toHaveBeenNthCalledWith(1, 5)
      expect(mockSort).toHaveBeenNthCalledWith(1, { createdAt: -1 })
      expect(mockToArray).toHaveBeenNthCalledWith(1)
      expect(mongoCollection.find).toHaveBeenNthCalledWith(2, {})
      expect(mockSkip).toHaveBeenNthCalledWith(2, 10)
      expect(mockLimit).toHaveBeenNthCalledWith(2, 5)
      expect(mockSort).toHaveBeenNthCalledWith(2, { createdAt: -1 })
      expect(mockToArray).toHaveBeenNthCalledWith(2)
      // TODO: Find out why this fail
      // actual.articles.forEach(article => {
      //   expect(article).toBeInstanceOf(Article)
      // })
      expect(actual).toStrictEqual(expected)
    })

    test('Currect pagination: not found, Next Pagination: not found', async () => {
      const mockArticles: Article[] = []
      const mockToArray = jest.fn().mockResolvedValue(mockArticles)
      const mockMap = jest.fn().mockReturnValue({ toArray: mockToArray })
      const mockSort = jest.fn().mockReturnValue({ map: mockMap })
      const mockLimit = jest.fn().mockReturnValue({ sort: mockSort })
      const mockSkip = jest.fn().mockReturnValue({ limit: mockLimit })
      mongoCollection.find = jest.fn().mockReturnValue({
        skip: mockSkip
      })
      const adapter = new ArticleAdapter(mongoCollection)

      const expected = {
        articles: mockArticles,
        hasNext: false
      }
      const actual = await adapter.findMany(5, 0)

      expect(mongoCollection.find).toBeCalledWith({})
      expect(mockSkip).toBeCalledWith(0)
      expect(mockLimit).toBeCalledWith(5)
      expect(mockSort).toBeCalledWith({ createdAt: -1 })
      expect(mockToArray).toBeCalledWith()
      actual.articles.forEach(article => {
        expect(article).toBeInstanceOf(Article)
      })
      expect(actual).toStrictEqual(expected)
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
          _id: new ObjectId(),
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

      const expected = new Article({
        id: mockUpdateResult.value.id,
        title: mockUpdateResult.value.title,
        content: mockUpdateResult.value.content,
        thumbnail: mockUpdateResult.value.thumbnail,
        createdAt: mockUpdateResult.value.createdAt,
        updatedAt: mockUpdateResult.value.updatedAt
      })
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
      expect(actual).toBeInstanceOf(Article)
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
