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
    const grpcMethods = ["register", "login"];
    for (const method of grpcMethods) {
      const descriptor = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      (0, import_microservices.GrpcMethod)("AuthService", method)(constructor.prototype[method], method, descriptor);
    }
    const grpcStreamMethods = [];
    for (const method of grpcStreamMethods) {
      const descriptor = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      (0, import_microservices.GrpcStreamMethod)("AuthService", method)(constructor.prototype[method], method, descriptor);
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
    const grpcMethods = ["createUser", "validateUser"];
    for (const method of grpcMethods) {
      const descriptor = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      (0, import_microservices2.GrpcMethod)("UserService", method)(constructor.prototype[method], method, descriptor);
    }
    const grpcStreamMethods = [];
    for (const method of grpcStreamMethods) {
      const descriptor = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      (0, import_microservices2.GrpcStreamMethod)("UserService", method)(constructor.prototype[method], method, descriptor);
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
var import_zod = require("zod");
var TokenRequestSchema = import_zod.z.object({
  token: import_zod.z.string()
});

// src/schemas/common/auth.ts
var import_zod2 = require("zod");
var RegisterRequestSchema = import_zod2.z.object({
  email: import_zod2.z.string(),
  password: import_zod2.z.string(),
  name: import_zod2.z.string(),
  role: import_zod2.z.array(import_zod2.z.string())
});
var LoginRequestSchema = import_zod2.z.object({
  email: import_zod2.z.string(),
  password: import_zod2.z.string()
});
var AuthResponseSchema = import_zod2.z.object({
  accessToken: import_zod2.z.string()
});

// src/schemas/common/user.ts
var import_zod3 = require("zod");
var RoleSchema = import_zod3.z.object({
  name: import_zod3.z.string(),
  id: import_zod3.z.string()
});
var UserSchema = import_zod3.z.object({
  email: import_zod3.z.string(),
  name: import_zod3.z.string(),
  roles: import_zod3.z.array(RoleSchema),
  age: import_zod3.z.number(),
  weight: import_zod3.z.number(),
  height: import_zod3.z.number(),
  gender: import_zod3.z.number(),
  id: import_zod3.z.string(),
  isEmailVerified: import_zod3.z.boolean()
});

// src/schemas/user/user-service.ts
var import_zod4 = require("zod");
var UserResponseSchema = import_zod4.z.object({
  user: UserSchema.optional()
});
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  AuthorizationServiceTypes,
  CommonAuthTypes,
  CommonUserTypes,
  Schemas,
  UserServiceTypes
});
