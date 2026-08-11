import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function initProjects() {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const items = document.querySelectorAll(".index-item");
  const section = document.getElementById("work");
  const counter = document.getElementById("index-counter");
  const counterCurrent = document.getElementById("index-counter-current");
  const counterTotal = document.getElementById("index-counter-total");

  if (counterTotal) counterTotal.textContent = String(items.length).padStart(2, "0");

  items.forEach((item, i) => {
    const visual = item.querySelector(".index-item-visual");
    const art = item.querySelector(".project-art");
    const rowChildren = item.querySelectorAll(".index-item-row > *");

    if (reduceMotion) {
      if (visual) gsap.set(visual, { clipPath: "inset(0% 0% 0% 0%)" });
    } else {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: item,
          start: "top 78%",
          toggleActions: "play none none reverse",
        },
      });

      if (visual) {
        tl.to(visual, { clipPath: "inset(0% 0% 0% 0%)", duration: 1.3, ease: "power3.inOut" }, 0);
      }
      if (rowChildren.length) {
        tl.fromTo(
          rowChildren,
          { opacity: 0, y: 26 },
          { opacity: 1, y: 0, duration: 0.9, stagger: 0.08, ease: "power2.out" },
          0.25
        );
      }

      if (art) {
        gsap.fromTo(
          art,
          { scale: 1.16, y: -18 },
          {
            scale: 1,
            y: 18,
            ease: "none",
            scrollTrigger: {
              trigger: item,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          }
        );
      }
    }

    if (counterCurrent) {
      ScrollTrigger.create({
        trigger: item,
        start: "top center",
        end: "bottom center",
        onToggle: (self) => {
          if (self.isActive) counterCurrent.textContent = String(i + 1).padStart(2, "0");
        },
      });
    }
  });

  if (counter && section) {
    ScrollTrigger.create({
      trigger: section,
      start: "top bottom",
      end: "bottom top",
      onToggle: (self) => counter.classList.toggle("is-visible", self.isActive),
    });
  }
}
