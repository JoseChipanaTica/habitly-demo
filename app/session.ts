// A tiny demo sign-in: one account from DEMO_EMAIL / DEMO_PASSWORD, and a session cookie that
// holds an HMAC of the email under SESSION_SECRET. Enough to test filming pages behind a login.

export const SESSION_COOKIE = "habitly_session";

export async function sessionToken(email: string) {
  const secret = process.env.SESSION_SECRET ?? "";
  const key = await crypto.subtle.importKey("raw", new TextEncoder().encode(secret), { name: "HMAC", hash: "SHA-256" }, false, ["sign"]);
  const mac = await crypto.subtle.sign("HMAC", key, new TextEncoder().encode(email.toLowerCase()));
  return Buffer.from(mac).toString("base64url");
}

export async function validSession(value: string | undefined) {
  const email = process.env.DEMO_EMAIL;
  return Boolean(value && email && process.env.SESSION_SECRET && value === (await sessionToken(email)));
}
