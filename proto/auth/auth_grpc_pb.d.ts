// package: auth
// file: auth.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as auth_pb from "./auth_pb";

interface IAuthService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    register: IAuthService_IRegister;
    login: IAuthService_ILogin;
}

interface IAuthService_IRegister extends grpc.MethodDefinition<auth_pb.RegisterRequest, auth_pb.RegisterResponse> {
    path: string; // "/auth.Auth/Register"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<auth_pb.RegisterRequest>;
    requestDeserialize: grpc.deserialize<auth_pb.RegisterRequest>;
    responseSerialize: grpc.serialize<auth_pb.RegisterResponse>;
    responseDeserialize: grpc.deserialize<auth_pb.RegisterResponse>;
}
interface IAuthService_ILogin extends grpc.MethodDefinition<auth_pb.LoginRequest, auth_pb.LoginResponse> {
    path: string; // "/auth.Auth/Login"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<auth_pb.LoginRequest>;
    requestDeserialize: grpc.deserialize<auth_pb.LoginRequest>;
    responseSerialize: grpc.serialize<auth_pb.LoginResponse>;
    responseDeserialize: grpc.deserialize<auth_pb.LoginResponse>;
}

export const AuthService: IAuthService;

export interface IAuthServer {
    register: grpc.handleUnaryCall<auth_pb.RegisterRequest, auth_pb.RegisterResponse>;
    login: grpc.handleUnaryCall<auth_pb.LoginRequest, auth_pb.LoginResponse>;
}

export interface IAuthClient {
    register(request: auth_pb.RegisterRequest, callback: (error: grpc.ServiceError | null, response: auth_pb.RegisterResponse) => void): grpc.ClientUnaryCall;
    register(request: auth_pb.RegisterRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: auth_pb.RegisterResponse) => void): grpc.ClientUnaryCall;
    register(request: auth_pb.RegisterRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: auth_pb.RegisterResponse) => void): grpc.ClientUnaryCall;
    login(request: auth_pb.LoginRequest, callback: (error: grpc.ServiceError | null, response: auth_pb.LoginResponse) => void): grpc.ClientUnaryCall;
    login(request: auth_pb.LoginRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: auth_pb.LoginResponse) => void): grpc.ClientUnaryCall;
    login(request: auth_pb.LoginRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: auth_pb.LoginResponse) => void): grpc.ClientUnaryCall;
}

export class AuthClient extends grpc.Client implements IAuthClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public register(request: auth_pb.RegisterRequest, callback: (error: grpc.ServiceError | null, response: auth_pb.RegisterResponse) => void): grpc.ClientUnaryCall;
    public register(request: auth_pb.RegisterRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: auth_pb.RegisterResponse) => void): grpc.ClientUnaryCall;
    public register(request: auth_pb.RegisterRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: auth_pb.RegisterResponse) => void): grpc.ClientUnaryCall;
    public login(request: auth_pb.LoginRequest, callback: (error: grpc.ServiceError | null, response: auth_pb.LoginResponse) => void): grpc.ClientUnaryCall;
    public login(request: auth_pb.LoginRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: auth_pb.LoginResponse) => void): grpc.ClientUnaryCall;
    public login(request: auth_pb.LoginRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: auth_pb.LoginResponse) => void): grpc.ClientUnaryCall;
}
