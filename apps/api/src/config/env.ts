import "dotenv/config";
import "dotenv/config";
import { config } from "dotenv";

import { z } from "zod";

config({ path: "../../.env" });
const envSchema = z.object({
  NODE_ENV: z
    .enum(["development", "production", "test"])
    .default("development"),

  PORT: z.coerce.number().int().positive().default(3000),

  TIMEZONE: z.string().default("Asia/Dhaka"),
  DATABASE_URL: z.string().min(1, "DATABASE_URL is required"),

  SHADOW_DATABASE_URL: z.string().min(1, "SHADOW_DATABASE_URL is required"),
});

export const env = envSchema.parse(process.env);
