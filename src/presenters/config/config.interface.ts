import { Static, Type } from '@sinclair/typebox'

const ConfigSchema = Type.Object({
  articleDbUri: Type.Optional(Type.String()),
  apiPort: Type.Number(),
  apiJwtSecret: Type.Optional(Type.String())
})

type ConfigType = Static<typeof ConfigSchema>

export { ConfigSchema, ConfigType }
