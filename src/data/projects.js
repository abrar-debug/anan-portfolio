// Single source of truth for project content — the index hero and the detail
// page both render from this list. Point this at a CMS fetch later and
// neither page needs to change: same shape in, same shape out.
export const projects = [
  {
    slug: "meridian-house",
    number: "01",
    title: "Meridian House",
    category: "Residential",
    type: "Private Residence",
    year: "2024",
    description:
      "A courtyard house that turns inward, wrapping a single family around a garden of shadow and citrus.",
    longDescription:
      "Meridian House turns its back on the street and opens entirely onto a walled courtyard, where a single citrus tree marks the centre of the plan. Every room takes its light from the garden rather than the road, and the roofline steps down toward it, folding the house around a quiet, shaded core.",
    features: [
      "310 m² gross floor area",
      "Passive solar orientation",
      "Rammed-earth party walls",
      "Completed 2024",
    ],
    visual: "meridian",
  },
  {
    slug: "the-kiln-pavilion",
    number: "02",
    title: "The Kiln Pavilion",
    category: "Cultural",
    type: "Public Pavilion",
    year: "2023",
    description:
      "Seven brick arches recall the kilns once fired on this site, reframed as a gathering hall for the community that replaced them.",
    longDescription:
      "The pavilion sits on the footprint of a demolished brickworks, its seven arches a direct cast of the kiln openings once fired here. Reclaimed brick from the original structure lines the interior, and the hall now hosts markets, assemblies and the occasional wedding.",
    features: [
      "540 m² public hall",
      "90% reclaimed brick",
      "Passive stack ventilation",
      "Completed 2023",
    ],
    visual: "kiln",
  },
  {
    slug: "ridgeline-house",
    number: "03",
    title: "Ridgeline House",
    category: "Residential",
    type: "Private Residence",
    year: "2024",
    description:
      "A ridgeline silhouette split into three staggered volumes, each catching a different hour of light.",
    longDescription:
      "Set along an exposed ridge, the house is broken into three staggered blocks stepping down the slope, so no single volume blocks another's view. Board-formed concrete anchors the lower level; the upper two are clad in silvered timber that will weather to match the ridge itself.",
    features: [
      "285 m² gross floor area",
      "Board-formed concrete base",
      "Silvered timber cladding",
      "Completed 2024",
    ],
    visual: "concrete",
  },
  {
    slug: "threshold-cultural-center",
    number: "04",
    title: "Threshold Cultural Center",
    category: "Civic",
    type: "Cultural Institution",
    year: "2022",
    description:
      "A stepped civic building that terraces down to the waterline, blurring the edge between architecture and public stair.",
    longDescription:
      "Threshold Cultural Center reads as a single continuous stair, terracing from the street down to the water and doubling as an amphitheatre for the plaza it creates. Galleries and a reading room sit tucked beneath the steps, lit by long skylights cut into the treads above.",
    features: [
      "1,850 m² gross floor area",
      "Public amphitheatre stair",
      "Daylit subterranean galleries",
      "Completed 2022",
    ],
    visual: "threshold",
  },
  {
    slug: "harbor-light-studio",
    number: "05",
    title: "Harbor Light Studio",
    category: "Interiors",
    type: "Studio Fit-out",
    year: "2022",
    description:
      "A single-room studio wrapped in glass block, built to catch the harbor's reflected light all day.",
    longDescription:
      "The studio is a single volume wrapped almost entirely in glass block, chosen for the way it scatters the harbour's reflected light rather than admitting it directly. A working artist occupies it year-round, and the diffuse light changes character with the tide and the weather.",
    features: [
      "42 m² studio floor area",
      "Full-height glass block envelope",
      "Radiant floor heating",
      "Completed 2022",
    ],
    visual: "timber",
  },
  {
    slug: "cedar-court",
    number: "06",
    title: "Cedar Court",
    category: "Residential",
    type: "Multi-Unit Housing",
    year: "2021",
    description:
      "Twelve homes stacked around a shared timber stair, each with a private terrace cut deep enough to hold a table for six.",
    longDescription:
      "Cedar Court stacks twelve homes around a single open-air timber stair that doubles as the building's social spine. Every unit is cut back at a different depth, giving each a private terrace large enough for a table for six and a view that never quite repeats.",
    features: [
      "12 residential units",
      "Shared open-air timber stair",
      "Private terraces on every unit",
      "Completed 2021",
    ],
    visual: "cedar",
  },
  {
    slug: "salt-store-renovation",
    number: "07",
    title: "Salt Store Renovation",
    category: "Cultural",
    type: "Adaptive Reuse",
    year: "2023",
    description:
      "A derelict salt store re-timbered and re-roofed, left rough where the walls still remembered the work they once did.",
    longDescription:
      "The renovation kept the salt store's original masonry shell exactly as found, salt-stained and pitted, and rebuilt only what had failed: the roof, the floor and a new mezzanine in blackened steel. What was once storage is now a small cultural venue that wears its former life openly.",
    features: [
      "640 m² adaptive reuse",
      "Original masonry shell retained",
      "New blackened-steel mezzanine",
      "Completed 2023",
    ],
    visual: "brick",
  },
  {
    slug: "long-room-gallery",
    number: "08",
    title: "Long Room Gallery",
    category: "Interiors",
    type: "Gallery Fit-out",
    year: "2020",
    description: "A single top-lit room, ninety metres long, built to hold nothing but attention.",
    longDescription:
      "The gallery is one uninterrupted room, ninety metres end to end, lit entirely from above through a running skylight so no artificial light is needed by day. Nothing in the room competes with the work on its walls, down to the door hardware.",
    features: [
      "90 m running gallery length",
      "Continuous roof-line skylight",
      "Zero daytime artificial lighting",
      "Completed 2020",
    ],
    visual: "longroom",
  },
];

export function getProjectBySlug(slug) {
  return projects.find((p) => p.slug === slug);
}
