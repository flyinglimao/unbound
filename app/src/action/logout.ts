"use server";

import { cookies } from "next/headers";

export async function logout() {
  const cookie = await cookies();
  cookie.delete("message");
  cookie.delete("signature");
}
