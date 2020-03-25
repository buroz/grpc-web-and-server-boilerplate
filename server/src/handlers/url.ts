import { ServerUnaryCall, sendUnaryData } from "grpc";

import { UrlRequest, UrlResponse } from "../proto/url/url_pb";
import { UrlService, IUrlServer } from "../proto/url/url_grpc_pb";

class UrlHandler implements IUrlServer {
  async getBySlug(call: ServerUnaryCall<UrlRequest>, callback: sendUnaryData<UrlResponse>): Promise<void> {
    const reply: UrlResponse = new UrlResponse();

    const obj = call.request.toObject();

    reply.setDomain(obj.domain);
    reply.setSlug(obj.slug);

    callback(null, reply);
  }
}

export default {
  service: UrlService, // Service interface
  handler: new UrlHandler() // Service interface definitions
};
