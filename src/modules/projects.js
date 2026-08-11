import { projects } from "../data/projects.js";
import { visuals } from "../data/visuals.js";

export function initProjects() {
  const section = document.querySelector("[data-index-carousel]");
  const track = section?.querySelector("[data-index-slides]");
  if (!section || !track || !projects.length) return;

  track.innerHTML = projects
    .map((p, i) => `<div class="hero-slide${i === 0 ? " active" : ""}">${visuals[p.visual] || ""}</div>`)
    .join("");
  const slides = Array.from(track.children);

  const textWrap = section.querySelector(".hero-overlay-text");
  const titleEl = section.querySelector("[data-index-title-el]");
  const metaEl = section.querySelector("[data-index-meta-el]");
  const currentEl = section.querySelector("[data-index-counter-current]");
  const totalEl = section.querySelector("[data-index-counter-total]");
  const readMoreLink = section.querySelector("[data-index-readmore]");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (totalEl) totalEl.textContent = String(projects.length).padStart(2, "0");

  let index = 0;
  let locked = false;
  let timer;

  function apply() {
    const p = projects[index];
    slides.forEach((s, i) => s.classList.toggle("active", i === index));
    if (currentEl) currentEl.textContent = String(index + 1).padStart(2, "0");
    if (titleEl) titleEl.textContent = p.title;
    if (metaEl) metaEl.textContent = `${p.category} — ${p.type} — ${p.year}`;
    if (readMoreLink) readMoreLink.href = `/project.html?slug=${p.slug}`;
  }

  function swapText() {
    if (!textWrap || reduceMotion) {
      apply();
      return;
    }
    textWrap.classList.add("is-changing");
    setTimeout(() => {
      apply();
      textWrap.classList.remove("is-changing");
    }, 220);
  }

  function resetAutoplay() {
    clearInterval(timer);
    if (reduceMotion) return;
    timer = setInterval(() => goTo(index + 1), 6000);
  }

  function goTo(i) {
    index = (i + projects.length) % projects.length;
    swapText();
    resetAutoplay();
  }

  function step(dir) {
    if (locked) return;
    locked = true;
    goTo(index + dir);
    setTimeout(() => {
      locked = false;
    }, 900);
  }

  section.addEventListener(
    "wheel",
    (e) => {
      e.preventDefault();
      step(e.deltaY > 0 ? 1 : -1);
    },
    { passive: false }
  );

  let touchStartY = null;
  section.addEventListener(
    "touchstart",
    (e) => {
      touchStartY = e.touches[0].clientY;
    },
    { passive: true }
  );
  section.addEventListener(
    "touchend",
    (e) => {
      if (touchStartY == null) return;
      const dy = touchStartY - e.changedTouches[0].clientY;
      if (Math.abs(dy) > 40) step(dy > 0 ? 1 : -1);
      touchStartY = null;
    },
    { passive: true }
  );

  window.addEventListener("keydown", (e) => {
    if (e.key === "ArrowDown" || e.key === "ArrowRight") step(1);
    if (e.key === "ArrowUp" || e.key === "ArrowLeft") step(-1);
  });

  apply();
  resetAutoplay();
}
