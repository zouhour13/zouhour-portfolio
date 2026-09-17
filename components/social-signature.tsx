"use client";

import { motion, useReducedMotion } from "framer-motion";
import { contact } from "@/data/profile";

function LinkedInIcon() { return <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M5.1 3.5a2.1 2.1 0 1 1 0 4.2 2.1 2.1 0 0 1 0-4.2ZM3.2 9h3.7v11.8H3.2V9Zm6 0h3.6v1.6h.1c.5-.9 1.7-2 3.6-2 3.8 0 4.5 2.5 4.5 5.8v6.4h-3.8v-5.7c0-1.4 0-3.1-1.9-3.1s-2.2 1.5-2.2 3v5.8H9.2V9Z" /></svg>; }
function GitHubIcon() { return <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M12 2.7a9.4 9.4 0 0 0-3 18.3c.5.1.6-.2.6-.5v-1.8c-2.5.5-3-1.1-3-1.1-.4-1-.9-1.3-.9-1.3-.8-.5.1-.5.1-.5.9.1 1.4 1 1.4 1 .8 1.4 2.1 1 2.6.8.1-.6.3-1 .5-1.2-2-.2-4.1-1-4.1-4.4 0-1 .3-1.7.9-2.4-.1-.2-.4-1.1.1-2.4 0 0 .8-.2 2.5.9a8.7 8.7 0 0 1 4.6 0c1.7-1.1 2.5-.9 2.5-.9.5 1.3.2 2.2.1 2.4.6.7.9 1.5.9 2.4 0 3.4-2.1 4.2-4.1 4.4.3.3.6.9.6 1.8v2.7c0 .3.2.6.7.5A9.4 9.4 0 0 0 12 2.7Z" /></svg>; }
function MediumIcon() { return <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M4.2 6.3c0-.4-.1-.7-.4-1L2.4 3.7V3h6.3l4.8 10.5L17.7 3H24v.7l-1.2 1.2c-.1.1-.2.4-.2.6v13.1c0 .2.1.5.2.6l1.2 1.2v.7h-6v-.7l1.2-1.2c.1-.1.1-.2.1-.4V8.2l-5.4 12.6h-.7L6.9 8.2v8.9c0 .4.1.8.4 1.1l1.6 1.9v.7H4v-.7l1.6-1.9c.3-.3.4-.7.4-1.1V6.3h-1.8Z" /></svg>; }

export function SocialSignature() {
  const reduceMotion = useReducedMotion();
  const links = [{ href: contact.linkedin, label: "LinkedIn", icon: <LinkedInIcon /> }, { href: contact.github, label: "GitHub", icon: <GitHubIcon /> }, { href: contact.medium, label: "Medium", icon: <MediumIcon /> }, { href: `tel:${contact.phone.replace(/\s/g, "")}`, label: <span className="sr-only">Phone</span>, icon: <span aria-hidden="true">☎</span> }];
  return <section className="social-signature" aria-label="Zouhour Bellamine social links"><motion.p animate={reduceMotion ? {} : { y: [0, -6, 0] }} className="social-name" transition={{ duration: 3.4, ease: "easeInOut", repeat: Infinity }}>Zouhour Bellamine</motion.p><p className="social-role">AI Engineer · Software Engineer</p><div className="social-signature-links">{links.map((link, index) => <motion.a aria-label={typeof link.label === "string" ? link.label : "Phone"} href={link.href} key={index} rel={index === 3 ? undefined : "noreferrer"} target={index === 3 ? undefined : "_blank"} transition={{ delay: index * 0.06, type: "spring", stiffness: 280, damping: 16 }} whileHover={reduceMotion ? {} : { rotate: index % 2 ? -7 : 7, scale: 1.12, y: -5 }} whileTap={{ scale: 0.94 }}>{link.icon}</motion.a>)}</div></section>;
}
