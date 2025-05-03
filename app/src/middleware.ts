import { supportLocale } from "@/action/locale/supportLocale";
import { NextResponse, type NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const locale = request.nextUrl.searchParams.get("locale");
  if (!locale) return;

  if (!supportLocale.includes(locale)) {
    request.cookies.set("flashes", "Locale not supported!");
  } else {
    // incoming request, passing new locale
    request.cookies.set("locale", locale);
  }

  const response = NextResponse.next();
  // outgoing response, setting new locale
  response.cookies.set("locale", locale);

  return response;
}
