"use server";

import { prisma } from "@/lib/prisma";
import { cookies } from "next/headers";
import { hashMessage, recoverAddress } from "viem";

export async function login(message: string, signature: `0x${string}`) {
  const cookie = await cookies();
  // TODO: more formally check the SIWE message
  let address: string;
  try {
    address = await recoverAddress({
      hash: hashMessage(message),
      signature,
    });
  } catch {
    return false;
  }
  cookie.set("message", message, { httpOnly: true, secure: true });
  cookie.set("signature", signature, { httpOnly: true, secure: true });

  const user = await prisma.user.findFirst({
    where: {
      address,
    },
  });

  if (!user) {
    await prisma.user.create({
      data: {
        address,
        name: address,
      },
    });
  }

  return true;
}
