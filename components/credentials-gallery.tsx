"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { credentials, type Credential } from "@/data/credentials";

export function CredentialsGallery() {
  const [selected, setSelected] = useState<Credential | null>(null);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelected(null);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const categories = [...new Set(credentials.map((credential) => credential.category))];
  return <section className="credentials-section" aria-labelledby="credentials-title"><div className="credentials-heading"><div><p className="eyebrow">Credentials & milestones</p><h2 id="credentials-title">Learning made visible.</h2></div><p>Each credential marks a deliberate step in a practice that connects AI, data, and dependable software.</p></div><div className="credentials-groups">{categories.map((category) => <section className="credential-group" key={category}><p className="credential-category">{category}</p><div className="credential-rail">{credentials.filter((credential) => credential.category === category).map((credential, index) => <button aria-haspopup="dialog" className={`credential-card credential-card-${index}`} key={credential.title} onClick={() => setSelected(credential)} type="button"><span className="credential-frame"><Image alt={`${credential.title} certificate preview`} fill sizes="(max-width: 767px) 85vw, 42vw" src={credential.image} unoptimized /></span><span className="credential-meta"><span>{credential.issuer} / {credential.issued}</span><strong>{credential.title}</strong><small>{credential.context}</small></span><span aria-hidden="true" className="credential-open">View ↗</span></button>)}</div></section>)}</div>{selected && <div aria-label={`Preview of ${selected.title}`} aria-modal="true" className="credential-lightbox" onClick={() => setSelected(null)} role="dialog"><div className="credential-lightbox-content" onClick={(event) => event.stopPropagation()}><button aria-label="Close certificate preview" className="credential-close" onClick={() => setSelected(null)} type="button">×</button><div className="credential-large-frame"><Image alt={`${selected.title} certificate`} fill priority sizes="(max-width: 767px) 94vw, 78vw" src={selected.image} unoptimized /></div><div className="credential-lightbox-copy"><div><p>{selected.issuer} / {selected.issued}</p><h3>{selected.title}</h3></div><a href={selected.pdf} rel="noreferrer" target="_blank">Open original PDF <span aria-hidden="true">↗</span></a></div></div></div>}</section>;
}
