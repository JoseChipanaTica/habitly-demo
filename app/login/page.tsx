import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { SESSION_COOKIE, sessionToken } from "../session";

async function signIn(formData: FormData) {
  "use server";
  const email = String(formData.get("email") ?? "").trim().toLowerCase();
  const password = String(formData.get("password") ?? "");
  const next = String(formData.get("next") ?? "/");
  if (email !== process.env.DEMO_EMAIL?.toLowerCase() || password !== process.env.DEMO_PASSWORD) redirect(`/login?error=1&next=${encodeURIComponent(next)}`);
  (await cookies()).set(SESSION_COOKIE, await sessionToken(email), { httpOnly: true, secure: true, sameSite: "lax", path: "/", maxAge: 60 * 60 * 24 * 30 });
  redirect(next.startsWith("/") && !next.startsWith("//") ? next : "/");
}

export default async function Login({ searchParams }: { searchParams: Promise<{ next?: string; error?: string }> }) {
  const { next = "/", error } = await searchParams;
  return (
    <main className="login">
      <h1>Sign in</h1>
      <p className="sub">Welcome back to Habitly.</p>
      <form action={signIn} className="card">
        <input type="hidden" name="next" value={next} />
        <label>
          Email
          <input type="email" name="email" autoComplete="email" required />
        </label>
        <label>
          Password
          <input type="password" name="password" autoComplete="current-password" required />
        </label>
        {error && <p className="error">That email and password don’t match.</p>}
        <button type="submit">Sign in</button>
      </form>
    </main>
  );
}
