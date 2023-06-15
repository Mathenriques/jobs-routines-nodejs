import fastify from 'fastify'
import { ZodError } from 'zod'

export const app = fastify()

app.get('/', () => {
  console.log("Hello World")
})