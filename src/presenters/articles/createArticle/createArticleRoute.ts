import { Container } from 'typedi'
import { FastifyPluginAsync } from 'fastify'

import {
  createArticleHandlerInput,
  createArticleHandlerInputType,
  createArticleHandlerOutput
} from './createArticleHandlerinterface'
import { CreateArticleHandler } from './createArticleHandler.impl'

const createArticleRoute: FastifyPluginAsync = async (fastify, options) => {
  const handler = Container.get(CreateArticleHandler)

  fastify.route<{ Body: createArticleHandlerInputType }>({
    method: 'POST',
    url: '/',
    schema: {
      body: createArticleHandlerInput,
      response: {
        201: createArticleHandlerOutput
      }
    },
    preHandler: [], // TODO: Add authentication
    handler: handler.execute
  })
}

export { createArticleRoute }
