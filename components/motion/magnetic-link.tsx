"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode, MouseEvent } from "react";

export function MagneticLink({ children, className, download, href }: { children: ReactNode; className: string; download?: boolean; href: string }) {
  const reduceMotion = useReducedMotion();
  const move = (event: MouseEvent<HTMLAnchorElement>) => {
    if (reduceMotion || !window.matchMedia("(pointer: fine)").matches) return;
    const bounds = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.transform = `translate(${(event.clientX - bounds.left - bounds.width / 2) * 0.12}px, ${(event.clientY - bounds.top - bounds.height / 2) * 0.18}px)`;
  };
  const reset = (event: MouseEvent<HTMLAnchorElement>) => { event.currentTarget.style.transform = "translate(0, 0)"; };

  return <motion.a className={className} download={download} href={href} onMouseLeave={reset} onMouseMove={move} transition={{ type: "spring", stiffness: 260, damping: 16 }} whileTap={reduceMotion ? {} : { scale: 0.97 }}>{children}</motion.a>;
}
