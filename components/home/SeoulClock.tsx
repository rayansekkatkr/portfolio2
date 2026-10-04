"use client";

import { useEffect, useState } from "react";

// Live Seoul time. Renders a stable placeholder on the server to avoid hydration drift.
export default function SeoulClock({ label }: { label: string }) {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    const fmt = new Intl.DateTimeFormat("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
      timeZone: "Asia/Seoul",
    });
    const tick = () => setTime(fmt.format(new Date()));
    const first = setTimeout(tick, 0);
    const id = setInterval(tick, 15_000);
    return () => {
      clearTimeout(first);
      clearInterval(id);
    };
  }, []);

  return (
    <span
      className="font-meta text-se-muted hidden items-center gap-2 text-[11px] tracking-[0.14em] uppercase lg:inline-flex"
      title={label}
    >
      <span className="sr-only">{label}:</span>
      <span aria-hidden="true">Seoul</span>
      <span className="text-se-text tabular-nums">{time ?? "--:--"}</span>
      <span aria-hidden="true" className="text-se-faint">
        KST
      </span>
    </span>
  );
}
