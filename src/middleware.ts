import { NextRequest, NextResponse } from "next/server";

const GERMAN_LOCALES = ["de", "de-DE", "de-AT", "de-CH"];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Skip API routes, static files, and already-localized paths
  if (
    pathname.startsWith("/de") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/_next") ||
    pathname.startsWith("/images") ||
    pathname.startsWith("/styles") ||
    pathname.startsWith("/fonts") ||
    pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  // Only redirect based on explicit user preference (cookie set by language toggle)
  const localeCookie = request.cookies.get("locale");
  if (localeCookie && localeCookie.value === "de") {
    return NextResponse.redirect(new URL(`/de${pathname}`, request.url));
  }

  // Default: serve English (no auto-detection from browser headers)
  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/request-a-demo"],
};
