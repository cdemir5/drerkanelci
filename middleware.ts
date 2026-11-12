import createMiddleware from "next-intl/middleware";
import type { NextRequest } from "next/server";
import { routing } from "./i18n/routing";

const intlMiddleware = createMiddleware(routing);

// Blog posts have a different slug per language, so next-intl's automatic
// hreflang `Link` header (same slug in every locale) would be wrong there.
// The post page emits correct hreflang tags in its metadata instead.
const BLOG_POST_PATH = /^\/(?:(?:en|de|ru)\/)?blog\/[^/]+\/?$/;

export default function middleware(request: NextRequest) {
  const response = intlMiddleware(request);
  if (BLOG_POST_PATH.test(request.nextUrl.pathname)) {
    response.headers.delete("Link");
  }
  return response;
}

export const config = {
  matcher: [
    // `admin` has its own (Turkish-only) layout; `.well-known` keeps
    // claude.ai's OAuth discovery probes from rendering localized pages.
    "/((?!api|admin|\\.well-known|_next|_vercel|images|favicon.ico|icon.png|apple-icon.png|robots.txt|sitemap.xml).*)",
  ],
};
