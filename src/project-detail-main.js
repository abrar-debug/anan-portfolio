import "./style.css";

import { runPreloader } from "./modules/preloader.js";
import { initCursor } from "./modules/cursor.js";
import { initProjectDetail } from "./modules/project-detail.js";

initCursor();
initProjectDetail();

runPreloader(() => {});
