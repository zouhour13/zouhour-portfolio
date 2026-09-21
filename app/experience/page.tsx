import type { Metadata } from "next";
import { AcademicJourney } from "@/components/academic-journey";
import { Footer } from "@/components/footer";
import { SiteHeader } from "@/components/site-header";
import { CredentialsGallery } from "@/components/credentials-gallery";

export const metadata: Metadata = { title: "Journey | Zouhour Bellamine", description: "The engineering journey of Zouhour Bellamine across AI, data, and software." };
export default function ExperiencePage() { return <main><SiteHeader /><section className="mx-auto max-w-7xl px-6 pb-28 pt-16 sm:px-10 lg:px-16"><AcademicJourney /><CredentialsGallery /></section><Footer /></main>; }
