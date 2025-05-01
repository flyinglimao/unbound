"use server";
import { encodeAbiParameters, keccak256, parseAbiParameters } from "viem";
import { privateKeyToAccount } from "viem/accounts";

export async function sign() {
  const account = privateKeyToAccount(
    process.env.SIGNER_PRIVATE_KEY as `0x${string}`
  );
  return await account.signMessage({
    message: {
      raw: keccak256(
        encodeAbiParameters(parseAbiParameters("uint256,uint256,uint256"), [
          1n,
          2000000n,
          1900000000n,
        ])
      ),
    },
  });
}
