"use server";

import { getAddress } from "@/action/getAddress";
import { publicClient } from "@/lib/viem";
import { erc1155Abi } from "viem";

export async function checkOwned(tokenId: bigint): Promise<boolean> {
  const address = await getAddress().catch(() => false);
  if (!address) {
    return false;
  }
  const data = await publicClient.readContract({
    abi: erc1155Abi,
    address: process.env.NEXT_PUBLIC_STORE_ADDRESS as `0x${string}`,
    functionName: "balanceOf",
    args: [address as `0x${string}`, tokenId],
  });

  return data > 0n;
}
