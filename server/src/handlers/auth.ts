import { readFileSync } from "fs";
import { randomBytes, pbkdf2Sync } from "crypto";
import { ServerUnaryCall, sendUnaryData } from "grpc";
import { JsonWebTokenError, sign, verify } from "jsonwebtoken";

import { RegisterRequest, RegisterResponse, LoginRequest, LoginResponse } from "../../../proto/auth/auth_pb";
import { AuthService, IAuthServer } from "../../../proto/auth/auth_grpc_pb";

const userPassword =
  "e61dca230c03a968c56842e3e4af9194a363de2f2f979fbf0ca46140c82695ebec1ec0b4a76a4e5ff0fdde9cae654cb4c60c35f65f0d10fbe5bf95050c93bab3.7ca85a9d51";

const SecretKey = readFileSync(process.env.JWT_KEY as string);
const PublicKey = readFileSync(process.env.JWT_PUB as string);
const Expires = process.env.JWT_EXP;

class AuthHandler implements IAuthServer {
  async register(call: ServerUnaryCall<RegisterRequest>, callback: sendUnaryData<RegisterResponse>): Promise<void> {
    const reply: RegisterResponse = new RegisterResponse();

    const inputPassword = call.request.getPassword();
    call.request.setPassword(hashPassword(inputPassword, 10));

    try {
      await testEmail(call.request.getEmail());
      const token = GenerateJWT(call.request.toObject());
      reply.setToken(token);
      callback(null, reply);
    } catch (err) {
      callback(new Error(err), null);
    }
  }

  async login(call: ServerUnaryCall<LoginRequest>, callback: sendUnaryData<LoginResponse>): Promise<void> {
    const reply: LoginResponse = new LoginResponse();
    const email = call.request.getEmail();
    try {
      await testEmail(email);
      await compareHashedPassword(call.request.getPassword(), userPassword);
      const token = GenerateJWT({ email });
      reply.setToken(token);
      callback(null, reply);
    } catch (err) {
      callback(new Error(err), null);
    }
  }
}

export default {
  service: AuthService, // Service interface
  handler: new AuthHandler() // Service interface definitions
};

function testEmail(email: string): Promise<boolean> {
  return new Promise((resolve, reject) => {
    const r = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return r.test(email) ? resolve() : reject("Email is not valid");
  });
}

function hashPassword(password: string, length: number): string {
  const salt = randomBytes(Math.ceil(length / 2))
    .toString("hex")
    .slice(0, length);
  const hashed = pbkdf2Sync(password, salt, 100000, 64, "sha512").toString("hex");
  return hashed + "." + salt;
}

function compareHashedPassword(inputPassword: string, userPassword: string): Promise<string | void> {
  const data = userPassword.split(".");
  const realPassword = data[0];
  const salt = data[1];
  const hashed = pbkdf2Sync(inputPassword, salt, 100000, 64, "sha512").toString("hex");
  return new Promise((resolve, reject) => {
    if (realPassword === hashed) {
      resolve();
    } else {
      reject("Passwords are not matched!");
    }
  });
}

function GenerateJWT(data: Object): string {
  let token = sign(data, SecretKey, {
    algorithm: "RS256",
    expiresIn: Expires
  });
  return token;
}

function ReadJWT(token: string): Promise<string | object | JsonWebTokenError> {
  return new Promise((resolve, reject) => {
    try {
      let data = verify(token, PublicKey);
      resolve(data);
    } catch (err) {
      reject(err.name);
    }
  });
}
