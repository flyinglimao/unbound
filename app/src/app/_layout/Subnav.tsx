"use client";

import { ReactNode } from "react";
import { createPortal } from "react-dom";

export function Subnav({ children }: { children: ReactNode }) {
  const subnav =
    typeof window === "undefined"
      ? null
      : window.document.getElementById("subnav");

  return (
    <>
      {children}
      {subnav ? createPortal(children, subnav) : null}
    </>
  );
}
