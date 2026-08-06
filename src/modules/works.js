import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function initWorks() {
  const section = document.getElementById("works-grid");
  const viewport = section?.querySelector(".works-viewport");
  const track = document.getElementById("works-track");
  if (!section || !viewport || !track) return;

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (!reduceMotion) {
    const getDistance = () => Math.max(0, track.scrollWidth - viewport.clientWidth);

    gsap.to(track, {
      x: () => -getDistance(),
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: () => `+=${getDistance() + window.innerHeight * 0.5}`,
        pin: true,
        scrub: 1,
        invalidateOnRefresh: true,
      },
    });

    let resizeTimer;
    window.addEventListener("resize", () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => ScrollTrigger.refresh(), 150);
    });
  }

  const filterButtons = section.querySelectorAll("[data-filter]");
  const cards = section.querySelectorAll(".work-card");

  filterButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterButtons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      const filter = btn.getAttribute("data-filter");
      cards.forEach((card) => {
        const match = filter === "all" || card.getAttribute("data-category") === filter;
        card.classList.toggle("is-filtered-out", !match);
      });
    });
  });
}
