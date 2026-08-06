export function initNav(lenis) {
  const nav = document.querySelector("[data-nav]");
  const progressFill = document.getElementById("nav-progress-fill");
  const toggle = document.getElementById("nav-toggle");
  const mobile = document.getElementById("nav-mobile");
  if (!nav) return;

  function onScroll() {
    nav.classList.toggle("is-scrolled", window.scrollY > 10);
    const max = document.documentElement.scrollHeight - window.innerHeight;
    const pct = max > 0 ? (window.scrollY / max) * 100 : 0;
    if (progressFill) progressFill.style.width = `${pct}%`;
  }
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  function closeMobile() {
    mobile?.classList.remove("is-open");
    toggle?.setAttribute("aria-expanded", "false");
    toggle?.setAttribute("aria-label", "Open menu");
    document.body.classList.remove("menu-open");
    document.body.style.overflow = "";
    lenis?.start();
  }

  toggle?.addEventListener("click", () => {
    const isOpen = mobile.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
    toggle.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
    document.body.classList.toggle("menu-open", isOpen);
    document.body.style.overflow = isOpen ? "hidden" : "";
    if (isOpen) lenis?.stop();
    else lenis?.start();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && mobile?.classList.contains("is-open")) {
      closeMobile();
    }
  });

  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (e) => {
      const id = link.getAttribute("href");
      if (!id || id.length < 2) return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      closeMobile();
      if (lenis) {
        lenis.scrollTo(target, { offset: -8, duration: 1.3 });
      } else {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
}
