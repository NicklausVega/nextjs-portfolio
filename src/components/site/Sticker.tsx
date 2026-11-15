import type { LucideIcon } from "lucide-react";

type Props = {
  label: string;
  icon: LucideIcon;
  tilt: number;
  className?: string;
  /** "load" plays the CSS entrance; "scroll" uses the shared tilt reveal. */
  enter?: "load" | "scroll";
  delay?: number;
};

/** Decorative tag: the same information always exists as readable page text. */
export function Sticker({ label, icon: Icon, tilt, className = "", enter = "scroll", delay = 0 }: Props) {
  const style = { "--tilt": `${tilt}deg`, "--d": `${delay}ms` } as React.CSSProperties;
  return (
    <span className={`sticker ${className}`} style={style} aria-hidden="true">
      <span
        className={`sticker__body ${enter === "load" ? "enter-tilt" : ""}`}
        {...(enter === "scroll" ? { "data-reveal": "tilt", "data-tilt": tilt, "data-reveal-delay": delay } : {})}
      >
        <span className="icon-circle icon-circle--accent sticker__icon">
          <Icon size={20} strokeWidth={1.75} />
        </span>
        {label}
        <span className="sticker__dot" />
      </span>
    </span>
  );
}
