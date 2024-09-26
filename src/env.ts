import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const env = createEnv({
  server: {
    DATABASE_URL: z.string().url(),
    AUTH_SECRET: z.string().min(1),
    AUTH_GITHUB_ID: z.string().min(1),
    AUTH_GITHUB_SECRET: z.string().min(1),
    AUTH_GOOGLE_ID: z.string().min(1),
    AUTH_GOOGLE_SECRET: z.string().min(1),
    EMAIL_SERVER: z.string().url(),
    EMAIL_FROM: z.string().min(1),
  },
  experimental__runtimeEnv: {},
});
