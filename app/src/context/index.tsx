"use client";

import { ReactNode } from "react";
import { createConfig, SequenceConnect } from "@0xsequence/connect";
import { SequenceCheckoutProvider } from "@0xsequence/checkout";
import WagmiProvider from "./wagmi";

const connectConfig = createConfig("waas", {
  projectAccessKey: "AQAAAAAAAKOaU6uzijRuWZUH6GXJToCc5XI",
  waasConfigKey:
    "eyJwcm9qZWN0SWQiOjM4NjIxLCJycGNTZXJ2ZXIiOiJodHRwczovL3dhYXMuc2VxdWVuY2UuYXBwIn0=",
  appName: "Unbound",
});

export default function ContextProvider({
  children,
  cookies,
}: {
  children: ReactNode;
  cookies: string | null;
}) {
  return (
    <WagmiProvider cookies={cookies}>
      <SequenceConnect config={connectConfig}>
        <SequenceCheckoutProvider>{children}</SequenceCheckoutProvider>
      </SequenceConnect>
    </WagmiProvider>
  );
}
