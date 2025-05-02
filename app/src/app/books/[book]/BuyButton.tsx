"use client";
import { unboundBookStoreAbi } from "@/abi/UnboundBookStore";
import {
  SelectPaymentSettings,
  useSelectPaymentModal,
} from "@0xsequence/checkout";
import { useAppKit, useAppKitAccount } from "@reown/appkit/react";
import { encodeFunctionData } from "viem";
import { sign } from "./sign";

export function BuyButton({ price }: { price: number }) {
  const { address } = useAppKitAccount();
  const { open } = useAppKit();
  const { openSelectPaymentModal } = useSelectPaymentModal();

  async function handleBuy(event: React.MouseEvent<HTMLButtonElement>) {
    if (!address) return open();
    const selectPaymentModalSettings: SelectPaymentSettings = {
      collectibles: [
        {
          tokenId: "1",
          quantity: "1",
        },
      ],
      chain: process.env.NODE_ENV === "production" ? 1868 : 1946,
      price: "2000000",
      targetContractAddress: process.env.NEXT_PUBLIC_STORE_ADDRESS as string,
      recipientAddress: address,
      currencyAddress: process.env.NEXT_PUBLIC_PAYMENT_TOKEN_ADDRESS as string,
      collectionAddress: "0x612e765bED90D0af1C984863eed9c71F79557EeE",
      copyrightText: "ⓒ2025 Unbound",
      onSuccess: (txnHash: string) => {
        console.log("success!", txnHash);
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
            id: 1n,
            price: 2000000n,
            before: 1900000000n,
          },
          await sign(),
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
function useAppKitWallet(): { isReady: any; isPending: any; connect: any } {
  throw new Error("Function not implemented.");
}
