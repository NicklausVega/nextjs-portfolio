"use client";

import Image from "next/image";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import * as ToggleGroup from "@radix-ui/react-toggle-group";
import { ArrowRight, ArrowUpRight, X } from "lucide-react";
import { projects, projectBySlug, type Project, type ProjectCategory } from "@/lib/site-content";

type Filter = "all" | ProjectCategory;
const FILTERS: { value: Filter; label: string }[] = [
  { value: "all", label: "All" },
  { value: "client", label: "Client and community" },
  { value: "concept", label: "Concepts" },
  { value: "personal", label: "Personal" },
];
const isFilter = (v: string | null): v is Filter => FILTERS.some((f) => f.value === v);

function countLabel(filter: Filter, n: number) {
  if (filter === "all") return `Showing all ${n} projects`;
  if (filter === "concept") return `Showing ${n} concepts`;
  if (filter === "personal") return `Showing ${n} personal ${n === 1 ? "project" : "projects"}`;
  return `Showing ${n} client and community projects`;
}

function StatusPill({ project }: { project: Project }) {
  return (
    <span className={`pill-tag ${project.status === "Concept" ? "pill-tag--concept" : ""}`}>{project.status}</span>
  );
}

export function ProjectsIndex() {
  const [filter, setFilter] = useState<Filter>("all");
  const [openSlug, setOpenSlug] = useState<string | null>(null);
  const triggerRef = useRef<HTMLElement | null>(null);

  // Read ?filter= and #slug once on mount (static export: no server search params).
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const f = params.get("filter");
    const hash = decodeURIComponent(window.location.hash.slice(1));
    const target = hash && projectBySlug(hash) ? hash : null;
    // eslint-disable-next-line react-hooks/set-state-in-effect -- syncing from the URL after hydration
    if (isFilter(f)) setFilter(f);
    if (target) {
      setOpenSlug(target);
      requestAnimationFrame(() => document.getElementById(target)?.scrollIntoView({ block: "center" }));
    }
  }, []);

  const visible = useMemo(
    () => (filter === "all" ? projects : projects.filter((p) => p.category === filter)),
    [filter],
  );

  const changeFilter = useCallback((value: string) => {
    if (!value || !isFilter(value)) return;
    setFilter(value);
    const url = new URL(window.location.href);
    if (value === "all") url.searchParams.delete("filter");
    else url.searchParams.set("filter", value);
    url.hash = "";
    window.history.replaceState(null, "", url);
  }, []);

  const open = (slug: string, el: HTMLElement) => {
    triggerRef.current = el;
    setOpenSlug(slug);
    window.history.replaceState(null, "", `#${slug}`);
  };

  const close = () => {
    setOpenSlug(null);
    const url = new URL(window.location.href);
    url.hash = "";
    window.history.replaceState(null, "", url);
  };

  const active = openSlug ? projectBySlug(openSlug) : undefined;

  return (
    <section className="section" aria-labelledby="projects-title" style={{ paddingTop: 0 }}>
      <div className="container">
        <div className="pj-head">
          <p className="label">Projects</p>
          <h1 id="projects-title" className="t-h1">
            <span className="line">Sites, tools</span>
            <span className="line">and concepts</span>
          </h1>
          <p className="t-muted">
            Client sites, community builds, my own Mr.Gamer brand sites, a personal tool and two concept studies. Concepts are marked.
          </p>
          <ToggleGroup.Root
            type="single"
            value={filter}
            onValueChange={changeFilter}
            className="filters"
            aria-label="Filter projects"
          >
            {FILTERS.map((f) => (
              <ToggleGroup.Item key={f.value} value={f.value} className="filter-chip">
                {f.label}
              </ToggleGroup.Item>
            ))}
          </ToggleGroup.Root>
          <p className="sr-only" aria-live="polite">
            {countLabel(filter, visible.length)}
          </p>
        </div>

        <ul className="pj-grid">
          {visible.map((p, i) => (
            <li key={p.slug} id={p.slug} className="pj-card" style={{ "--d": `${Math.min(i * 60, 240)}ms` } as React.CSSProperties}>
              <div className="media pj-card__media">
                <Image
                  src={p.image}
                  alt={p.imageAlt}
                  fill
                  sizes="(min-width:1100px) 33vw, (min-width:768px) 50vw, 100vw"
                  style={p.slug === "qr-code-generator" ? { objectPosition: "center" } : undefined}
                />
                <button
                  type="button"
                  className="pj-card__open"
                  onClick={(e) => open(p.slug, e.currentTarget)}
                  aria-label={`Open details for ${p.name}`}
                >
                  <span aria-hidden="true">
                    <ArrowUpRight size={26} strokeWidth={1.75} />
                  </span>
                </button>
              </div>
              <div className="pj-card__tags">
                <StatusPill project={p} />
                <span className="pill-tag">{p.stack.join(", ")}</span>
              </div>
              <h2 className="t-h3 pj-card__title">{p.name}</h2>
              <p className="t-small t-muted pj-card__sub">{p.type}</p>
              <button type="button" className="pj-card__link" onClick={(e) => open(p.slug, e.currentTarget)}>
                <span>View details</span>
                <span aria-hidden="true">
                  <ArrowUpRight size={18} strokeWidth={2} />
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      <Dialog.Root open={Boolean(active)} onOpenChange={(o) => (o ? null : close())}>
        <Dialog.Portal>
          <Dialog.Overlay className="dlg-overlay" />
          <Dialog.Content
            className="card dlg"
            onCloseAutoFocus={(e) => {
              if (triggerRef.current) {
                e.preventDefault();
                triggerRef.current.focus();
              }
            }}
          >
            {active ? (
              <>
                <Dialog.Close className="dlg__close" aria-label="Close project details">
                  <X size={20} strokeWidth={1.75} />
                </Dialog.Close>
                <div className="media dlg__media">
                  <Image
                    src={active.image}
                    alt={active.imageAlt}
                    fill
                    sizes="720px"
                    style={active.slug === "qr-code-generator" ? { objectFit: "cover", objectPosition: "center" } : undefined}
                  />
                </div>
                <div className="dlg__head">
                  <div>
                    <Dialog.Title className="dlg__title">{active.name}</Dialog.Title>
                    <Dialog.Description className="t-small t-muted dlg__lede">{active.lede}</Dialog.Description>
                  </div>
                  {active.logo ? (
                    <Image className="dlg__logo" src={active.logo} alt={active.logoAlt ?? ""} width={120} height={32} />
                  ) : null}
                </div>
                <p className="dlg__desc">{active.description}</p>
                <dl className="work__meta">
                  <div>
                    <dt>Type</dt>
                    <dd>{active.type}</dd>
                  </div>
                  <div>
                    <dt>Status</dt>
                    <dd>
                      <StatusPill project={active} />
                    </dd>
                  </div>
                  <div>
                    <dt>Stack</dt>
                    <dd>{active.stack.join(", ")}</dd>
                  </div>
                  <div>
                    <dt>Link</dt>
                    <dd>{active.link ? new URL(active.link).hostname.replace("www.", "") : "Not public"}</dd>
                  </div>
                </dl>
                {active.link ? (
                  <a className="btn btn--primary" href={active.link} target="_blank" rel="noopener noreferrer">
                    {active.linkLabel ?? "Visit live site"}
                    <ArrowRight className="btn__arrow" size={18} strokeWidth={2} aria-hidden="true" />
                    <span className="sr-only">(opens in a new tab)</span>
                  </a>
                ) : null}
              </>
            ) : null}
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </section>
  );
}
