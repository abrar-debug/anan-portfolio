export function initProjects() {
  const carousel = document.querySelector("[data-index-carousel]");
  if (!carousel) return;

  const slides = Array.from(carousel.querySelectorAll("[data-index-slide]"));
  const prevBtn = carousel.querySelector("[data-index-prev]");
  const nextBtn = carousel.querySelector("[data-index-next]");
  const currentEl = carousel.querySelector("[data-index-counter-current]");
  const totalEl = carousel.querySelector("[data-index-counter-total]");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!slides.length) return;

  if (totalEl) totalEl.textContent = String(slides.length).padStart(2, "0");

  let index = Math.max(0, slides.findIndex((s) => s.classList.contains("active")));
  let inView = false;
  let hovered = false;
  let timer;

  function render() {
    slides.forEach((s, i) => s.classList.toggle("active", i === index));
    if (currentEl) currentEl.textContent = String(index + 1).padStart(2, "0");
  }

  function resetAutoplay() {
    clearInterval(timer);
    if (reduceMotion || hovered || !inView) return;
    timer = setInterval(() => goTo(index + 1), 5500);
  }

  function goTo(i) {
    index = (i + slides.length) % slides.length;
    render();
    resetAutoplay();
  }

  prevBtn?.addEventListener("click", () => goTo(index - 1));
  nextBtn?.addEventListener("click", () => goTo(index + 1));

  carousel.addEventListener("mouseenter", () => {
    hovered = true;
    resetAutoplay();
  });
  carousel.addEventListener("mouseleave", () => {
    hovered = false;
    resetAutoplay();
  });

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      ([entry]) => {
        inView = entry.isIntersecting;
        resetAutoplay();
      },
      { threshold: 0.4 }
    );
    observer.observe(carousel);
  } else {
    inView = true;
    resetAutoplay();
  }

  render();
}
