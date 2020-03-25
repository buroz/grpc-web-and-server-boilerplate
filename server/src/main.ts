import "dotenv/config";
// import { promisify } from 'util'
// import { readFileSync } from "fs";
import grpc from "grpc";

// Services
import authHandler from "./handlers/auth";
import urlHandler from "./handlers/url";

import { protoIndex } from "./proto";

// const readFileAsync = promisify(readFileAync)

const serverPort = process.env.SERVER_PORT || 50051;
const serverHost = process.env.SERVER_HOST;

/*
const serverCA = process.env.SERVER_CA as string;
const serverCRT = process.env.SERVER_CRT as string;
const serverKEY = process.env.SERVER_KEY as string;
*/

protoIndex();

type StartServerType = () => void;
export const startServer: StartServerType = (): void => {
  const server: grpc.Server = new grpc.Server();

  // Services
  server.addService(authHandler.service, authHandler.handler);
  server.addService(urlHandler.service, urlHandler.handler);

  server.bindAsync(
    `${serverHost}:${serverPort}`,
    grpc.ServerCredentials.createInsecure(), // NON SSL
    /*
    // SSL
    grpc.ServerCredentials.createSsl(
      readFileSync(serverCA),
      [
        {
          cert_chain: readFileSync(serverCRT),
          private_key: readFileSync(serverKEY)
        }
      ],
      true
    ),
    */
    (err: any, port: number) => {
      if (err != null) return console.error(err);
      console.log(`gRPC listening on ${port}`);
    }
  );
  server.start();
};

startServer();
