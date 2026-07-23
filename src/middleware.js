import { NextResponse } from "next/server";

export function middleware(request) {
  const { pathname } = request.nextUrl;

  // Only evaluate language redirection on the root path '/'
  if (pathname === "/") {
    const cookieLocale = request.cookies.get("NEXT_LOCALE")?.value;

    if (cookieLocale === "en") {
      return NextResponse.redirect(new URL("/en", request.url));
    }

    if (!cookieLocale) {
      const acceptLanguage = request.headers.get("accept-language") || "";
      const primaryLang = acceptLanguage.split(",")[0]?.toLowerCase() || "";

      if (primaryLang.startsWith("en")) {
        return NextResponse.redirect(new URL("/en", request.url));
      }
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/"],
};
