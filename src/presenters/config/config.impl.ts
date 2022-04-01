import * as dotenv from 'dotenv'
import { ConfigType } from './config.interface'

dotenv.config()

const {
  ARTICLE_DB_URI,
  ARTICLE_DB_NAME,
  ARTICLE_DB_COLLECTION_NAME,
  API_JWT_SECRET,
  API_PORT
} = process.env

const config: ConfigType = {
  articleDb: {
    uri: ARTICLE_DB_URI as string,
    dbName: ARTICLE_DB_NAME as string,
    collectionName: ARTICLE_DB_COLLECTION_NAME as string
  },
  apiPort: Number(API_PORT) || 8080,
  apiJwtSecret: API_JWT_SECRET as string
}

export { config }
