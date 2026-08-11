import "./style.css";

import { runPreloader } from "./modules/preloader.js";
import { initCursor } from "./modules/cursor.js";
import { initReveal } from "./modules/reveal.js";
import { initProjectDetail } from "./modules/project-detail.js";
import { initMagnetic, initCopyEmail, initBackToTop } from "./modules/footer.js";

initCursor();
initProjectDetail();
initReveal();
initMagnetic();
initCopyEmail();
initBackToTop();

runPreloader(() => {});
