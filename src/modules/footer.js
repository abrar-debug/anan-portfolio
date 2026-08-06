import { gsap } from "gsap";

export function initMagnetic() {
  const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!canHover || reduceMotion) return;

  const strength = 0.35;

  document.querySelectorAll("[data-magnetic]").forEach((el) => {
    const moveX = gsap.quickTo(el, "x", { duration: 0.5, ease: "power3.out" });
    const moveY = gsap.quickTo(el, "y", { duration: 0.5, ease: "power3.out" });

    el.addEventListener("mousemove", (e) => {
      const rect = el.getBoundingClientRect();
      const relX = e.clientX - (rect.left + rect.width / 2);
      const relY = e.clientY - (rect.top + rect.height / 2);
      moveX(relX * strength);
      moveY(relY * strength);
    });

    el.addEventListener("mouseleave", () => {
      moveX(0);
      moveY(0);
    });
  });
}

export function initCopyEmail() {
  document.querySelectorAll("[data-copy]").forEach((el) => {
    el.addEventListener("click", async (e) => {
      const href = el.getAttribute("href") || "";
      const email = href.replace("mailto:", "");
      if (navigator.clipboard && email) {
        e.preventDefault();
        try {
          await navigator.clipboard.writeText(email);
          el.classList.add("is-copied");
          setTimeout(() => el.classList.remove("is-copied"), 1800);
        } catch (err) {
          window.location.href = href;
        }
      }
    });
  });
}

export function initBackToTop(lenis) {
  document.querySelectorAll("[data-to-top]").forEach((btn) => {
    btn.addEventListener("click", () => {
      if (lenis) lenis.scrollTo(0, { duration: 1.4 });
      else window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });
}
