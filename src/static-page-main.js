import "./style.css";

import { runPreloader } from "./modules/preloader.js";
import { initCursor } from "./modules/cursor.js";
import { initReveal } from "./modules/reveal.js";
import { initMagnetic, initCopyEmail, initBackToTop } from "./modules/footer.js";

initCursor();
initReveal();
initMagnetic();
initCopyEmail();
initBackToTop();

runPreloader(() => {});
