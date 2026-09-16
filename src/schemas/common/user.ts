import { z } from 'zod';

export const RoleSchema = z.object({
  name: z.string(),
  id: z.string(),
});

export const UserSchema = z.object({
  email: z.string(),
  name: z.string(),
  roles: z.array(RoleSchema),
  age: z.number(),
  weight: z.number(),
  height: z.number(),
  gender: z.number(),
  id: z.string(),
  isEmailVerified: z.boolean(),
});

export type Role = z.infer<typeof RoleSchema>;
export type User = z.infer<typeof UserSchema>;