"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { Minus, Plus } from "lucide-react";

export type QaItem = {
  value: string;
  title: string;
  meta?: string;
  answer?: string;
  bullets?: string[];
};

type Props = {
  items: QaItem[];
  defaultOpen: string;
  multiple?: boolean;
  headingLevel?: "h3" | "h4";
};

export function QaAccordion({ items, defaultOpen, multiple = false, headingLevel = "h3" }: Props) {
  const Heading = headingLevel;
  const body = items.map((item, i) => (
    <Accordion.Item
      key={item.value}
      value={item.value}
      className="qa__item"
      data-reveal="rise"
      data-reveal-delay={Math.min(i * 70, 240)}
    >
      <Accordion.Header asChild>
        <Heading style={{ margin: 0 }}>
          <Accordion.Trigger className={`qa__trigger ${item.meta ? "qa__trigger--stack" : ""}`}>
            <span className="qa__q">{item.title}</span>
            {item.meta ? <span className="qa__meta">{item.meta}</span> : null}
            <span className="qa__icon" aria-hidden="true">
              <Plus className="qa__plus" size={24} strokeWidth={1.75} />
              <Minus className="qa__minus" size={24} strokeWidth={1.75} />
            </span>
          </Accordion.Trigger>
        </Heading>
      </Accordion.Header>
      <Accordion.Content className="qa__content">
        <div className="qa__answer">
          {item.answer ? <p style={{ margin: 0 }}>{item.answer}</p> : null}
          {item.bullets ? (
            <ul>
              {item.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          ) : null}
        </div>
      </Accordion.Content>
    </Accordion.Item>
  ));

  return multiple ? (
    <Accordion.Root type="multiple" defaultValue={[defaultOpen]} className="qa__list">
      {body}
    </Accordion.Root>
  ) : (
    <Accordion.Root type="single" collapsible defaultValue={defaultOpen} className="qa__list">
      {body}
    </Accordion.Root>
  );
}
