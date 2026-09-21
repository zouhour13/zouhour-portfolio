"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

const greetings = [
  { word: "Hello", language: "English", flag: "🇬🇧" },
  { word: "Bonjour", language: "Français", flag: "🇫🇷" },
  { word: "مرحبا", language: "العربية", flag: "🇹🇳" },
  { word: "你好", language: "中文", flag: "🇨🇳" },
  { word: "Hola", language: "Español", flag: "🇪🇸" },
  { word: "Hallo", language: "Deutsch", flag: "🇩🇪" },
  { word: "안녕하세요", language: "한국어", flag: "🇰🇷" },
];

const particles = ["✿", "✦", "·", "✿", "✦", "·", "✿", "✦"];

export function IntroLoader() {
  const [visible, setVisible] = useState(() => typeof window === "undefined" || !sessionStorage.getItem("zouhour-intro-seen"));
  const [index, setIndex] = useState(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion) {
      const hideLoader = window.setTimeout(() => setVisible(false), 0);
      return () => window.clearTimeout(hideLoader);
    }
    const interval = window.setInterval(() => setIndex((current) => current + 1), 520);
    const finish = window.setTimeout(() => { sessionStorage.setItem("zouhour-intro-seen", "true"); setVisible(false); }, greetings.length * 520 + 420);
    return () => { window.clearInterval(interval); window.clearTimeout(finish); };
  }, [reduceMotion]);

  const greeting = greetings[Math.min(index, greetings.length - 1)];
  return <AnimatePresence>{visible && <motion.div animate={{ opacity: 1 }} aria-label="Welcome to Zouhour Bellamine's portfolio" className="intro-loader" exit={{ clipPath: "circle(0% at 50% 50%)", opacity: 0 }} initial={{ opacity: 1 }} role="status" transition={{ duration: 0.75, ease: [0.76, 0, 0.24, 1] }}><div aria-hidden="true" className="intro-particles">{particles.map((particle, particleIndex) => <motion.span animate={{ opacity: [0.15, 0.85, 0.15], rotate: [0, particleIndex % 2 ? -20 : 20, 0], y: [0, particleIndex % 2 ? -22 : 22, 0] }} key={`${particle}-${particleIndex}`} transition={{ delay: particleIndex * 0.08, duration: 3 + particleIndex * 0.12, repeat: Infinity }}>{particle}</motion.span>)}</div><motion.p animate={{ opacity: [0.5, 1, 0.5], letterSpacing: ["0.14em", "0.22em", "0.14em"] }} className="intro-brand font-mono text-xs uppercase" transition={{ duration: 1.2, repeat: Infinity }}>Zouhour Bellamine</motion.p><AnimatePresence mode="wait"><motion.div animate={{ opacity: 1, scale: 1, y: 0 }} className="intro-greeting" exit={{ opacity: 0, scale: 1.12, y: -18 }} initial={{ opacity: 0, scale: 0.88, y: 20 }} key={greeting.word} transition={{ duration: 0.36, ease: [0.22, 1, 0.36, 1] }}><p className="intro-word">{greeting.word}</p><p className="intro-language">{greeting.language} <span>{greeting.flag}</span></p></motion.div></AnimatePresence><motion.div animate={{ rotate: [0, 180, 360] }} className="intro-flower" transition={{ duration: 5, ease: "linear", repeat: Infinity }}>✿</motion.div><span className="sr-only">Loading</span></motion.div>}</AnimatePresence>;
}
