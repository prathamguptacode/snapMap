import { z } from 'zod'

const envSchema = z.object({
  DB_URL: z.string(),
  PORT: z.coerce.number().int().min(1000).default(8080),
})

const data = envSchema.safeParse(process.env)

if (!data.success) {
  console.log("Something went wrong in ENV FILE");
  console.log(data.error)
  process.exit(1)
}

const env = data.data

export default env
