import { cookies } from "next/headers";
import crypto from "crypto";

const COOKIE_NAME = "admin-session";

function getExpectedSessionToken(): string {
  const secret = process.env.ADMIN_SECRET_KEY || "default_fallback_admin_secret_key_12345!";
  return crypto.createHmac("sha256", secret).update("admin-authenticated-session").digest("hex");
}

export async function isAdminAuthenticated(): Promise<boolean> {
  const cookieStore = await cookies();
  const sessionToken = cookieStore.get(COOKIE_NAME)?.value;
  if (!sessionToken) return false;
  return sessionToken === getExpectedSessionToken();
}

export async function setAdminSession() {
  const cookieStore = await cookies();
  const token = getExpectedSessionToken();
  cookieStore.set(COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: 60 * 60 * 24 * 7, // 1 week
    path: "/",
  });
}

export async function clearAdminSession() {
  const cookieStore = await cookies();
  cookieStore.delete(COOKIE_NAME);
}
