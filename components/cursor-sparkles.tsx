"use client";

import { useEffect, useState } from "react";

type Sparkle = { id: number; x: number; y: number; size: number };

export function CursorSparkles() {
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !window.matchMedia("(pointer: fine)").matches) return;
    let frame = 0;
    let last = 0;
    const onMove = (event: PointerEvent) => {
      const now = performance.now();
      if (now - last < 70) return;
      last = now;
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const sparkle = { id: now, x: event.clientX, y: event.clientY, size: 7 + Math.round(Math.random() * 7) };
        setSparkles((current) => [...current.slice(-8), sparkle]);
        window.setTimeout(() => setSparkles((current) => current.filter((item) => item.id !== sparkle.id)), 650);
      });
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => { cancelAnimationFrame(frame); window.removeEventListener("pointermove", onMove); };
  }, []);

  return <div aria-hidden="true" className="cursor-sparkles">{sparkles.map((sparkle) => <span className="cursor-sparkle" key={sparkle.id} style={{ left: sparkle.x, top: sparkle.y, width: sparkle.size, height: sparkle.size }} />)}</div>;
}
