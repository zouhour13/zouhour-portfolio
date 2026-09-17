"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

type Locale = "en" | "fr";

export function LanguageSelector({ locale }: { locale: Locale }) {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const isFrench = locale === "fr";

  useEffect(() => {
    const closeOnOutsideClick = (event: MouseEvent) => {
      if (!menuRef.current?.contains(event.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", closeOnOutsideClick);
    return () => document.removeEventListener("mousedown", closeOnOutsideClick);
  }, []);

  return <div className="language-menu" ref={menuRef}><button aria-expanded={open} aria-haspopup="menu" className="language-toggle" onClick={() => setOpen((current) => !current)} type="button">{isFrench ? "FR" : "EN"} <span aria-hidden="true">⌄</span></button>{open && <div aria-label="Language selector" className="language-popover" role="menu"><Link href="/" onClick={() => setOpen(false)} role="menuitem"><span aria-hidden="true">🇬🇧</span> English</Link><Link href="/fr" onClick={() => setOpen(false)} role="menuitem"><span aria-hidden="true">🇫🇷</span> Français</Link></div>}</div>;
}
