import { z } from 'zod';

export const TokenRequestSchema = z.object({
  token: z.string(),
});

export type TokenRequest = z.infer<typeof TokenRequestSchema>;