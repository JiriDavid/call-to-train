"use server";

import { cookies } from "next/headers";
import { adminLoginSchema } from "@/lib/validations";

const ADMIN_COOKIE_KEY = "call2train_admin";

export async function loginAdminAction(password: string) {
  const parsed = adminLoginSchema.safeParse({ password });

  if (!parsed.success) {
    return {
      success: false,
      message: parsed.error.issues[0]?.message ?? "Invalid password.",
    };
  }

  const expectedPassword = process.env.ADMIN_PASSWORD;

  if (!expectedPassword) {
    return {
      success: false,
      message: "Admin password is not configured.",
    };
  }

  if (parsed.data.password !== expectedPassword) {
    return {
      success: false,
      message: "Incorrect password.",
    };
  }

  cookies().set(ADMIN_COOKIE_KEY, "true", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 60 * 60 * 12,
    path: "/",
  });

  return {
    success: true,
    message: "Signed in.",
  };
}

export async function logoutAdminAction() {
  cookies().delete(ADMIN_COOKIE_KEY);
}

export async function isAdminAuthenticated() {
  return cookies().get(ADMIN_COOKIE_KEY)?.value === "true";
}
