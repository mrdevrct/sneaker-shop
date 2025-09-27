/* eslint-disable @typescript-eslint/no-explicit-any */
export type HttpMethod = "GET" | "POST" | "PUT" | "DELETE";

export interface Endpoint<Req = any, Res = any> {
  path: string;
  method: HttpMethod;
  requiresAuth: boolean;
  request?: Req;
  response?: Res;
}
