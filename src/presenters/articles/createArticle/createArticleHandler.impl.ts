import { Service } from 'typedi'
import { FastifyReply, FastifyRequest } from 'fastify'

import { createArticleHandlerInputType } from './createArticleHandlerinterface'
import { CreateArticleInterface } from '@/usecases/articles/createArticle/createArticle.interface'

@Service()
class CreateArticleHandler {
  constructor(private readonly createArticleUseCase: CreateArticleInterface) {}

  public async execute(
    request: FastifyRequest<{ Body: createArticleHandlerInputType }>,
    reply: FastifyReply
  ) {
    const { title, thumbnail, content } = request.body

    const articleId = await this.createArticleUseCase.execute({
      title,
      thumbnail,
      content
    })

    reply.status(201).send({ articleId })
  }
}

export { CreateArticleHandler }
