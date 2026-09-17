"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { MagneticLink } from "@/components/motion/magnetic-link";

type Locale = "en" | "fr";

const copy = {
  en: { eyebrow: "AI Engineer · Software Engineer", titleStart: "Making", titleEmphasis: "intelligent", titleEnd: "ideas feel beautifully real.", description: "Based in Monastir, Tunisia. I build thoughtful systems across machine learning, generative AI, RAG, and computer vision.", work: "Explore my work", contact: "Let's connect", cv: "Download CV", portrait: "Portrait placeholder", portraitNote: "Place", note: "AI ↗ SOFTWARE ↗ CREATIVE SYSTEMS" },
  fr: { eyebrow: "Ingénieure IA · Ingénieure logiciel", titleStart: "Des idées", titleEmphasis: "intelligentes", titleEnd: ", rendues réelles avec soin.", description: "Basée à Monastir, en Tunisie. Je conçois des systèmes réfléchis en machine learning, IA générative, RAG et vision par ordinateur.", work: "Découvrir mes projets", contact: "Me contacter", cv: "Télécharger le CV", portrait: "Portrait à ajouter", portraitNote: "Ajoutez", note: "IA ↗ LOGICIEL ↗ SYSTÈMES CRÉATIFS" },
};

export function AnimatedHero({ locale = "en" }: { locale?: Locale }) {
  const ref = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const portraitY = useTransform(scrollYProgress, [0, 1], [0, reduceMotion ? 0 : -72]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, reduceMotion ? 0 : 48]);
  const content = copy[locale];
  const item = { hidden: { opacity: 0, y: 22 }, show: { opacity: 1, y: 0 } };

  return <section className="hero-shell hero-animated" ref={ref}><motion.p animate={reduceMotion ? {} : { letterSpacing: ["0.02em", "0.055em", "0.02em"], y: [0, -5, 0] }} aria-hidden="true" className="hero-name-orbit" initial={{ opacity: 0 }} transition={{ duration: 5.6, ease: "easeInOut", repeat: Infinity }} whileInView={{ opacity: 1 }}>Zouhour Bellamine</motion.p><div className="hero-spark hero-spark-one" /><div className="hero-spark hero-spark-two" /><div aria-hidden="true" className="hero-petals"><span>✿</span><span>✦</span><span>✿</span></div><div className="mx-auto grid min-h-[700px] max-w-7xl items-center gap-12 px-6 pb-16 pt-12 sm:px-10 lg:grid-cols-[1.08fr_0.92fr] lg:px-16"><motion.div animate="show" className="hero-copy" initial="hidden" style={{ y: textY }} transition={{ staggerChildren: reduceMotion ? 0 : 0.12, delayChildren: reduceMotion ? 0 : 0.18 }} variants={{ hidden: {}, show: {} }}><motion.p className="eyebrow" variants={item}>{content.eyebrow}</motion.p><motion.h1 className="mt-5 max-w-4xl font-serif text-5xl leading-[0.92] sm:text-7xl lg:text-[6.8rem]" variants={item}>{content.titleStart} <em>{content.titleEmphasis}</em> {content.titleEnd}</motion.h1><motion.p className="mt-8 max-w-xl text-lg leading-8 text-[#674854] sm:text-xl" variants={item}>{content.description}</motion.p><motion.div className="mt-10 flex flex-wrap gap-4" variants={item}><MagneticLink className="button-primary" href={locale === "fr" ? "#work" : "/work"}>{content.work} <span aria-hidden="true">↘</span></MagneticLink><MagneticLink className="button-secondary" href="#contact">{content.contact}</MagneticLink><MagneticLink className="button-secondary" download href="/cv/zouhour-bellamine-cv-en.pdf">{content.cv} <span aria-hidden="true">↓</span></MagneticLink></motion.div></motion.div><motion.div animate={reduceMotion ? {} : { rotate: [0, 0.8, 0] }} className="hero-portrait" initial={{ opacity: 0, scale: 0.94 }} style={{ y: portraitY }} transition={{ opacity: { duration: 0.7, delay: 0.35 }, rotate: { duration: 7, repeat: Infinity, ease: "easeInOut" }, scale: { duration: 0.7, delay: 0.35 } }}><div className="portrait-orbit portrait-orbit-a" /><div className="portrait-orbit portrait-orbit-b" /><div className="portrait-frame"><span className="font-mono text-xs uppercase tracking-[0.15em]">{content.portrait}</span><div><p className="font-serif text-6xl text-[#bf4d80]">ZB</p><p className="mt-3 max-w-52 text-sm leading-6 text-[#674854]">{content.portraitNote} <code>public/images/profile.jpg</code> {locale === "fr" ? "lorsque vous serez prête." : "here when ready."}</p></div></div><p className="hero-note">{content.note}</p></motion.div></div><div className="hero-marquee" aria-hidden="true"><span>Machine learning · Generative AI · Computer vision · Product engineering · </span><span>Machine learning · Generative AI · Computer vision · Product engineering · </span></div></section>;
}
