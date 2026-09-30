import { z } from "zod";
import { UserSchema } from "../common/user";

export const UserResponseSchema = z.object({
	user: UserSchema.optional(),
});

export const GetUserByIdRequestSchema = z.object({
	userId: z.string(),
});

export type UserResponse = z.infer<typeof UserResponseSchema>;
export type GetUserByIdRequest = z.infer<typeof GetUserByIdRequestSchema>;
