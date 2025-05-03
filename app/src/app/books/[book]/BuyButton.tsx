"use client";
import { unboundBookStoreAbi } from "@/abi/UnboundBookStore";
import {
  SelectPaymentSettings,
  useSelectPaymentModal,
} from "@0xsequence/checkout";
import { useAppKit, useAppKitAccount } from "@reown/appkit/react";
import { encodeFunctionData, parseUnits } from "viem";

export function BuyButton({
  tokenId,
  signature,
  before,
  price,
}: {
  price: number;
  signature: `0x${string}`;
  tokenId: number;
  before: number;
}) {
  const argPrice = parseUnits(price.toString(), 6);
  const { address } = useAppKitAccount();
  const { open } = useAppKit();
  const { openSelectPaymentModal } = useSelectPaymentModal();

  async function handleBuy() {
    if (!address) return open();
    const selectPaymentModalSettings: SelectPaymentSettings = {
      collectibles: [
        {
          tokenId: tokenId.toString(),
          quantity: "1",
        },
      ],
      chain: process.env.NEXT_PUBLIC_NETWORK === "soneium" ? 1868 : 1946,
      price: argPrice.toString(),
      targetContractAddress: process.env.NEXT_PUBLIC_STORE_ADDRESS as string,
      recipientAddress: address,
      currencyAddress: process.env.NEXT_PUBLIC_PAYMENT_TOKEN_ADDRESS as string,
      collectionAddress: "0x612e765bED90D0af1C984863eed9c71F79557EeE",
      copyrightText: "ⓒ2025 Unbound",
      onSuccess: () => {
        location.reload();
      },
      onError: (error: Error) => {
        console.error(error);
      },
      txData: encodeFunctionData({
        abi: unboundBookStoreAbi,
        functionName: "purchase",
        args: [
          address as `0x${string}`,
          {
            id: BigInt(tokenId),
            price: argPrice,
            before: BigInt(before),
          },
          signature,
        ],
      }),
    };

    openSelectPaymentModal(selectPaymentModalSettings);
  }

  return (
    <button
      className="mt-4 bg-gray-600 text-white rounded px-4 py-2 cursor-pointer"
      onClick={handleBuy}
    >
      Buy - ${price.toLocaleString()}
    </button>
  );
}
