import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

export function initHero() {
  const skyline = document.querySelector(".hero-skyline");
  if (!skyline) return;

  const shapes = skyline.querySelectorAll("path, line, rect, circle:not(.accent-fill)");
  shapes.forEach((el) => {
    const length = el.getTotalLength ? el.getTotalLength() : 0;
    if (length) {
      el.style.strokeDasharray = String(length);
      el.style.strokeDashoffset = reduceMotion ? "0" : String(length);
    }
  });

  const layers = {
    back: skyline.querySelector(".sky-back"),
    mid: skyline.querySelector(".sky-mid"),
    front: skyline.querySelector(".sky-front"),
  };

  if (!reduceMotion) {
    gsap.to(layers.back, {
      y: -40,
      ease: "none",
      scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: true },
    });
    gsap.to(layers.mid, {
      y: -90,
      ease: "none",
      scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: true },
    });
    gsap.to(layers.front, {
      y: -150,
      ease: "none",
      scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: true },
    });

    if (canHover) {
      const heroEl = document.querySelector(".hero");
      heroEl.addEventListener("mousemove", (e) => {
        const rect = heroEl.getBoundingClientRect();
        const px = (e.clientX - rect.left) / rect.width - 0.5;
        gsap.to(layers.back, { x: px * 8, duration: 0.7, ease: "power2.out", overwrite: "auto" });
        gsap.to(layers.mid, { x: px * 18, duration: 0.7, ease: "power2.out", overwrite: "auto" });
        gsap.to(layers.front, { x: px * 30, duration: 0.7, ease: "power2.out", overwrite: "auto" });
      });
    }
  }
}

export function playHeroIntro() {
  const skyline = document.querySelector(".hero-skyline");
  const tl = gsap.timeline();

  if (skyline) {
    const shapes = skyline.querySelectorAll("path, line, rect, circle:not(.accent-fill)");
    tl.to(
      shapes,
      {
        strokeDashoffset: 0,
        duration: reduceMotion ? 0.01 : 1.7,
        ease: "power2.out",
        stagger: { each: 0.03 },
      },
      0
    );
  }

  tl.to(
    "[data-hero-reveal]",
    { opacity: 1, duration: reduceMotion ? 0.01 : 1, ease: "power2.out", stagger: 0.12 },
    0.15
  ).to(
    ".line-mask .line",
    { y: "0%", duration: reduceMotion ? 0.01 : 1.1, ease: "power3.out", stagger: 0.12 },
    0.15
  );

  return tl;
}
