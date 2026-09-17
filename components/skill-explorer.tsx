"use client";

import { useState } from "react";
import { skills } from "@/data/profile";

const projectMap: Record<string, string> = {
  Languages: "Spark AI and Text-to-SQL",
  "Machine Learning": "Olive Oil Export Prediction and Industrial Vision Inspection",
  "Generative AI": "Spark AI and AI Research Copilot",
  Frameworks: "Across the project portfolio",
  "Deep Learning": "Industrial Vision Inspection",
  Databases: "AI Research Copilot and Spark AI",
  Tools: "Across the engineering workflow",
  Systems: "Development environments",
};

export function SkillExplorer() {
  const [active, setActive] = useState(skills[0].name);
  const current = skills.find((skill) => skill.name === active) ?? skills[0];

  return <div className="skill-explorer"><div className="flex flex-wrap gap-2" role="tablist" aria-label="Skill categories">{skills.map((skill) => <button aria-selected={active === skill.name} className="skill-chip" key={skill.name} onClick={() => setActive(skill.name)} role="tab" type="button">{skill.name}</button>)}</div><div aria-live="polite" className="skill-detail mt-6"><p className="eyebrow">{current.name}</p><p className="mt-3 font-serif text-3xl leading-tight">{current.items.join(" · ")}</p><p className="mt-4 text-sm leading-6 text-[#6b4b59]">Most closely connected to: {projectMap[current.name]}</p></div></div>;
}
