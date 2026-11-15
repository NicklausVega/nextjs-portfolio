import Image from "next/image";
import { ArrowRight, Mail } from "lucide-react";
import { EMAIL, MAILTO } from "@/lib/site-content";

/** Closing email band (saleunion-13-cta composition), shared by Home and /projects. */
export function ContactBand({ id }: { id: string }) {
  return (
    <section className="band" id={id} aria-labelledby={`${id}-title`}>
      <div className="band__photo">
        <Image
          src="/assets/contact-hill-country.webp"
          alt=""
          fill
          sizes="100vw"
          data-reveal="media"
        />
      </div>
      <div className="band__shade" aria-hidden="true" />
      <div className="container band__inner">
        <p className="label" data-reveal="rise">
          IT leadership, security and web builds, from Austin.
        </p>
        <h2 id={`${id}-title`} className="t-h1 band__title" data-reveal="rise" data-reveal-delay="80">
          Let&apos;s build your next project
        </h2>
        <a className="btn btn--primary band__cta" href={MAILTO} data-reveal="rise" data-reveal-delay="160">
          <Mail size={22} strokeWidth={1.75} aria-hidden="true" />
          {EMAIL}
          <ArrowRight className="btn__arrow" size={20} strokeWidth={2} aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
