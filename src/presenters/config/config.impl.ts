import * as dotenv from 'dotenv'
import { ConfigType } from './config.interface'

dotenv.config()

const { ARTICLE_DB_URI, API_JWT_SECRET, API_PORT } = process.env
const CONFIG: ConfigType = {
  articleDbUri: ARTICLE_DB_URI,
  apiPort: Number(API_PORT) || 8080,
  apiJwtSecret: API_JWT_SECRET
}

export { CONFIG }
