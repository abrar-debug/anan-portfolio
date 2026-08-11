import "./style.css";

import { runPreloader } from "./modules/preloader.js";
import { initCursor } from "./modules/cursor.js";
import { initProjects } from "./modules/projects.js";

initCursor();

runPreloader(() => {
  initProjects();
});
