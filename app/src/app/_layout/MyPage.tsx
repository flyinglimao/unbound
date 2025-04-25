"use client";

import { useAppKitAccount } from "@reown/appkit/react";
import Link from "next/link";

export function MyPage() {
  const { isConnected } = useAppKitAccount();
  console.log(isConnected);
  if (!isConnected) return null;

  return <Link href="/profile">My Page</Link>;
}
