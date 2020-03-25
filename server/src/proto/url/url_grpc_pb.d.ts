// package: url
// file: url.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as url_pb from "./url_pb";

interface IUrlService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getBySlug: IUrlService_IGetBySlug;
}

interface IUrlService_IGetBySlug extends grpc.MethodDefinition<url_pb.UrlRequest, url_pb.UrlResponse> {
    path: string; // "/url.Url/GetBySlug"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<url_pb.UrlRequest>;
    requestDeserialize: grpc.deserialize<url_pb.UrlRequest>;
    responseSerialize: grpc.serialize<url_pb.UrlResponse>;
    responseDeserialize: grpc.deserialize<url_pb.UrlResponse>;
}

export const UrlService: IUrlService;

export interface IUrlServer {
    getBySlug: grpc.handleUnaryCall<url_pb.UrlRequest, url_pb.UrlResponse>;
}

export interface IUrlClient {
    getBySlug(request: url_pb.UrlRequest, callback: (error: grpc.ServiceError | null, response: url_pb.UrlResponse) => void): grpc.ClientUnaryCall;
    getBySlug(request: url_pb.UrlRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: url_pb.UrlResponse) => void): grpc.ClientUnaryCall;
    getBySlug(request: url_pb.UrlRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: url_pb.UrlResponse) => void): grpc.ClientUnaryCall;
}

export class UrlClient extends grpc.Client implements IUrlClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public getBySlug(request: url_pb.UrlRequest, callback: (error: grpc.ServiceError | null, response: url_pb.UrlResponse) => void): grpc.ClientUnaryCall;
    public getBySlug(request: url_pb.UrlRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: url_pb.UrlResponse) => void): grpc.ClientUnaryCall;
    public getBySlug(request: url_pb.UrlRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: url_pb.UrlResponse) => void): grpc.ClientUnaryCall;
}
