import { FastifyPluginAsync } from 'fastify'

import { articleRoutes } from './articles/articleRoutes'

const routes: FastifyPluginAsync = async (fastify, options) => {
  fastify.route({
    method: 'GET',
    url: '/health',
    handler: (_, reply) => {
      reply.send({ status: 'ok' })
    }
  })
  fastify.register(articleRoutes)
}

export { routes }
