"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

export function IntroLoader() {
  const [visible, setVisible] = useState(true);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion || sessionStorage.getItem("zouhour-intro-seen")) { setVisible(false); return; }
    const timer = window.setTimeout(() => { sessionStorage.setItem("zouhour-intro-seen", "true"); setVisible(false); }, 1150);
    return () => window.clearTimeout(timer);
  }, [reduceMotion]);

  return <AnimatePresence>{visible && <motion.div animate={{ opacity: 1 }} aria-label="Loading portfolio" className="intro-loader" exit={{ opacity: 0, y: "-100%" }} initial={{ opacity: 1 }} role="status" transition={{ duration: 0.55, ease: [0.76, 0, 0.24, 1] }}><motion.p animate={{ opacity: [0.5, 1, 0.5], letterSpacing: ["0.14em", "0.22em", "0.14em"] }} transition={{ duration: 0.9, repeat: Infinity }} className="font-mono text-xs uppercase">Zouhour Bellamine</motion.p><motion.div animate={{ rotate: 360 }} className="intro-flower" transition={{ duration: 1.1, ease: "easeInOut" }}>✿</motion.div><span className="sr-only">Loading</span></motion.div>}</AnimatePresence>;
}
