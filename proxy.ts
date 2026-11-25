import { NextResponse, type NextRequest } from "next/server";
import { SESSION_COOKIE, validSession } from "./app/session";

// Everything but the sign-in page needs a session.
export async function proxy(request: NextRequest) {
  if (await validSession(request.cookies.get(SESSION_COOKIE)?.value)) return NextResponse.next();
  const login = new URL("/login", request.url);
  login.searchParams.set("next", request.nextUrl.pathname);
  return NextResponse.redirect(login);
}

export const config = {
  matcher: ["/((?!login|_next/static|_next/image|favicon.ico|icon|apple-icon).*)"],
};
