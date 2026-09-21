import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/footer";
import { ProjectArtwork } from "@/components/project-artwork";
import { SiteHeader } from "@/components/site-header";
import { projects } from "@/data/projects";
export const metadata: Metadata = { title: "Work | Zouhour Bellamine", description: "Selected artificial intelligence, machine learning, computer vision, and software engineering projects by Zouhour Bellamine." };
export default function WorkPage() { return <main><SiteHeader /><section className="archive-hero mx-auto max-w-7xl px-6 pb-20 pt-16 sm:px-10 lg:px-16"><p className="eyebrow">Work archive</p><h1>A record of questions turned into systems.</h1><p>Research tools, generative workflows, vision models, and data applications. Each case study follows the problem through to an engineering decision.</p></section><section className="mx-auto max-w-7xl px-6 pb-28 sm:px-10 lg:px-16"><div className="archive-list">{projects.map((project, index) => <article className="archive-project" key={project.slug}><Link href={`/work/${project.slug}`}><div className="archive-art"><ProjectArtwork project={project} variant={index} /></div><div className="archive-copy"><p>0{index + 1} / {project.category}</p><h2>{project.title}</h2><span>{project.summary}</span></div><i aria-hidden="true">↗</i></Link></article>)}</div></section><Footer /></main>; }
