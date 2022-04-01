import fastify, { FastifyInstance } from 'fastify'
import fastifyCors from 'fastify-cors'
import fastifyHelmet from 'fastify-helmet'

export const CreatServer = (): FastifyInstance => {
  const server = fastify({ logger: true })
  server.register(fastifyCors)
  server.register(fastifyHelmet)
  return server
}
