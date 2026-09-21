"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import type { Project } from "@/data/projects";

export function EditorialProject({ project, number }: { project: Project; number: string }) {
  const reduceMotion = useReducedMotion();
  return <article className="editorial-project">
    <motion.div className="project-system" initial={{ opacity: 0, scale: 0.96 }} transition={{ duration: 0.7 }} viewport={{ once: true, amount: 0.25 }} whileHover={reduceMotion ? {} : { rotate: -0.5, scale: 1.01 }} whileInView={{ opacity: 1, scale: 1 }}>
      <span className="system-index">{number}</span><span className="system-label">{project.category}</span>
      <div className="system-core"><span>{project.slug === "ai-research-copilot" ? "RAG" : "GEN"}</span></div>
      <div className="system-node node-one">input</div><div className="system-node node-two">reason</div><div className="system-node node-three">output</div>
      <div className="system-route route-one" /><div className="system-route route-two" />
      <p className="system-caption">{project.slug === "ai-research-copilot" ? "sources + memory + retrieval" : "image + prompt + brand voice"}</p>
    </motion.div>
    <div className="project-reading">
      <div><p className="eyebrow">{project.category}</p><h3>{project.title}</h3></div>
      <p className="project-summary">{project.summary}</p>
      <div className="project-details"><div><span>Intent</span><p>{project.problem}</p></div><div><span>Build</span><p>{project.approach}</p></div></div>
      <div className="project-stack"><span>Built with</span><p>{project.technologies.join(" · ")}</p></div>
      <Link className="project-link" href={`/work/${project.slug}`}>Open case study <span aria-hidden="true">↗</span></Link>
    </div>
  </article>;
}
