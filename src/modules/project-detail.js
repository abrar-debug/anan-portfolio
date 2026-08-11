import { projects, getProjectBySlug } from "../data/projects.js";
import { visuals } from "../data/visuals.js";

export function initProjectDetail() {
  const slug = new URLSearchParams(window.location.search).get("slug");
  const project = getProjectBySlug(slug) || projects[0];

  document.title = `${project.title} — Anan Hoque`;

  const visualHost = document.querySelector("[data-detail-visual]");
  if (visualHost) visualHost.insertAdjacentHTML("afterbegin", visuals[project.visual] || "");

  const metaEl = document.querySelector("[data-detail-meta]");
  const titleEl = document.querySelector("[data-detail-title]");
  const descEl = document.querySelector("[data-detail-description]");
  const featuresEl = document.querySelector("[data-detail-features]");

  if (metaEl) metaEl.textContent = `${project.category} — ${project.type} — ${project.year}`;
  if (titleEl) titleEl.textContent = project.title;
  if (descEl) descEl.textContent = project.longDescription;

  if (featuresEl) {
    project.features.forEach((feature) => {
      const li = document.createElement("li");
      li.textContent = feature;
      featuresEl.appendChild(li);
    });
  }
}
