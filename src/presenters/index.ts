import 'reflect-metadata'

import { InitContainer } from '@/commons/containers'
import { config } from './config/config.impl'
import { routes } from './routes'
import { CreatServer } from './server'

InitContainer().then(() => {
  const server = CreatServer()
  server.register(routes)
  server.listen(config.apiPort, err => {
    if (err) {
      console.error(err)
      process.exit(1)
    }
  })
})
