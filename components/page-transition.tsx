"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

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

  return <motion.div animate={{ opacity: isTransitioning ? 1 : 0, y: isTransitioning ? "0%" : "-101%" }} aria-hidden="true" className="page-transition" initial={false} transition={{ duration: isTransitioning ? 0.26 : 0, ease: [0.7, 0, 0.3, 1] }}><motion.span animate={isTransitioning ? { opacity: 1, rotate: 0, scale: 1 } : { opacity: 0, rotate: -20, scale: 0.4 }} transition={{ duration: 0.2 }}>✦</motion.span><motion.span animate={isTransitioning ? { opacity: 1, rotate: 0, scale: 1 } : { opacity: 0, rotate: -20, scale: 0.4 }} transition={{ delay: 0.05, duration: 0.2 }}>✿</motion.span><motion.span animate={isTransitioning ? { opacity: 1, rotate: 0, scale: 1 } : { opacity: 0, rotate: -20, scale: 0.4 }} transition={{ delay: 0.1, duration: 0.2 }}>✦</motion.span></motion.div>;
}
