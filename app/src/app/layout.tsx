import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ContextProvider from "@/context";
import { cookies, headers } from "next/headers";
import { Nav } from "../components/layout/Nav";
import { AutoLogin } from "../components/layout/AutoLogin";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Unbound",
  description: "Release Your Creation to the World",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const wagmiCookies = (await cookies()).get("wagmi.store")?.value || "";

  return (
    <html className="lg:scroll-p-20 scroll-p-2">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ContextProvider cookies={wagmiCookies}>
          <Nav />
          {children}
          <AutoLogin />
        </ContextProvider>
      </body>
    </html>
  );
}
