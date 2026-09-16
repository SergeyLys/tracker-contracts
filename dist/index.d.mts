import { Observable } from 'rxjs';
import { z } from 'zod';

declare const protobufPackage$3 = "common";
interface RegisterRequest$1 {
    email: string;
    password: string;
    name: string;
    role: string[];
}
interface LoginRequest$1 {
    email: string;
    password: string;
}
interface AuthResponse$1 {
    accessToken: string;
}
declare const COMMON_PACKAGE_NAME$1 = "common";

declare namespace auth {
  export { type AuthResponse$1 as AuthResponse, COMMON_PACKAGE_NAME$1 as COMMON_PACKAGE_NAME, type LoginRequest$1 as LoginRequest, type RegisterRequest$1 as RegisterRequest, protobufPackage$3 as protobufPackage };
}

declare const protobufPackage$2 = "authService";
interface TokenRequest$1 {
    token: string;
}
declare const AUTH_SERVICE_PACKAGE_NAME = "authService";
interface AuthServiceClient {
    register(request: RegisterRequest$1): Observable<AuthResponse$1>;
    login(request: LoginRequest$1): Observable<AuthResponse$1>;
}
interface AuthServiceController {
    register(request: RegisterRequest$1): Promise<AuthResponse$1> | Observable<AuthResponse$1> | AuthResponse$1;
    login(request: LoginRequest$1): Promise<AuthResponse$1> | Observable<AuthResponse$1> | AuthResponse$1;
}
declare function AuthServiceControllerMethods(): (constructor: Function) => void;
declare const AUTH_SERVICE_NAME = "AuthService";

declare const authorizationService_AUTH_SERVICE_NAME: typeof AUTH_SERVICE_NAME;
declare const authorizationService_AUTH_SERVICE_PACKAGE_NAME: typeof AUTH_SERVICE_PACKAGE_NAME;
type authorizationService_AuthServiceClient = AuthServiceClient;
type authorizationService_AuthServiceController = AuthServiceController;
declare const authorizationService_AuthServiceControllerMethods: typeof AuthServiceControllerMethods;
declare namespace authorizationService {
  export { authorizationService_AUTH_SERVICE_NAME as AUTH_SERVICE_NAME, authorizationService_AUTH_SERVICE_PACKAGE_NAME as AUTH_SERVICE_PACKAGE_NAME, type authorizationService_AuthServiceClient as AuthServiceClient, type authorizationService_AuthServiceController as AuthServiceController, authorizationService_AuthServiceControllerMethods as AuthServiceControllerMethods, type TokenRequest$1 as TokenRequest, protobufPackage$2 as protobufPackage };
}

declare const protobufPackage$1 = "common";
interface Role$1 {
    name: string;
    id: string;
}
interface User$1 {
    email: string;
    name: string;
    roles: Role$1[];
    age: number;
    weight: number;
    height: number;
    gender: number;
    id: string;
    isEmailVerified: boolean;
}
declare const COMMON_PACKAGE_NAME = "common";

declare const user_COMMON_PACKAGE_NAME: typeof COMMON_PACKAGE_NAME;
declare namespace user {
  export { user_COMMON_PACKAGE_NAME as COMMON_PACKAGE_NAME, type Role$1 as Role, type User$1 as User, protobufPackage$1 as protobufPackage };
}

declare const protobufPackage = "userService";
interface UserResponse$1 {
    user: User$1 | undefined;
}
declare const USER_SERVICE_PACKAGE_NAME = "userService";
interface UserServiceClient {
    createUser(request: RegisterRequest$1): Observable<UserResponse$1>;
    validateUser(request: LoginRequest$1): Observable<UserResponse$1>;
}
interface UserServiceController {
    createUser(request: RegisterRequest$1): Promise<UserResponse$1> | Observable<UserResponse$1> | UserResponse$1;
    validateUser(request: LoginRequest$1): Promise<UserResponse$1> | Observable<UserResponse$1> | UserResponse$1;
}
declare function UserServiceControllerMethods(): (constructor: Function) => void;
declare const USER_SERVICE_NAME = "UserService";

declare const userService_USER_SERVICE_NAME: typeof USER_SERVICE_NAME;
declare const userService_USER_SERVICE_PACKAGE_NAME: typeof USER_SERVICE_PACKAGE_NAME;
type userService_UserServiceClient = UserServiceClient;
type userService_UserServiceController = UserServiceController;
declare const userService_UserServiceControllerMethods: typeof UserServiceControllerMethods;
declare const userService_protobufPackage: typeof protobufPackage;
declare namespace userService {
  export { userService_USER_SERVICE_NAME as USER_SERVICE_NAME, userService_USER_SERVICE_PACKAGE_NAME as USER_SERVICE_PACKAGE_NAME, type UserResponse$1 as UserResponse, type userService_UserServiceClient as UserServiceClient, type userService_UserServiceController as UserServiceController, userService_UserServiceControllerMethods as UserServiceControllerMethods, userService_protobufPackage as protobufPackage };
}

declare const TokenRequestSchema: z.ZodObject<{
    token: z.ZodString;
}, z.core.$strip>;
type TokenRequest = z.infer<typeof TokenRequestSchema>;

declare const RegisterRequestSchema: z.ZodObject<{
    email: z.ZodString;
    password: z.ZodString;
    name: z.ZodString;
    role: z.ZodArray<z.ZodString>;
}, z.core.$strip>;
declare const LoginRequestSchema: z.ZodObject<{
    email: z.ZodString;
    password: z.ZodString;
}, z.core.$strip>;
declare const AuthResponseSchema: z.ZodObject<{
    accessToken: z.ZodString;
}, z.core.$strip>;
type RegisterRequest = z.infer<typeof RegisterRequestSchema>;
type LoginRequest = z.infer<typeof LoginRequestSchema>;
type AuthResponse = z.infer<typeof AuthResponseSchema>;

declare const RoleSchema: z.ZodObject<{
    name: z.ZodString;
    id: z.ZodString;
}, z.core.$strip>;
declare const UserSchema: z.ZodObject<{
    email: z.ZodString;
    name: z.ZodString;
    roles: z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        id: z.ZodString;
    }, z.core.$strip>>;
    age: z.ZodNumber;
    weight: z.ZodNumber;
    height: z.ZodNumber;
    gender: z.ZodNumber;
    id: z.ZodString;
    isEmailVerified: z.ZodBoolean;
}, z.core.$strip>;
type Role = z.infer<typeof RoleSchema>;
type User = z.infer<typeof UserSchema>;

declare const UserResponseSchema: z.ZodObject<{
    user: z.ZodOptional<z.ZodObject<{
        email: z.ZodString;
        name: z.ZodString;
        roles: z.ZodArray<z.ZodObject<{
            name: z.ZodString;
            id: z.ZodString;
        }, z.core.$strip>>;
        age: z.ZodNumber;
        weight: z.ZodNumber;
        height: z.ZodNumber;
        gender: z.ZodNumber;
        id: z.ZodString;
        isEmailVerified: z.ZodBoolean;
    }, z.core.$strip>>;
}, z.core.$strip>;
type UserResponse = z.infer<typeof UserResponseSchema>;

type index_AuthResponse = AuthResponse;
declare const index_AuthResponseSchema: typeof AuthResponseSchema;
type index_LoginRequest = LoginRequest;
declare const index_LoginRequestSchema: typeof LoginRequestSchema;
type index_RegisterRequest = RegisterRequest;
declare const index_RegisterRequestSchema: typeof RegisterRequestSchema;
type index_Role = Role;
declare const index_RoleSchema: typeof RoleSchema;
type index_TokenRequest = TokenRequest;
declare const index_TokenRequestSchema: typeof TokenRequestSchema;
type index_User = User;
type index_UserResponse = UserResponse;
declare const index_UserResponseSchema: typeof UserResponseSchema;
declare const index_UserSchema: typeof UserSchema;
declare namespace index {
  export { type index_AuthResponse as AuthResponse, index_AuthResponseSchema as AuthResponseSchema, type index_LoginRequest as LoginRequest, index_LoginRequestSchema as LoginRequestSchema, type index_RegisterRequest as RegisterRequest, index_RegisterRequestSchema as RegisterRequestSchema, type index_Role as Role, index_RoleSchema as RoleSchema, type index_TokenRequest as TokenRequest, index_TokenRequestSchema as TokenRequestSchema, type index_User as User, type index_UserResponse as UserResponse, index_UserResponseSchema as UserResponseSchema, index_UserSchema as UserSchema };
}

export { authorizationService as AuthorizationServiceTypes, auth as CommonAuthTypes, user as CommonUserTypes, index as Schemas, userService as UserServiceTypes };
