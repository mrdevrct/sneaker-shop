import axios from "axios";
import { getToken } from "./auth";
import { ApiError } from "./apiError";
import { Endpoint } from "./endpoints/types";
import { API_URL } from "@/config/api";

const api = axios.create({
  baseURL: API_URL,
  headers: { "Content-Type": "application/json" },
});

api.interceptors.request.use((config) => {
  const token = getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

api.interceptors.response.use(
  (res) => res,
  (err) => {
    const status = err.response?.status || 500;
    const message =
      err.response?.data?.meta?.message || err.message || "Unknown error";
    throw new ApiError(message, status, err.response?.data);
  }
);

export async function callApi<Req, Res>(
  endpoint: Endpoint<Req, Res>,
  data?: Req
): Promise<Res> {
  const response = await api.request<Res>({
    url: endpoint.path,
    method: endpoint.method,
    data,
  });
  return response.data;
}
