import "./style.css";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { runPreloader } from "./modules/preloader.js";
import { initCursor } from "./modules/cursor.js";
import { initSmoothScroll } from "./modules/lenis-setup.js";
import { initNav } from "./modules/nav.js";
import { initReveal } from "./modules/reveal.js";
import { initHero, playHeroIntro } from "./modules/hero.js";
import { initProjects } from "./modules/projects.js";
import { initWorks } from "./modules/works.js";
import { initCounters } from "./modules/counters.js";
import { initReferences } from "./modules/references.js";
import { initMagnetic, initCopyEmail, initBackToTop } from "./modules/footer.js";

gsap.registerPlugin(ScrollTrigger);

const lenis = initSmoothScroll();

initHero();
initCursor();
initNav(lenis);
initReveal();
initProjects();
initWorks();
initCounters();
initReferences();
initMagnetic();
initCopyEmail();
initBackToTop(lenis);

lenis.stop();

runPreloader(() => {
  lenis.start();
  playHeroIntro();
  ScrollTrigger.refresh();
});

document.fonts?.ready.then(() => ScrollTrigger.refresh());
