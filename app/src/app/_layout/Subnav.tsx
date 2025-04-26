import { ReactNode } from "react";
import { createPortal } from "react-dom";

export function Subnav({ children }: { children: ReactNode }) {
  const subnav = document.getElementById("subnav");
  if (!subnav) {
    throw new Error("Subnav element not found");
  }

  return (
    <>
      {children}
      {createPortal(children, subnav)}
    </>
  );
}
