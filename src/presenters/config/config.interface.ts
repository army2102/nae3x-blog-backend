import { Static, Type } from '@sinclair/typebox'

const ConfigSchema = Type.Object({
  articleDb: Type.Object({
    uri: Type.String(),
    dbName: Type.String(),
    collectionName: Type.String()
  }),
  apiPort: Type.Number(),
  apiJwtSecret: Type.String()
})

type ConfigType = Static<typeof ConfigSchema>

export { ConfigSchema, ConfigType }
