"use client";

import { ReactNode } from "react";
import WagmiProvider from "./wagmi";

export default function ContextProvider({
  children,
  cookies,
}: {
  children: ReactNode;
  cookies: string | null;
}) {
  return <WagmiProvider cookies={cookies}>{children}</WagmiProvider>;
}
