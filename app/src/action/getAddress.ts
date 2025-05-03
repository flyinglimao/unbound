"use server";

import { cookies } from "next/headers";
import { hashMessage, recoverAddress } from "viem";

export async function getAddress() {
  const cookie = await cookies();
  const signature = cookie.get("signature")?.value;
  const message = cookie.get("message")?.value;

  if (!signature || !message) {
    throw new Error("No signature or message found in cookies");
  }
  // TODO: more formally check the SIWE message
  return await recoverAddress({
    hash: hashMessage(message),
    signature: signature as `0x${string}`,
  });
}
