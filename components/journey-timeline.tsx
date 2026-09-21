import Link from "next/link";

const moments = [
  { year: "2020—22", title: "Learning how to reason", text: "Preparatory studies in Monastir built a rigorous foundation in physics, mathematics, and problem solving." },
  { year: "2022—25", title: "Engineering the bridge", text: "At ENET'Com, data engineering and decision systems turned that foundation toward intelligent software." },
  { year: "2023—25", title: "Making models useful", text: "From Android development and export prediction to computer vision inspection, each experience brought an idea closer to a working product." },
  { year: "Now", title: "Going deeper in AI", text: "Continued learning in Azure, Linux, and large language models feeds a practice focused on dependable AI applications." },
];

export function JourneyTimeline({ compact = false }: { compact?: boolean }) {
  const items = compact ? moments.slice(1) : moments;
  return <div className={`journey-timeline ${compact ? "journey-compact" : ""}`}>{items.map((moment, index) => <article className="journey-moment" key={moment.year}><p>{String(index + 1).padStart(2, "0")} / {moment.year}</p><div><h3>{moment.title}</h3><p>{moment.text}</p></div></article>)}{compact && <Link className="text-link" href="/experience">Read the full journey <span aria-hidden="true">↗</span></Link>}</div>;
}
