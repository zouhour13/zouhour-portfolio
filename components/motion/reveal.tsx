"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

export function Reveal({ children, className, delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const reduceMotion = useReducedMotion();

  return <motion.div className={className} initial={reduceMotion ? false : { opacity: 0, y: 28 }} transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }} viewport={{ amount: 0.2, once: true }} whileInView={reduceMotion ? {} : { opacity: 1, y: 0 }}>{children}</motion.div>;
}
