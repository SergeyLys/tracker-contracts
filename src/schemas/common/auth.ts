import { z } from 'zod';

export const RegisterRequestSchema = z.object({
  email: z.string(),
  password: z.string(),
  name: z.string(),
  role: z.array(z.string()),
});

export const LoginRequestSchema = z.object({
  email: z.string(),
  password: z.string(),
});

export const AuthResponseSchema = z.object({
  accessToken: z.string(),
});

export type RegisterRequest = z.infer<typeof RegisterRequestSchema>;
export type LoginRequest = z.infer<typeof LoginRequestSchema>;
export type AuthResponse = z.infer<typeof AuthResponseSchema>;