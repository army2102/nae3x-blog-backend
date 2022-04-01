import { CONFIG } from './config/config.impl'
import { CreatServer } from './server'

// Setting up the Fastify server
const server = CreatServer()
server.listen(CONFIG.apiPort, err => {
  if (err) {
    console.error(err)
    process.exit(1)
  }
})
