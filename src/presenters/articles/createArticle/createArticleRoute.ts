import fastify, { FastifyPluginAsync } from 'fastify'

import { createArticleHandler } from './createArticleHandler.impl'
import {
  createArticleHandlerInput,
  createArticleHandlerInputType,
  createArticleHandlerOutput
} from './createArticleHandlerinterface'

const createArticleRoute: FastifyPluginAsync = async (fastify, options) => {
  fastify.route<{ Body: createArticleHandlerInputType }>({
    method: 'POST',
    url: '/',
    schema: {
      body: createArticleHandlerInput,
      response: {
        201: createArticleHandlerOutput
      }
    },
    handler: createArticleHandler
  })
}

export { createArticleRoute }
