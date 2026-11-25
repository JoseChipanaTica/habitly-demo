"use client";

import { useState, type ReactNode } from "react";

/** Settings sections behind tabs: the second one only shows after a click. */
export function Tabs({ tabs }: { tabs: { label: string; content: ReactNode }[] }) {
  const [open, setOpen] = useState(0);
  return (
    <>
      <div role="tablist" className="tabs">
        {tabs.map((t, i) => (
          <button key={t.label} role="tab" aria-selected={open === i} className="tab" onClick={() => setOpen(i)}>
            {t.label}
          </button>
        ))}
      </div>
      <div role="tabpanel">{tabs[open]!.content}</div>
    </>
  );
}
