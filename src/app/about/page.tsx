import type { Metadata } from "next";
import Image from "next/image";
import { ArrowUpRight, Award, Check, GraduationCap, Mail, QrCode, Wrench } from "lucide-react";
import { QaAccordion } from "@/components/site/QaAccordion";
import { ContactForm } from "@/components/about/ContactForm";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import {
  EMAIL,
  GITHUB_URL,
  LINKEDIN_URL,
  MAILTO,
  RYNVO_URL,
  certificate,
  education,
  highSchool,
  skills,
  timeline,
} from "@/lib/site-content";

export const metadata: Metadata = {
  title: "About",
  description:
    "Nicklaus Vega: Financial Technology Lead at IronClad Consulting Services and founder of Rynvo, in Austin, Texas. Full experience, education and skills.",
};

function AboutHero() {
  return (
    <section className="container ab-hero" aria-labelledby="about-title">
      <div className="ab-cluster">
        <div
          className="ab-card ab-card--a enter-tilt"
          style={{ "--tilt": "-4deg", "--d": "160ms" } as React.CSSProperties}
        >
          <Image src="/rooted-web.png" alt="Rooted Expo website homepage" fill sizes="(min-width:1100px) 20vw, 40vw" priority />
        </div>
        <div
          className="ab-card ab-card--b enter-tilt"
          style={{ "--tilt": "5deg", "--d": "80ms" } as React.CSSProperties}
        >
          <Image src="/assets/bitmoji-avatar.png" alt="Bitmoji avatar of Nicklaus Vega" fill sizes="(min-width:1100px) 20vw, 46vw" priority />
        </div>
        <div
          className="ab-card ab-card--c enter-tilt"
          style={{ "--tilt": "-4deg", "--d": "0ms" } as React.CSSProperties}
        >
          <Image src="/fmg-web.png" alt="Facing My Giant counseling website homepage" fill sizes="(min-width:1100px) 25vw, 46vw" priority />
        </div>
      </div>
      <div className="ab-copy">
        <h1 id="about-title" className="t-h2-upper">
          <span className="line enter-rise" style={{ "--d": "300ms" } as React.CSSProperties}>
            I lead the IT,
          </span>
          <span className="line enter-rise" style={{ "--d": "380ms" } as React.CSSProperties}>
            and I still write
          </span>
          <span className="line enter-rise" style={{ "--d": "460ms" } as React.CSSProperties}>
            the <span className="t-accent">code</span>
          </span>
        </h1>
        <p className="enter-support" style={{ "--d": "560ms" } as React.CSSProperties}>
          I&apos;m Nicklaus Vega, Financial Technology Lead at IronClad Consulting Services and founder of Rynvo, in
          Austin, Texas. I set technology priorities with leadership, then design, build and run the systems behind
          them. Right now I&apos;m most interested in platform engineering, cybersecurity, AI and infrastructure
          automation.
        </p>
        <div className="ab-actions enter-support" style={{ "--d": "620ms" } as React.CSSProperties}>
          <a className="icon-circle icon-circle--accent" href={MAILTO} aria-hidden="true" tabIndex={-1}>
            <ArrowUpRight size={22} strokeWidth={2} />
          </a>
          <a className="btn btn--primary" href={MAILTO}>
            Email me
          </a>
        </div>
      </div>
    </section>
  );
}

function AboutTimeline() {
  const items = timeline.map((t) => ({
    value: t.key,
    title: `${t.role}, ${t.company}`,
    meta: `${t.period} · ${t.location}`,
    bullets: t.bullets,
  }));
  return (
    <section className="section" aria-labelledby="timeline-title" style={{ paddingTop: 0 }}>
      <div className="container qa">
        <div className="qa__intro qa__intro--sticky">
          <p className="label" data-reveal="rise">
            Experience
          </p>
          <h2 id="timeline-title" className="t-h2-upper" style={{ marginTop: 20 }}>
            <span className="line" data-reveal="rise">Six roles,</span>
            <span className="line t-accent" data-reveal="rise" data-reveal-delay="80">
              one thread
            </span>
          </h2>
          <p className="t-muted" data-reveal="rise">
            From an AI fellowship in 2021 to leading IT at IronClad today. Open any role for the details.
          </p>
        </div>
        <QaAccordion items={items} defaultOpen="ironclad-lead" multiple />
      </div>
    </section>
  );
}

function AboutCredentials() {
  return (
    <section className="section surface-alt" aria-labelledby="creds-title">
      <div className="container">
        <div className="rows-head" data-reveal="rise">
          <h2 id="creds-title" className="t-h2">
            Education, credentials and tools
          </h2>
          <p className="t-muted">The formal side, plus everything I use day to day.</p>
        </div>
        <ul className="rows">
          <li className="card row" data-reveal="rise">
            <span className="row__lead" aria-hidden="true">
              <GraduationCap size={32} strokeWidth={1.75} />
            </span>
            <h3 className="t-h3 row__title">Education</h3>
            <span className="row__divider" aria-hidden="true" />
            <p className="row__desc">
              {education.degree} at {education.school}, August 2024 to May 2028.
              <br />
              {highSchool.school}, 2020 to 2024.
            </p>
            <span className="icon-circle icon-circle--accent row__end" aria-hidden="true">
              <GraduationCap size={24} strokeWidth={1.75} />
            </span>
          </li>
          <li className="card row" data-reveal="rise" data-reveal-delay="70">
            <span className="row__lead" aria-hidden="true">
              <Award size={32} strokeWidth={1.75} />
            </span>
            <h3 className="t-h3 row__title">Certificate</h3>
            <span className="row__divider" aria-hidden="true" />
            <p className="row__desc">
              {certificate.name}, from {certificate.issuer}.
            </p>
            <span className="icon-circle icon-circle--accent row__end" aria-hidden="true">
              <Award size={24} strokeWidth={1.75} />
            </span>
          </li>
          <li className="card row" data-reveal="rise" data-reveal-delay="140">
            <span className="row__lead" aria-hidden="true">
              <QrCode size={32} strokeWidth={1.75} />
            </span>
            <h3 className="t-h3 row__title">Personal project</h3>
            <span className="row__divider" aria-hidden="true" />
            <p className="row__desc">
              QR Code Generator. Generates QR codes for business or personal use. Next.js, Supabase and Resend.
              January 2025 to present.
            </p>
            <span className="row__thumb">
              <Image src="/assets/qrcodegen-cover.webp" alt="QR Code Generator project banner" width={1280} height={640} />
            </span>
          </li>
          <li className="card row row--tall" data-reveal="rise" data-reveal-delay="210">
            <span className="row__lead" aria-hidden="true">
              <Wrench size={32} strokeWidth={1.75} />
            </span>
            <h3 className="t-h3 row__title">Skills</h3>
            <span className="row__divider" aria-hidden="true" />
            <ul className="chips row__desc" aria-label="Skills">
              {skills.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
            <span className="icon-circle icon-circle--accent row__end" aria-hidden="true">
              <Wrench size={24} strokeWidth={1.75} />
            </span>
          </li>
        </ul>
      </div>
    </section>
  );
}

function AboutContact() {
  return (
    <section className="section" aria-labelledby="contact-title">
      <div className="container">
        <div className="panel" data-reveal="rise">
          <div>
            <p className="label">Contact</p>
            <h2 id="contact-title" className="t-h2" style={{ marginTop: 20 }}>
              Tell me what you&apos;re building
            </h2>
            <ul className="panel__checks">
              <li>
                <Check size={22} strokeWidth={2} aria-hidden="true" /> IT leadership, security and access setups
              </li>
              <li>
                <Check size={22} strokeWidth={2} aria-hidden="true" /> Internal tools, integrations and automation
              </li>
              <li>
                <Check size={22} strokeWidth={2} aria-hidden="true" /> Websites and brand builds through Rynvo
              </li>
            </ul>
            <div className="panel__person">
              <div className="panel__portrait">
                <Image src="/assets/bitmoji-avatar.png" alt="Bitmoji avatar of Nicklaus Vega" width={180} height={180} />
              </div>
              <p className="t-h3">Nicklaus Vega</p>
              <p className="panel__role">Fintech Lead, IronClad · Founder, Rynvo</p>
              <a className="panel__mail" href={MAILTO}>
                <Mail size={20} strokeWidth={1.75} aria-hidden="true" /> {EMAIL}
              </a>
              <div className="panel__socials">
                <a className="panel__mail" href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">
                  <FaLinkedin size={20} aria-hidden="true" /> LinkedIn
                  <span className="sr-only">(opens in a new tab)</span>
                </a>
                <a className="panel__mail" href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
                  <FaGithub size={20} aria-hidden="true" /> GitHub
                  <span className="sr-only">(opens in a new tab)</span>
                </a>
              </div>
              <a className="btn btn--on-panel" href={RYNVO_URL} target="_blank" rel="noopener noreferrer">
                Visit rynvo.media <ArrowUpRight className="btn__arrow" size={18} strokeWidth={2} aria-hidden="true" />
                <span className="sr-only">(opens in a new tab)</span>
              </a>
            </div>
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

export default function AboutPage() {
  return (
    <div className="page-offset">
      <AboutHero />
      <AboutTimeline />
      <AboutCredentials />
      <AboutContact />
    </div>
  );
}
