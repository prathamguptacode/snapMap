import { z } from 'zod'

const envSchema = z.object({
  DB_URL: z.string(),
})

const data = envSchema.safeParse(process.env)

if (!data.success) {
  console.log("Something went wrong in ENV FILE");
  console.log(data.error);
  process.exit(1)
}

export default data.data
