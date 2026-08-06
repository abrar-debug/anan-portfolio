import { gsap } from "gsap";

export function runPreloader(onComplete) {
  const preloader = document.getElementById("preloader");
  const percentEl = document.getElementById("preloader-percent");
  const fill = preloader?.querySelector(".preloader-bar-fill");
  const mark = preloader?.querySelector(".preloader-mark");
  const lines = mark ? mark.querySelectorAll("line") : [];
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  document.body.classList.add("is-loading");

  lines.forEach((line) => {
    const length = line.getTotalLength();
    line.style.strokeDasharray = String(length);
    line.style.strokeDashoffset = reduceMotion ? "0" : String(length);
  });

  function finish() {
    document.body.classList.remove("is-loading");
    preloader.classList.add("is-done");
    preloader.style.pointerEvents = "none";
    setTimeout(() => preloader.remove(), reduceMotion ? 60 : 1050);
    onComplete?.();
  }

  if (reduceMotion) {
    if (percentEl) percentEl.textContent = "100";
    if (fill) fill.style.width = "100%";
    setTimeout(finish, 120);
    return;
  }

  const counter = { value: 0 };
  gsap
    .timeline({ onComplete: finish, delay: 0.2 })
    .to(lines, { strokeDashoffset: 0, duration: 1, stagger: 0.15, ease: "power2.out" }, 0)
    .to(fill, { width: "100%", duration: 1.4, ease: "power1.inOut" }, 0)
    .to(
      counter,
      {
        value: 100,
        duration: 1.4,
        ease: "power1.inOut",
        onUpdate: () => {
          if (percentEl) percentEl.textContent = String(Math.round(counter.value));
        },
      },
      0
    )
    .to({}, { duration: 0.35 });
}
