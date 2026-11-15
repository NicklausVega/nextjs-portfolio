import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Briefcase,
  KeyRound,
  LayoutTemplate,
  PenTool,
  Rocket,
  Server,
  ShieldCheck,
  ShoppingBag,
  TrendingUp,
  Users,
} from "lucide-react";
import {
  SiCloudflare,
  SiDocker,
  SiFigma,
  SiNextdotjs,
  SiNodedotjs,
  SiNuxt,
  SiPython,
  SiReact,
  SiShopify,
  SiWebflow,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { TbBrandCSharp } from "react-icons/tb";
import { Sticker } from "@/components/site/Sticker";
import { RYNVO_URL, projectBySlug } from "@/lib/site-content";

/* ───────── home_intro (xodexdesign-02-about-clients) ───────── */
const clients = [
  { name: "Facing My Giant", logo: "/fmg.png", w: 1583, h: 676 },
  { name: "Senior Sync", logo: "/SeniorSync-logo.png", w: 1050, h: 600 },
  { name: "Rooted Expo", logo: "/rooted-logo.png", w: 1532, h: 1271 },
  { name: "West End Roleplay", logo: "/assets/werp-logo.png", w: 420, h: 420 },
];

export function HomeIntro() {
  return (
    <section className="section intro" aria-labelledby="intro-label">
      <div className="container">
        <p className="label" id="intro-label" data-reveal="rise">
          About
        </p>
        <p className="intro__statement" data-reveal="rise" data-reveal-delay="80">
          I build, secure and improve the systems businesses rely on. I lead IronClad&apos;s IT function and still
          do the technical work: understand the problem, build what makes sense,{" "}
          <span className="t-muted">keep it secure and maintainable.</span>
        </p>
        <hr className="intro__rule" />
        <p className="label" data-reveal="rise">
          Sites I&apos;ve built for
        </p>
        <ul className="intro__logos">
          {clients.map((c, i) => (
            <li key={c.name} className="intro__logo" data-reveal="rise" data-reveal-delay={i * 70} tabIndex={0}>
              <Image className="intro__logo-mark" src={c.logo} alt={`${c.name} logo`} width={c.w} height={c.h} />
              <span className="t-small t-muted">{c.name}</span>
            </li>
          ))}
        </ul>
        <div className="intro__link">
          <Link className="text-link" href="/about">
            More about me <ArrowRight size={16} strokeWidth={2} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ───────── home_work (creatiie-03-projects) ───────── */
export function HomeWork() {
  const rooted = projectBySlug("rooted-expo")!;
  return (
    <section className="section surface-alt work" aria-labelledby="work-title">
      <div className="container">
        <div className="work__top">
          <p className="label">Sites, tools and concepts</p>
          <h2 id="work-title" className="t-h2">
            Selected work
          </h2>
          <p className="label">7 projects</p>
        </div>

        <div className="work__stage">
          <Link
            href="/projects#facing-my-giant"
            className="card work__side work__side--left"
            style={{ "--tilt": "-5deg", "--tilt-md": "-4deg" } as React.CSSProperties}
            data-reveal="tilt"
            data-tilt="-5"
            data-reveal-x="32"
            data-reveal-delay="160"
          >
            <span className="media work__side-media" style={{ display: "block" }}>
              <Image src="/fmg-web.png" alt="Facing My Giant counseling website homepage" fill sizes="(min-width:1100px) 26vw, (min-width:768px) 22vw, 100vw" />
            </span>
            <span className="work__side-row">
              <span className="t-h3">Facing My Giant</span>
            </span>
            <span className="work__side-meta t-small t-muted" style={{ display: "block" }}>
              Counseling website · Nuxt.js
            </span>
          </Link>

          <article className="card work__feature">
            <div className="media work__feature-media">
              <Image
                src={rooted.image}
                alt={rooted.imageAlt}
                fill
                sizes="(min-width:1100px) 46vw, (min-width:768px) 60vw, 100vw"
                data-reveal="media"
              />
            </div>
            <h3>Rooted Expo</h3>
            <p className="t-muted" style={{ margin: 0 }}>
              The website for Texas&apos; premier CPG trade show, connecting local brands with buyers, investors and
              innovators through exhibitor profiles, event scheduling and networking features.
            </p>
            <dl className="work__meta">
              <div>
                <dt>Client</dt>
                <dd>Rooted Expo</dd>
              </div>
              <div>
                <dt>Type</dt>
                <dd>Event website</dd>
              </div>
              <div>
                <dt>Built with</dt>
                <dd>Figma, web development</dd>
              </div>
              <div>
                <dt>Role</dt>
                <dd>Design and build</dd>
              </div>
            </dl>
            <div className="media work__strip">
              <Image src={rooted.image} alt="" fill sizes="(min-width:1100px) 46vw, 60vw" />
            </div>
          </article>

          <Link
            href="/projects#senior-sync"
            className="card work__side work__side--right"
            style={{ "--tilt": "5deg", "--tilt-md": "4deg" } as React.CSSProperties}
            data-reveal="tilt"
            data-tilt="5"
            data-reveal-x="-32"
            data-reveal-delay="240"
          >
            <span className="media work__side-media" style={{ display: "block" }}>
              <Image src="/SeniorSync.png" alt="Senior Sync website homepage" fill sizes="(min-width:1100px) 26vw, (min-width:768px) 22vw, 100vw" />
            </span>
            <span className="work__side-row">
              <span className="t-h3">Senior Sync</span>
            </span>
            <span className="work__side-meta t-small t-muted" style={{ display: "block" }}>
              Community platform · Next.js
            </span>
          </Link>
        </div>

        <div className="work__more">
          <Link className="btn btn--secondary" href="/projects">
            View all projects <ArrowRight className="btn__arrow" size={18} strokeWidth={2} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ───────── home_capabilities (creatiie-04-services) ───────── */
const capabilities = [
  {
    title: "Platform and security",
    desc: "Security controls, cybersecurity initiatives and access governance aligned with policy.",
    icon: ShieldCheck,
  },
  {
    title: "Identity and access",
    desc: "SCIM bridges, ESSO, 2FA, 1Password and Tailscale, with clean provisioning and deprovisioning.",
    icon: KeyRound,
  },
  {
    title: "Infrastructure and automation",
    desc: "AWS VPS, Docker, Cloudflare, Pipedream and internal tools for Shopify, QuickBooks and Metabase.",
    icon: Server,
  },
  {
    title: "Web and brand",
    desc: "React, Next.js, Nuxt.js, Webflow and Shopify builds, with branding and design strategy.",
    icon: PenTool,
  },
];

export function HomeCapabilities() {
  return (
    <section className="section" aria-labelledby="caps-title">
      <div className="container">
        <div className="rows-head" data-reveal="rise">
          <h2 id="caps-title" className="t-h2">
            What I can take off your plate
          </h2>
          <p className="t-muted">Four areas I work in every week, from the IT function at IronClad to client builds at Rynvo.</p>
        </div>
        <ul className="rows">
          {capabilities.map(({ title, desc, icon: Icon }, i) => (
            <li key={title} className="card row" data-reveal="rise" data-reveal-delay={i * 70}>
              <span className="row__lead" aria-hidden="true">
                <Icon size={32} strokeWidth={1.75} />
              </span>
              <h3 className="t-h3 row__title">{title}</h3>
              <span className="row__divider" aria-hidden="true" />
              <p className="row__desc">{desc}</p>
              <span className="icon-circle icon-circle--accent row__end" aria-hidden="true">
                <Icon size={24} strokeWidth={1.75} />
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ───────── home_experience (creatiie-02-about) ───────── */
const stats = [
  {
    figure: "Jul ’25",
    label: "Fintech lead at IronClad",
    desc: "Leads the IT function: internal tools, business systems, access governance and security controls. Jul 2025 to present.",
    icon: Briefcase,
  },
  {
    figure: "Jan ’25",
    label: "Founded Rynvo",
    desc: "A U.S.-based digital agency for web and brand work. Founder, Jan 2025 to present.",
    icon: Rocket,
  },
  {
    figure: "75+",
    label: "Hosting customers",
    desc: "Founded Flosk Hosting and served them from Mar 2023 to Apr 2024.",
    icon: Users,
  },
  {
    figure: "$5,000+",
    label: "First-year revenue",
    desc: "Flosk Hosting, built on AWS VPS and Docker with a 99.9% uptime target.",
    icon: TrendingUp,
  },
];

export function HomeExperience() {
  return (
    <section className="section" aria-labelledby="exp-title">
      <div className="container">
        <div className="exp__top">
          <div className="exp__copy">
            <p className="label" data-reveal="rise">
              Experience
            </p>
            <h2 id="exp-title" className="t-h1">
              <span className="line" data-reveal="rise">I build</span>
              <span className="line t-accent" data-reveal="rise" data-reveal-delay="60">
                and secure
              </span>
              <span className="line" data-reveal="rise" data-reveal-delay="120">
                the systems
              </span>
              <span className="line" data-reveal="rise" data-reveal-delay="180">
                businesses
              </span>
              <span className="line" data-reveal="rise" data-reveal-delay="240">
                run on
              </span>
            </h2>
            <p data-reveal="rise">I lead IT at IronClad, run Rynvo, and have founded two hosting companies.</p>
            <Link className="btn btn--primary" href="/about" data-reveal="rise">
              Read the full story <ArrowRight className="btn__arrow" size={18} strokeWidth={2} aria-hidden="true" />
            </Link>
          </div>

          <figure className="card terminal" style={{ margin: 0 }} data-reveal="rise" data-reveal-delay="120">
            <figcaption className="terminal__head">
              <span className="terminal__dot" aria-hidden="true" />
              <span className="terminal__dot" aria-hidden="true" />
              <span className="terminal__dot" aria-hidden="true" />
              <span className="t-small t-muted terminal__name">focus.json</span>
            </figcaption>
            <div className="terminal__body">
              <p className="terminal__prompt">
                <span aria-hidden="true">$</span>whoami
              </p>
              <p className="terminal__out">
                <b>nicklaus</b>: fintech lead, founder, engineer
              </p>
              <p className="terminal__prompt">
                <span aria-hidden="true">$</span>cat focus.json
              </p>
              <p className="terminal__out">
                <b>platform</b>: AWS VPS, Docker, Cloudflare
              </p>
              <p className="terminal__out">
                <b>security</b>: SCIM, ESSO, 2FA, Tailscale
              </p>
              <p className="terminal__out">
                <b>web</b>: React, Next.js, Nuxt.js
              </p>
            </div>
          </figure>
        </div>

        <ul className="stats">
          {stats.map(({ figure, label, desc, icon: Icon }, i) => (
            <li key={label} className="card card--pad stat" data-reveal="rise" data-reveal-delay={i * 70}>
              <span className="icon-circle icon-circle--tint stat__icon" aria-hidden="true">
                <Icon size={20} strokeWidth={1.75} />
              </span>
              <span className="stat__figure">{figure}</span>
              <h3 className="t-h3 stat__label">{label}</h3>
              <p className="t-small t-muted">{desc}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ───────── home_rynvo (obvia-02-manifesto) ───────── */
const stack = [
  { name: "React", icon: SiReact, color: "#149ECA" },
  { name: "Next.js", icon: SiNextdotjs, color: "currentColor" },
  { name: "Nuxt", icon: SiNuxt, color: "#00A86B" },
  { name: "Node.js", icon: SiNodedotjs, color: "#3C873A" },
  { name: "Python", icon: SiPython, color: "#3776AB" },
  { name: "C#", icon: TbBrandCSharp, color: "#68217A" },
  { name: "Docker", icon: SiDocker, color: "#1D63ED" },
  { name: "AWS", icon: FaAws, color: "#FF9900" },
  { name: "Cloudflare", icon: SiCloudflare, color: "#F38020" },
  { name: "Figma", icon: SiFigma, color: "#A259FF" },
  { name: "Shopify", icon: SiShopify, color: "#5E8E3E" },
  { name: "Webflow", icon: SiWebflow, color: "#146EF5" },
];

export function HomeRynvo() {
  return (
    <section aria-labelledby="rynvo-title">
      <div className="surface-alt rynvo__band">
        <div className="container">
          <p className="label" data-reveal="rise">
            Rynvo
          </p>
          <div className="rynvo__statement-wrap">
            <h2 id="rynvo-title" className="t-h2-upper rynvo__statement" data-reveal="rise" data-reveal-delay="80">
              Rynvo is my agency. My team designs and builds websites and brands for small and{" "}
              <span className="nowrap">mid-sized</span> businesses, from first call to launch.
            </h2>
            <Sticker label="Webflow" icon={LayoutTemplate} tilt={6} delay={200} className="rynvo__sticker--1" />
            <Sticker label="Shopify" icon={ShoppingBag} tilt={-5} delay={280} className="rynvo__sticker--2" />
          </div>
          <hr className="rynvo__rule" />
          <div className="rynvo__foot">
            <p className="t-small t-muted">Web and brand studio, Austin</p>
            <a className="btn btn--secondary" href={RYNVO_URL} target="_blank" rel="noopener noreferrer">
              Visit rynvo.media <ArrowUpRight className="btn__arrow" size={18} strokeWidth={2} aria-hidden="true" />
              <span className="sr-only">(opens in a new tab)</span>
            </a>
          </div>
        </div>
      </div>
      <div className="strip">
        <ul className="strip__list" aria-label="Tools and platforms" data-reveal="rise">
          {stack.map(({ name, icon: Icon, color }) => (
            <li
              key={name}
              className="strip__item"
              tabIndex={0}
              style={{ "--brand": color } as React.CSSProperties}
            >
              <Icon aria-hidden="true" />
              {name}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
