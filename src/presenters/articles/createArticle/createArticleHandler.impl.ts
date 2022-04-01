import fastify, { FastifyReply, FastifyRequest } from 'fastify'

import { createArticleHandlerInputType } from './createArticleHandlerinterface'

const createArticleHandler = async (
  request: FastifyRequest<{ Body: createArticleHandlerInputType }>,
  reply: FastifyReply
) => {
  reply.send({ ok: 'success' })
}

export { createArticleHandler }
