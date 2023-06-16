import fastify from 'fastify'
import { ZodError } from 'zod'
import { dailyJob } from './Http/Controller/dailyJobs';

export const app = fastify()

app.get('/', () => {
  console.log("Hello World");
})

app.get('/daily', dailyJob)