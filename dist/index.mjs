import {
  __export
} from "./chunk-7P6ASYW6.mjs";

// src/generated/authorization/authorization-service.ts
var authorization_service_exports = {};
__export(authorization_service_exports, {
  AUTH_SERVICE_NAME: () => AUTH_SERVICE_NAME,
  AUTH_SERVICE_PACKAGE_NAME: () => AUTH_SERVICE_PACKAGE_NAME,
  AuthServiceControllerMethods: () => AuthServiceControllerMethods,
  protobufPackage: () => protobufPackage
});
import { GrpcMethod, GrpcStreamMethod } from "@nestjs/microservices";
var protobufPackage = "authService";
var AUTH_SERVICE_PACKAGE_NAME = "authService";
function AuthServiceControllerMethods() {
  return function(constructor) {
    const grpcMethods = ["register", "login", "loginWithGoogle", "refresh"];
    for (const method of grpcMethods) {
      const descriptor = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcMethod("AuthService", method)(constructor.prototype[method], method, descriptor);
      Object.defineProperty(constructor.prototype, method, descriptor);
    }
    const grpcStreamMethods = [];
    for (const method of grpcStreamMethods) {
      const descriptor = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcStreamMethod("AuthService", method)(constructor.prototype[method], method, descriptor);
      Object.defineProperty(constructor.prototype, method, descriptor);
    }
  };
}
var AUTH_SERVICE_NAME = "AuthService";

// src/generated/user/user-service.ts
var user_service_exports = {};
__export(user_service_exports, {
  USER_SERVICE_NAME: () => USER_SERVICE_NAME,
  USER_SERVICE_PACKAGE_NAME: () => USER_SERVICE_PACKAGE_NAME,
  UserServiceControllerMethods: () => UserServiceControllerMethods,
  protobufPackage: () => protobufPackage2
});
import { GrpcMethod as GrpcMethod2, GrpcStreamMethod as GrpcStreamMethod2 } from "@nestjs/microservices";
var protobufPackage2 = "userService";
var USER_SERVICE_PACKAGE_NAME = "userService";
function UserServiceControllerMethods() {
  return function(constructor) {
    const grpcMethods = ["createUser", "validateUser", "getUserById"];
    for (const method of grpcMethods) {
      const descriptor = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcMethod2("UserService", method)(constructor.prototype[method], method, descriptor);
      Object.defineProperty(constructor.prototype, method, descriptor);
    }
    const grpcStreamMethods = [];
    for (const method of grpcStreamMethods) {
      const descriptor = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcStreamMethod2("UserService", method)(constructor.prototype[method], method, descriptor);
      Object.defineProperty(constructor.prototype, method, descriptor);
    }
  };
}
var USER_SERVICE_NAME = "UserService";

// src/generated/common/auth.ts
var auth_exports = {};
__export(auth_exports, {
  COMMON_PACKAGE_NAME: () => COMMON_PACKAGE_NAME,
  protobufPackage: () => protobufPackage3
});
var protobufPackage3 = "common";
var COMMON_PACKAGE_NAME = "common";

// src/generated/common/user.ts
var user_exports = {};
__export(user_exports, {
  COMMON_PACKAGE_NAME: () => COMMON_PACKAGE_NAME2,
  protobufPackage: () => protobufPackage4
});
var protobufPackage4 = "common";
var COMMON_PACKAGE_NAME2 = "common";

// src/schemas/index.ts
var schemas_exports = {};
__export(schemas_exports, {
  AuthResponseSchema: () => AuthResponseSchema,
  GetUserByIdRequestSchema: () => GetUserByIdRequestSchema,
  LoginRequestSchema: () => LoginRequestSchema,
  RefreshTokenRequestSchema: () => RefreshTokenRequestSchema,
  RegisterRequestSchema: () => RegisterRequestSchema,
  RoleSchema: () => RoleSchema,
  UserResponseSchema: () => UserResponseSchema,
  UserSchema: () => UserSchema
});

// src/schemas/common/auth.ts
import { z } from "zod";
var RegisterRequestSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1),
  name: z.string().min(1),
  role: z.array(z.string().min(1)).min(1)
});
var LoginRequestSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1).optional(),
  provider: z.string().min(1).default("password"),
  providerId: z.string().min(1).optional()
});
var RefreshTokenRequestSchema = z.object({
  currentRefreshToken: z.string()
});
var AuthResponseSchema = z.object({
  accessToken: z.string(),
  refreshToken: z.string()
});

// src/schemas/common/user.ts
import { z as z2 } from "zod";
var RoleSchema = z2.object({
  name: z2.string(),
  id: z2.string()
});
var UserSchema = z2.object({
  email: z2.string(),
  name: z2.string(),
  roles: z2.array(RoleSchema),
  age: z2.number(),
  weight: z2.number(),
  height: z2.number(),
  gender: z2.number(),
  id: z2.string(),
  isEmailVerified: z2.boolean()
});

// src/schemas/user/user-service.ts
import { z as z3 } from "zod";
var UserResponseSchema = z3.object({
  user: UserSchema.optional()
});
var GetUserByIdRequestSchema = z3.object({
  userId: z3.string()
});
export {
  authorization_service_exports as AuthorizationServiceTypes,
  auth_exports as CommonAuthTypes,
  user_exports as CommonUserTypes,
  schemas_exports as Schemas,
  user_service_exports as UserServiceTypes
};
