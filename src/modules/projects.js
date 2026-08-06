import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function initProjects() {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const projects = document.querySelectorAll(".project");

  projects.forEach((project) => {
    const visual = project.querySelector(".project-visual");
    const art = project.querySelector(".project-art");
    const infoChildren = project.querySelectorAll(".project-info > *");

    if (reduceMotion) {
      if (visual) gsap.set(visual, { clipPath: "inset(0% 0% 0% 0%)" });
      return;
    }

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: project,
        start: "top 78%",
        toggleActions: "play none none reverse",
      },
    });

    if (visual) {
      tl.to(visual, { clipPath: "inset(0% 0% 0% 0%)", duration: 1.3, ease: "power3.inOut" }, 0);
    }
    if (infoChildren.length) {
      tl.fromTo(
        infoChildren,
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
            trigger: project,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    }
  });
}
