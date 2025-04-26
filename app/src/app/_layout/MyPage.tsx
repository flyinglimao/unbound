"use client";

import { useAppKitAccount } from "@reown/appkit/react";
import Link from "next/link";

export function MyPage({ className }: { className?: string }) {
  const { isConnected } = useAppKitAccount();

  if (!isConnected) return null;

  return (
    <Link href="/profile" className={className}>
      My Page
    </Link>
  );
}
