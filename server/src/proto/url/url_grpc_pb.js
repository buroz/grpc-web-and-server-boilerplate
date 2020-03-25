// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var url_pb = require('./url_pb.js');

function serialize_url_UrlRequest(arg) {
  if (!(arg instanceof url_pb.UrlRequest)) {
    throw new Error('Expected argument of type url.UrlRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_url_UrlRequest(buffer_arg) {
  return url_pb.UrlRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_url_UrlResponse(arg) {
  if (!(arg instanceof url_pb.UrlResponse)) {
    throw new Error('Expected argument of type url.UrlResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_url_UrlResponse(buffer_arg) {
  return url_pb.UrlResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var UrlService = exports.UrlService = {
  getBySlug: {
    path: '/url.Url/GetBySlug',
    requestStream: false,
    responseStream: false,
    requestType: url_pb.UrlRequest,
    responseType: url_pb.UrlResponse,
    requestSerialize: serialize_url_UrlRequest,
    requestDeserialize: deserialize_url_UrlRequest,
    responseSerialize: serialize_url_UrlResponse,
    responseDeserialize: deserialize_url_UrlResponse,
  },
};

exports.UrlClient = grpc.makeGenericClientConstructor(UrlService);
