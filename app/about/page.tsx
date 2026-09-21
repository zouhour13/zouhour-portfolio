import type { Metadata } from "next";
import Image from "next/image";
import { Footer } from "@/components/footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "About | Zouhour Bellamine",
  description: "About Zouhour Bellamine, AI Engineer and Software Engineer.",
};

export default function AboutPage() {
  return <main><SiteHeader /><section className="about-story mx-auto max-w-7xl px-6 pb-28 pt-16 sm:px-10 lg:px-16"><div className="about-opening"><div><p className="eyebrow">About</p><h1>Curiosity is where my engineering starts.</h1><p>I am Zouhour Bellamine, an AI Engineer and Software Engineer from Monastir, Tunisia. I like technical work that is clear enough to trust and thoughtful enough to matter.</p></div><figure className="about-portrait"><Image alt="Zouhour Bellamine at a technology event" height={600} src="/images/profile.jpg" unoptimized width={400} /><figcaption>Monastir, Tunisia / building from questions</figcaption></figure></div><div className="about-chapters"><article><span>01</span><h2>From systems to intelligence</h2><p>At ENET&apos;Com, data engineering and decision systems became a way to understand how information can become action. That perspective is still present in every interface, model, and architecture I build.</p></article><article><span>02</span><h2>Across languages, across contexts</h2><p>The opening of this site is a small signal of a larger part of my identity. Arabic is home; French and English keep my technical and creative worlds connected.</p></article><article><span>03</span><h2>Room for the human details</h2><p>Outside the screen, chess, reading, painting, photography, table tennis, and singing keep me observant. They are part of how I notice patterns and make space for better ideas.</p></article></div></section><Footer /></main>;
}
