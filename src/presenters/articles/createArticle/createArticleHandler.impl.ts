import Container, { Inject, Service } from 'typedi'
import { FastifyReply, FastifyRequest } from 'fastify'

import { createArticleHandlerInputType } from './createArticleHandlerinterface'
import { CreateArticleInterface } from '@/usecases/articles/createArticle/createArticle.interface'
import { CreateArticle } from '@/usecases/articles/createArticle/createArticle.impl'

// TODO: Write unittest
@Service()
class CreateArticleHandler {
  constructor(
    @Inject('CreateArticleDi')
    private readonly createArticleUseCase: CreateArticleInterface
  ) {}

  public async execute(
    request: FastifyRequest<{ Body: createArticleHandlerInputType }>,
    reply: FastifyReply
  ) {
    const { title, thumbnail, content } = request.body

    // TODO: Make @Inject work
    const createArticleUseCase = Container.get(CreateArticle)

    const { id } = await createArticleUseCase.execute({
      title,
      thumbnail,
      content
    })
    // const { id } = await this.createArticleUseCase.execute({
    //   title,
    //   thumbnail,
    //   content
    // })

    reply.status(201).send({ id })
  }
}

export { CreateArticleHandler }
