import type { Metadata } from "next";
import { Footer } from "@/components/footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "About | Zouhour Bellamine",
  description: "About Zouhour Bellamine, AI Engineer and Software Engineer.",
};

export default function AboutPage() {
  return <main><SiteHeader /><section className="mx-auto max-w-7xl px-6 pb-24 pt-16 sm:px-10 lg:px-16"><p className="eyebrow">About</p><div className="mt-5 grid gap-12 lg:grid-cols-[1.2fr_0.8fr]"><div><h1 className="font-serif text-5xl leading-[0.98] sm:text-7xl">Making technical work feel useful, legible, and human.</h1><p className="mt-8 max-w-2xl text-xl leading-9 text-[#4e4b51]">I am Zouhour Bellamine, an AI Engineer and Software Engineer with interests across artificial intelligence, machine learning, deep learning, generative AI, LLMs, RAG, computer vision, and software engineering.</p></div><aside className="border-t border-[#202124] pt-5"><div className="about-photo"><img alt="Zouhour Bellamine at a technology event" height={600} src="/images/profile.jpg" width={400} /></div><p className="mt-8 font-mono text-xs uppercase tracking-[0.14em] text-[#6b3f81]">Languages</p><p className="mt-4 leading-8">Arabic — Native<br />French — B2<br />English — B2</p><p className="mt-9 font-mono text-xs uppercase tracking-[0.14em] text-[#6b3f81]">Outside of engineering</p><p className="mt-4 leading-8">AI trends · Singing · Chess · Reading</p></aside></div></section><Footer /></main>;
}
