import { z } from "zod";

const envSchmea = z.object({
  DATABASE_URL: z.string().url(),
  JWT_SECRET: z.string(),
  PORT: z.coerce.number().default(3333),
});

export const env = envSchmea.parse(process.env);
