import { ArticleFactory } from './articleFactory.impl'

jest.mock('uuid', () => {
  const originalModule = jest.requireActual('uuid')
  return {
    __esModule: true,
    ...originalModule,
    v4: jest.fn(() => 'f8d63f08-0b15-4bf4-835b-c5c4e6780f9e')
  }
})

describe('Test ArticleFactory', () => {
  beforeAll(() => {
    jest.useFakeTimers().setSystemTime(new Date('2022-03-18'))
  })

  afterAll(() => {
    jest.useRealTimers()
  })

  describe('Test create', () => {
    it('Should create Article correctly', () => {
      const factory = new ArticleFactory()

      const expected = {
        id: 'f8d63f08-0b15-4bf4-835b-c5c4e6780f9e',
        title: 'This is a title',
        content: 'This is a content',
        thumbnail: 'This is a thumbnail',
        createdAt: new Date('2022-03-18'),
        updatedAt: new Date('2022-03-18')
      }
      const actual = factory.create(
        'This is a title',
        'This is a content',
        'This is a thumbnail'
      )

      expect(actual).toEqual(expected)
    })
  })
})
