"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  AuthorizationServiceTypes: () => authorization_service_exports,
  CommonAuthTypes: () => auth_exports,
  CommonUserTypes: () => user_exports,
  Schemas: () => schemas_exports,
  UserServiceTypes: () => user_service_exports
});
module.exports = __toCommonJS(index_exports);

// src/generated/authorization/authorization-service.ts
var authorization_service_exports = {};
__export(authorization_service_exports, {
  AUTH_SERVICE_NAME: () => AUTH_SERVICE_NAME,
  AUTH_SERVICE_PACKAGE_NAME: () => AUTH_SERVICE_PACKAGE_NAME,
  AuthServiceControllerMethods: () => AuthServiceControllerMethods,
  protobufPackage: () => protobufPackage
});
var import_microservices = require("@nestjs/microservices");
var protobufPackage = "authService";
var AUTH_SERVICE_PACKAGE_NAME = "authService";
function AuthServiceControllerMethods() {
  return function(constructor) {
    const grpcMethods = ["register", "login", "loginWithGoogle", "refresh"];
    for (const method of grpcMethods) {
      const descriptor = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      (0, import_microservices.GrpcMethod)("AuthService", method)(constructor.prototype[method], method, descriptor);
      Object.defineProperty(constructor.prototype, method, descriptor);
    }
    const grpcStreamMethods = [];
    for (const method of grpcStreamMethods) {
      const descriptor = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      (0, import_microservices.GrpcStreamMethod)("AuthService", method)(constructor.prototype[method], method, descriptor);
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
var import_microservices2 = require("@nestjs/microservices");
var protobufPackage2 = "userService";
var USER_SERVICE_PACKAGE_NAME = "userService";
function UserServiceControllerMethods() {
  return function(constructor) {
    const grpcMethods = ["createUser", "validateUser", "getUserById"];
    for (const method of grpcMethods) {
      const descriptor = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      (0, import_microservices2.GrpcMethod)("UserService", method)(constructor.prototype[method], method, descriptor);
      Object.defineProperty(constructor.prototype, method, descriptor);
    }
    const grpcStreamMethods = [];
    for (const method of grpcStreamMethods) {
      const descriptor = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      (0, import_microservices2.GrpcStreamMethod)("UserService", method)(constructor.prototype[method], method, descriptor);
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
var import_zod = require("zod");
var RegisterRequestSchema = import_zod.z.object({
  email: import_zod.z.string().email(),
  password: import_zod.z.string().min(1),
  name: import_zod.z.string().min(1),
  role: import_zod.z.array(import_zod.z.string().min(1)).min(1)
});
var LoginRequestSchema = import_zod.z.object({
  email: import_zod.z.string().email(),
  password: import_zod.z.string().min(1).optional(),
  provider: import_zod.z.string().min(1).default("password"),
  providerId: import_zod.z.string().min(1).optional()
});
var RefreshTokenRequestSchema = import_zod.z.object({
  currentRefreshToken: import_zod.z.string()
});
var AuthResponseSchema = import_zod.z.object({
  accessToken: import_zod.z.string(),
  refreshToken: import_zod.z.string()
});

// src/schemas/common/user.ts
var import_zod2 = require("zod");
var RoleSchema = import_zod2.z.object({
  name: import_zod2.z.string(),
  id: import_zod2.z.string()
});
var UserSchema = import_zod2.z.object({
  email: import_zod2.z.string(),
  name: import_zod2.z.string(),
  roles: import_zod2.z.array(RoleSchema),
  age: import_zod2.z.number(),
  weight: import_zod2.z.number(),
  height: import_zod2.z.number(),
  gender: import_zod2.z.number(),
  id: import_zod2.z.string(),
  isEmailVerified: import_zod2.z.boolean()
});

// src/schemas/user/user-service.ts
var import_zod3 = require("zod");
var UserResponseSchema = import_zod3.z.object({
  user: UserSchema.optional()
});
var GetUserByIdRequestSchema = import_zod3.z.object({
  userId: import_zod3.z.string()
});
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  AuthorizationServiceTypes,
  CommonAuthTypes,
  CommonUserTypes,
  Schemas,
  UserServiceTypes
});
