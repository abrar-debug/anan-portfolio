import { gsap } from "gsap";

export function initCursor() {
  const supportsHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!supportsHover || reduceMotion) return;

  document.documentElement.classList.add("has-custom-cursor");

  const dot = document.querySelector(".cursor-dot");
  const ring = document.querySelector(".cursor-ring");
  const label = document.querySelector(".cursor-label");
  if (!dot || !ring) return;

  const dotX = gsap.quickTo(dot, "x", { duration: 0.12, ease: "power3.out" });
  const dotY = gsap.quickTo(dot, "y", { duration: 0.12, ease: "power3.out" });
  const ringX = gsap.quickTo(ring, "x", { duration: 0.35, ease: "power3.out" });
  const ringY = gsap.quickTo(ring, "y", { duration: 0.35, ease: "power3.out" });

  window.addEventListener("mousemove", (e) => {
    dotX(e.clientX);
    dotY(e.clientY);
    ringX(e.clientX);
    ringY(e.clientY);
  });

  document.querySelectorAll("[data-cursor]").forEach((el) => {
    const type = el.getAttribute("data-cursor");
    el.addEventListener("mouseenter", () => {
      document.documentElement.classList.add(`cursor-hover-${type}`);
      if (label) label.textContent = type === "view" ? "View" : "";
    });
    el.addEventListener("mouseleave", () => {
      document.documentElement.classList.remove(`cursor-hover-${type}`);
      if (label) label.textContent = "";
    });
  });

  const darkSections = Array.from(document.querySelectorAll('[data-theme="dark"]'));
  let ticking = false;
  function updateTheme() {
    ticking = false;
    const centerY = window.innerHeight / 2;
    const overDark = darkSections.some((el) => {
      const r = el.getBoundingClientRect();
      return r.top <= centerY && r.bottom >= centerY;
    });
    document.documentElement.classList.toggle("cursor-on-dark", overDark);
  }
  function onScroll() {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(updateTheme);
    }
  }
  updateTheme();
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll);
}
