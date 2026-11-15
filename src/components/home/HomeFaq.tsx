import { ArrowRight } from "lucide-react";
import { QaAccordion, type QaItem } from "@/components/site/QaAccordion";
import { EMAIL, MAILTO, certificate, education } from "@/lib/site-content";

const faqs: QaItem[] = [
  {
    value: "work",
    title: "What kind of work do you take on?",
    answer:
      "IT leadership and security work like access governance, SSO and 2FA rollouts, and internal tools and automation. Website and brand builds go through Rynvo.",
  },
  { value: "based", title: "Where are you based?", answer: "Austin, Texas." },
  {
    value: "study",
    title: "What are you studying?",
    answer: `A ${education.degree} at ${education.school}, August 2024 to May 2028.`,
  },
  {
    value: "certs",
    title: "Any certifications?",
    answer: `${certificate.name}, from ${certificate.issuer}.`,
  },
  {
    value: "start",
    title: "How do we start?",
    answer: `Email ${EMAIL} with what you need and when you need it. For agency projects, you can go straight to rynvo.media.`,
  },
];

export function HomeFaq() {
  return (
    <section className="section" aria-labelledby="faq-title">
      <div className="container qa">
        <div className="qa__intro">
          <h2 id="faq-title" className="t-h2-upper">
            <span className="line" data-reveal="rise">Good to know</span>
            <span className="line t-accent" data-reveal="rise" data-reveal-delay="80">
              before we talk
            </span>
          </h2>
          <p className="t-muted" data-reveal="rise">
            Quick answers about what I do, where I am and what I study. Anything else, just email me.
          </p>
          <a className="btn btn--primary" href={MAILTO} data-reveal="rise">
            Email me <ArrowRight className="btn__arrow" size={18} strokeWidth={2} aria-hidden="true" />
          </a>
        </div>
        <QaAccordion items={faqs} defaultOpen="work" />
      </div>
    </section>
  );
}
