"use client";

import type { ReactNode } from "react";

export const OPEN_QUOTE_EVENT = "bw:open-quote";

/** Any button that opens the "Connect with Us" popup. */
export function QuoteButton({ className, children }: { className: string; children: ReactNode }) {
  return (
    <button type="button" className={className} onClick={() => window.dispatchEvent(new Event(OPEN_QUOTE_EVENT))}>
      {children}
    </button>
  );
}
