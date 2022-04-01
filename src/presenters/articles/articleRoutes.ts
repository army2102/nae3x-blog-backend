import { FastifyPluginAsync } from 'fastify'

import { createArticleRoute } from './createArticle/createArticleRoute'

const articleRoutes: FastifyPluginAsync = async (fastify, options) => {
  fastify.register(createArticleRoute, { prefix: 'article' })
}

export { articleRoutes }
