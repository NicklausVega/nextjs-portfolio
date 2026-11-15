/**
 * Scroll reveals for [data-reveal="rise|media|tilt"] groups.
 * CSS keeps every element visible by default; only elements still below the
 * viewport at install time get a paused hidden state, and each plays once.
 * Optional data attributes: data-reveal-delay (ms, capped at 240),
 * data-reveal-x (px offset for rise), data-tilt (deg resting tilt for tilt).
 */
export function installReferenceReveals(root: ParentNode = document) {
  const reduced = matchMedia("(prefers-reduced-motion: reduce)");
  const animations = new Map<HTMLElement, Animation>();
  let active = true;
  const elements = [...root.querySelectorAll<HTMLElement>("[data-reveal]")];

  const finish = (element: HTMLElement) => {
    element.dataset.revealPlayed = "true";
    animations.get(element)?.cancel();
    animations.delete(element);
  };

  const observer =
    typeof IntersectionObserver === "function"
      ? new IntersectionObserver(
          (entries) => {
            if (!active) return;
            for (const entry of entries) {
              if (!entry.isIntersecting) continue;
              const element = entry.target as HTMLElement;
              observer?.unobserve(element);
              element.dataset.revealPlayed = "true";
              if (reduced.matches || document.visibilityState === "hidden" || entry.boundingClientRect.bottom <= 0)
                finish(element);
              else animations.get(element)?.play();
            }
          },
          { threshold: 0, rootMargin: "0px 0px 96px 0px" },
        )
      : undefined;

  const stop = () => {
    observer?.disconnect();
    elements.forEach(finish);
  };
  const onPreference = () => {
    if (reduced.matches) stop();
  };
  reduced.addEventListener("change", onPreference);

  for (const element of elements) {
    if (element.dataset.revealPlayed === "true") continue;
    const rect = element.getBoundingClientRect();
    // Never hide content that is already visible after first paint or a restored scroll position.
    if (
      reduced.matches ||
      !observer ||
      !element.animate ||
      rect.top < innerHeight ||
      document.visibilityState === "hidden"
    ) {
      finish(element);
      continue;
    }
    const type = element.dataset.reveal;
    const x = Number(element.dataset.revealX ?? 0);
    const tilt = Number(element.dataset.tilt ?? 0);
    const delay = Math.min(Number(element.dataset.revealDelay ?? 0), 240);
    const from =
      type === "media"
        ? "scale(1.06)"
        : type === "tilt"
          ? `translateX(${x}px) rotate(${-tilt}deg) scale(0.9)`
          : `translate(${x}px, 24px)`;
    const animation = element.animate(
      [
        { opacity: 0, transform: from },
        { opacity: 1, transform: "none" },
      ],
      {
        duration: type === "media" ? 750 : type === "tilt" ? 560 : 600,
        delay,
        easing: type === "tilt" ? "cubic-bezier(0.34, 1.4, 0.64, 1)" : "cubic-bezier(0.22, 1, 0.36, 1)",
        fill: "backwards",
      },
    );
    animation.pause();
    animation.onfinish = () => finish(element);
    animations.set(element, animation);
    observer.observe(element);
  }

  return () => {
    active = false;
    observer?.disconnect();
    for (const animation of animations.values()) {
      animation.onfinish = null;
      animation.cancel();
    }
    animations.clear();
    reduced.removeEventListener("change", onPreference);
  };
}
