import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { ProjectsIndex } from "@/components/projects/ProjectsIndex";
import { ContactBand } from "@/components/site/ContactBand";
import { projectBySlug } from "@/lib/site-content";

function ProjectsLive() {
  const live = [projectBySlug("facing-my-giant")!, projectBySlug("dark-mode-chat-concept")!];
  const copy: Record<string, string> = {
    "facing-my-giant":
      "A responsive site for a counseling service, with appointment scheduling and a resource library. Built in Nuxt.js.",
    "dark-mode-chat-concept":
      "A chat interface study with real-time messaging, status indicators and media sharing.",
  };
  return (
    <section className="section surface-alt" aria-labelledby="live-title">
      <div className="container">
        <div className="live__head">
          <p className="label">Live now</p>
          <h2 id="live-title" className="t-h2">
            Two you can click through today
          </h2>
        </div>
        <ul className="live__grid">
          {live.map((p, i) => (
            <li key={p.slug} className="card live__card">
              <div className="media live__media">
                <Image src={p.image} alt={p.imageAlt} fill sizes="(min-width:768px) 48vw, 100vw" data-reveal="media" />
              </div>
              <div className="live__body" data-reveal="rise" data-reveal-delay={i * 80}>
                <h3 className="t-h3">
                  {p.name}
                  {p.status === "Concept" ? <span className="pill-tag pill-tag--concept">Concept</span> : null}
                </h3>
                <p className="t-muted">{copy[p.slug]}</p>
                <a className="btn btn--secondary" href={p.link} target="_blank" rel="noopener noreferrer">
                  {p.linkLabel} <ArrowUpRight className="btn__arrow" size={18} strokeWidth={2} aria-hidden="true" />
                  <span className="sr-only">(opens in a new tab)</span>
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default function ProjectsPage() {
  return (
    <div className="page-offset">
      <ProjectsIndex />
      <ProjectsLive />
      <ContactBand id="projects-contact" />
    </div>
  );
}
