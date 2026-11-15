import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CodeXml, KeyRound, ShieldCheck } from "lucide-react";
import { SiCloudflare, SiDocker, SiNextdotjs, SiNodedotjs, SiReact } from "react-icons/si";
import { Sticker } from "@/components/site/Sticker";
import { MAILTO } from "@/lib/site-content";

const dock = [
  { name: "React", icon: SiReact, color: "#149ECA" },
  { name: "Next.js", icon: SiNextdotjs, color: "#16110A" },
  { name: "Node.js", icon: SiNodedotjs, color: "#3C873A" },
  { name: "Docker", icon: SiDocker, color: "#1D63ED" },
  { name: "Cloudflare", icon: SiCloudflare, color: "#F38020" },
];

export function HomeHero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero__photo enter-photo">
        <Image
          src="/assets/hero-hill-country.webp"
          alt=""
          fill
          priority
          sizes="100vw"
        />
      </div>
      <div className="hero__shade" aria-hidden="true" />

      <div className="hero__frame">
        <p className="hero__pill enter-support" style={{ "--d": "980ms" } as React.CSSProperties}>
          <span className="hero__avatar">
            <Image src="/assets/bitmoji-avatar.png" alt="Bitmoji avatar of Nicklaus Vega" width={48} height={48} />
          </span>
          <span className="hero__pill-dot" aria-hidden="true" />
          <span>
            Fintech Lead at IronClad · <span className="nowrap">Austin, TX</span>
            <span className="hero__pill-sub">Platform, security and software</span>
          </span>
        </p>

        <div className="hero__title-wrap">
          <h1 id="hero-title" className="t-display hero__title lines-fluid">
            <span className="line enter-rise" style={{ "--d": "120ms" } as React.CSSProperties}>
              Nicklaus Vega
            </span>
            <span className="line enter-rise" style={{ "--d": "200ms" } as React.CSSProperties}>
              secures the stack
            </span>
          </h1>
          <Sticker label="Web development" icon={CodeXml} tilt={7} enter="load" delay={620} className="hero__sticker hero__sticker--1" />
          <Sticker label="Security" icon={ShieldCheck} tilt={-7} enter="load" delay={700} className="hero__sticker hero__sticker--2" />
          <Sticker label="IAM" icon={KeyRound} tilt={6} enter="load" delay={780} className="hero__sticker hero__sticker--3" />
        </div>

        <div className="hero__bottom-left enter-support" style={{ "--d": "980ms" } as React.CSSProperties}>
          <p className="hero__tagline">Fintech lead at IronClad and founder of Rynvo, in Austin, Texas.</p>
          <div className="hero__actions">
            <a className="btn btn--primary" href={MAILTO}>
              Email me <ArrowRight className="btn__arrow" size={18} strokeWidth={2} aria-hidden="true" />
            </a>
            <Link className="btn btn--on-photo" href="/projects">
              See my work
            </Link>
          </div>
        </div>

        <Link
          href="/projects#rooted-expo"
          className="card hero__feature enter-support"
          style={{ "--d": "980ms" } as React.CSSProperties}
          aria-label="Open Rooted Expo, trade show website"
        >
          <span className="media hero__feature-thumb">
            <Image src="/rooted-web.png" alt="" fill sizes="120px" />
          </span>
          <span className="hero__feature-text">
            <span className="hero__feature-title">Rooted Expo</span>
            <span className="t-small t-muted">Trade show website</span>
          </span>
          <span className="icon-circle hero__feature-arrow" aria-hidden="true">
            <ArrowRight size={18} strokeWidth={2} />
          </span>
        </Link>

        <ul className="hero__dock enter-support" style={{ "--d": "980ms" } as React.CSSProperties} aria-label="Tools I build with">
          {dock.map(({ name, icon: Icon, color }) => (
            <li key={name}>
              <Icon color={color} aria-label={name} role="img" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
