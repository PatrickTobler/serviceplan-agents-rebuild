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

  // Check if the user has already been redirected (cookie)
  const localeCookie = request.cookies.get("locale");
  if (localeCookie) {
    if (localeCookie.value === "de") {
      return NextResponse.redirect(new URL(`/de${pathname}`, request.url));
    }
    return NextResponse.next();
  }

  // Detect language from Accept-Language header
  const acceptLanguage = request.headers.get("accept-language") || "";
  const languages = acceptLanguage.split(",").map((lang) => lang.split(";")[0].trim());
  const isGerman = languages.some((lang) =>
    GERMAN_LOCALES.some((de) => lang.toLowerCase().startsWith(de.toLowerCase()))
  );

  // Set cookie so we only redirect once
  const response = isGerman
    ? NextResponse.redirect(new URL(`/de${pathname}`, request.url))
    : NextResponse.next();

  response.cookies.set("locale", isGerman ? "de" : "en", {
    maxAge: 60 * 60 * 24 * 365,
    path: "/",
  });

  return response;
}

export const config = {
  matcher: ["/", "/request-a-demo"],
};
