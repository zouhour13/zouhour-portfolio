"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import { contact } from "@/data/profile";

export function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const form = formRef.current;
    if (!form || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } }, { threshold: 0.2 });
    observer.observe(form);
    return () => observer.disconnect();
  }, []);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const content = String(data.get("content") ?? "");
    const subject = encodeURIComponent(`Portfolio message from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${content}`);
    window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`;
  }

  return <form className={`contact-form ${visible ? "contact-form-visible" : ""}`} onSubmit={handleSubmit} ref={formRef}><label htmlFor="name">Name</label><input id="name" name="name" required type="text" /><label htmlFor="email">Email Address</label><input id="email" name="email" required type="email" /><label htmlFor="content">Content</label><textarea id="content" name="content" required rows={5} /><button className="contact-submit" type="submit">Send Email <span aria-hidden="true">→</span></button></form>;
}
