import { z } from "zod";

const envSchmea = z.object({
  DATABASE_URL: z.string().url(),
  JWT_SECRET: z.string(),
});

export const env = envSchmea.parse(process.env);
