"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

const links = {
  demo: "https://www.youtube.com/watch?v=vZEOkk20Ebo",
  live: "https://ai-research-copilot-azure.vercel.app/",
  github: "https://github.com/zouhour13/ai_research_copilot",
};

const capabilities = [
  ["Research mode", "Question", "Exa", "Relevant sources", "Cited answer", "Routes current research questions through Exa and brings returned sources into the response."],
  ["Document mode", "Document", "Extraction", "Chunks + embeddings", "Semantic retrieval", "Retrieves relevant document chunks instead of sending an uploaded file in full to the model."],
  ["Memory", "Conversation", "Useful context", "Semantic memory", "Future conversation", "Useful context can be embedded, stored, and retrieved across sessions when it is relevant."],
  ["Report generation", "Research", "Structured report", "PDF / DOCX", "Export", "Turns research and conversation outputs into structured PDF or DOCX exports."],
];

const ragSteps = ["Upload document", "Extract content", "Split into chunks", "Generate embeddings", "Store vectors", "Semantic search", "Retrieve relevant chunks", "Contextual answer"];
const journey = ["Start a conversation", "Choose research or documents", "Ask a question", "Retrieve evidence", "Generate a contextual answer", "Continue the conversation", "Export the result"];
const layers = [
  ["Frontend", "Next.js · React · TypeScript", "Responsive workspace, conversation history, controls, uploads, sources, and streaming interaction."],
  ["Backend", "Python · FastAPI", "API routes, AI orchestration, research routing, document processing, memory, and reports."],
  ["AI layer", "Gemini · Exa", "LLM responses combined with web research and source retrieval."],
  ["Retrieval", "Supabase PostgreSQL · pgvector", "Persistent data and semantic retrieval for documents, memory, and research context."],
  ["Storage", "Supabase Storage", "Uploaded documents and generated reports."],
];

function ExternalAction({ href, children, primary = false }: { href: string; children: React.ReactNode; primary?: boolean }) {
  return <a className={primary ? "copilot-action copilot-action-primary" : "copilot-action"} href={href} rel="noreferrer" target="_blank">{children} <span aria-hidden="true">↗</span></a>;
}

export function AiResearchCopilotCaseStudy() {
  const reduceMotion = useReducedMotion();
  const reveal = { initial: { opacity: 0, y: reduceMotion ? 0 : 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, amount: .2 }, transition: { duration: .55 } };

  return <article className="copilot-case">
    <section className="copilot-hero">
      <div className="mx-auto max-w-7xl px-6 pb-24 pt-14 sm:px-10 lg:px-16">
        <Link className="copilot-back" href="/work">← All work</Link>
        <div className="copilot-hero-grid">
          <motion.div {...reveal}>
            <p className="copilot-eyebrow">01 / AI research / Full-stack system</p>
            <h1>AI Research <em>Copilot</em></h1>
            <p className="copilot-lede">Research. Retrieve. Reason. Remember.</p>
            <p className="copilot-intro">A full-stack AI research workspace designed to help users explore the web, analyze documents, retrieve relevant knowledge, and build contextual answers with citations.</p>
            <div className="copilot-actions"><ExternalAction href={links.demo} primary>Watch Demo</ExternalAction><ExternalAction href={links.live}>Open Live App</ExternalAction><ExternalAction href={links.github}>GitHub</ExternalAction></div>
            <div className="copilot-meta"><span>AI Research</span><span>RAG</span><span>LLMs</span><span>Web Research</span><span>Full-Stack</span></div>
          </motion.div>
          <motion.div animate={reduceMotion ? {} : { y: [0, -8, 0] }} className="copilot-console" initial={{ opacity: 0, scale: .96 }} transition={{ duration: 4, ease: "easeInOut", repeat: Infinity }} whileInView={{ opacity: 1, scale: 1 }}>
            <div className="console-top"><span>research.workspace</span><i>LIVE</i></div>
            <div className="console-query">How is RAG changing research workflows?</div>
            <div className="console-stream"><span>searching the web</span><b /><span>retrieving documents</span><b /><span>building context</span></div>
            <div className="console-sources"><i>01</i><i>02</i><i>03</i><span>sources connected</span></div>
            <p>Contextual answer with citations and retrieved evidence.</p>
          </motion.div>
        </div>
      </div>
    </section>

    <section className="copilot-problem"><div className="mx-auto max-w-7xl px-6 py-28 sm:px-10 lg:px-16"><motion.div {...reveal}><p className="copilot-eyebrow">The problem</p><h2>Research is <em>fragmented.</em></h2><p className="copilot-copy">Answering a meaningful research question often means moving between web sources, documents, notes, previous conversations, and reports. This project brings those workflows together in one AI-powered workspace.</p><div className="fragment-flow"><span>Web</span><b>+</b><span>Documents</span><b>+</b><span>Memory</span><b>+</b><span>AI</span><i>↓</i><strong>One Research Workspace</strong></div></motion.div></div></section>

    <section className="copilot-capabilities"><div className="mx-auto max-w-7xl px-6 py-28 sm:px-10 lg:px-16"><p className="copilot-eyebrow">Capabilities</p><h2>One workspace, <em>several research paths.</em></h2><div className="capability-narrative">{capabilities.map(([title, ...steps], index) => <motion.article {...reveal} key={`${title}-${index}`} transition={{ delay: index * .05 }}><div><span>{String(index + 1).padStart(2, "0")}</span><h3>{title}</h3></div><div className="capability-flow">{steps.slice(0, 4).map((step, stepIndex) => <span key={`${step}-${stepIndex}`}>{stepIndex > 0 && <b>→</b>}{step}</span>)}</div><p>{steps[4]}</p></motion.article>)}</div></div></section>

    <section className="copilot-architecture"><div className="mx-auto max-w-7xl px-6 py-28 sm:px-10 lg:px-16"><p className="copilot-eyebrow">Core architecture</p><h2>Separate paths, <em>shared intelligence.</em></h2><motion.div {...reveal} className="architecture-board"><div className="architecture-root"><span>Next.js Frontend</span><b>↓</b><span>FastAPI Backend</span><b>↓</b><strong>AI Orchestration</strong></div><div className="architecture-branches"><div><p>Research mode</p><span>Exa Web Search</span><i>↓</i><span>Cited Sources</span></div><div><p>Document mode</p><span>Document Processing</span><i>↓</i><span>Chunks + Embeddings</span></div></div><div className="architecture-merge"><span>pgvector Retrieval</span><i>↓</i><strong>Gemini / LLM</strong><i>↓</i><span>Contextual Response</span></div><p className="architecture-foot">Supabase PostgreSQL + pgvector <b>·</b> Supabase Storage <b>·</b> Persistent Sessions / Memory</p></motion.div></div></section>

    <section className="copilot-rag"><div className="mx-auto grid max-w-7xl gap-12 px-6 py-28 sm:px-10 lg:grid-cols-[.72fr_1.28fr] lg:px-16"><div><p className="copilot-eyebrow">Document retrieval</p><h2>RAG makes documents <em>queryable.</em></h2><p>The system retrieves relevant document chunks for a question instead of sending the entire uploaded document to the model.</p></div><div className="rag-steps">{ragSteps.map((step, index) => <motion.div {...reveal} key={`${step}-${index}`} transition={{ delay: index * .04 }}><span>{String(index + 1).padStart(2, "0")}</span><p>{step}</p></motion.div>)}</div></div></section>

    <section className="copilot-research"><div className="mx-auto max-w-7xl px-6 py-28 sm:px-10 lg:px-16"><div className="research-heading"><div><p className="copilot-eyebrow">Grounded research</p><h2>From a question to <em>evidence-backed answers.</em></h2></div><p>When Research Mode is enabled, the application routes the request to Exa and returns available sources to the interface.</p></div><div className="research-path">{["Research Question", "Exa Web Search", "Relevant Sources", "Source Content", "LLM Reasoning", "Answer + Citations"].map((step, index) => <motion.span {...reveal} key={`${step}-${index}`} transition={{ delay: index * .05 }}>{step}</motion.span>)}</div></div></section>

    <section className="copilot-memory"><div className="mx-auto grid max-w-7xl gap-12 px-6 py-28 sm:px-10 lg:grid-cols-[1fr_.85fr] lg:px-16"><div><p className="copilot-eyebrow">Conversational memory</p><h2>Context that can <em>carry forward.</em></h2><p>Useful personal facts and conversation context can be embedded and stored for later semantic retrieval. It is a retrieval feature, not human-like memory.</p></div><div className="memory-sessions"><article><span>Session 01</span><p>User shares useful context</p></article><i>↓</i><article><span>Semantic Memory</span><p>Embedded and stored</p></article><i>↓</i><article><span>Session 02</span><p>Relevant context can be retrieved</p></article></div></div></section>

    <section className="copilot-journey"><div className="mx-auto max-w-7xl px-6 py-28 sm:px-10 lg:px-16"><p className="copilot-eyebrow">The user experience</p><h2>A research conversation with <em>a clear path.</em></h2><div className="journey-flow">{journey.map((step, index) => <motion.div {...reveal} key={`${step}-${index}`} transition={{ delay: index * .05 }}><span>{String(index + 1).padStart(2, "0")}</span><p>{step}</p></motion.div>)}</div></div></section>

    <section className="copilot-layers"><div className="mx-auto max-w-7xl px-6 py-28 sm:px-10 lg:px-16"><p className="copilot-eyebrow">Technical contribution</p><h2>Building the system <em>behind the interface.</em></h2><div className="layer-list">{layers.map(([label, stack, text], index) => <motion.article {...reveal} key={`${label}-${index}`} transition={{ delay: index * .05 }}><span>{String(index + 1).padStart(2, "0")}</span><div><h3>{label}</h3><strong>{stack}</strong></div><p>{text}</p></motion.article>)}</div></div></section>

    <section className="copilot-decisions"><div className="mx-auto grid max-w-7xl gap-12 px-6 py-28 sm:px-10 lg:grid-cols-[.7fr_1.3fr] lg:px-16"><div><p className="copilot-eyebrow">Engineering decisions</p><h2>Each tool supports <em>a deliberate boundary.</em></h2></div><div className="decision-grid"><p><strong>Why RAG?</strong><span>To ground document-based answers in retrieved content.</span></p><p><strong>Why Exa?</strong><span>A dedicated web-research path with source retrieval and citations.</span></p><p><strong>Why FastAPI?</strong><span>To separate AI orchestration and backend services from the frontend.</span></p><p><strong>Why PostgreSQL + pgvector?</strong><span>To combine persistent application data with semantic vector retrieval.</span></p><p><strong>Why Supabase?</strong><span>Database, vector storage, and file storage infrastructure in one system.</span></p></div></div></section>

    <section className="copilot-deployment"><div className="mx-auto max-w-7xl px-6 py-28 sm:px-10 lg:px-16"><p className="copilot-eyebrow">Deployment</p><h2>A live, connected <em>production architecture.</em></h2><div className="deployment-map"><span><b>Vercel</b>Next.js frontend</span><i>→</i><span><b>Render</b>FastAPI backend</span><i>→</i><span><b>Supabase</b>PostgreSQL · pgvector · Storage</span></div><div className="deployment-actions"><p><i /> Live</p><ExternalAction href={links.live} primary>Open Live App</ExternalAction><ExternalAction href={links.github}>View GitHub</ExternalAction></div></div></section>

    <section className="copilot-video"><div className="mx-auto max-w-7xl px-6 py-28 sm:px-10 lg:px-16"><div className="video-heading"><div><p className="copilot-eyebrow">See it in action</p><h2>See the Copilot <em>in action.</em></h2></div><p>From research questions to document analysis, retrieval, sources, and contextual answers.</p></div><div className="copilot-video-frame"><iframe allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen referrerPolicy="strict-origin-when-cross-origin" src="https://www.youtube-nocookie.com/embed/vZEOkk20Ebo" title="AI Research Copilot demo" /></div></div></section>

    <section className="copilot-stack"><div className="mx-auto max-w-7xl px-6 py-24 sm:px-10 lg:px-16"><p className="copilot-eyebrow">Technical ecosystem</p><div className="stack-groups"><p><strong>AI</strong>Gemini · RAG · Exa</p><p><strong>Backend</strong>Python · FastAPI</p><p><strong>Frontend</strong>Next.js · React · TypeScript</p><p><strong>Data</strong>PostgreSQL · pgvector · Supabase</p><p><strong>Infrastructure</strong>Docker · Vercel · Render</p></div></div></section>

    <section className="copilot-closing"><div className="mx-auto max-w-7xl px-6 py-28 text-center sm:px-10 lg:px-16"><p className="copilot-eyebrow">Project scope</p><h2>Research should not mean switching between ten different tools.</h2><p>One workspace. <em>Multiple sources.</em> Contextual answers.</p><div className="copilot-actions copilot-closing-actions"><ExternalAction href={links.demo} primary>Watch Demo</ExternalAction><ExternalAction href={links.live}>Open Live App</ExternalAction><ExternalAction href={links.github}>View GitHub</ExternalAction></div><Link className="copilot-next-project" href="/work/text-to-sql">Next project: Text-to-SQL Data Assistant <span aria-hidden="true">→</span></Link></div></section>
  </article>;
}
