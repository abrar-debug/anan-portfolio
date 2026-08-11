// Placeholder art standing in for real project photography.
// Swap each entry for an <img>/<picture> markup string once real images exist —
// nothing else in projects.js or project-detail.js needs to change.
export const visuals = {
  meridian: `
    <svg class="project-art" viewBox="0 0 400 300" fill="none">
      <path d="M40 40 H260 V140 H360 V260 H40 Z" />
      <rect x="90" y="90" width="120" height="120" />
      <circle cx="150" cy="150" r="18" />
      <path d="M260 140 A40 40 0 0 1 220 180" />
    </svg>
  `,
  kiln: `
    <svg class="project-art" viewBox="0 0 400 300" fill="none">
      <path d="M25 260 V180 A35 35 0 0 1 95 180 V260" />
      <path d="M115 260 V180 A35 35 0 0 1 185 180 V260" />
      <path d="M205 260 V180 A35 35 0 0 1 275 180 V260" />
      <path d="M295 260 V180 A35 35 0 0 1 365 180 V260" />
      <line x1="10" y1="260" x2="390" y2="260" />
    </svg>
  `,
  threshold: `
    <svg class="project-art" viewBox="0 0 400 300" fill="none">
      <rect x="40" y="200" width="320" height="60" />
      <rect x="80" y="150" width="240" height="50" />
      <rect x="120" y="100" width="160" height="50" />
      <rect x="160" y="60" width="80" height="40" />
    </svg>
  `,
  cedar: `
    <svg class="project-art" viewBox="0 0 400 300" fill="none">
      <rect x="60" y="40" width="280" height="220" />
      <line x1="60" y1="80" x2="340" y2="80" />
      <line x1="60" y1="120" x2="340" y2="120" />
      <line x1="60" y1="160" x2="340" y2="160" />
      <line x1="60" y1="200" x2="340" y2="200" />
      <line x1="200" y1="40" x2="200" y2="260" />
    </svg>
  `,
  longroom: `
    <svg class="project-art" viewBox="0 0 400 300" fill="none">
      <line x1="20" y1="240" x2="380" y2="240" />
      <path d="M40 240 L90 100 L140 240" />
      <path d="M150 240 L200 100 L250 240" />
      <path d="M260 240 L310 100 L360 240" />
      <rect x="80" y="90" width="20" height="10" />
      <rect x="190" y="90" width="20" height="10" />
      <rect x="300" y="90" width="20" height="10" />
    </svg>
  `,
  concrete: `<div class="hero-slide-hatch hatch-concrete"></div>`,
  timber: `<div class="hero-slide-hatch hatch-timber"></div>`,
  brick: `<div class="hero-slide-hatch hatch-brick"></div>`,
};
