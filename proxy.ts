import { NextResponse, type NextRequest } from "next/server";
import { defaultLocale, isLocale } from "./i18n/config";

// Routes every request to the right language, so pages can all live under
// app/[lang]:
//   /about      is rewritten to /en/about (English has no prefix in the URL)
//   /es/about   goes straight through
//   /en/about   is redirected to /about, so each page has one address
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const first = pathname.split("/")[1];

  if (first === defaultLocale) {
    const url = request.nextUrl.clone();
    url.pathname = pathname.slice(defaultLocale.length + 1) || "/";
    return NextResponse.redirect(url, 308);
  }

  if (isLocale(first)) return NextResponse.next();

  const url = request.nextUrl.clone();
  url.pathname = `/${defaultLocale}${pathname === "/" ? "" : pathname}`;
  return NextResponse.rewrite(url);
}

export const config = {
  // Everything except Next's own files, API routes and anything with a file
  // extension (images, fonts, sitemap.xml, robots.txt, the manifest, icons)
  matcher: ["/((?!_next/|__nextjs|api/|.*\\..*).*)"],
};
