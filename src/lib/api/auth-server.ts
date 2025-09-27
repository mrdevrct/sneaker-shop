// auth-server.ts
"use server";
import { cookies } from "next/headers";

const TOKEN_KEY = process.env.TOKEN_KEY || "jwt_token";

export async function setServerToken(token: string, remember = false) {
  const cookieStore = await cookies();
  cookieStore.set(TOKEN_KEY, token, {
    httpOnly: true, // Enhanced security
    secure: process.env.NODE_ENV === "production", // Only secure in production
    sameSite: "strict",
    path: "/",
    maxAge: remember ? 60 * 60 * 24 * 7 : 60 * 60 * 24, // 7 days or 1 day
  });
}
