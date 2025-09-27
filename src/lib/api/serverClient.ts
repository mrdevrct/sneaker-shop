/* eslint-disable @typescript-eslint/no-explicit-any */
import { Endpoint } from "./endpoints/types";
import { ApiResponse } from "./response";
import { ApiError } from "./apiError";
import { API_URL } from "@/config/api";

interface ServerOptions {
  revalidate?: number; // مدت زمان ISR
  cache?: RequestCache; // force-cache | no-store | default
}

export async function callServerApi<Req, Res>(
  endpoint: Endpoint<Req, Res>,
  options: ServerOptions = {}
): Promise<Res> {
  const url = `${API_URL}${endpoint.path}`;

  const res = await fetch(url, {
    method: endpoint.method,
    headers: {
      "Content-Type": "application/json",
    },
    cache: options.cache || "force-cache",
    next: options.revalidate ? { revalidate: options.revalidate } : undefined,
  });

  if (!res.ok) {
    const body = await res.json().catch(() => null);
    const message =
      body?.meta?.message || res.statusText || "خطا در ارتباط با سرور";
    throw new ApiError(message, res.status, body);
  }

  const json: ApiResponse<any> = await res.json();

  // Normalization: اگر data = null بود، [] بده
  return {
    ...json,
    data: json.data ?? [],
  } as Res;
}
