"use client";

import Link from "next/link";
import { useState } from "react";

const links = [{ href: "/work", label: "Work" }, { href: "/about", label: "About" }, { href: "/experience", label: "Experience" }, { href: "/#contact", label: "Contact" }];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return <header className="site-header"><div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 sm:px-10 lg:px-16"><Link className="font-serif text-xl" href="/">Zouhour Bellamine<span className="text-[#c04d80]">.</span></Link><button aria-expanded={open} aria-label="Toggle navigation" className="menu-button md:hidden" onClick={() => setOpen(!open)} type="button"><span /><span /></button><nav aria-label="Primary navigation" className={`${open ? "nav-open" : ""} site-nav`}>{links.map((link) => <Link className="nav-link" href={link.href} key={link.href} onClick={() => setOpen(false)}>{link.label}</Link>)}</nav></div></header>;
}
