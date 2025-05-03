"use server";

import { cookies, headers } from "next/headers";
import { supportLocale } from "./supportLocale";

export async function getLocale() {
  const cookie = await cookies();
  const header = await headers();

  if (cookie.has("locale")) {
    return cookie.get("locale")!.value;
  }

  if (header.has("accept-language")) {
    const acceptLanguage = header.get("accept-language")!;
    // for now we only accept first level locale
    const locales = acceptLanguage
      .split(",")
      .map((locale) => locale.trim().split("-")[0]);
    const preferred = locales.find((locale) => supportLocale.includes(locale));

    if (preferred) {
      return preferred;
    }
  }

  return "en";
}
