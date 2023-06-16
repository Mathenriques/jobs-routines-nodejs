import { dailyUserJob } from '@/jobs/daily-user-job';
import { FastifyReply, FastifyRequest } from 'fastify';

export async function dailyJob(request: FastifyRequest, reply: FastifyReply) {
  dailyUserJob()

  return reply.status(201)
}