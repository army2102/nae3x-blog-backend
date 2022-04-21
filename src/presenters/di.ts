import Container from 'typedi'
import { MongoClient } from 'mongodb'

import { config } from '@/presenters/config/config.impl'
import { ArticleAdapter } from '@/adapters/articles/articleAdapter.impl'
import { ArticleFactory } from '@/usecases/articles/createArticle/factory/articleFactory.impl'
import { CreateArticle } from '@/usecases/articles/createArticle/createArticle.impl'
import { GetArticleList } from '@/usecases/articles/getArticleList/getArticleList.impl'
import { GetArticleDetail } from '@/usecases/articles/getArticleDetail/getArticleDetail.impl'
import { UpdateArticle } from '@/usecases/articles/updateArticle/updateArticle.impl'
import { DeleteArticle } from '@/usecases/articles/deleteArticle/deleteArticle.impl'

const InitContainer = async () => {
  const mongoConnection = await new MongoClient(config.articleDb.uri).connect()
  const mongoCollection = mongoConnection
    .db(config.articleDb.dbName)
    .collection(config.articleDb.collectionName)

  Container.set('ArticleDbDi', mongoCollection)
  Container.set('ArticleAdapterDi', Container.get(ArticleAdapter))
  Container.set('ArticleFactoryDi', Container.get(ArticleFactory))
  Container.set('CreateArticleDi', Container.get(CreateArticle))
  Container.set('GetArticleListDi', Container.get(GetArticleList))
  Container.set('GetArticleDetailDi', Container.get(GetArticleDetail))
  Container.set('UpdateArticleDi', Container.get(UpdateArticle))
  Container.set('DeleteArticleDi', Container.get(DeleteArticle))
}

export { InitContainer }
