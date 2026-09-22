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
    const grpcMethods = ["register", "login", "loginWithGoogle"];
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
    const grpcMethods = ["createUser", "validateUser"];
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
  LoginRequestSchema: () => LoginRequestSchema,
  RegisterRequestSchema: () => RegisterRequestSchema,
  RoleSchema: () => RoleSchema,
  TokenRequestSchema: () => TokenRequestSchema,
  UserResponseSchema: () => UserResponseSchema,
  UserSchema: () => UserSchema
});

// src/schemas/authorization/authorization-service.ts
import { z } from "zod";
var TokenRequestSchema = z.object({
  token: z.string()
});

// src/schemas/common/auth.ts
import { z as z2 } from "zod";
var RegisterRequestSchema = z2.object({
  email: z2.string().email(),
  password: z2.string().min(1),
  name: z2.string().min(1),
  role: z2.array(z2.string().min(1)).min(1)
});
var LoginRequestSchema = z2.object({
  email: z2.string().email(),
  password: z2.string().min(1).optional(),
  provider: z2.string().min(1).default("password"),
  providerId: z2.string().min(1).optional()
});
var AuthResponseSchema = z2.object({
  accessToken: z2.string()
});

// src/schemas/common/user.ts
import { z as z3 } from "zod";
var RoleSchema = z3.object({
  name: z3.string(),
  id: z3.string()
});
var UserSchema = z3.object({
  email: z3.string(),
  name: z3.string(),
  roles: z3.array(RoleSchema),
  age: z3.number(),
  weight: z3.number(),
  height: z3.number(),
  gender: z3.number(),
  id: z3.string(),
  isEmailVerified: z3.boolean()
});

// src/schemas/user/user-service.ts
import { z as z4 } from "zod";
var UserResponseSchema = z4.object({
  user: UserSchema.optional()
});
export {
  authorization_service_exports as AuthorizationServiceTypes,
  auth_exports as CommonAuthTypes,
  user_exports as CommonUserTypes,
  schemas_exports as Schemas,
  user_service_exports as UserServiceTypes
};
