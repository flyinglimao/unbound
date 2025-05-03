"use client";

import { login } from "@/action/login";
import { logout } from "@/action/logout";
import { siwx } from "@/context/wagmi";
import {
  useAppKitAccount,
  useAppKitNetwork,
  useDisconnect,
} from "@reown/appkit/react";
import { useEffect } from "react";

export function AutoLogin() {
  const { caipNetworkId } = useAppKitNetwork();
  const { address } = useAppKitAccount();
  const { disconnect } = useDisconnect();

  useEffect(() => {
    if (caipNetworkId && address) {
      siwx.getSessions(caipNetworkId, address).then((sessions) => {
        if (sessions.length === 0) logout();
        else
          login(
            sessions[0].message,
            sessions[0].signature as `0x${string}`
          ).then(console.log);
      });
    }
  }, [caipNetworkId, address]);
  return null;
}
