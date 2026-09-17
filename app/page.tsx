import Link from "next/link";
import { AnimatedHero } from "@/components/animated-hero";
import { AnimatedProjectCard } from "@/components/animated-project-card";
import { Footer } from "@/components/footer";
import { Reveal } from "@/components/motion/reveal";
import { PersonalitySection } from "@/components/personality-section";
import { SiteHeader } from "@/components/site-header";
import { SkillExplorer } from "@/components/skill-explorer";
import { experience } from "@/data/profile";
import { featuredProjects } from "@/data/projects";

export default function Home() {
  return <main><SiteHeader /><AnimatedHero /><section className="mx-auto max-w-7xl px-6 py-24 sm:px-10 lg:px-16" id="work"><Reveal><div className="flex flex-wrap items-end justify-between gap-8"><div><p className="eyebrow">Selected work</p><h2 className="section-title mt-4">Big questions, built into working systems.</h2></div><Link className="text-link" href="/work">See every case study <span aria-hidden="true">→</span></Link></div></Reveal><div className="work-mosaic mt-14">{featuredProjects.map((project, index) => <AnimatedProjectCard index={index} key={project.slug} project={project} />)}</div></section><section className="skills-band py-24"><div className="mx-auto grid max-w-7xl gap-12 px-6 sm:px-10 lg:grid-cols-[0.8fr_1.2fr] lg:px-16"><Reveal><div><p className="eyebrow">Technical playground</p><h2 className="mt-4 font-serif text-4xl leading-tight sm:text-5xl">A toolkit that moves between research and product.</h2><p className="mt-6 max-w-md leading-8 text-[#f9e9ef]">Choose a category to see the technologies and where they appear in my work.</p></div></Reveal><Reveal delay={0.12}><SkillExplorer /></Reveal></div></section><section className="mx-auto grid max-w-7xl gap-12 px-6 py-24 sm:px-10 lg:grid-cols-[0.85fr_1.15fr] lg:px-16"><Reveal><div><p className="eyebrow">Experience</p><h2 className="section-title mt-4">Turning experiments into dependable practice.</h2></div></Reveal><div className="experience-stack">{experience.map((item, index) => <Reveal delay={index * 0.08} key={item.organization}><article className="experience-row"><p className="font-mono text-xs text-[#bf4d80]">0{index + 1} / {item.year}</p><div><h3 className="font-serif text-2xl">{item.role}</h3><p className="mt-1 font-medium">{item.organization}</p><p className="mt-3 leading-7 text-[#674854]">{item.focus.join(" · ")}</p></div></article></Reveal>)}<Link className="text-link mt-4 inline-block" href="/experience">Experience, education, and certifications <span aria-hidden="true">→</span></Link></div></section><PersonalitySection /><Footer /></main>;
}
