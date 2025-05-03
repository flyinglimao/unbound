import { WagmiAdapter } from "@reown/appkit-adapter-wagmi";
import { soneium, soneiumMinato } from "@reown/appkit/networks";
import { cookieStorage, createStorage } from "@wagmi/core";

export const projectId = "d3566a0e94f9cf62585a32a2d2bcc6e4";

if (!projectId) {
  throw new Error("Project ID is not defined");
}

export const networks = [soneium, soneiumMinato];

export const wagmiAdapter = new WagmiAdapter({
  storage: createStorage({
    storage: cookieStorage,
  }),
  ssr: true,
  projectId,
  networks,
  customRpcUrls: {
    [`eip155:${soneiumMinato.id}`]: [
      {
        url: process.env.NEXT_PUBLIC_RPC_URL!,
      },
    ],
  },
});

export const config = wagmiAdapter.wagmiConfig;
