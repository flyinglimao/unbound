import { createPublicClient, http } from "viem";
import { soneium, soneiumMinato } from "viem/chains";

export const publicClient = createPublicClient({
  chain:
    process.env.NEXT_PUBLIC_NETWORK === "soneium" ? soneium : soneiumMinato,
  transport: http(process.env.NEXT_PUBLIC_RPC_URL!),
});
