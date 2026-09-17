"use client";

import { useEffect, useState } from "react";

export function PageTransition() {
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const handleNavigation = (event: MouseEvent) => {
      const link = (event.target as Element | null)?.closest<HTMLAnchorElement>("a[href]");
      if (!link || event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || link.target === "_blank" || link.hasAttribute("download")) return;
      const destination = new URL(link.href, window.location.href);
      if (destination.origin !== window.location.origin || destination.href === window.location.href || (destination.hash && destination.pathname === window.location.pathname)) return;
      event.preventDefault();
      setIsTransitioning(true);
      window.setTimeout(() => window.location.assign(destination.href), 260);
    };
    document.addEventListener("click", handleNavigation, true);
    return () => document.removeEventListener("click", handleNavigation, true);
  }, []);

  return <div aria-hidden="true" className={`page-transition ${isTransitioning ? "page-transition-active" : ""}`}><span>✦</span><span>✿</span><span>✦</span></div>;
}
