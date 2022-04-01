import { Static, Type } from '@sinclair/typebox'

const createArticleHandlerInput = Type.Object({
  title: Type.String(),
  thumbnail: Type.String(),
  content: Type.String()
})
type createArticleHandlerInputType = Static<typeof createArticleHandlerInput>

const createArticleHandlerOutput = Type.Object({ id: Type.String() })
type createArticleHandlerOutputType = Static<typeof createArticleHandlerOutput>

export {
  createArticleHandlerInput,
  createArticleHandlerInputType,
  createArticleHandlerOutput,
  createArticleHandlerOutputType
}
