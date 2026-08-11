export function initReveal() {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduceMotion) return;

  document.querySelectorAll("[data-reveal-group]").forEach((group) => {
    const items = group.querySelectorAll("[data-reveal-line]");
    items.forEach((el, i) => {
      el.style.transitionDelay = `${i * 0.1}s`;
    });
  });

  const targets = document.querySelectorAll("[data-reveal], [data-reveal-line]");
  if (!targets.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2, rootMargin: "0px 0px -8% 0px" }
  );

  targets.forEach((el) => observer.observe(el));
}
