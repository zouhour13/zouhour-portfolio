import type { Metadata } from "next";
import { Footer } from "@/components/footer";
import { SiteHeader } from "@/components/site-header";
import { CredentialsGallery } from "@/components/credentials-gallery";
import { JourneyTimeline } from "@/components/journey-timeline";

export const metadata: Metadata = { title: "Journey | Zouhour Bellamine", description: "The engineering journey of Zouhour Bellamine across AI, data, and software." };
export default function ExperiencePage() { return <main><SiteHeader /><section className="journey-page mx-auto max-w-7xl px-6 pb-28 pt-16 sm:px-10 lg:px-16"><div className="journey-intro"><p className="eyebrow">Journey</p><h1>Learning in public, building with intention.</h1><p>This is not a list of roles. It is the path that connected a rigorous engineering education with data, vision, generative AI, and product-minded software.</p></div><JourneyTimeline /><CredentialsGallery /></section><Footer /></main>; }
