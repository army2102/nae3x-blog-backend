import { Inject, Service } from 'typedi'
import { FastifyReply, FastifyRequest } from 'fastify'

import { createArticleHandlerInputType } from './createArticleHandlerinterface'
import { CreateArticleInterface } from '@/usecases/articles/createArticle/createArticle.interface'

@Service()
class CreateArticleHandler {
  constructor(
    @Inject('CreateArticleDi')
    public readonly createArticleUseCase: CreateArticleInterface
  ) {}

  // NOTE: Write like this to handle case createArticleUseCase is undefiend
  execute = async (
    request: FastifyRequest<{ Body: createArticleHandlerInputType }>,
    reply: FastifyReply
  ) => {
    const { title, thumbnail, content } = request.body

    const { id } = await this.createArticleUseCase.execute({
      title,
      thumbnail,
      content
    })

    reply.status(201).send({ id })
  }
}

export { CreateArticleHandler }
