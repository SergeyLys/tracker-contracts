import { z } from 'zod';

export const RegisterRequestSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1),
  name: z.string().min(1),
  role: z.array(z.string().min(1)).min(1),
});

export const LoginRequestSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1).optional(),
  provider: z.string().min(1).default('password'),
});

export const AuthResponseSchema = z.object({
  accessToken: z.string(),
});

export type RegisterRequest = z.infer<typeof RegisterRequestSchema>;
export type LoginRequest = z.infer<typeof LoginRequestSchema>;
export type AuthResponse = z.infer<typeof AuthResponseSchema>;