"use server";

import { prisma } from "@/lib/prisma";
import {
  encodeAbiParameters,
  keccak256,
  parseAbiParameters,
  parseUnits,
} from "viem";
import { privateKeyToAccount } from "viem/accounts";
import { checkOwned } from "./checkOwned";

type NotOwned = {
  owned: false;
  price: number;
  signature: `0x${string}`;
  tokenId: number;
  before: number;
};

type Owned = {
  owned: true;
};

export async function getChapterState({
  bookSlug,
  chapterSlug,
}: {
  bookSlug: string;
  chapterSlug: string;
}): Promise<Owned | NotOwned> {
  const chapter = await prisma.chapter.findFirst({
    where: {
      slug: chapterSlug,
      book: {
        slug: bookSlug,
      },
    },
  });
  if (!chapter) {
    throw new Error("Chapter not found");
  }
  if (chapter.tokenId === null) {
    throw new Error("Chapter does not have a tokenId");
  }
  console.log(chapter.tokenId);
  const owned = await checkOwned(BigInt(chapter.tokenId));
  if (owned) return { owned: true };

  const before = Math.floor(new Date().getTime() / 1000) + 3600;
  return {
    owned: false,
    price: chapter.price.toNumber(),
    signature: await sign(
      BigInt(chapter.tokenId),
      parseUnits(chapter.price.toString(), 6),
      before
    ),
    tokenId: chapter.tokenId,
    before,
  };
}

async function sign(tokenId: bigint, price: bigint, before: number) {
  const account = privateKeyToAccount(
    process.env.SIGNER_PRIVATE_KEY as `0x${string}`
  );
  return await account.signMessage({
    message: {
      raw: keccak256(
        encodeAbiParameters(parseAbiParameters("uint256,uint256,uint256"), [
          tokenId,
          price,
          BigInt(before),
        ])
      ),
    },
  });
}
