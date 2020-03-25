// package: url
// file: url.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class UrlRequest extends jspb.Message { 
    getDomain(): string;
    setDomain(value: string): void;

    getSlug(): string;
    setSlug(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UrlRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UrlRequest): UrlRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UrlRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UrlRequest;
    static deserializeBinaryFromReader(message: UrlRequest, reader: jspb.BinaryReader): UrlRequest;
}

export namespace UrlRequest {
    export type AsObject = {
        domain: string,
        slug: string,
    }
}

export class UrlResponse extends jspb.Message { 
    getDomain(): string;
    setDomain(value: string): void;

    getSlug(): string;
    setSlug(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UrlResponse.AsObject;
    static toObject(includeInstance: boolean, msg: UrlResponse): UrlResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UrlResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UrlResponse;
    static deserializeBinaryFromReader(message: UrlResponse, reader: jspb.BinaryReader): UrlResponse;
}

export namespace UrlResponse {
    export type AsObject = {
        domain: string,
        slug: string,
    }
}
