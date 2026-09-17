"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import type { Project } from "@/data/projects";
import { ProjectArtwork } from "@/components/project-artwork";

export function AnimatedProjectCard({ index, project }: { index: number; project: Project }) {
  const reduceMotion = useReducedMotion();
  return <Link className={`work-card work-card-${index} group`} href={`/work/${project.slug}`}><motion.article initial={{ opacity: 0, y: reduceMotion ? 0 : 26 }} transition={{ duration: 0.55, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }} viewport={{ amount: 0.2, once: true }} whileHover={reduceMotion ? {} : { y: -10 }} whileInView={{ opacity: 1, y: 0 }}><motion.div transition={{ type: "spring", stiffness: 230, damping: 18 }} whileHover={reduceMotion ? {} : { rotate: index % 2 ? 0.9 : -0.9, scale: 1.015 }}><ProjectArtwork project={project} variant={index} /></motion.div><div className="mt-5 flex items-start justify-between gap-4"><div><p className="eyebrow">{project.category}</p><h3 className="mt-2 font-serif text-3xl leading-tight">{project.title}</h3></div><motion.span animate={{ x: 0 }} className="project-arrow" transition={{ type: "spring", stiffness: 300, damping: 16 }} whileHover={reduceMotion ? {} : { x: 4 }} aria-hidden="true">↗</motion.span></div><p className="mt-3 leading-7 text-[#674854]">{project.summary}</p></motion.article></Link>;
}
