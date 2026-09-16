import { z } from 'zod';
import { UserSchema } from '../common/user';

export const UserResponseSchema = z.object({
  user: UserSchema.optional(),
});

export type UserResponse = z.infer<typeof UserResponseSchema>;