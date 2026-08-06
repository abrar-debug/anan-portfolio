import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function initCounters() {
  const counters = document.querySelectorAll("[data-counter]");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  counters.forEach((el) => {
    const target = parseFloat(el.getAttribute("data-counter"));

    if (reduceMotion) {
      el.textContent = String(target);
      return;
    }

    const obj = { value: 0 };
    ScrollTrigger.create({
      trigger: el,
      start: "top 88%",
      once: true,
      onEnter: () => {
        gsap.to(obj, {
          value: target,
          duration: 1.6,
          ease: "power2.out",
          onUpdate: () => {
            el.textContent = String(Math.round(obj.value));
          },
        });
      },
    });
  });
}
